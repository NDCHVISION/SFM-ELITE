import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founding Member Enrollment | Sankofa Family Medicine',
  description: 'Join Sankofa Family Medicine as a founding member. Reserve your spot for personalized virtual concierge primary care in Washington State.',
  keywords: [
    'founding member enrollment',
    'Sankofa Family Medicine enrollment',
    'concierge medicine enrollment',
    'direct primary care Washington',
    'virtual primary care enrollment',
  ],
  openGraph: {
    title: 'Founding Member Enrollment | Sankofa Family Medicine',
    description: 'Join Sankofa Family Medicine as a founding member. Reserve your spot for personalized virtual concierge primary care in Washington State.',
    url: 'https://sankofafamilymedicine.com/founding-member-enrollment',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Founding Member Enrollment - Sankofa Family Medicine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founding Member Enrollment | Sankofa Family Medicine',
    description: 'Join Sankofa Family Medicine as a founding member. Reserve your spot for personalized virtual concierge primary care in Washington State.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/founding-member-enrollment',
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

export default function FoundingMemberEnrollmentPage() {
  return (
    <section className="py-16 px-5 bg-[#1a1a1a] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-display text-sfm-gold mb-5 text-center">
          Complete Your Founding Member Enrollment
        </h1>
        
        <p className="text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto mb-10 text-center">
          Join Sankofa Family Medicine and reserve your spot for care that remembers. 
          Complete the enrollment form below to begin your journey with medicine built 
          on continuity and connection.
        </p>
        
        <div className="w-full max-w-[1200px] mx-auto rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            frameBorder="0" 
            className="w-full"
            height="800" 
            src="https://sankofafamilymedicine.atlas.md/enrollment/index.html?account=h5MEw4d0pIPUxA4CiOGy"
            title="Sankofa Family Medicine Enrollment Form"
          />
        </div>
        
      </div>
    </section>
  )
}
