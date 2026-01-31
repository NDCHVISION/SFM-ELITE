import { Metadata } from 'next'

/* =========================================================
FOUNDERS WAITLIST LAYOUT - FULLY OPTIMIZED
Version: 3.0 MAXED
=========================================================
SEO: ✅ metadataBase, canonical, OG, Twitter, robots, AI metadata
Legal: ✅ WA DOH compliant, no outcome guarantees
Accessibility: ✅ Handled in page component
Performance: ✅ Minimal layout, children pass-through
========================================================= */

export const metadata: Metadata = {
  // Base URL for relative paths
  metadataBase: new URL('https://sankofafamilymedicine.com'),

  // Primary SEO
  title: 'Founders Waitlist | Sankofa Family Medicine | Washington State',
  description:
    'Join the Sankofa Family Medicine Founders Waitlist. Limited to approximately 30 founding memberships. Membership-based primary care via telehealth for Washington State. Clinical care planned early 2026. No payment required.',

  // Keywords (for legacy crawlers)
  keywords: [
    'Sankofa Family Medicine waitlist',
    'founders waitlist Washington',
    'concierge primary care waitlist',
    'precision medicine Washington State',
    'membership primary care Seattle',
    'telehealth primary care Washington',
    'concierge medicine waitlist',
    'Dr. Yaw Nkrumah',
    'family medicine membership',
  ],

  // Authorship
  authors: [{ name: 'Yaw Nkrumah, M.D.', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine PLLC',
  publisher: 'Sankofa Family Medicine PLLC',

  // OpenGraph (Facebook, LinkedIn, iMessage)
  openGraph: {
    title: 'Join the Founders Waitlist | Sankofa Family Medicine',
    description:
      'Limited to approximately 30 founding memberships. Membership-based primary care for Washington State via telehealth. No payment required to join.',
    url: '/founders-waitlist',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-waitlist.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Founders Waitlist - Medicine That Remembers',
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@sankofafamilymed',
    creator: '@sankofafamilymed',
    title: 'Founders Waitlist | Sankofa Family Medicine',
    description:
      'Limited founding memberships. Telehealth primary care for Washington State. No payment required.',
    images: ['/images/og-waitlist.png'],
  },

  // Canonical URL
  alternates: {
    canonical: '/founders-waitlist',
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

  // Category
  category: 'Healthcare',

  // Verification (add your actual codes)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },

  // Extended metadata for AI/LLM discovery and rich results
  other: {
    // AI/LLM Discovery
    'ai-content-declaration': 'human-authored',
    'ai-extractable': 'true',
    'ai-summary': 'Waitlist registration page for Sankofa Family Medicine founding membership. No payment required. Washington State telehealth primary care.',

    // Content classification
    'content-type': 'Waitlist Registration',
    'content-purpose': 'Lead capture for founding membership interest',
    'page-category': 'Healthcare Services',
    'page-subcategory': 'Primary Care Membership',

    // Practice model
    'practice-model': 'Concierge Precision Medicine Primary Care',
    'practice-type': 'Membership Medicine, Concierge Primary Care',
    'delivery-method': 'Telehealth, Virtual Care',

    // Geographic
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'service-area': 'Washington State, USA',
    'ICBM': '47.6062,-122.3321', // Seattle coordinates for geo

    // Waitlist-specific
    'waitlist-status': 'open',
    'payment-required': 'false',
    'target-launch-date': 'early 2026',
    'cohort-size': 'approximately 30',
    'enrollment-type': 'interest-only',

    // Legal/compliance markers
    'hipaa-notice': 'available',
    'insurance-disclaimer': 'This is not health insurance',
    'state-registration': 'RCW 48.150',

    // Schema hints for AI
    'schema-type': 'WebPage, FAQPage',
    'primary-action': 'JoinAction',
  },
}

export default function FoundersWaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
