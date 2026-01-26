'use client'

import { useState, useEffect } from 'react'

export default function FoundingMemberBadge() {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null)
  const totalSpots = 30

  useEffect(() => {
    // In production, this would fetch from an API
    // For now, set to 30 (all spots available)
    setSpotsLeft(30)
  }, [])

  if (spotsLeft === null) return null

  return (
    <div className="flex flex-col items-center gap-3 mb-12">
      {/* Badge with counter */}
      <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-sfm-navy/10 border border-sfm-gold backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {/* Pulsing dot indicator */}
          <div className="relative">
            <div className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse-slow" />
            <div className="absolute inset-0 w-2 h-2 bg-sfm-gold rounded-full animate-ping opacity-75" 
                 style={{ animationDuration: '3s' }} />
          </div>
          
          {/* Badge text */}
          <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
            Founding Member Spots
          </span>
        </div>
        
        {/* Counter */}
        <div className="pl-3 border-l border-sfm-gold/30">
          <span className="text-sfm-gold text-lg font-semibold">
            {spotsLeft} of {totalSpots}
          </span>
          <span className="text-white/60 text-sm ml-2">
            remaining
          </span>
        </div>
      </div>

      {/* Disclaimer text */}
      <p className="text-sfm-text-muted text-xs max-w-2xl text-center">
        Founding Member enrollment closes when all {totalSpots} positions are filled or at general launch, whichever comes first.
      </p>
    </div>
  )
}
