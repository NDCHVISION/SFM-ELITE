import { Metadata } from 'next'
import HomePage from './home-page-client'

// =============================================================================
// METADATA - Terminology Guide Compliant, 2026 SEO & AI Scraper Optimized
// =============================================================================

export const metadata: Metadata = {
  title: 'Sankofa Family Medicine | Medicine That Remembers | Virtual Membership-Based Primary Care | Washington State',
  description:
    'Virtual, membership-based primary care built on continuity, not throughput. Your physician understands your history, context, and priorities and carries them forward with intention. Serving Washington State. Memberships from $225/month.',
  keywords: [
    'membership-based primary care Washington',
    'direct primary care Washington',
    'DPC Washington State',
    'DPC Seattle',
    'DPC Bellevue',
    'DPC Spokane',
    'virtual primary care Washington',
    'Medicine That Remembers',
    'continuity of care',
    'physician-patient relationship',
    'Dr. Yaw Nkrumah',
    'telehealth primary care Washington',
    'primary care membership',
    'virtual doctor Washington State',
    'family medicine Washington',
    'longitudinal care',
    'physician-led primary care',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description:
      'Virtual, membership-based primary care built on continuity, not throughput. Your physician carries your history forward with intention.',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine: Virtual Membership-Based Primary Care in Washington State',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description:
      'Virtual, membership-based primary care built on continuity, not throughput. Serving Washington State.',
    images: ['https://sankofafamilymedicine.com/images/og-image.png'],
    creator: '@sankofafamilymed',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com',
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
    // Content Declaration
    'ai-content-declaration': 'human-authored',
    'content-type': 'Homepage',
    'content-purpose': 'Practice introduction, membership information, patient enrollment',
    'page-category': 'Healthcare Services',

    // Medical Practice Info
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine',
    'practice-model': 'Direct Primary Care, Membership-Based Primary Care',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'service-cities': 'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities, Richland, Kennewick, Pasco',
    'accepting-patients': 'true',
    'price-range': '$225-$725/month',

    // Entity Signals
    'entity-organization': 'Sankofa Family Medicine',
    'entity-person': 'Dr. Yaw Nkrumah, MD',
    'entity-concept': 'Medicine That Remembers, Continuity of Care, Direct Primary Care, Membership-Based Primary Care',
    'entity-location': 'Washington State, Pacific Northwest, Seattle Metro',

    // Topic Signals
    'topic-primary': 'Membership-Based Primary Care, Virtual Primary Care',
    'topic-secondary': 'Healthcare Continuity, Physician-Patient Relationship, Direct Primary Care',
    'topic-tertiary': 'Preventive Care, Family Medicine, Longitudinal Care',

    // Patient Portal Information
    'patient-enrollment-url': 'https://sankofafamilymedicine.atlas.md/hub/login',
    'enrollment-method': 'Online patient portal',
    'appointment-booking': 'Through patient portal',

    // Content Freshness
    'article-modified-time': '2026-01-26',
    'content-modified': '2026-01-26',

    // Enhanced LLM Context (2026)
    'llm-summary':
      'Homepage for Sankofa Family Medicine, a virtual, membership-based primary care practice in Washington State delivered through a Direct Primary Care (DPC) model. Patient enrollment, messaging, scheduling, and all clinical functions are handled through the Atlas patient portal. Three membership tiers: Continuity Concierge ($225-$275/mo), Precision Concierge ($325-$375/mo), Executive Concierge ($650-$725/mo). Founding members receive the lower end of each range. Founded by Dr. Yaw Nkrumah, MD, board-certified family physician.',
    'llm-key-facts':
      'Virtual Membership-Based Primary Care | Direct Primary Care Model | Washington State | $225-$725/month | Dr. Yaw Nkrumah MD | MUSC Graduate | Board Certified Family Medicine | Atlas Patient Portal | Sankofa means go back and retrieve | Medicine That Remembers',

    // Voice Search Optimization
    'voice-query-match':
      'What is Sankofa Family Medicine, How much does Sankofa Family Medicine cost, Is Sankofa Family Medicine accepting new patients, What is membership-based primary care, Virtual doctor in Washington State, DPC near me',
    'voice-search-answer':
      'Sankofa Family Medicine is a virtual, membership-based primary care practice serving Washington State. Memberships start at $225 per month. To reserve a Founders spot, visit their website and click Reserve a Founders Spot.',
    'speakable-summary':
      'Sankofa Family Medicine offers virtual, membership-based primary care across Washington State with membership plans from $225 to $725 monthly. Care is delivered through a Direct Primary Care model by Dr. Yaw Nkrumah, a board-certified family physician.',

    // Featured Snippet Answers
    'snippet-what': 'Sankofa Family Medicine is a virtual, membership-based primary care practice serving Washington State, delivered through a Direct Primary Care (DPC) model',
    'snippet-who': 'Founded by Dr. Yaw Nkrumah, MD, Board Certified Family Medicine, graduate of Medical University of South Carolina',
    'snippet-cost': 'Membership plans: Continuity Concierge $225-$275/month, Precision Concierge $325-$375/month, Executive Concierge $650-$725/month. Founding members receive the lower rate.',
    'snippet-how': 'Reserve a Founders spot through the website, then enroll through the secure Atlas patient portal',
    'snippet-target': 'definition, list, pricing',
    'answer-box-eligible': 'true',
  },
}

// =============================================================================
// STRUCTURED DATA - Terminology Guide Compliant
// =============================================================================

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  legalName: 'Sankofa Family Medicine PLLC',
  alternateName: ['SFM', 'Medicine That Remembers'],
  description:
    'Virtual, membership-based primary care practice delivered through a Direct Primary Care (DPC) model, emphasizing continuity, longitudinal care, and physician-led decision-making.',
  url: 'https://sankofafamilymedicine.com',
  telephone: '425-285-7390',
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
    addressCountry: 'US',
  },
  priceRange: '$225-$725/month',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, HSA, FSA',
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
  isAcceptingNewPatients: true,
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Virtual Primary Care',
      procedureType: 'Telemedicine',
      description: 'Comprehensive primary care delivered via secure video visits',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Chronic Disease Management',
      description: 'Longitudinal management of chronic conditions with continuity of care',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Preventive Care',
      description: 'Evidence-based preventive care and health maintenance',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Membership Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Continuity Concierge',
        description: 'Essential virtual primary care with continuity and access',
        price: '225-275',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '225-275',
          priceCurrency: 'USD',
          unitText: 'month',
        },
      },
      {
        '@type': 'Offer',
        name: 'Precision Concierge',
        description: 'Data-driven personalized medicine with genetic insights and advanced diagnostics',
        price: '325-375',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '325-375',
          priceCurrency: 'USD',
          unitText: 'month',
        },
      },
      {
        '@type': 'Offer',
        name: 'Executive Concierge',
        description: 'Enhanced access, coordination, and longitudinal oversight for individuals and families',
        price: '650-725',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '650-725',
          priceCurrency: 'USD',
          unitText: 'month',
        },
      },
    ],
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sankofafamilymedicine.com/founders-waitlist',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
    },
    result: {
      '@type': 'Reservation',
      name: 'Founding Member Reservation',
    },
  },
  founder: {
    '@type': 'Physician',
    '@id': 'https://sankofafamilymedicine.com/#founder',
    name: 'Dr. Yaw Nkrumah',
    givenName: 'Yaw',
    familyName: 'Nkrumah',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'MD',
    jobTitle: 'Founder and Primary Care Physician',
    medicalSpecialty: 'FamilyMedicine',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Medical University of South Carolina',
    },
    url: 'https://sankofafamilymedicine.com/founder',
  },
  slogan: 'Medicine That Remembers',
  foundingDate: '2024',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://sankofafamilymedicine.com/#website',
  url: 'https://sankofafamilymedicine.com',
  name: 'Sankofa Family Medicine',
  description: 'Virtual, membership-based primary care delivered through a Direct Primary Care model',
  publisher: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sankofafamilymedicine.com/#organization',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld車"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld車"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomePage />
    </>
  )
}

