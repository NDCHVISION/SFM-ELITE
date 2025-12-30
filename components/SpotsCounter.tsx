'use client'

import { useState, useEffect } from 'react'
import { Circle } from 'lucide-react'

interface SpotsCounterProps {
  variant?: 'default' | 'inline' | 'hero'
}

export default function SpotsCounter({ variant = 'default' }: SpotsCounterProps) {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null)
  const totalSpots = 30

  useEffect(() => {
    // In production, fetch from API
    // Replace with actual count when members join
    setSpotsLeft(30)
  }, [])

  if (spotsLeft === null) return null

  const percentageFilled = ((totalSpots - spotsLeft) / totalSpots) * 100

  // Inline variant - simple text
  if (variant === 'inline') {
    return (
      <span className="text-sfm-text-muted text-sm">
        {spotsLeft} of {totalSpots} founding member spots available
      </span>
    )
  }

  // Hero variant - prominent but calm display
  if (variant === 'hero') {
    return (
      <div className="inline-flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-medium bg-sfm-gold/10 border border-sfm-gold/30 text-sfm-gold-dark">
          <Circle className="w-2 h-2 fill-sfm-gold text-sfm-gold" />
          <span className="text-2xl font-display">{spotsLeft}</span>
          <span className="text-sm">founding spots remaining</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full max-w-xs">
          <div className="w-full h-1.5 bg-sfm-gold/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sfm-gold to-sfm-gold-light transition-all duration-1000 ease-out"
              style={{ width: `${percentageFilled}%` }}
            />
          </div>
          <p className="text-xs text-center text-sfm-text-muted mt-2">
            {totalSpots - spotsLeft} of {totalSpots} claimed
          </p>
        </div>
      </div>
    )
  }

  // Default variant - understated badge
  return (
    <div className="group">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm bg-sfm-gold/10 border border-sfm-gold/30 text-sfm-gold-dark transition-colors">
        <Circle className="w-1.5 h-1.5 fill-sfm-gold text-sfm-gold" aria-hidden="true" />
        <span className="font-semibold">{spotsLeft}</span>
        <span className="text-xs">founding {spotsLeft === 1 ? 'spot' : 'spots'} remaining</span>
      </div>

      {/* Progress bar (visible on hover) */}
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
        <div className="w-full h-1.5 bg-sfm-gold/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sfm-gold to-sfm-gold-light transition-all duration-500"
            style={{ width: `${percentageFilled}%` }}
            role="progressbar"
            aria-valuenow={totalSpots - spotsLeft}
            aria-valuemin={0}
            aria-valuemax={totalSpots}
            aria-label={`${spotsLeft} founding spots remaining`}
          />
        </div>
      </div>
    </div>
  )
}
