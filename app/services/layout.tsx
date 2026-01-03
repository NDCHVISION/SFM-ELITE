import { Metadata } from 'next'

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://sankofafamilymedicine.com/#practice',
      name: 'Sankofa Family Medicine',
      description: 'Virtual-first concierge medicine practice serving Washington State',
      url: 'https://sankofafamilymedicine.com',
      telephone: '+1-425-285-7390',
      email: 'info@sankofafamilymedicine.com',
      areaServed: 'Washington State, USA',
      priceRange: '$195-$449/month',
      medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Membership Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Continuity Concierge',
              description: 'Essential virtual concierge primary care designed to restore the continuity traditional medicine has lost',
            },
            price: '195',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '195',
              priceCurrency: 'USD',
              unitText: 'month',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Precision Concierge',
              description: 'Everything in Continuity Concierge plus deeper preventive insight, advanced diagnostics when appropriate, and more proactive follow up',
            },
            price: '295',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '295',
              priceCurrency: 'USD',
              unitText: 'month',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Executive Concierge',
              description: 'Concierge level care with direct phone access during extended hours and comprehensive health planning for founders, executives, and professionals',
            },
            price: '449',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '449',
              priceCurrency: 'USD',
              unitText: 'month',
              billingDuration: 'P1M',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
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
          name: 'Services & Pricing',
          item: 'https://sankofafamilymedicine.com/services',
        },
      ],
    },
  ],
}

// FAQ Schema for rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is concierge medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Concierge medicine is a membership-based model where you pay a monthly fee directly to your physician, removing insurance from the primary care relationship. This allows for longer visits, easier access, and care focused on you rather than billing codes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I still need health insurance with concierge medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Concierge medicine covers primary care only. You should maintain coverage for emergencies, hospitalizations, specialists, and catastrophic events. Many members pair concierge medicine with high-deductible health plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I need a specialist referral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Nkrumah will coordinate referrals to trusted specialists and help navigate the process. Care coordination is included in all membership tiers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is virtual care as effective as in-person visits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most primary care needs, yes. Research shows virtual care provides equivalent outcomes for many conditions, while offering greater convenience and access. We will refer you for in-person evaluation when clinically indicated.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does membership cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine offers three membership tiers: Continuity Concierge at $195/month, Precision Concierge at $295/month, and Executive Concierge at $449/month. All plans include generous virtual visit access, direct secure messaging with your physician, and wholesale lab pricing. Annual billing provides a 10% discount.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Services & Pricing | Virtual Concierge Medicine | Washington State',
  description: 'Sankofa Family Medicine offers virtual-first concierge medicine across Washington State. Membership from $195/month includes genetic testing, precision medicine, and cardiometabolic health optimization. Founding members lock in their rate for life.',
  keywords: [
    'concierge medicine Washington',
    'concierge membership pricing',
    'virtual primary care',
    'telehealth Washington State',
    'concierge medicine Seattle',
    'genetic testing primary care',
    'pharmacogenomics',
    'precision medicine',
    'family medicine membership',
    'HSA eligible healthcare',
    'cash pay doctor',
    'unlimited doctor visits',
    'same day appointments',
    'direct physician access',
    'GLP-1 weight loss Washington',
  ],
  openGraph: {
    title: 'Services & Pricing | Sankofa Family Medicine',
    description: 'Premium virtual concierge medicine starting at $195/month. Founding members lock in their rate for life.',
    url: 'https://sankofafamilymedicine.com/services',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Premium Virtual Concierge Medicine Membership',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Pricing | Sankofa Family Medicine',
    description: 'Premium virtual concierge medicine starting at $195/month. Founding members lock in their rate for life.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/services',
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
  // Enhanced AI/LLM metadata
  other: {
    'ai-content-declaration': 'human-authored',
    'content-type': 'Services',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
    'practice-type': 'Concierge Medicine',
    'price-range': '$195-$449/month',
    'payment-methods': 'Credit Card, Debit Card, HSA, FSA',
    'founding-member-offer': 'Founding members lock in their rate for life. Limited spots available.',
    
    // Detailed LLM summary for AI assistants
    'llm-summary': `Sankofa Family Medicine Membership Tiers:

TIER 1 - CONTINUITY CONCIERGE ($195/month, $176/month billed annually):
- Generous virtual visit access
- Same-day or next-day appointments
- Direct secure messaging with your physician
- 45-minute initial consultation
- Wholesale lab pricing (up to 90% off retail)
- Chronic disease management
- Medication management
- Care coordination
- HSA/FSA eligible

TIER 2 - PRECISION CONCIERGE ($295/month, $266/month billed annually) - Most Popular:
- Everything in Continuity Concierge, plus:
- Genetic testing and interpretation
- Pharmacogenomics (medication DNA matching)
- Advanced biomarker panels
- Cardiometabolic risk profiling
- Personalized prevention protocols
- Priority scheduling
- Extended visit times (60 min)
- Quarterly health reviews

TIER 3 - EXECUTIVE CONCIERGE ($449/month, $404/month billed annually):
- Everything in Precision Concierge, plus:
- Dedicated phone line
- After-hours access for urgent needs
- Annual comprehensive health assessment
- Executive health planning
- Family health coordination
- Specialist coordination and advocacy
- Personalized wellness protocols
- Concierge-level responsiveness

FOUNDING MEMBER OFFER: Join now and lock in your rate for life. Limited spots available.`,
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
