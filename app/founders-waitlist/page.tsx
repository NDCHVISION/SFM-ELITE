import Link from 'next/link'
import Script from 'next/script'
import { Metadata } from 'next'

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: 'Founders Waitlist | Sankofa Family Medicine | Medicine That Remembers™',
  description:
    'Join the Sankofa Family Medicine Founders Waitlist. Founders cohort limited (about 30 memberships). Clinical care plans to begin February 2026. No payment required to join the waitlist.',
  keywords: [
    'Sankofa Family Medicine waitlist',
    'founders waitlist',
    'direct primary care waitlist',
    'DPC Washington waitlist',
    'membership-based primary care',
    'telehealth primary care Washington',
  ],
  authors: [{ name: 'Yaw Nkrumah, M.D.', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'Founders Waitlist | Sankofa Family Medicine',
    description:
      'Join the Founders Waitlist. Founders cohort limited (about 30 memberships). Clinical care plans to begin February 2026. No payment required to join.',
    url: 'https://sankofafamilymedicine.com/founders-waitlist',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-waitlist.png',
        width: 1200,
        height: 630,
        alt: 'Join the Sankofa Family Medicine Founders Waitlist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders Waitlist | Sankofa Family Medicine',
    description:
      'Join the Founders Waitlist. Founders cohort limited (about 30 memberships). No payment required to join.',
    images: ['https://sankofafamilymedicine.com/images/og-waitlist.png'],
    creator: '@sankofafamilymed',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/founders-waitlist',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'ai-content-declaration': 'human-authored',
    'content-type': 'Waitlist Page',
    'content-purpose': 'Interest form for founders waitlist',
    'page-category': 'Healthcare Services',
    'practice-model': 'Direct Primary Care (DPC), Membership Medicine',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
  },
}

// =============================================================================
// STRUCTURED DATA
// =============================================================================

const waitlistPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sankofafamilymedicine.com/founders-waitlist#webpage',
  url: 'https://sankofafamilymedicine.com/founders-waitlist',
  name: 'Founders Waitlist | Sankofa Family Medicine',
  description: 'Join the Sankofa Family Medicine Founders Waitlist. Founders cohort limited (about 30 memberships). Clinical care plans to begin February 2026.',
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

      <main className="min-h-screen bg-gradient-to-b from-white to-sfm-cream/30">
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
              Sankofa Family Medicine plans to begin clinical care in February 2026. Join the waitlist below to be contacted with next steps.
              No payment is required to join.
            </p>

            <p className="text-sm text-sfm-navy/50 max-w-3xl mx-auto mt-4">
              Submitting this form does not create a physician-patient relationship and is not medical advice.
            </p>
          </div>

          {/* Iframe Container */}
          <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-sfm-gold/10">
            <iframe
              src="https://sankofafamilymedicine.atlas.md/enrollment/index.html?account=h5MEw4d0pIPUxA4CiOGy"
              title="Sankofa Family Medicine Founders Waitlist Form"
              className="w-full border-0"
              style={{ height: '900px', minHeight: '600px' }}
              loading="lazy"
              aria-label="Founders waitlist form"
            />

            {/* Noscript Fallback */}
            <noscript>
              <div className="p-8 text-center text-sfm-navy/60">
                <p>
                  Please enable JavaScript to view the waitlist form, or visit{' '}
                  <a
                    href="https://sankofafamilymedicine.atlas.md"
                    className="text-sfm-azure underline hover:text-sfm-gold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    our secure form directly
                  </a>.
                </p>
              </div>
            </noscript>
          </div>

          {/* Fallback Link */}
          <p className="text-center text-sm text-sfm-navy/40 mt-6">
            Having trouble with the form?{' '}
            <a
              href="https://sankofafamilymedicine.atlas.md"
              className="text-sfm-azure underline hover:text-sfm-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit our secure form directly
            </a>.
          </p>

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
