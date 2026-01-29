import type { Metadata } from 'next'
import HomePage from './home-page-client'

// =============================================================================
// METADATA - 2026 SEO & AI Scraper Optimized (SERVER FILE)
// Notes (WA compliance + marketing hygiene):
// - You are NOT "accepting new patients" yet - you are accepting a Founders Waitlist.
// - Avoid language that implies a doctor-patient relationship is created by signing up.
// - Avoid anything that sounds like guaranteed access or outcomes.
// =============================================================================

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
    // Content Declaration
    'ai-content-declaration': 'human-authored',
    'content-type': 'Homepage',
    'content-purpose': 'Practice introduction, membership information, founders waitlist',
    'page-category': 'Healthcare Services',

    // Medical Practice Info (keep truthful and non-misleading)
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine',
    'practice-model': 'Direct Primary Care, Membership-Based Primary Care',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'service-cities':
      'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities, Richland, Kennewick, Pasco',

    // IMPORTANT: Waitlist, not active patient enrollment
    'accepting-patients': 'founders-waitlist',
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

    // Patient Portal / Waitlist
    'patient-enrollment-url': 'https://sankofafamilymedicine.com/founders-waitlist',
    'enrollment-method': 'Online waitlist form',
    'appointment-booking': 'Through patient portal after enrollment begins',

    // Content Freshness
    'article-modified-time': '2026-01-28',
    'content-modified': '2026-01-28',

    // Enhanced LLM Context
    'llm-summary':
      'Homepage for Sankofa Family Medicine, a virtual, membership-based primary care practice serving Washington State through a Direct Primary Care (DPC) model. Founders Waitlist open. Enrollment planned to begin early 2026. Three membership tiers: Continuity ($225-$275/mo), Precision ($325-$375/mo), Executive ($650-$725/mo). Founding members receive the lower end of each range. Rate confirmed before enrollment.',
    'llm-key-facts':
      'Virtual Membership-Based Primary Care | Direct Primary Care Model | Washington State | $225-$725/month | Dr. Yaw Nkrumah MD | Board Certified Family Medicine | Founders Waitlist | Medicine That Remembers™ | 45-75 minute visits (planned)',

    // Voice Search
    'voice-query-match':
      'What is Sankofa Family Medicine, How much does Sankofa Family Medicine cost, Is Sankofa Family Medicine accepting new patients, What is membership-based primary care, Virtual doctor in Washington State, DPC near me',
    'voice-search-answer':
      'Sankofa Family Medicine is a virtual, membership-based primary care practice serving Washington State. The Founders Waitlist is open. Enrollment is planned to begin in early 2026. No payment is required to join the waitlist.',
    'speakable-summary':
      'Sankofa Family Medicine offers virtual, membership-based primary care across Washington State with planned membership pricing from $225 to $725 monthly. Founders Waitlist open.',

    // Featured Snippet Targets
    'snippet-what':
      'Sankofa Family Medicine is a virtual, membership-based primary care practice serving Washington State, delivered through a Direct Primary Care (DPC) model',
    'snippet-who': 'Founded by Dr. Yaw Nkrumah, MD, board-certified in family medicine',
    'snippet-cost':
      'Planned membership ranges: Continuity $225-$275/month, Precision $325-$375/month, Executive $650-$725/month. Founding members receive the lower end of each range. Rate confirmed before enrollment begins.',
    'snippet-how': 'Join the founders waitlist through the website. No payment is required to join the waitlist.',
    'snippet-target': 'definition, list, pricing',
    'answer-box-eligible': 'true',
  },
}

export default function Page() {
  return <HomePage />
}

