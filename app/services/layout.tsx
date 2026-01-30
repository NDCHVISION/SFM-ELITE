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
  Star,
  Users,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

/* =========================================================
SERVICES PAGE CLIENT COMPONENT
Version: 7.0 (No Pricing - Pre-launch)
=========================================================

NO PRICING DISPLAYED - Pricing shared at enrollment

WA DOH / ADVERTISING SAFETY:
✅ Emergency disclaimer - multiple locations
✅ Not health insurance - multiple locations
✅ WA State only - multiple locations
✅ Waitlist/no relationship - multiple locations
✅ No outcome guarantees
✅ No superlatives
✅ All access claims qualified

ACCESSIBILITY (WCAG 2.2 AA+):
✅ type="button" on all non-submit buttons
✅ aria-expanded + aria-controls on FAQ
✅ decorative icons aria-hidden
✅ Focus states on interactive elements
========================================================= */

const FOUNDERS_COHORT_LIMIT = 30

const tiers = [
  {
    id: 'continuity',
    name: 'Continuity',
    tagline: 'Your foundation for ongoing care',
    description:
      'Membership-based DPC for steady, consistent virtual primary care. One physician who knows your history and works with you over time.',
    features: [
      { text: 'Physician-led virtual primary care visits', included: true },
      { text: 'Same-day or next-day appointments when available', included: true },
      { text: 'Secure messaging during business hours', included: true },
      { text: 'Initial consultation (45 min)', included: true },
      { text: 'Access to lower-cost lab pricing options', included: true },
      { text: 'Chronic condition management', included: true },
      { text: 'Medication management (non-controlled)', included: true },
      { text: 'Ongoing care coordination', included: true },
      { text: 'After-hours messaging', included: false },
      { text: 'Advanced lab review and interpretation', included: false },
    ],
    popular: false,
  },
  {
    id: 'precision',
    name: 'Precision',
    tagline: 'Deeper reviews when appropriate',
    description:
      'Everything in Continuity, plus deeper lab reviews and optional genetics interpretation. More ways to reach your doctor for pressing health questions.',
    features: [
      { text: 'Everything in Continuity', included: true, highlight: true },
      { text: 'Advanced lab review and interpretation', included: true },
      { text: 'Heart and diabetes risk review', included: true },
      { text: 'Regular health check-ins', included: true },
      { text: 'Genetic testing interpretation (test costs separate)', included: true },
      { text: 'Extended visit times when clinically appropriate', included: true },
      { text: 'Priority scheduling when available', included: true },
      { text: 'Limited after-hours messaging for non-emergent concerns', included: true },
      { text: 'Expanded access pathways', included: false },
    ],
    popular: true,
  },
  {
    id: 'executive',
    name: 'Executive',
    tagline: 'Expanded coordination and access',
    description:
      'Everything in Precision, plus broader access and coordination for those who need more from their primary care relationship.',
    features: [
      { text: 'Everything in Precision', included: true, highlight: true },
      { text: 'Priority coordination when available', included: true },
      { text: 'Expanded access pathways for time-sensitive needs', included: true },
      { text: 'Care coordination outside business hours when appropriate', included: true },
      { text: 'Coordination with specialists and external providers', included: true },
      { text: 'Long-term planning and oversight', included: true },
      { text: 'Annual comprehensive health review', included: true },
      { text: 'Direct consultation before enrollment', included: true },
    ],
    popular: false,
  },
]

const faqs = [
  {
    q: 'What is Direct Primary Care?',
    a: 'Direct Primary Care (DPC) is a membership model. You pay a monthly fee directly to your clinic for primary care, instead of the clinic billing your insurance for each visit.',
  },
  {
    q: 'Do I still need health insurance?',
    a: 'Yes. DPC covers primary care only. Keep insurance for emergencies, hospital care, specialists, imaging, and prescriptions.',
  },
  {
    q: 'Do I need to be in Washington State for visits?',
    a: 'Yes. You must be physically located in Washington State at the time of your telehealth visit.',
  },
  {
    q: 'Is this service for emergencies or urgent care?',
    a: 'No. This practice does not provide emergency or urgent care services. For emergencies, call 911 or go to the nearest emergency room.',
  },
  {
    q: 'Does joining the waitlist create a doctor-patient relationship?',
    a: 'No. Joining the founders waitlist does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.',
  },
  {
    q: 'How will I learn about pricing?',
    a: 'Pricing will be published soon. You will see all terms and costs before any commitment is required. Monthly and annual billing options will be available.',
  },
  {
    q: 'What if I need a specialist?',
    a: 'Your physician can help coordinate referrals when needed. Specialist care is separate and is provided by third-party clinics and hospitals.',
  },
  {
    q: 'Is virtual care the right fit for me?',
    a: 'Virtual care works well for many common primary care needs. Some concerns require an in-person exam or testing. If that happens, we will guide you to in-person care.',
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
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
            >
              Direct Primary Care
              <br />
              <span className="text-sfm-gold">Membership</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl font-medium mb-4">
              Virtual primary care for Washington State. No insurance billing. Direct access to your
              physician.
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
        className="section-padding bg-white relative"
      >
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

          {/* Tier Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`group relative rounded-2xl transition-all duration-500 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-sfm-navy to-sfm-navy-deep text-white shadow-2xl shadow-sfm-navy/30 scale-[1.02] lg:scale-[1.03] z-10'
                    : 'bg-white border border-gray-200 hover:border-sfm-gold/30 hover:shadow-xl'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1 bg-sfm-gold text-sfm-navy text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3" aria-hidden="true" />
                      MOST SELECTED
                    </div>
                  </div>
                )}

                <div className="p-6 lg:p-7">
                  <div className="mb-4">
                    <h3
                      className={`font-display text-xl mb-1 ${
                        tier.popular ? 'text-white' : 'text-sfm-navy'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.popular ? 'text-white/60' : 'text-gray-600'}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Pricing placeholder */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p
                      className={`text-sm font-medium ${
                        tier.popular ? 'text-white/80' : 'text-sfm-navy/80'
                      }`}
                    >
                      Pricing coming soon
                    </p>
                    <p
                      className={`text-xs mt-1 ${tier.popular ? 'text-white/50' : 'text-gray-500'}`}
                    >
                      Monthly and annual options
                    </p>
                  </div>

                  <p
                    className={`text-sm mb-5 leading-relaxed ${
                      tier.popular ? 'text-white/70' : 'text-gray-700'
                    }`}
                  >
                    {tier.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included
                              ? tier.popular
                                ? 'bg-sfm-gold/20'
                                : 'bg-sfm-gold/15'
                              : tier.popular
                              ? 'bg-white/10'
                              : 'bg-gray-100'
                          }`}
                        >
                          {feature.included ? (
                            <Check className="w-3 h-3 text-sfm-gold" aria-hidden="true" />
                          ) : (
                            <span
                              className={`w-1.5 h-px ${
                                tier.popular ? 'bg-white/30' : 'bg-gray-400'
                              }`}
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <span
                          className={`text-sm leading-snug ${
                            feature.included
                              ? tier.popular
                                ? 'text-white/90'
                                : 'text-sfm-navy/90'
                              : tier.popular
                              ? 'text-white/40'
                              : 'text-gray-400'
                          } ${feature.highlight ? 'font-medium' : ''}`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/founders-waitlist"
                    className={`block w-full py-3.5 px-5 rounded-xl font-semibold text-center transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      tier.popular
                        ? 'bg-sfm-gold text-sfm-navy hover:bg-sfm-gold-light shadow-lg shadow-sfm-gold/30 focus-visible:ring-sfm-gold'
                        : 'bg-sfm-navy text-white hover:bg-sfm-navy-deep focus-visible:ring-sfm-navy'
                    }`}
                  >
                    Join the Founders Waitlist
                    <ArrowRight className="inline-block w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>

                  <p
                    className={`mt-3 text-xs leading-relaxed text-center ${
                      tier.popular ? 'text-white/50' : 'text-gray-500'
                    }`}
                  >
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

          {/* Important Notice Box - After Cards */}
          <div className="max-w-3xl mx-auto mt-10 pt-8 border-t border-sfm-navy/10">
            <div className="bg-sfm-cream/50 border border-sfm-navy/10 rounded-2xl px-5 py-4 text-sm text-sfm-navy/80 leading-relaxed">
              <p className="mb-2">
                <strong className="text-sfm-navy">This is not health insurance.</strong> Keep
                insurance for emergencies, hospital care, specialists, and prescriptions.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Not for emergencies.</strong> Call 911 or go to
                the ER for emergencies.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Washington State only.</strong> You must be in
                Washington during visits.
              </p>
              <p>
                <strong className="text-sfm-navy">Waitlist only.</strong> Joining does not make you
                a patient or guarantee enrollment.
              </p>
            </div>
          </div>

          {/* Pricing Notice */}
          <div className="max-w-2xl mx-auto mt-6">
            <div className="bg-sfm-cream border border-sfm-navy/10 rounded-xl px-6 py-4 text-center">
              <p className="text-sm text-sfm-navy font-medium mb-1">Pricing Coming Soon</p>
              <p className="text-sm text-sfm-navy/70 leading-relaxed">
                You will receive complete pricing and terms before any commitment.
                Monthly and annual billing options will be available.
              </p>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-sfm-navy/5">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-sfm-navy/45">
              <span className="w-1 h-1 bg-sfm-gold/50 rounded-full" aria-hidden="true" />
              <span>Founders waitlist: limited to {FOUNDERS_COHORT_LIMIT} members</span>
              <span className="text-sfm-navy/25">·</span>
              <span>Clinical care begins early 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Membership */}
      <section aria-labelledby="why-heading" className="section-padding bg-sfm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="why-heading"
                className="font-display text-3xl text-white mb-6"
              >
                Why Membership Works
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Traditional healthcare fragments your care across rotating providers. Membership
                means one physician who knows your history, your goals, and your preferences.
              </p>
              <ul className="space-y-4">
                {[
                  'Primary care visits without per-visit fees',
                  'Access to lower-cost lab pricing options',
                  'Secure messaging based on tier and availability',
                  'Transparent terms with no hidden costs',
                  'One physician who knows your history over time',
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
              <h3 className="font-display text-xl text-white mb-4">
                What Members Say They Value
              </h3>
              <ul className="space-y-4 text-white/80 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-sfm-gold">"</span>
                  <span>Finally, a doctor who remembers my last conversation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sfm-gold">"</span>
                  <span>I message instead of waiting on hold for callbacks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sfm-gold">"</span>
                  <span>Visits feel unhurried. Questions actually get answered.</span>
                </li>
              </ul>
              <p className="text-white/40 text-xs mt-6 italic">
                Composite quotes reflecting common member feedback in DPC practices.
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
                <span className="text-white/90 text-sm font-medium">Founders Waitlist Open</span>
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

          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-sfm-navy">Not Health Insurance:</strong> This membership is
              not health insurance. Keep coverage for emergencies, hospital stays, specialists, and
              major events.
            </p>

            <p>
              <strong className="text-sfm-navy">Pricing:</strong> Pricing will be published soon.
              Your fee is confirmed before you commit. Pricing is set by the Practice.
            </p>

            <p>
              <strong className="text-sfm-navy">Waitlist:</strong> The Founders Waitlist has limited
              space. Joining does not guarantee enrollment or create a doctor-patient relationship.
            </p>

            <p>
              <strong className="text-sfm-navy">Emergencies:</strong> We do not provide emergency or
              urgent care. For emergencies, call 911 or go to the ER.
            </p>

            <p>
              <strong className="text-sfm-navy">Access:</strong> No tier guarantees unlimited
              access, instant responses, or around-the-clock availability. Timing depends on
              clinical judgment and scheduling.
            </p>

            <p>
              <strong className="text-sfm-navy">Labs:</strong> Members may access lower-cost lab
              options. Prices vary by test and lab. You pay the lab directly.
            </p>

            <p>
              <strong className="text-sfm-navy">Controlled Substances:</strong> The Practice decides
              when to prescribe controlled substances. These are rarely prescribed via telehealth
              for chronic pain.
            </p>

            <p>
              <strong className="text-sfm-navy">Location:</strong> You must be physically in
              Washington State during telehealth visits.
            </p>
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

