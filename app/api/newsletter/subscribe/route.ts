import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { Resend } from 'resend'
import { generateSubscriptionConfirmationEmail } from '@/components/emails/BlogNotificationEmail'
import { SITE_URL } from '@/lib/config'

// Redis key for storing subscribers
const SUBSCRIBERS_KEY = 'newsletter:subscribers'

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Validate email format
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
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

// Lazily create rate limiter
let ratelimit: Ratelimit | null = null

function getRateLimiter(): Ratelimit | null {
  if (ratelimit) return ratelimit
  
  const redis = getRedisClient()
  if (!redis) return null
  
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '10 m'), // 5 requests per 10 minutes
    analytics: true,
    prefix: 'newsletter:ratelimit',
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

// Generate unsubscribe URL with email token
function generateUnsubscribeUrl(email: string): string {
  // Use base64 encoding for the email to create a simple token
  const token = Buffer.from(email).toString('base64url')
  return `${SITE_URL}/api/newsletter/subscribe?action=unsubscribe&token=${token}`
}

// Send confirmation email to subscriber
async function sendConfirmationEmail(email: string): Promise<void> {
  const resend = getResendClient()
  
  if (!resend) {
    return
  }
  
  const unsubscribeUrl = generateUnsubscribeUrl(email)
  const htmlContent = generateSubscriptionConfirmationEmail(unsubscribeUrl)
  
  try {
    await resend.emails.send({
      from: 'Sankofa Family Medicine <newsletter@sankofafamilymedicine.com>',
      to: email,
      subject: 'Welcome to Sankofa Family Medicine Health Insights',
      html: htmlContent,
    })
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
  }
}

/**
 * POST - Subscribe to newsletter
 */
export async function POST(request: NextRequest) {
  try {
    const redis = getRedisClient()
    
    if (!redis) {
      return NextResponse.json(
        { error: 'service_unavailable', message: 'Newsletter service temporarily unavailable' },
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
    
    // Parse request body
    const body = await request.json()
    const { email } = body
    
    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'invalid_request', message: 'Email is required' },
        { status: 400 }
      )
    }
    
    const normalizedEmail = email.toLowerCase().trim()
    
    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { error: 'invalid_email', message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }
    
    // Check if already subscribed
    const isSubscribed = await redis.sismember(SUBSCRIBERS_KEY, normalizedEmail)
    
    if (isSubscribed) {
      return NextResponse.json(
        { success: true, message: 'You are already subscribed to our newsletter' },
        { status: 200 }
      )
    }
    
    // Add to subscribers list
    await redis.sadd(SUBSCRIBERS_KEY, normalizedEmail)
    
    // Send confirmation email (non-blocking)
    sendConfirmationEmail(normalizedEmail).catch((error) => {
      console.warn('Confirmation email failed for subscriber:', normalizedEmail, error)
    })
    
    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'server_error', message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

/**
 * GET - Handle unsubscribe via link click
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const token = searchParams.get('token')
    
    if (action !== 'unsubscribe' || !token) {
      return NextResponse.json(
        { error: 'invalid_request', message: 'Invalid unsubscribe link' },
        { status: 400 }
      )
    }
    
    const redis = getRedisClient()
    
    if (!redis) {
      return NextResponse.json(
        { error: 'service_unavailable', message: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }
    
    // Decode email from token
    let email: string
    try {
      email = Buffer.from(token, 'base64url').toString('utf-8')
    } catch {
      return NextResponse.json(
        { error: 'invalid_token', message: 'Invalid unsubscribe link' },
        { status: 400 }
      )
    }
    
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'invalid_token', message: 'Invalid unsubscribe link' },
        { status: 400 }
      )
    }
    
    // Remove from subscribers
    await redis.srem(SUBSCRIBERS_KEY, email.toLowerCase().trim())
    
    // Return a nice HTML page for unsubscribe confirmation
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed - Sankofa Family Medicine</title>
  <style>
    body {
      font-family: Georgia, 'Times New Roman', serif;
      background-color: #0a1628;
      color: #f0f4f8;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
    }
    .container {
      text-align: center;
      max-width: 500px;
      padding: 40px;
      background-color: #0f1f35;
      border-radius: 16px;
      border: 1px solid #2a4060;
    }
    h1 {
      color: #C9A227;
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      color: #a8b8c8;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    a {
      display: inline-block;
      padding: 12px 24px;
      background: linear-gradient(135deg, #C9A227 0%, #d4b048 100%);
      color: #0a1628;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>You've Been Unsubscribed</h1>
    <p>We're sorry to see you go. You will no longer receive newsletter emails from Sankofa Family Medicine.</p>
    <p>If you change your mind, you can always resubscribe on our blog page.</p>
    <a href="${SITE_URL}/blog">Visit Our Blog</a>
  </div>
</body>
</html>
    `
    
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'server_error', message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

/**
 * DELETE - Unsubscribe from newsletter (API method)
 */
export async function DELETE(request: NextRequest) {
  try {
    const redis = getRedisClient()
    
    if (!redis) {
      return NextResponse.json(
        { error: 'service_unavailable', message: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }
    
    // Parse request body
    const body = await request.json()
    const { email } = body
    
    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'invalid_request', message: 'Email is required' },
        { status: 400 }
      )
    }
    
    const normalizedEmail = email.toLowerCase().trim()
    
    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { error: 'invalid_email', message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }
    
    // Remove from subscribers
    const removed = await redis.srem(SUBSCRIBERS_KEY, normalizedEmail)
    
    if (removed === 0) {
      return NextResponse.json(
        { success: true, message: 'Email was not found in subscriber list' },
        { status: 200 }
      )
    }
    
    return NextResponse.json(
      { success: true, message: 'Successfully unsubscribed from newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'server_error', message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
