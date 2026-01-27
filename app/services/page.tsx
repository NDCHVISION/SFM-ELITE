'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import PrimaryCTA from '@/components/PrimaryCTA'
import FoundingMemberBadge from '@/components/FoundingMemberBadge'
import { 
  ArrowRight, Check, Sparkles, Shield, Clock, MessageCircle, 
  Heart, Dna, Phone, FileText, Star, Users, Zap,
  ChevronDown, ChevronUp
} from 'lucide-react'

const tiers = [
  {
    id: 'continuity',
    name: 'Continuity Concierge',
    tagline: 'Essential virtual primary care',
    price: { monthly: 225, monthlyHigh: 275, annual: 203, annualHigh: 248 },
    description: 'Comprehensive primary care with the continuity and access that traditional medicine has lost.',
    features: [
      { text: 'Physician-led virtual primary care visits', included: true },
      { text: 'Same-day or next-day appointments when available', included: true },
      { text: 'Secure non-urgent messaging', included: true },
      { text: 'Initial consultation (45 min)', included: true },
      { text: 'Access to wholesale laboratory pricing', included: true },
      { text: 'Chronic condition management', included: true },
      { text: 'Medication management', included: true },
      { text: 'Ongoing care coordination', included: true },
      { text: 'Advanced laboratory review and interpretation', included: false },
      { text: 'Genetic testing interpretation', included: false },
      { text: 'Extended after-hours messaging', included: false },
    ],
    cta: 'Join Waitlist for This Plan',
    popular: false,
  },
  {
    id: 'precision',
    name: 'Precision Concierge',
    tagline: 'Data-driven personalized medicine',
    price: { monthly: 325, monthlyHigh: 375, annual: 293, annualHigh: 338 },
    description: 'Everything in Continuity, plus genetic insights and advanced diagnostics for truly personalized care.',
    features: [
      { text: 'Everything in Continuity Concierge', included: true, highlight: true },
      { text: 'Advanced laboratory review and interpretation', included: true },
      { text: 'Cardiometabolic risk assessment', included: true },
      { text: 'Periodic health reviews', included: true },
      { text: 'Genetic testing interpretation (test costs separate)', included: true },
      { text: 'Pharmacogenomic guidance', included: true },
      { text: 'Extended visit times when clinically appropriate', included: true },
      { text: 'Priority scheduling when available', included: true },
      { text: 'Extended after-hours messaging', included: false },
      { text: 'Expanded access pathways for urgent needs', included: false },
    ],
    cta: 'Join Waitlist for This Plan',
    popular: true,
    founding: true,
  },
  {
    id: 'executive',
    name: 'Executive Concierge',
    tagline: 'The highest level of physician-directed concierge care',
    price: { monthly: 650, monthlyHigh: 725, annual: 585, annualHigh: 653 },
    description: 'Designed for individuals and families requiring enhanced access, coordination, and longitudinal oversight.',
    features: [
      { text: 'Everything in Precision Concierge', included: true, highlight: true },
      { text: 'Concierge-level responsiveness', included: true },
      { text: 'Priority scheduling and care coordination', included: true },
      { text: 'Expanded access pathways for defined urgent needs', included: true },
      { text: 'Enhanced coordination with specialists and external providers', included: true },
      { text: 'Executive health planning and longitudinal oversight', included: true },
      { text: 'Annual comprehensive health review', included: true },
      { text: 'Enrollment by physician confirmation', included: true },
    ],
    cta: 'Join Waitlist for This Plan',
    popular: false,
  },
]

/**
 * NON-MEMBER PRICING STRUCTURE
 * Updated January 2026
 * 
 * Pricing Strategy:
 * - Initial Consultation ($325) exceeds ALL non-founder monthly rates ($275, $375, $725)
 * - Creates clear value proposition for membership conversion
 * - Maintains "50-70% savings" claim accuracy for members
 * - Reflects premium DPC positioning in Seattle market
 * 
 * Rate Justification:
 * - Initial Consultation: $325 (above Continuity non-founder $275)
 * - Follow-up Visit: $200 (proportional increase)
 * - Extended Visit: $275 (matches Continuity non-founder rate)
 * - Complex Visit: $350 (premium positioning)
 */
const nonMemberPricing = [
  { service: 'Initial Consultation (45 min)', price: 325 },
  { service: 'Follow-up Visit (30 min)', price: 200 },
  { service: 'Extended Visit (45 min)', price: 275 },
  { service: 'Complex Visit (60 min)', price: 350 },
  { service: 'Labs and Diagnostics', price: 'At Cost' },
]

const faqs = [
  {
    q: 'What is Direct Primary Care?',
    a: 'DPC is a membership-based model where you pay a monthly fee directly to your physician, removing insurance from the primary care relationship. This allows for longer visits, easier access, and care focused on you rather than billing codes.',
  },
  {
    q: 'Do I still need health insurance?',
    a: 'Yes. DPC covers primary care only. You should maintain coverage for emergencies, hospitalizations, specialists, and catastrophic events. Many members pair DPC with high-deductible health plans.',
  },
  {
    q: 'What if I need a specialist?',
    a: 'Your Physician will coordinate referrals to trusted specialists and help navigate the process. Care coordination is included in all membership tiers.',
  },
  {
    q: 'Is virtual care as effective as in-person?',
    a: 'For most primary care needs, yes. Research shows virtual care provides equivalent outcomes for many conditions, while offering greater convenience and access. We will refer you for in-person evaluation when clinically indicated.',
  },
]

export default function ServicesPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure" />
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" aria-hidden="true" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sfm-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sfm-azure/30 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs 
              items={[{ label: 'Membership Plans' }]} 
              className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-sfm-gold"
            />
          </div>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/90 text-sm font-medium">Membership Plans</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Healthcare That Fits
              <br />
              <span className="text-sfm-gold">Your Life</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
              Transparent pricing, comprehensive care, and the physician relationship you deserve. 
              Choose the level of care that matches your health goals.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sfm-gold" />
                <span className="text-sm">Same-day access</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-sfm-gold" />
                <span className="text-sm">Direct messaging</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sfm-gold" />
                <span className="text-sm">No copays or surprise bills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Every Plan */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase font-medium mb-2">Included in Every Plan</p>
            <h2 className="font-display text-2xl text-sfm-navy">The Foundation of Better Care</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'One Physician', desc: 'One personal physician' },
              { icon: Clock, label: 'Same-Day Access', desc: 'When you need it' },
              { icon: MessageCircle, label: 'Direct Messaging', desc: 'No phone trees' },
              { icon: FileText, label: 'No Surprise Bills', desc: 'Transparent pricing' },
            ].map((item) => (
              <div key={item.label} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-sfm-gold/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-sfm-gold" />
                </div>
                <p className="font-semibold text-sfm-navy text-sm">{item.label}</p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-sfm-azure" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>HSA/FSA Eligible</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart className="w-4 h-4 text-sfm-gold" />
              <span>No Contracts</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight className="w-4 h-4 text-sfm-azure" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-6 bg-gradient-to-b from-white to-sfm-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-4 p-2 bg-white rounded-2xl shadow-xl shadow-sfm-navy/10 border border-gray-100">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-sfm-navy text-white shadow-lg'
                    : 'text-sfm-navy hover:bg-sfm-cream'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  billingCycle === 'annual'
                    ? 'bg-sfm-navy text-white shadow-lg'
                    : 'text-sfm-navy hover:bg-sfm-cream'
                }`}
              >
                Annual
                <span className="px-2 py-0.5 bg-sfm-gold/20 text-sfm-gold text-xs rounded-full">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gradient-to-b from-sfm-cream/30 via-white to-sfm-cream/20 relative">
        {/* Ambient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">Membership</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">Choose Your Level of Care</h2>
            <p className="text-muted max-w-xl mx-auto">Every plan includes generous virtual visit access, direct secure messaging, and wholesale lab pricing.</p>
            <p className="text-muted max-w-xl mx-auto mt-4">
              Founding members are joining a limited waitlist.<br />
              Plan selection helps us prioritize outreach when enrollment opens.
            </p>
          </div>

          {/* Founding Member Badge */}
          <FoundingMemberBadge />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`group relative rounded-3xl transition-all duration-500 ${
                  tier.popular
                    ? 'lg:-mt-4 lg:mb-4'
                    : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card glow effect for popular */}
                {tier.popular && (
                  <div className="absolute -inset-px bg-gradient-to-b from-sfm-gold via-sfm-gold/50 to-sfm-gold/20 rounded-3xl blur-sm opacity-60" />
                )}

                <div className={`relative h-full rounded-3xl p-8 lg:p-10 transition-all duration-500 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-white via-white to-sfm-cream/30 border-2 border-sfm-gold shadow-2xl shadow-sfm-gold/20'
                    : 'bg-white border border-gray-200/80 hover:border-sfm-gold/30 hover:shadow-xl hover:shadow-sfm-gold/10 group-hover:-translate-y-1'
                }`}>
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sfm-gold to-sfm-gold-light text-sfm-navy text-sm font-bold rounded-full shadow-lg shadow-sfm-gold/30">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Founding Member Badge */}
                  {tier.founding && (
                    <div className="absolute -top-3 right-6 z-10">
                      <Link 
                        href="/membership-terms#founding-member-program"
                        className="px-4 py-1.5 bg-sfm-azure text-white text-xs font-semibold rounded-full shadow-md hover:bg-sfm-gold hover:text-sfm-navy transition-colors duration-300"
                        aria-label="Learn more about Founding Offer"
                      >
                        Founding Offer
                      </Link>
                    </div>
                  )}

                  {/* Tier header */}
                  <div className="mb-8 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        tier.popular ? 'bg-sfm-gold/20' : 'bg-sfm-azure/10'
                      }`}>
                        <Heart className={`w-5 h-5 ${tier.popular ? 'text-sfm-gold' : 'text-sfm-azure'}`} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-sfm-navy">{tier.name}</h3>
                      </div>
                    </div>
                    <p className="text-sfm-azure/80 text-sm font-medium">{tier.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-display text-sfm-navy">
                        ${billingCycle === 'monthly' ? tier.price.monthly : tier.price.annual}
                      </span>
                      <span className="text-2xl font-display text-sfm-navy/60">
                        -${billingCycle === 'monthly' ? tier.price.monthlyHigh : tier.price.annualHigh}
                      </span>
                      <span className="text-gray-400 text-sm font-medium">/month</span>
                    </div>
                    <p className="text-sfm-navy/60 text-sm mt-2">
                      Founders waitlist only. No payment today.
                    </p>
                    {billingCycle === 'annual' && (
                      <p className="text-sfm-gold text-sm mt-2 font-medium">
                        Save 10% when you prepay annually
                      </p>
                    )}
                    {tier.id === 'continuity' && (
                      <p className="text-sfm-gold/60 text-sm mt-2">
                        Save 10% with annual billing: $2,430–$2,970/year
                      </p>
                    )}
                    {tier.id === 'precision' && (
                      <p className="text-sfm-gold/60 text-sm mt-2">
                        Save 10% with annual billing: $3,510–$4,050/year
                      </p>
                    )}
                    {tier.id === 'executive' && (
                      <p className="text-sfm-gold/60 text-sm mt-2">
                        Save 10% with annual billing: $7,020–$7,830/year
                      </p>
                    )}
                  </div>

                  <p className="text-muted text-sm mb-8 leading-relaxed">
                    {tier.description}
                  </p>

                  <Link
                    href="/founders-waitlist"
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-sfm-gold to-sfm-gold-light text-sfm-navy hover:shadow-lg hover:shadow-sfm-gold/30 hover:-translate-y-0.5'
                        : 'bg-sfm-navy text-white hover:bg-sfm-azure hover:-translate-y-0.5'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          feature.included
                            ? feature.highlight
                              ? 'bg-sfm-gold/20 text-sfm-gold'
                              : 'bg-sfm-azure/10 text-sfm-azure'
                            : 'bg-gray-100 text-gray-300'
                        }`}>
                          <Check className="w-3 h-3" />
                        </span>
                        <span className={`text-sm leading-relaxed ${
                          feature.included
                            ? feature.highlight
                              ? 'text-sfm-navy font-semibold'
                              : 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="text-center mt-8 space-y-3">
            <p className="text-sm text-sfm-charcoal/60">
              <Zap className="inline-block h-4 w-4 mr-2 text-sfm-gold" />
              <strong>All memberships:</strong> Concierge Primary Care delivered under the Direct Primary Care (DPC) model.
            </p>
            <p className="text-xs text-sfm-charcoal/50 max-w-3xl mx-auto">
              All services are subject to clinical appropriateness, physician judgment, and applicable law. Emergency services are not provided.
            </p>
            <p className="text-xs text-sfm-charcoal/40 max-w-3xl mx-auto">
              <sup>†</sup>Executive Concierge does not provide unrestricted or continuous physician availability. Access, responsiveness, and after-hours communication are subject to clinical appropriateness, triage protocols, and physician discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Non-Member Pricing */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="section-header">
            <p className="section-label">Pay-Per-Visit</p>
            <h2 className="section-title">Non-Member Pricing</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="section-subtitle">
              Not ready for membership? Access our care on a per-visit basis.
            </p>
          </div>

          <div className="bg-sfm-cream/50 rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-sfm-navy">Service</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-sfm-navy">Price</th>
                </tr>
              </thead>
              <tbody>
                {nonMemberPricing.map((item, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-4 text-sm text-gray-700">{item.service}</td>
                    <td className="px-6 py-4 text-sm text-sfm-navy font-semibold text-right">
                      {typeof item.price === 'number' ? `$${item.price}` : item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Members typically save 50-70% compared to non-member visit pricing.
          </p>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 bg-sfm-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-30" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase font-medium mb-2">The Difference</p>
            <h2 className="font-display text-3xl text-white">Why Members Choose DPC</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Care */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-4">Traditional Primary Care</p>
              <ul className="space-y-3">
                {[
                  '15-minute rushed appointments',
                  '26+ day average wait for appointments',
                  '2,300+ patients per physician',
                  'Phone trees and callbacks',
                  'Surprise bills and copays',
                  'Different doctor each visit',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 bg-white/30 rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sankofa DPC */}
            <div className="bg-sfm-gold/10 border border-sfm-gold/30 rounded-2xl p-6">
              <p className="text-sfm-gold text-sm uppercase tracking-wider mb-4">Sankofa Family Medicine</p>
              <ul className="space-y-3">
                {[
                  '45-60 minute unhurried visits',
                  'Same-day or next-day access',
                  'Approximately 200 patients per physician',
                  'Direct messaging and calls',
                  'Transparent, predictable pricing',
                  'One physician who knows you',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <span className="w-5 h-5 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-sfm-gold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/compare" className="text-sfm-gold hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-2">
              See the full comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-b from-white to-sfm-cream/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="section-header">
            <p className="section-label">Questions</p>
            <h2 className="section-title">Frequently Asked</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-sfm-navy pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-sfm-azure flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="px-6 pb-5 text-muted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/faq" className="btn-ghost">
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-sfm-navy to-sfm-navy-deep relative overflow-hidden">
        <div className="absolute inset-0">
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
                  className="relative mx-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Founders Waitlist Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-white/80 text-sm font-medium">Founders Waitlist Now Open</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Begin Your Care with<br />
                <span className="text-sfm-gold">Medicine That Remembers</span><span className="text-sfm-gold text-xl align-top">™</span>
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl">
                Enrollment begins February 2026. No payment required today.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <PrimaryCTA variant="hero" />
                <Link href="/contact" className="btn-secondary-white px-10 py-5">
                  Questions? Contact Us
                </Link>
              </div>

              <p className="text-white/40 text-sm mt-8">
                Questions? Call us at <a href="tel:+14252857390" className="text-sfm-gold hover:text-sfm-gold-light">+1 (425) 285-7390</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclosures */}
      <section className="py-12 bg-sfm-cream/50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="font-display text-lg text-sfm-navy mb-2">Important Information</h3>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-sfm-navy">Emergency Services:</strong> This Practice does <strong>not</strong> provide emergency or urgent care services. For medical emergencies, call 911 or go to your nearest emergency room.
            </p>
            <p>
              <strong className="text-sfm-navy">Laboratory Pricing:</strong> Members may receive access to wholesale laboratory pricing, which is often substantially lower than hospital-based pricing. Members pay laboratories directly.
            </p>
            <p>
              <strong className="text-sfm-navy">Controlled Substances:</strong> The Practice has sole discretion regarding controlled substance prescribing. Controlled substances are generally <strong>not</strong> prescribed via telehealth for chronic pain management. Violation of the Controlled Substances Policy may result in termination of membership for cause. Any prepaid membership fees may be retained to the extent permitted by law to account for administrative costs, services already rendered, and risk management obligations. No refund is guaranteed.
            </p>
          </div>
          <div className="text-center mt-6">
            <Link href="/membership-terms" className="text-sfm-azure hover:text-sfm-gold text-sm font-medium transition-colors inline-flex items-center gap-1">
              View Complete Membership Terms
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
