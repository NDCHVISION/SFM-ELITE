import Link from 'next/link'
import Script from 'next/script'
import { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: 'Waitlist Confirmed | Sankofa Family Medicine',
  description:
    'Thank you for joining the Sankofa Family Medicine Founders Waitlist. We will contact you when enrollment opens in early 2026.',
  robots: {
    index: false,
    follow: false,
  },
}

// =============================================================================
// STRUCTURED DATA
// =============================================================================

const successPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sankofafamilymedicine.com/waitlist-success#webpage',
  url: 'https://sankofafamilymedicine.com/waitlist-success',
  name: 'Waitlist Confirmed | Sankofa Family Medicine',
  description: 'Thank you for joining the Sankofa Family Medicine Founders Waitlist.',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://sankofafamilymedicine.com/#website',
    name: 'Sankofa Family Medicine',
    url: 'https://sankofafamilymedicine.com',
  },
}

// =============================================================================
// COMPONENT
// =============================================================================

export default function WaitlistSuccessPage() {
  return (
    <>
      <Script
        id="success-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(successPageJsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-sfm-cream/30 pt-16 lg:pt-[128px]">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Success Section */}
          <section className="text-center mb-16">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-sfm-gold/20 to-sfm-gold/5 border-2 border-sfm-gold flex items-center justify-center">
              <Check className="w-10 h-10 text-sfm-gold" aria-hidden="true" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">
              You&apos;re on the Founders Waitlist
            </h1>

            <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" aria-hidden="true" />

            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-sfm-navy/70 mb-8 leading-relaxed">
                Thank you for your interest in Sankofa Family Medicine PLLC.
              </p>

              {/* Confirmation Points */}
              <div className="bg-sfm-cream/50 rounded-2xl p-6 md:p-8 mb-8">
                <div className="space-y-4 text-left">
                  <p className="flex items-center gap-3 text-sfm-navy">
                    <span className="w-6 h-6 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                    </span>
                    <strong>No payment required today</strong>
                  </p>
                  <p className="flex items-center gap-3 text-sfm-navy">
                    <span className="w-6 h-6 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                    </span>
                    <strong>Washington State residents only</strong>
                  </p>
                  <p className="flex items-center gap-3 text-sfm-navy">
                    <span className="w-6 h-6 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                    </span>
                    <strong>We will email you when enrollment opens</strong>
                  </p>
                </div>
              </div>

              <p className="text-sfm-navy/60 mb-4">
                This waitlist submission does not enroll you as a patient or create a physician-patient relationship.
              </p>

              <p className="text-sfm-navy/60">
                When patient enrollment opens (early 2026), we will contact you by email with details on next steps, including how to review membership terms and complete registration if you choose to proceed.
              </p>
            </div>
          </section>

          {/* While You Wait Section */}
          <section className="max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-2xl text-sfm-navy mb-6 text-center">While You Wait</h2>
            
            <div className="bg-white rounded-2xl border border-sfm-gold/10 shadow-soft overflow-hidden">
              <ul className="divide-y divide-sfm-cream">
                <li>
                  <Link 
                    href="/services" 
                    className="flex items-center justify-between p-5 hover:bg-sfm-cream/50 transition-colors group"
                  >
                    <span className="text-sfm-navy font-medium">Learn about our Membership Plans</span>
                    <ArrowRight className="w-5 h-5 text-sfm-azure group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/founder" 
                    className="flex items-center justify-between p-5 hover:bg-sfm-cream/50 transition-colors group"
                  >
                    <span className="text-sfm-navy font-medium">Meet Dr. Nkrumah</span>
                    <ArrowRight className="w-5 h-5 text-sfm-azure group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="flex items-center justify-between p-5 hover:bg-sfm-cream/50 transition-colors group"
                  >
                    <span className="text-sfm-navy font-medium">Read our latest articles</span>
                    <ArrowRight className="w-5 h-5 text-sfm-azure group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Return Home Button */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sfm-navy text-white font-semibold rounded-xl hover:bg-sfm-azure transition-colors shadow-lg"
            >
              Return to Home
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Disclaimers */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-sfm-navy/10">
            <p className="text-xs text-sfm-navy/40 text-center">
              Sankofa Family Medicine serves patients throughout Washington State via telehealth. Washington State patients only.
            </p>
            <p className="text-xs text-sfm-navy/30 text-center mt-2">
              Information on this site is for general informational purposes and is not medical advice. If you are experiencing an emergency, call 911 or go to the nearest emergency room.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
