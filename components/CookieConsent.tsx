'use client'

/**
 * CookieConsent Component
 *
 * Privacy Compliance: GDPR/CCPA-style cookie consent banner.
 * Integrates with ConditionalAnalytics via custom events.
 *
 * Features:
 * - "Accept All" enables analytics cookies
 * - "Essential Only" disables analytics cookies
 * - Consent persisted to localStorage with timestamp
 * - Exports utility functions for checking/resetting consent
 * - CookieSettingsButton for footer (allows users to change preference)
 *
 * Integration:
 * - Place <CookieConsent /> in layout.tsx
 * - Place <CookieSettingsButton /> in Footer for consent management
 * - ConditionalAnalytics listens for 'sfm-consent-updated' event
 */

import { useEffect, useState } from 'react'
import { X, Cookie, Settings } from 'lucide-react'
import Link from 'next/link'

/* Constants - must match ConditionalAnalytics */
const CONSENT_KEY = 'sfm-cookie-consent'
const CONSENT_DATE_KEY = 'sfm-cookie-consent-date'
const CONSENT_UPDATED_EVENT = 'sfm-consent-updated'
const CONSENT_RESET_EVENT = 'sfm-cookie-consent-reset'

/* Type for consent values */
type ConsentValue = 'all' | 'essential' | null

/* Type-safe gtag access (optional, kept for future GA use) */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Check current consent status
 * @returns 'all' | 'essential' | null
 */
export function getCookieConsent(): ConsentValue {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CONSENT_KEY) as ConsentValue
}

/**
 * Reset cookie consent - reopens the banner
 * Useful for footer "Cookie Settings" link
 */
export function resetCookieConsent(): void {
  if (typeof window === 'undefined') return

  localStorage.removeItem(CONSENT_KEY)
  localStorage.removeItem(CONSENT_DATE_KEY)

  // Dispatch events so UI + analytics react immediately
  window.dispatchEvent(new CustomEvent(CONSENT_RESET_EVENT))
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT))

  // Update gtag consent to denied if gtag exists (explicit)
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
    })
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    let timer: ReturnType<typeof setTimeout> | null = null

    // Delay showing banner for better UX
    if (!consent) {
      timer = setTimeout(() => setIsVisible(true), 1500)
    }

    // Listen for consent reset events (from CookieSettingsButton)
    const handleConsentReset = () => {
      setIsVisible(true)
    }

    window.addEventListener(CONSENT_RESET_EVENT, handleConsentReset)

    return () => {
      if (timer) clearTimeout(timer)
      window.removeEventListener(CONSENT_RESET_EVENT, handleConsentReset)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'all')
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString())
    setIsVisible(false)

    // Notify ConditionalAnalytics immediately
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT))

    // Enable analytics if gtag is available (explicitly deny ads)
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
      })
    }
  }

  const acceptEssential = () => {
    localStorage.setItem(CONSENT_KEY, 'essential')
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString())
    setIsVisible(false)

    // Notify ConditionalAnalytics immediately
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT))

    // Ensure analytics is denied
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      })
    }
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6 animate-fade-in-up motion-reduce:animate-none"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 bg-sfm-gold/10 rounded-xl flex items-center justify-center"
              aria-hidden="true"
            >
              <Cookie className="w-5 h-5 text-sfm-gold" />
            </div>

            <div className="flex-1">
              <h3 id="cookie-consent-title" className="font-display text-lg text-sfm-navy mb-2">
                We value your privacy
              </h3>

              <p id="cookie-consent-description" className="text-sm text-sfm-text-muted mb-4">
                We use cookies to improve your experience and analyze site traffic for performance purposes only (not
                advertising). By clicking &quot;Accept All&quot;, you consent to analytics cookies. Read our{' '}
                <Link
                  href="/privacy#website-analytics-and-cookies"
                  className="text-sfm-azure hover:underline focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-1 rounded"
                >
                  Privacy Policy
                </Link>{' '}
                to learn more about what data we collect.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-sfm-gold text-sfm-navy font-semibold rounded-lg hover:bg-sfm-gold-light transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2"
                >
                  Accept All
                </button>

                <button
                  onClick={acceptEssential}
                  className="px-6 py-2.5 border border-gray-200 text-sfm-text-muted font-medium rounded-lg hover:bg-gray-50 transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2"
                >
                  Essential Only
                </button>
              </div>
            </div>

            <button
              onClick={acceptEssential}
              className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded-lg"
              aria-label="Close cookie banner (Essential cookies only)"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Cookie Settings Button for footer
 * Resets consent and reopens the banner
 *
 * Note: Default styling is for dark backgrounds.
 * Pass className to override for light backgrounds.
 */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      onClick={resetCookieConsent}
      className={
        className ||
        'inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 focus:ring-offset-sfm-navy rounded'
      }
      aria-label="Open cookie settings"
    >
      <Settings className="w-3.5 h-3.5" aria-hidden="true" />
      Cookie Settings
    </button>
  )
}
