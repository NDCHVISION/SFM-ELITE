'use client'

import { ArrowRight } from 'lucide-react'

// Centralized Atlas portal URL
export const ATLAS_PORTAL_URL = 'https://sankofafamilymedicine.atlas.md/hub/login'

interface PrimaryCTAProps {
  variant?: 'default' | 'hero' | 'compact'
  className?: string
  children?: React.ReactNode
}

export default function PrimaryCTA({ 
  variant = 'default', 
  className = '',
  children 
}: PrimaryCTAProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    bg-sfm-gold text-sfm-navy
    font-display font-semibold
    rounded-xl
    transition-all duration-300
    hover:bg-sfm-gold-light
    focus:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold focus-visible:ring-offset-2
  `

  const variants = {
    default: 'px-6 py-3 text-base shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5',
    hero: 'px-8 py-4 text-lg shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5',
    compact: 'px-5 py-2.5 text-sm shadow-md hover:shadow-lg',
  }

  return (
    <a
      href={ATLAS_PORTAL_URL}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label="Become a patient at Sankofa Family Medicine"
    >
      {children || 'Become a Patient'}
      <ArrowRight className="w-4 h-4" />
    </a>
  )
}

// Secondary CTA for alternate actions
interface SecondaryCTAProps {
  href: string
  variant?: 'light' | 'dark'
  className?: string
  children: React.ReactNode
}

export function SecondaryCTA({ 
  href, 
  variant = 'dark',
  className = '',
  children 
}: SecondaryCTAProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3
    font-display font-medium
    rounded-xl
    transition-all duration-300
    border
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  `

  const variants = {
    light: `
      bg-transparent text-white border-white/25
      hover:bg-white/10 hover:border-white/40
      focus-visible:ring-white
    `,
    dark: `
      bg-transparent text-sfm-navy border-sfm-border
      hover:bg-sfm-cream hover:border-sfm-azure hover:text-sfm-azure
      focus-visible:ring-sfm-azure
    `,
  }

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  )
}
