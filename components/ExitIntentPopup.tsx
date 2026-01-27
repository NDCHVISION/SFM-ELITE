'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Calendar, Mail, ArrowRight, CheckCircle2, Heart } from 'lucide-react'
import { FOUNDERS_WAITLIST_URL } from './PrimaryCTA'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasShown) {
      setIsVisible(true)
      setHasShown(true)
      sessionStorage.setItem('sfm-exit-shown', 'true')
    }
  }, [hasShown])

  useEffect(() => {
    if (sessionStorage.getItem('sfm-exit-shown')) {
      setHasShown(true)
      return
    }
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseLeave])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      setError('Please agree to receive updates to continue.')
      return
    }
    setIsSubmitting(true)
    setError('')
    try {
      const response = await fetch('https://formspree.io/f/manrdjgv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          consent: true,
          source: 'exit-intent-popup',
          timestamp: new Date().toISOString()
        }),
      })
      if (response.ok) {
        setIsSuccess(true)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lead_capture', {
            event_category: 'conversion',
            event_label: 'exit_intent_popup'
          })
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => setIsVisible(false)

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sfm-navy/60 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-1.5 bg-gradient-to-r from-sfm-gold via-sfm-gold-light to-sfm-gold" />

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-display text-2xl text-sfm-navy mb-2">You are on the list!</h3>
              <p className="text-sfm-text-muted mb-6">We will send you founding member updates.</p>
              <a
                href={FOUNDERS_WAITLIST_URL}
                className="inline-flex items-center gap-2 text-sfm-azure font-medium hover:text-sfm-gold transition-colors"
              >
                Or reserve a founders spot now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ) : showEmailForm ? (
            <>
              <button
                onClick={() => setShowEmailForm(false)}
                className="text-sfm-azure text-sm mb-4 hover:text-sfm-navy transition-colors"
              >
                ← Back
              </button>
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl text-sfm-navy mb-2">Stay Updated</h3>
                <p className="text-sfm-text-muted text-sm">Get founding member news and availability updates.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sfm-gold/50 focus:border-sfm-gold transition-all"
                />
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="exit-consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-sfm-gold focus:ring-sfm-gold/20 cursor-pointer"
                    required
                  />
                  <label htmlFor="exit-consent" className="text-xs text-sfm-text-muted cursor-pointer leading-relaxed">
                    I agree to receive email updates. Unsubscribe anytime.
                  </label>
                </div>
                {error && <p className="text-rose-600 text-sm text-center">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Joining...' : <><span>Get Updates</span><ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-sfm-navy mb-3">A Moment Before You Leave</h3>
                <p className="text-sfm-text-muted">We would welcome the opportunity to care for you.</p>
              </div>
              <a
                href={FOUNDERS_WAITLIST_URL}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors mb-4"
              >
                <Heart className="w-5 h-5" />
                Join the Founders Waitlist
              </a>
              <button
                onClick={() => setShowEmailForm(true)}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-200 text-sfm-text-muted font-medium rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Receive occasional updates
              </button>
              <p className="text-xs text-center text-sfm-text-muted mt-6">No pressure. We respect your time.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
