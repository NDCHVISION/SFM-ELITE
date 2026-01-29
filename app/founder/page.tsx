/* ============================================================================
   SANKOFA FAMILY MEDICINE - ROOT LAYOUT (PRODUCTION V2)

   Compliance: WA DOH, HIPAA expectations, RCW 48.150
   Accessibility: WCAG 2.2 AA+
   SEO: Optimized for healthcare, telehealth, DPC discovery
   AI-Ready: Optimized for AI search
   Performance: Next.js font optimization (no render-blocking)

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
    'Virtual primary care for adults and adolescents throughout Washington State. Telehealth visits, chronic care management, and preventive care through a membership-based direct primary care (DPC) model with enhanced access. Join the Founders Waitlist.',

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
      'Virtual primary care for adults and adolescents throughout Washington State through a direct primary care (DPC) membership model with enhanced access. Join the Founders Waitlist.',
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
    description: 'Join the Founders Waitlist for virtual primary care in Washington State.',
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

  /* AI + Healthcare metadata (avoid over-claiming "registered") */
  other: {
    'ai-content-declaration':
      'This website represents Sankofa Family Medicine PLLC, a medical practice providing telehealth services in Washington State.',
    'ai-practice-summary':
      'Virtual-first direct primary care (DPC) practice offering membership-based telehealth services throughout Washington State with enhanced access.',
    'practice-type': 'Direct Primary Care (DPC), Telehealth',
    'service-area': 'Washington State, USA',
    'patient-age-range': '12 years and older',
    'healthcare-provider': 'true',
    'hipaa-conscious': 'true',
    'telehealth-available': 'true',
    'accepting-new-patients': 'waitlist',
    'insurance-accepted': 'false',
    'payment-model': 'Direct Primary Care Membership',
    'geo.region': 'US-WA',
    'geo.placename': 'Washington State',
    'wa-dpc-framework': 'Operates under Washington direct primary care framework (RCW 48.150)',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  /* ============================================================================
     SCHEMA.ORG STRUCTURED DATA
     ============================================================================ */

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalOrganization', 'MedicalBusiness'],
    '@id': 'https://sankofafamilymedicine.com/#organization',
    name: 'Sankofa Family Medicine PLLC',
    legalName: 'Sankofa Family Medicine PLLC',
    alternateName: ['Sankofa Family Medicine', 'SFM', 'Medicine That Remembers'],
    url: 'https://sankofafamilymedicine.com',
    description:
      'Virtual-first direct primary care (DPC) practice serving adults and adolescents throughout Washington State. Telehealth visits, chronic care management, and preventive care through a membership model with enhanced access.',
    slogan: 'Medicine That Remembers',
    foundingDate: '2025-09-29',

    logo: {
      '@type': 'ImageObject',
      url: 'https://sankofafamilymedicine.com/images/logo.png',
      width: 512,
      height: 512,
    },
    image: 'https://sankofafamilymedicine.com/images/og-image.png',

    telephone: '+1-425-285-7390',
    email: 'info@sankofafamilymedicine.com',

    address: {
      '@type': 'PostalAddress',
      streetAddress: '522 W. Riverside Ave, Suite N',
      addressLocality: 'Spokane',
      addressRegion: 'WA',
      postalCode: '99201',
      addressCountry: 'US',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.6588,
      longitude: -117.426,
    },

    /* General contact hours (not emergency services) */
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '12:00',
      },
    ],

    areaServed: {
      '@type': 'State',
      name: 'Washington',
      sameAs: 'https://en.wikipedia.org/wiki/Washington_(state)',
      containsPlace: [
        { '@type': 'City', name: 'Seattle' },
        { '@type': 'City', name: 'Bellevue' },
        { '@type': 'City', name: 'Tacoma' },
        { '@type': 'City', name: 'Spokane' },
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'City', name: 'Kirkland' },
        { '@type': 'City', name: 'Redmond' },
        { '@type': 'City', name: 'Everett' },
        { '@type': 'City', name: 'Olympia' },
        { '@type': 'City', name: 'Sammamish' },
        { '@type': 'City', name: 'Mercer Island' },
      ],
    },

    /* Compliance posture: waitlist */
    isAcceptingNewPatients: false,

    medicalSpecialty: ['https://schema.org/PrimaryCare'],

    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Virtual Primary Care Visit',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
        description: 'Telehealth consultations for acute illness, chronic conditions, and preventive care.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Chronic Disease Management',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
        description: 'Ongoing management of diabetes, hypertension, thyroid disorders, and other chronic conditions.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Preventive Care and Annual Wellness',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
        description: 'Annual wellness visits, health screenings, and preventive care guidance.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Mental Health Screening',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
        description: 'Depression and anxiety screening and basic mental health medication management.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Prescription Management',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
        description: 'Prescription renewals and pharmacy coordination when clinically appropriate.',
      },
    ],

    /* Pricing schema: use ranges accurately (AggregateOffer) */
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Membership Plans',
      itemListElement: [
        {
          '@type': 'AggregateOffer',
          name: 'Continuity Membership',
          lowPrice: 225,
          highPrice: 275,
          priceCurrency: 'USD',
          offerCount: 1,
          itemOffered: {
            '@type': 'Service',
            name: 'Continuity Membership',
            description:
              'Virtual primary care through a membership-based DPC model with enhanced access during standard business hours.',
          },
        },
        {
          '@type': 'AggregateOffer',
          name: 'Precision Membership',
          lowPrice: 325,
          highPrice: 375,
          priceCurrency: 'USD',
          offerCount: 1,
          itemOffered: {
            '@type': 'Service',
            name: 'Precision Membership',
            description:
              'Virtual primary care with expanded access, including after-hours secure messaging for time-sensitive, non-emergent concerns.',
          },
        },
        {
          '@type': 'AggregateOffer',
          name: 'Executive Membership',
          lowPrice: 650,
          highPrice: 725,
          priceCurrency: 'USD',
          offerCount: 1,
          itemOffered: {
            '@type': 'Service',
            name: 'Executive Membership',
            description:
              'Virtual primary care with expanded care coordination, priority scheduling, and enhanced availability within the membership model.',
          },
        },
      ],
    },

    priceRange: '$$',
    paymentAccepted: ['Credit Card', 'Debit Card', 'ACH Transfer', 'HSA', 'FSA'],
    currenciesAccepted: 'USD',

    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-425-285-7390',
        contactType: 'customer service',
        availableLanguage: 'English',
        areaServed: 'US-WA',
      },
      {
        '@type': 'ContactPoint',
        email: 'info@sankofafamilymedicine.com',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
    ],

    founder: {
      '@type': 'Physician',
      '@id': 'https://sankofafamilymedicine.com/#founder',
      name: 'Yaw A. Nkrumah, MD',
      givenName: 'Yaw',
      familyName: 'Nkrumah',
      honorificSuffix: 'MD',
      jobTitle: 'Founder and Medical Director',
      url: 'https://sankofafamilymedicine.com/founder',
      image: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
      medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Family Medicine' },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Medical University of South Carolina',
          sameAs: 'https://web.musc.edu/',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Kadlec Family Medicine Residency',
          address: { '@type': 'PostalAddress', addressRegion: 'WA', addressCountry: 'US' },
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Doctor of Medicine (MD)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Board Certified in Family Medicine',
          recognizedBy: {
            '@type': 'Organization',
            name: 'American Board of Family Medicine',
            sameAs: 'https://www.theabfm.org/',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'license',
          name: 'Washington State Medical License',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Washington Medical Commission',
            sameAs: 'https://wmc.wa.gov/',
          },
        },
      ],
    },

    sameAs: ['https://www.linkedin.com/company/sankofa-family-medicine'],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sankofafamilymedicine.com/#website',
    url: 'https://sankofafamilymedicine.com',
    name: 'Sankofa Family Medicine',
    description: 'Virtual primary care for Washington State',
    publisher: { '@id': 'https://sankofafamilymedicine.com/#organization' },
    inLanguage: 'en-US',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://sankofafamilymedicine.com/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is direct primary care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Direct primary care (DPC) is a membership-based healthcare model where patients pay a monthly fee directly to their physician for primary care services. Insurance is not billed for membership fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you accept insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sankofa Family Medicine does not bill insurance for membership fees. We encourage members to maintain health insurance for hospitalizations, specialist care, and emergencies. HSA/FSA funds may be used.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide virtual primary care to patients physically located in Washington State at the time of the visit, including Seattle, Bellevue, Spokane, Tacoma, Vancouver, Kirkland, Redmond, Everett, Olympia, and other areas throughout the state.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this practice for emergencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Sankofa Family Medicine does not provide emergency services. For emergencies, call 911 or go to the nearest emergency department.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does enrollment begin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Patient enrollment is planned to begin in early 2026. You can join the Founders Waitlist now at no cost. No payment is required to join the waitlist.',
        },
      },
    ],
  }

  return (
    <html lang="en" dir="ltr" className={cormorantGaramond.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>

      <body className={`${cormorantGaramond.className} font-body antialiased`}>
        {/* Accessibility: Skip link for keyboard navigation (single source of truth) */}
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
            <p className="text-xs text-sfm-navy/70">
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
