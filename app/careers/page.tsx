import ComingSoon from '@/components/ComingSoon'
import { Briefcase } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Careers | Join Sankofa Family Medicine',
  description: 'Career opportunities at Sankofa Family Medicine in Washington State. Join our team building the future of virtual primary care with Dr. Yaw Nkrumah. Positions in telehealth, healthcare operations, and patient care.',
  keywords: ['healthcare careers Washington', 'telehealth jobs', 'medical careers', 'primary care jobs', 'Sankofa careers'],
  openGraph: {
    title: 'Healthcare Careers | Join Sankofa Family Medicine',
    description: 'Career opportunities building the future of virtual primary care.',
    url: 'https://sankofafamilymedicine.com/careers',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Healthcare Careers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Careers | Sankofa Family Medicine',
    description: 'Career opportunities building the future of virtual primary care.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/careers',
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
    'content-type': 'Careers',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

export default function CareersPage() {
  return (
    <ComingSoon
      title="Healthcare Careers"
      description="Join our team building the future of virtual primary care. We're looking for people who believe in continuity, precision, and dignity in medicine."
      icon={<Briefcase size={48} strokeWidth={1.5} />}
      expectedDate="2026"
    />
  )
}

