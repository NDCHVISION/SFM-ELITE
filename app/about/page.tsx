import type { Metadata } from 'next'
import Script from 'next/script'
import HomePage from './home-page-client'

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),
  title: 'Sankofa Family Medicine | Medicine That Remembers™ | Virtual Membership-Based Primary Care | Washington State',
  description:
    'Virtual, membership-based primary care built on continuity, not throughput. We track your history and carry it forward so each visit builds on the last. Serving Washington State. Founders Waitlist open. Memberships expected from $225/month when enrollment begins.',
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
    title: 'Sankofa Family Medicine | Medicine That Remembers™',
    description:
      'Virtual, membership-based primary care built on continuity, not throughput. Founders Waitlist open for Washington State.',
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
    title: 'Sankofa Family Medicine | Medicine That Remembers™',
    description: 'Virtual, membership-based primary care serving Washington State. Founders Waitlist open.',
    images: ['https://sankofafamilymedicine.com/images/og-image.png'],
    creator: '@sankofafamilymed',
  },
  alternates: { canonical: 'https://sankofafamilymedicine.com' },
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
    'content-type': 'Homepage',
    'content-purpose': 'Practice introduction, membership information, founders waitlist',
    'page-category': 'Healthcare Services',
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine',
    'practice-model': 'Direct Primary Care, Membership-Based Primary Care',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'service-cities':
      'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities, Richland, Kennewick, Pasco',
    'accepting-patients': 'founders-waitlist',
    'price-range': '$225-$725/month',
    'patient-enrollment-url': 'https://sankofafamilymedicine.com/founders-waitlist',
    'enrollment-method': 'Online waitlist form',
    'appointment-booking': 'Through patient portal after enrollment begins',
    'content-modified': '2026-01-28',
    'llm-summary':
      'Homepage for Sankofa Family Medicine, a virtual, membership-based primary care practice serving Washington State through a Direct Primary Care (DPC) model. Founders Waitlist open. Enrollment planned to begin February 2026. Three membership tiers: Continuity ($225-$275/mo), Precision ($325-$375/mo), Executive ($650-$725/mo). Founding members receive the lower end of each range. Rate confirmed before enrollment.',
    'voice-search-answer':
      'Sankofa Family Medicine is a virtual, membership-based primary care practice serving Washington State. The Founders Waitlist is open. Enrollment is planned to begin in February 2026. No payment is required to join the waitlist.',
  },
}

const EXTERNAL_URLS = {
  abfmCredential: 'https://www.credential.net/169707940',
  linkedinCompany: 'https://www.linkedin.com/company/sankofa-family-medicine/',
}

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite
    {
      '@type': 'WebSite',
      '@id': 'https://sankofafamilymedicine.com/#website',
      url: 'https://sankofafamilymedicine.com',
      name: 'Sankofa Family Medicine',
      description: 'Virtual, membership-based primary care delivered through a Direct Primary Care model',
      publisher: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      inLanguage: 'en-US',
    },

    // WebPage
    {
      '@type': 'WebPage',
      '@id': 'https://sankofafamilymedicine.com/#webpage',
      url: 'https://sankofafamilymedicine.com',
      name: 'Sankofa Family Medicine | Membership-Based Primary Care | Washington State',
      description:
        'Virtual, membership-based primary care built on continuity, not throughput. Founders Waitlist open for Washington State.',
      isPartOf: { '@id': 'https://sankofafamilymedicine.com/#website' },
      about: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      inLanguage: 'en-US',
      dateModified: '2026-01-28',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
        ],
      },
    },

    // Organization / Clinic
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
      areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      medicalSpecialty: ['Primary care', 'Family medicine'],
      currenciesAccepted: 'USD',
      paymentAccepted: 'Credit Card, ACH, HSA, FSA',
      priceRange: '$225-$725/month',

      // Waitlist open - not active clinical intake yet
      isAcceptingNewPatients: false,

      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Telemedicine',
        availableLanguage: ['English'],
      },

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
          '@type': 'MedicalService',
          name: 'Virtual Primary Care',
          serviceType: 'Telemedicine',
          description: 'Primary care delivered via secure video visits (planned visit length 45-75 minutes).',
        },
        {
          '@type': 'MedicalService',
          name: 'Chronic Disease Management',
          description: 'Longitudinal management of chronic conditions with continuity of care.',
        },
        {
          '@type': 'MedicalService',
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
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '225',
              highPrice: '275',
            },
          },
          {
            '@type': 'Offer',
            name: 'Precision',
            description: 'Deeper preventive insight and advanced diagnostics when appropriate (DPC model).',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '325',
              highPrice: '375',
            },
          },
          {
            '@type': 'Offer',
            name: 'Executive',
            description: 'Enhanced access, coordination, and longitudinal oversight (DPC model).',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '650',
              highPrice: '725',
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
      sameAs: [EXTERNAL_URLS.linkedinCompany],
    },

    // Founder (keep claims tight + verifiable)
    {
      '@type': ['Person', 'Physician'],
      '@id': 'https://sankofafamilymedicine.com/#founder',
      name: 'Dr. Yaw Nkrumah, MD',
      jobTitle: 'Founder & Medical Director',
      url: 'https://sankofafamilymedicine.com/founder',
      medicalSpecialty: 'Family medicine',
      worksFor: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Board Certification in Family Medicine',
        credentialCategory: 'Board Certification',
        recognizedBy: { '@type': 'Organization', name: 'American Board of Family Medicine', alternateName: 'ABFM' },
        url: EXTERNAL_URLS.abfmCredential,
      },
    },

    // FAQPage (safe, factual, no outcomes)
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
            text: 'Sankofa Family Medicine is currently accepting Founders Waitlist sign-ups. Enrollment is planned to begin in February 2026.',
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

export default function Page() {
  return (
    <>
      <Script
        id="ld-json-graph"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <HomePage />
    </>
  )
}
