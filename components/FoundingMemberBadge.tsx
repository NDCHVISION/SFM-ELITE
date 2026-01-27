'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FoundingMemberBadge() {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null)
  const totalSpots = 30

  useEffect(() => {
    // TODO: Replace with API call to fetch current available spots
    // Expected API response: { spotsRemaining: number }
    // Endpoint: /api/founding-members/spots
    // For now, set to 30 (all spots available)
    setSpotsLeft(30)
  }, [])

  if (spotsLeft === null) return null

  return (
    <div className="flex flex-col items-center gap-3 mb-12">
      {/* Badge with counter */}
      <Link 
        href="/membership-terms#founding-member-program"
        className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-sfm-navy/10 border border-sfm-gold backdrop-blur-sm hover:bg-sfm-navy/20 hover:border-sfm-gold/80 transition-all duration-300 group"
        aria-label="Learn more about Founding Member Program"
      >
        <div className="flex items-center gap-2">
          {/* Pulsing dot indicator */}
          <div className="relative">
            <div className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse-slow" />
            <div className="absolute inset-0 w-2 h-2 bg-sfm-gold rounded-full animate-pulse-slow opacity-75" />
          </div>
          
          {/* Badge text */}
          <span className="text-white/80 text-sm font-medium tracking-wide uppercase group-hover:text-sfm-gold transition-colors">
            Founders waitlist capacity: about 30
          </span>
        </div>
      </Link>

      {/* Disclaimer text */}
      <p className="text-sfm-text-muted text-xs max-w-2xl text-center">
        Waitlist capacity tracking. Enrollment begins February 2026.
      </p>
    </div>
  )
}
