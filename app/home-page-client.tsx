'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MessageCircle, Shield, Heart, Stethoscope, CheckCircle2, Award, Users } from 'lucide-react'
import CareJourney from '@/components/CareJourney'
import TrustStrip from '@/components/TrustStrip'
import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal'
import PrimaryCTA, { SecondaryCTA, ATLAS_PORTAL_URL } from '@/components/PrimaryCTA'

export default function HomePage() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false])
  const yesCount = checkedItems.filter(item => item).length

  const handleCheckChange = (index: number) => {
    const newChecked = [...checkedItems]
    newChecked[index] = !newChecked[index]
    setCheckedItems(newChecked)
  }

  return (
    <>
      {/* HERO SECTION - Refined with more breathing room */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-overlay-elite">
        {/* Background - Simplified gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure/70" />
        
        {/* Subtle pattern overlay - reduced intensity */}
        <div className="absolute inset-0 pattern-sankofa-subtle pattern-animated opacity-50" aria-hidden="true" />
        
        {/* Refined ambient glow - fewer, softer */}
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-sfm-gold/8 rounded-full blur-[180px] pulse-glow-elite" />
        
        {/* Additional ambient glow for depth */}
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-sfm-azure/10 rounded-full blur-[150px]" />

        {/* Memory Thread - Signature element */}
        <div className="absolute left-8 lg:left-20 top-0 h-full w-px hidden lg:block">
          <div className="memory-thread h-full opacity-30" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 memory-node memory-node-pulse" />
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 memory-node memory-node-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-36">
              
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1">
                
                {/* Location Badge - Cleaner with float animation */}
                <div className="opacity-0 animate-fade-in animation-delay-100 mb-10">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full float-elite">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-white/70 text-sm font-medium">Virtual Concierge Primary Care</span>
                    <span className="w-px h-4 bg-white/20" />
                    <span className="text-white/50 text-sm">Washington State</span>
                  </div>
                </div>

                {/* Headline - More breathing room */}
                <div className="overflow-hidden mb-10">
                  <h1 className="opacity-0 animate-hero-text animation-delay-200" data-speakable>
                    <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-white leading-[0.92] mb-4">
                      <span className="remember-glow">Remembered</span>, Not
                    </span>
                    <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-white leading-[0.92]">
                      Rushed
                    </span>
                  </h1>
                </div>

                {/* Subheadline - Refined */}
                <div className="opacity-0 animate-fade-in animation-delay-300 mb-12">
                  <p className="text-lg lg:text-xl text-white/55 leading-relaxed max-w-lg">
                    Sankofa Family Medicine treats continuity as a calling.
                    Your physician knows your history, understands your context, and carries it forward with care.
                  </p>
                  <p className="italic text-lg lg:text-xl text-white/80 font-medium leading-relaxed max-w-lg mt-4">
                    Memory is not a feature here. It is the foundation of care.
                  </p>
                </div>

                {/* Value Props - Cleaner presentation */}
                <div className="opacity-0 animate-fade-in animation-delay-350 mb-12">
                  <div className="space-y-4">
                    {[
                      'Your story travels with you. Every visit builds on your history and context.',
                      'Direct physician access. Message your doctor directly with no call centers or gatekeepers.',
                      'Transparent memberships from $225 per month. Clear, predictable pricing for personalized care.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-sfm-gold mt-2.5 flex-shrink-0" />
                        <span className="text-white/60 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Bridge */}
                <div className="opacity-0 animate-fade-in animation-delay-380 mb-8">
                  <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-lg">
                    Ready for Medicine that doesn't forget?<br />
                    Join a practice built on connection and continuity.
                  </p>
                </div>

                {/* CTA Buttons - Refined styling */}
                <div className="opacity-0 animate-fade-in animation-delay-400 flex flex-wrap items-center gap-4">
                  <PrimaryCTA variant="hero" />
                  <Link 
                    href="#membership-plans" 
                    className="btn-outline btn-shine"
                  >
                    View Membership Plans
                  </Link>
                </div>

                {/* Signature Line */}
                <div className="opacity-0 animate-fade-in animation-delay-450 mt-6">
                  <p className="text-sfm-gold font-display text-lg mb-2">
                    Medicine That Remembers™
                  </p>
                  <p className="text-white/40 text-sm">
                    Enrollment begins in Atlas.
                  </p>
                </div>

                {/* Trust Indicators - Single row, consolidated */}
                <div className="opacity-0 animate-fade-in animation-delay-500 mt-10 pt-8 border-t border-white/8">
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Shield className="w-4 h-4 text-sfm-gold/70" />
                      <span>HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Award className="w-4 h-4 text-sfm-gold/70" />
                      <span>Board Certified</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Clock className="w-4 h-4 text-sfm-gold/70" />
                      <span>Same or Next Day Access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Visual */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="opacity-0 animate-scale-in animation-delay-300 relative">
                  {/* Soft glow - refined without excessive pulse */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-sfm-gold/20 via-sfm-gold/10 to-sfm-azure/10 rounded-[50px] blur-3xl" />
                  
                  {/* Main Image Container - Wooden Sankofa Sculpture */}
                  <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] aspect-[3/4]">
                    <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl shadow-sfm-navy/30 image-fade-dark">
                      {/* Subtle brand tint overlay */}
                      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-sfm-navy/40 via-transparent to-transparent" />
                      
                      <Image
                        src="/images/sankofa-wooden-sculpture.png"
                        alt="Traditional wooden Sankofa bird sculpture symbolizing the importance of learning from the past"
                        fill
                        priority
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 460px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION - Cleaner with premium overlay */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden section-overlay-premium">
        <div className="absolute inset-0 pattern-sankofa-subtle opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block text-sfm-gold text-sm font-semibold tracking-widest uppercase mb-6">
              Our Philosophy
            </span>
            <h2 className="text-display-lg text-sfm-navy mb-6">
              Medicine that Remembers
            </h2>
            <p className="text-lg text-sfm-text-muted leading-relaxed mb-6">
              Sankofa is a West African word and symbol that means &ldquo;go back and retrieve what matters.&rdquo; 
              In medicine, what matters is continuity, relationship, and the bond between patient and physician.
            </p>
            <p className="text-lg text-sfm-text-muted leading-relaxed">
              At Sankofa Family Medicine, that idea guides everything we do. We believe good care begins with memory, 
              with knowing your history, your context, and your goals. Lasting relationships make better medicine.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Heart,
                title: 'Relationship First',
                description: 'One physician who knows your history, your context, and your goals. No rotating providers. No retelling your story. No starting over.',
              },
              {
                icon: Clock,
                title: 'Time That Matters',
                description: 'Visits average about forty-five minutes. Time to listen. Time to understand. Time to address what truly matters to you.',
              },
              {
                icon: MessageCircle,
                title: 'Always Accessible',
                description: 'Message your physician directly and receive a response within one business day, Monday through Friday. For urgent concerns, virtual visits are available the same or next business day whenever possible.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="icon-elite mx-auto mb-6">
                    <item.icon className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                  <p className="text-sfm-text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <ScrollReveal className="max-w-3xl mx-auto text-center mt-16">
            <p className="text-lg text-sfm-text-muted leading-relaxed italic">
              Continuity is not an old idea. It is the foundation of medicine that doesn't forget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE SERVE - Patient Lifestyle Gallery */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden section-overlay-premium">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-display-md text-sfm-navy mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-sfm-text-muted leading-relaxed">
              Whether you are a busy professional, a growing family, tech forward, or focused on proactive health, our virtual concierge model is built to fit your life.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { 
                src: '/images/telehealth-video-visit.png', 
                alt: 'Professional woman enjoying a video consultation with her physician from home',
                label: 'Busy Professionals',
                description: 'Rapid support for high-performing leaders who cannot afford delays.'
              },
              { 
                src: '/images/patient-tablet-seattle.png', 
                alt: 'Man reviewing health information on tablet with Seattle skyline in background',
                label: 'Tech-Forward Patients',
                description: 'Digital-first care with modern workflows designed for clarity and follow-through.'
              },
              { 
                src: '/images/family-gathering-pnw.png', 
                alt: 'Multigenerational family enjoying time together in the Pacific Northwest',
                label: 'Families',
                description: 'Continuity for every member of your household with one physician who knows your story.'
              },
              { 
                src: '/images/woman-tablet-thoughtful.png', 
                alt: 'Woman thoughtfully reviewing her health plan on a tablet',
                label: 'Proactive Health',
                description: 'Prevention and long-term planning for patients who invest in longevity.'
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] image-fade-elite">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/90 via-sfm-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <p className="text-white font-display text-sm lg:text-base mb-1">{item.label}</p>
                    <p className="text-white/70 text-xs lg:text-sm leading-snug hidden sm:block">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* CARE JOURNEY COMPONENT */}
      <CareJourney />

      {/* CONCIERGE MEDICINE COMPARISON SECTION - Refined */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sfm-gold text-sm font-semibold tracking-widest uppercase mb-6">
              The Difference
            </span>
            <h2 className="text-display-lg text-sfm-navy mb-6">
              Why Concierge Medicine Works
            </h2>
            <p className="text-lg text-sfm-text-muted">
              Insurance-driven systems are built for volume, not memory. Concierge medicine restores time, continuity, and transparency.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional Care */}
                <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-display text-lg text-sfm-navy mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gray-400" />
                    Traditional Primary Care<span className="text-sfm-text-muted">*</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      '15 minute appointments that feel rushed',
                      'Long waits for visits and limited access',
                      'Thousands of patients per physician',
                      'Different provider at each visit',
                      'Surprise billing and confusing statements',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sfm-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sankofa Care */}
                <div className="bg-sfm-navy rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-sfm-azure/90">
                  <h3 className="font-display text-lg text-white mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-sfm-gold" />
                    Sankofa Family Medicine
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Visits that average about forty five minutes',
                      'Same or next business day virtual access for urgent concerns whenever possible',
                      'A limited panel of approximately 200 adults to protect time and access',
                      'The same physician every time, not a rotating team',
                      'Clear monthly pricing with no visit fees or unexpected bills',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-center text-xs text-sfm-text-muted mt-8">
                *Typical features of many insurance based primary care clinics. Individual experiences may differ.
              </p>

              <div className="text-center mt-6">
                <Link 
                  href="/compare" 
                  className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium"
                >
                  See the full comparison
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SELF-ASSESSMENT SECTION - Refined */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-display-md text-sfm-navy mb-6">
                Is This Model Right for You?
              </h2>
              <p className="text-lg text-sfm-text-muted mb-8 leading-relaxed">
                If you value time with your physician, continuity of care, and predictable pricing, you will fit right in.
              </p>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="/resources/primary-care-guide" 
                  className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium"
                >
                  Download the Free Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sfm-border-light">
                <p className="font-display text-lg text-sfm-navy mb-6">
                  Check all that apply to you:
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'I want more time with my doctor.',
                    'I want the same physician who knows my history.',
                    'I want easier access when I need care.',
                    'I prefer transparent monthly costs.',
                    'I believe prevention is worth investing in.',
                  ].map((item, index) => (
                    <label 
                      key={index}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 mt-0.5
                        ${checkedItems[index] 
                          ? 'bg-sfm-gold border-sfm-gold' 
                          : 'border-gray-300 group-hover:border-sfm-gold/50'}`}
                      >
                        {checkedItems[index] && (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checkedItems[index]}
                        onChange={() => handleCheckChange(index)}
                      />
                      <span className="text-sfm-text-muted">{item}</span>
                    </label>
                  ))}
                </div>

                {/* Result message */}
                <div className={`p-4 rounded-xl transition-all ${
                  yesCount >= 3 
                    ? 'bg-emerald-50 border border-emerald-200' 
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  {yesCount >= 3 ? (
                    <p className="text-emerald-800 text-sm">
                      <strong>Concierge medicine may be a great fit.</strong> You value the things that concierge medicine excels at.
                    </p>
                  ) : yesCount > 0 ? (
                    <p className="text-gray-700 text-sm">
                      Check more items to see if concierge medicine aligns with your healthcare priorities.
                    </p>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      Select the statements that resonate with you.
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section id="membership-plans" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-sfm-gold text-sm font-semibold tracking-widest uppercase mb-6">
              Membership Plans
            </span>
            <h2 className="text-display-lg text-sfm-navy mb-6">
              Concierge Memberships Built for You
            </h2>
            <p className="text-lg text-sfm-text-muted max-w-2xl mx-auto mb-4">
              All plans include generous virtual visit access, direct secure messaging with your physician, and wholesale lab pricing.
            </p>
            <p className="text-lg text-sfm-text-muted max-w-2xl mx-auto">
              Every membership includes generous virtual visit access, direct secure messaging with your physician, and wholesale lab pricing.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Continuity Concierge',
                price: 225,
                priceRange: '$225–$275',
                description: 'Essential virtual concierge primary care designed to restore the continuity traditional medicine has lost.',
                featured: false,
              },
              {
                name: 'Precision Concierge',
                price: 325,
                priceRange: '$325–$375',
                description: 'Everything in Continuity Concierge plus deeper preventive insight and advanced diagnostics when appropriate.',
                featured: true,
              },
              {
                name: 'Executive Concierge',
                price: 650,
                priceRange: '$650–$725',
                description: 'Concierge level care with direct phone access during extended hours and comprehensive health planning.',
                featured: false,
              },
            ].map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  tier.featured 
                    ? 'bg-sfm-navy text-white ring-2 ring-sfm-gold hover:bg-sfm-azure/90' 
                    : 'bg-white border border-sfm-border-light hover:border-sfm-border hover:shadow-lg'
                }`}>
                  
                  <h3 className={`font-display text-xl mb-2 ${tier.featured ? 'text-white' : 'text-sfm-navy'}`}>
                    {tier.name}
                    {tier.featured && <span className="text-sfm-gold"> (Most Popular)</span>}
                  </h3>
                  
                  <div className="mb-4">
                    <span className={`text-4xl font-display ${tier.featured ? 'text-sfm-gold' : 'text-sfm-navy'}`}>
                      {tier.priceRange}
                    </span>
                    <span className={tier.featured ? 'text-white/60' : 'text-sfm-text-muted'}>/month</span>
                  </div>
                  
                  <p className={`text-sm mb-6 ${tier.featured ? 'text-white/70' : 'text-sfm-text-muted'}`}>
                    {tier.description}
                  </p>
                  
                  <Link 
                    href="/services" 
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      tier.featured 
                        ? 'text-sfm-gold hover:text-sfm-gold-light' 
                        : 'text-sfm-azure hover:text-sfm-gold'
                    }`}
                  >
                    View Plan Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-navy text-white font-medium rounded-xl hover:bg-sfm-azure transition-colors"
            >
              View All Plan Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW - Cleaner */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <ScrollReveal>
              <h2 className="text-display-md text-sfm-navy">
                Insights from the Practice
              </h2>
              <p className="text-sfm-text-muted mt-4 max-w-xl">
                Articles on virtual care, prevention, and modern primary care written for clarity and better decision-making.
              </p>
            </ScrollReveal>
            <Link 
              href="/blog" 
              className="hidden md:inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
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
                <Link href={article.href} className="group block">
                  <article className="bg-white rounded-2xl overflow-hidden border border-sfm-border-light hover:border-sfm-border transition-all hover:shadow-lg">
                    <div className="aspect-[16/10] relative overflow-hidden image-fade-elite">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-sfm-navy">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg text-sfm-navy mb-2 group-hover:text-sfm-azure transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sfm-text-muted text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <div className="text-center mt-10 md:hidden">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Refined, elegant with premium glow */}
      <section className="relative py-24 lg:py-32 overflow-hidden cta-glow-bg" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-sfm-navy" />
        <div className="absolute inset-0 pattern-sankofa-subtle opacity-30" aria-hidden="true" />
        
        {/* Refined ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sfm-gold/6 rounded-full blur-[200px] pulse-glow-elite" aria-hidden="true" />
        
        {/* Additional depth overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-sfm-navy-deep/50 via-transparent to-sfm-navy-deep/30 pointer-events-none" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          {/* Status badge with elite styling */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full mb-10 badge-elite float-elite">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/70 text-sm font-medium">Now Accepting Patients</span>
          </div>
          
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-6 leading-tight text-reveal-elite" data-speakable>
            Begin with a Physician Who <span className="text-sfm-gold">Remembers</span>
          </h2>
          
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Enrollment starts in Atlas. Secure intake, scheduling, messaging, and visits happen there.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA variant="hero" />
            <Link href="#membership-plans" className="btn-outline btn-shine touch-target">
              Membership Plans
            </Link>
          </div>

          {/* Minimal trust footer with divider */}
          <div className="mt-12 pt-8 border-t border-white/8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/35 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" aria-hidden="true" />
                HIPAA Compliant
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Secure Portal
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
