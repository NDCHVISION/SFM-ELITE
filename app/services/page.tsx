'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import PrimaryCTA, { ATLAS_PORTAL_URL } from '@/components/PrimaryCTA'
import { 
  ArrowRight, Check, Sparkles, Shield, Clock, MessageCircle, 
  Heart, Dna, Phone, FileText, Star, Users, Zap,
  ChevronDown, ChevronUp
} from 'lucide-react'

interface Feature {
  text: string
  included: boolean
  highlight?: boolean
}

const tiers = [
  {
    id: 'continuity',
    name: 'Continuity Concierge',
    tagline: 'Concierge Primary Care delivered under a Direct Primary Care (DPC) model',
    price: { monthly: 225, annual: 203 },
    priceRange: '$225–$275/month',
    priceRangeAnnual: '$203–$248/month',
    description: 'High-touch virtual Direct Primary Care (DPC) designed for patients who value reliable access, unrushed visits, and a long-term relationship with their physician. Care is delivered through a Concierge Primary Care experience under a Direct Primary Care (DPC) model, focused on continuity, longitudinal planning, and physician-directed coordination. Services are provided during standard business hours only and are subject to clinical appropriateness and physician judgment.',
    features: [
      { text: 'Physician-led virtual primary care visits', included: true },
      { text: 'Same-day or next-day appointments when available', included: true },
      { text: 'Secure, non-urgent messaging with the physician', included: true },
      { text: 'Initial consultation (45 minutes)', included: true },
      { text: 'Chronic condition management', included: true },
      { text: 'Medication management', included: true },
      { text: 'Preventive and longitudinal care planning', included: true },
      { text: 'Ongoing care coordination', included: true },
      { text: 'Access to wholesale laboratory pricing when clinically appropriate', included: true },
      { text: 'Clinical communication occurs via the secure patient portal during business hours; after-hours messaging, urgent consultations, and on-call access are not included.', included: true, highlight: true },
      { text: 'Advanced laboratory review and interpretation', included: false },
      { text: 'Genetic and pharmacogenomic interpretation', included: false },
    ],
    cta: 'Select This Plan',
    popular: false,
  },
  {
    id: 'precision',
    name: 'Precision Concierge',
    tagline: 'Concierge Primary Care delivered under a Direct Primary Care (DPC) model',
    price: { monthly: 325, annual: 293 },
    priceRange: '$325–$375/month',
    priceRangeAnnual: '$293–$338/month',
    description: 'Data-informed Direct Primary Care (DPC) for patients seeking deeper clinical insight, proactive risk assessment, and individualized planning. This tier builds upon Continuity Concierge with additional physician time and analytic review focused on interpretation, risk stratification, and personalized preventive strategy, delivered as Concierge Primary Care under a Direct Primary Care (DPC) model.',
    features: [
      { text: 'Everything included in Continuity Concierge', included: true, highlight: true },
      { text: 'Advanced laboratory review and interpretation', included: true },
      { text: 'Cardiometabolic risk assessment', included: true },
      { text: 'Periodic health reviews', included: true },
      { text: 'Preventive strategy planning aligned with clinical guidelines', included: true },
      { text: 'Genetic and pharmacogenomic interpretation when clinically appropriate (third-party testing costs may apply)', included: true },
      { text: 'Extended visit times (up to 60 minutes)', included: true },
      { text: 'Priority scheduling when available', included: true },
      { text: 'Limited after-hours secure messaging for time-sensitive, non-emergent concerns (typical response by the next business day; response times may vary)', included: true },
      { text: 'Genetic and pharmacogenomic interpretation is consultative and supports shared decision-making; it does not replace specialist genetics consultation when indicated.', included: true, highlight: true },
      { text: 'Expanded access for defined urgent needs', included: false },
    ],
    cta: 'Select This Plan',
    popular: true,
    founding: true,
  },
  {
    id: 'legacy',
    name: 'Executive Concierge',
    tagline: 'Concierge Primary Care delivered under a Direct Primary Care (DPC) model',
    price: { monthly: 650, annual: 585 },
    priceRange: '$650–$725/month',
    priceRangeAnnual: '$585–$653/month',
    description: 'Physician-directed Concierge Primary Care delivered under a Direct Primary Care (DPC) model for executives, founders, and families requiring discretion, advocacy, and longitudinal oversight across healthcare systems. This tier emphasizes coordination, interpretation, and strategic health planning while maintaining clear boundaries around access, scope of care, and clinical appropriateness.',
    features: [
      { text: 'Everything included in Precision Concierge', included: true, highlight: true },
      { text: 'Expanded access pathways for defined urgent needs, subject to clinical appropriateness and availability', included: true },
      { text: 'Active coordination with specialists and external providers', included: true },
      { text: 'Review and alignment of outside medical recommendations', included: true },
      { text: 'Executive health planning', included: true },
      { text: 'Family care coordination', included: true },
      { text: 'Concierge-level responsiveness within clearly defined boundaries', included: true },
      { text: 'Physician confirmation required for enrollment', included: true },
      { text: 'Executive Concierge does not provide unrestricted or continuous physician availability; access is routed through established triage and care coordination workflows, and the Practice may decline requests that fall outside the scope of primary care or are not clinically appropriate.', included: true, highlight: true },
    ],
    cta: 'Select This Plan',
    popular: false,
    limitedAvailability: true,
  },
]

const nonMemberPricing = [
  { service: 'Initial Consultation (45 min)', price: 250 },
  { service: 'Follow-up Visit (30 min)', price: 175 },
  { service: 'Extended Visit (45 min)', price: 225 },
  { service: 'Complex Visit (60 min)', price: 300 },
  { service: 'Labs and Diagnostics', price: 'At Cost' },
]

const faqs = [
  {
    q: 'What is Concierge Primary Care under a Direct Primary Care (DPC) model?',
    a: (
      <div className="space-y-3">
        <p>Concierge Primary Care delivered under a Direct Primary Care (DPC) model is a membership-based approach where you pay a monthly or annual fee directly to your physician for enhanced access and personalized care—no insurance billing for primary care services.</p>
        <p>Sankofa Family Medicine operates under the <strong>Direct Primary Care (DPC)</strong> model: a specific type of concierge medicine where we <strong>do not bill insurance companies</strong> for any services. This is different from traditional concierge practices that still file insurance claims alongside membership fees.</p>
        <p>Our DPC approach allows for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Longer visits:</strong> 45-60 minutes vs. traditional 15-minute appointments</li>
          <li><strong>Same-day or next-day access</strong> when you need care</li>
          <li><strong>Direct messaging</strong> with your physician (24-48 hour response time)</li>
          <li><strong>Transparent monthly pricing</strong> with no surprise bills or hidden fees</li>
          <li><strong>Care focused on your health,</strong> not on insurance billing codes or maximizing visit volume</li>
        </ul>
        <p>As of January 1, 2026, qualifying DPC memberships like ours are HSA-eligible for patients with high-deductible health plans.</p>
      </div>
    ),
  },
  {
    q: 'Do I still need health insurance with Concierge Primary Care under a DPC model?',
    a: (
      <div className="space-y-3">
        <p><strong>Yes. Your membership is NOT health insurance and does NOT replace the need for comprehensive health coverage.</strong></p>
        <p>Per our membership agreement, Sankofa Family Medicine membership covers ONLY primary care services. Your membership does NOT cover:</p>
        <p><strong>Emergency & Acute Care:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Emergency department visits (call 911 for emergencies; never contact our practice for emergencies)</li>
          <li>Urgent care visits</li>
          <li>Ambulance services</li>
        </ul>
        <p><strong>Hospital & Surgical Services:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hospital admissions and inpatient care</li>
          <li>Surgical procedures or invasive procedures of any kind</li>
          <li>Anesthesia services</li>
        </ul>
        <p><strong>Specialty & Diagnostic Services:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Specialist consultations (cardiology, gastroenterology, orthopedics, etc.)</li>
          <li>Advanced diagnostic imaging (MRI, CT scans, ultrasound, X-ray)</li>
          <li>Laboratory services beyond basic panels (labs billed separately at wholesale pricing)</li>
          <li>Radiation, chemotherapy, or intensive treatments</li>
          <li>Physical therapy, occupational therapy, rehabilitation services</li>
        </ul>
        <p><strong>Medications & Equipment:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Prescription medications (we write prescriptions but medications are purchased separately)</li>
          <li>Durable medical equipment</li>
          <li>Medical devices and supplies</li>
        </ul>
        <p><strong>Other Excluded Services:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Obstetric care and pregnancy management</li>
          <li>Pediatric care for patients under age 12 (unless approved case-by-case)</li>
          <li>Psychiatric care beyond basic screening and medication management</li>
          <li>Chronic pain management requiring ongoing controlled substances</li>
        </ul>
        <p><strong>We strongly advise maintaining separate health insurance</strong> (or healthcare cost-sharing plan) to cover emergencies, hospitalizations, specialty care, surgical procedures, and catastrophic medical events.</p>
        <p><strong>Recommended Pairing: DPC + High-Deductible Health Plan (HDHP)</strong></p>
        <p>Many of our members use this cost-effective strategy:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Sankofa Family Medicine DPC membership</strong> for all primary care needs (paid with HSA funds if enrolled in HDHP)</li>
          <li><strong>High-deductible health plan (HDHP)</strong> with lower monthly premiums for emergencies, specialists, and hospitalizations</li>
          <li><strong>Health Savings Account (HSA)</strong> for tax-advantaged medical savings</li>
        </ol>
        <p>This approach provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Comprehensive primary care with exceptional physician access</li>
          <li>Financial protection for emergencies and catastrophic events</li>
          <li>Lower monthly insurance premiums compared to traditional low-deductible plans</li>
          <li>Triple tax advantages through HSA contributions (tax-deductible, tax-free growth, tax-free withdrawals for medical expenses)</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'What if I need a specialist?',
    a: 'Dr. Nkrumah will coordinate referrals to trusted specialists and help navigate the process. Care coordination is included in all membership tiers.',
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
              { icon: Users, label: 'One Physician', desc: 'Dr. Nkrumah personally' },
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

          {/* Payment Options */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3 className="text-center font-display text-xl text-sfm-navy mb-6">Payment Options</h3>
            <p className="text-center text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
              We accept all major payment methods through our secure, HIPAA-compliant Atlas.md platform:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-sfm-navy text-sm mb-1">Credit & Debit Cards</p>
                <p className="text-xs text-gray-500">Visa, MasterCard, American Express, Discover, JCB, Diners Club</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-sfm-navy text-sm mb-1">Bank Transfers</p>
                <p className="text-xs text-gray-500">ACH payments directly from your checking or savings account</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-sfm-navy text-sm mb-1">Digital Wallets</p>
                <p className="text-xs text-gray-500">Apple Pay and Google Pay (via the Atlas.md patient app)</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-sfm-navy text-sm mb-1">Tax-Advantaged Accounts</p>
                <p className="text-xs text-gray-500">HSA (Health Savings Account) and FSA (Flexible Spending Account) cards</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-sfm-navy text-sm mb-1">Traditional Methods</p>
                <p className="text-xs text-gray-500">Cash or check (processed manually)</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-6 max-w-2xl mx-auto">
              Membership fees are billed automatically on the 1st of each month. A $25 fee applies to declined or returned payments.
            </p>
            <div className="bg-sfm-cream/50 rounded-xl p-4 mt-6 max-w-2xl mx-auto border border-sfm-border-light">
              <p className="text-sm text-sfm-navy font-semibold mb-2 text-center">HSA/FSA Eligibility (Effective January 1, 2026)</p>
              <p className="text-xs text-gray-600 text-center">
                Direct Primary Care memberships are HSA-eligible under IRS Section 213(d) for patients with HSA-qualified high-deductible health plans. Sankofa Family Medicine is registered as a DPC practice with Washington State (RCW 48.150). Verify eligibility and contribution limits with your HSA/FSA administrator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-gradient-to-b from-white to-sfm-cream/30">
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
            <p className="text-muted max-w-xl mx-auto">Every plan includes unlimited virtual visits, direct messaging, and wholesale lab pricing.</p>
          </div>

          {/* Founding Member Alert - URGENCY SIGNAL */}
          <div className="bg-gradient-to-r from-sfm-gold/10 via-sfm-gold/5 to-sfm-gold/10 border border-sfm-gold/20 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sfm-gold/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-sfm-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sfm-navy font-semibold text-sm">Founding Member Enrollment Open</span>
                  </div>
                  <p className="text-sfm-text-muted text-xs">
                    Founding membership is limited to ensure quality, access, and continuity of care. Founding members receive priority onboarding, preferred founding member pricing, and early access as the practice reaches capacity.
                  </p>
                </div>
              </div>
              <Link 
                href="/faq#founding-members" 
                className="text-sfm-azure text-sm font-medium hover:text-sfm-gold transition-colors flex items-center gap-1"
              >
                Learn about founding benefits
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

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
                      <div className="px-4 py-1.5 bg-sfm-azure text-white text-xs font-semibold rounded-full shadow-md">
                        Founding Offer
                      </div>
                    </div>
                  )}

                  {/* Limited Availability Badge */}
                  {tier.limitedAvailability && (
                    <div className="absolute -top-3 right-6 z-10">
                      <div className="px-4 py-1.5 bg-amber-600 text-white text-xs font-semibold rounded-full shadow-md">
                        Limited Availability
                      </div>
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
                        {(billingCycle === 'annual' ? tier.priceRangeAnnual : tier.priceRange).replace('/month', '')}
                      </span>
                      <span className="text-gray-400 text-sm font-medium">/month</span>
                    </div>
                    <p className="text-sfm-text-muted text-sm mt-2">
                      Founding Member Rate
                    </p>
                    <p className="text-sfm-gold text-sm mt-2">
                      Save 10% when you prepay annually — {
                        tier.id === 'continuity' ? '$2,430–$2,970/year' :
                        tier.id === 'precision' ? '$3,510–$4,050/year' :
                        '$7,020–$7,830/year'
                      }
                    </p>
                    {billingCycle === 'annual' && (
                      <p className="text-sfm-gold text-sm mt-2 font-medium">
                        Save 10% with annual billing
                      </p>
                    )}
                  </div>

                  <p className="text-muted text-sm mb-8 leading-relaxed">
                    {tier.description}
                  </p>

                  <a
                    href={ATLAS_PORTAL_URL}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-sfm-gold to-sfm-gold-light text-sfm-navy hover:shadow-lg hover:shadow-sfm-gold/30 hover:-translate-y-0.5'
                        : 'bg-sfm-navy text-white hover:bg-sfm-azure hover:-translate-y-0.5'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <ul className="space-y-4">
                    {tier.features.map((feature: Feature, i) => (
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

          {/* Founding Member Note & Launch Date */}
          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-sfm-gold/10 border border-sfm-gold/20 rounded-2xl mb-4">
                <Zap className="w-5 h-5 text-sfm-gold" />
                <p className="text-sm text-sfm-navy">
                  <span className="font-semibold">Clinical care begins early February 2026.</span> Founding enrollment closes once capacity is reached.
                </p>
              </div>
            </div>
            
            {/* Important Information */}
            <div className="bg-sfm-cream/50 rounded-2xl p-6 border border-sfm-border-light">
              <h3 className="font-semibold text-sfm-navy mb-4 text-center">Important Information</h3>
              <ul className="space-y-3 text-sm text-sfm-text-muted">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span><strong>This membership is NOT health insurance.</strong> Membership covers only the specific primary care services described. You are strongly encouraged to obtain or maintain separate health insurance for hospitalization, emergency care, specialist visits, surgery, diagnostic imaging, laboratory services, prescription medications, and other services not included.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span><strong>Emergency services:</strong> This practice does NOT provide emergency services. For life-threatening conditions (chest pain, difficulty breathing, severe bleeding, stroke symptoms, severe allergic reactions, loss of consciousness, suicidal ideation, or any emergency), immediately call 911 or go to the nearest emergency room. DO NOT contact this practice for emergencies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span><strong>Laboratory testing, imaging, medications, and specialty services</strong> are billed separately by third parties. Members receive wholesale laboratory pricing (70-90% savings compared to hospital prices) but pay labs directly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span><strong>Advanced testing and analytics</strong> (genetic testing, pharmacogenomic panels, cardiometabolic programs) are offered when clinically appropriate and involve additional cost through external partners or optional paid programs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span><strong>Memberships are month-to-month</strong> with 30 days written notice required for cancellation. No long-term contracts. We do not bill insurance companies for membership fees. Sankofa Family Medicine provides Concierge Primary Care services and operates under the Direct Primary Care (DPC) model in compliance with Washington State law (RCW 48.150).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span><strong>Geographic limitation:</strong> Services are provided ONLY to patients physically located in Washington State during telehealth encounters. Providing false location information is grounds for immediate termination.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span><strong>Controlled substances:</strong> The Practice has sole discretion regarding controlled substance prescribing. Controlled substances are generally NOT prescribed via telehealth for chronic pain management. Violation of controlled substance policy is grounds for immediate termination without refund.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span>No guarantee is made that membership will improve health outcomes, prevent disease, or reduce healthcare costs. Membership fees are for access and care coordination and are not based on utilization.</span>
                </li>
              </ul>
            </div>
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
            <h2 className="font-display text-3xl text-white">Why Members Choose Concierge Primary Care</h2>
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

            {/* SFM Concierge */}
            <div className="bg-sfm-gold/10 border border-sfm-gold/30 rounded-2xl p-6">
              <p className="text-sfm-gold text-sm uppercase tracking-wider mb-4">Sankofa Family Medicine</p>
              <ul className="space-y-3">
                {[
                  '45-60 minute unhurried visits',
                  'Same-day or next-day access',
                  'Under 500 patients per physician',
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
              {/* Now Accepting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-white/80 text-sm font-medium">Now Accepting Founding Members</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Begin Your Care with<br />
                <span className="text-sfm-gold">Medicine That Remembers</span><span className="text-sfm-gold text-xl align-top">&#8482;</span>
              </h2>
              <p className="text-white/70 text-lg mb-4 max-w-2xl">
                Founding members start enrollment through our secure patient portal. Complete your health history, 
                select your membership tier, and begin your care journey.
              </p>
              <p className="text-white/40 text-sm mb-10 max-w-2xl">
                Questions before enrolling? We are here to help.
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
    </>
  )
}
