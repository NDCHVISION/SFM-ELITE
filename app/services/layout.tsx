import { Metadata } from 'next'

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://sankofafamilymedicine.com/#practice',
      name: 'Sankofa Family Medicine',
      description: 'Virtual-first direct primary care practice serving Washington State',
      url: 'https://sankofafamilymedicine.com',
      telephone: '+1-425-285-7390',
      email: 'info@sankofafamilymedicine.com',
      areaServed: 'Washington State, USA',
      priceRange: '$149-$449/month',
      medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Membership Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Continuity Care',
              description: 'Essential virtual primary care with unlimited visits, same-day appointments, and direct physician messaging',
            },
            price: '149',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '149',
              priceCurrency: 'USD',
              unitText: 'month',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Precision Care',
              description: 'Data-driven personalized medicine with genetic testing, pharmacogenomics, and advanced biomarker panels',
            },
            price: '249',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '249',
              priceCurrency: 'USD',
              unitText: 'month',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Legacy Health',
              description: 'Concierge-level care with dedicated phone line, after-hours access, and comprehensive health optimization',
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
      name: 'What is Concierge Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Concierge medicine is a membership-based model where you pay a monthly fee directly to your physician, removing insurance from the primary care relationship. This allows for longer visits, easier access, and care focused on you rather than billing codes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I still need health insurance with Concierge Medicine?',
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
        text: 'Sankofa Family Medicine offers three membership tiers: Continuity Care at $149/month, Precision Care at $249/month, and Legacy Health at $449/month. All plans include unlimited virtual visits, direct physician messaging, and wholesale lab pricing. Annual billing provides a 10% discount.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Services & Pricing | Virtual Direct Primary Care | Washington State',
  description: 'Sankofa Family Medicine offers virtual-first concierge medicine across Washington State. Membership from $149/month includes genetic testing, precision medicine, and cardiometabolic health optimization. Founding members receive Legacy Health benefits at Precision Care pricing.',
  keywords: [
    'direct primary care Washington',
    'concierge medicine membership pricing',
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
    description: 'Premium virtual primary care starting at $149/month. Founding members receive Legacy Health benefits at Precision Care pricing.',
    url: 'https://sankofafamilymedicine.com/services',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Premium Virtual Primary Care Membership',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Pricing | Sankofa Family Medicine',
    description: 'Premium virtual primary care starting at $149/month. Founding members receive Legacy Health benefits at Precision Care pricing.',
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
    'practice-type': 'Direct Primary Care',
    'price-range': '$149-$449/month',
    'payment-methods': 'Credit Card, Debit Card, HSA, FSA',
    'founding-member-offer': 'First 30 members receive Legacy Health benefits at Precision Care pricing ($249/month), protected while your membership remains active',
    
    // Detailed LLM summary for AI assistants
    'llm-summary': `Sankofa Family Medicine Membership Tiers:

TIER 1 - CONTINUITY CARE ($149/month):
- Unlimited virtual visits (45 minutes each)
- Same-day or next-day appointments
- Direct physician messaging (response within 24-48 hours)
- Annual wellness exam
- Wholesale lab pricing (up to 90% off retail)
- Basic chronic disease management
- Prescription management
- HSA/FSA eligible

TIER 2 - PRECISION CARE ($249/month):
- Everything in Continuity Care, plus:
- Genetic testing and interpretation
- Pharmacogenomics (medication DNA matching)
- Advanced biomarker panels
- Sankofa OS AI-powered clinical decision support
- Cardiometabolic risk assessment
- Personalized prevention strategies
- Priority scheduling

TIER 3 - LEGACY HEALTH ($449/month):
- Everything in Precision Care, plus:
- Direct physician cell phone access
- After-hours availability
- Family health planning consultations
- Expedited specialist referrals
- Executive-level care coordination
- Annual health optimization reviews
- Concierge-level service

FOUNDING MEMBER OFFER: First 30 members receive all Legacy Health (Tier 3) benefits at Precision Care (Tier 2) pricing of $249/month, protected while your membership remains active.`,
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
