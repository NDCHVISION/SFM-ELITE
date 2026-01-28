import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
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
  title: 'About Sankofa Family Medicine | Direct Primary Care (DPC) Washington | Medicine That Remembers™',
  description:
    'Sankofa Family Medicine is a physician-led, virtual Direct Primary Care (DPC) practice serving Washington State. Founded by Yaw Nkrumah, M.D., we deliver continuity-based care where your medical history is preserved and each visit builds on the last.',
  keywords: [
    'Sankofa Family Medicine',
    'direct primary care Washington',
    'DPC Washington State',
    'virtual direct primary care',
    'telehealth direct primary care WA',
    'DPC Seattle',
    'DPC Bellevue',
    'DPC Spokane',
    'membership primary care Washington',
    'membership-based primary care',
    'physician-led primary care',
    'telehealth primary care Washington',
    'continuity of care',
    'patient-centered primary care',
    'Medicine That Remembers',
    'Yaw Nkrumah MD',
    'telemedicine Washington State',
  ],
  authors: [{ name: 'Yaw Nkrumah, M.D.', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'About Sankofa Family Medicine | Direct Primary Care (DPC) | Medicine That Remembers™',
    description:
      'Virtual-first Direct Primary Care (DPC) for Washington State patients. Founded by Yaw Nkrumah, M.D. Built on Sankofa: we carry forward what matters from your history so care compounds over time.',
    url: 'https://sankofafamilymedicine.com/about',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Sankofa Family Medicine: virtual Direct Primary Care (DPC) in Washington State, founded by Yaw Nkrumah, M.D.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sankofa Family Medicine | Direct Primary Care (DPC) | Medicine That Remembers™',
    description:
      'Virtual-first Direct Primary Care (DPC) for Washington State patients. Your physician remembers your history so each visit builds on the last.',
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
    'ai-content-declaration': 'human-authored',
    'content-type': 'About Page',
    'content-purpose': 'Practice information, philosophy, care model explanation',
    'page-category': 'Healthcare Services',
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine',
    'practice-model': 'Direct Primary Care (DPC), Membership Medicine, Telehealth',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'service-cities': 'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities, Richland, Kennewick, Pasco',
    'entity-organization': 'Sankofa Family Medicine',
    'entity-person': 'Yaw Nkrumah, M.D.',
    'entity-concept': 'Medicine That Remembers, Sankofa Principle, Continuity of Care, Direct Primary Care',
    'entity-location': 'Washington State, Pacific Northwest, Seattle Metro',
    'topic-primary': 'Direct Primary Care (DPC), Telehealth Primary Care',
    'topic-secondary': 'Healthcare Continuity, Patient-Physician Relationship, Membership Medicine, Telehealth',
    'topic-tertiary': 'Preventive Care, Chronic Disease Management, Family Medicine',
    'article-modified-time': '2026-01-26',
    'content-modified': '2026-01-26',
    'review-cycle': 'quarterly',
    'next-review': '2026-04-26',
    'voice-query-match': 'What is Sankofa Family Medicine, Who is Yaw Nkrumah MD, What does Medicine That Remembers mean, How does membership medicine work, What is direct primary care, Telehealth doctor in Washington State, primary care practice Seattle, telehealth doctor Seattle, direct primary care Washington',
    'snippet-target': 'definition, list, how-to',
    'answer-box-eligible': 'true',
  },
}

// =============================================================================
// STRUCTURED DATA
// =============================================================================

const medicalWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': 'https://sankofafamilymedicine.com/about#webpage',
  url: 'https://sankofafamilymedicine.com/about',
  name: 'About Sankofa Family Medicine | Direct Primary Care (DPC) | Medicine That Remembers™',
  description: 'Learn about Sankofa Family Medicine, a virtual Direct Primary Care (DPC) practice in Washington State founded by Yaw Nkrumah, M.D.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://sankofafamilymedicine.com/#website',
    name: 'Sankofa Family Medicine',
    url: 'https://sankofafamilymedicine.com',
  },
  about: [
    { '@type': 'MedicalClinic', '@id': 'https://sankofafamilymedicine.com/#organization' },
    { '@type': 'Person', '@id': 'https://sankofafamilymedicine.com/#founder' },
  ],
  mainEntity: { '@type': 'MedicalClinic', '@id': 'https://sankofafamilymedicine.com/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.speakable-intro', '.speakable-philosophy', '.speakable-sankofa'],
  },
  dateModified: '2026-01-26',
  lastReviewed: '2026-01-26',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sankofafamilymedicine.com/about#webpage' },
  audience: {
    '@type': 'PeopleAudience',
    geographicArea: { '@type': 'AdministrativeArea', name: 'Washington', addressCountry: 'US' },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness'],
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  legalName: 'Sankofa Family Medicine PLLC',
  alternateName: ['SFM', 'Sankofa Medicine', 'Medicine That Remembers'],
  description: 'Sankofa Family Medicine is a virtual Direct Primary Care (DPC) practice serving patients across Washington State via telehealth, accessed through membership.',
  url: 'https://sankofafamilymedicine.com',
  inLanguage: 'en-US',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sankofafamilymedicine.com/images/SFM_Trans.png',
    width: 512,
    height: 512,
  },
  medicalSpecialty: ['Primary Care', 'Family Medicine', 'Preventive Medicine'],
  knowsAbout: [
    'Direct Primary Care',
    'Telehealth',
    'Continuity of care',
    'Preventive care',
    'Chronic disease management',
  ],
  availableLanguage: [{ '@type': 'Language', name: 'English', alternateName: 'en' }],
  areaServed: [{ '@type': 'State', name: 'Washington', addressCountry: 'US' }],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'WA',
    addressCountry: 'US',
  },
  telephone: '+14252857390',
  contactPoint: [{
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+14252857390',
    areaServed: 'US-WA',
    availableLanguage: ['en'],
  }],
  founder: { '@type': 'Person', '@id': 'https://sankofafamilymedicine.com/#founder', name: 'Yaw Nkrumah, M.D.' },
  employee: [{ '@type': 'Person', '@id': 'https://sankofafamilymedicine.com/#founder' }],
  foundingDate: '2025',
  sameAs: [
    'https://www.linkedin.com/company/sankofa-family-medicine/',
  ],
  isAcceptingNewPatients: false,
  slogan: 'Medicine That Remembers™',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'EnrollmentStatus', value: 'Waitlist open - enrollment begins February 2026' },
    { '@type': 'PropertyValue', name: 'AcceptingWaitlist', value: 'Yes' },
    { '@type': 'PropertyValue', name: 'FoundersCap', value: '30' },
  ],
  image: 'https://sankofafamilymedicine.com/images/og-about.png',
  potentialAction: {
    '@type': 'RegisterAction',
    name: 'Join the Founders Waitlist',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sankofafamilymedicine.com/founders-waitlist',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
    },
    object: {
      '@type': 'Service',
      name: 'Founding Membership Waitlist',
      provider: { '@id': 'https://sankofafamilymedicine.com/#organization' },
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Membership Options',
    url: 'https://sankofafamilymedicine.com/services',
    itemListElement: [{
      '@type': 'Offer',
      name: 'Founding Membership (Waitlist)',
      availability: 'https://schema.org/PreOrder',
      url: 'https://sankofafamilymedicine.com/founders-waitlist',
      description: 'Join the waitlist. No payment required until enrollment opens in February 2026.',
      itemOffered: {
        '@type': 'Service',
        name: 'Founding Membership Waitlist',
        provider: { '@id': 'https://sankofafamilymedicine.com/#organization' },
        areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
    }],
  },
}

const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://sankofafamilymedicine.com/#founder',
  name: 'Yaw Nkrumah, M.D.',
  givenName: 'Yaw',
  familyName: 'Nkrumah',
  honorificSuffix: 'M.D.',
  jobTitle: 'Founder and Primary Care Physician',
  description: 'Yaw Nkrumah, M.D. is a family medicine physician and founder of Sankofa Family Medicine.',
  url: 'https://sankofafamilymedicine.com/founder',
  hasCredential: [{
    '@type': 'EducationalOccupationalCredential',
    name: 'Medical Doctor (M.D.)',
    credentialCategory: 'DegreeCredential',
  }],
  worksFor: { '@type': 'MedicalClinic', '@id': 'https://sankofafamilymedicine.com/#organization' },
  telephone: '+14252857390',
  medicalSpecialty: ['Family Medicine', 'Primary Care'],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Family Physician',
    occupationLocation: {
      '@type': 'AdministrativeArea',
      name: 'Washington',
      addressCountry: 'US',
    },
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Medical University of South Carolina' },
    { '@type': 'MedicalOrganization', name: 'Kadlec Family Medicine Residency' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/yawnkrumahmd/',
  ],
  mainEntityOfPage: 'https://sankofafamilymedicine.com/founder',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en-US',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine is a virtual Direct Primary Care (DPC) practice serving patients across Washington State. Care is accessed through membership, with longer appointments (often 45 to 75 minutes), scheduling designed for faster access than traditional clinics when available, and a deliberately small patient panel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Medicine That Remembers mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicine That Remembers is how we practice. Your physician retains the details that shape your health: your history, context, goals, and preferences. You never have to start over or repeat your story.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Sankofa principle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa is an Akan principle from West Africa, represented by a bird looking back while moving forward. It teaches that we must retrieve what matters from our past to build our future wisely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I see the same physician at every visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You see the same physician for your care, building a relationship over time, except in rare circumstances where coverage is required for safety or availability. We maintain an intentionally limited patient panel to ensure personalized attention and continuity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Sankofa Family Medicine serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve patients throughout Washington State via telehealth, including Seattle, Bellevue, Spokane, Tacoma, the Tri-Cities, and all other Washington communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I pay to join the waitlist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Joining the waitlist is free. Payment begins only when enrollment opens in February 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have an emergency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call 911 or go to the nearest emergency room. Sankofa Family Medicine is not an emergency service.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://sankofafamilymedicine.com/about' },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'en-US',
  name: 'How to Join the Founders Waitlist at Sankofa Family Medicine',
  description: 'Join the Founders Waitlist in three simple steps.',
  totalTime: 'PT5M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Join the Founders Waitlist', text: 'Complete the Founders Waitlist form. No payment required until enrollment opens.' },
    { '@type': 'HowToStep', position: 2, name: 'Complete Pre-enrollment Onboarding', text: 'Securely share your medical history through our HIPAA-compliant platform.' },
    { '@type': 'HowToStep', position: 3, name: 'Begin Your Care', text: 'Once enrollment opens, schedule your first visit. Your physician is accessible by message or video.' },
  ],
}

// =============================================================================
// DATA
// =============================================================================

const standards = [
  {
    icon: Heart,
    title: 'We listen first',
    description: 'Your medical history and lived experience inform diagnosis and decision-making.',
  },
  {
    icon: FileText,
    title: 'We document with dignity',
    description: 'Your medical record reflects clinical reality, not billing shortcuts.',
  },
  {
    icon: Shield,
    title: 'Full transparency',
    description: 'Clear explanations, full record access, and straightforward billing.',
  },
  {
    icon: Scale,
    title: 'Fair treatment',
    description: 'Background and circumstance inform decisions without limiting clinical quality.',
  },
  {
    icon: UserCheck,
    title: 'Every question answered',
    description: 'Secure messaging with responses aimed within 24 to 48 business hours for established patients (excluding weekends and holidays).',
  },
]

const differentiators = [
  { icon: Clock, stat: '45-75', unit: 'min', label: 'Visits' },
  { icon: Users, stat: 'Limited', unit: '', label: 'Patient Panel' },
  { icon: Zap, stat: 'Fast', unit: '', label: 'Access when available' },
  { icon: Brain, stat: '1', unit: '', label: 'Physician' },
]

const journeySteps = [
  { icon: UserPlus, step: '01', title: 'Join the Founders Waitlist', description: 'Complete the Founders Waitlist form. No payment required until enrollment opens.' },
  { icon: ClipboardCheck, step: '02', title: 'Complete Onboarding', description: 'Securely share your medical history through our HIPAA-compliant platform.' },
  { icon: MessageCircle, step: '03', title: 'Begin Your Care', description: 'Once enrollment opens, schedule your first visit and message your physician as needed.' },
]

const philosophyPillars = [
  { icon: Brain, title: 'Context Preserved', description: 'Care decisions informed by prior context and the reasoning behind them.' },
  { icon: Heart, title: 'Relationship Continuity', description: 'See the same physician every visit and build trust over time.' },
  { icon: Sparkles, title: 'Personalized Care', description: 'Treatment plans shaped by a complete medical picture, not isolated moments.' },
]

// =============================================================================
// COMPONENT
// =============================================================================

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-medical-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
      />
      <Script
        id="about-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="about-physician-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      <Script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="about-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <main className="overflow-hidden pt-16 lg:pt-[128px]">
        {/* HERO SECTION */}
        <section
          className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div
            className="absolute inset-0 pattern-sankofa-spiral-gold pattern-sankofa-animated pattern-subtle"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl animate-pulse-slow"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl animate-pulse-slow"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                  <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" aria-hidden="true" />
                  <span className="text-white/80 text-sm font-medium tracking-wide">About Our Practice</span>
                </div>

                <h1 id="hero-heading" className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-2 leading-tight">
                  Healthcare Built on <span className="text-sfm-gold">Continuity</span>
                </h1>

                <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white/80 mb-6 leading-tight">
                  Through Memory
                </p>

                <div className="speakable-intro">
                  <p className="text-white/70 text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
                    At Sankofa Family Medicine, continuity is built on purpose. Your medical history and context are preserved and carried forward so decisions build instead of reset.
                  </p>
                </div>

                <p className="text-sfm-gold text-lg font-medium mb-8 flex items-center gap-1">
                  Medicine That Remembers<sup className="text-xs" aria-label="Trademark">™</sup>
                </p>

                <div className="flex flex-wrap gap-4 lg:gap-6 mb-8 py-4 border-t border-b border-white/10">
                  {differentiators.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-sfm-gold" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-white font-display text-lg">{item.stat}</span>
                      <span className="text-white/50 text-sm">{item.unit ? `${item.unit} ` : ''}{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/founders-waitlist" className="btn-primary group" aria-label="Join the Founders Waitlist at Sankofa Family Medicine">
                    Join the Founders Waitlist
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <Link href="/services" className="btn-secondary-white btn-shine" aria-label="View membership plans">
                    Membership Plans
                  </Link>
                </div>

                <p className="text-white/40 text-xs mt-4">Founding memberships capped at 30. Clinical care begins February 2026. No payment required to join the waitlist.</p>
              </div>

              <div className="relative hidden lg:block animate-fade-in-up animation-delay-200">
                <div className="relative aspect-[4/5] max-w-lg mx-auto group">
                  <div className="absolute inset-0 bg-gradient-to-br from-sfm-gold/20 to-sfm-azure/20 rounded-3xl blur-2xl animate-pulse-slow" aria-hidden="true" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden image-tilt image-fade-dark">
                    <Image
                      src="/images/sankofa-wooden-sculpture.png"
                      alt="Traditional hand-carved wooden Sankofa bird sculpture from West Africa, representing the Akan principle of retrieving wisdom from the past"
                      fill
                      className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sfm-navy/90 to-transparent p-8">
                      <p className="text-sfm-gold font-display text-lg mb-1">Sankofa</p>
                      <p className="text-white/70 text-sm italic">Retrieve what matters from the past. Apply it deliberately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sfm-gold/50 to-transparent" aria-hidden="true" />
        </section>

        {/* SANKOFA PRINCIPLE SECTION */}
        <section className="py-24 bg-white" aria-labelledby="sankofa-principle-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <p className="section-label">The Principle</p>
                <h2 id="sankofa-principle-heading" className="font-display text-3xl md:text-4xl text-sfm-navy mb-6">
                  What does Sankofa mean?
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-8" aria-hidden="true" />

                <div className="speakable-sankofa space-y-6 text-sfm-navy/70 leading-relaxed">
                  <p>
                    Sankofa is an Akan principle from West Africa, symbolized by a bird looking backward while moving forward. It conveys that it is right and necessary to return to the past, retrieve what was learned, and carry it forward for a higher purpose.
                  </p>
                  <p>
                    In healthcare, this principle highlights a common challenge. Medical records often fragment across systems, physicians may change between visits, and patients are frequently asked to repeat their history when continuity is not preserved.
                  </p>
                  <p>
                    Sankofa Family Medicine was designed for continuity. One physician who knows your history - visit after visit - so medical decisions build instead of reset. Learn more about our{' '}
                    <Link href="/services" className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                      telehealth primary care services
                    </Link>{' '}
                    or explore{' '}
                    <Link href="/compare" className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                       how Direct Primary Care (DPC) differs
                    </Link>.
                  </p>
                </div>
              </div>

              <div className="relative group animate-on-scroll animation-delay-200">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sfm-cream via-white to-sfm-cream border border-sfm-gold/10 overflow-hidden">
                    <div className="absolute inset-0 pattern-sankofa-spiral-gold opacity-10" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-12 bg-gradient-to-br from-sfm-gold/30 to-sfm-gold/10 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center p-16">
                    <Image
                      src="/images/SFMLOGOBLUEVELVET.png"
                                                            alt="Sankofa Family Medicine logo on elegant blue velvet background, the official symbol of the practice"
                                                    width={280}
                      height={280}
                      className="relative drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl shadow-sfm-navy/10 p-6 border border-sfm-gold/10">
                    <p className="text-sfm-navy/70 text-center italic font-display">
                      &quot;Simply, Sankofa means remembering what matters so the future is built with intention.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEDICINE THAT REMEMBERS SECTION */}
        <section className="py-24 bg-sfm-cream" aria-labelledby="philosophy-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative order-2 lg:order-1 group animate-on-scroll">
                <div className="absolute -inset-6 bg-gradient-to-br from-sfm-gold/25 via-sfm-azure/10 to-transparent rounded-3xl blur-3xl animate-pulse-slow" aria-hidden="true" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sfm-navy/20 image-fade-elite">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-sfm-navy/10 via-transparent to-sfm-gold/5" aria-hidden="true" />
                  <Image
                    src="/images/physician-conversation-warm.png"
                    alt="Physician having an unhurried telehealth consultation with a patient, demonstrating personalized care and continuity"
                    width={600}
                    height={400}
                    className="relative object-cover w-full transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-on-scroll animation-delay-200">
                <p className="section-label">Our Philosophy</p>
                <h2 id="philosophy-heading" className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
                  Medicine That Remembers<sup className="text-lg text-sfm-gold" aria-label="Trademark">™</sup>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-6" aria-hidden="true" />

                <div className="speakable-philosophy">
                  <p className="text-sfm-navy/60 leading-relaxed mb-6">
                    A care model designed to preserve the details that shape your health over time, from medical history to goals and preferences.
                  </p>
                  <p className="text-sfm-navy/60 leading-relaxed">
                    Your physician knows you. Not as a chart number, but as a person with a history that matters. This is the foundation of{' '}
                    <Link href="/compare" className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                      Direct Primary Care (DPC)
                    </Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {philosophyPillars.map((item, index) => (
                <article
                  key={item.title}
                  className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sfm-azure/10 to-sfm-azure/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                  <p className="text-sfm-navy/60 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 bg-white" aria-labelledby="how-it-works-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-label">How It Works</p>
              <h2 id="how-it-works-heading" className="font-display text-3xl md:text-4xl text-sfm-navy mb-6">
                Direct Primary Care (DPC)
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" aria-hidden="true" />
              <p className="text-sfm-navy/70 text-lg max-w-2xl mx-auto">
                Sankofa Family Medicine is built on{' '}
                <Link
                  href="/compare"
                  className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2"
                >
                  Direct Primary Care (DPC)
                </Link>{' '}
                - a membership model designed for continuity, access, and careful medical decision-making. No insurance billing. No rushed visits. No revolving door of providers.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-sfm-gold/30 via-sfm-gold to-sfm-gold/30" aria-hidden="true" />

              <div className="grid md:grid-cols-3 gap-8">
                {journeySteps.map((item, index) => (
                  <div key={item.title} className="relative text-center animate-on-scroll" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sfm-gold to-sfm-gold/80 shadow-lg shadow-sfm-gold/25 mb-6">
                      <span className="font-display text-2xl text-white">{item.step}</span>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                    <p className="text-sfm-navy/60 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/founders-waitlist" className="btn-primary group" aria-label="Join the Founders Waitlist at Sankofa Family Medicine">
                Join the Founders Waitlist
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium">
                View Membership Plans
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* OUR STANDARDS SECTION */}
        <section className="py-24 bg-sfm-navy" aria-labelledby="standards-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-gold text-sm tracking-widest uppercase mb-4">Our Standards</p>
              <h2 id="standards-heading" className="font-display text-3xl md:text-4xl text-white mb-4">
                Commitments to Every Patient
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-6" aria-hidden="true" />
              <p className="text-white/60 max-w-2xl mx-auto">
                These are commitments we measure ourselves against.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((item, index) => (
                <article
                  key={item.title}
                  className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sfm-gold/30 transition-all duration-300 ${index === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center shrink-0 group-hover:bg-sfm-gold/20 transition-colors">
                      <item.icon className="w-6 h-6 text-sfm-gold" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-24 bg-gradient-to-br from-sfm-cream via-white to-sfm-cream" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 rounded-full border border-sfm-gold/20 mb-8">
              <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-sfm-gold text-sm font-semibold">Founders Waitlist Now Open</span>
            </div>

            <h2 id="cta-heading" className="font-display text-3xl md:text-4xl lg:text-5xl text-sfm-navy mb-6 leading-tight">
              Begin Your Care with{' '}
              <span className="text-sfm-gold whitespace-nowrap">
                Medicine That Remembers<sup className="text-lg align-top" aria-label="Trademark">™</sup>
              </span>
            </h2>

            <p className="text-sfm-navy/80 text-xl mb-4 font-display">
              We keep our panel small so we can stay unhurried.
            </p>

            <p className="text-sfm-navy/60 text-lg mb-10 max-w-2xl mx-auto">
              Join the first 30 founding members who shape how this practice grows. Founding memberships capped at 30; once filled, new sign-ups remain on the waitlist for the next enrollment wave. Clinical care begins February 2026. No payment required to join the waitlist.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/founders-waitlist" className="btn-primary group" aria-label="Join the Founders Waitlist at Sankofa Family Medicine">
                Join the Founders Waitlist
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn-secondary btn-shine" aria-label="View membership plans">
                Membership Plans
              </Link>
            </div>

            <div className="mt-8">
              <Link href="/founder" className="inline-flex items-center gap-2 text-sfm-navy/60 hover:text-sfm-gold transition-colors text-sm font-medium">
                Meet Yaw Nkrumah, M.D., our founder
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-sfm-navy/50">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                HSA/FSA Receipts Available
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                Cancel With 30-Day Notice
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                Same Physician for Your Care
              </span>
            </div>
            
            <p className="text-sfm-navy/30 text-xs mt-4 max-w-md mx-auto">
              Continuity is the standard. Rare coverage exceptions may occur for safety or availability.
            </p>

            <p className="text-sfm-navy/40 text-xs mt-8">
              Serving patients throughout Washington State including Seattle, Bellevue, Spokane, Tacoma, and the Tri-Cities. Washington State patients only.
            </p>
            <p className="text-sfm-navy/30 text-xs mt-2">
              Information on this site is for general informational purposes and is not medical advice. If you are experiencing an emergency, call 911 or go to the nearest emergency room.
            </p>
          </div>
        </section>

        {/* PAGE FOOTER NOTE */}
        <div className="bg-white border-t border-gray-100 py-4">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs text-sfm-navy/30 text-center">Last updated: January 26, 2026</p>
          </div>
        </div>
      </main>
    </>
  )
}
