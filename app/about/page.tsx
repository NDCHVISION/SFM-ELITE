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
    'Sankofa Family Medicine is a physician-led, virtual-first membership-based primary care practice serving Washington State. Founded by Dr. Yaw Nkrumah, MD, we practice continuity-based care where your medical history is preserved and each visit builds on the last. Serving Seattle, Bellevue, Spokane, and all of Washington.',
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
      'Virtual-first membership-based primary care for Washington State. Founded by Dr. Yaw Nkrumah, MD. Built on Sankofa: we learn from your past to guide better care today and tomorrow.',
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
      'Virtual-first membership-based primary care serving Washington State. Your physician remembers your history so each visit builds on the last.',
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
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine, Internal Medicine',
    'practice-model': 'Direct Primary Care, Concierge Medicine, Membership Medicine, Virtual Care',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'geo-position': '47.6062;-122.3321',
    'ICBM': '47.6062, -122.3321',
    'service-cities': 'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities, Richland, Kennewick, Pasco',
    'entity-organization': 'Sankofa Family Medicine',
    'entity-person': 'Dr. Yaw Nkrumah, MD',
    'entity-concept': 'Medicine That Remembers, Sankofa Principle, Continuity of Care, Membership-Based Primary Care',
    'entity-location': 'Washington State, Pacific Northwest, Seattle Metro',
    'topic-primary': 'Virtual Primary Care, Membership-Based Primary Care',
    'topic-secondary': 'Healthcare Continuity, Patient-Physician Relationship, Membership Medicine, Telehealth',
    'topic-tertiary': 'Preventive Care, Chronic Disease Management, Family Medicine',
    'article-modified-time': '2026-01-26',
    'content-modified': '2026-01-26',
    'review-cycle': 'quarterly',
    'next-review': '2026-04-26',
    'voice-query-match': 'What is Sankofa Family Medicine, Who is Dr Yaw Nkrumah, What does Medicine That Remembers mean, How does membership medicine work, What is concierge medicine, Virtual doctor in Washington State, Best primary care practice Seattle',
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
  name: 'About Sankofa Family Medicine | Medicine That Remembers™',
  description: 'Learn about Sankofa Family Medicine, a virtual-first membership-based primary care practice in Washington State founded by Dr. Yaw Nkrumah, MD.',
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
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.speakable-intro', '.speakable-philosophy', '.speakable-sankofa'],
  },
  dateModified: '2026-01-26',
  lastReviewed: '2026-01-26',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  legalName: 'Sankofa Family Medicine PLLC',
  alternateName: ['SFM', 'Sankofa Medicine', 'Medicine That Remembers'],
  description: 'Sankofa Family Medicine is a virtual-first membership-based primary care practice serving patients across Washington State.',
  url: 'https://sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  email: 'care@sankofafamilymedicine.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sankofafamilymedicine.com/images/SFM_Trans.png',
    width: 512,
    height: 512,
  },
  medicalSpecialty: ['PrimaryCare', 'FamilyPractice', 'PreventiveMedicine'],
  areaServed: [
    { '@type': 'State', name: 'Washington' },
    { '@type': 'City', name: 'Seattle' },
    { '@type': 'City', name: 'Bellevue' },
    { '@type': 'City', name: 'Spokane' },
    { '@type': 'City', name: 'Tacoma' },
  ],
  founder: { '@type': 'Physician', '@id': 'https://sankofafamilymedicine.com/#founder' },
  foundingDate: '2024',
  isAcceptingNewPatients: true,
  slogan: 'Medicine That Remembers™',
}

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
  description: 'Dr. Yaw Nkrumah is a board-certified family medicine physician and founder of Sankofa Family Medicine.',
  url: 'https://sankofafamilymedicine.com/founder',
  worksFor: { '@type': 'MedicalOrganization', '@id': 'https://sankofafamilymedicine.com/#organization' },
  medicalSpecialty: ['PrimaryCare', 'FamilyPractice'],
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Medical University of South Carolina' },
    { '@type': 'EducationalOrganization', name: 'Kadlec Family Medicine Residency' },
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
        text: 'Sankofa Family Medicine is a virtual-first membership-based primary care practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, we offer 45-60 minute appointments, same-day access, and a deliberately small patient panel of fewer than 200 patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Medicine That Remembers mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicine That Remembers is our care philosophy. Your physician retains the details that shape your health: your history, context, goals, and preferences. You never have to start over or repeat your story.',
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
        text: 'Yes. You see the same physician at every visit, building a relationship over time. We maintain a patient panel of fewer than 200 patients to ensure personalized attention and continuity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Sankofa Family Medicine serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve patients throughout Washington State via virtual care, including Seattle, Bellevue, Spokane, Tacoma, the Tri-Cities, and all other Washington communities.',
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
  name: 'How to Become a Member at Sankofa Family Medicine',
  description: 'Join Sankofa Family Medicine in three simple steps.',
  totalTime: 'PT15M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Reserve Your Spot', text: 'Complete the founding member form. No payment required.' },
    { '@type': 'HowToStep', position: 2, name: 'Complete Onboarding', text: 'Securely share your medical history through our HIPAA-compliant platform.' },
    { '@type': 'HowToStep', position: 3, name: 'Begin Your Care', text: 'Start with your first visit. Your physician is accessible by message or video.' },
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
    description: 'Secure messaging responses within 24 to 48 hours for established patients.',
  },
]

const differentiators = [
  { icon: Clock, stat: '45-60', unit: 'min', label: 'Visit Duration' },
  { icon: Users, stat: '<200', unit: '', label: 'Patient Panel' },
  { icon: Zap, stat: 'Same', unit: 'Day', label: 'Access' },
  { icon: Brain, stat: '1', unit: '', label: 'Physician' },
]

const journeySteps = [
  { icon: UserPlus, step: '01', title: 'Reserve Your Spot', description: 'Complete the founding member form. No payment required until enrollment opens.' },
  { icon: ClipboardCheck, step: '02', title: 'Complete Onboarding', description: 'Securely share your medical history through our HIPAA-compliant platform.' },
  { icon: MessageCircle, step: '03', title: 'Begin Your Care', description: 'Start with your first visit. Your physician is accessible by message or video.' },
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

      <main className="overflow-hidden">
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
                    At Sankofa Family Medicine, continuity is practiced as a clinical discipline. Your medical history and context are preserved and carried forward so treatment decisions compound rather than reset.
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
                      <span className="text-white/50 text-sm">{item.unit} {item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/founders-waitlist" className="btn-primary group" aria-label="Reserve your founding membership spot">
                    Reserve a Founders Spot
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <Link href="/#membership-plans" className="btn-secondary-white btn-shine" aria-label="View membership plans">
                    Membership Plans
                  </Link>
                </div>

                <p className="text-white/40 text-xs mt-4">Enrollment begins February 2026. No payment required today.</p>
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
                    Sankofa is an Akan principle from West Africa, symbolized by a bird looking backward while moving forward. Its meaning is simple and precise: it is right and necessary to return to the past, retrieve what was learned, and carry it forward for a higher purpose.
                  </p>
                  <p>
                    In healthcare, this principle highlights a common challenge. Medical records often fragment across systems, physicians may change between visits, and patients are frequently asked to repeat their history when continuity is not preserved.
                  </p>
                  <p>
                    Sankofa Family Medicine was designed for continuity. One physician who knows your history, visit after visit, so medical decisions build instead of reset. Learn more about our{' '}
                    <Link href="/services" className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                      virtual primary care services
                    </Link>{' '}
                    or explore{' '}
                    <Link href="/compare" className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                       how the Direct Primary Care model differs.
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
                      src="/images/comettrans.png"
                      alt="Golden Sankofa bird logo with sapphire blue eye, the official symbol of Sankofa Family Medicine"
                      width={280}
                      height={280}
                      className="relative drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl shadow-sfm-navy/10 p-6 border border-sfm-gold/10">
                    <p className="text-sfm-navy/70 text-center italic font-display">
                      "Go back and retrieve what matters. Carry it forward."
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
                    alt="Physician having an unhurried 45-minute virtual consultation with a patient, demonstrating personalized care and continuity"
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
                    Your physician knows you. Not as a chart number, but as a person with a history that matters. This is a foundation of{' '}
                    <Link href="/compare" className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                     Sankofa Family Medicine
                    </Link>{' '}
                    done right.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {philosophyPillars.map((item, index) => (
                <article
                  key={item.title}
                  className={`group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-on-scroll animation-delay-${(index + 1) * 100}`}
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
                Membership-Based Primary Care
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" aria-hidden="true" />
              <p className="text-sfm-navy/70 text-lg max-w-2xl mx-auto">
                We practice{' '}
                <Link href="/compare" className="text-sfm-azure hover:text-sfm-gold transition-colors underline underline-offset-2">
                  membership-based primary care
                </Link>{' '}
                built for continuity, access, and careful medical decision-making. No insurance billing, no rushed visits, no rotating providers.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-sfm-gold/30 via-sfm-gold to-sfm-gold/30" aria-hidden="true" />

              <div className="grid md:grid-cols-3 gap-8">
                {journeySteps.map((item, index) => (
                  <div key={item.title} className={`relative text-center animate-on-scroll animation-delay-${(index + 1) * 100}`}>
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
              <Link href="/founders-waitlist" className="btn-primary group" aria-label="Reserve your founding membership spot">
                Reserve a Founders Spot
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/#membership-plans" className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium">
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
              <span className="text-sfm-gold text-sm font-semibold">Founding Memberships Now Available</span>
            </div>

            <h2 id="cta-heading" className="font-display text-3xl md:text-4xl lg:text-5xl text-sfm-navy mb-6 leading-tight">
              Begin Your Care with{' '}
              <span className="text-sfm-gold whitespace-nowrap">
                Medicine That Remembers<sup className="text-lg align-top" aria-label="Trademark">™</sup>
              </span>
            </h2>

            <p className="text-sfm-navy/80 text-xl mb-4 font-display">
              We keep our panel small so we can keep our promises.
            </p>

            <p className="text-sfm-navy/60 text-lg mb-10 max-w-2xl mx-auto">
              Join the first 30 members who shape how this practice grows. Enrollment begins February 2026. No payment required today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/founders-waitlist" className="btn-primary group" aria-label="Reserve your founding membership spot">
                Reserve a Founders Spot
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/#membership-plans" className="btn-secondary btn-shine" aria-label="View membership plans">
                Membership Plans
              </Link>
            </div>

            <div className="mt-8">
              <Link href="/founder" className="inline-flex items-center gap-2 text-sfm-navy/60 hover:text-sfm-gold transition-colors text-sm font-medium">
                Meet Dr. Nkrumah, our founder
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-sfm-navy/50">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                HSA/FSA Accepted
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                Cancel Anytime
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                Same Physician Every Visit
              </span>
            </div>

            <p className="text-sfm-navy/40 text-xs mt-8">
              Serving patients throughout Washington State including Seattle, Bellevue, Spokane, Tacoma, and the Tri-Cities.
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

