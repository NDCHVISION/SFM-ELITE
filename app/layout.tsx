import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MobileCTA from '@/components/MobileCTA'
import CookieConsent from '@/components/CookieConsent'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#05436e',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),
  title: {
    default: 'Sankofa Family Medicine | Medicine That Remembers',
    template: '%s | Sankofa Family Medicine',
  },
  description: 'Virtual-first concierge medicine built on continuity, relationship, and the physician-patient bond. Serving Washington State.',
  keywords: [
    'concierge medicine Washington',
    'virtual primary care',
    'direct primary care',
    'Medicine That Remembers',
    'Dr. Yaw Nkrumah',
  ],
  authors: [{ name: 'Sankofa Family Medicine' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description: 'Virtual-first concierge medicine built on continuity, relationship, and the physician-patient bond.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Medicine That Remembers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description: 'Virtual-first concierge medicine built on continuity, relationship, and the physician-patient bond.',
    images: ['/images/og-image.png'],
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
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <MobileCTA />
        <CookieConsent />
        <MedicalDisclaimer />
        <Analytics />
      </body>
    </html>
  )
}
