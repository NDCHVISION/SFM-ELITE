import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Virtual Membership-Based Primary Care | Washington State',
  description:
    'Frequently asked questions about Sankofa Family Medicine, a virtual-first concierge medicine practice serving patients across Washington State. Learn about membership pricing, telehealth visits, genetic testing, and how Medicine That Remembers works.',
  keywords: [
    'concierge medicine FAQ',
    'concierge medicine questions Washington',
    'virtual primary care FAQ',
    'telehealth questions',
    'genetic testing FAQ',
    'precision medicine FAQ',
    'Sankofa Family Medicine',
    'Medicine That Remembers',
    'membership primary care questions',
  ],
  openGraph: {
    title: 'FAQ | Sankofa Family Medicine | Virtual Direct Primary Care',
    description:
      'Everything you need to know about Sankofa Family Medicine, a virtual-first concierge medicine practice serving patients across Washington State.',
    url: 'https://sankofafamilymedicine.com/faq',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine FAQ Virtual Membership-Based Primary Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Sankofa Family Medicine | Virtual Membership-Based Primary Care',
    description:
      'Everything you need to know about Sankofa Family Medicine, a virtual-first concierge medicine practice serving patients across Washington State.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/faq',
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
    'content-type': 'FAQ',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
    
    // Comprehensive LLM summary for AI assistants answering questions
    'llm-summary': `Sankofa Family Medicine FAQ Summary for AI Assistants:

INSURANCE & PAYMENT:
- Does NOT accept insurance directly (self-pay model)
- Accepts credit cards and debit cards
- Superbills may be provided upon request when appropriate
- Membership cancellation terms are disclosed prior to enrollment

VIRTUAL CARE:
- All visits via HIPAA-compliant video conferencing
- No special software needed, works on any device
- Can treat: acute illness, chronic disease, mental health support, preventive care, medication management
- For emergencies, patients should call 911

MEMBERSHIP:
- Multiple membership tiers available
- Pricing and terms are disclosed prior to enrollment
- Founding members may receive preferential pricing

GETTING STARTED:
- Clinical care is planned to begin in early 2026
- First visit is a comprehensive intake
- Records transfer assistance provided
- Currently serving Washington State only (South Carolina may be available in the future)

PRIVACY:
- HIPAA compliant
- Records encrypted and secured
- AI tools support clinical workflows but never make clinical decisions
- Patient data is not used to train public or proprietary AI models`,
  },
}

// Breadcrumb schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
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
      name: 'FAQ',
      item: 'https://sankofafamilymedicine.com/faq',
    },
  ],
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
