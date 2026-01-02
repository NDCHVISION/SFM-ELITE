'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Globe, Loader2, Heart, Users, Clock } from 'lucide-react'
import { allUSStates, stateConfigs } from '@/lib/states'

export default function LocationRequestPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    state: '',
    city: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Filter out states we already serve or have coming soon
  const configuredCodes = Object.keys(stateConfigs)
  const availableStates = allUSStates.filter(s => !configuredCodes.includes(s.code))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const stateName = availableStates.find(s => s.code === formData.state)?.name || formData.state
      
      const response = await fetch('https://formspree.io/f/manrdjgv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          state: stateName,
          stateCode: formData.state,
          city: formData.city,
          message: formData.message,
          type: 'Location Request',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          state: '',
          city: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const benefits = [
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Help us understand where patients need relationship-based primary care the most.'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Your request helps us prioritize expansion to communities that value continuity of care.'
    },
    {
      icon: Clock,
      title: 'Priority Notification',
      description: 'Be among the first to know when we launch services in your requested area.'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure" />
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-premium rounded-full mb-8">
              <MapPin className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium">Location Request</span>
            </div>

            <h1 className="text-display-lg text-white mb-6">
              Request{' '}
              <span className="text-sfm-gold">Medicine That Remembers</span>{' '}
              in Your Area
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              We are committed to expanding access to relationship-based primary care across the nation. 
              Submit your request and help us bring our virtual-first model to your community.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sfm-gold" />
                <span>Virtual-First Model</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sfm-gold" />
                <span>Board Certified Physician</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sfm-gold" />
                <span>Nationwide Expansion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Coverage */}
      <section className="py-12 bg-sfm-cream dark:bg-sfm-bg-secondary border-b border-gray-200 dark:border-sfm-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <span className="text-sfm-text-muted dark:text-sfm-text-muted text-sm">Current coverage:</span>
            
            <Link 
              href="/locations/washington"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              Washington
              <span className="text-emerald-600/60 dark:text-emerald-400/60">Active</span>
            </Link>
            
            <Link 
              href="/locations/south-carolina"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              South Carolina
              <span className="text-amber-600/60 dark:text-amber-400/60">2026</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white dark:bg-sfm-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Request Form */}
            <div className="bg-sfm-cream dark:bg-sfm-surface rounded-2xl p-8 lg:p-10 order-2 lg:order-1">
              <h2 className="font-display text-2xl text-sfm-navy dark:text-sfm-navy mb-2">
                Submit Your Location Request
              </h2>
              <p className="text-sfm-text-muted dark:text-sfm-text-muted mb-8">
                Tell us where you would like to see Sankofa Family Medicine services.
              </p>

              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy dark:text-sfm-navy mb-2">
                    Request Submitted Successfully
                  </h3>
                  <p className="text-sfm-text-muted dark:text-sfm-text-muted mb-6">
                    Thank you for your interest. We have recorded your location request and will notify you when we expand to your area.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sfm-azure hover:underline text-sm"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First name"
                        className="w-full px-5 py-4 bg-white dark:bg-sfm-bg-secondary border border-sfm-cream-dark dark:border-sfm-border rounded-xl text-sfm-text dark:text-sfm-dark-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last name"
                        className="w-full px-5 py-4 bg-white dark:bg-sfm-bg-secondary border border-sfm-cream-dark dark:border-sfm-border rounded-xl text-sfm-text dark:text-sfm-dark-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 bg-white dark:bg-sfm-bg-secondary border border-sfm-cream-dark dark:border-sfm-border rounded-xl text-sfm-text dark:text-sfm-dark-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                      Requested State <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="state"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-5 py-4 bg-white dark:bg-sfm-bg-secondary border border-sfm-cream-dark dark:border-sfm-border rounded-xl text-sfm-text dark:text-sfm-dark-text focus:outline-none focus:border-sfm-gold focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300 cursor-pointer"
                    >
                      <option value="">Select your state</option>
                      {availableStates.map((state) => (
                        <option key={state.code} value={state.code}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                      City or Region <span className="text-sfm-text-light font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Your city or metropolitan area"
                      className="w-full px-5 py-4 bg-white dark:bg-sfm-bg-secondary border border-sfm-cream-dark dark:border-sfm-border rounded-xl text-sfm-text dark:text-sfm-dark-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                      Additional Information <span className="text-sfm-text-light font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share why you are interested in our services or any specific needs..."
                      className="w-full px-5 py-4 bg-white dark:bg-sfm-bg-secondary border border-sfm-cream-dark dark:border-sfm-border rounded-xl text-sfm-text dark:text-sfm-dark-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-primary justify-center py-4"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Location Request</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-600 dark:text-red-400 text-sm text-center">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <p className="text-xs text-sfm-text-light dark:text-sfm-text-light text-center">
                    Your information will only be used to notify you about expansion to your requested area.
                  </p>
                </form>
              )}
            </div>

            {/* Benefits & Info */}
            <div className="order-1 lg:order-2">
              <div className="mb-10">
                <p className="text-editorial text-sfm-gold mb-4">Why Request a Location?</p>
                <h2 className="text-display-md text-sfm-navy dark:text-sfm-navy mb-6">
                  Help Shape Our Expansion
                </h2>
                <p className="text-sfm-text-muted dark:text-sfm-text-muted text-lg leading-relaxed">
                  Your voice matters. Location requests help us understand where the demand for 
                  relationship-based, continuity-focused primary care is strongest.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div 
                    key={benefit.title}
                    className="flex gap-5 p-6 bg-sfm-cream dark:bg-sfm-surface rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-sfm-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-sfm-navy dark:text-sfm-navy mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sfm-text-muted dark:text-sfm-text-muted text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expansion Vision */}
              <div className="mt-10 pt-10 border-t border-gray-200 dark:border-sfm-border">
                <div className="bg-gradient-to-br from-sfm-navy to-sfm-azure rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sfm-gold/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-sfm-gold" />
                      <p className="text-sfm-gold text-sm font-medium">Our Vision</p>
                    </div>
                    <h3 className="font-display text-2xl mb-3">Nationwide Virtual Care</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      Our goal is to bring Medicine That Remembers to all 50 states, 
                      ensuring everyone has access to a physician who truly knows their history.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-white/60">1 Active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-400 rounded-full" />
                        <span className="text-white/60">1 Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sfm-cream dark:bg-sfm-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-text-muted dark:text-sfm-text-muted mb-4">
            Already in our service area?
          </p>
          <h3 className="font-display text-2xl text-sfm-navy dark:text-sfm-navy mb-6">
            We are currently accepting patients in Washington State
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/locations/washington" 
              className="inline-flex items-center gap-2 text-sfm-azure font-semibold hover-arrow-slide"
            >
              <span>Explore Washington Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-sfm-text-light">or</span>
            <Link 
              href="/locations/south-carolina" 
              className="inline-flex items-center gap-2 text-sfm-gold font-semibold hover-arrow-slide"
            >
              <span>Join South Carolina Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
