'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 600
      setIsVisible(window.scrollY > scrollThreshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      <div className="bg-white border-t border-gray-100 px-4 py-4 pb-safe">
        <Link 
          href="/contact" 
          className="w-full flex items-center justify-center gap-2 bg-sfm-gold text-sfm-navy font-semibold py-4 rounded-lg"
        >
          <span>Request Enrollment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
