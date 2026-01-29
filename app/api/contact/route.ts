import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Lazily create Redis client and rate limiter to allow graceful handling of missing env vars
let ratelimit: Ratelimit | null = null

function getRateLimiter(): Ratelimit | null {
  if (ratelimit) return ratelimit
  
  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  
  if (!url || !token) {
    console.warn('Rate limiting disabled: KV_REST_API_URL or KV_REST_API_TOKEN not configured')
    return null
  }
  
  const redis = new Redis({ url, token })
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, '10 m'), // 3 requests per 10 minutes
    analytics: true,
  })
  
  return ratelimit
}

// Get client IP from request using Vercel-specific headers first
function getClientIp(request: NextRequest): string | null {
  // Vercel's reliable forwarded IP (cannot be spoofed by clients)
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for')
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(',')[0].trim()
  }
  
  // Standard forwarded header (set by reverse proxies)
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  
  // Real IP header
  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }
  
  return null
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIp(request)
    
    // Get rate limiter (may be null if not configured)
    const limiter = getRateLimiter()
    
    // Check rate limit if configured and IP is available
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
    
    // Parse the request body
    const body = await request.json()
    
    // Proxy request to Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/manrdjgv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    
    if (formspreeResponse.ok) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'submission_failed', message: 'Failed to submit form. Please try again.' },
        { status: formspreeResponse.status }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'server_error', message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
