'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FOUNDERS_WAITLIST_URL } from './PrimaryCTA'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show after scrolling down 300px
      if (currentScrollY > 300) {
        // Hide when scrolling down quickly, show when scrolling up or stopped
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Debounce scroll handler
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollListener, { passive: true })
    return () => window.removeEventListener('scroll', scrollListener)
  }, [lastScrollY])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Gradient fade effect */}
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      {/* CTA Container */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-sfm-gold/10 shadow-[0_-4px_20px_rgba(5,28,59,0.1)] px-4 py-3 safe-area-inset-bottom">
        <a
          href={FOUNDERS_WAITLIST_URL}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-sfm-gold to-sfm-gold-light 
            text-sfm-navy font-bold rounded-xl shadow-lg shadow-sfm-gold/25 
            active:scale-[0.98] transition-transform group"
          aria-label="Join the founders waitlist at Sankofa Family Medicine"
        >
          <span>Join the Founders Waitlist</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        
        {/* Trust indicator */}
        <div className="flex items-center justify-center gap-4 mt-2 text-xs text-sfm-text-muted">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            Accepting patients
          </span>
          <span className="w-px h-3 bg-gray-200" />
          <span>Secure portal enrollment</span>
        </div>
      </div>
    </div>
  )
}
