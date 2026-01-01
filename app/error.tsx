'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sfm-cream via-white to-sfm-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-lg mx-auto px-6 text-center py-20">
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
          Something Went Wrong
        </h1>
        
        <p className="text-muted text-lg mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn-primary"
            aria-label="Try again"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        
        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-10 p-4 bg-gray-100 rounded-lg text-left">
            <p className="text-xs font-mono text-gray-600 break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
