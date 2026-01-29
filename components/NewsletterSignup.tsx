'use client'

import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'

interface NewsletterSignupProps {
  /** Optional custom headline */
  headline?: string
  /** Optional custom description */
  description?: string
  /** Optional custom class name for the container */
  className?: string
  /** Variant for different visual styles */
  variant?: 'default' | 'dark'
}

export default function NewsletterSignup({
  headline = 'Stay Informed',
  description = 'Subscribe to our newsletter for precision medicine articles, wellness updates, and exclusive insights from Dr. Nkrumah.',
  className = '',
  variant = 'dark',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!consent) {
      setError('Please agree to receive updates to continue.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setEmail('')
        setConsent(false)
        // Track conversion event
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'newsletter_signup', {
            event_category: 'conversion',
            event_label: 'newsletter_subscription',
          })
        }
      } else if (response.status === 429) {
        setError('Too many requests. Please try again later.')
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDark = variant === 'dark'

  // Success state
  if (isSuccess) {
    return (
      <div className={`${className} text-center py-8`}>
        <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className={`font-display text-2xl mb-2 ${isDark ? 'text-white' : 'text-sfm-navy'}`}>
          You&apos;re Subscribed!
        </h3>
        <p className={`${isDark ? 'text-white/70' : 'text-sfm-text-muted'}`}>
          Thank you for subscribing. We&apos;ll send you quality health insights.
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${isDark ? 'bg-sfm-gold/20' : 'bg-sfm-gold/10'}`}>
          <Mail className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
        </div>
        <h2 className={`font-display text-2xl md:text-3xl mb-3 ${isDark ? 'text-white' : 'text-sfm-navy'}`}>
          {headline}
        </h2>
        <p className={`max-w-lg mx-auto ${isDark ? 'text-white/70' : 'text-sfm-text-muted'}`}>
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            aria-describedby={error ? 'newsletter-error' : undefined}
            className={`flex-1 px-6 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sfm-gold/50 ${
              isDark
                ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-sfm-gold'
                : 'bg-white border-gray-200 text-sfm-navy placeholder-gray-400 focus:border-sfm-gold'
            }`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-sfm-gold text-sfm-navy font-semibold rounded-lg hover:bg-sfm-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Subscribing...
              </span>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {/* Consent checkbox */}
        <div className="flex items-start gap-3 justify-center text-left max-w-sm mx-auto mb-4">
          <input
            type="checkbox"
            id="newsletter-consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className={`mt-1 w-4 h-4 rounded border cursor-pointer text-sfm-gold focus:ring-sfm-gold/20 ${
              isDark ? 'border-white/30 bg-white/10' : 'border-gray-300'
            }`}
          />
          <label
            htmlFor="newsletter-consent"
            className={`text-xs cursor-pointer leading-relaxed ${isDark ? 'text-white/60' : 'text-sfm-text-muted'}`}
          >
            I agree to receive email updates from Sankofa Family Medicine. I can unsubscribe at any time.
          </label>
        </div>

        {/* Error message */}
        {error && (
          <div
            id="newsletter-error"
            role="alert"
            className="flex items-center justify-center gap-2 text-rose-400 text-sm mb-4"
          >
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            <span>{error}</span>
          </div>
        )}

        {/* Privacy note */}
        <p className={`text-xs text-center ${isDark ? 'text-white/50' : 'text-sfm-text-muted'}`}>
          No spam, just quality health content. Your privacy is respected.
        </p>
      </form>
    </div>
  )
}
