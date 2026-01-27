import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founders Waitlist | Sankofa Family Medicine | Medicine That Remembers™',
  description:
    'Join the Sankofa Family Medicine Founders Waitlist. Founders cohort limited (about 30 memberships). Clinical care plans to begin February 2026. No payment required to join the waitlist.',
  keywords: [
    'Sankofa Family Medicine waitlist',
    'founders waitlist',
    'direct primary care waitlist',
    'DPC Washington waitlist',
    'membership-based primary care',
    'telehealth primary care Washington',
  ],
  authors: [{ name: 'Yaw Nkrumah, M.D.', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'Founders Waitlist | Sankofa Family Medicine',
    description:
      'Join the Founders Waitlist. Founders cohort limited (about 30 memberships). Clinical care plans to begin February 2026. No payment required to join.',
    url: 'https://sankofafamilymedicine.com/founders-waitlist',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-waitlist.png',
        width: 1200,
        height: 630,
        alt: 'Join the Sankofa Family Medicine Founders Waitlist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders Waitlist | Sankofa Family Medicine',
    description:
      'Join the Founders Waitlist. Founders cohort limited (about 30 memberships). No payment required to join.',
    images: ['https://sankofafamilymedicine.com/images/og-waitlist.png'],
    creator: '@sankofafamilymed',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/founders-waitlist',
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
    'ai-content-declaration': 'human-authored',
    'content-type': 'Waitlist Page',
    'content-purpose': 'Interest form for founders waitlist',
    'page-category': 'Healthcare Services',
    'practice-model': 'Direct Primary Care (DPC), Membership Medicine',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
  },
}

export default function FoundersWaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
