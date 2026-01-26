import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Heart,
  FileText,
  Shield,
  Scale,
  UserCheck,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
  Zap,
  Brain,
  ClipboardCheck,
  MessageCircle,
  UserPlus,
} from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// METADATA - Fully Optimized for 2026 SEO & AI Scraper Indexing
// =============================================================================

export const metadata: Metadata = {
  title: 'About Sankofa Family Medicine | Medicine That Remembers™ | Virtual Primary Care Washington',
  description:
    'Sankofa Family Medicine is a physician-led, virtual-first Direct Primary Care practice serving Washington State. Founded by Dr. Yaw Nkrumah, MD, we practice continuity-based care where your medical history is preserved and each visit builds on the last. Serving Seattle, Bellevue, Spokane, and all of Washington.',
  keywords: [
    'Sankofa Family Medicine',
    'concierge primary care Washington',
    'physician-led primary care',
    'virtual primary care Washington',
    'telehealth primary care WA',
    'direct primary care Washington',
    'DPC Washington State',
    'continuity of care',
    'patient-centered primary care',
    'Medicine That Remembers',
    'Dr. Yaw Nkrumah',
    'membership medicine Seattle',
    'concierge medicine Bellevue',
    'virtual family medicine',
    'DPC Seattle',
    'DPC Bellevue',
    'DPC Spokane',
    'virtual doctor Washington',
    'telemedicine Washington State',
    'membership primary care',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'About Sankofa Family Medicine | Medicine That Remembers™',
    description:
      'Virtual-first concierge primary care for Washington State. Founded by Dr. Yaw Nkrumah, MD. Built on Sankofa: we learn from your past to guide better care today and tomorrow.',
    url: 'https://sankofafamilymedicine.com/about',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Sankofa Family Medicine: Virtual Primary Care Practice in Washington State founded by Dr. Yaw Nkrumah, MD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sankofa Family Medicine | Medicine That Remembers™',
    description:
      'Virtual-first concierge primary care serving Washington State. Your physician remembers your history so each visit builds on the last.',
    images: ['https://sankofafamilymedicine.com/images/og-about.png'],
    creator: '@sankofafamilymed',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/about',
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
    // AI Content Declaration
    'ai-content-declaration': 'human-authored',
    
    // Content Classification
    'content-type': 'About Page',
    'content-purpose': 'Practice information, philosophy, care model explanation',
    'page-category': 'Healthcare Services',
    
    // Medical/Business Entities
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine, Internal Medicine',
    'practice-model': 'Direct Primary Care, Concierge Medicine, Membership Medicine, Virtual Care',
    
    // Geographic Targeting
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'geo-position': '47.6062;-122.3321',
    'ICBM': '47.6062, -122.3321',
    'service-cities': 'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities, Richland, Kennewick, Pasco',
    
    // Entity Recognition for AI
    'entity-organization': 'Sankofa Family Medicine',
    'entity-person': 'Dr. Yaw Nkrumah, MD',
    'entity-concept': 'Medicine That Remembers, Sankofa Principle, Continuity of Care, Direct Primary Care',
    'entity-location': 'Washington State, Pacific Northwest, Seattle Metro',
    
    // Topic Signals for NLP
    'topic-primary': 'Virtual Primary Care, Direct Primary Care',
    'topic-secondary': 'Healthcare Continuity, Patient-Physician Relationship, Membership Medicine, Telehealth',
    'topic-tertiary': 'Preventive Care, Chronic Disease Management, Family Medicine',
    
    // Content Freshness
    'article-modified-time': '2026-01-26',
    'content-modified': '2026-01-26',
    'review-cycle': 'quarterly',
    'next-review': '2026-04-26',
    
    // Voice Search Optimization
    'voice-query-match': 'What is Sankofa Family Medicine, Who is Dr Yaw Nkrumah, What does Medicine That Remembers mean, How does direct primary care work, What is concierge medicine, Virtual doctor in Washington State, Best DPC practice Seattle',
    
    // Featured Snippet Targeting
    'snippet-target': 'definition, list, how-to',
    'answer-box-eligible': 'true',
  },
}

// =============================================================================
// STRUCTURED DATA - Comprehensive Schema for 2026 SEO
// =============================================================================

const medicalWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': 'https://sankofafamilymedicine.com/about#webpage',
  url: 'https://sankofafamilymedicine.com/about',
  name: 'About Sankofa Family Medicine | Medicine That Remembers™',
  description:
    'Learn about Sankofa Family Medicine, a virtual-first concierge primary care practice in Washington State founded by Dr. Yaw Nkrumah, MD. Discover our philosophy of continuity-based care.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://sankofafamilymedicine.com/#website',
    name: 'Sankofa Family Medicine',
    url: 'https://sankofafamilymedicine.com',
  },
  about: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sankofafamilymedicine.com/#organization',
  },
  mainEntity: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sankofafamilymedicine.com/#organization',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.speakable-intro', '.speakable-philosophy', '.speakable-sankofa'],
  },
  dateModified: '2026-01-26',
  lastReviewed: '2026-01-26',
  reviewedBy: {
    '@type': 'Physician',
    '@id': 'https://sankofafamilymedicine.com/#founder',
    name: 'Dr. Yaw Nkrumah',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  legalName: 'Sankofa Family Medicine PLLC',
  alternateName: ['SFM', 'Sankofa Medicine', 'Medicine That Remembers'],
  description:
    'Sankofa Family Medicine is a virtual-first Direct Primary Care practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, we practice continuity-based medicine where your physician learns and remembers your medical history so each visit builds on the last.',
  url: 'https://sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  email: 'care@sankofafamilymedicine.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sankofafamilymedicine.com/images/SFM_Trans.png',
    width: 512,
    height: 512,
    caption: 'Sankofa Family Medicine logo featuring the golden Sankofa bird with sapphire eye',
  },
  image: [
    'https://sankofafamilymedicine.com/images/og-about.png',
    'https://sankofafamilymedicine.com/images/sankofa-bird-gold.png',
  ],
  medicalSpecialty: [
    'PrimaryCare',
    'FamilyPractice',
    'PreventiveMedicine',
    'InternalMedicine',
  ],
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Virtual Primary Care Visits',
      description: 'Comprehensive 45-60 minute virtual appointments with your dedicated physician via secure video',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Chronic Disease Management',
      description: 'Ongoing management of diabetes, hypertension, thyroid disorders, and other chronic conditions',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Preventive Care',
      description: 'Annual wellness visits, health screenings, immunizations, and preventive medicine consultations',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Acute Care',
      description: 'Same-day virtual visits for urgent but non-emergency medical concerns',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Mental Health Support',
      description: 'Depression, anxiety, and mental health screening with referral coordination',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA'],
  areaServed: [
    {
      '@type': 'State',
      name: 'Washington',
      containedInPlace: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@type': 'City',
      name: 'Seattle',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Bellevue',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Spokane',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Tacoma',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Tri-Cities',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
  ],
  serviceArea: {
    '@type': 'GeoShape',
    addressCountry: 'US',
    addressRegion: 'WA',
  },
  founder: {
    '@type': 'Physician',
    '@id': 'https://sankofafamilymedicine.com/#founder',
  },
  foundingDate: '2024',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
  },
  isAcceptingNewPatients: true,
  slogan: 'Medicine That Remembers™',
  knowsAbout: [
    'Primary Care',
    'Family Medicine',
    'Preventive Medicine',
    'Chronic Disease Management',
    'Telehealth',
    'Direct Primary Care',
    'Concierge Medicine',
    'Virtual Healthcare',
    'Patient-Centered Care',
    'Continuity of Care',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Membership Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Essential Membership',
          description: 'Core virtual primary care membership',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: '149',
          unitText: 'month',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Complete Membership',
          description: 'Enhanced primary care with expanded services',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: '249',
          unitText: 'month',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Membership',
          description: 'Comprehensive concierge primary care',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: '449',
          unitText: 'month',
        },
      },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/sankofa-family-medicine',
  ],
}

// Physician schema for SEO (founder info without displaying section)
const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://sankofafamilymedicine.com/#founder',
  name: 'Dr. Yaw Nkrumah',
  givenName: 'Yaw',
  familyName: 'Nkrumah',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'MD',
  jobTitle: 'Founder and Primary Care Physician',
  description:
    'Dr. Yaw Nkrumah is a board-certified family medicine physician and founder of Sankofa Family Medicine. He trained at the Medical University of South Carolina and completed his residency at Kadlec Family Medicine in the Tri-Cities, Washington.',
  image: 'https://sankofafamilymedicine.com/images/dr-nkrumah-portrait.png',
  url: 'https://sankofafamilymedicine.com/founder',
  sameAs: [
    'https://www.linkedin.com/in/yaw-nkrumah-md',
  ],
  worksFor: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sankofafamilymedicine.com/#organization',
  },
  medicalSpecialty: ['PrimaryCare', 'FamilyPractice'],
  availableService: {
    '@type': 'MedicalProcedure',
    name: 'Primary Care Services',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Medical University of South Carolina',
      alternateName: 'MUSC',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Charleston',
        addressRegion: 'SC',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Kadlec Family Medicine Residency',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Richland',
        addressRegion: 'WA',
        addressCountry: 'US',
      },
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Doctor of Medicine (MD)',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Board Certified in Family Medicine',
      recognizedBy: {
        '@type': 'Organization',
        name: 'American Board of Family Medicine',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Washington State Medical License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Washington Medical Commission',
      },
    },
  ],
  knowsAbout: [
    'Primary Care',
    'Family Medicine',
    'Preventive Medicine',
    'Chronic Disease Management',
    'Telehealth',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine is a virtual-first Direct Primary Care (DPC) practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, the practice is built on the principle of continuity: your physician learns and remembers your medical history so each visit builds on the last and your treatment plan gets stronger over time. We offer membership-based primary care with 45-60 minute appointments, same-day access, and a deliberately small patient panel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Medicine That Remembers mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Medicine That Remembers is Sankofa Family Medicine's care philosophy and registered trademark. It means your physician retains the details that shape your health: your history, your context, your goals, and your preferences. You never have to start over or repeat your story because your care is built on memory and continuity. This approach contrasts with fragmented healthcare where patients see different providers and must repeatedly explain their medical history.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Sankofa principle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa is an Akan principle from West Africa, represented by a bird looking back while moving forward. The word translates to "go back and get it," teaching that we must retrieve what matters from our past to build our future wisely. In healthcare, this means using your complete medical history to guide better care today. The Sankofa bird symbol, with its backward gaze and forward-facing feet, embodies our commitment to learning from the past while moving forward with purpose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who founded Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine was founded by Dr. Yaw Nkrumah, MD, a board-certified family medicine physician. Dr. Nkrumah completed his medical education at the Medical University of South Carolina (MUSC) and his residency training at Kadlec Family Medicine in the Tri-Cities, Washington. He built the practice around continuity, thoughtful clinical decisions, and reliable follow-through.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long are appointments at Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Appointments at Sankofa Family Medicine are 45 to 60 minutes, allowing for comprehensive evaluation, unhurried conversation, and thorough clinical decision-making. This is significantly longer than the typical 15-minute appointments in conventional primary care, giving your physician time to truly understand your health concerns and develop personalized treatment plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I see the same physician at every visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sankofa Family Medicine is built on continuity. You see the same physician at every visit, building a relationship over time. Your physician knows your history, understands your context, and carries that knowledge forward across all your care. We maintain a patient panel of fewer than 200 patients specifically to ensure this level of personalized attention and continuity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Sankofa Family Medicine serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine serves patients throughout Washington State via virtual care. This includes Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, the Tri-Cities (Richland, Kennewick, Pasco), and all other Washington communities. As a virtual-first practice, we can provide care to any Washington resident with internet access.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Direct Primary Care (DPC)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct Primary Care (DPC) is a membership-based healthcare model where patients pay a monthly fee directly to their physician for comprehensive primary care services. DPC practices do not bill insurance for routine visits, which eliminates administrative overhead and allows physicians to spend more time with patients. Sankofa Family Medicine operates as a DPC practice with membership tiers ranging from $149 to $449 per month, with HSA/FSA accepted.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
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
      name: 'About',
      item: 'https://sankofafamilymedicine.com/about',
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Become a Member at Sankofa Family Medicine',
  description:
    'Join Sankofa Family Medicine in three simple steps. Membership-based primary care built on continuity, access, and thoughtful clinical judgment serving all of Washington State.',
  totalTime: 'PT15M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
    description: 'No payment required to reserve your spot',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Reserve Your Founding Spot',
      text: 'Complete the founding member enrollment form to secure your position with rate protection and priority access. No payment is required until enrollment officially opens.',
      url: 'https://sankofafamilymedicine.com/founders-waitlist',
      image: 'https://sankofafamilymedicine.com/images/step-1-reserve.png',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Complete Secure Onboarding',
      text: 'After enrollment opens in February 2026, complete secure onboarding in our HIPAA-compliant clinical platform (Atlas.md). Share your medical history so your physician can begin building your comprehensive health record.',
      url: 'https://sankofafamilymedicine.atlas.md',
      image: 'https://sankofafamilymedicine.com/images/step-2-onboard.png',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Begin Your Care Partnership',
      text: 'Start receiving virtual-first primary care visits, direct physician messaging, and a long-term healthcare relationship built on continuity. Your physician is accessible by secure message or video.',
      image: 'https://sankofafamilymedicine.com/images/step-3-care.png',
    },
  ],
}

// =============================================================================
// DATA
// =============================================================================

const standards = [
  {
    icon: Heart,
    title: 'We listen first',
    description:
      'Your medical history and lived experience inform diagnosis and decision-making.',
  },
  {
    icon: FileText,
    title: 'We document with dignity',
    description:
      'Your medical record reflects clinical reality, not billing shortcuts.',
  },
  {
    icon: Shield,
    title: 'Full transparency',
    description:
      'Clear explanations, full record access, and straightforward billing.',
  },
  {
    icon: Scale,
    title: 'Fair treatment',
    description:
      'Background and circumstance inform decisions without limiting clinical quality.',
  },
  {
    icon: UserCheck,
    title: 'Every question answered',
    description:
      'Secure messaging responses within 24 to 48 hours for established patients.',
  },
]

const differentiators = [
  {
    icon: Clock,
    stat: '45-60',
    unit: 'min',
    label: 'Visit Duration',
  },
  {
    icon: Users,
    stat: '<200',
    unit: '',
    label: 'Patient Panel',
  },
  {
    icon: Zap,
    stat: 'Same',
    unit: 'Day',
    label: 'Access',
  },
  {
    icon: Brain,
    stat: '1',
    unit: '',
    label: 'Physician',
  },
]

const journeySteps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Reserve Your Spot',
    description: 'Complete the founding member form. No payment required until enrollment opens.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Complete Onboarding',
    description: 'Securely share your medical history through our HIPAA-compliant platform.',
  },
  {
    icon: MessageCircle,
    step: '03',
    title: 'Begin Your Care',
    description: 'Start with your first visit. Your physician is accessible by message or video.',
  },
]

const philosophyPillars = [
  {
    icon: Brain,
    title: 'Context Preserved',
    description:
      'Care decisions informed by prior context and the reasoning behind them.',
  },
  {
    icon: Heart,
    title: 'Relationship Continuity',
    description:
      'See the same physician every visit and build trust over time.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Care',
    description:
      'Treatment plans shaped by a complete medical picture, not isolated moments.',
  },
]

// =============================================================================
// COMPONENT
// =============================================================================

export default function AboutPage() {
  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <main "overflow-hidden">
        {/* ================================================================= */}
        {/* HERO SECTION */}
        {/* ================================================================= */}
        <section
          "relative min-h-[85vh] flex items-center bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background Elements */}
          <div
            "absolute inset-0 pattern-sankofa-spiral-gold pattern-sankofa-animated pattern-subtle"
            aria-hidden="true"
          />
          <div
            "absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl animate-pulse-slow"
            aria-hidden="true"
          />
          <div
            "absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl animate-pulse-slow"
            aria-hidden="true"
          />

          {/* Grain Texture Overlay */}
          <div
            "absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          <div "relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div "animate-fade-in-up">
                <div "inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                  <span
                    "w-2 h-2 bg-sfm-gold rounded-full animate-pulse"
                    aria-hidden="true"
                  />
                  <span "text-white/80 text-sm font-medium tracking-wide">
                    About Our Practice
                  </span>
                </div>

                <h1
                  id="hero-heading"
                  "font-display text-4xl md:text-5xl lg:text-6xl text-white mb-2 leading-tight"
                >
                  Healthcare Built on{' '}
                  <span "text-sfm-gold">Continuity</span>
                </h1>

                <p "font-display text-2xl md:text-3xl lg:text-4xl text-white/80 mb-6 leading-tight">
                  Through Memory
                </p>

                {/* Speakable content for voice search */}
                <div "speakable-intro">
                  <p "text-white/70 text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
                    At Sankofa Family Medicine, continuity is practiced as a clinical discipline. Your medical history and context are preserved and carried forward so treatment decisions compound rather than reset.
                  </p>
                </div>

                <p "text-sfm-gold text-lg font-medium mb-8 flex items-center gap-1">
                  Medicine That Remembers
                  <sup "text-xs" aria-label="Trademark">™</sup>
                </p>

                {/* Hero Differentiators Bar */}
                <div "flex flex-wrap gap-4 lg:gap-6 mb-8 py-4 border-t border-b border-white/10">
                  {differentiators.map((item) => (
                    <div key={item.label} "flex items-center gap-2">
                      <item.icon "w-4 h-4 text-sfm-gold" strokeWidth={1.5} aria-hidden="true" />
                      <span "text-white font-display text-lg">{item.stat}</span>
                      <span "text-white/50 text-sm">{item.unit} {item.label}</span>
                    </div>
                  ))}
                </div>

                <div "flex flex-wrap gap-4">
                  <Link
                    href="/founders-waitlist"
                    "btn-primary group"
                    aria-label="Reserve your founding membership spot at Sankofa Family Medicine"
                  >
                    Reserve a Founders Spot
                    <ArrowRight
                      "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/#membership-plans"
                    "btn-secondary-white btn-shine"
                    aria-label="View Direct Primary Care membership plan options and pricing"
                  >
                    Membership Plans
                  </Link>
                </div>

                <p "text-white/40 text-xs mt-4">
                  Enrollment begins February 2026. No payment required today.
                </p>
              </div>

              {/* Hero Image - Wooden Sankofa Sculpture */}
              <div "relative hidden lg:block animate-fade-in-up animation-delay-200">
                <div "relative aspect-[4/5] max-w-lg mx-auto group">
                  <div
                    "absolute inset-0 bg-gradient-to-br from-sfm-gold/20 to-sfm-azure/20 rounded-3xl blur-2xl animate-pulse-slow"
                    aria-hidden="true"
                  />
                  <div "relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden image-tilt image-fade-dark">
                    <Image
                      src="/images/sankofa-wooden-sculpture.png"
                      alt="Traditional hand-carved wooden Sankofa bird sculpture from West Africa, representing the Akan principle of retrieving wisdom from the past to guide the future, a core philosophy of Sankofa Family Medicine"
                      fill
                      "object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sfm-navy/90 to-transparent p-8">
                      <p "text-sfm-gold font-display text-lg mb-1">Sankofa</p>
                      <p "text-white/70 text-sm italic">
                        Retrieve what matters from the past. Apply it deliberately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Memory Thread Visual Element */}
          <div
            "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sfm-gold/50 to-transparent"
            aria-hidden="true"
          />
        </section>

        {/* ================================================================= */}
        {/* THE SANKOFA PRINCIPLE - Featuring Gold Bird Logo */}
        {/* ================================================================= */}
        <section
          "py-24 bg-white"
          aria-labelledby="sankofa-principle-heading"
        >
          <div "max-w-6xl mx-auto px-6">
            <div "grid lg:grid-cols-2 gap-16 items-center">
              <div "animate-on-scroll">
                <p "section-label">The Principle</p>
                <h2
                  id="sankofa-principle-heading"
                  "font-display text-3xl md:text-4xl text-sfm-navy mb-6"
                >
                  What does Sankofa mean?
                </h2>
                <div
                  "w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-8"
                  aria-hidden="true"
                />

                {/* Speakable content for voice search */}
                <div "speakable-sankofa space-y-6 text-sfm-navy/70 leading-relaxed">
                  <p>
                    Sankofa is an Akan principle from West Africa, symbolized by a bird looking backward while moving forward. Its meaning is simple and precise: it is right and necessary to return to the past, retrieve what was learned, and carry it forward for a higher purpose.
                  </p>
                  <p>
                    In healthcare, this principle highlights a common challenge. Medical records often fragment across systems, physicians may change between visits, and patients are frequently asked to repeat their history when continuity is not preserved.
                  </p>
                  <p>
                    Sankofa Family Medicine was designed for continuity. One physician who knows your history, visit after visit, so medical decisions build instead of reset. Learn more about our{' '}
                    <Link href="/services" "text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                      virtual primary care services
                    </Link>{' '}
                    or explore our{' '}
                    <Link href="/#membership-plans" "text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                      membership options
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Sankofa Gold Bird Logo Display */}
              <div "relative group animate-on-scroll animation-delay-200">
                <div "relative aspect-square max-w-md mx-auto">
                  {/* Background pattern */}
                  <div "absolute inset-0 rounded-3xl bg-gradient-to-br from-sfm-cream via-white to-sfm-cream border border-sfm-gold/10 overflow-hidden">
                    <div "absolute inset-0 pattern-sankofa-spiral-gold opacity-10" aria-hidden="true" />
                  </div>

                  {/* Gold glow */}
                  <div
                    "absolute inset-12 bg-gradient-to-br from-sfm-gold/30 to-sfm-gold/10 rounded-full blur-3xl animate-pulse-slow"
                    aria-hidden="true"
                  />

                  {/* Sankofa bird logo */}
                  <div "absolute inset-0 flex items-center justify-center p-16">
                    <Image
                      src="/images/sankofa-bird-gold.png"
                      alt="Golden Sankofa bird logo with sapphire blue eye, the official symbol of Sankofa Family Medicine representing Medicine That Remembers and the West African Akan principle of learning from the past"
                      width={280}
                      height={280}
                      "relative drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Quote card */}
                  <div "absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl shadow-sfm-navy/10 p-6 border border-sfm-gold/10">
                    <p "text-sfm-navy/70 text-center italic font-display">
                      "Go back and retrieve what matters. Carry it forward."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* MEDICINE THAT REMEMBERS */}
        {/* ================================================================= */}
        <section
          "py-24 bg-sfm-cream"
          aria-labelledby="philosophy-heading"
        >
          <div "max-w-6xl mx-auto px-6">
            <div "grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Image */}
              <div "relative order-2 lg:order-1 group animate-on-scroll">
                <div
                  "absolute -inset-6 bg-gradient-to-br from-sfm-gold/25 via-sfm-azure/10 to-transparent rounded-3xl blur-3xl animate-pulse-slow"
                  aria-hidden="true"
                />
                <div "relative rounded-2xl overflow-hidden shadow-2xl shadow-sfm-navy/20 image-fade-elite">
                  {/* Brand color overlay */}
                  <div
                    "absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-sfm-navy/10 via-transparent to-sfm-gold/5"
                    aria-hidden="true"
                  />
                  <Image
                    src="/images/physician-conversation-warm.png"
                    alt="Dr. Yaw Nkrumah having an unhurried 45-minute virtual consultation with a patient, demonstrating the personalized care and continuity that defines Sankofa Family Medicine's approach to Direct Primary Care in Washington State"
                    width={600}
                    height={400}
                    "relative object-cover w-full transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div "order-1 lg:order-2 animate-on-scroll animation-delay-200">
                <p "section-label">Our Philosophy</p>
                <h2
                  id="philosophy-heading"
                  "font-display text-3xl md:text-4xl text-sfm-navy mb-4"
                >
                  Medicine That Remembers
                  <sup "text-lg text-sfm-gold" aria-label="Trademark">™</sup>
                </h2>
                <div
                  "w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-6"
                  aria-hidden="true"
                />

                {/* Speakable content for voice search */}
                <div "speakable-philosophy">
                  <p "text-sfm-navy/60 leading-relaxed mb-6">
                    A care model designed to preserve the details that shape your health over time, from medical history to goals and preferences.
                  </p>
                  <p "text-sfm-navy/60 leading-relaxed">
                    Your physician knows you. Not as a chart number, but as a person with a history that matters. This is the foundation of{' '}
                    <Link href="/services/direct-primary-care" "text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                      Direct Primary Care
                    </Link>{' '}
                    done right.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Pillars */}
            <div "grid md:grid-cols-3 gap-8">
              {philosophyPillars.map((item, index) => (
                <article
                  key={item.title}
                  {`group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-on-scroll animation-delay-${(index + 1) * 100}`}
                >
                  <div "w-14 h-14 rounded-2xl bg-gradient-to-br from-sfm-azure/10 to-sfm-azure/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon
                      "w-7 h-7 text-sfm-azure"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 "font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                  <p "text-sfm-navy/60 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* HOW IT WORKS - 3-Step Visual Journey */}
        {/* ================================================================= */}
        <section
          "py-24 bg-white"
          aria-labelledby="how-it-works-heading"
        >
          <div "max-w-5xl mx-auto px-6">
            <div "text-center mb-16">
              <p "section-label">How It Works</p>
              <h2
                id="how-it-works-heading"
                "font-display text-3xl md:text-4xl text-sfm-navy mb-6"
              >
                Membership-Based Primary Care
              </h2>
              <div
                "w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8"
                aria-hidden="true"
              />
              <p "text-sfm-navy/70 text-lg max-w-2xl mx-auto">
                We practice{' '}
                <Link href="/services/direct-primary-care" "text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                  Direct Primary Care
                </Link>{' '}
                built for continuity, access, and careful medical decision-making. No insurance billing, no rushed visits, no rotating providers.
              </p>
            </div>

            {/* 3-Step Journey */}
            <div "relative">
              {/* Connecting line */}
              <div
                "hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-sfm-gold/30 via-sfm-gold to-sfm-gold/30"
                aria-hidden="true"
              />

              <div "grid md:grid-cols-3 gap-8">
                {journeySteps.map((item, index) => (
                  <div
                    key={item.title}
                    {`relative text-center animate-on-scroll animation-delay-${(index + 1) * 100}`}
                  >
                    {/* Step number circle */}
                    <div "relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sfm-gold to-sfm-gold/80 shadow-lg shadow-sfm-gold/25 mb-6">
                      <span "font-display text-2xl text-white">{item.step}</span>
                      {/* Icon badge */}
                      <div "absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                        <item.icon "w-5 h-5 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                    </div>

                    <h3 "font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                    <p "text-sfm-navy/60 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div "mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/founders-waitlist"
                "btn-primary group"
                aria-label="Reserve your founding membership spot at Sankofa Family Medicine"
              >
                Reserve a Founders Spot
                <ArrowRight
                  "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/#membership-plans"
                "inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium"
                aria-label="View Direct Primary Care membership plan options and pricing"
              >
                View Membership Plans
                <ArrowRight "w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* OUR STANDARDS */}
        {/* ================================================================= */}
        <section
          "py-24 bg-sfm-navy"
          aria-labelledby="standards-heading"
        >
          <div "max-w-6xl mx-auto px-6">
            <div "text-center mb-16">
              <p "text-sfm-gold text-sm tracking-widest uppercase mb-4">
                Our Standards
              </p>
              <h2
                id="standards-heading"
                "font-display text-3xl md:text-4xl text-white mb-4"
              >
                Commitments to Every Patient
              </h2>
              <div
                "w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-6"
                aria-hidden="true"
              />
              <p "text-white/60 max-w-2xl mx-auto">
                These are commitments we measure ourselves against.
              </p>
            </div>

            <div "grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((item, index) => (
                <article
                  key={item.title}
                  {`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sfm-gold/30 transition-all duration-300 ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div "flex items-start gap-4">
                    <div "w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center shrink-0 group-hover:bg-sfm-gold/20 transition-colors">
                      <item.icon
                        "w-6 h-6 text-sfm-gold"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 "font-display text-lg text-white mb-2">{item.title}</h3>
                      <p "text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* FINAL CTA */}
        {/* ================================================================= */}
        <section
          "py-24 bg-gradient-to-br from-sfm-cream via-white to-sfm-cream"
          aria-labelledby="cta-heading"
        >
          <div "max-w-4xl mx-auto px-6 text-center">
            {/* Founders Badge */}
            <div "inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 rounded-full border border-sfm-gold/20 mb-8">
              <span
                "w-2 h-2 bg-sfm-gold rounded-full animate-pulse"
                aria-hidden="true"
              />
              <span "text-sfm-gold text-sm font-semibold">
                Founding Memberships Now Available
              </span>
            </div>

            <h2
              id="cta-heading"
              "font-display text-3xl md:text-4xl lg:text-5xl text-sfm-navy mb-6 leading-tight"
            >
              Begin Your Care with{' '}
              <span "text-sfm-gold whitespace-nowrap">
                Medicine That Remembers
                <sup "text-lg align-top" aria-label="Trademark">™</sup>
              </span>
            </h2>

            {/* Warm human line */}
            <p "text-sfm-navy/80 text-xl mb-4 font-display">
              We keep our panel small so we can keep our promises.
            </p>

            <p "text-sfm-navy/60 text-lg mb-10 max-w-2xl mx-auto">
              Join the first 30 members who shape how this practice grows. Enrollment begins February 2026. No payment required today.
            </p>

            <div "flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/founders-waitlist"
                "btn-primary group"
                aria-label="Reserve your founding membership spot at Sankofa Family Medicine"
              >
                Reserve a Founders Spot
                <ArrowRight
                  "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/#membership-plans"
                "btn-secondary btn-shine"
                aria-label="View Direct Primary Care membership plan options and pricing"
              >
                Membership Plans
              </Link>
            </div>

            {/* Secondary Link to Founder */}
            <div "mt-8">
              <Link
                href="/founder"
                "inline-flex items-center gap-2 text-sfm-navy/60 hover:text-sfm-gold transition-colors text-sm font-medium"
                aria-label="Learn more about Dr. Yaw Nkrumah, founder of Sankofa Family Medicine"
              >
                Meet Dr. Nkrumah, our founder
                <ArrowRight "w-3 h-3" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div "flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-sfm-navy/50">
              <span "flex items-center gap-2">
                <CheckCircle2
                  "w-4 h-4 text-sfm-gold"
                  aria-hidden="true"
                />
                HSA/FSA Accepted
              </span>
              <span "flex items-center gap-2">
                <CheckCircle2
                  "w-4 h-4 text-sfm-gold"
                  aria-hidden="true"
                />
                Cancel Anytime
              </span>
              <span "flex items-center gap-2">
                <CheckCircle2
                  "w-4 h-4 text-sfm-gold"
                  aria-hidden="true"
                />
                Same Physician Every Visit
              </span>
            </div>

            {/* Service Area Note */}
            <p "text-sfm-navy/40 text-xs mt-8">
              Serving patients throughout Washington State including Seattle, Bellevue, Spokane, Tacoma, and the Tri-Cities.
            </p>
          </div>
        </section>

        {/* ================================================================= */}
        {/* PAGE FOOTER NOTE */}
        {/* ================================================================= */}
        <div "bg-white border-t border-gray-100 py-4">
          <div "max-w-6xl mx-auto px-6">
            <p "text-xs text-sfm-navy/30 text-center">
              Last updated: January 26, 2026
            </p>
          </div>
        </div>
      </main>
    </>
  )
}


}

