import { Metadata } from 'next'
import Script from 'next/script'

/* =========================================================
SERVICES/MEMBERSHIP PAGE LAYOUT - SEO MAXIMIZED
Version: 5.5 SEO (Contract-aligned + WA compliance + Full SEO)
=========================================================

SEO ENHANCEMENTS:
- Comprehensive schema.org graph (WebPage, Products, FAQ, Organization, Service, Offer)
- Rich snippet optimization (FAQ, Product, LocalBusiness)
- AI/LLM discovery metadata (OpenAI, Perplexity, Claude, Gemini)
- Local SEO signals (Washington State focus)
- Speakable content for voice search
- Social proof signals in schema
- Breadcrumb with proper hierarchy
- Price drop schema potential
- Aggregate rating placeholder (for future reviews)

SCHEMA TYPES INCLUDED:
- WebPage (with speakable)
- BreadcrumbList
- Product x3 (with Offer, areaServed)
- FAQPage (8 questions)
- MedicalBusiness (with Service, ContactPoint)
- PriceSpecification
- OfferCatalog

AI DISCOVERY:
- ai-summary, ai-extractable, ai-content-declaration
- Structured tier data for LLM extraction
- Clear pricing signals
- Geographic constraints explicit
========================================================= */

// Dynamic date for schema freshness signals
const currentDate = new Date().toISOString().split('T')[0]

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),

  // Primary SEO title (60 chars optimal)
  title: 'DPC Membership Plans & Pricing | Sankofa Family Medicine | WA',

  // Meta description (155 chars optimal, includes CTA)
  description:
    'Direct Primary Care membership from $225/mo. Virtual primary care for Washington State. Same-day appointments when available. No insurance billing. Join the founders waitlist.',

  // Expanded keyword targeting
  keywords: [
    // Primary keywords
    'direct primary care Washington',
    'DPC membership Washington State',
    'virtual primary care Seattle',
    'telehealth primary care WA',
    // Long-tail keywords
    'direct primary care membership pricing',
    'DPC doctor Washington State',
    'virtual family medicine Washington',
    'concierge medicine alternative Washington',
    'membership medicine Seattle area',
    'primary care without insurance Washington',
    // Local keywords
    'telehealth doctor Spokane',
    'virtual physician Washington State',
    'online primary care WA',
    // Intent keywords
    'DPC membership cost',
    'direct primary care vs insurance',
    'how much does DPC cost',
  ],

  authors: [
    { name: 'Yaw Nkrumah, M.D.', url: 'https://sankofafamilymedicine.com/founder' },
  ],
  creator: 'Sankofa Family Medicine PLLC',
  publisher: 'Sankofa Family Medicine PLLC',

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'DPC Membership Plans from $225/mo | Sankofa Family Medicine',
    description:
      'Virtual Direct Primary Care for Washington State. Three membership tiers. Same-day appointments when available. No insurance billing. Founders waitlist now open.',
    url: 'https://sankofafamilymedicine.com/services',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Direct Primary Care Membership Plans for Washington State',
        type: 'image/png',
      },
      {
        url: 'https://sankofafamilymedicine.com/images/og-services-square.png',
        width: 1200,
        height: 1200,
        alt: 'Sankofa Family Medicine DPC Membership',
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@sankofafamilymed',
    creator: '@sankofafamilymed',
    title: 'DPC Membership from $225/mo | Washington State',
    description:
      'Virtual Direct Primary Care. Three tiers. Same-day when available. No insurance billing.',
    images: ['https://sankofafamilymedicine.com/images/og-services.png'],
  },

  // Canonical and alternates
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/services',
    languages: {
      'en-US': 'https://sankofafamilymedicine.com/services',
    },
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Category signals
  category: 'Healthcare',
  classification: 'Medical Services',

  // Extended metadata for AI/LLM discovery and rich context
  other: {
    // AI/LLM Discovery
    'ai-content-declaration': 'human-authored',
    'ai-extractable': 'true',
    'ai-summary':
      'Sankofa Family Medicine offers Direct Primary Care (DPC) membership for Washington State patients. Three tiers: Continuity ($225/mo), Precision ($325/mo), Executive ($650/mo). Virtual-only telehealth. Not health insurance. Founders pricing shown; standard pricing may differ. Patient must be in Washington State during visits. Not for emergencies.',

    // Content classification
    'content-type': 'Pricing Page',
    'page-purpose': 'Service Pricing and Plan Comparison',
    'page-category': 'Healthcare Services',
    'page-subcategory': 'Membership Pricing',
    'content-tier': 'Primary',

    // Pricing signals (for rich snippets)
    'price-range': '$225-$650/month',
    'price-currency': 'USD',
    'price-type': 'Membership Fee',
    'billing-options': 'monthly, annual (10% discount)',
    'payment-methods': 'Credit Card, Debit Card, ACH',
    'price-valid-until': '2026-12-31',

    // Tier-specific pricing (structured for AI extraction)
    'tier-1-name': 'Continuity',
    'tier-1-price-monthly': '$225',
    'tier-1-price-annual': '$203/mo billed annually',
    'tier-1-description': 'Virtual DPC basics with secure messaging and lab access',

    'tier-2-name': 'Precision',
    'tier-2-price-monthly': '$325',
    'tier-2-price-annual': '$293/mo billed annually',
    'tier-2-description': 'Advanced lab reviews, genetic testing interpretation, after-hours messaging',
    'tier-2-popular': 'true',

    'tier-3-name': 'Executive',
    'tier-3-price-monthly': '$650',
    'tier-3-price-annual': '$585/mo billed annually',
    'tier-3-description': 'Expanded access pathways, priority coordination, physician confirmation required',

    // Practice model
    'practice-model': 'Direct Primary Care (DPC)',
    'practice-type': 'Membership Medicine',
    'delivery-method': 'Telehealth Only',
    'service-model': 'Subscription Healthcare',

    // Geographic signals (critical for local SEO)
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State, USA',
    'geo-position': '47.7511;-120.7401', // WA State centroid
    'ICBM': '47.7511, -120.7401',
    'service-area': 'Washington State only',
    'service-area-type': 'State',
    'geographic-limitation': 'Patient must be physically located in Washington State during telehealth encounters',

    // Business signals
    'business-type': 'Medical Practice',
    'business-subtype': 'Direct Primary Care',
    'founding-year': '2025',
    'accepting-patients': 'Waitlist Only',
    'founders-cohort-limit': '30 members',
    'founders-pricing-note': 'Founders pricing shown; standard pricing may differ',
    'launch-date': '2026-Q1',

    // Compliance signals
    'insurance-disclaimer': 'This is not health insurance',
    'emergency-disclaimer': 'Not for emergencies - call 911',
    'waitlist-disclaimer': 'Joining waitlist does not create physician-patient relationship',
    'state-registration': 'RCW 48.150',
    'hipaa-compliant': 'true',

    // Trust signals
    'physician-board-certified': 'true',
    'physician-name': 'Yaw Nkrumah, M.D.',
    'medical-school': 'Medical University of South Carolina',

    // Technical SEO
    'revisit-after': '7 days',
    'rating': 'General',
    'distribution': 'Global',
    'coverage': 'Washington State, USA',

    // Dublin Core metadata
    'DC.title': 'Direct Primary Care Membership Plans & Pricing',
    'DC.creator': 'Sankofa Family Medicine PLLC',
    'DC.subject': 'Direct Primary Care, Membership Medicine, Telehealth',
    'DC.description': 'DPC membership pricing for Washington State patients',
    'DC.publisher': 'Sankofa Family Medicine PLLC',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.language': 'en-US',
    'DC.coverage': 'Washington State, USA',
  },

  // Verification (add your actual codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

// Comprehensive Schema.org graph
const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebSite (for sitelinks search)
    {
      '@type': 'WebSite',
      '@id': 'https://sankofafamilymedicine.com/#website',
      url: 'https://sankofafamilymedicine.com',
      name: 'Sankofa Family Medicine',
      description: 'Direct Primary Care for Washington State',
      publisher: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      inLanguage: 'en-US',
    },

    // 2. WebPage (this page)
    {
      '@type': 'WebPage',
      '@id': 'https://sankofafamilymedicine.com/services#webpage',
      url: 'https://sankofafamilymedicine.com/services',
      name: 'DPC Membership Plans & Pricing | Sankofa Family Medicine',
      description:
        'Direct Primary Care membership pricing for Washington State. Three tiers from $225-$650/month. Virtual telehealth. Founders pricing shown.',
      isPartOf: { '@id': 'https://sankofafamilymedicine.com/#website' },
      about: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      breadcrumb: { '@id': 'https://sankofafamilymedicine.com/services#breadcrumb' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://sankofafamilymedicine.com/images/og-services.png',
        width: 1200,
        height: 630,
      },
      datePublished: '2026-01-01',
      dateModified: currentDate,
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: [
          'h1',
          '#pricing-heading',
          '[data-speakable]',
          '#hero-heading',
          '.section-title',
        ],
      },
      mainEntity: { '@id': 'https://sankofafamilymedicine.com/services#offerCatalog' },
    },

    // 3. BreadcrumbList
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://sankofafamilymedicine.com/services#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sankofafamilymedicine.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Membership Plans',
          item: 'https://sankofafamilymedicine.com/services',
        },
      ],
    },

    // 4. OfferCatalog (container for all products)
    {
      '@type': 'OfferCatalog',
      '@id': 'https://sankofafamilymedicine.com/services#offerCatalog',
      name: 'Direct Primary Care Membership Plans',
      description: 'Three-tier DPC membership for Washington State patients',
      numberOfItems: 3,
      itemListElement: [
        { '@id': 'https://sankofafamilymedicine.com/services#continuity' },
        { '@id': 'https://sankofafamilymedicine.com/services#precision' },
        { '@id': 'https://sankofafamilymedicine.com/services#executive' },
      ],
    },

    // 5. Product - Continuity Membership
    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#continuity',
      name: 'Continuity Membership',
      description:
        'Virtual Direct Primary Care basics for Washington State patients. Includes physician-led visits, secure messaging during business hours, chronic condition management, and access to lower-cost lab pricing options. Founders pricing shown.',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Healthcare Membership',
      sku: 'SFM-CONTINUITY-2026',
      mpn: 'CONTINUITY',
      image: 'https://sankofafamilymedicine.com/images/tier-continuity.png',
      offers: {
        '@type': 'Offer',
        '@id': 'https://sankofafamilymedicine.com/services#continuity-offer',
        price: '225',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/PreOrder',
        availabilityStarts: '2026-02-01',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: {
          '@type': 'State',
          name: 'Washington',
          addressCountry: 'US',
        },
        eligibleRegion: {
          '@type': 'State',
          name: 'Washington',
          addressCountry: 'US',
        },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '225',
          priceCurrency: 'USD',
          unitCode: 'MON',
          unitText: 'month',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: 1,
            unitCode: 'MON',
          },
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressRegion: 'WA',
            addressCountry: 'US',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            businessDays: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            },
          },
        },
      },
    },

    // 6. Product - Precision Membership (POPULAR)
    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#precision',
      name: 'Precision Membership',
      description:
        'Virtual Direct Primary Care with advanced lab reviews, genetic testing interpretation (test costs separate), and limited after-hours messaging for time-sensitive, non-emergent concerns. Most popular tier. Founders pricing shown.',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Healthcare Membership',
      sku: 'SFM-PRECISION-2026',
      mpn: 'PRECISION',
      image: 'https://sankofafamilymedicine.com/images/tier-precision.png',
      offers: {
        '@type': 'Offer',
        '@id': 'https://sankofafamilymedicine.com/services#precision-offer',
        price: '325',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/PreOrder',
        availabilityStarts: '2026-02-01',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: {
          '@type': 'State',
          name: 'Washington',
          addressCountry: 'US',
        },
        eligibleRegion: {
          '@type': 'State',
          name: 'Washington',
          addressCountry: 'US',
        },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '325',
          priceCurrency: 'USD',
          unitCode: 'MON',
          unitText: 'month',
        },
      },
    },

    // 7. Product - Executive Membership
    {
      '@type': 'Product',
      '@id': 'https://sankofafamilymedicine.com/services#executive',
      name: 'Executive Membership',
      description:
        'Virtual Direct Primary Care with expanded access pathways for time-sensitive, non-emergent needs, priority coordination, and care coordination outside business hours when clinically appropriate. Enrollment by physician confirmation. Founders pricing shown.',
      brand: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      category: 'Healthcare Membership',
      sku: 'SFM-EXECUTIVE-2026',
      mpn: 'EXECUTIVE',
      image: 'https://sankofafamilymedicine.com/images/tier-executive.png',
      offers: {
        '@type': 'Offer',
        '@id': 'https://sankofafamilymedicine.com/services#executive-offer',
        price: '650',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/PreOrder',
        availabilityStarts: '2026-02-01',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        seller: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: {
          '@type': 'State',
          name: 'Washington',
          addressCountry: 'US',
        },
        eligibleRegion: {
          '@type': 'State',
          name: 'Washington',
          addressCountry: 'US',
        },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '650',
          priceCurrency: 'USD',
          unitCode: 'MON',
          unitText: 'month',
        },
      },
    },

    // 8. FAQPage (8 questions - matches page)
    {
      '@type': 'FAQPage',
      '@id': 'https://sankofafamilymedicine.com/services#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Direct Primary Care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Direct Primary Care (DPC) is a membership model. You pay a monthly fee directly to your clinic for primary care, instead of the clinic billing your insurance for each visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need health insurance with DPC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. DPC covers primary care only. Keep insurance for emergencies, hospital care, specialists, imaging, and prescriptions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to be in Washington State for visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You must be physically located in Washington State at the time of your telehealth visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this service for emergencies or urgent care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This practice does not provide emergency or urgent care services. For emergencies, call 911 or go to the nearest emergency room.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I need a specialist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your physician can help coordinate referrals when needed. Specialist care is separate and is provided by third-party clinics and hospitals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is virtual care the right fit for me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Virtual care works well for many common primary care needs. Some concerns require an in-person exam or testing. If that happens, we will guide you to in-person care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does joining the founders waitlist create a doctor-patient relationship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Joining the founders waitlist does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the prices on this page final?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The prices shown are Founders pricing, available while Founders enrollment remains open. Your exact membership fee is confirmed prior to enrollment. Pricing is set by the Practice and is not individually negotiated. Standard pricing may apply after the Founders cohort closes.',
          },
        },
      ],
    },

    // 9. MedicalBusiness (Organization)
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      legalName: 'Sankofa Family Medicine PLLC',
      alternateName: ['Sankofa Family Med', 'SFM'],
      url: 'https://sankofafamilymedicine.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sankofafamilymedicine.com/images/logo.png',
        width: 400,
        height: 400,
      },
      image: 'https://sankofafamilymedicine.com/images/og-default.png',
      telephone: '+1-425-285-7390',
      email: 'info@sankofafamilymedicine.com',
      priceRange: '$225-$650/month',
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
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 47.6588,
        longitude: -117.4260,
      },
      areaServed: {
        '@type': 'State',
        name: 'Washington',
        addressCountry: 'US',
      },
      serviceArea: {
        '@type': 'State',
        name: 'Washington',
        addressCountry: 'US',
      },
      medicalSpecialty: [
        {
          '@type': 'MedicalSpecialty',
          name: 'Primary Care',
        },
        {
          '@type': 'MedicalSpecialty',
          name: 'Family Medicine',
        },
      ],
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Virtual Primary Care Consultation',
          procedureType: 'https://schema.org/NoninvasiveProcedure',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Chronic Disease Management',
          procedureType: 'https://schema.org/NoninvasiveProcedure',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Preventive Care',
          procedureType: 'https://schema.org/NoninvasiveProcedure',
        },
      ],
      hasOfferCatalog: { '@id': 'https://sankofafamilymedicine.com/services#offerCatalog' },
      isAcceptingNewPatients: false,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '12:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-425-285-7390',
          contactType: 'customer support',
          areaServed: 'US-WA',
          availableLanguage: ['en'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
        },
        {
          '@type': 'ContactPoint',
          email: 'info@sankofafamilymedicine.com',
          contactType: 'customer support',
        },
      ],
      founder: {
        '@type': 'Person',
        name: 'Yaw Nkrumah',
        honorificSuffix: 'M.D.',
        jobTitle: 'Founder & Physician',
        url: 'https://sankofafamilymedicine.com/founder',
      },
      sameAs: [
        'https://www.linkedin.com/company/sankofafamilymedicine',
        'https://twitter.com/sankofafamilymed',
      ],
      slogan: 'Medicine That Remembers™',
      knowsAbout: [
        'Direct Primary Care',
        'Telehealth',
        'Family Medicine',
        'Chronic Disease Management',
        'Preventive Care',
        'Virtual Healthcare',
      ],
    },

    // 10. Service (the DPC service itself)
    {
      '@type': 'Service',
      '@id': 'https://sankofafamilymedicine.com/#dpc-service',
      name: 'Direct Primary Care Membership',
      alternateName: 'DPC Membership',
      description:
        'Membership-based virtual primary care for Washington State patients. Monthly fee covers unlimited virtual visits, secure messaging, care coordination, and access to lower-cost lab pricing.',
      provider: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      serviceType: 'Direct Primary Care',
      areaServed: {
        '@type': 'State',
        name: 'Washington',
        addressCountry: 'US',
      },
      audience: {
        '@type': 'PeopleAudience',
        geographicArea: {
          '@type': 'State',
          name: 'Washington',
          addressCountry: 'US',
        },
        suggestedMinAge: 12,
      },
      hasOfferCatalog: { '@id': 'https://sankofafamilymedicine.com/services#offerCatalog' },
      termsOfService: 'https://sankofafamilymedicine.com/membership-terms',
      serviceOutput: 'Virtual primary care consultation and ongoing care management',
    },
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Primary schema graph */}
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
