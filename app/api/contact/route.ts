import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { Resend } from 'resend'

// Type for contact form data
interface ContactFormData {
  email: string
  name?: string
  message?: string
  [key: string]: unknown
}

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// HTML escape function to prevent XSS in email templates
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char)
}

// Validate email format
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
}

// Lazily create Redis client and rate limiter to allow graceful handling of missing env vars
let ratelimit: Ratelimit | null = null

// Lazily create Resend client
let resendClient: Resend | null = null

function getResendClient(): Resend | null {
  if (resendClient) return resendClient
  
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.warn('Email confirmation disabled: RESEND_API_KEY not configured')
    return null
  }
  
  resendClient = new Resend(apiKey)
  return resendClient
}

// Send confirmation email to user
async function sendConfirmationEmail(email: string, name?: string): Promise<void> {
  const resend = getResendClient()
  
  if (!resend) {
    return
  }
  
  // Validate email format before attempting to send
  if (!isValidEmail(email)) {
    console.warn('Invalid email format, skipping confirmation email:', email)
    return
  }
  
  // Escape name to prevent XSS in email HTML
  const recipientName = escapeHtml(name || 'Valued Patient')
  
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Thank you for contacting Sankofa Family Medicine',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c5530;">Thank You for Reaching Out</h2>
          <p>Dear ${recipientName},</p>
          <p>Thank you for contacting Sankofa Family Medicine. We have received your message and truly appreciate you taking the time to reach out to us.</p>
          <p>Our team is committed to providing you with the best possible care and service. We will review your inquiry and respond within <strong>24 hours</strong>.</p>
          <p>If you have an urgent medical concern, please call our office directly or visit your nearest emergency room.</p>
          <p style="margin-top: 30px;">Warm regards,<br/>The Sankofa Family Medicine Team</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #666;">This is an automated confirmation email. Please do not reply directly to this message.</p>
        </div>
      `,
    })
  } catch (error) {
    // Log the error but don't throw - email failure shouldn't break form submission
    console.error('Failed to send confirmation email:', error)
  }
}

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
    const body = await request.json() as ContactFormData
    
    // Proxy request to Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/manrdjgv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    
    if (formspreeResponse.ok) {
      // Send confirmation email (don't await to avoid blocking response)
      // Email errors are handled gracefully inside the function
      if (body.email) {
        sendConfirmationEmail(body.email, body.name).catch(() => {
          // Error already logged in sendConfirmationEmail
        })
      }
      
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
