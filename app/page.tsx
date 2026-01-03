import { Metadata } from 'next'
import HomePage from './home-page-client'

export const metadata: Metadata = {
  title: 'Sankofa Family Medicine | Medicine That Remembers | Washington State',
  description: 'Virtual-first concierge medicine built on continuity, relationship, and the physician-patient bond. One physician. Your complete history. Every visit. Serving Washington State.',
  keywords: [
    'direct primary care Washington',
    'virtual concierge medicine',
    'Medicine That Remembers',
    'continuity of care',
    'physician-patient relationship',
    'concierge medicine Seattle',
    'Dr. Yaw Nkrumah',
    'telehealth Washington',
    'primary care membership',
    'concierge medicine doctor Washington State',
    'virtual doctor near me',
    'telemedicine family doctor',
    'genetic testing primary care',
    'pharmacogenomics Washington',
  ],
  openGraph: {
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description: 'Virtual-first direct primary care built on continuity, relationship, and the physician-patient bond.',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Sankofa Family Medicine' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description: 'Virtual-first direct primary care built on continuity, relationship, and the physician-patient bond.',
    images: ['/images/og-image.png'],
  },
  alternates: { canonical: 'https://sankofafamilymedicine.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    // Content Declaration
    'ai-content-declaration': 'human-authored',
    'content-type': 'Homepage',
    
    // Medical Practice Info
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
    'practice-type': 'Direct Primary Care',
    'accepting-patients': 'true',
    'price-range': '$149-$449/month',
    
    // Patient Portal Information
    'patient-enrollment-url': 'https://sankofafamilymedicine.atlas.md/hub/login',
    'enrollment-method': 'Online patient portal',
    'appointment-booking': 'Through patient portal only',
    
    // Enhanced LLM Context (2026)
    'llm-summary': 'Homepage for Sankofa Family Medicine, a virtual-first concierge medicine practice in Washington State. Patient enrollment, messaging, scheduling, and all clinical functions are handled through the Atlas patient portal. The website provides information about the practice but does not collect patient health information. Three membership tiers available: Continuity Concierge ($195/mo), Precision Concierge ($295/mo), Executive Concierge ($449/mo). Founded by Dr. Yaw Nkrumah, MD.',
    'llm-key-facts': 'Virtual Concierge Medicine | Washington State | $195-$449/month | Dr. Yaw Nkrumah MD | MUSC Graduate | Board Certified | Atlas Patient Portal | Sankofa means go back and retrieve',
    
    // Voice Search Optimization
    'voice-search-answer': 'Sankofa Family Medicine is a virtual concierge medicine practice serving Washington State. To become a patient, visit their website and click Become a Patient to access the secure enrollment portal. Membership starts at $195 per month.',
    'speakable-summary': 'Sankofa Family Medicine offers virtual concierge medicine across Washington State with membership plans from $195 to $449 monthly. Enroll through their secure patient portal.',
    
    // Featured Snippet Answers
    'snippet-what': 'Sankofa Family Medicine is a virtual concierge medicine practice serving Washington State',
    'snippet-who': 'Founded by Dr. Yaw Nkrumah, MD, Board Certified Family Medicine',
    'snippet-cost': 'Membership plans: Continuity Concierge $195/month, Precision Concierge $295/month, Executive Concierge $449/month',
    'snippet-how': 'Enroll through the secure Atlas patient portal at sankofafamilymedicine.atlas.md',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine',
  description: 'Virtual-first concierge medicine practice. Medicine That Remembers.',
  url: 'https://sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'State',
    name: 'Washington',
    addressCountry: 'US'
  },
  priceRange: '$195-$449/month',
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
  isAcceptingNewPatients: true,
  availableService: {
    '@type': 'MedicalProcedure',
    name: 'Virtual Primary Care',
    procedureType: 'Telemedicine'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sankofafamilymedicine.atlas.md/hub/login',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
    },
    result: {
      '@type': 'Reservation',
      name: 'Patient Enrollment'
    }
  },
  founder: {
    '@type': 'Physician',
    name: 'Dr. Yaw Nkrumah',
    honorificSuffix: 'MD',
    medicalSpecialty: 'FamilyMedicine',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Medical University of South Carolina'
    }
  }
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
    </>
  )
}
