import Link from 'next/link'
import { ArrowRight, Lock, Fingerprint, Sparkles, Clock, Shield, Heart, Brain, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// STRUCTURED DATA FOR SEO + AI DISCOVERY
// =============================================================================

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://sankofafamilymedicine.com/sankofa-os/#software',
  name: 'Sankofa OS',
  alternateName: ['Clinical Memory Infrastructure', 'Medicine That Remembers Platform'],
  description:
    'Sankofa OS is the clinical infrastructure for Medicine That Remembers. A living standard that connects clinical expertise with advanced data-driven tools including BioMatrix integration with Nexus Health for genomic and laboratory analysis.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web-based',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    price: '0',
    priceCurrency: 'USD',
    description: 'Early access waitlist - pricing to be announced',
  },
  creator: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sankofafamilymedicine.com/#organization',
    name: 'Sankofa Family Medicine',
  },
  featureList: [
    'Clinical memory infrastructure',
    'Patient context preservation',
    'BioMatrix decision support integration',
    'Nexus Health genomic analysis',
    'Pharmacogenomic medication guidance',
    'Cardiometabolic risk pattern detection',
    'HIPAA compliant',
    'Physician-led clinical workflows',
  ],
  releaseNotes: 'Currently in development with Nexus Health partnership. Early access opening soon.',
  softwareVersion: 'Pre-release',
}

const partnershipJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sankofafamilymedicine.com/sankofa-os/#nexus-partnership',
  name: 'Nexus Health Partnership',
  description: 'Sankofa Family Medicine partners with Nexus Health to integrate BioMatrix genomic and laboratory analysis into clinical decision-making workflows.',
  partner: {
    '@type': 'Organization',
    name: 'Nexus Health',
    url: 'https://nexushealth.me',
    description: 'HIPAA-aligned decision support platform providing genomic and laboratory analysis capabilities',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Sankofa OS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa OS is the clinical infrastructure for Medicine That Remembers: a living standard that connects clinical expertise with advanced data-driven tools. It helps the clinical team see the full picture of each patient\'s health including clinical histories, genetic profiles, and lab trends in one continuous thread.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is BioMatrix and how does it integrate with Sankofa OS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BioMatrix is a decision engine from Nexus Health that analyzes lab, genetic, and intake data to provide structured insights and protocol-ready options for clinician review. It provides clinical decision support, not diagnosis. All care decisions are made by licensed clinicians.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did Sankofa Family Medicine choose Nexus Health as a partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nexus Health was selected for its focus on HIPAA-aligned decision support, physician-led workflows, and precision tools that respect clinical autonomy. Their platform enhances clinical judgment rather than supplanting it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is BioMatrix safe and compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BioMatrix provides clinical decision support, not autonomous diagnosis or treatment. All data is handled within HIPAA-compliant systems that protect patient health information and respect privacy.',
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
      name: 'Sankofa OS',
      item: 'https://sankofafamilymedicine.com/sankofa-os',
    },
  ],
}

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: 'Sankofa OS | Clinical Infrastructure for Medicine That Remembers',
  description:
    'Sankofa OS is the clinical infrastructure for Medicine That Remembers. Built for Continuity. Designed for Trust. Powered by Human Judgment. Featuring BioMatrix integration with Nexus Health for precision genomic and laboratory analysis.',
  keywords: [
    'Sankofa OS',
    'clinical memory infrastructure',
    'healthcare technology',
    'BioMatrix',
    'Nexus Health',
    'genomic analysis',
    'pharmacogenomics',
    'precision medicine platform',
    'clinical decision support',
    'HIPAA compliant healthcare software',
    'Medicine That Remembers',
  ],
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/sankofa-os',
  },
  openGraph: {
    title: 'Sankofa OS | Clinical Infrastructure for Medicine That Remembers',
    description:
      'Built for Continuity. Designed for Trust. Powered by Human Judgment. Now with BioMatrix integration from Nexus Health.',
    url: 'https://sankofafamilymedicine.com/sankofa-os',
    siteName: 'Sankofa Family Medicine',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa OS Clinical Infrastructure for Medicine That Remembers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa OS | Clinical Infrastructure for Medicine That Remembers',
    description:
      'Built for Continuity. Designed for Trust. Powered by Human Judgment.',
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
  other: {
    'ai-content-declaration': 'human-authored',
    'content-type': 'Technology',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function SankofaOSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-[#070705] min-h-screen overflow-hidden">
        {/* Grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <main id="main-content">
          {/* Hero Section */}
          <section
            className="relative min-h-screen flex items-center justify-center px-6"
            aria-labelledby="hero-heading"
          >
            {/* Atmospheric background */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(188,152,51,0.08)_0%,_transparent_70%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(5,67,110,0.15)_0%,_transparent_70%)]" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '100px 100px',
                }}
              />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-12">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sfm-gold opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sfm-gold" />
                </span>
                <span className="text-white/60 text-sm tracking-wide">
                  Now with Nexus Health Integration
                </span>
              </div>

              {/* Main headline */}
              <h1
                id="hero-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-[1.05]"
              >
                Sankofa OS<span className="tm">™</span>
                <br />
                <span className="text-sfm-gold">
                  The Clinical Infrastructure for
                </span>
                <br />
                <span className="text-white/90">
                  Medicine That Remembers<span className="tm">™</span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-6 leading-relaxed italic">
                Built for Continuity. Designed for Trust. Powered by Human Judgment.
              </p>

              <p className="text-white/40 text-base max-w-2xl mx-auto mb-12 leading-relaxed">
                Sankofa OS is our intelligent care framework: a living standard that connects clinical
                expertise with advanced data-driven tools.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#biomatrix"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sfm-gold text-sfm-navy font-medium rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-[0_0_40px_rgba(188,152,51,0.3)] hover:-translate-y-0.5"
                  aria-label="Learn about BioMatrix integration"
                >
                  Explore BioMatrix Integration
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="#waitlist"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                  aria-label="Request early access to Sankofa OS"
                >
                  Book a 15-Minute Fit Call
                </Link>
              </div>

              {/* Scroll indicator */}
              <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* What Sankofa OS Does */}
          <section className="relative py-32 px-6" aria-labelledby="purpose-heading">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5">
                  <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                    The Framework
                  </p>
                  <h2
                    id="purpose-heading"
                    className="font-display text-4xl sm:text-5xl text-white leading-tight mb-8"
                  >
                    One Continuous Thread
                  </h2>
                  <div
                    className="w-16 h-px bg-gradient-to-r from-sfm-gold to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="lg:col-span-7 lg:pt-12">
                  <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                    <p className="text-white/80 text-xl">
                      It helps our clinical team see the full picture of each patient&apos;s health: clinical histories, genetic profiles, and lab trends in one continuous thread.
                    </p>
                    <p>
                      Through secure integrations with trusted partners like Nexus Health (nexushealth.me), we incorporate genomic and laboratory insights directly into clinical decision-making.
                    </p>
                    <p>
                      Nexus Health&apos;s BioMatrix&trade; decision engine analyzes lab, genetic, and intake data to provide structured insights and protocol-ready options that our clinicians review and customize for each patient.
                    </p>
                    <p className="text-white/40 text-base pt-4 border-t border-white/10">
                      This reduces time spent on complex case analysis while preserving clinical judgment. All data is handled within HIPAA-compliant systems that protect your health information and respect your privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Important Disclaimer */}
          <section className="relative py-16 px-6 border-y border-white/[0.06]" aria-labelledby="disclaimer-heading">
            <div className="max-w-3xl mx-auto">
              <div className="bg-sfm-azure/10 border border-sfm-azure/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-sfm-azure flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 id="disclaimer-heading" className="text-white font-medium text-lg mb-3">Important</h3>
                    <p className="text-white/70 leading-relaxed italic">
                      BioMatrix&trade; provides clinical decision support; it does not provide diagnosis, and all care decisions are made by licensed clinicians.
                    </p>
                    <p className="text-white/50 text-sm mt-4">
                      We do not just remember your history. We translate it, then integrate it with your labs, genetics, and lived experience to guide precise, personalized medical decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Nexus Health */}
          <section className="relative py-32 px-6" aria-labelledby="partnership-heading">
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-sfm-azure/[0.02] to-transparent"
              aria-hidden="true"
            />

            <div className="relative max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-6">
                  Why Nexus Health?
                </p>
                <h2
                  id="partnership-heading"
                  className="font-display text-4xl sm:text-5xl text-white mb-6"
                >
                  Selected for Clinical Alignment
                </h2>
                <p className="text-white/50 max-w-2xl mx-auto">
                  Nexus Health was selected for its focus on HIPAA-aligned decision support, physician-led workflows, and precision tools that respect clinical autonomy. BioMatrix&trade; complements our mission without replacing it.
                </p>
              </div>

              <div className="mb-16">
                <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-8 text-center">
                  Our Partnership Criteria Required:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Proven genomic and laboratory analysis capabilities',
                    'Commitment to equity and accessibility in precision health design',
                    'Technology that enhances clinical judgment rather than supplanting it',
                    'HIPAA-compliant infrastructure with robust privacy controls',
                    'Clear positioning as decision support, not autonomous diagnosis or treatment',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/40 text-sm max-w-3xl mx-auto leading-relaxed">
                  Nexus Health met all criteria and shares our commitment to designing precision health tools that can serve diverse patient populations. Their platform, already trusted by wellness centers and primary care practices, now extends into our virtual-first model as a validation site for equitable, clinician-led implementation.
                </p>
              </div>
            </div>
          </section>

          {/* BioMatrix Benefits */}
          <section
            id="biomatrix"
            className="relative py-32 px-6 border-t border-white/[0.06]"
            aria-labelledby="benefits-heading"
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                  Key Benefits
                </p>
                <h2
                  id="benefits-heading"
                  className="font-display text-4xl sm:text-5xl text-white mb-6"
                >
                  BioMatrix&trade; Integration
                </h2>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  {
                    icon: Clock,
                    title: 'Saves 2 to 4 hours per complex case',
                    description: 'Reduces complex case analysis from hours to structured minutes',
                  },
                  {
                    icon: Shield,
                    title: 'Supports safer prescribing',
                    description: 'Provides pharmacogenomic guidance matched to your genetic profile',
                  },
                  {
                    icon: Heart,
                    title: 'Catches risks earlier',
                    description: 'Identifies cardiometabolic risk patterns before problems emerge',
                  },
                  {
                    icon: Brain,
                    title: 'Reduces cognitive load',
                    description: 'Presents clear, protocol-ready options for clinician review',
                  },
                ].map((benefit) => (
                  <article
                    key={benefit.title}
                    className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-sfm-gold/30 hover:bg-sfm-gold/[0.03] transition-all duration-500"
                  >
                    <benefit.icon
                      className="w-8 h-8 text-sfm-gold/70 mb-4 group-hover:text-sfm-gold transition-colors"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="text-white font-medium text-lg mb-2">{benefit.title}</h3>
                    <p className="text-white/50 text-sm">{benefit.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Core Capabilities */}
          <section className="relative py-32 px-6" aria-labelledby="capabilities-heading">
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-sfm-gold/[0.02] to-transparent"
              aria-hidden="true"
            />

            <div className="relative max-w-4xl mx-auto text-center">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                Core Architecture
              </p>
              <h2
                id="capabilities-heading"
                className="font-display text-4xl sm:text-5xl text-white mb-12"
              >
                Built on Three Pillars
              </h2>

              {/* Feature hints */}
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
                role="list"
                aria-label="Core capabilities"
              >
                {[
                  {
                    icon: Fingerprint,
                    label: 'Memory',
                    hint: 'What matters, surfaced when it matters',
                  },
                  {
                    icon: Sparkles,
                    label: 'Intelligence',
                    hint: 'Context that compounds over time',
                  },
                  {
                    icon: Lock,
                    label: 'Control',
                    hint: 'Patient agency by design',
                  },
                ].map((item) => (
                  <article
                    key={item.label}
                    role="listitem"
                    className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-sfm-gold/30 hover:bg-sfm-gold/[0.03] transition-all duration-500"
                  >
                    <item.icon
                      className="w-6 h-6 text-sfm-gold/70 mb-4 group-hover:text-sfm-gold transition-colors"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="text-white font-medium mb-2">{item.label}</h3>
                    <p className="text-white/40 text-sm">{item.hint}</p>
                  </article>
                ))}
              </div>

              <p className="text-white/30 text-sm tracking-wide">
                Architecture proprietary. Details protected by design.
              </p>
            </div>
          </section>

          {/* Credibility */}
          <section
            className="relative py-32 px-6 border-t border-white/[0.06]"
            aria-labelledby="credibility-heading"
          >
            <h2 id="credibility-heading" className="sr-only">
              About Sankofa OS Development
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4">
                    Origin
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Sankofa OS is being developed inside a practicing primary care clinic,
                    not a lab. Every design decision is informed by real physician workflow
                    and real patient relationships.
                  </p>
                </div>

                <div>
                  <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4">
                    Philosophy
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Named for the Akan principle of retrieving what matters from the past
                    to move forward wisely. Not nostalgia. Applied wisdom encoded into
                    clinical infrastructure.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-20 pt-12 border-t border-white/[0.06]">
                <blockquote className="text-center">
                  <p className="font-display text-2xl sm:text-3xl text-white/80 italic leading-relaxed max-w-3xl mx-auto">
                    &ldquo;Continuity is not a feature. It is the foundation.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Waitlist */}
          <section
            id="waitlist"
            className="relative py-32 px-6 border-t border-white/[0.06]"
            aria-labelledby="waitlist-heading"
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(188,152,51,0.1)_0%,_transparent_70%)]"
              aria-hidden="true"
            />

            <div className="relative max-w-2xl mx-auto text-center">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                Early Access
              </p>
              <h2
                id="waitlist-heading"
                className="font-display text-4xl sm:text-5xl text-white mb-6"
              >
                Shape what comes next.
              </h2>
              <p className="text-white/50 text-lg mb-12 leading-relaxed">
                We are building our founding cohort of physicians who want clinical
                infrastructure that actually remembers. Limited access. Influence on
                roadmap.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div
                    className="flex flex-wrap items-center justify-center gap-4 text-white/40 text-sm"
                    role="list"
                    aria-label="Target audience"
                  >
                    <span className="flex items-center gap-2" role="listitem">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-sfm-gold/60"
                        aria-hidden="true"
                      />
                      Independent physicians
                    </span>
                    <span className="flex items-center gap-2" role="listitem">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-sfm-gold/60"
                        aria-hidden="true"
                      />
                      Medical directors
                    </span>
                    <span className="flex items-center gap-2" role="listitem">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-sfm-gold/60"
                        aria-hidden="true"
                      />
                      Health systems
                    </span>
                  </div>

                  <Link
                    href="/contact?source=sankofa-os"
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-sfm-gold text-sfm-navy font-medium rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-[0_0_50px_rgba(188,152,51,0.4)] hover:-translate-y-0.5"
                    aria-label="Request access to Sankofa OS"
                  >
                    Request Access
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>

                  <p className="text-white/30 text-xs">
                    We review every request personally.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative py-12 px-6 border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sfm-gold/10 border border-sfm-gold/20 flex items-center justify-center">
                  <span className="text-sfm-gold font-display text-sm">S</span>
                </div>
                <span className="text-white/40 text-sm">
                  Sankofa OS. A Sankofa Family Medicine Innovation.
                </span>
              </div>

              <nav
                className="flex items-center gap-6 text-white/30 text-sm"
                aria-label="Footer navigation"
              >
                <Link href="/about" className="hover:text-white/60 transition-colors">
                  About
                </Link>
                <Link href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                  Contact
                </Link>
                <span className="flex items-center gap-2">
                  <Lock className="w-3 h-3" aria-hidden="true" />
                  HIPAA Compliant
                </span>
              </nav>
            </div>

            <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-white/[0.04] text-center">
              <p className="text-white/20 text-xs italic">
                &ldquo;Go back, retrieve what matters, carry it forward.&rdquo;
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}
