import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Virtual Direct Primary Care | Washington State',
  description:
    'Frequently asked questions about Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State. Learn about membership pricing, telehealth visits, genetic testing, and how Medicine That Remembers works.',
  keywords: [
    'direct primary care FAQ',
    'DPC questions Washington',
    'virtual primary care FAQ',
    'telehealth questions',
    'genetic testing FAQ',
    'precision medicine FAQ',
    'Sankofa Family Medicine',
    'Medicine That Remembers',
    'HSA FSA eligible healthcare',
    'concierge medicine questions',
  ],
  openGraph: {
    title: 'FAQ | Sankofa Family Medicine | Virtual Direct Primary Care',
    description:
      'Everything you need to know about Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State.',
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
      'Everything you need to know about Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State.',
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
- Accepts credit cards, debit cards, HSA, and FSA
- Can provide superbills for out-of-network reimbursement
- Memberships can be cancelled with 30 days notice, no cancellation fees

VIRTUAL CARE:
- All visits via HIPAA-compliant video conferencing
- No special software needed, works on any device
- Can treat: acute illness, chronic disease, mental health, preventive care, medication management
- For emergencies, patients should call 911

MEMBERSHIP TIERS:
- Tier 1 Continuity Care: $149/month (unlimited visits, messaging, basic care)
- Tier 2 Precision Care: $249/month (adds genetic testing, pharmacogenomics, AI insights)
- Tier 3 Legacy Health: $449/month (adds direct cell access, after-hours care)

FOUNDING MEMBER OFFER:
- First 30 members get Legacy Health benefits at Precision Care pricing ($249/month)
- Pricing protected while your membership remains active while membership remains continuous

GETTING STARTED:
- Enrollment begins in Atlas, our secure patient portal
- First visit is 45-60 minute comprehensive intake
- Records transfer assistance provided
- Currently serving Washington State only (South Carolina coming 2026)

PRIVACY:
- Fully HIPAA compliant
- Records encrypted and secured
- AI tools support clinical workflows but never make clinical decisions
- Data never sold or shared`,
  },
}

// Comprehensive FAQ Schema for rich results and voice assistants
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // Payment & Insurance
    {
      '@type': 'Question',
      name: 'Do you accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine is currently a direct-pay (cash-pay) practice. We do not bill insurance directly. This model allows us to spend more time with patients, avoid insurance restrictions, and provide truly personalized care. We may expand to accept insurance in the future.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my HSA or FSA to pay for Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can be used for membership fees, visits, and programs at Sankofa Family Medicine. These are qualified medical expenses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does membership cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine offers three membership tiers: Continuity Care at $149/month for essential virtual primary care, Precision Care at $249/month adding genetic testing and AI-powered insights, and Legacy Health at $449/month for concierge-level care with direct physician cell access. The first 30 founding members receive Legacy Health benefits at Precision Care pricing ($249/month), protected while your membership remains active.',
      },
    },
    // Virtual Care
    {
      '@type': 'Question',
      name: 'How do virtual visits work at Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Virtual visits are conducted via secure, HIPAA-compliant video conferencing. You'll receive a link before your appointment and can join from any device with a camera and internet connection. No special software is required.",
      },
    },
    {
      '@type': 'Question',
      name: 'What conditions can be treated virtually?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most primary care concerns can be effectively addressed via telehealth, including acute illnesses (cold, flu, infections), chronic disease management, medication refills and adjustments, mental health support, preventive care planning, lab result reviews, and health coaching. Some conditions may require in-person evaluation, and we coordinate referrals when needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is telehealth as effective as in-person care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most primary care needs, yes. Research shows that telehealth delivers comparable outcomes for many conditions, often with greater convenience and continuity. The key advantage of our model is that you see the same physician every time, which improves outcomes compared to fragmented in-person care.',
      },
    },
    // Membership
    {
      '@type': 'Question',
      name: "What's included in a Sankofa Family Medicine membership?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All membership tiers include unlimited 45-minute virtual visits with Dr. Nkrumah, secure messaging with 24-48 hour response times, care coordination, prescription management, and wholesale lab pricing (up to 90% off retail). Higher tiers add genetic testing, pharmacogenomics, AI-powered health insights via Sankofa OS, and direct physician cell phone access.',
      },
    },
    {
      '@type': 'Question',
      name: "What is the founding member offer at Sankofa Family Medicine?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first 30 members receive Legacy Health benefits at Precision Care pricing: $249/month instead of $449/month. This includes genetic testing, pharmacogenomics, direct physician cell access, and same-day appointments. This pricing is protected while your membership remains active.',
      },
    },
    // Getting Started
    {
      '@type': 'Question',
      name: 'How do I become a patient at Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Start by enrolling through our secure patient portal at sankofafamilymedicine.atlas.md. Complete your health history, select your membership tier, and we will schedule your comprehensive 45-60 minute onboarding visit where we review your complete health history and develop a personalized care plan.",
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Sankofa Family Medicine serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine currently serves patients throughout Washington State via telemedicine. Dr. Nkrumah is licensed in Washington. Expansion to South Carolina is planned for 2026, with additional states to follow.',
      },
    },
    // Privacy & Security
    {
      '@type': 'Question',
      name: 'Is my health information secure at Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are fully HIPAA-compliant. All video visits, messaging, and health records are encrypted and stored securely. We use enterprise-grade security practices and never sell or share your data. AI tools we use to support clinical workflows are also HIPAA-compliant and never make clinical decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Sankofa Family Medicine an emergency service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sankofa Family Medicine does not replace emergency services. If you experience chest pain, shortness of breath, neurological symptoms, severe injury, or any life-threatening condition, call 911 or seek immediate emergency care.',
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
