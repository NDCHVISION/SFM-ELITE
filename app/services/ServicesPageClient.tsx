'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import PrimaryCTA from '@/components/PrimaryCTA'
import {
  ArrowRight,
  Check,
  Shield,
  Clock,
  MessageCircle,
  Users,
  ChevronDown,
  ChevronUp,
  Dna,
  Activity,
  FlaskConical,
  CalendarCheck,
} from 'lucide-react'

/* =========================================================
SERVICES PAGE CLIENT COMPONENT
Version: 12.0 (Final Tier Design - Calm Progression)
=========================================================

DESIGN PHILOSOPHY:
- Calm, intentional progression (not a feature ladder)
- Continuity = Foundation
- Precision = Optimization  
- Executive = Priority + Oversight

RULES:
- Max 5 bullets per tier
- No greyed-out negatives
- Lead with purpose, not features
- Same visual weight across cards
- Executive is calmer, not louder

NO VENDOR NAMES (pending BAA)
========================================================= */

const FOUNDERS_COHORT_LIMIT = 30

const tiers = [
  {
    id: 'continuity',
    name: 'Continuity',
    tagline: 'Your foundation for ongoing care',
    description:
      'Continuity Care is designed for patients who want a physician who truly understands their health history and genetic profile, and who manages care consistently with a prevention-first approach.',
    features: [
      'Comprehensive Precision Baseline at enrollment (full intake, comprehensive lab panel, and genetic health analysis)',
      'Genetic data reviewed comprehensively and integrated annually',
      'Quarterly clinical reassessment available (every 90 days)',
      '40-minute visits',
      'Secure messaging with response within 48 business hours',
    ],
    popular: false,
    bgClass: 'bg-white border border-gray-200',
    textClass: 'text-sfm-navy',
    mutedClass: 'text-gray-600',
    btnClass: 'bg-sfm-navy text-white hover:bg-sfm-navy-deep',
  },
  {
    id: 'precision',
    name: 'Precision',
    tagline: 'Deeper monitoring and active optimization',
    description:
      'Precision Care builds on Continuity by increasing how often your health data is actively reassessed and adjusted over time.',
    includesPrefix: 'Everything in Continuity, plus:',
    features: [
      'Genetic data re-integrated twice yearly',
      'One comprehensive lab reassessment included annually',
      'More frequent data-driven adjustments to your care plan',
      '50-minute visits',
      'Secure messaging with response within 24 business hours',
    ],
    popular: true,
    bgClass: 'bg-gradient-to-b from-sfm-navy to-sfm-navy-deep',
    textClass: 'text-white',
    mutedClass: 'text-white/70',
    btnClass: 'bg-sfm-gold text-sfm-navy hover:bg-sfm-gold-light shadow-lg shadow-sfm-gold/30',
  },
  {
    id: 'executive',
    name: 'Executive',
    tagline: 'Continuous optimization with highest priority',
    description:
      'Executive Care is designed for individuals who want the highest level of physician oversight, fastest response times, and the most structured reassessment cadence.',
    includesPrefix: 'Everything in Precision, plus:',
    features: [
      'Genetic data re-integrated quarterly',
      'Up to four comprehensive lab reassessments per year included',
      'Care reviewed proactively at regular intervals',
      '60-minute visits',
      'Highest response priority within the care model (same business day)',
    ],
    popular: false,
    bgClass: 'bg-sfm-navy-deep',
    textClass: 'text-white',
    mutedClass: 'text-white/70',
    btnClass: 'bg-white text-sfm-navy hover:bg-gray-100',
  },
]

const faqs = [
  {
    q: 'What is membership-based primary care?',
    a: 'Membership-based primary care means you pay a monthly fee directly to your physician for primary care services. Instead of billing insurance for each visit, you have a direct relationship with one doctor who has time to know you. Visits are longer, access is simpler, and care is continuous.',
  },
  {
    q: 'What is the Comprehensive Precision Baseline?',
    a: 'Every member starts with a Comprehensive Precision Baseline. This includes a full intake (history, goals, risk profile), a comprehensive lab panel, and a comprehensive genetic health analysis. Your lab results are correlated with your genetic findings to identify risk trends and prevention targets. This baseline is built once and refined over time.',
  },
  {
    q: 'How does genetic analysis work in my care?',
    a: 'You receive a copy of your genetic report. Before your visit, your physician reviews your genetic information comprehensively. During your visit, the most relevant genetic findings are connected to your personal history and current lab results. Together, we build a long-term prevention and optimization plan around what matters most for you.',
  },
  {
    q: 'What is the difference between tiers?',
    a: 'All tiers include the Comprehensive Precision Baseline at enrollment and quarterly reassessment availability. Higher tiers increase how often your genetic data is re-integrated (annually, twice yearly, or quarterly), include more lab reassessments per year, offer longer visits, and provide faster response times.',
  },
  {
    q: 'What about lab work after enrollment?',
    a: 'All members can access lab work at wholesale rates at any time. Precision includes one comprehensive lab reassessment per year. Executive includes up to four per year. Additional labs beyond what is included are available at wholesale pricing.',
  },
  {
    q: 'Do I still need health insurance?',
    a: 'Yes. Membership covers primary care services only. Keep insurance for emergencies, hospital care, specialists, imaging, and prescriptions.',
  },
  {
    q: 'Do I need to be in Washington State for visits?',
    a: 'Yes. You must be physically located in Washington State at the time of your telehealth visit.',
  },
  {
    q: 'Is this service for emergencies?',
    a: 'No. This practice does not provide emergency or urgent care services. For emergencies, call 911 or go to the nearest emergency room.',
  },
  {
    q: 'Does joining the waitlist create a doctor-patient relationship?',
    a: 'No. Joining the Founders List does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.',
  },
  {
    q: 'How will I learn about pricing?',
    a: 'Pricing will be shared with Founders List members before any commitment is required. Monthly and annual billing options will be available.',
  },
]

export default function ServicesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Skip Link */}
      <a
        href="#membership-tiers"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sfm-navy focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-gold"
      >
        Skip to membership tiers
      </a>

      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure" />
        <div
          className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sfm-gold/10 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sfm-azure/30 rounded-full blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Breadcrumbs
              items={[{ label: 'Membership' }]}
              className="text-white/70 [&_a]:text-white/70 [&_a:hover]:text-sfm-gold"
            />
          </nav>

          <div className="max-w-3xl">
            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            >
              Membership-Based
              <br />
              <span className="text-sfm-gold">Primary Care</span>
            </h1>

            <p className="text-white/90 text-xl md:text-2xl font-medium mb-4 leading-relaxed">
              One physician. One relationship. Built over time.
            </p>

            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl">
              Precision-informed primary care for Washington State. We build your baseline once,
              then use it to prevent years of reactive medicine.
            </p>

            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">One physician, every visit</span>
              </div>
              <div className="flex items-center gap-2">
                <Dna className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">Genetics + labs at enrollment</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">Quarterly reassessment available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Precision Baseline Section */}
      <section
        aria-labelledby="baseline-heading"
        className="py-16 bg-white border-b border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Every Membership Includes
            </p>
            <h2
              id="baseline-heading"
              className="font-display text-3xl md:text-4xl text-sfm-navy mb-4"
            >
              Comprehensive Precision Baseline
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              We build your baseline once, then refine it over time. Clarity early, not guessing later.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Users,
                title: 'Comprehensive Intake',
                desc: 'Full history, goals, and risk profile assessment',
              },
              {
                icon: FlaskConical,
                title: 'Comprehensive Lab Panel',
                desc: 'Full metabolic, thyroid, inflammatory, and nutrient biomarkers',
              },
              {
                icon: Dna,
                title: 'Comprehensive Genetic Health Analysis',
                desc: 'Clinical-grade genetic profiling across multiple biological systems',
              },
              {
                icon: Activity,
                title: 'Correlation and Synthesis',
                desc: 'Lab results integrated with genetic findings to identify risk trends',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-sfm-cream/30 rounded-xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-sfm-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sfm-navy">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How Genetics Works */}
          <div className="bg-sfm-navy rounded-2xl p-8 text-white">
            <h3 className="font-display text-xl mb-4">How Genetics Works in Your Care</h3>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>
                <span className="text-sfm-gold font-medium">You receive a copy</span> of your
                genetic report.
              </p>
              <p>
                <span className="text-sfm-gold font-medium">Before your visit,</span> your
                physician reviews your genetic information comprehensively.
              </p>
              <p>
                <span className="text-sfm-gold font-medium">During your visit,</span> the most
                relevant genetic findings are connected to your personal history and current lab
                results.
              </p>
              <p>
                <span className="text-sfm-gold font-medium">Together,</span> we build a long-term
                prevention and optimization plan around what matters most for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section
        id="membership-tiers"
        aria-labelledby="tiers-heading"
        className="section-padding bg-sfm-cream/20 relative"
      >
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 id="tiers-heading" className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
              Care Built Around Continuity, Precision, and Priority
            </h2>
            <p className="text-gray-700 text-base max-w-3xl mx-auto leading-relaxed">
              All members receive comprehensive primary care with a physician who knows their full
              history and biology. Higher tiers increase reassessment cadence, visit length, and
              response priority.
            </p>
          </div>

          {/* Tier Cards - Equal Weight */}
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl ${tier.bgClass} overflow-hidden`}
              >
                <div className="p-7">
                  {/* Header */}
                  <div className="mb-5">
                    <h3 className={`font-display text-2xl mb-1 ${tier.textClass}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.mutedClass}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className={`mb-5 pb-5 border-b ${
                    tier.id === 'continuity' ? 'border-gray-200' : 'border-white/20'
                  }`}>
                    <p className={`text-sm font-medium ${tier.textClass}`}>
                      Pricing shared with Founders List
                    </p>
                    <p className={`text-xs mt-1 ${tier.mutedClass}`}>
                      Monthly and annual options
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${tier.mutedClass}`}>
                    {tier.description}
                  </p>

                  {/* Includes Prefix (for Precision & Executive) */}
                  {tier.includesPrefix && (
                    <p className={`text-sm font-medium mb-3 ${tier.textClass}`}>
                      {tier.includesPrefix}
                    </p>
                  )}

                  {/* Features - Max 5, No Negatives */}
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check 
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            tier.id === 'continuity' ? 'text-sfm-gold' : 'text-sfm-gold'
                          }`} 
                          aria-hidden="true" 
                        />
                        <span className={`text-sm leading-snug ${tier.mutedClass}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/founders-waitlist"
                    className={`block w-full py-4 px-5 rounded-xl font-semibold text-center transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${tier.btnClass}`}
                  >
                    Join the Founders List
                    <ArrowRight className="inline-block w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>

                  <p className={`mt-3 text-xs text-center ${tier.mutedClass}`}>
                    No payment today. Pricing shared before commitment.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Founders List Notice */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white border border-sfm-gold/20 rounded-2xl px-6 py-5 text-center shadow-sm">
              <p className="text-sfm-navy font-semibold mb-2">Founders List</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Founders List members get early access to enrollment as we finalize partnerships
                and infrastructure. Pricing and final enrollment details will be shared before any
                member commits. Limited to {FOUNDERS_COHORT_LIMIT} members.
              </p>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="max-w-3xl mx-auto mt-6">
            <div className="bg-sfm-cream/50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-600 leading-relaxed">
              <p className="mb-2">
                <strong className="text-sfm-navy">This is not health insurance.</strong> Keep
                insurance for emergencies, hospital care, specialists, and prescriptions.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Not for emergencies.</strong> Call 911 or go to
                the ER for emergencies.
              </p>
              <p>
                <strong className="text-sfm-navy">Washington State only.</strong> You must be in
                Washington during visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Membership */}
      <section aria-labelledby="why-heading" className="section-padding bg-sfm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="font-display text-3xl text-white mb-6">
                Why Membership Works
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Traditional primary care is reactive. You wait until something is wrong, then see
                whoever is available for 7 minutes. No one builds a baseline. No one tracks trends.
                No one connects the dots.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                Membership changes this. We build your baseline once, then use it to prevent years
                of reactive medicine. Your genetics and biomarkers are tracked over time. Patterns
                are caught early. Care is continuous.
              </p>
              <ul className="space-y-4">
                {[
                  'Comprehensive Precision Baseline at enrollment',
                  'Genetics + labs correlated for complete picture',
                  'Quarterly reassessment available for all members',
                  'One physician who knows your complete history',
                  'Visits of 40 to 60 minutes, not 7',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <span className="w-5 h-5 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-sfm-gold" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
              <h3 className="font-display text-xl text-white mb-6">
                Medicine That Remembers
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                The name Sankofa comes from the Akan people of West Africa. It means "go back and
                retrieve what matters."
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                In medicine, what matters is continuity. Building a baseline. Tracking trends.
                Remembering what worked and what did not. Connecting each visit to the last.
              </p>
              <p className="text-white/60 text-sm italic">
                This is primary care that remembers. Your history. Your goals. Your biology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="section-padding bg-gradient-to-b from-white to-sfm-cream/50"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase font-medium mb-2">
              Questions
            </p>
            <h2 id="faq-heading" className="font-display text-3xl text-sfm-navy">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-inset rounded-2xl"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-sfm-navy pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp
                      className="w-5 h-5 text-sfm-azure flex-shrink-0"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>

                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 motion-reduce:transition-none ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold font-medium transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-heading"
        className="section-padding bg-gradient-to-b from-sfm-navy to-sfm-navy-deep relative overflow-hidden"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sfm-azure/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sfm-gold/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Gold Heart Sculpture */}
            <div className="relative hidden lg:block group">
              <div className="absolute -inset-8 bg-gradient-to-br from-sfm-gold/30 to-transparent rounded-full blur-3xl" />
              <Image
                src="/images/gold-heart-sculpture.png"
                alt="Gold heart sculpture representing patient care"
                width={400}
                height={600}
                loading="lazy"
                className="relative mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse motion-reduce:animate-none"
                  aria-hidden="true"
                />
                <span className="text-white/90 text-sm font-medium">Founders List Open</span>
              </div>

              <h2
                id="cta-heading"
                className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4"
              >
                Begin with
                <br />
                <span className="text-sfm-gold">Medicine That Remembers</span>
                <span className="text-sfm-gold text-xl align-top">™</span>
              </h2>

              <p className="text-white/80 text-lg mb-6 max-w-2xl">
                One physician. One relationship. Built over time.
              </p>

              <p className="text-white/60 text-base mb-10 max-w-2xl">
                Membership-based primary care with comprehensive genetic and metabolic health
                assessment. Clinical care begins 2026.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <PrimaryCTA variant="hero" />
                <Link href="/contact" className="btn-secondary-white px-10 py-5">
                  Contact Us
                </Link>
              </div>

              <p className="text-white/60 text-sm mt-8">
                Questions?{' '}
                <a
                  href="tel:+14252857390"
                  className="text-sfm-gold hover:text-sfm-gold-light transition-colors"
                >
                  (425) 285-7390
                </a>
              </p>

              <p className="text-white/50 text-xs mt-4 leading-relaxed">
                Not for emergencies. Call 911 for emergencies. You must be in Washington State for
                visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section
        aria-labelledby="disclosures-heading"
        className="py-10 bg-sfm-cream/30 border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3
            id="disclosures-heading"
            className="font-display text-lg text-sfm-navy mb-4 text-center"
          >
            Important Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong className="text-sfm-navy">Not Health Insurance:</strong> This membership is
                not health insurance. Keep coverage for emergencies, hospital stays, specialists, and
                major events.
              </p>
              <p>
                <strong className="text-sfm-navy">Genetic Analysis:</strong> Genetic health analysis
                provides information useful for clinical decision-making but does not diagnose disease
                or predict outcomes.
              </p>
              <p>
                <strong className="text-sfm-navy">Telehealth Limitations:</strong> Telehealth has
                limitations compared to in-person care. Some conditions require in-person evaluation.
              </p>
              <p>
                <strong className="text-sfm-navy">No Outcome Guarantees:</strong> Medicine is not an
                exact science. No specific health outcomes are guaranteed.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <strong className="text-sfm-navy">Emergencies:</strong> We do not provide emergency or
                urgent care. For emergencies, call 911 or go to the ER.
              </p>
              <p>
                <strong className="text-sfm-navy">Location:</strong> You must be physically in
                Washington State during telehealth visits.
              </p>
              <p>
                <strong className="text-sfm-navy">Founders List:</strong> Joining does not guarantee
                enrollment or create a doctor-patient relationship.
              </p>
              <p>
                <strong className="text-sfm-navy">Complaints:</strong> Washington Medical Commission:
                (360) 236-2750 | wmc.wa.gov
              </p>
            </div>
          </div>

          <div className="text-center mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/membership-terms"
              className="text-sfm-azure hover:text-sfm-gold text-sm font-medium transition-colors inline-flex items-center gap-1"
            >
              Membership Terms <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
            <Link
              href="/privacy"
              className="text-sfm-azure hover:text-sfm-gold text-sm font-medium transition-colors inline-flex items-center gap-1"
            >
              Privacy Practices <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

