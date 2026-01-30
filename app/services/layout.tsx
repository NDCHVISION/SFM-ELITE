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
SERVICES/PRICING PAGE - PRODUCTION READY
Version: 5.5 FINAL (Contract-aligned + WA compliance + micro-fixes)
=========================================================

MICRO-FIXES (V5.4 → V5.5):
1. "urgent needs" → "time-sensitive, non-emergent needs" throughout
   (avoids implied urgent-care service language)
2. Added "Pricing may change for non-founding members" to disclaimers
   (prevents bait-and-switch claims when standard pricing is higher)

WA DOH / ADVERTISING SAFETY:
✅ Emergency disclaimer - 4 locations (Important box, FAQ, CTA, Footer)
✅ Not health insurance - 2 locations (Important box, Footer)
✅ WA State only - 5 locations (Hero, Important box, FAQ, CTA, Footer)
✅ Waitlist/no relationship - 3 locations (Important box, FAQ, Footer)
✅ No outcome guarantees
✅ No superlatives
✅ All access claims qualified ("when available", "as available")
✅ No "urgent care" service implications

ACCESSIBILITY (WCAG 2.2 AA+):
✅ type="button" on all non-submit buttons
✅ aria-expanded + aria-controls on FAQ
✅ aria-pressed on billing toggle
✅ decorative icons aria-hidden
✅ max-h-[520px] on FAQ answers (prevents clipping)

FOUNDERS PRICING (CONTRACT-ALIGNED):
✅ "Founders pricing shown (limited to 30 members)"
✅ "Your exact fee is confirmed prior to enrollment"
✅ "Pricing is set by the Practice and is not negotiated"
✅ "Pricing may change for non-founding members"
========================================================= */

const FOUNDERS_COHORT_LIMIT = 30

const tiers = [
  {
    id: 'continuity',
    name: 'Continuity',
    tagline: 'Direct Primary Care basics',
    price: { monthly: 225, annual: 203 },
    description: 'Membership-based DPC for steady, consistent virtual primary care.',
    features: [
      { text: 'Physician-led virtual primary care visits', included: true },
      { text: 'Same-day or next-day appointments when available', included: true },
      { text: 'Secure non-urgent messaging (business hours)', included: true },
      { text: 'Initial consultation (45 min)', included: true },
      { text: 'Access to lower-cost lab pricing options', included: true },
      { text: 'Chronic condition management', included: true },
      { text: 'Medication management (non-controlled)', included: true },
      { text: 'Ongoing care coordination', included: true },
      { text: 'After-hours messaging or real-time physician access', included: false },
      { text: 'Advanced lab review and interpretation', included: false },
      { text: 'Genetic testing interpretation', included: false },
    ],
    cta: 'Join the founders waitlist',
    popular: false,
    founding: true,
  },
  {
    id: 'precision',
    name: 'Precision',
    tagline: 'Deeper reviews (when appropriate)',
    price: { monthly: 325, annual: 293 },
    description:
      'Membership-based DPC with deeper lab reviews and optional genetics interpretation (test costs separate).',
    features: [
      { text: 'Everything in Continuity', included: true, highlight: true },
      { text: 'Advanced lab review and interpretation', included: true },
      { text: 'Heart and diabetes risk review', included: true },
      { text: 'Regular health check-ins', included: true },
      { text: 'Genetic testing interpretation (test costs separate)', included: true },
      { text: 'Medication management (non-controlled)', included: true },
      { text: 'Extended visit times when clinically appropriate', included: true },
      { text: 'Priority scheduling when available', included: true },
      // MICRO-FIX: "urgent" → "time-sensitive, non-emergent"
      {
        text: 'Limited after-hours secure messaging for time-sensitive, non-emergent concerns (as available)',
        included: true,
      },
      // MICRO-FIX: "urgent needs" → "time-sensitive, non-emergent needs"
      { text: 'Expanded access pathways for time-sensitive, non-emergent needs', included: false },
    ],
    cta: 'Join the founders waitlist',
    popular: true,
    founding: true,
  },
  {
    id: 'executive',
    name: 'Executive',
    // MICRO-FIX: tagline updated
    tagline: 'Expanded access pathways (as available)',
    price: { monthly: 650, annual: 585 },
    description:
      'Membership-based DPC with added coordination and expanded access pathways (based on triage and availability).',
    features: [
      { text: 'Everything in Precision', included: true, highlight: true },
      { text: 'Priority coordination (as available)', included: true },
      { text: 'Priority scheduling and care coordination', included: true },
      // MICRO-FIX: "urgent needs" → "time-sensitive, non-emergent needs"
      { text: 'Expanded access pathways for time-sensitive, non-emergent needs (triage-based)', included: true },
      {
        text: 'Care coordination outside standard business hours when clinically appropriate (as available)',
        included: true,
      },
      { text: 'Coordination with specialists and external providers', included: true },
      { text: 'Long-term planning and oversight', included: true },
      { text: 'Annual comprehensive health review', included: true },
      { text: 'Enrollment by physician confirmation', included: true },
    ],
    cta: 'Join the founders waitlist',
    popular: false,
    founding: true,
  },
]

const nonMemberPricing = [
  { service: 'Initial Consultation (45 min)', price: 325 },
  { service: 'Follow-up Visit (30 min)', price: 200 },
  { service: 'Extended Visit (45 min)', price: 275 },
  { service: 'Complex Visit (60 min)', price: 350 },
  { service: 'Labs and Diagnostics', price: 'At cost' },
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
    q: 'What if I need a specialist?',
    a: 'Your physician can help coordinate referrals when needed. Specialist care is separate and is provided by third-party clinics and hospitals.',
  },
  {
    q: 'Is virtual care the right fit for me?',
    a: 'Virtual care works well for many common primary care needs. Some concerns require an in-person exam or testing. If that happens, we will guide you to in-person care.',
  },
  {
    q: 'Does joining the founders waitlist create a doctor-patient relationship?',
    a: 'No. Joining the founders waitlist does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.',
  },
  {
    q: 'Are the prices on this page final?',
    a: 'The prices shown are Founders pricing, available while Founders enrollment remains open. Your exact membership fee is confirmed prior to enrollment. Pricing is set by the Practice and is not individually negotiated. Standard pricing may apply after the Founders cohort closes.',
  },
]

export default function ServicesPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure" />
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" aria-hidden="true" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sfm-gold/10 rounded-full blur-[150px]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sfm-azure/30 rounded-full blur-[100px]" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Breadcrumbs
              items={[{ label: 'Membership Plans' }]}
              className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-sfm-gold"
            />
          </nav>

          <div className="max-w-3xl">
            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
              data-speakable
            >
              Direct Primary Care
              <br />
              <span className="text-sfm-gold">Membership</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl font-medium mb-4">
              Membership-based DPC for Washington State patients, with direct physician messaging and no insurance billing.
            </p>

            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl">
              One physician, one relationship, built over time.
            </p>

            <div className="flex flex-wrap gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">Same-day appointments when available</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">Direct physician messaging</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sfm-gold" aria-hidden="true" />
                <span className="text-sm">No copays. Clear, upfront pricing.</span>
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
              Included in Every Plan
            </p>
            <h2 id="included-heading" className="font-display text-2xl text-sfm-navy">
              The Foundation of DPC
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'One Physician', desc: 'A consistent point of care' },
              { icon: Clock, label: 'Flexible Scheduling', desc: 'Same-day when available' },
              { icon: MessageCircle, label: 'Direct Messaging', desc: 'No phone trees' },
              { icon: FileText, label: 'Clear Pricing', desc: 'Know the cost upfront' },
            ].map((item) => (
              <div key={item.label} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-sfm-gold/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
                </div>
                <p className="font-semibold text-sfm-navy text-sm">{item.label}</p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-sfm-azure" aria-hidden="true" />
              <span>We protect your health information</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>Receipts available on request</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
              <span>Cancel with notice</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight className="w-4 h-4 text-sfm-azure" aria-hidden="true" />
              <span>Founders waitlist (prelaunch)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        aria-labelledby="pricing-heading"
        className="section-padding bg-gradient-to-b from-sfm-cream/30 via-white to-sfm-cream/20 relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-2 font-medium">
              Direct Primary Care
            </p>

            <h2 id="pricing-heading" className="font-display text-4xl text-sfm-navy mb-2" data-speakable>
              Membership Plans
            </h2>

            <p className="text-sfm-navy/60 text-base max-w-xl mx-auto">
              Every plan includes virtual DPC visits, secure messaging, and care coordination.
              Access is based on your tier and availability.
            </p>
          </div>

          {/* Compliance: Important disclaimers before pricing cards */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="bg-white/70 border border-sfm-navy/10 rounded-2xl px-5 py-4 text-xs text-sfm-navy/70 leading-relaxed">
              <p className="mb-2">
                <strong className="text-sfm-navy">Not health insurance:</strong> This membership is not health insurance and does not replace insurance coverage.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Not for emergencies:</strong> This practice does not provide emergency or urgent care services. For emergencies, call 911 or go to the nearest emergency room.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Washington State only:</strong> You must be physically located in Washington State at the time of your telehealth visit.
              </p>
              <p className="mb-2">
                <strong className="text-sfm-navy">Waitlist:</strong> Joining the founders waitlist does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.
              </p>
              <p>
                <strong className="text-sfm-navy">Founders pricing:</strong> Prices shown are Founders pricing while Founders availability remains open. Your exact fee is confirmed prior to enrollment. Pricing is set by the Practice and is not negotiated. Pricing may change for non-founding members.
              </p>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-3 p-1.5 bg-white rounded-xl shadow-lg shadow-sfm-navy/8 border border-gray-100"
              role="group"
              aria-label="Billing cycle"
            >
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                aria-pressed={billingCycle === 'monthly'}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure/40 ${
                  billingCycle === 'monthly'
                    ? 'bg-sfm-navy text-white shadow-md'
                    : 'text-sfm-navy/70 hover:bg-sfm-cream/50'
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                aria-pressed={billingCycle === 'annual'}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure/40 ${
                  billingCycle === 'annual'
                    ? 'bg-sfm-navy text-white shadow-md'
                    : 'text-sfm-navy/70 hover:bg-sfm-cream/50'
                }`}
              >
                Annual
                <span className="px-1.5 py-0.5 bg-sfm-gold/20 text-sfm-gold text-xs rounded-full font-bold">
                  10% discount
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
                      MOST COMMON
                    </div>
                  </div>
                )}

                <div className="p-6 lg:p-7">
                  <div className="mb-4">
                    <h3 className={`font-display text-xl mb-0.5 ${tier.popular ? 'text-white' : 'text-sfm-navy'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.popular ? 'text-white/60' : 'text-gray-500'}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold ${tier.popular ? 'text-white' : 'text-sfm-navy'}`}>
                        ${billingCycle === 'monthly' ? tier.price.monthly : tier.price.annual}
                      </span>
                      <span className={`text-sm ${tier.popular ? 'text-white/60' : 'text-gray-500'}`}>
                        /mo
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 ${tier.popular ? 'text-white/50' : 'text-gray-400'}`}>
                      {billingCycle === 'annual' ? 'Billed annually (10% discount)' : 'Annual billing available'}
                    </p>

                    <p className="text-[11px] leading-tight mt-1 font-medium tracking-wide text-sfm-gold/80">
                      Founders pricing shown (limited to {FOUNDERS_COHORT_LIMIT} members)
                    </p>
                  </div>

                  <p className={`text-sm mb-4 leading-relaxed ${tier.popular ? 'text-white/70' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {tier.features.slice(0, 8).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included
                              ? tier.popular
                                ? 'bg-sfm-gold/20'
                                : 'bg-sfm-gold/10'
                              : 'bg-gray-100'
                          }`}
                        >
                          {feature.included ? (
                            <Check className="w-2.5 h-2.5 text-sfm-gold" aria-hidden="true" />
                          ) : (
                            <span className="w-1 h-px bg-gray-300" aria-hidden="true" />
                          )}
                        </div>
                        <span
                          className={`text-sm leading-snug ${
                            feature.included
                              ? tier.popular
                                ? 'text-white/80'
                                : 'text-sfm-navy/80'
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
                    {tier.cta}
                    <ArrowRight className="inline-block w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>

                  <p className={`mt-3 text-xs leading-relaxed ${tier.popular ? 'text-white/55' : 'text-gray-500'}`}>
                    No payment required today. We will contact you about next steps if capacity allows.
                  </p>

                  <p className={`mt-2 text-[11px] leading-relaxed ${tier.popular ? 'text-white/45' : 'text-gray-400'}`}>
                    Access, response timing, and scheduling vary by tier and are subject to clinical judgment and availability.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-sfm-navy/50">
              Not ready for membership?{' '}
              <Link href="#non-member" className="text-sfm-azure hover:text-sfm-gold transition-colors font-medium">
                View single-visit pricing
              </Link>
            </p>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-sfm-navy/5">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] leading-tight text-sfm-navy/45">
              <span className="w-1 h-1 bg-sfm-gold/50 rounded-full" aria-hidden="true" />
              <span>Founders waitlist: limited capacity</span>
              <span className="text-sfm-navy/25">·</span>
              <span>Clinical care begins early 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Non-member pricing */}
      <section id="non-member" aria-labelledby="nonmember-heading" className="section-padding bg-sfm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Non-Member Pricing */}
            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
              <h3 id="nonmember-heading" className="font-display text-2xl text-white mb-2">
                Non-Member Pricing
              </h3>
              <p className="text-white/60 text-sm mb-6">
                For patients who prefer single visits without membership.
              </p>

              <div className="space-y-3">
                {nonMemberPricing.map((item) => (
                  <div
                    key={item.service}
                    className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-white/80 text-sm">{item.service}</span>
                    <span className="text-white font-semibold">
                      {typeof item.price === 'number' ? `$${item.price}` : item.price}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-white/40 text-xs mt-6">
                Non-members do not receive messaging access or member laboratory pricing options.
              </p>
            </div>

            {/* Why Membership */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6">Why Membership Works</h3>
              <ul className="space-y-4">
                {[
                  'Primary care visits without per-visit fees',
                  'Access to lower-cost lab pricing options (members pay labs directly)',
                  'Secure messaging based on tier and availability',
                  'Transparent, predictable pricing',
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
          </div>

          <div className="text-center mt-8">
            <Link
              href="/compare"
              className="text-sfm-gold hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              See the full comparison
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="section-padding bg-gradient-to-b from-white to-sfm-cream/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="section-header">
            <p className="section-label">Questions</p>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked
            </h2>
            <div className="divider-gold mx-auto" aria-hidden="true" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure/40 focus-visible:ring-inset"
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
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/faq" className="btn-ghost">
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
          <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Gold Heart Sculpture */}
            <div className="relative hidden lg:block group">
              <div className="absolute -inset-8 bg-gradient-to-br from-sfm-gold/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
              <div className="image-float">
                <Image
                  src="/images/gold-heart-sculpture.png"
                  alt="Gold intertwined heart sculpture representing the enduring connection at the center of patient care"
                  width={400}
                  height={600}
                  loading="lazy"
                  className="relative mx-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse motion-reduce:animate-none"
                  aria-hidden="true"
                />
                <span className="text-white/80 text-sm font-medium">Founders Waitlist Now Open</span>
              </div>

              <h2
                id="cta-heading"
                className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4"
              >
                Begin Your Care with
                <br />
                <span className="text-sfm-gold">Medicine That Remembers</span>
                <span className="text-sfm-gold text-xl align-top">™</span>
              </h2>

              <p className="text-white/70 text-lg mb-10 max-w-2xl">
                Clinical care begins early 2026. No payment required today.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <PrimaryCTA variant="hero" />
                <Link href="/contact" className="btn-secondary-white px-10 py-5">
                  Questions? Contact Us
                </Link>
              </div>

              <p className="text-white/40 text-sm mt-8">
                Questions? Call us at{' '}
                <a
                  href="tel:+14252857390"
                  className="text-sfm-gold hover:text-sfm-gold-light transition-colors"
                >
                  +1 (425) 285-7390
                </a>
              </p>

              {/* Compliance: repeat emergency + WA-only succinctly near CTA */}
              <p className="text-white/35 text-xs mt-3 leading-relaxed">
                Not for emergencies. Call 911 for emergencies. Telehealth visits require you to be in Washington State.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclosures */}
      <section aria-labelledby="disclosures-heading" className="py-8 bg-sfm-cream/30 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <h3 id="disclosures-heading" className="font-display text-base text-sfm-navy/70 mb-1">
              Important Information
            </h3>
          </div>

          <div className="space-y-2 text-xs text-gray-500 leading-relaxed">
            <p>
              <strong className="text-sfm-navy">Not Health Insurance:</strong> This membership is not health insurance and does not replace insurance. Members should maintain coverage for emergencies, hospitalizations, specialists, and catastrophic events.
            </p>

            <p>
              <strong className="text-sfm-navy">Founders Pricing:</strong> Founding Members receive preferred pricing while Founders availability remains open. The prices shown on this page reflect Founders pricing. Your exact fee is confirmed prior to enrollment. Pricing is set by the Practice and is not negotiated. Pricing may change for non-founding members.{' '}
              <Link
                href="/membership-terms#founders-advantage"
                className="text-sfm-azure hover:text-sfm-gold font-medium transition-colors inline-flex items-center gap-1"
              >
                View Founders Pricing Terms
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </p>

            <p>
              <strong className="text-sfm-navy">Founders Cohort Limit:</strong> The Founders cohort is limited to {FOUNDERS_COHORT_LIMIT} members. Joining the waitlist does not guarantee enrollment.
            </p>

            <p>
              <strong className="text-sfm-navy">Emergency Services:</strong> This Practice does <strong>not</strong> provide emergency or urgent care services. For medical emergencies, call 911 or go to your nearest emergency room.
            </p>

            <p>
              <strong className="text-sfm-navy">Access and Response:</strong> No membership tier guarantees unlimited access, immediate response, or continuous physician availability. Availability and timing depend on clinical judgment, triage, and scheduling capacity.
            </p>

            <p>
              <strong className="text-sfm-navy">Laboratory Pricing:</strong> Members may receive access to lower-cost laboratory pricing options. Actual pricing varies by test and lab. Members pay laboratories directly.
            </p>

            <p>
              <strong className="text-sfm-navy">Controlled Substances:</strong> The Practice has sole discretion regarding controlled substance prescribing. Controlled substances are rarely prescribed via telehealth for chronic pain management. Violation of the Controlled Substances Policy may result in termination of membership for cause.
            </p>

            <p>
              <strong className="text-sfm-navy">Waitlist:</strong> Joining the founders waitlist does not create a physician-patient relationship. A relationship begins only after enrollment and an initial clinical encounter.
            </p>

            <p>
              <strong className="text-sfm-navy">Washington State Only:</strong> Services are available only to patients physically located in Washington State at the time of the telehealth encounter.
            </p>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/membership-terms"
              className="text-sfm-azure hover:text-sfm-gold text-sm font-medium transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure/40 focus-visible:ring-offset-2 rounded"
            >
              View Complete Membership Terms
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
