'use client'

import { AlertCircle } from 'lucide-react'

interface MedicalDisclaimerProps {
  variant?: 'inline' | 'banner' | 'footer'
  className?: string
}

export default function MedicalDisclaimer({ 
  variant = 'inline',
  className = '' 
}: MedicalDisclaimerProps) {
  const baseContent = (
    <>
      <strong>Medical Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider for medical concerns. If you are experiencing a medical emergency, call 911 immediately.
    </>
  )

  if (variant === 'banner') {
    return (
      <div className={`bg-sfm-cream/60 border-y border-sfm-gold/10 py-2 ${className}`}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] text-sfm-navy/50 text-center leading-tight opacity-80">
            {baseContent}
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={`text-xs text-sfm-navy/50 leading-relaxed ${className}`}>
        {baseContent}
      </div>
    )
  }

  // Default: inline
  return (
    <div className={`flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl ${className}`}>
      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
      <p className="text-sm text-amber-800 leading-relaxed">
        {baseContent}
      </p>
    </div>
  )
}
