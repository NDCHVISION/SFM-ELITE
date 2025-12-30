import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emergency Resources | Sankofa Family Medicine',
  description: 'Emergency information, crisis hotlines, and hospital listings for Washington State and South Carolina patients. Know when to call 911, visit the ER, or message your clinic.',
  keywords: ['emergency resources', 'crisis hotlines', 'when to call 911', 'emergency room', 'urgent care', 'mental health crisis', 'poison control', 'Washington hospitals', 'South Carolina hospitals'],
  openGraph: {
    title: 'Emergency Resources | Sankofa Family Medicine',
    description: 'Know when to call 911, visit the ER, or message your clinic. Crisis hotlines and hospital listings for WA and SC.',
    url: 'https://sankofafamilymedicine.com/emergency',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Emergency Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Resources | Sankofa Family Medicine',
    description: 'Emergency information, crisis hotlines, and hospital listings.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/emergency',
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

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
