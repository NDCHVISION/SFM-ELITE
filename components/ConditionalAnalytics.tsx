'use client'

/**
 * ConditionalAnalytics Component
 *
 * Privacy Compliance: Loads analytics ONLY after user grants cookie consent.
 * Required for HIPAA best practices and privacy regulation compliance.
 *
 * How it works:
 * 1. Checks localStorage for 'sfm-cookie-consent' value
 * 2. Only renders Analytics/SpeedInsights if consent === 'all'
 * 3. Listens for consent changes via storage events and custom events
 *
 * Debug Mode:
 * - In development, logs consent status changes to console
 * - Prefix: [ConditionalAnalytics]
 *
 * Integration:
 * - Replace direct <Analytics /> with <ConditionalAnalytics /> in layout.tsx
 * - CookieConsent component must dispatch 'sfm-consent-updated' event on consent change
 *
 * @example
 * // In CookieConsent.tsx after setting localStorage:
 * localStorage.setItem('sfm-cookie-consent', 'all')
 * window.dispatchEvent(new CustomEvent('sfm-consent-updated'))
 */

import { useCallback, useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const CONSENT_KEY = 'sfm-cookie-consent'
const CONSENT_VALUE = 'all'
const CONSENT_EVENT = 'sfm-consent-updated'
const DEBUG = process.env.NODE_ENV === 'development'

/** Debug logger - only logs in development */
const log = (message: string, data?: unknown) => {
  if (!DEBUG) return
  if (data !== undefined) {
    console.log(`[ConditionalAnalytics] ${message}`, data)
  } else {
    console.log(`[ConditionalAnalytics] ${message}`)
  }
}

export default function ConditionalAnalytics() {
  const [enabled, setEnabled] = useState(false)

  const readConsent = useCallback(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY)
      const ok = consent === CONSENT_VALUE
      setEnabled(ok)
      log('Consent read', { consent, enabled: ok })
    } catch (err) {
      setEnabled(false)
      log('Consent read failed', err)
    }
  }, [])

  useEffect(() => {
    readConsent()

    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY) {
        log('Storage event', { oldValue: e.oldValue, newValue: e.newValue })
        readConsent()
      }
    }

    const onConsentUpdated = () => {
      log('Custom consent event received')
      readConsent()
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(CONSENT_EVENT, onConsentUpdated as EventListener)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(CONSENT_EVENT, onConsentUpdated as EventListener)
    }
  }, [readConsent])

  /* Privacy: Don't render analytics without explicit consent */
  if (!enabled) return null

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
