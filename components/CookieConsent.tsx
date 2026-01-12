'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Cookie, Settings } from 'lucide-react'
import Link from 'next/link'

// Export a function to check current consent status
export function getCookieConsent(): 'all' | 'essential' | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('sfm-cookie-consent') as 'all' | 'essential' | null
}

// Export a function to reset cookie consent (useful for footer link)
export function resetCookieConsent(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('sfm-cookie-consent')
  localStorage.removeItem('sfm-cookie-consent-date')
  
  // Dispatch a custom event to notify the banner to show
  window.dispatchEvent(new CustomEvent('sfm-cookie-consent-reset'))
  
  // Update gtag consent to denied if gtag exists
  if ((window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: 'denied'
    })
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  const checkAndShowBanner = useCallback(() => {
    const consent = localStorage.getItem('sfm-cookie-consent')
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Initial check
    checkAndShowBanner()

    // Listen for consent reset events
    const handleConsentReset = () => {
      setIsVisible(true)
    }
    
    window.addEventListener('sfm-cookie-consent-reset', handleConsentReset)
    
    return () => {
      window.removeEventListener('sfm-cookie-consent-reset', handleConsentReset)
    }
  }, [checkAndShowBanner])

  const acceptAll = () => {
    localStorage.setItem('sfm-cookie-consent', 'all')
    localStorage.setItem('sfm-cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    
    // Enable analytics if gtag is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const acceptEssential = () => {
    localStorage.setItem('sfm-cookie-consent', 'essential')
    localStorage.setItem('sfm-cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    
    // Ensure analytics is denied
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-sfm-gold/10 rounded-xl flex items-center justify-center">
              <Cookie className="w-5 h-5 text-sfm-gold" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-display text-lg text-sfm-navy mb-2">
                We value your privacy
              </h3>
              <p className="text-sm text-sfm-text-muted mb-4">
                We use cookies to improve your experience and analyze site traffic for performance purposes only (not advertising). 
                By clicking &quot;Accept All&quot;, you consent to analytics cookies. 
                Read our{' '}
                <Link href="/privacy#website-analytics-and-cookies" className="text-sfm-azure hover:underline">
                  Privacy Policy
                </Link>{' '}
                to learn more about what data we collect.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-sfm-gold text-sfm-navy font-semibold rounded-lg hover:bg-sfm-gold-light transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-6 py-2.5 border border-gray-200 text-sfm-text-muted font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Essential Only
                </button>
              </div>
            </div>

            <button
              onClick={acceptEssential}
              className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close cookie banner (Essential cookies only)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Cookie Settings Button component for footer
export function CookieSettingsButton() {
  const handleClick = () => {
    resetCookieConsent()
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
      aria-label="Open cookie settings"
    >
      <Settings className="w-3.5 h-3.5" />
      Cookie Settings
    </button>
  )
}
