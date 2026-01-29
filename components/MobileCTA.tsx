'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FOUNDERS_WAITLIST_URL } from './PrimaryCTA'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const lastScrollYRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const lastScrollY = lastScrollYRef.current

      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      } else {
        setIsVisible(false)
      }

      lastScrollYRef.current = currentScrollY
      rafRef.current = null
    }

    const scrollListener = () => {
      if (rafRef.current != null) return
      rafRef.current = window.requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', scrollListener, { passive: true })

    return () => {
      window.removeEventListener('scroll', scrollListener)
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      role="region"
      aria-label="Founders waitlist call to action"
    >
      {/* Gradient fade effect */}
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* CTA Container */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-sfm-gold/10 shadow-[0_-4px_20px_rgba(5,28,59,0.1)] px-4 py-3 safe-area-inset-bottom">
        <a
          href={FOUNDERS_WAITLIST_URL}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-sfm-gold to-sfm-gold-light
            text-sfm-navy font-bold rounded-xl shadow-lg shadow-sfm-gold/25
            active:scale-[0.98] transition-transform group focus:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold focus-visible:ring-offset-2"
          aria-label="Join the founders waitlist at Sankofa Family Medicine"
        >
          <span>Join the Founders Waitlist</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>

        {/* Trust indicator – compliance-safe */}
        <div className="flex items-center justify-center gap-4 mt-2 text-xs text-sfm-text-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" aria-hidden="true" />
            Enrollment begins early 2026
          </span>
          <span className="w-px h-3 bg-gray-200" aria-hidden="true" />
          <span>No payment to join</span>
        </div>

        {/* Screen reader-only clarity */}
        <span className="sr-only">
          This is a founders waitlist request. Sankofa Family Medicine does not provide emergency care.
        </span>
      </div>
    </div>
  )
}
