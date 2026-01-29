import { Metadata } from 'next'
import Script from 'next/script'

/* =========================================================
SERVICES/MEMBERSHIP PAGE LAYOUT - PRODUCTION READY
Version: 5.0
=========================================================
CHANGES:
- Removed "Concierge" from all tier names
- Shifted language to "membership-based DPC"
- Updated schema, metadata, AI fields
- Softened all outcome claims
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),

  // SEO: emphasize DPC, reduce concierge language
  title: 'Direct Primary Care Membership Plans & Pricing | Sankofa Family Medicine | Washington State',

  // Compliance/SEO: avoid guarantees; keep plain language
  description:
    'Transparent Direct Primary Care (DPC) membership pricing for Washington State patients. Three tiers from $225-$725/month. Same-day appointments when available. Direct messaging. Cancel with notice.',

  keywords: [
    'direct primary care membership Washington',
    'DPC membership Washington State',
    'virtual direct primary care Washington',
    'primary care membership pricing',
    'Sankofa Family Medicine pricing',
    'membership-based primary care',
    'primary care without insurance',
    'telehealth primary care Washington',
  ],

  authors: [{ name: 'Yaw Nkrumah, M.D.', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine PLLC',
  publisher: 'Sankofa Family Medicine PLLC',

  openGraph: {
    title: 'DPC Membership Plans | Sankofa Family Medicine',
    description:
      'Transparent DPC membership pricing from $225-$725/month. Washington State. Direct physician messaging. Cancel with notice.',
    url: '/services',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine DPC Membership Plans',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@sankofafamilymed',
    creator: '@sankofafamilymed',
    title: 'DPC Membership Plans | Sankofa Family Medicine',
    description: 'Direct Primary Care in Washington State from $225/month. Direct messaging.',
    images: ['/images/og-services.png'],
  },

  alternates: { canonical: '/services' },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },

  category: 'Healthcare',

  other: {
    'ai-content-declaration': 'human-authored',
    'ai-extractable': 'true',
    'ai-summary':
      'Membership pricing for Sankofa Family Medicine, a Direct Primary Care (DPC) practice in Washington State. Three tiers: Continuity ($225-275/mo), Precision ($325-375/mo), Executive ($650-725/mo). Virtual care only. Not health insurance.',

    'content-type': 'Pricing Page',
    'page-category': 'Healthcare Services',
    'page-subcategory': 'Membership Pricing',

    'price-range': '$225-$725/month',
    'price-currency': 'USD',
    'billing-options': 'monthly, annual',

    'payment-methods': 'Credit Card, Debit Card, ACH',

    // Practice Model
    'practice-model': 'Direct Primary Care (DPC)',
    'practice-type': 'Membership Medicine',
    'delivery-method': 'Telehealth',

    'geo-region': 'US-WA',
    'geo-placename': 'Washington State, USA',
    'service-area': 'Washington State only',
    'geographic-limitation': 'Patients must be physically located in Washington State during telehealth encounters',

    // Tier Names (for AI extraction) - removed "Concierge"
    'tier-1-name': 'Continuity Membership',
    'tier-1-price': '$225-275/month',
    'tier-2-name': 'Precision Membership',
    'tier-2-price': '$325-375/month',
    'tier-3-name': 'Executive Membership',
    'tier-3-price': '$650-725/month',

    'insurance-disclaimer': 'This is not health insurance',
    'emergency-disclaimer': 'Not for emergencies - call 911',
    'state-registration': 'RCW 48.150',
  },
}

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sankofafamilymedicine.com/services#webpage',
      url: 'https://sankofafamilymedicine.com/services',
      name: 'Direct Primary Care Membership Plans & Pricing | Sankofa Family Medicine',
      description:
        'Transparent Direct Primary Care (DPC) membership pricing for Washington State. Three tiers from $225-$725/month.',
      isPartOf: { '@id': 'https://sankofafamilymedicine.com/#website' },
      about: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      breadcrumb: { '@id': 'https://sankofafamilymedicine.com/services#breadcrumb' },
      datePublished: '2026-01-01',
      dateModified: '2026-01-28',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#pricing-heading', '[data-speakable]'] },
    },

    {
      '@type': 'BreadcrumbList',
      '@id': 'https://sankofafamilymedicine.com/services#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
        { '@type': 'ListItem', position: 2, name: 'DPC Membership Plans', item: 'https://sankofafamilymedicine.com/services' },
      ],
    },

    // Product - Continuity (removed "Concierge")
    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#continuity',
      name: 'Continuity Membership (DPC)',
      description:
        'Virtual Direct Primary Care for Washington State patients. Includes physician-led visits, secure messaging, and access to lower-cost lab pricing options.',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Healthcare Membership',
      offers: {
        '@type': 'Offer',
        price: '225',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/PreOrder',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
    },

    // Product - Precision (removed "Concierge")
    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#precision',
      name: 'Precision Membership (DPC)',
      description:
        'Virtual Direct Primary Care with added data-informed reviews (when clinically appropriate). Includes advanced lab review and optional genetic testing interpretation (test costs separate).',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Healthcare Membership',
      offers: {
        '@type': 'Offer',
        price: '325',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/PreOrder',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
    },

    // Product - Executive (removed "Concierge")
    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#executive',
      name: 'Executive Membership (DPC)',
      description:
        'Virtual Direct Primary Care with expanded access pathways and priority coordination (based on clinical triage and availability).',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Healthcare Membership',
      offers: {
        '@type': 'Offer',
        price: '650',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/PreOrder',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
    },

    {
      '@type': 'FAQPage',
      '@id': 'https://sankofafamilymedicine.com/services#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Direct Primary Care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Direct Primary Care (DPC) is a membership model where you pay a monthly fee directly to your clinic for primary care services, instead of having the clinic bill your insurance for each visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need health insurance with DPC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. DPC covers primary care only. Keep insurance for emergencies, hospital care, specialists, imaging, and prescriptions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I need a specialist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Your physician can help coordinate referrals when needed. Specialist services are separate from membership and are provided by third parties.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is virtual care the right fit for me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Virtual care works well for many common primary care needs. Some concerns require an in-person exam or testing, and we will guide you to in-person care when clinically appropriate.',
          },
        },
      ],
    },

    {
      '@type': 'MedicalBusiness',
      '@id': 'https://sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      legalName: 'Sankofa Family Medicine PLLC',
      url: 'https://sankofafamilymedicine.com',
      telephone: '+1-425-285-7390',
      email: 'info@sankofafamilymedicine.com',
      priceRange: '$225-$725/month',
      currenciesAccepted: 'USD',
      paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'ACH'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '522 W Riverside Ave, Ste N',
        addressLocality: 'Spokane',
        addressRegion: 'WA',
        postalCode: '99201',
        addressCountry: 'US',
      },
      areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Primary Care' },
      availableService: {
        '@type': 'MedicalProcedure',
        name: 'Virtual Direct Primary Care (DPC)',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
      },
      isAcceptingNewPatients: false,
      contactPoint: [
        { '@type': 'ContactPoint', telephone: '+1-425-285-7390', contactType: 'customer support', areaServed: 'US-WA', availableLanguage: ['en'] },
      ],
    },
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      {children}
    </>
  )
}
