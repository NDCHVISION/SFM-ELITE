import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MobileCTA from '@/components/MobileCTA'
import CookieConsent from '@/components/CookieConsent'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

// Privacy: keep analytics OFF by default for a medical site unless you have
// (1) a documented HIPAA risk review, (2) vendor terms/BAA alignment where applicable,
// (3) consent-gating that prevents any tracking before the user opts in.
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const ENABLE_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' // Privacy: explicit opt-in via env

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#05436e',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),
  title: {
    default: 'Sankofa Family Medicine | Virtual Primary Care in Washington State',
    /* SEO: Updated title to be more descriptive and include geographic qualifier */
    template: '%s | Sankofa Family Medicine',
  },
  /* SEO: Updated description to be clearer for patients and search engines, removed marketing language */
  description:
    'Virtual primary care for adults and adolescents in Washington State. Sankofa Family Medicine offers telehealth visits, chronic care management, and preventive care through a direct primary care membership model.',
  keywords: [
    'virtual primary care Washington',
    'telehealth doctor Washington State',
    'direct primary care Seattle',
    'concierge medicine Washington',
    'virtual family medicine',
    'DPC membership Washington',
    'Dr. Yaw Nkrumah',
    'Sankofa Family Medicine',
  ],
  authors: [{ name: 'Sankofa Family Medicine PLLC' }],
  creator: 'Sankofa Family Medicine PLLC',
  publisher: 'Sankofa Family Medicine PLLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: true, // UX: allow tap-to-call on mobile for patients
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    /* SEO: Updated OG title to match page title for consistency */
    title: 'Sankofa Family Medicine | Virtual Primary Care in Washington State',
    /* SEO: Updated OG description to be patient-focused and clear */
    description:
      'Virtual primary care for adults and adolescents in Washington State. Telehealth visits, chronic care management, and preventive care through direct primary care membership.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        /* Accessibility: More descriptive alt text for social sharing */
        alt: 'Sankofa Family Medicine logo with tagline Medicine That Remembers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    /* SEO: Consistent title across metadata */
    title: 'Sankofa Family Medicine | Virtual Primary Care in Washington State',
    description:
      'Virtual primary care for adults and adolescents in Washington State. Telehealth visits, chronic care management, and preventive care.',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  /* SEO: Added alternates for canonical URL */
  alternates: {
    canonical: 'https://sankofafamilymedicine.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    /* Accessibility: Added dir attribute for screen readers and i18n */
    <html lang="en" dir="ltr">
      <head>
        {/* Performance: dns-prefetch added for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* SEO: Schema.org structured data for MedicalOrganization + telehealth clarity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['MedicalOrganization', 'LocalBusiness'],
              '@id': 'https://sankofafamilymedicine.com/#organization',
              name: 'Sankofa Family Medicine PLLC',
              alternateName: 'Sankofa Family Medicine',
              url: 'https://sankofafamilymedicine.com',
              logo: 'https://sankofafamilymedicine.com/images/logo.png',
              description:
                'Virtual primary care for adults and adolescents in Washington State. Direct primary care membership model offering telehealth visits, chronic care management, and preventive care.',
              telephone: '+1-425-285-7390',
              email: 'info@sankofafamilymedicine.com',

              // Compliance/clarity: This is a business/mailing address. Services are delivered virtually.
              address: {
                '@type': 'PostalAddress',
                streetAddress: '522 W. Riverside Ave',
                addressLocality: 'Spokane',
                addressRegion: 'WA',
                postalCode: '99201',
                addressCountry: 'US',
              },

              // SEO: Stronger local + virtual intent signals
              areaServed: [
                {
                  '@type': 'State',
                  name: 'Washington',
                },
              ],

              // SEO: Add a clear contactPoint for search engines and assistants
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-425-285-7390',
                  contactType: 'customer service',
                  areaServed: 'US-WA',
                  availableLanguage: ['en'],
                },
              ],

              // SEO: Indicates telehealth availability for search engines
              availableService: [
                {
                  '@type': 'MedicalProcedure',
                  name: 'Virtual Primary Care Visit',
                  procedureType: 'https://schema.org/NoninvasiveProcedure',
                },
                {
                  '@type': 'MedicalProcedure',
                  name: 'Chronic Disease Management',
                  procedureType: 'https://schema.org/NoninvasiveProcedure',
                },
                {
                  '@type': 'MedicalProcedure',
                  name: 'Preventive Care Consultation',
                  procedureType: 'https://schema.org/NoninvasiveProcedure',
                },
              ],

              // Compliance: Only set true if enrollment is actually open today (not just waitlist).
              // If you are still pre-launch/waitlist-only, set to false to avoid “access guarantee” vibes.
              isAcceptingNewPatients: false,

              medicalSpecialty: 'https://schema.org/PrimaryCare',
              priceRange: '$$',
              sameAs: ['https://www.linkedin.com/company/sankofa-family-medicine'],
            }),
          }}
        />
      </head>

      <body className="font-body antialiased">
        {/* Accessibility: Skip link for keyboard navigation - must be first focusable element */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navigation />

        {/* Accessibility: main landmark with id for skip link target */}
        <main id="main-content" className="pt-16 lg:pt-[128px]" role="main">
          {children}
        </main>

        <Footer />
        <BackToTop />
        <MobileCTA />

        {/* Privacy: CookieConsent should run before ANY optional analytics/tracking */}
        <CookieConsent />

        {/* Compliance: Medical disclaimer for regulatory requirements */}
        <MedicalDisclaimer />

        {/* Privacy: Analytics should be disabled by default for a healthcare site.
            If enabled, ensure CookieConsent actually gates execution (no events before opt-in). */}
        {ENABLE_ANALYTICS ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  )
}
