import { Metadata } from 'next'

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://sankofafamilymedicine.com/contact/#page',
      name: 'Contact Sankofa Family Medicine',
      description: 'Become a patient through our secure Atlas portal for virtual-first direct primary care in Washington State',
      url: 'https://sankofafamilymedicine.com/contact',
      mainEntity: {
        '@type': 'MedicalBusiness',
        name: 'Sankofa Family Medicine',
        telephone: '+1-425-285-7390',
        email: 'info@sankofafamilymedicine.com',
        areaServed: 'Washington State, USA',
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
          name: 'Contact',
          item: 'https://sankofafamilymedicine.com/contact',
        },
      ],
    },
  ],
}

export const metadata: Metadata = {
  title: 'Contact | Become a Patient | Sankofa Family Medicine | Virtual Direct Primary Care',
  description: 'Become a patient at Sankofa Family Medicine through our secure Atlas portal. Virtual-first direct primary care (DPC) for patients across Washington State. Medicine That Remembers solves healthcare fragmentation through continuity, genetic testing, and precision medicine.',
  keywords: [
    'Sankofa Family Medicine contact',
    'become a patient DPC',
    'direct primary care Washington',
    'virtual DPC signup',
    'Medicine That Remembers',
    'healthcare fragmentation solution',
    'founding member',
  ],
  openGraph: {
    title: 'Contact | Become a Patient | Sankofa Family Medicine',
    description: 'Become a patient through our secure Atlas portal for virtual-first direct primary care (DPC) in Washington State. Founding members receive exclusive pricing benefits.',
    url: 'https://sankofafamilymedicine.com/contact',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Sankofa Family Medicine Virtual Direct Primary Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Sankofa Family Medicine',
    description: 'Become a patient through our secure Atlas portal for premium virtual primary care in Washington State.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/contact',
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
    'content-type': 'Contact',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  )
}
