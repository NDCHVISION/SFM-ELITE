'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Lock, Fingerprint, Sparkles, Clock, Shield, Heart, Brain, CheckCircle2, ChevronDown, Check, X, AlertCircle, Users } from 'lucide-react'

// =============================================================================
// ACCORDION COMPONENT
// =============================================================================

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display text-xl text-white">{title}</span>
        <ChevronDown className={`w-5 h-5 text-sfm-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 text-white/60 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// COMPARISON CARD COMPONENT
// =============================================================================

function ComparisonCard({ 
  title, 
  description, 
  features, 
  recommended = false,
  variant = 'default'
}: { 
  title: string
  description: string
  features: { label: string; included: boolean }[]
  recommended?: boolean
  variant?: 'default' | 'warning' | 'danger'
}) {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({})
  
  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const borderColor = variant === 'default' ? 'border-sfm-gold/30' : variant === 'warning' ? 'border-amber-500/30' : 'border-red-500/30'
  const headerBg = variant === 'default' ? 'bg-sfm-gold/10' : variant === 'warning' ? 'bg-amber-500/10' : 'bg-red-500/10'
  const iconColor = variant === 'default' ? 'text-sfm-gold' : variant === 'warning' ? 'text-amber-400' : 'text-red-400'
  
  return (
    <div className={`relative rounded-2xl border ${borderColor} bg-white/[0.02] overflow-hidden ${recommended ? 'ring-2 ring-sfm-gold' : ''}`}>
      {recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-sfm-gold text-sfm-navy text-xs font-bold rounded-full">
          Our Approach
        </div>
      )}
      <div className={`p-6 ${headerBg}`}>
        <h3 className="font-display text-2xl text-white mb-2">{title}</h3>
        <p className="text-white/50 text-sm">{description}</p>
      </div>
      <div className="p-6 space-y-4">
        {features.map((feature, index) => (
          <label 
            key={index} 
            className="flex items-start gap-3 cursor-pointer group"
            onClick={() => toggleItem(index)}
          >
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 mt-0.5
              ${checkedItems[index] 
                ? 'bg-sfm-gold border-sfm-gold' 
                : feature.included 
                  ? `border-white/30 group-hover:border-sfm-gold/50` 
                  : 'border-white/20 bg-white/5'}`}
            >
              {checkedItems[index] ? (
                <Check className="w-3 h-3 text-sfm-navy" />
              ) : feature.included ? (
                <Check className={`w-3 h-3 ${iconColor} opacity-60`} />
              ) : (
                <X className="w-3 h-3 text-white/30" />
              )}
            </div>
            <span className={`text-sm ${feature.included ? 'text-white/80' : 'text-white/40 line-through'}`}>
              {feature.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function SankofaOSPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Sankofa OS',
          description: 'Clinical infrastructure for Medicine That Remembers. Built for continuity, designed for trust, powered by human judgment.',
          applicationCategory: 'HealthApplication',
          operatingSystem: 'Web-based',
          creator: {
            '@type': 'MedicalOrganization',
            name: 'Sankofa Family Medicine',
          },
        }) }}
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
          <section className="relative min-h-screen flex items-center justify-center px-6" aria-labelledby="hero-heading">
            {/* Atmospheric background */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(188,152,51,0.08)_0%,_transparent_70%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(5,67,110,0.15)_0%,_transparent_70%)]" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-12">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sfm-gold opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sfm-gold" />
                </span>
                <span className="text-white/60 text-sm tracking-wide">
                  Clinical Infrastructure
                </span>
              </div>

              {/* Main headline */}
              <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-[1.05]">
                Sankofa OS<span className="tm">™</span>
              </h1>
              
              <p className="text-sfm-gold text-2xl sm:text-3xl font-display mb-6">
                The Clinical Infrastructure for Medicine That Remembers™
              </p>

              <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Built for Continuity. Designed for Trust. Powered by Human Judgment.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#comparison"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sfm-gold text-sfm-navy font-medium rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-[0_0_40px_rgba(188,152,51,0.3)]"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://sankofafamilymedicine.atlas.md/hub/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  Become a Patient
                </a>
              </div>
            </div>
          </section>

          {/* Sankofa OS Section - Detailed Overview */}
          <section className="relative py-24 px-6 bg-white/[0.02] border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
                  Sankofa OS<span className="tm">™</span>: The Clinical Infrastructure for Medicine That Remembers<span className="tm">™</span>
                </h2>
                <p className="text-sfm-gold text-xl sm:text-2xl font-display mb-8">
                  Built for Continuity. Designed for Trust. Powered by Human Judgment.
                </p>
              </div>

              <div className="space-y-8 text-white/70 text-lg leading-relaxed mb-12">
                <p>
                  Sankofa OS<span className="tm">™</span> is our intelligent care framework: a living standard that connects clinical expertise with advanced data-driven tools.
                </p>
                
                <p>
                  It helps our clinical team see the full picture of each patient&apos;s health: clinical histories, genetic profiles, and lab trends in one continuous thread.
                </p>
              </div>

              {/* Nexus Health Section */}
              <div className="mb-16">
                <h3 className="font-display text-3xl text-white mb-8" id="nexus-health">Nexus Health</h3>
                
                <div className="space-y-8 text-white/70 text-lg leading-relaxed mb-8">
                  <p>
                    Through secure integrations with trusted partners like Nexus Health (nexushealth.me), we incorporate genomic and laboratory insights directly into clinical decision-making. Nexus Health&apos;s BioMatrix<span className="tm">™</span> decision engine analyzes lab, genetic, and intake data to provide structured insights and protocol-ready options that our clinicians review and customize for each patient. This reduces time spent on complex case analysis while preserving clinical judgment. All data is handled within HIPAA-compliant systems that protect your health information and respect your privacy.
                  </p>
                  
                  <div className="bg-white/[0.05] border border-sfm-gold/20 rounded-lg p-6">
                    <p className="text-sfm-gold font-semibold mb-2">
                      Important: BioMatrix<span className="tm">™</span> provides clinical decision support; it does not provide diagnosis, and all care decisions are made by licensed clinicians.
                    </p>
                  </div>
                  
                  <p>
                    We don&apos;t just remember your history. We translate it, then integrate it with your labs, genetics, and lived experience to guide precise, personalized medical decisions.
                  </p>
                </div>
              </div>

              {/* Why Nexus Health Section */}
              <div className="mb-16">
                <h3 className="font-display text-2xl text-white mb-6">Why Nexus Health?</h3>
                
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Nexus Health was selected for its focus on HIPAA-aligned decision support, physician-led workflows, and precision tools that respect clinical autonomy. BioMatrix<span className="tm">™</span> complements our mission without replacing it.
                </p>
                
                <p className="text-white/70 text-lg font-semibold mb-4">Our partnership criteria required:</p>
                <ul className="space-y-3 text-white/70 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-sfm-gold mt-1">•</span>
                    <span>Proven genomic and laboratory analysis capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sfm-gold mt-1">•</span>
                    <span>Commitment to equity and accessibility in precision health design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sfm-gold mt-1">•</span>
                    <span>Technology that enhances clinical judgment rather than supplanting it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sfm-gold mt-1">•</span>
                    <span>HIPAA-compliant infrastructure with robust privacy controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sfm-gold mt-1">•</span>
                    <span>Clear positioning as decision support, not autonomous diagnosis or treatment</span>
                  </li>
                </ul>
                
                <p className="text-white/70 text-lg leading-relaxed">
                  Nexus Health met all criteria and shares our commitment to designing precision health tools that can serve diverse patient populations. Their platform, already trusted by wellness centers and primary care practices, now extends into our virtual-first model as a validation site for equitable, clinician-led implementation.
                </p>
              </div>

              {/* Key Benefits Section */}
              <div className="mb-16">
                <h3 className="font-display text-3xl text-white mb-8">Key Benefits of BioMatrix<span className="tm">™</span> Integration</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-sfm-gold mt-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Saves 2–4 hours per complex case</p>
                      <p className="text-white/60">Reduces complex case analysis from hours to structured minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-sfm-gold mt-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Supports safer prescribing</p>
                      <p className="text-white/60">Provides pharmacogenomic guidance matched to your genetic profile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-sfm-gold mt-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Catches risks earlier</p>
                      <p className="text-white/60">Identifies cardiometabolic risk patterns before problems emerge</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-sfm-gold mt-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Reduces cognitive load</p>
                      <p className="text-white/60">Presents clear, protocol-ready options for clinician review</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Living System Section */}
              <div className="bg-white/[0.05] border border-sfm-gold/20 rounded-lg p-8">
                <h3 className="font-display text-2xl text-white mb-4">A Living System, Powered by Partnership</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Sankofa OS<span className="tm">™</span> is a living clinical framework. While BioMatrix<span className="tm">™</span> strengthens today&apos;s decisions, our team continues developing proprietary physician tools and ethical layers to protect continuity, trust, and equity at scale.
                </p>
              </div>
            </div>
          </section>

          {/* What It Does - Accordion Section */}
          <section className="relative py-24 px-6 border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6 text-center">
                The Framework
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white text-center mb-12">
                What Sankofa OS Does
              </h2>
              
              <div className="space-y-4">
                <Accordion title="Clinical Memory Infrastructure" defaultOpen={true}>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Every visit, lab result, and clinical decision is threaded into a continuous patient narrative</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Pattern recognition across years of data, not just individual appointments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Context that compounds over time, making each visit more informed than the last</span>
                    </li>
                  </ul>
                </Accordion>
                
                <Accordion title="Precision Tools Integration">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>BioMatrix integration with Nexus Health for genomic and laboratory analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Pharmacogenomic insights: understand how your genetics affect medication response</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Cardiometabolic risk pattern detection before symptoms appear</span>
                    </li>
                  </ul>
                </Accordion>
                
                <Accordion title="Physician-Led, Not Algorithm-Driven">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>AI provides clinical decision support, never autonomous diagnosis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Every recommendation is reviewed and contextualized by Dr. Nkrumah</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Technology amplifies clinical judgment, never replaces it</span>
                    </li>
                  </ul>
                </Accordion>
                
                <Accordion title="HIPAA Compliant by Design">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>All data encrypted at rest and in transit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Patient agency: you control access to your health information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span>Enterprise-grade security practices protecting every interaction</span>
                    </li>
                  </ul>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Three-Column Comparison */}
          <section id="comparison" className="relative py-24 px-6 border-t border-white/[0.06]">
            <div className="max-w-6xl mx-auto">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6 text-center">
                Compare Care Models
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white text-center mb-6">
                Three Approaches to Primary Care
              </h2>
              <p className="text-white/50 text-center max-w-2xl mx-auto mb-12">
                Check the boxes that matter to you. See which model aligns with your values.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <ComparisonCard
                  title="Continuity-Driven Care"
                  description="What Sankofa Family Medicine provides"
                  variant="default"
                  recommended={true}
                  features={[
                    { label: 'Same physician every visit', included: true },
                    { label: 'Labs tracked across years', included: true },
                    { label: 'Direct messaging with doctor', included: true },
                    { label: 'Unhurried 30-60 min visits', included: true },
                    { label: 'Family history integration', included: true },
                    { label: 'Proactive health monitoring', included: true },
                    { label: 'Genomic/pharmacogenomic insights', included: true },
                    { label: 'No insurance gatekeeping', included: true },
                  ]}
                />
                
                <ComparisonCard
                  title="Capacity-Limited Care"
                  description="Traditional primary care under strain"
                  variant="warning"
                  features={[
                    { label: 'Same physician every visit', included: false },
                    { label: 'Labs tracked across years', included: false },
                    { label: 'Direct messaging with doctor', included: false },
                    { label: 'Unhurried 30-60 min visits', included: false },
                    { label: 'Family history integration', included: true },
                    { label: 'Proactive health monitoring', included: false },
                    { label: 'Genomic/pharmacogenomic insights', included: false },
                    { label: 'No insurance gatekeeping', included: false },
                  ]}
                />
                
                <ComparisonCard
                  title="Misaligned Care"
                  description="Retail clinics and urgent care"
                  variant="danger"
                  features={[
                    { label: 'Same physician every visit', included: false },
                    { label: 'Labs tracked across years', included: false },
                    { label: 'Direct messaging with doctor', included: false },
                    { label: 'Unhurried 30-60 min visits', included: false },
                    { label: 'Family history integration', included: false },
                    { label: 'Proactive health monitoring', included: false },
                    { label: 'Genomic/pharmacogenomic insights', included: false },
                    { label: 'No insurance gatekeeping', included: true },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Three Pillars */}
          <section className="relative py-24 px-6 border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                Core Architecture
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-12">
                Three Pillars
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
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
                    className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-sfm-gold/30 hover:bg-sfm-gold/[0.03] transition-all duration-500"
                  >
                    <item.icon
                      className="w-8 h-8 text-sfm-gold/70 mb-4 mx-auto group-hover:text-sfm-gold transition-colors"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-white font-display text-xl mb-2">{item.label}</h3>
                    <p className="text-white/40 text-sm">{item.hint}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Not For Everyone Section */}
          <section className="relative py-24 px-6 border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h2 className="font-display text-3xl text-white mb-2">Not for Everyone</h2>
                    <p className="text-white/50">And that is by design.</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-white/60 leading-relaxed mb-8">
                  <p>
                    Sankofa Family Medicine is built for patients who value continuity over convenience, 
                    who want a physician who knows their story, and who are comfortable with a membership fee 
                    that makes this level of care sustainable.
                  </p>
                  <p>
                    If you are looking for the lowest cost option, or prefer the anonymity of a different 
                    provider each visit, we are not the right fit. If you want a physician who remembers 
                    your last conversation and tracks your health across years, we might be.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-sfm-gold/10 rounded-xl border border-sfm-gold/20">
                    <h3 className="text-sfm-gold font-semibold mb-3">This is for you if:</h3>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sfm-gold flex-shrink-0 mt-0.5" />
                        <span>You value a long-term relationship with your physician</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sfm-gold flex-shrink-0 mt-0.5" />
                        <span>You want proactive care, not reactive appointments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sfm-gold flex-shrink-0 mt-0.5" />
                        <span>You are comfortable investing in your health</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-white/60 font-semibold mb-3">This is not for you if:</h3>
                    <ul className="space-y-2 text-white/50 text-sm">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                        <span>You prioritize cost over continuity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                        <span>You prefer walk-in convenience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                        <span>You need in-person care for every visit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="waitlist" className="relative py-24 px-6 border-t border-white/[0.06]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(188,152,51,0.1)_0%,_transparent_70%)]" />

            <div className="relative max-w-2xl mx-auto text-center">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                Ready to Experience Continuity?
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
                Become a Patient
              </h2>
              <p className="text-white/50 text-lg mb-12 leading-relaxed">
                A 15-minute conversation to see if Sankofa Family Medicine 
                is the right fit for your healthcare needs.
              </p>

              <a
                href="https://sankofafamilymedicine.atlas.md/hub/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-sfm-gold text-sfm-navy font-medium rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-[0_0_50px_rgba(188,152,51,0.4)] hover:-translate-y-0.5"
              >
                Become a Patient
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-white/30 text-sm mt-6">
                No commitment. Just a conversation.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative py-12 px-6 border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/SFM_Trans.png" 
                  alt="Sankofa Family Medicine logo" 
                  width={40} 
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-white/40 text-sm">
                  Sankofa OS. A Sankofa Family Medicine Innovation.
                </span>
              </div>

              <nav className="flex items-center gap-6 text-white/30 text-sm">
                <Link href="/about" className="hover:text-white/60 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="hover:text-white/60 transition-colors">
                  Contact
                </Link>
                <span className="flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  HIPAA Compliant
                </span>
              </nav>
            </div>

            <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-white/[0.04] text-center">
              <p className="text-white/20 text-xs italic">
                "Go back, retrieve what matters, carry it forward."
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}
