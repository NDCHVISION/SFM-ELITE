import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { Resend } from 'resend'
import { generateBlogNotificationEmail } from '@/components/emails/BlogNotificationEmail'
import { SITE_URL } from '@/lib/config'

// Redis key for storing subscribers
const SUBSCRIBERS_KEY = 'newsletter:subscribers'

// Blog post data interface
interface BlogPostData {
  title: string
  excerpt: string
  url: string
  author: string
  publishDate: string
}

// Validate blog post data
function isValidBlogPostData(data: unknown): data is BlogPostData {
  if (!data || typeof data !== 'object') return false
  
  const obj = data as Record<string, unknown>
  
  return (
    typeof obj.title === 'string' && obj.title.length > 0 &&
    typeof obj.excerpt === 'string' && obj.excerpt.length > 0 &&
    typeof obj.url === 'string' && obj.url.length > 0 &&
    typeof obj.author === 'string' && obj.author.length > 0 &&
    typeof obj.publishDate === 'string' && obj.publishDate.length > 0
  )
}

// Lazily create Redis client
let redisClient: Redis | null = null

function getRedisClient(): Redis | null {
  if (redisClient) return redisClient
  
  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  
  if (!url || !token) {
    console.warn('Redis disabled: KV_REST_API_URL or KV_REST_API_TOKEN not configured')
    return null
  }
  
  redisClient = new Redis({ url, token })
  return redisClient
}

// Lazily create rate limiter for API abuse prevention
let ratelimit: Ratelimit | null = null

function getRateLimiter(): Ratelimit | null {
  if (ratelimit) return ratelimit
  
  const redis = getRedisClient()
  if (!redis) return null
  
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '1 h'), // 10 requests per hour
    analytics: true,
    prefix: 'newsletter:send:ratelimit',
  })
  
  return ratelimit
}

// Lazily create Resend client
let resendClient: Resend | null = null

function getResendClient(): Resend | null {
  if (resendClient) return resendClient
  
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.warn('Email disabled: RESEND_API_KEY not configured')
    return null
  }
  
  resendClient = new Resend(apiKey)
  return resendClient
}

// Get client IP from request
function getClientIp(request: NextRequest): string | null {
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for')
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(',')[0].trim()
  }
  
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  
  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }
  
  return null
}

// Verify API key for authentication
function verifyApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get('x-api-key')
  const expectedKey = process.env.NEWSLETTER_API_KEY
  
  // If no API key is configured, allow requests (for development)
  if (!expectedKey) {
    console.warn('NEWSLETTER_API_KEY not configured - API is unprotected')
    return true
  }
  
  return apiKey === expectedKey
}

// Generate unsubscribe URL with email token
function generateUnsubscribeUrl(email: string): string {
  const token = Buffer.from(email).toString('base64url')
  return `${SITE_URL}/api/newsletter/subscribe?action=unsubscribe&token=${token}`
}

/**
 * POST - Send blog update notification to all subscribers
 * 
 * Request body:
 * {
 *   title: string,
 *   excerpt: string,
 *   url: string,
 *   author: string,
 *   publishDate: string
 * }
 * 
 * Headers:
 * x-api-key: Your newsletter API key (required if NEWSLETTER_API_KEY is set)
 */
export async function POST(request: NextRequest) {
  try {
    // Verify API key
    if (!verifyApiKey(request)) {
      return NextResponse.json(
        { error: 'unauthorized', message: 'Invalid or missing API key' },
        { status: 401 }
      )
    }
    
    const redis = getRedisClient()
    const resend = getResendClient()
    
    if (!redis) {
      return NextResponse.json(
        { error: 'service_unavailable', message: 'Redis service not available' },
        { status: 503 }
      )
    }
    
    if (!resend) {
      return NextResponse.json(
        { error: 'service_unavailable', message: 'Email service not available' },
        { status: 503 }
      )
    }
    
    // Rate limiting
    const ip = getClientIp(request)
    const limiter = getRateLimiter()
    
    if (limiter && ip) {
      const { success, limit, reset, remaining } = await limiter.limit(ip)
      
      if (!success) {
        return NextResponse.json(
          { 
            error: 'rate_limited',
            message: 'Too many requests. Please try again later.',
            retryAfter: Math.ceil((reset - Date.now()) / 1000),
          },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString(),
              'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
            },
          }
        )
      }
    }
    
    // Parse and validate request body
    const body = await request.json()
    
    if (!isValidBlogPostData(body)) {
      return NextResponse.json(
        { 
          error: 'invalid_request', 
          message: 'Missing or invalid blog post data. Required fields: title, excerpt, url, author, publishDate' 
        },
        { status: 400 }
      )
    }
    
    const { title, excerpt, url, author, publishDate } = body
    
    // Ensure URL is absolute and normalized
    const trimmedUrl = url.trim()
    const isAbsoluteUrl = /^https?:\/\//i.test(trimmedUrl)
    const fullUrl = isAbsoluteUrl ? trimmedUrl : `${SITE_URL}${trimmedUrl.startsWith('/') ? '' : '/'}${trimmedUrl}`
    
    // Get all subscribers
    const subscribers = await redis.smembers(SUBSCRIBERS_KEY)
    
    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json(
        { success: true, message: 'No subscribers to notify', sent: 0 },
        { status: 200 }
      )
    }
    
    // Send emails to all subscribers
    const results = {
      sent: 0,
      failed: 0,
      errors: [] as string[],
    }
    
    // Process subscribers in batches to avoid rate limits
    const BATCH_SIZE = 50
    const batches = []
    
    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      batches.push(subscribers.slice(i, i + BATCH_SIZE))
    }
    
    for (const batch of batches) {
      const emailPromises = batch.map(async (email) => {
        // Ensure email is a string (handle edge case where Redis might return non-string)
        if (typeof email !== 'string') {
          results.failed++
          return
        }
        
        const unsubscribeUrl = generateUnsubscribeUrl(email)
        const htmlContent = generateBlogNotificationEmail({
          title,
          excerpt,
          url: fullUrl,
          author,
          publishDate,
          unsubscribeUrl,
        })
        
        try {
          await resend.emails.send({
            from: 'Sankofa Family Medicine <newsletter@sankofafamilymedicine.com>',
            to: email,
            subject: `New Article: ${title}`,
            html: htmlContent,
            headers: {
              'List-Unsubscribe': `<${unsubscribeUrl}>`,
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
            },
          })
          results.sent++
        } catch (error) {
          results.failed++
          const errorMessage = error instanceof Error ? error.message : 'Unknown error'
          results.errors.push(`Failed to send to ${email}: ${errorMessage}`)
        }
      })
      
      await Promise.all(emailPromises)
      
      // Small delay between batches to respect rate limits
      if (batches.indexOf(batch) < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    }
    
    // Log results for debugging
    console.log('Newsletter send results:', {
      totalSubscribers: subscribers.length,
      sent: results.sent,
      failed: results.failed,
    })
    
    // Return detailed response
    return NextResponse.json(
      {
        success: true,
        message: `Newsletter sent to ${results.sent} subscribers`,
        totalSubscribers: subscribers.length,
        sent: results.sent,
        failed: results.failed,
        ...(results.errors.length > 0 && { errors: results.errors.slice(0, 10) }), // Limit errors in response
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter send error:', error)
    return NextResponse.json(
      { error: 'server_error', message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
