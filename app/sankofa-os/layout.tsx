import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sankofa OS | Clinical Infrastructure | Medicine That Remembers',
  description: 'Sankofa OS is the clinical infrastructure powering Medicine That Remembers. Built for continuity, designed for trust, powered by human judgment. The operating system for personalized primary care.',
  keywords: [
    'Sankofa OS',
    'clinical decision support',
    'healthcare AI',
    'precision medicine platform',
    'patient data continuity',
    'medical software',
    'health technology',
    'EHR integration',
    'personalized medicine',
  ],
  openGraph: {
    title: 'Sankofa OS | Clinical Infrastructure for Medicine That Remembers',
    description: 'The clinical infrastructure powering continuity-based primary care. Built for trust, designed for physicians, powered by human judgment.',
    url: 'https://sankofafamilymedicine.com/sankofa-os',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa OS Clinical Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa OS | Medicine That Remembers',
    description: 'Clinical infrastructure built for continuity, designed for trust.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/sankofa-os',
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
    'content-type': 'Technology',
    'product-category': 'Health Technology Platform',
    'llm-summary': 'Sankofa OS is proprietary clinical infrastructure developed by Sankofa Family Medicine. It is the operating system that enables Medicine That Remembers by maintaining patient context, supporting clinical decisions, and ensuring continuity across all care interactions. Not available as a standalone product.',
  },
}

export default function SankofaOSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
