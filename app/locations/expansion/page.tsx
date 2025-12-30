'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Globe, Loader2 } from 'lucide-react'
import { allUSStates, stateConfigs } from '@/lib/states'

export default function ExpansionPage() {
  const [email, setEmail] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [city, setCity] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Filter out states we already serve or have coming soon
  const configuredCodes = Object.keys(stateConfigs)
  const availableStates = allUSStates.filter(s => !configuredCodes.includes(s.code))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const stateName = availableStates.find(s => s.code === selectedState)?.name || selectedState
      
      const response = await fetch('https://formspree.io/f/manrdjgv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          state: stateName,
          stateCode: selectedState,
          city,
          type: 'Expansion Interest',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setSelectedState('')
        setCity('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Not Live Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-6 py-3 text-center">
          <p className="text-amber-700 dark:text-amber-400 text-sm font-medium">
            We are not currently live in this state. Join the updates list to be notified when enrollment opens.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure" />
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-premium rounded-full mb-8">
              <Globe className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium">Future Expansion</span>
            </div>

            <h1 className="text-display-lg text-white mb-6">
              Bring Medicine That Remembers to{' '}
              <span className="text-sfm-gold">Your State</span>
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              We are planning to expand Sankofa Family Medicine across the United States. 
              Let us know where you are, and help us decide where to grow next.
            </p>
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

      {/* Interest Form */}
      <section className="py-20 lg:py-28 bg-white dark:bg-sfm-bg-primary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-display-md text-sfm-navy dark:text-sfm-navy mb-4">
              Request Expansion to Your State
            </h2>
            <p className="text-sfm-text-muted dark:text-sfm-text-muted text-lg">
              Your interest helps us prioritize where to expand next. 
              We will notify you when we begin planning for your area.
            </p>
          </div>

          <div className="bg-sfm-cream dark:bg-sfm-surface rounded-2xl p-8 lg:p-10">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-display text-xl text-sfm-navy dark:text-sfm-navy mb-2">
                  Thank you for your interest!
                </h3>
                <p className="text-sfm-text-muted dark:text-sfm-text-muted mb-6">
                  We have recorded your request. You will be the first to know when we expand to your state.
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
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                    Your State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="state"
                    required
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="select"
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
                    City (Optional)
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Your city"
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input"
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
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Notified</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <p className="text-xs text-sfm-text-light dark:text-sfm-text-light text-center">
                  We will only use your email to notify you about expansion to your area.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Visualization */}
      <section className="py-20 lg:py-28 bg-sfm-cream dark:bg-sfm-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-display-md text-sfm-navy dark:text-sfm-navy mb-4">
              Our Expansion Vision
            </h2>
            <p className="text-sfm-text-muted dark:text-sfm-text-muted text-lg max-w-2xl mx-auto">
              We believe everyone deserves access to a physician who knows their history. 
              Our virtual-first model allows us to bring Medicine That Remembers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-sfm-surface rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-display text-xl text-sfm-navy dark:text-sfm-navy mb-2">Active Now</h3>
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">1</p>
              <p className="text-sfm-text-muted dark:text-sfm-text-muted text-sm">State</p>
            </div>

            <div className="bg-white dark:bg-sfm-surface rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-display text-xl text-sfm-navy dark:text-sfm-navy mb-2">Coming Soon</h3>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">1</p>
              <p className="text-sfm-text-muted dark:text-sfm-text-muted text-sm">State in 2026</p>
            </div>

            <div className="bg-white dark:bg-sfm-surface rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-sfm-azure/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-sfm-azure" />
              </div>
              <h3 className="font-display text-xl text-sfm-navy dark:text-sfm-navy mb-2">Our Goal</h3>
              <p className="text-3xl font-bold text-sfm-azure mb-2">50</p>
              <p className="text-sfm-text-muted dark:text-sfm-text-muted text-sm">States Eventually</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
