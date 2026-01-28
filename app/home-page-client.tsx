'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MessageCircle, Shield, Heart, CheckCircle2, Award, ChevronDown, FileText } from 'lucide-react'
import CareJourney from '@/components/CareJourney'
import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal'
import PrimaryCTA from '@/components/PrimaryCTA'

// =============================================================================
// HOME PAGE (CLIENT)
// Notes:
// - SEO metadata lives in app/page.tsx (server component)
// - JSON-LD schema lives in app/page.tsx (server component)
// - This client component handles interactivity only
// =============================================================================

// Institutional / verification links (safe + trust-building)
const EXTERNAL_URLS = {
  abfmCredential: 'https://www.credential.net/169707940',
  waDohProviderSearch: 'https://fortress.wa.gov/doh/providercredentialsearch/',
  linkedinCompany: 'https://www.linkedin.com/company/sankofa-family-medicine/',
}

export default function HomePageClient() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false])
  const yesCount = checkedItems.filter(Boolean).length
  const assessmentRegionId = useId()
  const assessmentHelpId = useId()

  const handleCheckChange = (index: number) => {
    setCheckedItems((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sfm-gold focus:text-sfm-navy focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>

      {/* HERO */}
      <section id="main-content" className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure/60" />
        <div className="absolute inset-0 pattern-sankofa-subtle pattern-animated opacity-40" aria-hidden="true" />
        <div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(188, 152, 51, 0.12) 0%, rgba(188, 152, 51, 0.04) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] opacity-50"
          style={{ background: 'radial-gradient(ellipse at center, rgba(5, 67, 110, 0.15) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="absolute left-8 lg:left-20 top-0 h-full w-px hidden lg:block" aria-hidden="true">
          <div className="memory-thread h-full opacity-30" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 memory-node memory-node-pulse" />
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 memory-node memory-node-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-36">
              <div className="order-2 lg:order-1">
                <div className="opacity-0 animate-fade-in animation-delay-100 mb-10">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full">
                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                    <span className="text-white/80 text-base font-medium">Membership-Based Primary Care</span>
                    <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />
                    <span className="text-white/60 text-base hidden sm:block">Washington State</span>
                  </div>
                </div>

                <div className="overflow-hidden mb-10">
                  <h1 id="hero-heading" className="opacity-0 animate-hero-text animation-delay-200 relative" data-speakable>
                    <span
                      className="absolute -inset-8 -z-10 opacity-80"
                      style={{
                        background:
                          'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(188, 152, 51, 0.25) 0%, rgba(188, 152, 51, 0.08) 40%, transparent 70%)',
                        filter: 'blur(20px)',
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95] mb-3"
                      style={{
                        color: '#bc9833',
                        textShadow:
                          '0 0 30px rgba(188, 152, 51, 0.6), 0 0 60px rgba(188, 152, 51, 0.4), 0 0 100px rgba(188, 152, 51, 0.2)',
                      }}
                    >
                      Remembered.
                    </span>
                    <span
                      className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95]"
                      style={{
                        color: '#bc9833',
                        textShadow:
                          '0 0 30px rgba(188, 152, 51, 0.6), 0 0 60px rgba(188, 152, 51, 0.4), 0 0 100px rgba(188, 152, 51, 0.2)',
                      }}
                    >
                      Not Rushed.
                    </span>
                  </h1>
                </div>

                <div className="opacity-0 animate-fade-in animation-delay-400 mb-12">
                  <p className="text-xl lg:text-2xl text-white/75 leading-relaxed max-w-xl">
                    Built for continuity. Each visit is designed to build on the last.
                  </p>
                  <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed max-w-xl mt-5">
                    You don&apos;t have to start over every time.
                  </p>
                </div>

                <div className="opacity-0 animate-fade-in animation-delay-600 mb-12">
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Care that builds over time',
                        text: 'We keep track of your history, meds, labs, and goals, so each visit starts where the last one left off.',
                      },
                      {
                        title: 'The same doctor, every visit',
                        text: "You'll work with one ABFM board-certified family physician who follows your care over time.",
                      },
                      {
                        title: 'Predictable membership pricing',
                        text: 'Pricing is published as ranges. Your exact rate is confirmed before enrollment.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group cursor-default">
                        <div
                          className="w-2.5 h-2.5 rounded-full bg-sfm-gold mt-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-150 motion-reduce:transition-none motion-reduce:transform-none"
                          aria-hidden="true"
                        />
                        <div>
                          <span className="text-white font-semibold text-xl block mb-1 transition-colors duration-300 group-hover:text-sfm-gold motion-reduce:transition-none">
                            {item.title}
                          </span>
                          <span className="text-white/70 text-lg leading-relaxed">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="opacity-0 animate-fade-in animation-delay-800 mb-8">
                  <p className="text-white/80 text-xl lg:text-2xl leading-relaxed max-w-lg">
                    Want care where we remember the full picture?
                    <br />
                    Join a practice built for continuity, clear next steps, and long-term care.
                  </p>
                </div>

                <div className="opacity-0 animate-fade-in animation-delay-900 flex flex-wrap items-center gap-4">
                  <PrimaryCTA variant="hero" />
                  <Link
                    href="#membership-plans"
                    onClick={(e) => scrollToSection(e, 'membership-plans')}
                    className="btn-outline btn-shine text-lg px-8 py-4 focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 focus:ring-offset-sfm-navy"
                  >
                    View Membership Plans
                  </Link>
                </div>

                <div className="opacity-0 animate-fade-in animation-delay-1000 mt-8">
                  <p className="text-white/60 text-lg">
                    Clinical care is planned to begin in early 2026. No payment is required to join the Founders Waitlist.
                  </p>
                  <p className="text-white/50 text-base mt-4 max-w-xl leading-relaxed">
                    Founders Waitlist only. Joining does not create a doctor-patient relationship. Services are available only to patients located in Washington State.
                  </p>
                  <p className="text-white/45 text-base mt-3 max-w-xl leading-relaxed">
                    Not for emergencies. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department.
                  </p>
                </div>

                <div className="opacity-0 animate-fade-in animation-delay-1100 mt-10 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    <a
                      href={EXTERNAL_URLS.abfmCredential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      aria-label="Verify ABFM board certification (opens in new tab)"
                    >
                      <div className="flex items-center gap-2 text-white/60 text-base cursor-pointer hover:text-sfm-gold transition-colors motion-reduce:transition-none">
                        <Award className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
                        <span>ABFM Board Certified</span>
                      </div>
                    </a>

                    <span className="flex items-center gap-2 text-white/60 text-base">
                      <Shield className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
                      <span>HIPAA-conscious privacy practices</span>
                    </span>

                    <a
                      href={EXTERNAL_URLS.waDohProviderSearch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 text-base hover:text-sfm-gold transition-colors motion-reduce:transition-none"
                      aria-label="Washington State Department of Health provider credential search (opens in new tab)"
                    >
                      <FileText className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
                      <span>WA Licensed (verify)</span>
                    </a>

                    <span className="flex items-center gap-2 text-white/60 text-base">
                      <Clock className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
                      <span>45-75 Min Visits</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="opacity-0 animate-scale-in animation-delay-300 relative">
                  <div
                    className="absolute -inset-12"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(188, 152, 51, 0.15) 0%, rgba(188, 152, 51, 0.05) 50%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] aspect-[3/4]">
                    <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl shadow-sfm-navy/40">
                      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-sfm-navy/40 via-transparent to-transparent" />
                      <Image
                        src="/images/sankofa-wooden-sculpture.png"
                        alt="Traditional wooden Sankofa bird sculpture symbolizing Medicine That Remembers"
                        fill
                        priority
                        className="object-cover object-center transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 460px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1500 hidden lg:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <ChevronDown className="w-4 h-4 text-white/40 animate-bounce motion-reduce:animate-none" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden" aria-labelledby="philosophy-heading">
        <div className="absolute inset-0 pattern-sankofa-subtle opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex justify-center mb-4">
              <Image src="/images/comettrans.png" alt="" width={48} height={48} className="opacity-60" aria-hidden="true" />
            </div>
            <span className="inline-block text-sfm-gold text-base font-semibold tracking-widest uppercase mb-6">Our Philosophy</span>
            <h2 id="philosophy-heading" className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight" data-speakable>
              Medicine That Remembers™
            </h2>
            <p className="text-xl text-sfm-navy/70 leading-relaxed mb-6">Sankofa means &quot;go back and retrieve what matters.&quot;</p>
            <p className="text-xl text-sfm-navy/70 leading-relaxed">
              In medicine, what matters is your history. When your story is remembered, care becomes clearer, more personal, and more effective over time.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Heart,
                title: 'Relationship First',
                description:
                  'One doctor who gets to know your history and what matters to you over time. No rotating providers. No repeating yourself. No starting over.',
              },
              {
                icon: Clock,
                title: 'Time That Matters',
                description: 'Visits are designed to be longer so you have time to talk, ask questions, and feel heard. No rushing through symptoms.',
              },
              {
                icon: MessageCircle,
                title: 'Accessible When Needed',
                description:
                  'When enrolled, you can message your doctor and request visits as needs come up. Urgent concerns may be scheduled same-day or next-business-day when available.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-sfm-gold/10 flex items-center justify-center transition-all duration-300 group-hover:bg-sfm-gold/20 group-hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none">
                    <item.icon className="w-8 h-8 text-sfm-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl text-sfm-navy mb-4 transition-colors duration-300 group-hover:text-sfm-gold motion-reduce:transition-none">
                    {item.title}
                  </h3>
                  <p className="text-sfm-navy/70 text-lg leading-relaxed">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <ScrollReveal className="max-w-3xl mx-auto text-center mt-16">
            <p className="text-xl text-sfm-navy/70 leading-relaxed italic">Continuity is not an old idea. It is the foundation of medicine that does not forget.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="serve-heading">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="serve-heading" className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight" data-speakable>
              Who We Serve
            </h2>
            <p className="text-xl text-sfm-navy/70 leading-relaxed">
              Sankofa Family Medicine is for people who want a doctor who follows their care over time. If you are busy, raising a family, or focused on long-term health,
              our Washington State membership model is built to fit your life.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                src: '/images/telehealth-video-visit.png',
                alt: 'Professional woman enjoying a video consultation with her physician from home',
                label: 'Busy Professionals',
                description: 'Responsive support for leaders who value their time.',
              },
              {
                src: '/images/patient-tablet-seattle.png',
                alt: 'Man reviewing health information on tablet with Seattle skyline in background',
                label: 'Tech-Forward Patients',
                description: 'Digital-first care with clear workflows and follow-through.',
              },
              {
                src: '/images/family-gathering-pnw.png',
                alt: 'Multigenerational family enjoying time together in the Pacific Northwest',
                label: 'Families',
                description: 'One doctor for your household, visit after visit.',
              },
              {
                src: '/images/woman-tablet-thoughtful.png',
                alt: 'Woman thoughtfully reviewing her health plan on a tablet',
                label: 'Proactive Health',
                description: 'Prevention and long-term planning for those who invest in their health.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="relative group overflow-hidden rounded-2xl aspect-[4/5] ring-2 ring-transparent hover:ring-sfm-gold/40 transition-all duration-300 motion-reduce:transition-none">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/90 via-sfm-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <p className="text-white font-display text-lg lg:text-xl mb-1">{item.label}</p>
                    <p className="text-white/80 text-base lg:text-lg leading-snug hidden sm:block">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      <CareJourney />

      {/* DPC COMPARISON */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="compare-heading">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sfm-gold text-base font-semibold tracking-widest uppercase mb-6">The Difference</span>
            <h2 id="compare-heading" className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight" data-speakable>
              Why Direct Primary Care Works
            </h2>
            <p className="text-xl text-sfm-navy/70">
              Insurance-driven systems are built for volume, not memory. Direct Primary Care restores time, continuity, and transparency.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                  <h3 className="font-display text-2xl text-sfm-navy mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gray-400" aria-hidden="true" />
                    Insurance-Based Primary Care
                    <span className="text-sfm-navy/50 text-lg">*</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      '15 minute appointments that feel rushed.',
                      'Long waits for visits and limited access.',
                      'Thousands of patients per physician.',
                      'Different provider at each visit.',
                      'Surprise billing and confusing statements.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sfm-navy/70 text-lg">
                        <span className="w-2 h-2 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="bg-sfm-navy rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                  <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-sfm-gold" aria-hidden="true" />
                    Sankofa Family Medicine
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Visits are planned for 45-75 minutes.',
                      'Urgent visits may be same-day or next-business-day, when available.',
                      'Intentionally limited panel size to protect time and access.',
                      'The same doctor every time, not a rotating team.',
                      'Clear monthly pricing. No visit fees or surprise bills.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85 text-lg">
                        <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <p className="text-center text-base text-sfm-navy/60 mt-8">
                *Typical features of many insurance-based primary care clinics. Individual experiences may differ.
              </p>

              <div className="text-center mt-6">
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors motion-reduce:transition-none font-medium text-lg focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded"
                >
                  See the full comparison
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SELF-ASSESSMENT */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden" aria-labelledby="assessment-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 id="assessment-heading" className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight" data-speakable>
                Is This Model Right for You?
              </h2>
              <p className="text-xl text-sfm-navy/70 mb-8 leading-relaxed">
                If you value time with your doctor, continuity of care, and predictable pricing, you will fit right in.
              </p>
              <Link
                href="/resources/primary-care-guide"
                className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors motion-reduce:transition-none font-medium text-lg focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded"
              >
                Download the Free Guide
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sfm-border-light">
                <p className="font-display text-2xl text-sfm-navy mb-2">Check all that apply to you:</p>
                <p id={assessmentHelpId} className="sr-only">
                  Your selections update the message below.
                </p>

                <div className="space-y-5 mb-8 mt-6">
                  {[
                    'I want more time with my doctor.',
                    'I want the same doctor who follows my care over time.',
                    'I want easier access when I need care.',
                    'I prefer transparent monthly costs.',
                    'I believe prevention is worth investing in.',
                  ].map((item, index) => (
                    <label key={index} className="flex items-start gap-4 cursor-pointer group">
                      <div
                        className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all motion-reduce:transition-none flex-shrink-0 mt-0.5 ${
                          checkedItems[index] ? 'bg-sfm-gold border-sfm-gold' : 'border-gray-300 group-hover:border-sfm-gold/50'
                        }`}
                        aria-hidden="true"
                      >
                        {checkedItems[index] && <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />}
                      </div>

                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checkedItems[index]}
                        onChange={() => handleCheckChange(index)}
                        aria-label={item}
                        aria-controls={assessmentRegionId}
                        aria-describedby={assessmentHelpId}
                      />

                      <span className="text-sfm-navy/80 text-lg">{item}</span>
                    </label>
                  ))}
                </div>

                <div
                  id={assessmentRegionId}
                  aria-live="polite"
                  className={`p-5 rounded-xl transition-all motion-reduce:transition-none ${
                    yesCount >= 3 ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  {yesCount >= 3 ? (
                    <div>
                      <p className="text-emerald-800 text-lg mb-3">
                        <strong>Sankofa may be a great fit.</strong> You value continuity, time, and transparency.
                      </p>
                      <Link
                        href="/founders-waitlist"
                        className="inline-flex items-center gap-2 text-emerald-700 font-medium text-lg hover:text-emerald-900 transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                      >
                        Join the Founders Waitlist
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                      </Link>
                      <p className="text-emerald-600/70 text-sm mt-3">Waitlist only. No payment or doctor-patient relationship created.</p>
                    </div>
                  ) : yesCount > 0 ? (
                    <p className="text-gray-700 text-lg">Check more boxes to see if this model fits you.</p>
                  ) : (
                    <p className="text-gray-500 text-lg">Select the statements that resonate with you.</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section id="membership-plans" className="relative py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="membership-heading">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-sfm-gold text-base font-semibold tracking-widest uppercase mb-6">Membership Plans</span>
            <h2 id="membership-heading" className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight" data-speakable>
              Membership-Based Primary Care
            </h2>
            <p className="text-xl text-sfm-navy/70 max-w-2xl mx-auto mb-4">
              When enrollment opens, memberships are expected to include virtual visits, secure messaging, and wholesale lab pricing. This is Direct Primary Care (DPC). We do not bill insurance for primary care.
            </p>
            <p className="text-lg text-sfm-navy/60 max-w-2xl mx-auto mb-4">
              We do not bill insurance for membership services, but you may use insurance for labs, imaging, and specialists outside the membership. Services are available only to patients located in Washington State.
            </p>
            <p className="text-sfm-gold font-medium text-lg">
              <Link href="/membership-terms#founding-member-program" className="hover:underline hover:text-sfm-azure transition-colors duration-300 motion-reduce:transition-none">
                Founding members
              </Link>{' '}
              receive the lower end of each range. Your exact rate is confirmed before enrollment.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Continuity',
                priceRange: '$225-$275',
                description: 'Essential virtual primary care designed to restore the continuity traditional medicine has lost.',
                featured: false,
                anchor: 'continuity',
              },
              {
                name: 'Precision',
                priceRange: '$325-$375',
                description: 'Everything in Continuity plus deeper preventive insight and advanced diagnostics when appropriate.',
                featured: true,
                anchor: 'precision',
              },
              {
                name: 'Executive',
                priceRange: '$650-$725',
                description: 'Enhanced access, coordination, and comprehensive health planning for individuals and families.',
                featured: false,
                anchor: 'executive',
              },
            ].map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <article
                  className={`relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl motion-reduce:transition-none motion-reduce:transform-none overflow-hidden ${
                    tier.featured ? 'bg-sfm-navy text-white ring-2 ring-sfm-gold' : 'bg-white border border-sfm-border-light hover:border-sfm-border hover:shadow-lg'
                  }`}
                >
                  {tier.featured && (
                    <>
                      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
                        <div
                          className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          style={{ animation: 'shine 4s ease-in-out infinite' }}
                        />
                      </div>
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <span className="px-4 py-1.5 bg-sfm-gold text-sfm-navy text-base font-semibold rounded-full">Most Popular</span>
                      </div>
                    </>
                  )}

                  <h3 className={`font-display text-2xl mb-2 relative z-10 ${tier.featured ? 'text-white' : 'text-sfm-navy'}`}>{tier.name}</h3>
                  <p className={`text-base mb-4 relative z-10 ${tier.featured ? 'text-white/60' : 'text-sfm-navy/50'}`}>
                    Membership-Based Primary Care (DPC model)
                  </p>

                  <div className="mb-4 relative z-10">
                    <span className={`text-4xl font-display ${tier.featured ? 'text-sfm-gold' : 'text-sfm-navy'}`}>{tier.priceRange}</span>
                    <span className={`text-lg ${tier.featured ? 'text-white/70' : 'text-sfm-navy/60'}`}>/month</span>
                  </div>

                  <p className={`text-lg mb-6 leading-relaxed relative z-10 ${tier.featured ? 'text-white/80' : 'text-sfm-navy/70'}`}>{tier.description}</p>

                  <Link
                    href={`/services#${tier.anchor}`}
                    className={`inline-flex items-center gap-2 text-lg font-medium transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded relative z-10 ${
                      tier.featured ? 'text-sfm-gold hover:text-sfm-gold-light focus:ring-offset-sfm-navy' : 'text-sfm-azure hover:text-sfm-gold'
                    }`}
                  >
                    View Plan Details <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-navy text-white font-medium rounded-xl hover:bg-sfm-azure transition-colors motion-reduce:transition-none text-lg focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2"
            >
              View All Plan Details
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <ScrollReveal>
              <h2 id="blog-heading" className="text-4xl lg:text-5xl font-display text-sfm-navy leading-tight">
                Insights on Modern Primary Care
              </h2>
              <p className="text-sfm-navy/70 text-xl mt-4 max-w-xl">
                Articles on virtual care, prevention, and modern primary care written for clarity and better decision-making.
              </p>
            </ScrollReveal>

            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors motion-reduce:transition-none font-medium text-lg focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded"
            >
              View all articles <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8">
            {[
              {
                href: '/blog/genetic-testing-what-it-tells-you',
                image: '/images/blog-genetic-testing.png',
                category: 'Precision Medicine',
                title: 'What Genetic Testing Actually Tells You',
                excerpt: 'Genetic testing is not about predicting the future. It is about adding context to the present.',
              },
              {
                href: '/blog/virtual-care-more-personal',
                image: '/images/blog-virtual-care.png',
                category: 'Virtual Care',
                title: 'Why Virtual Care Is More Personal, Not Less',
                excerpt: 'There is a common assumption that virtual medicine is impersonal. The opposite is often true.',
              },
              {
                href: '/blog/why-skipping-primary-care-costs-years',
                image: '/images/blog-primary-care.png',
                category: 'Primary Care',
                title: 'Why Skipping Primary Care Costs You Years',
                excerpt: 'The cost of avoiding primary care is not measured in dollars. It is measured in time.',
              },
            ].map((article, i) => (
              <ScrollReveal key={article.href} delay={i * 0.1}>
                <Link href={article.href} className="group block focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded-2xl">
                  <article className="bg-white rounded-2xl overflow-hidden border border-sfm-border-light group-hover:border-sfm-border transition-all motion-reduce:transition-none group-hover:shadow-lg">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-base font-medium text-sfm-navy">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl text-sfm-navy mb-3 group-hover:text-sfm-azure transition-colors motion-reduce:transition-none">{article.title}</h3>
                      <p className="text-sfm-navy/70 text-lg leading-relaxed">{article.excerpt}</p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <div className="text-center mt-10 md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors motion-reduce:transition-none font-medium text-lg focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded"
            >
              View all articles <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-sfm-navy" />
        <div className="absolute inset-0 pattern-sankofa-subtle opacity-30" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(188, 152, 51, 0.08) 0%, rgba(188, 152, 51, 0.02) 50%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full mb-10">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            <span className="text-white/80 text-lg font-medium">Founders Waitlist Open</span>
          </div>

          <h2 id="cta-heading" className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight" data-speakable>
            Begin with a Doctor Who{' '}
            <span className="text-sfm-gold" style={{ textShadow: '0 0 40px rgba(188, 152, 51, 0.4)' }}>
              Remembers
            </span>
          </h2>

          <p className="text-white/70 text-xl lg:text-2xl mb-6 max-w-xl mx-auto leading-relaxed">
            When enrollment opens, intake, scheduling, messaging, and visits will be managed through a secure patient portal.
          </p>

          <p className="text-white/60 text-lg mb-8">
            <Link href="/membership-terms#founding-member-program" className="hover:text-sfm-gold hover:underline transition-colors duration-300 motion-reduce:transition-none">
              Founding member pricing
            </Link>{' '}
            is available for a limited time during the launch period, subject to capacity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA variant="hero" />
            <Link
              href="#membership-plans"
              onClick={(e) => scrollToSection(e, 'membership-plans')}
              className="btn-outline btn-shine text-lg px-8 py-4 focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 focus:ring-offset-sfm-navy"
            >
              Membership Plans
            </Link>
          </div>

          <p className="text-white/50 text-lg mt-10 max-w-lg mx-auto leading-relaxed">
            Founders Waitlist only. No payment is required to join. Joining does not guarantee enrollment. Joining does not create a doctor-patient relationship. Services are available only to patients located in Washington State.
          </p>

          <p className="text-white/40 text-base mt-4">
            Not for emergencies. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department.
          </p>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-lg">
              <a
                href={EXTERNAL_URLS.abfmCredential}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sfm-gold transition-colors motion-reduce:transition-none"
                aria-label="Verify ABFM board certification (opens in new tab)"
              >
                <Award className="w-5 h-5" aria-hidden="true" />
                <span>ABFM Board Certified</span>
              </a>

              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5" aria-hidden="true" />
                HIPAA-conscious privacy practices
              </span>

              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Secure portal (after enrollment)
              </span>

              <a
                href={EXTERNAL_URLS.waDohProviderSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sfm-gold transition-colors motion-reduce:transition-none"
                aria-label="Washington State Department of Health provider credential search (opens in new tab)"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                WA licensed (verify)
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  )
}
