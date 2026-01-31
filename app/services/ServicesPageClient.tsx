'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

/* =========================================================
SERVICES PAGE CLIENT COMPONENT
Version: 13.0 (Pre-Launch Compliant - Washington State)
=========================================================

DESIGN PHILOSOPHY:
- Calm, intentional progression (not a feature ladder)
- Continuity = Foundation
- Precision = Optimization  
- Executive = Priority + Oversight

COMPLIANCE RULES:
- No pricing displayed anywhere
- No guaranteed language
- No tests, vendors, or outcomes named
- Tier differentiation is experiential, not quantitative
- Language preserves physician discretion
- Intent-based language, not numeric promises

NO VENDOR NAMES
========================================================= */

const tiers = [
  {
    id: 'continuity',
    name: 'Continuity',
    tagline: 'Your foundation for ongoing care',
    description:
      'Continuity is designed for patients who want a consistent physician relationship grounded in history, prevention, and long-term understanding.',
    valueClarifier:
      'Care is designed to compound over time, so each visit builds on prior decisions rather than starting from scratch.',
    features: [
      'Comprehensive health intake at enrollment',
      // Compliance: Genetics requires "physician-led interpretation" modifier
      'Physician-led interpretation of genetic health information reviewed and integrated into care',
      'Ongoing primary care with longitudinal context',
      'Scheduled clinical reassessment availability',
      'Secure physician messaging during business hours',
    ],
    visitLine: 'Standard visit duration: approximately 40 minutes',
    footerNote: 'Membership availability is limited.',
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
      'Precision builds on Continuity by increasing how often health data is reviewed and how proactively care plans are refined.',
    valueClarifier:
      'This tier is suited for patients who want their data actively revisited and their care plan adjusted as patterns emerge.',
    includesPrefix: 'Everything in Continuity, plus:',
    features: [
      'More frequent clinical data review over time',
      'Genetic data re-integrated into care at regular intervals',
      'Periodic comprehensive laboratory reassessment',
      'Increased cadence of data-informed care adjustments',
      'Priority scheduling when available',
    ],
    visitLine: 'Extended visit duration: approximately 50 minutes',
    footerNote: 'Membership availability is limited.',
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
      'Executive is designed for individuals who want the highest level of physician oversight and the most structured reassessment cadence within the practice.',
    valueClarifier:
      'This tier is built for individuals who want ongoing physician-led review rather than periodic check-ins.',
    includesPrefix: 'Everything in Precision, plus:',
    features: [
      'Most frequent genetic and clinical data re-integration',
      'Multiple comprehensive laboratory reassessments per year',
      'Proactive review of care at defined intervals',
      'Highest response priority within the care model',
    ],
    visitLine: 'Extended visit duration: approximately 60 minutes',
    footerNote: 'Enrollment is highly limited.',
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
    a: 'Membership-based primary care means you have a direct relationship with one physician for primary care services. Instead of billing insurance for each visit, care is delivered through a membership model. Visits are longer, access is simpler, and care is continuous.',
  },
  {
    q: 'How does genetic analysis work in my care?',
    // Compliance: Genetics requires "physician-led interpretation" modifier
    a: 'Physician-led interpretation of genetic health information is reviewed and integrated into your care. Your physician uses this information alongside your health history and clinical data to inform medical decisions. Together, you build a long-term approach around what matters most for your health.',
  },
  {
    q: 'What is the difference between tiers?',
    a: 'All tiers provide comprehensive primary care with a consistent physician relationship. Higher tiers offer more frequent data review, increased reassessment cadence, longer visit durations, and higher response priority within the care model.',
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
    q: 'Does joining the Founders List create a doctor-patient relationship?',
    a: 'No. Joining the Founders List does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.',
  },
  {
    q: 'How will I learn about pricing?',
    a: 'Membership details and pricing are shared privately prior to commitment. No payment is required to join the Founders List.',
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
              Virtual-Only, Physician-Led
              <br />
              <span className="text-sfm-gold">Primary Care</span>
            </h1>

            <p className="text-white/90 text-xl md:text-2xl font-medium mb-4 leading-relaxed">
              Membership-based primary care, concierge in structure, precision-informed in approach.
            </p>

            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl">
              Operating from Spokane, Washington and serving patients statewide through telehealth.
            </p>

            <p className="text-sm text-white/50 leading-relaxed">
              This practice is not insurance and does not replace emergency or specialty care.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Launch Notice */}
      <section
        aria-labelledby="prelaunch-heading"
        className="py-6 bg-sfm-gold/10 border-b border-sfm-gold/20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase font-semibold mb-2">
            Pre-Launch
          </p>
          <p className="text-sfm-navy text-base leading-relaxed">
            Sankofa Family Medicine is enrolling a limited Founders cohort.
            <br />
            <span className="text-sfm-text-muted">
              Membership details and pricing are shared privately prior to commitment.
            </span>
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section
        id="membership-tiers"
        aria-labelledby="tiers-heading"
        className="section-padding bg-sfm-cream/20 relative"
      >
        <div className="relative max-w-7xl mx-auto px-6">
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

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${tier.mutedClass}`}>
                    {tier.description}
                  </p>

                  {/* Value Clarifier */}
                  <p className={`text-sm leading-relaxed mb-6 italic ${tier.mutedClass}`}>
                    {tier.valueClarifier}
                  </p>

                  {/* Includes Prefix (for Precision & Executive) */}
                  {tier.includesPrefix && (
                    <p className={`text-sm font-medium mb-3 ${tier.textClass}`}>
                      {tier.includesPrefix}
                    </p>
                  )}

                  {/* Features */}
                  <ul className="space-y-3 mb-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check 
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-sfm-gold" 
                          aria-hidden="true" 
                        />
                        <span className={`text-sm leading-snug ${tier.mutedClass}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Visit Line */}
                  <p className={`text-sm mb-6 ${tier.mutedClass}`}>
                    {tier.visitLine}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/founders-waitlist"
                    className={`block w-full py-4 px-5 rounded-xl font-semibold text-center transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${tier.btnClass}`}
                  >
                    Join the Founders List
                    <ArrowRight className="inline-block w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>

                  {/* Footer Note */}
                  <p className={`mt-3 text-xs text-center italic ${tier.mutedClass}`}>
                    {tier.footerNote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Universal Legal Footer */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-sfm-cream/50 border border-gray-200 rounded-xl px-6 py-5 text-sm text-gray-600 leading-relaxed">
              <ul className="space-y-2">
                <li>• Membership does not constitute health insurance</li>
                <li>• Emergency care and specialty services are not included</li>
                <li>• Services are provided via telehealth to Washington State residents</li>
                <li>• Clinical decisions are made based on medical appropriateness</li>
                <li>• Membership terms, commitments, and pricing are disclosed prior to enrollment</li>
              </ul>
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

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2
            id="cta-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8"
          >
            Ready to Begin?
          </h2>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/founders-waitlist"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-sfm-gold via-sfm-gold-light to-sfm-gold bg-[length:200%_100%] text-sfm-navy font-semibold rounded-xl shadow-lg shadow-sfm-gold/25 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-sfm-gold/40 transition-all duration-500"
            >
              Join the Founders List
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>

            <p className="text-white/70 text-sm">
              No payment required. Details shared before commitment.
            </p>
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
                {/* Compliance: Genetics requires "physician-led interpretation" modifier */}
                <strong className="text-sfm-navy">Genetic Analysis:</strong> Physician-led interpretation of genetic health information
                provides context useful for clinical decision-making but does not diagnose disease
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

