'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// =============================================================================
// METADATA - Moved to generateMetadata for client components
// =============================================================================

// Since this is now a client component, metadata export is removed
// Metadata is handled via Next.js head tags or layout

// =============================================================================
// STRUCTURED DATA
// =============================================================================

const waitlistPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sankofafamilymedicine.com/founders-waitlist#webpage',
  url: 'https://sankofafamilymedicine.com/founders-waitlist',
  name: 'Founders Waitlist | Sankofa Family Medicine',
  description: 'Join the Sankofa Family Medicine Founders Waitlist. Founders cohort limited (about 30 memberships). Clinical care plans to begin early 2026.',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://sankofafamilymedicine.com/#website',
    name: 'Sankofa Family Medicine',
    url: 'https://sankofafamilymedicine.com',
  },
  about: { '@id': 'https://sankofafamilymedicine.com/#organization' },
  mainEntity: { '@id': 'https://sankofafamilymedicine.com/#organization' },
  potentialAction: {
    '@type': 'JoinAction',
    name: 'Join the Founders Waitlist',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sankofafamilymedicine.com/founders-waitlist',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
    },
    object: {
      '@type': 'Thing',
      name: 'Founders Waitlist',
      provider: { '@id': 'https://sankofafamilymedicine.com/#organization' },
    },
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
    { '@type': 'ListItem', position: 2, name: 'Founders Waitlist', item: 'https://sankofafamilymedicine.com/founders-waitlist' },
  ],
}

// =============================================================================
// COMPONENT
// =============================================================================

export default function FoundersWaitlistPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/manrdjyn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        router.push('/waitlist-success')
      } else {
        alert('Submission failed. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      alert('Network error. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script
        id="waitlist-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(waitlistPageJsonLd) }}
      />
      <Script
        id="waitlist-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-sfm-cream/30 pt-16 lg:pt-[128px]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-sfm-navy/60">
              <li>
                <Link href="/" className="hover:text-sfm-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-sfm-navy font-medium">Founders Waitlist</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 rounded-full border border-sfm-gold/20 mb-6">
              <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-sfm-gold text-sm font-semibold">Founders Cohort Limited (About 30 Memberships)</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">
              Join the Founders Waitlist
            </h1>

            <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" aria-hidden="true" />

            <p className="text-xl text-sfm-navy/70 max-w-3xl mx-auto leading-relaxed">
              Sankofa Family Medicine plans to begin clinical care in early 2026. Join the waitlist below to be contacted with next steps.
              No payment is required to join.
            </p>

            <p className="text-sm text-sfm-navy/50 max-w-3xl mx-auto mt-4">
              Submitting this form places you on our Founders Waitlist only. It does not enroll you as a patient, create a physician-patient relationship, or provide medical advice. Services are available only to individuals located in Washington State.
            </p>
          </div>

          {/* Formspree Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-sfm-gold/10 p-8 md:p-10">
            <form 
              onSubmit={handleSubmit}
              acceptCharset="UTF-8"
              className="waitlist-form space-y-6"
            >
              {/* Hidden Fields */}
              <input type="hidden" name="source_page" value="/founders-waitlist" />
              <input type="hidden" name="consent_version" value="v2026-01-27" />
              
              {/* First Name */}
              <div className="form-group">
                <label htmlFor="first_name" className="block text-sfm-navy text-sm font-medium mb-2">
                  First Name <span className="text-sfm-gold">*</span>
                </label>
                <input 
                  type="text" 
                  id="first_name"
                  name="first_name" 
                  required 
                  minLength={1}
                  autoComplete="given-name"
                  placeholder="First Name"
                  className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                />
              </div>
              
              {/* Last Name */}
              <div className="form-group">
                <label htmlFor="last_name" className="block text-sfm-navy text-sm font-medium mb-2">
                  Last Name <span className="text-sfm-gold">*</span>
                </label>
                <input 
                  type="text" 
                  id="last_name"
                  name="last_name" 
                  required 
                  minLength={1}
                  autoComplete="family-name"
                  placeholder="Last Name"
                  className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                />
              </div>
              
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="block text-sfm-navy text-sm font-medium mb-2">
                  Email Address <span className="text-sfm-gold">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                />
              </div>
              
              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone" className="block text-sfm-navy text-sm font-medium mb-2">
                  Phone Number <span className="text-sfm-gold">*</span>
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone" 
                  required 
                  minLength={10}
                  autoComplete="tel"
                  placeholder="(425) 555-1234"
                  className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                />
              </div>
              
              {/* Zip Code */}
              <div className="form-group">
                <label htmlFor="zip" className="block text-sfm-navy text-sm font-medium mb-2">
                  Zip Code <span className="text-sfm-gold">*</span>
                </label>
                <input 
                  type="text" 
                  id="zip"
                  name="zip" 
                  required 
                  minLength={5}
                  maxLength={10}
                  autoComplete="postal-code"
                  placeholder="98101"
                  className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300"
                />
              </div>
              
              {/* Referral Source */}
              <div className="form-group">
                <label htmlFor="referral_source" className="block text-sfm-navy text-sm font-medium mb-2">
                  How did you hear about us?
                </label>
                <select 
                  id="referral_source" 
                  name="referral_source"
                  className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300 cursor-pointer"
                >
                  <option value="">Select one (optional)...</option>
                  <option value="google">Google Search</option>
                  <option value="social_media">Social Media</option>
                  <option value="friend_family">Friend or Family</option>
                  <option value="healthcare_provider">Healthcare Provider</option>
                  <option value="employer">Employer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              {/* Notes with PHI Guard */}
              <div className="form-group">
                <label htmlFor="notes" className="block text-sfm-navy text-sm font-medium mb-2">
                  Anything you&apos;d like us to know? (Optional)
                </label>
                <p className="text-amber-600 text-xs mb-2 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Do not include medical details. This form is for interest only.
                </p>
                <textarea 
                  id="notes"
                  name="notes" 
                  maxLength={500}
                  rows={3}
                  placeholder="Optional message (no medical information please)"
                  className="w-full px-5 py-4 bg-sfm-cream/50 border border-sfm-cream-dark rounded-xl text-sfm-text placeholder:text-sfm-text-light focus:outline-none focus:border-sfm-gold focus:bg-white focus:ring-2 focus:ring-sfm-gold/20 transition-all duration-300 resize-none"
                />
              </div>
              
              {/* CONSENT CHECKBOX - CRITICAL */}
              <div className="form-group">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    id="waitlist_consent"
                    name="waitlist_consent" 
                    value="true" 
                    required
                    className="mt-1 w-5 h-5 rounded border-sfm-cream-dark text-sfm-gold focus:ring-sfm-gold/20 cursor-pointer"
                  />
                  <span className="text-sm text-sfm-text-muted">
                    I understand this is a waitlist only and does not enroll me as a patient, create a physician-patient relationship, or provide medical advice. Services are available only to individuals located in Washington State. <span className="text-sfm-gold">*</span>
                  </span>
                </label>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full relative inline-flex items-center justify-center gap-2 px-8 py-5 font-semibold text-base rounded-xl overflow-hidden transition-all duration-500 bg-gradient-to-r from-sfm-gold via-sfm-gold-light to-sfm-gold bg-[length:200%_100%] text-sfm-navy shadow-lg shadow-sfm-gold/25 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-sfm-gold/40 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Join the Founders Waitlist'}
                {!isSubmitting && (
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
              
              <p className="text-center text-sm text-sfm-navy/50">
                No payment required. We will contact you by email when enrollment opens.
              </p>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-sfm-navy/50">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sfm-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Payment Required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sfm-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure Online Form
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sfm-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Washington State Only
            </span>
          </div>

          {/* Back Link */}
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Learn more about Sankofa Family Medicine
            </Link>
          </div>

          {/* Disclaimers */}
          <div className="max-w-3xl mx-auto mt-12 pt-6 border-t border-sfm-navy/10">
            <p className="text-[10px] text-sfm-navy/30 text-center leading-tight">
              Sankofa Family Medicine serves Washington State patients via telehealth. For emergencies, call 911. Information on this site is for general informational purposes and is not medical advice.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
