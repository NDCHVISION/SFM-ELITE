'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2, Clock, Shield, Heart, Calendar } from 'lucide-react'
import { EXTERNAL_URLS } from '@/lib/config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'founding-membership',
    message: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      setError('Please agree to receive email updates to continue.')
      return
    }
    
    setIsSubmitting(true)
    setError('')
    setStatusMessage('Submitting your information...')

    try {
      const response = await fetch('https://formspree.io/f/manrdjgv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name || 'Not provided',
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
          consent: formData.consent,
          source: 'contact-page',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setStatusMessage('Success! You have been added to our updates list.')
      } else {
        setError('Something went wrong. Please try again or email us directly.')
        setStatusMessage('Error submitting form. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      setStatusMessage('Error submitting form. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-sfm-navy via-sfm-navy/95 to-sfm-azure/90 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 pattern-sankofa-spiral-gold pattern-subtle opacity-30" aria-hidden="true" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Now Accepting Founding Members</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl text-white mb-8 leading-[1.1]">
            Founding Member Updates & Questions
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sfm-gold to-transparent mx-auto mb-10" />
          
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Start in Atlas. Leave your email and we will follow up with next steps and availability.
          </p>
          
          {/* Primary CTA - Atlas Portal */}
          <a
            href={EXTERNAL_URLS.atlas}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sfm-gold to-sfm-gold-light text-sfm-navy font-bold rounded-xl shadow-lg shadow-sfm-gold/25 hover:shadow-xl hover:shadow-sfm-gold/40 hover:scale-[1.02] transition-all duration-300 group"
          >
            <Calendar className="w-5 h-5" />
            Founding Member Enrollment Now Open
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-white/40 text-sm mt-3">
            All intake, scheduling, messaging, and visits occur securely inside Atlas.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-sfm-cream to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-sfm-azure/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase font-medium mb-3">Get In Touch</p>
                <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
                  Questions or Updates
                </h2>
                <p className="text-sfm-text-muted leading-relaxed">
                  If you have questions about our services or want to receive founding member updates, 
                  fill out the form and we will be in touch.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="group flex items-start gap-5 p-5 bg-white rounded-2xl border border-sfm-gold/10 shadow-soft hover:shadow-medium hover:border-sfm-gold/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-sfm-gold/20 to-sfm-gold/5 border border-sfm-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sfm-navy font-display text-lg mb-1">Email</p>
                    <a 
                      href="mailto:info@sankofafamilymedicine.com" 
                      className="text-sfm-azure hover:text-sfm-gold transition-colors duration-300 break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                    >
                      info@sankofafamilymedicine.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-5 bg-white rounded-2xl border border-sfm-gold/10 shadow-soft hover:shadow-medium hover:border-sfm-gold/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-sfm-azure/20 to-sfm-azure/5 border border-sfm-azure/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-sfm-azure" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sfm-navy font-display text-lg mb-1">Phone</p>
                    <a 
                      href="tel:+14252857390" 
                      className="text-sfm-azure hover:text-sfm-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                    >
                      +1 (425) 285-7390
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-5 bg-white rounded-2xl border border-sfm-gold/10 shadow-soft hover:shadow-medium hover:border-sfm-gold/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-sfm-navy/15 to-sfm-navy/5 border border-sfm-navy/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-sfm-navy" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sfm-navy font-display text-lg mb-1">Service Area</p>
                    <p className="text-sfm-azure font-medium">Washington State</p>
                    <p className="text-sfm-text-muted text-sm mt-1">HIPAA-Compliant Virtual Care</p>
                  </div>
                </div>
              </div>

              {/* Ready to Book Card */}
              <div className="bg-gradient-to-br from-sfm-navy to-sfm-azure rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sfm-gold/10 rounded-full blur-2xl" />
                <div className="relative">
                  <p className="text-sfm-gold text-sm font-medium mb-2">Ready to begin?</p>
                  <h3 className="font-display text-2xl mb-3">Founding Member Enrollment Now Open</h3>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    A brief conversation to ensure Sankofa Family Medicine is the right fit for your health journey.
                  </p>
                  <a 
                    href={EXTERNAL_URLS.atlas}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sfm-gold font-semibold group"
                  >
                    Begin enrollment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              {/* Form Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-sfm-gold/10 relative overflow-hidden">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sfm-gold via-sfm-azure to-sfm-gold" />
                
                {/* Corner Decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-sfm-gold/5 rounded-full blur-2xl" />
                
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-br from-sfm-gold/20 to-sfm-gold/5 border-2 border-sfm-gold rounded-2xl flex items-center justify-center mb-8 animate-scale-in">
                      <Send className="w-8 h-8 text-sfm-gold" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-3xl text-sfm-navy mb-4">You are On the List</h3>
                    <p className="text-sfm-text-muted text-lg mb-2">
                      Thank you for your interest in Sankofa Family Medicine.
                    </p>
                    <p className="text-sfm-text-light text-sm mb-6">
                      We will be in touch with updates and next steps.
                    </p>
                    <div className="pt-6 border-t border-sfm-cream w-full">
                      <p className="text-sfm-text-muted text-sm mb-4">Ready to take the next step?</p>
                      <a 
                        href={EXTERNAL_URLS.atlas}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sfm-azure font-medium hover:text-sfm-gold transition-colors"
                      >
                        Founding Member Enrollment Now Open
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="mb-8">
                      <h3 className="font-display text-2xl text-sfm-navy mb-2">Join Updates</h3>
                      <p className="text-sfm-text-muted">
                        Get founding member news and availability updates.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div>
                        <label htmlFor="name" className="block text-sfm-navy text-sm font-medium mb-2">
                          Name <span className="text-sfm-text-light font-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sfm-navy text-sm font-medium mb-2">
                          Email <span className="text-sfm-gold">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                          placeholder="your@email.com"
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sfm-navy text-sm font-medium mb-2">
                          I am interested in... <span className="text-sfm-gold">*</span>
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300 cursor-pointer"
                        >
                          <option value="founding-membership">Founding Membership (I want to join soon)</option>
                          <option value="question">I have a question</option>
                          <option value="updates-only">I want updates only</option>
                          <option value="partnership">Partnership inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sfm-navy text-sm font-medium mb-2">
                          Message <span className="text-sfm-text-light font-normal">(optional)</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300 resize-none"
                          placeholder="Any questions or details you would like to share..."
                        />
                      </div>

                      {/* Consent Checkbox */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-1 w-5 h-5 rounded border-sfm-cream-dark text-sfm-gold focus:ring-sfm-gold/20 cursor-pointer"
                          required
                        />
                        <label htmlFor="consent" className="text-sm text-sfm-text-muted cursor-pointer">
                          I agree to receive email updates from Sankofa Family Medicine. I can unsubscribe at any time. <span className="text-sfm-gold">*</span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative inline-flex items-center justify-center gap-2 px-8 py-5 font-semibold text-base rounded-xl overflow-hidden transition-all duration-500 bg-gradient-to-r from-sfm-gold via-sfm-gold-light to-sfm-gold bg-[length:200%_100%] text-sfm-navy shadow-lg shadow-sfm-gold/25 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-sfm-gold/40 disabled:opacity-70 disabled:cursor-not-allowed group"
                        aria-describedby="form-status"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Join Updates
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>

                      {error && (
                        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                          <p className="text-rose-600 text-sm text-center" role="alert">{error}</p>
                        </div>
                      )}
                    </form>
                  </div>
                )}
              </div>
              
              {/* Floating Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sfm-gold/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-t border-sfm-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-display text-3xl text-sfm-navy mb-1">24hr</p>
              <p className="text-sfm-text-muted text-sm">Response Time</p>
            </div>
            <div className="w-px h-12 bg-sfm-cream hidden md:block" />
            <div className="text-center">
              <p className="font-display text-3xl text-sfm-navy mb-1">HIPAA</p>
              <p className="text-sfm-text-muted text-sm">Compliant</p>
            </div>
            <div className="w-px h-12 bg-sfm-cream hidden md:block" />
            <div className="text-center">
              <p className="font-display text-3xl text-sfm-gold mb-1">30</p>
              <p className="text-sfm-text-muted text-sm">Founding Spots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen reader status announcements */}
      <div 
        id="form-status" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {statusMessage}
      </div>
    </>
  )
}
