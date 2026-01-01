'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, MapPin, Clock, Bell, Loader2 } from 'lucide-react'
import { stateConfigs } from '@/lib/states'

const scConfig = stateConfigs.SC

export default function SouthCarolinaLocationPage() {
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/manrdjgv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          city,
          state: 'South Carolina',
          type: 'SC Waitlist',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setCity('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const benefits = [
    {
      icon: Bell,
      title: 'Priority Access',
      description: 'Be first to enroll when we launch in South Carolina.'
    },
    {
      icon: CheckCircle2,
      title: 'Founding Member Pricing',
      description: 'Lock in special rates available only to early members.'
    },
    {
      icon: Clock,
      title: 'Shape Our Launch',
      description: 'Your input helps us tailor services for South Carolina.'
    },
  ]

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
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-premium rounded-full mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              <span className="text-amber-300 text-sm font-semibold">Coming {scConfig.launchDate}</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-white/60 text-sm">South Carolina</span>
            </div>

            <h1 className="text-display-lg text-white mb-6">
              Virtual Primary Care Coming to{' '}
              <span className="text-sfm-gold">South Carolina</span>
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Sankofa Family Medicine is expanding to South Carolina in {scConfig.launchDate}. 
              Join the updates list to be notified when enrollment opens.
            </p>

            {/* Founding Member Spots */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sfm-gold/10 border border-sfm-gold/30 rounded-xl mb-8">
              <span className="text-sfm-gold font-bold text-2xl">{scConfig.foundingMemberSpots}</span>
              <span className="text-white/70 text-sm">Founding Member Spots Reserved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-sfm-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="bg-sfm-cream dark:bg-sfm-surface rounded-2xl p-8 lg:p-10">
              <h2 className="font-display text-2xl text-sfm-navy dark:text-sfm-navy mb-2">
                Get Notified When We Launch
              </h2>
              <p className="text-sfm-text-muted dark:text-sfm-text-muted mb-8">
                Be the first to know when enrollment opens in South Carolina.
              </p>

              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy dark:text-sfm-navy mb-2">
                    You are on the list!
                  </h3>
                  <p className="text-sfm-text-muted dark:text-sfm-text-muted mb-6">
                    We will notify you as soon as we launch in South Carolina.
                  </p>
                  <Link href="/locations/washington" className="text-sfm-azure hover:underline text-sm">
                    Explore our active Washington services
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-sfm-navy dark:text-sfm-navy mb-2">
                      City (Optional)
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Charleston, Columbia, etc."
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
                </form>
              )}
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-display-md text-sfm-navy dark:text-sfm-navy mb-8">
                Why Join Early?
              </h2>

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

              {/* Cities */}
              <div className="mt-10 pt-10 border-t border-gray-200 dark:border-sfm-border">
                {/* South Carolina State Map */}
                <div className="mb-8 group">
                  <div className="relative rounded-xl overflow-hidden shadow-md max-w-lg mx-auto">
                    {/* Subtle brand tint overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-sfm-gold/5 via-transparent to-sfm-azure/5 mix-blend-overlay" />
                    
                    {/* Edge softening */}
                    <div className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 40px 10px rgba(255,255,255,0.3)',
                      }}
                    />
                    
                    <Image
                      src="/images/map-south-carolina.png"
                      alt="Map of South Carolina showing future Sankofa Family Medicine service areas including Columbia, Charleston, Greenville, and Myrtle Beach. Coming 2026."
                      width={600}
                      height={450}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                
                <p className="text-sm text-sfm-text-muted dark:text-sfm-text-muted mb-4">
                  Coming to communities across South Carolina including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {scConfig.majorCities.map((city) => (
                    <span 
                      key={city}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-sfm-bg-secondary rounded-full text-xs text-sfm-navy dark:text-sfm-navy border border-gray-200 dark:border-sfm-border"
                    >
                      <MapPin className="w-3 h-3 text-sfm-gold" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Services CTA */}
      <section className="py-16 bg-sfm-cream dark:bg-sfm-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-text-muted dark:text-sfm-text-muted mb-4">
            Need care now?
          </p>
          <h3 className="font-display text-2xl text-sfm-navy dark:text-sfm-navy mb-6">
            We are currently accepting patients in Washington State
          </h3>
          <Link 
            href="/locations/washington" 
            className="inline-flex items-center gap-2 text-sfm-azure font-semibold hover-arrow-slide"
          >
            <span>Explore Washington Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
