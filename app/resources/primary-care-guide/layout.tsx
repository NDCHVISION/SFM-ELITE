import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Healthy Is Your Relationship With Your Primary Care Doctor? | Free Guide',
  description: 'A physician\'s guide to continuity, prevention, and what most patients never see. Learn why normal labs can still miss problems, how continuity changes outcomes, and what questions to ask your doctor.',
  keywords: [
    'primary care guide',
    'doctor relationship',
    'healthcare continuity',
    'patient guide',
    'preventive care',
    'doctor relationship',
    'health outcomes',
    'primary care evaluation',
    'Sankofa Family Medicine',
    'Medicine That Remembers',
  ],
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/resources/primary-care-guide',
  },
  openGraph: {
    title: 'How Healthy Is Your Relationship With Your Primary Care Doctor?',
    description: 'A physician\'s guide to continuity, prevention, and what most patients never see.',
    url: 'https://sankofafamilymedicine.com/resources/primary-care-guide',
    siteName: 'Sankofa Family Medicine',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-primary-care-guide.png',
        width: 1200,
        height: 630,
        alt: 'How Healthy Is Your Relationship With Your Primary Care Doctor?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Healthy Is Your Relationship With Your Primary Care Doctor?',
    description: 'A physician\'s guide to continuity, prevention, and what most patients never see.',
    images: ['https://sankofafamilymedicine.com/images/og-primary-care-guide.png'],
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
}

// Structured data for the guide
const guideJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://sankofafamilymedicine.com/resources/primary-care-guide/#article',
  headline: 'How Healthy Is Your Relationship With Your Primary Care Doctor?',
  description: 'A physician\'s guide to continuity, prevention, and what most patients never see in primary care.',
  author: {
    '@type': 'Person',
    name: 'Dr. Yaw Nkrumah',
    jobTitle: 'Board-Certified Family Medicine Doctor',
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Sankofa Family Medicine',
    },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sankofa Family Medicine',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sankofafamilymedicine.com/images/SFM_Trans.png',
    },
  },
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  mainEntityOfPage: 'https://sankofafamilymedicine.com/resources/primary-care-guide',
  about: [
    'Primary Care',
    'Healthcare Continuity',
    'Patient-Doctor Relationship',
    'Preventive Medicine',
  ],
}

export default function PrimaryCareGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />
      {children}
    </>
  )
}
