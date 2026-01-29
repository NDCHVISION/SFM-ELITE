/* ============================================================================
   SANKOFA FAMILY MEDICINE - ROOT LAYOUT (PRODUCTION)

   Compliance: WA DOH, HIPAA expectations, RCW 48.150
   Accessibility: WCAG 2.2 AA+
   SEO: Optimized for healthcare, telehealth, DPC discovery
   AI-Ready: Optimized for AI search
   Performance: Next.js font optimization (zero layout shift)

   Last Updated: January 2026
   ============================================================================ */

import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MobileCTA from '@/components/MobileCTA'
import CookieConsent from '@/components/CookieConsent'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import ConditionalAnalytics from '@/components/ConditionalAnalytics'

/* ============================================================================
   FONT OPTIMIZATION
   Using next/font/google for:
   - Zero layout shift (CLS = 0)
   - Self-hosted fonts after build (no external requests)
   - Automatic font-display: swap
   - CSS variable for Tailwind/globals.css integration
   ============================================================================ */
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  preload: true,
  adjustFontFallback: true,
})

/* Viewport: Mobile-first, accessible zoom */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#05436e' },
    { media: '(prefers-color-scheme: dark)', color: '#051c3b' },
  ],
}

/* Metadata: SEO + AI-ready */
export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),

  title: {
    default: 'Virtual Primary Care in Washington State | Sankofa Family Medicine',
    template: '%s | Sankofa Family Medicine',
  },

  /* SEO: Plain-language, no guarantees */
  description:
    'Virtual primary care for adults and adolescents throughout Washington State. Telehealth visits, chronic care management, and preventive care through a membership-based direct primary care (DPC) model with concierge-style access. Join the founders waitlist.',

  /* SEO: De-duped + tightened (avoid keyword stuffing) */
  keywords: [
    'virtual primary care Washington',
    'telehealth doctor Washington State',
    'telemedicine Washington',
    'online doctor Washington',
    'virtual family medicine',
    'direct primary care Washington',
    'DPC Washington',
    'membership-based primary care',
    'concierge-style primary care',
    'virtual doctor Seattle',
    'telehealth Bellevue',
    'online doctor Spokane',
    'telemedicine Tacoma',
    'chronic disease management telehealth',
    'preventive care telehealth',
    'diabetes management telehealth',
    'hypertension telehealth',
    'annual wellness visit telehealth',
    'Sankofa Family Medicine',
    'Dr. Yaw Nkrumah',
    'Medicine That Remembers',
  ],

  authors: [{ name: 'Yaw A. Nkrumah, MD', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine PLLC',
  publisher: 'Sankofa Family Medicine PLLC',

  /* UX: Allow click-to-call on mobile */
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },

  category: 'Healthcare',
  classification: 'Medical Practice',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    title: 'Virtual Primary Care in Washington State | Sankofa Family Medicine',
    description:
      'Virtual primary care for adults and adolescents throughout Washington State through a direct primary care (DPC) model with concierge-style access. Join the founders waitlist.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Virtual Primary Care in Washington State',
        type: 'image/png',
      },
    ],
    countryName: 'United States',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Primary Care in Washington State',
    description: 'Join the founders waitlist for virtual primary care in Washington State.',
    images: ['/images/og-image.png'],
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

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  manifest: '/manifest.json',

  alternates: {
    canonical: 'https://sankofafamilymedicine.com',
    languages: { 'en-US': 'https://sankofafamilymedicine.com' },
  },

  /* AI + Healthcare metadata */
  other: {
    'ai-content-declaration':
      'This website represents Sankofa Family Medicine PLLC, a medical practice providing telehealth services in Washington State.',
    'ai-practice-summary':
      'Virtual-first direct primary care (DPC) practice offering membership-based telehealth services for adults and adolescents (12+) throughout Washington State, with concierge-style access.',
    'practice-type': 'Direct Primary Care (DPC), Telehealth, Concierge-Style Access',
    'service-area': 'Washington State, USA',
    'patient-age-range': '12 years and older',
    'healthcare-provider': 'true',
    'hipaa-aligned': 'true',
    'telehealth-available': 'true',
    'telemedicine-platform': 'true',
    'accepting-new-patients': 'waitlist',
    'insurance-accepted': 'false',
    'payment-model': 'Direct Primary Care Membership',
    'geo.region': 'US-WA',
    'geo.placename': 'Washington State',
    'wa-insurance-commissioner': 'Registered pursuant to RCW 48.150',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  /* ============================================================================
     SCHEMA.ORG STRUCTURED DATA - CONSOLIDATED @GRAPH
     All site-wide JSON-LD in ONE place to avoid duplicate/conflicting schemas
     ============================================================================ */

  const consolidatedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      // WebSite entity
      {
        '@type': 'WebSite',
        '@id': 'https://sankofafamilymedicine.com/#website',
        url: 'https://sankofafamilymedicine.com',
        name: 'Sankofa Family Medicine',
        description: 'Virtual, membership-based primary care delivered through a Direct Primary Care model',
        publisher: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://sankofafamilymedicine.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },

      // Organization entity (MedicalBusiness, MedicalClinic)
      {
        '@type': ['MedicalBusiness', 'MedicalClinic'],
        '@id': 'https://sankofafamilymedicine.com/#organization',
        name: 'Sankofa Family Medicine',
        legalName: 'Sankofa Family Medicine PLLC',
        alternateName: ['SFM', 'Medicine That Remembers'],
        url: 'https://sankofafamilymedicine.com',
        description:
          'Virtual, membership-based primary care practice delivered through a Direct Primary Care (DPC) model, emphasizing continuity, longitudinal care, and physician-led decision-making.',
        slogan: 'Medicine That Remembers™',
        telephone: '+1-425-285-7390',
        email: 'info@sankofafamilymedicine.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sankofafamilymedicine.com/images/SFM_Trans.png',
          width: 512,
          height: 512,
        },
        image: 'https://sankofafamilymedicine.com/images/og-image.png',
        areaServed: {
          '@type': 'State',
          name: 'Washington',
          sameAs: 'https://en.wikipedia.org/wiki/Washington_(state)',
        },
        medicalSpecialty: [
          'https://schema.org/PrimaryCare',
          'https://schema.org/CommunityHealth'
        ],
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, HSA, FSA',
        priceRange: '$225-$725',

        // Waitlist open - not active clinical intake yet
        isAcceptingNewPatients: false,



        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'new patient inquiries',
            url: 'https://sankofafamilymedicine.com/founders-waitlist',
            availableLanguage: ['English'],
          },
        ],

        availableService: [
          {
            '@type': 'Service',
            name: 'Virtual Primary Care',
            serviceType: 'Telemedicine',
            description: 'Primary care delivered via secure video visits (planned visit length 45 to 75 minute).',
          },
          {
            '@type': 'Service',
            name: 'Chronic Disease Management',
            description: 'Longitudinal management of chronic conditions with continuity of care.',
          },
          {
            '@type': 'Service',
            name: 'Preventive Care',
            description: 'Evidence-based preventive care and health maintenance.',
          },
        ],

        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Membership Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Continuity',
              description: 'Essential virtual primary care with continuity and access (DPC model).',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'USD',
                minPrice: '225',
                maxPrice: '275',
              },
            },
            {
              '@type': 'Offer',
              name: 'Precision',
              description: 'Deeper preventive insight and advanced diagnostics when appropriate (DPC model).',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'USD',
                minPrice: '325',
                maxPrice: '375',
              },
            },
            {
              '@type': 'Offer',
              name: 'Executive',
              description: 'Enhanced access, coordination, and longitudinal oversight (DPC model).',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'USD',
                minPrice: '650',
                maxPrice: '725',
              },
            },
          ],
        },

        potentialAction: {
          '@type': 'RegisterAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://sankofafamilymedicine.com/founders-waitlist',
            actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
          },
          result: { '@type': 'Thing', name: 'Founders Waitlist Sign-Up' },
        },

        foundingDate: '2025',
        founder: { '@id': 'https://sankofafamilymedicine.com/#founder' },
        sameAs: ['https://www.linkedin.com/company/sankofa-family-medicine/'],
      },

      // Person/Physician entity (Founder)
      {
        '@type': ['Person', 'Physician'],
        '@id': 'https://sankofafamilymedicine.com/#founder',
        name: 'Dr. Yaw Nkrumah, MD',
        jobTitle: 'Founder & Medical Director',
        url: 'https://sankofafamilymedicine.com/founder',
        medicalSpecialty: 'https://schema.org/PrimaryCare',
        worksFor: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          name: 'Board Certification in Family Medicine',
          credentialCategory: 'Board Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'American Board of Family Medicine',
            alternateName: 'ABFM',
            sameAs: 'https://www.theabfm.org/',
          },
          url: 'https://www.credential.net/169707940',
        },
      },

      // FAQPage entity (complete version)
      {
        '@type': 'FAQPage',
        '@id': 'https://sankofafamilymedicine.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Direct Primary Care?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Direct Primary Care (DPC) is a membership-based model where patients pay a monthly fee directly to their physician for primary care services, without insurance billing for the membership.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does membership cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Planned membership ranges are $225-$275/month (Continuity), $325-$375/month (Precision), and $650-$725/month (Executive). Founding members receive the lower end of each range. Your exact rate is confirmed before enrollment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Sankofa Family Medicine accepting new patients?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sankofa Family Medicine is currently accepting Founders Waitlist sign-ups. Enrollment is planned to begin in early 2026.',
            },
          },
          {
            '@type': 'Question',
            name: 'What states does Sankofa Family Medicine serve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sankofa Family Medicine serves patients located in Washington State only via telehealth.',
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang="en" dir="ltr" className={cormorantGaramond.variable}>
      <head>
        {/* Consolidated JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
        />
      </head>

      <body className={`${cormorantGaramond.className} font-body antialiased`}>
        {/* Accessibility: Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="pt-16 lg:pt-[128px]" role="main">
          {children}
        </main>

        <Footer />
        <BackToTop />

        {/* Compliance: Emergency micro-disclaimer above MobileCTA (mobile only) */}
        <aside
          className="fixed bottom-14 left-0 right-0 z-40 px-3 sm:px-4 pointer-events-none lg:hidden"
          role="note"
          aria-label="Important safety information"
        >
          <div className="mx-auto max-w-3xl rounded-lg bg-white/90 backdrop-blur border border-sfm-navy/10 px-3 py-2 text-center shadow-sm">
            <p className="text-xs text-sfm-text-muted">
              Not for emergencies. If you have chest pain, trouble breathing, or stroke symptoms, call 911 or go to the nearest ER.
            </p>
          </div>
        </aside>

        <MobileCTA />
        <CookieConsent />
        <MedicalDisclaimer />
        <ConditionalAnalytics />
      </body>
    </html>
  )
}
