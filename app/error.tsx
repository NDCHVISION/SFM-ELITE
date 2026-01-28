'use client'

import { useEffect, useId } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RefreshCw, Home, AlertTriangle, Phone, Mail } from 'lucide-react'

// =============================================================================
// ERROR PAGE (CLIENT)
// Washington State Healthcare Compliance Notes:
// - No clinical advice or promises on error pages
// - Clear emergency disclaimer always visible
// - Contact information for patient support
// - WCAG 2.1 AA compliant
// - Brand-consistent design
// =============================================================================

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const headingId = useId()
  const descriptionId = useId()

  useEffect(() => {
    // Log error for monitoring (production error service integration point)
    console.error('Application error:', error)
  }, [error])

  return (
    <main
      role="main"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sfm-cream via-white to-sfm-cream relative overflow-hidden"
    >
      {/* Skip link for keyboard users */}
      <a
        href="#error-actions"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sfm-gold focus:text-sfm-navy focus:rounded-lg focus:font-medium"
      >
        Skip to actions
      </a>

      {/* Decorative backgrounds */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-lg mx-auto px-6 text-center py-20">
        {/* Brand mark for continuity */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/comettrans.png"
            alt=""
            width={40}
            height={40}
            className="opacity-40"
            aria-hidden="true"
          />
        </div>

        {/* Error icon with proper accessibility */}
        <div
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center"
          role="img"
          aria-label="Error indicator"
        >
          <AlertTriangle className="w-10 h-10 text-red-500" aria-hidden="true" />
        </div>

        {/* Main heading */}
        <h1
          id={headingId}
          className="font-display text-3xl md:text-4xl text-sfm-navy mb-4"
        >
          Something Went Wrong
        </h1>

        {/* Description */}
        <p
          id={descriptionId}
          className="text-sfm-navy/70 text-lg mb-8 max-w-md mx-auto leading-relaxed"
        >
          We apologize for the inconvenience. This error has been logged. Please
          try again or return to the homepage.
        </p>

        {/* Action buttons */}
        <div
          id="error-actions"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-navy text-white font-medium rounded-xl hover:bg-sfm-azure transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2"
            aria-label="Try loading the page again"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-sfm-navy text-sfm-navy font-medium rounded-xl hover:bg-sfm-navy hover:text-white transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>

        {/* Contact information for patient support */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-sfm-border-light mb-8">
          <p className="text-sfm-navy/80 text-base mb-4">
            Need assistance? Contact us directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base">
            <a
              href="tel:+14252857390"
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded"
              aria-label="Call us at 425-285-7390"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(425) 285-7390</span>
            </a>
            <span className="hidden sm:block text-sfm-navy/30" aria-hidden="true">|</span>
            <a
              href="mailto:info@sankofafamilymedicine.com"
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded"
              aria-label="Email us at info@sankofafamilymedicine.com"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>info@sankofafamilymedicine.com</span>
            </a>
          </div>
        </div>

        {/* Emergency disclaimer - REQUIRED for healthcare sites */}
        <div
          className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left"
          role="alert"
          aria-live="polite"
        >
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Not for emergencies.</strong> If you are experiencing a
            medical emergency, call{' '}
            <a
              href="tel:911"
              className="font-semibold underline hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
            >
              911
            </a>{' '}
            or go to the nearest emergency department immediately.
          </p>
        </div>

        {/* Error details (development only) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <details className="mt-8 text-left">
            <summary className="text-sm text-sfm-navy/50 cursor-pointer hover:text-sfm-navy/70 focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded">
              Technical details (development only)
            </summary>
            <div className="mt-2 p-4 bg-gray-100 rounded-lg">
              <p className="text-xs font-mono text-gray-600 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs font-mono text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          </details>
        )}

        {/* Footer note */}
        <p className="text-sfm-navy/40 text-sm mt-8">
          Sankofa Family Medicine serves patients in Washington State only.
        </p>
      </div>
    </main>
  )
}

