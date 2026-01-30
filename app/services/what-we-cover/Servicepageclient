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
  Heart,
  FileText,
  Users,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

/* =========================================================
SERVICES PAGE - CLIENT COMPONENT
Version: 6.1 (No pricing, no genetics, legal compliant)
=========================================================

LEGAL COMPLIANCE (WA State):
- WAC 246-16-800: No superlatives, no outcome guarantees
- RCW 48.150: DPC registration compliant
- RCW 19.86: Consumer protection compliant
- No genetics/precision medicine (services not finalized)
- All services clearly scoped to primary care

ACCESSIBILITY (WCAG 2.2 AA):
- Skip link added
- Color contrast verified
- motion-reduce preferences respected
- Semantic HTML throughout
- Focus states defined

READING LEVEL: Target Grade 6 or below
========================================================= */

// --- TYPES ---
type Tier = {
  id: string
  name: string
  tagline: string
  description: string
  features: { text: string; included: boolean; highlight?: boolean }[]
  cta: string
}

// --- TIER DATA ---
const tiers: Tier[] = [
  {
    id: 'continuity',
    name: 'Continuity',
    tagline: 'Steady, consistent primary care',
    description:
      'Your foundation for ongoing virtual primary care. One physician who knows your history and works with you over time.',
    features: [
      { text: 'Virtual visits with your physician', included: true },
      { text: 'Secure messaging during business hours', included: true },
      { text: 'Chronic condition management', included: true },
      { text: 'Preventive care guidance', included: true },
      { text: 'Medication management', included: true },
      { text: 'Referral support when needed', included: true },
      { text: 'Access to lower-cost lab options', included: true },
      { text: 'After-hours messaging', included: false },
      { text: 'Expanded access outside business hours', included: false },
    ],
    cta: 'Join the Founders Waitlist',
  },
  {
    id: 'precision',
    name: 'Precision',
    tagline: 'More access for time-sensitive needs',
    description:
      'Everything in Continuity, plus more ways to reach your doctor for pressing health questions when scheduling allows.',
    features: [
      { text: 'Everything in Continuity', included: true, highlight: true },
      { text: 'Priority scheduling when available', included: true },
      { text: 'Limited after-hours messaging for non-emergent concerns', included: true },
      { text: 'Proactive check-ins when appropriate', included: true },
      { text: 'Enhanced care coordination', included: true },
      { text: 'Lab result review and guidance', included: true },
      { text: 'On-call or real-time coverage', included: false },
      { text: 'Emergency or urgent care', included: false },
    ],
    cta: 'Join the Founders Waitlist',
  },
  {
    id: 'executive',
    name: 'Executive',
    tagline: 'Expanded coordination and access',
    description:
      'Everything in Precision, plus broader access and coordination for those who need more from their primary care relationship.',
    features: [
      { text: 'Everything in Precision', included: true, highlight: true },
      { text: 'Expanded access for time-sensitive needs', included: true },
      { text: 'Care coordination outside business hours when needed', included: true },
      { text: 'Coordination with specialists and facilities', included: true },
      { text: 'Long-term health planning support', included: true },
      { text: 'Direct consultation before enrollment', included: true },
      { text: 'Unlimited or instant responses', included: false },
      { text: 'Emergency or urgent care', included: false },
    ],
    cta: 'Join the Founders Waitlist',
  },
]

// --- FAQ DATA ---
const faqs = [
  {
    q: 'What is Direct Primary Care?',
    a: 'Direct Primary Care is a membership model. You pay a monthly fee directly to the practice for primary care services. We do not bill insurance for visits.',
  },
  {
    q: 'Do I still need health insurance?',
    a: 'Yes. This membership covers primary care only. Keep insurance for emergencies, hospital stays, specialists, imaging, and prescriptions.',
  },
  {
    q: 'Do I need to be in Washington State?',
    a: 'Yes. You must be in Washington State during your telehealth visit. This is required by law.',
  },
  {
    q: 'Is this for emergencies?',
    a: 'No. We do not provide emergency or urgent care. For emergencies, call 911 or go to the nearest emergency room.',
  },
  {
    q: 'Does the waitlist make me a patient?',
    a: 'No. Joining the waitlist does not create a doctor-patient relationship. That begins only after you enroll and have your first visit.',
  },
  {
    q: 'How will I learn about pricing?',
    a: 'We will share pricing when we contact you from the waitlist. You will see all terms and costs before any commitment.',
  },
]

// --- COMPONENT ---
export default function ServicesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Skip Link - Accessibility */}
      <a
        href="#membership-tiers"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sfm-navy focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-gold"
      >
        Skip to membership tiers
      </a>

      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
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
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
            >
              Direct Primary Care
              <br />
              <span className="text-sfm-gold">Membership</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl font-medium mb-4">
              Virtual primary care for Washington State. No insurance billing. Direct access to your physician.
            </p>

            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl">
              One doctor. One relationship. Built over time.
            </p>

            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">Scheduled appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">Direct messaging</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">Simple membership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section aria-labelledby="included-heading" className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase font-medium mb-2">
              Every Membership Includes
            </p>
            <h2 id="included-heading" className="font-display text-2xl text-sfm-navy">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'One Physician', desc: 'The same doctor, every visit' },
              { icon: Clock, label: 'Real Appointments', desc: 'Time to talk, not rush' },
              { icon: MessageCircle, label: 'Direct Messaging', desc: 'Reach your doctor directly' },
              { icon: FileText, label: 'Clear Terms', desc: 'Know what you get' },
            ].map((item) => (
              <div key={item.label} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-sfm-gold/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
                </div>
                <p className="font-semibold text-sfm-navy text-sm">{item.label}</p>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-sfm-azure" aria-hidden="true" />
              <span>Your health information is protected</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>Receipts on request</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
              <span>Cancel with 30 days notice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section
        id="membership-tiers"
        aria-labelledby="tiers-heading"
        className="section-padding bg-gradient-to-b from-sfm-cream/30 via-white to-sfm-cream/20 relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-2 font-medium">
              Choose Your Level
            </p>

            <h2 id="tiers-heading" className="font-display text-4xl text-sfm-navy mb-2">
              Membership Tiers
            </h2>

            <p className="text-sfm-navy/70 text-base max-w-xl mx-auto">
              Three levels of access. All include a dedicated physician relationship.
            </p>
          </div>

          {/* Important Notice Box */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white border border-sfm-navy/10 rounded-2xl px-5 py-4 text-sm text-sfm-navy/80 leading-relaxed">
              <p className="mb-2">
                <strong className="text-sfm-navy">This is not health insurance.</strong> Keep insurance for emergencies, hospital care, specialists, and prescriptions.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Not for emergencies.</strong> Call 911 or go to the ER for emergencies.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Washington State only.</strong> You must be in Washington during visits.
              </p>
              <p>
                <strong className="text-sfm-navy">Waitlist only.</strong> Joining does not make you a patient or guarantee enrollment.
              </p>
            </div>
          </div>

          {/* Pricing Notice */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-sfm-navy/5 border border-sfm-navy/10 rounded-xl px-6 py-4 text-center">
              <p className="text-sm text-sfm-navy font-medium mb-1">
                Pricing Available at Enrollment
              </p>
              <p className="text-sm text-sfm-navy/70 leading-relaxed">
                When we contact you from the waitlist, you will receive complete pricing and terms before any commitment.
              </p>
            </div>
          </div>

          {/* Tier Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="group relative bg-white border border-gray-200 rounded-2xl hover:border-sfm-gold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 lg:p-7">
                  <div className="mb-4">
                    <h3 className="font-display text-xl text-sfm-navy mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-gray-600">{tier.tagline}</p>
                  </div>

                  {/* Pricing Placeholder */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm font-medium text-sfm-navy/80">
                      Pricing shared at enrollment
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Monthly and annual options
                    </p>
                  </div>

                  <p className="text-sm mb-5 leading-relaxed text-gray-700">
                    {tier.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included ? 'bg-sfm-gold/15' : 'bg-gray-100'
                          }`}
                        >
                          {feature.included ? (
                            <Check className="w-3 h-3 text-sfm-gold" aria-hidden="true" />
                          ) : (
                            <span className="w-1.5 h-px bg-gray-400" aria-hidden="true" />
                          )}
                        </div>
                        <span
                          className={`text-sm leading-snug ${
                            feature.included ? 'text-sfm-navy/90' : 'text-gray-400'
                          } ${feature.highlight ? 'font-medium' : ''}`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/founders-waitlist"
                    className="block w-full py-3.5 px-5 rounded-xl font-semibold text-center transition-all duration-300 text-sm bg-sfm-navy text-white hover:bg-sfm-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sfm-navy"
                  >
                    {tier.cta}
                    <ArrowRight className="inline-block w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>

                  <p className="mt-3 text-xs text-gray-500 leading-relaxed text-center">
                    No payment today. We will contact you if space opens.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-sfm-navy/50">
              Access and response times vary by tier, clinical need, and availability.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="section-padding bg-gradient-to-b from-white to-sfm-cream/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase font-medium mb-2">Questions</p>
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
                    <ChevronUp className="w-5 h-5 text-sfm-azure flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
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
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded"
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
            {/* Image */}
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
                <span className="text-white/90 text-sm font-medium">Founders Waitlist Open</span>
              </div>

              <h2 id="cta-heading" className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Begin with
                <br />
                <span className="text-sfm-gold">Medicine That Remembers</span>
                <span className="text-sfm-gold text-xl align-top">™</span>
              </h2>

              <p className="text-white/80 text-lg mb-10 max-w-2xl">
                Clinical care begins 2026. No payment required today.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <PrimaryCTA variant="hero" />
                <Link href="/contact" className="btn-secondary-white px-10 py-5">
                  Contact Us
                </Link>
              </div>

              <p className="text-white/60 text-sm mt-8">
                Questions?{' '}
                <a href="tel:+14252857390" className="text-sfm-gold hover:text-sfm-gold-light transition-colors">
                  (425) 285-7390
                </a>
              </p>

              <p className="text-white/50 text-xs mt-4 leading-relaxed">
                Not for emergencies. Call 911 for emergencies. You must be in Washington State for visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section aria-labelledby="disclosures-heading" className="py-10 bg-sfm-cream/30 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h3 id="disclosures-heading" className="font-display text-lg text-sfm-navy mb-4 text-center">
            Important Information
          </h3>

          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-sfm-navy">Not Health Insurance:</strong> This membership is not health insurance. Keep coverage for emergencies, hospital stays, specialists, and major events.
            </p>

            <p>
              <strong className="text-sfm-navy">Pricing:</strong> Pricing will be provided during enrollment. Your fee is confirmed before you commit. Pricing is set by the Practice.
            </p>

            <p>
              <strong className="text-sfm-navy">Waitlist:</strong> The Founders Waitlist has limited space. Joining does not guarantee enrollment or create a doctor-patient relationship.
            </p>

            <p>
              <strong className="text-sfm-navy">Emergencies:</strong> We do not provide emergency or urgent care. For emergencies, call 911 or go to the ER.
            </p>

            <p>
              <strong className="text-sfm-navy">Access:</strong> No tier guarantees unlimited access, instant responses, or around-the-clock availability. Timing depends on clinical judgment and scheduling.
            </p>

            <p>
              <strong className="text-sfm-navy">Labs:</strong> Members may access lower-cost lab options. Prices vary by test and lab. You pay the lab directly.
            </p>

            <p>
              <strong className="text-sfm-navy">Controlled Substances:</strong> The Practice decides when to prescribe controlled substances. These are rarely prescribed via telehealth for chronic pain.
            </p>

            <p>
              <strong className="text-sfm-navy">Location:</strong> You must be physically in Washington State during telehealth visits.
            </p>
          </div>

          <div className="text-center mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/membership-terms"
              className="text-sfm-azure hover:text-sfm-gold text-sm font-medium transition-colors inline-flex items-center gap-1"
            >
              Membership Terms
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
            <Link
              href="/privacy"
              className="text-sfm-azure hover:text-sfm-gold text-sm font-medium transition-colors inline-flex items-center gap-1"
            >
              Privacy Practices
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
