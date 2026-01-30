import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Virtual Direct Primary Care | Washington State',
  description:
    'Frequently asked questions about Sankofa Family Medicine, a virtual-first concierge medicine practice serving patients across Washington State. Learn about membership pricing, telehealth visits, genetic testing, and how Medicine That Remembers works.',
  keywords: [
    'direct primary care FAQ',
    'concierge medicine questions Washington',
    'virtual primary care FAQ',
    'telehealth questions',
    'genetic testing FAQ',
    'precision medicine FAQ',
    'Sankofa Family Medicine',
    'Medicine That Remembers',
    'concierge medicine questions',
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
        alt: 'Sankofa Family Medicine FAQ Virtual Direct Primary Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Sankofa Family Medicine | Virtual Direct Primary Care',
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
- Does NOT accept insurance directly (direct-pay/cash-pay model)
- Accepts credit cards and debit cards
- Can provide superbills for out-of-network reimbursement
- Memberships can be cancelled with 30 days notice, no cancellation fees

VIRTUAL CARE:
- All visits via HIPAA-compliant video conferencing
- No special software needed, works on any device
- Can treat: acute illness, chronic disease, mental health, preventive care, medication management
- For emergencies, patients should call 911

MEMBERSHIP TIERS:
- Tier 1 Continuity Concierge: $225-$245/month ($203/month billed annually)
- Tier 2 Precision Concierge: $325-$375/month ($293/month billed annually) - Featured
- Tier 3 Executive Concierge: $650-$725/month ($585/month billed annually)

FOUNDING MEMBER OFFER:
- Founding members lock in their rate for life
- Limited spots available

GETTING STARTED:
- Clinical care begins early 2026
- First visit is 45 to 75 minute comprehensive intake
- Records transfer assistance provided
- Currently serving Washington State only (South Carolina coming 2026)

PRIVACY:
- Fully HIPAA compliant
- Records encrypted and secured
- AI tools support clinical workflows but never make clinical decisions
- Data never sold or shared`,
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
