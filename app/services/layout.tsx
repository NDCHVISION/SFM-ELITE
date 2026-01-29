import { Metadata } from 'next'
import Script from 'next/script'

/* =========================================================
SERVICES/MEMBERSHIP PAGE LAYOUT - PRODUCTION READY
Version: 5.2 (contract-aligned + schema/page consistency)
=========================================================
PRECISION FIXES:
- Compliance: removed all numeric price ranges from metadata + schema (page does not show ranges)
- Compliance: added physician-patient relationship disclaimer to AI fields (waitlist ≠ care)
- Contract alignment: tier access language mirrors Membership Agreement Section "Tier-Based Access"
- SEO: kept DPC-first positioning; maintained clean OG/Twitter
- Schema hygiene: added alternateName mapping to contract tier names (Concierge) WITHOUT changing page titles
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),

  // SEO: DPC-first, WA State intent
  title: 'Direct Primary Care (DPC) Membership Plans & Pricing | Sankofa Family Medicine | Washington State',

  // Compliance/SEO: removed numeric price claims because they are not shown on the page
  description:
    'Transparent Direct Primary Care (DPC) membership tiers for Washington State patients. Same-day appointments when available. Direct messaging. Cancel with notice.',

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
      'Direct Primary Care (DPC) membership tiers for Washington State patients. Same-day appointments when available. Direct physician messaging.',
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
    description: 'Direct Primary Care (DPC) membership tiers in Washington State.',
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
    // AI/LLM hygiene
    'ai-content-declaration': 'human-authored',
    'ai-extractable': 'true',

    // Compliance: no price claims if not visible on-page
    'ai-summary':
      'Sankofa Family Medicine offers Direct Primary Care (DPC) memberships for Washington State patients. Three tiers: Continuity, Precision, and Executive. Virtual care only. Not health insurance.',

    'content-type': 'Pricing Page',
    'page-category': 'Healthcare Services',
    'page-subcategory': 'Membership Pricing',

    // Removed: 'price-range' and tier price fields (page does not show ranges)
    // 'price-range': '$225-$725/month',
    // 'tier-1-price': '$225-275/month',
    // etc.

    'billing-options': 'monthly, annual',
    'payment-methods': 'Credit Card, Debit Card, ACH',

    // Practice Model
    'practice-model': 'Direct Primary Care (DPC)',
    'practice-type': 'Membership Medicine',
    'delivery-method': 'Telehealth',

    // WA telehealth limitation (plain + accurate)
    'service-area': 'Washington State only',
    'geographic-limitation': 'Patients must be physically located in Washington State during telehealth encounters',

    // Tier Names (page titles)
    'tier-1-name': 'Continuity Membership',
    'tier-2-name': 'Precision Membership',
    'tier-3-name': 'Executive Membership',

    // Required disclaimers
    'insurance-disclaimer': 'This is not health insurance',
    'relationship-disclaimer':
      'Joining the founders waitlist does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.',
    'emergency-disclaimer': 'Not for emergencies - call 911',
    'state-registration': 'RCW 48.150',
  },
}

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // Site entity
    {
      '@type': 'WebSite',
      '@id': 'https://sankofafamilymedicine.com/#website',
      url: 'https://sankofafamilymedicine.com',
      name: 'Sankofa Family Medicine',
      inLanguage: 'en-US',
    },

    // Page entity
    {
      '@type': 'WebPage',
      '@id': 'https://sankofafamilymedicine.com/services#webpage',
      url: 'https://sankofafamilymedicine.com/services',
      name: 'Direct Primary Care (DPC) Membership Plans & Pricing | Sankofa Family Medicine',
      description:
        'Direct Primary Care (DPC) membership tiers for Washington State patients. Same-day appointments when available. Direct messaging.',
      isPartOf: { '@id': 'https://sankofafamilymedicine.com/#website' },
      about: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      breadcrumb: { '@id': 'https://sankofafamilymedicine.com/services#breadcrumb' },
      datePublished: '2026-01-01',
      dateModified: '2026-01-28',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '#pricing-heading', '[data-speakable]'],
      },
    },

    // Breadcrumbs
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://sankofafamilymedicine.com/services#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
        { '@type': 'ListItem', position: 2, name: 'DPC Membership Plans', item: 'https://sankofafamilymedicine.com/services' },
      ],
    },

    // Organization (clinic)
    {
      '@type': 'MedicalClinic',
      '@id': 'https://sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      legalName: 'Sankofa Family Medicine PLLC',
      url: 'https://sankofafamilymedicine.com',
      telephone: '+1-425-285-7390',
      email: 'info@sankofafamilymedicine.com',
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

      // Compliance: prelaunch posture
      isAcceptingNewPatients: false,

      // SEO/compliance: policy links
      termsOfService: 'https://sankofafamilymedicine.com/membership-terms',
      privacyPolicy: 'https://sankofafamilymedicine.com/privacy',

      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-425-285-7390',
          contactType: 'customer support',
          areaServed: 'US-WA',
          availableLanguage: ['en'],
        },
      ],

      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Virtual Direct Primary Care (DPC)',
          procedureType: 'https://schema.org/NoninvasiveProcedure',
        },
      ],
    },

    /* =========================================================
       Product nodes: keep names matching page (no "Concierge")
       Add alternateName to map to contract tier names
       Remove all numeric prices unless the page displays them
       ========================================================= */

    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#continuity',
      name: 'Continuity Membership (DPC)',
      alternateName: 'Continuity Concierge Membership', // Contract mapping without changing page
      description:
        // Contract-aligned: standard business hours only; no after-hours messaging/access
        'DPC membership for Washington State patients. Access is limited to services during standard business hours. After-hours messaging and urgent consultations are not included.',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Direct Primary Care (DPC) membership',
      offers: {
        '@type': 'Offer',
        // No "price" fields here unless prices are shown on the page
        availability: 'https://schema.org/PreOrder',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
    },

    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#precision',
      name: 'Precision Membership (DPC)',
      alternateName: 'Precision Concierge Membership', // Contract mapping
      description:
        // Contract-aligned: limited after-hours secure messaging for time-sensitive, non-emergent concerns; not immediate; not emergencies
        'DPC membership with limited after-hours secure messaging for time-sensitive, non-emergent concerns, subject to clinical appropriateness and availability. Not for emergencies.',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Direct Primary Care (DPC) membership',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
    },

    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#executive',
      name: 'Executive Membership (DPC)',
      alternateName: 'Executive Concierge Membership', // Contract mapping
      description:
        // Contract-aligned: expanded access pathways for defined urgent needs; care coordination outside hours; not unrestricted/on-call
        'DPC membership with expanded access pathways for defined urgent needs, based on clinical triage and availability. May include care coordination outside standard business hours when clinically appropriate. Not unrestricted or on-call coverage.',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Direct Primary Care (DPC) membership',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
    },

    // FAQ (add the two high-risk compliance items as plain-language FAQs)
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
              'Direct Primary Care (DPC) is a membership model. You pay a monthly fee directly to your clinic for primary care, instead of the clinic billing your insurance for each visit.',
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
          name: 'Do I need to be in Washington State for visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. You must be physically located in Washington State at the time of your telehealth visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this service for emergencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'No. This practice does not provide emergency or urgent care. For emergencies, call 911 or go to the nearest emergency room.',
          },
        },
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
