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
} from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// METADATA - Enhanced for 2026 SEO & AI Scraper Optimization
// =============================================================================

export const metadata: Metadata = {
  title: 'About Sankofa Family Medicine | Medicine That Remembers™',
  description:
    'Sankofa Family Medicine is a physician-led, virtual primary care practice in Washington State. We learn and remember your medical history so each visit builds on the last and your treatment plan gets stronger over time.',
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
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'About Sankofa Family Medicine | Medicine That Remembers™',
    description:
      'Virtual-first concierge primary care for Washington State. Built on Sankofa: we learn from your past to guide better care today and tomorrow.',
    url: 'https://sankofafamilymedicine.com/about',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Sankofa Family Medicine: Medicine That Remembers',
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
  // 2026 AI Scraper Optimization
  other: {
    // AI Content Signals
    'ai-content-declaration': 'human-authored',
    'content-type': 'About Page',
    'content-purpose': 'Practice information, philosophy, and founder background',
    
    // Medical Entity Tags
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine',
    'service-area': 'Washington State, USA',
    'practice-model': 'Direct Primary Care, Concierge Medicine, Membership Medicine',
    
    // Entity Recognition Hints for AI
    'entity-organization': 'Sankofa Family Medicine',
    'entity-person': 'Dr. Yaw Nkrumah, MD',
    'entity-concept': 'Medicine That Remembers, Sankofa Principle, Continuity of Care',
    'entity-location': 'Washington State',
    
    // Semantic Topic Tags
    'topic-primary': 'Virtual Primary Care',
    'topic-secondary': 'Healthcare Continuity, Patient-Physician Relationship, Membership Medicine',
    
    // Content Freshness
    'content-modified': new Date().toISOString().split('T')[0],
    'review-cycle': 'quarterly',
    
    // Voice Search Optimization
    'voice-query-match': 'What is Sankofa Family Medicine, Who founded Sankofa Family Medicine, What does Medicine That Remembers mean',
  },
}

// =============================================================================
// STRUCTURED DATA - Comprehensive Schema for 2026
// =============================================================================

const medicalWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': 'https://sankofafamilymedicine.com/about#webpage',
  url: 'https://sankofafamilymedicine.com/about',
  name: 'About Sankofa Family Medicine | Medicine That Remembers™',
  description:
    'Learn about Sankofa Family Medicine, a virtual-first concierge primary care practice in Washington State founded by Dr. Yaw Nkrumah, MD.',
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
    cssSelector: ['.speakable-intro', '.speakable-philosophy', '.speakable-founder'],
  },
  lastReviewed: new Date().toISOString().split('T')[0],
  reviewedBy: {
    '@type': 'Physician',
    '@id': 'https://sankofafamilymedicine.com/#founder',
    name: 'Dr. Yaw Nkrumah',
  },
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
    'Membership-based primary care built on continuity, access, and thoughtful clinical judgment. Become a founding member in three simple steps.',
  totalTime: 'PT15M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Reserve Your Founding Spot',
      text: 'Complete the enrollment form to secure your position as a Founding Member with rate protection and priority access.',
      url: 'https://sankofafamilymedicine.com/founders-waitlist',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Complete Secure Onboarding',
      text: 'After enrollment opens in early 2026, complete secure onboarding in our HIPAA-compliant clinical platform.',
      url: 'https://sankofafamilymedicine.atlas.md',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Begin Your Care Partnership',
      text: 'Start receiving virtual-first visits, direct physician access, and a long-term healthcare relationship built on continuity.',
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
      'Your history and lived experience shape the diagnosis, not the other way around.',
  },
  {
    icon: FileText,
    title: 'We document with dignity',
    description:
      'Your medical records reflect who you are, not just what insurance codes might apply.',
  },
  {
    icon: Shield,
    title: 'Full transparency',
    description:
      'Clear explanations, access to your records, and no hidden billing surprises.',
  },
  {
    icon: Scale,
    title: 'Fair treatment',
    description:
      'Your background informs care. It never limits the quality of care you receive.',
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
    stat: '45 to 75',
    unit: 'minute',
    label: 'Visit Duration',
    description: 'Comprehensive appointments, not rushed 15-minute slots',
  },
  {
    icon: Users,
    stat: '<200',
    unit: '',
    label: 'Patient Panel',
    description: 'Small panel means your physician actually knows you',
  },
  {
    icon: Zap,
    stat: 'Same',
    unit: 'Day',
    label: 'Access',
    description: 'Messaging and appointments when you need them',
  },
  {
    icon: Brain,
    stat: '1',
    unit: '',
    label: 'Physician',
    description: 'See the same physician every visit, every time',
  },
]

const philosophyPillars = [
  {
    icon: Brain,
    title: 'Context Preserved',
    description:
      'Your physician knows why you made past decisions, not just what medications you take.',
  },
  {
    icon: Heart,
    title: 'Relationship Continuity',
    description:
      'See the same physician every visit. Build trust over time, not from scratch each appointment.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Care',
    description:
      'Treatment plans built on comprehensive understanding, not incomplete snapshots.',
  },
]

// =============================================================================
// COMPONENT
// =============================================================================

export default function AboutPage() {
  return (
    <>
      {/* Structured Data Scripts - Page-specific schemas only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
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
        {/* ================================================================= */}
        {/* HERO SECTION */}
        {/* ================================================================= */}
        <section
          className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background Elements */}
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
          
          {/* Grain Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                  <span
                    className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-white/80 text-sm font-medium tracking-wide">
                    About Our Practice
                  </span>
                </div>

                <h1
                  id="hero-heading"
                  className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-2 leading-tight"
                >
                  Healthcare Built on{' '}
                  <span className="text-sfm-gold">Continuity</span>
                </h1>

                <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white/80 mb-6 leading-tight">
                  Through Memory
                </p>

                {/* Speakable content for voice search */}
                <div className="speakable-intro">
                  <p className="text-white/70 text-lg md:text-xl mb-4 max-w-xl leading-relaxed">
                    Sankofa Family Medicine practices continuity as a clinical discipline. 
                    Your physician knows your history, understands your context, and carries 
                    it forward across time. Memory is not a feature here. It is the foundation of care.
                  </p>
                </div>

                <p className="text-sfm-gold text-lg font-medium mb-8 flex items-center gap-1">
                  Medicine That Remembers
                  <sup className="text-xs" aria-label="Trademark">™</sup>
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/founders-waitlist"
                    className="btn-primary group"
                    aria-label="Reserve your founding membership spot"
                  >
                    Reserve a Founders Spot
                    <ArrowRight
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/#membership-plans"
                    className="btn-secondary-white btn-shine"
                    aria-label="View membership plan options"
                  >
                    Membership Plans
                  </Link>
                </div>

                <p className="text-white/40 text-xs mt-4">
                  Clinical care begins early 2026. No payment required today.
                </p>
              </div>

              {/* Two-column Sankofa layout: Logo + Text */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8 items-start">
                {/* LEFT Column: Logo Image */}
                <div className="md:w-1/2 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/SFMLOGOBLUEVELVET.png"
                      alt="Sankofa Family Medicine logo on elegant blue velvet background"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* RIGHT Column: Text Content */}
                <div className="md:w-1/2 w-full">
                  <p className="text-sfm-gold font-display text-lg mb-1">Sankofa</p>
                  <p className="text-white/70 text-sm italic mb-6">Retrieve what matters from the past. Apply it deliberately.</p>
                  
                  <p className="section-label text-sfm-gold/80">The Principle</p>
                  <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                    What does Sankofa mean?
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-8" aria-hidden="true" />

                  <div className="speakable-sankofa space-y-6 text-white/70 leading-relaxed">
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
              </div>
            </div>
          </div>

          {/* Memory Thread Visual Element */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sfm-gold/50 to-transparent"
            aria-hidden="true"
          />
        </section>

        {/* ================================================================= */}
        {/* MEDICINE THAT REMEMBERS */}
        {/* ================================================================= */}
        <section
          className="py-24 bg-sfm-cream"
          aria-labelledby="philosophy-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Image */}
              <div className="relative order-2 lg:order-1 group animate-on-scroll">
                <div
                  className="absolute -inset-6 bg-gradient-to-br from-sfm-gold/25 via-sfm-azure/10 to-transparent rounded-3xl blur-3xl animate-pulse-slow"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sfm-navy/20 image-fade-elite">
                  {/* Brand color overlay */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-sfm-navy/10 via-transparent to-sfm-gold/5"
                    aria-hidden="true"
                  />
                  <Image
                    src="/images/physician-conversation-warm.png"
                    alt="Physician having an unhurried conversation with patient in a warm, welcoming setting"
                    width={600}
                    height={400}
                    className="relative object-cover w-full transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 animate-on-scroll animation-delay-200">
                <p className="section-label">Our Philosophy</p>
                <h2
                  id="philosophy-heading"
                  className="font-display text-3xl md:text-4xl text-sfm-navy mb-4"
                >
                  Medicine That Remembers
                  <sup className="text-lg text-sfm-gold" aria-label="Trademark">™</sup>
                </h2>
                <div
                  className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-6"
                  aria-hidden="true"
                />
                
                {/* Speakable content for voice search */}
                <div className="speakable-philosophy">
                  <p className="text-sfm-navy/60 leading-relaxed mb-6">
                    A care model designed to retain the details that shape your health: your history,
                    your context, your goals, and your preferences.
                  </p>
                  <p className="text-sfm-navy/60 leading-relaxed">
                    The connection between physician and patient is not transactional. It is built on
                    trust, continuity, and the quiet assurance that someone remembers your story.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Pillars */}
            <div className="grid md:grid-cols-3 gap-8">
              {philosophyPillars.map((item, index) => (
                <article
                  key={item.title}
                  className={`group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-on-scroll animation-delay-${(index + 1) * 100}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sfm-azure/10 to-sfm-azure/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon
                      className="w-7 h-7 text-sfm-azure"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                  <p className="text-sfm-navy/60 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* HOW IT WORKS */}
        {/* ================================================================= */}
        <section
          className="py-24 bg-white"
          aria-labelledby="how-it-works-heading"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="section-label">How It Works</p>
            <h2
              id="how-it-works-heading"
              className="font-display text-3xl md:text-4xl text-sfm-navy mb-6"
            >
              Membership-Based Primary Care
            </h2>
            <div
              className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8"
              aria-hidden="true"
            />

            <div className="space-y-6 text-sfm-navy/70 text-lg leading-relaxed">
              <p>
                We practice membership-based primary care built on continuity, access, and thoughtful
                clinical judgment.
              </p>
              <p>
                Care begins with secure onboarding in our private clinical platform, followed by
                virtual-first visits, direct physician access, and long-term partnership over time.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/founders-waitlist"
                className="btn-primary group"
                aria-label="Reserve your founding membership spot"
              >
                Reserve a Founders Spot
                <ArrowRight
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/#membership-plans"
                className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium"
                aria-label="View membership plan options and pricing"
              >
                View Membership Plans
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* OUR STANDARDS */}
        {/* ================================================================= */}
        <section
          className="py-24 bg-sfm-navy"
          aria-labelledby="standards-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-gold text-sm tracking-widest uppercase mb-4">
                Our Standards
              </p>
              <h2
                id="standards-heading"
                className="font-display text-3xl md:text-4xl text-white mb-4"
              >
                Commitments to Every Patient
              </h2>
              <div
                className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-6"
                aria-hidden="true"
              />
              <p className="text-white/60 max-w-2xl mx-auto">
                These are not marketing claims. They are commitments we measure ourselves against.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((item, index) => (
                <article
                  key={item.title}
                  className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sfm-gold/30 transition-all duration-300 ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center shrink-0 group-hover:bg-sfm-gold/20 transition-colors">
                      <item.icon
                        className="w-6 h-6 text-sfm-gold"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
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

        {/* ================================================================= */}
        {/* FOUNDER SECTION */}
        {/* ================================================================= */}
        <section
          className="py-24 bg-white"
          aria-labelledby="founder-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Founder Image */}
              <div className="relative group animate-on-scroll">
                <div
                  className="absolute -inset-4 bg-gradient-to-br from-sfm-gold/20 to-sfm-azure/20 rounded-3xl blur-2xl opacity-50 animate-pulse-slow"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden image-lift portrait-premium image-fade-elite shadow-2xl shadow-sfm-navy/20">
                  <Image
                    src="/images/dr-nkrumah-desk.png"
                    alt="Dr. Yaw Nkrumah, MD, founder of Sankofa Family Medicine, board-certified family medicine physician"
                    fill
                    className="object-cover object-left transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-105"
                  />
                  {/* Blur edge overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.25)]"
                    aria-hidden="true"
                  />
                  {/* Motion overlay on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-sfm-gold/5 via-transparent to-sfm-azure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        Board-Certified Family Medicine
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        WA Licensed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Content */}
              <div className="animate-on-scroll animation-delay-200">
                <p className="section-label">The Founder</p>
                <h2
                  id="founder-heading"
                  className="font-display text-3xl md:text-4xl text-sfm-navy mb-6"
                >
                  Dr. Yaw Nkrumah, MD
                </h2>
                <div
                  className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-8"
                  aria-hidden="true"
                />

                {/* Speakable content for voice search */}
                <div className="speakable-founder space-y-4 text-sfm-navy/70 leading-relaxed mb-8">
                  <p>
                    Sankofa Family Medicine was built to restore relationship-centered primary care.
                    This practice is designed around continuity, clinical judgment, and follow-through.
                  </p>
                  <p>
                    Trained at the Medical University of South Carolina and Kadlec Family Medicine
                    Residency, Dr. Nkrumah brings both clinical expertise and a vision for how
                    primary care should work.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/founder"
                    className="btn-primary group"
                    aria-label="Learn more about Dr. Yaw Nkrumah"
                  >
                    Meet Dr. Nkrumah
                    <ArrowRight
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* FINAL CTA */}
        {/* ================================================================= */}
        <section
          className="py-24 bg-gradient-to-br from-sfm-cream via-white to-sfm-cream"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Founders Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 rounded-full border border-sfm-gold/20 mb-8">
              <span
                className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse"
                aria-hidden="true"
              />
              <span className="text-sfm-gold text-sm font-semibold">
                Founding Memberships Now Available
              </span>
            </div>

            <h2
              id="cta-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl text-sfm-navy mb-6 leading-tight"
            >
              Begin Your Care with{' '}
              <span className="text-sfm-gold whitespace-nowrap">
                Medicine That Remembers
                <sup className="text-lg align-top" aria-label="Trademark">™</sup>
              </span>
            </h2>

            <p className="text-sfm-navy/60 text-lg mb-10 max-w-2xl mx-auto">
              Clinical care begins early 2026. Reserve your spot today. No payment required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/founders-waitlist"
                className="btn-primary group"
                aria-label="Reserve your founding membership spot"
              >
                Reserve a Founders Spot
                <ArrowRight
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/#membership-plans"
                className="btn-secondary btn-shine"
                aria-label="View membership plan options and pricing"
              >
                Membership Plans
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-sfm-navy/50">
              <span className="flex items-center gap-2">
                <CheckCircle2
                  className="w-4 h-4 text-sfm-gold"
                  aria-hidden="true"
                />
                HSA/FSA Accepted
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2
                  className="w-4 h-4 text-sfm-gold"
                  aria-hidden="true"
                />
                Cancel Anytime
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2
                  className="w-4 h-4 text-sfm-gold"
                  aria-hidden="true"
                />
                Same Physician Every Visit
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
