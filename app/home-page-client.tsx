'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MessageCircle, Shield, Heart, CheckCircle2, Award, ChevronDown } from 'lucide-react'
import CareJourney from '@/components/CareJourney'
import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal'
import PrimaryCTA from '@/components/PrimaryCTA'

export default function HomePage() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false])
  const yesCount = checkedItems.filter(item => item).length

  const handleCheckChange = (index: number) => {
    const newChecked = [...checkedItems]
    newChecked[index] = !newChecked[index]
    setCheckedItems(newChecked)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure/60" />
        <div className="absolute inset-0 pattern-sankofa-subtle pattern-animated opacity-40" aria-hidden="true" />
        <div 
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] opacity-60"
          style={{ background: 'radial-gradient(ellipse at center, rgba(188, 152, 51, 0.12) 0%, rgba(188, 152, 51, 0.04) 40%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] opacity-50"
          style={{ background: 'radial-gradient(ellipse at center, rgba(5, 67, 110, 0.15) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="absolute left-8 lg:left-20 top-0 h-full w-px hidden lg:block">
          <div className="memory-thread h-full opacity-30" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 memory-node memory-node-pulse" />
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 memory-node memory-node-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-36">
              <div className="order-2 lg:order-1">
                
                {/* Brand Stamp FIRST */}
                <div className="opacity-0 animate-fade-in animation-delay-100 mb-6">
                  <p className="text-sfm-gold font-display text-2xl lg:text-3xl">Medicine That Remembers™</p>
                </div>

                {/* Location Badge */}
                <div className="opacity-0 animate-fade-in animation-delay-200 mb-10">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
                    <span className="text-white/80 text-sm sm:text-base font-medium">Membership-Based Primary Care</span>
                    <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />
                    <span className="text-white/60 text-sm sm:text-base hidden sm:block">Washington State</span>
                  </div>
                </div>

                {/* Headline */}
                <div className="overflow-hidden mb-10">
                  <h1 className="opacity-0 animate-hero-text animation-delay-300 relative" data-speakable>
                    <span 
                      className="absolute -inset-8 -z-10 opacity-80"
                      style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(188, 152, 51, 0.25) 0%, rgba(188, 152, 51, 0.08) 40%, transparent 70%)', filter: 'blur(20px)' }}
                      aria-hidden="true"
                    />
                    <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95] mb-3" style={{ color: '#bc9833', textShadow: '0 0 30px rgba(188, 152, 51, 0.6), 0 0 60px rgba(188, 152, 51, 0.4), 0 0 100px rgba(188, 152, 51, 0.2)' }}>Remembered.</span>
                    <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95]" style={{ color: '#bc9833', textShadow: '0 0 30px rgba(188, 152, 51, 0.6), 0 0 60px rgba(188, 152, 51, 0.4), 0 0 100px rgba(188, 152, 51, 0.2)' }}>Not Rushed.</span>
                  </h1>
                </div>

                {/* Subheadline */}
                <div className="opacity-0 animate-fade-in animation-delay-500 mb-12">
                  <p className="text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl">Sankofa Family Medicine is built on continuity, not throughput. Your physician knows your history, context, and priorities and carries them forward with intention.</p>
                  <p className="text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-xl mt-5">Memory is not an add-on here. It is the foundation of care.</p>
                </div>

                {/* Value Props - TIGHTENED */}
                <div className="opacity-0 animate-fade-in animation-delay-700 mb-12">
                  <div className="space-y-5">
                    {[
                      { title: 'Continuity that compounds over time', text: 'Each visit builds on knowledge of your medical history, not a blank slate.' },
                      { title: 'Physician-led care, delivered consistently', text: 'You work with the same board-certified family physician over time. Consistent judgment, consistent follow-through.' },
                      { title: 'Predictable membership pricing', text: 'Memberships begin at $225/month. Predictable pricing. HSA/FSA accepted.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group cursor-default">
                        <div className="w-2 h-2 rounded-full bg-sfm-gold mt-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
                        <div>
                          <span className="text-white font-semibold text-lg block mb-1 transition-colors duration-300 group-hover:text-sfm-gold">{item.title}</span>
                          <span className="text-white/70 text-base leading-relaxed">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Bridge - TIGHTENED */}
                <div className="opacity-0 animate-fade-in animation-delay-900 mb-8">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-lg">Ready for a physician who remembers the full picture?<br />Join a practice built for continuity, judgment, and long-term outcomes.</p>
                </div>

                {/* CTA Buttons */}
                <div className="opacity-0 animate-fade-in animation-delay-1000 flex flex-wrap items-center gap-4">
                  <PrimaryCTA variant="hero" />
                  <Link href="#membership-plans" onClick={(e) => scrollToSection(e, 'membership-plans')} className="btn-outline btn-shine text-base px-6 py-3 focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 focus:ring-offset-sfm-navy">View Membership Plans</Link>
                </div>

                {/* Launch Info */}
                <div className="opacity-0 animate-fade-in animation-delay-1100 mt-8">
                  <p className="text-white/50 text-base">Clinical care begins February 2026. No payment required today.</p>
                </div>

                {/* Trust Indicators - SAFER CLAIMS */}
                <div className="opacity-0 animate-fade-in animation-delay-1200 mt-10 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    <div className="relative group">
                      <div className="flex items-center gap-2 text-white/60 text-base cursor-help">
                        <Shield className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
                        <span>HIPAA Compliant</span>
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white text-sfm-navy text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">Your health information is protected by federal privacy standards.<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" /></div>
                    </div>
                    <div className="relative group">
                      <div className="flex items-center gap-2 text-white/60 text-base cursor-help">
                        <Award className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
                        <span>Board Certified</span>
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white text-sfm-navy text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">Dr. Nkrumah is board certified in Family Medicine.<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" /></div>
                    </div>
                    <div className="relative group">
                      <div className="flex items-center gap-2 text-white/60 text-base cursor-help">
                        <Clock className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
                        <span>Priority Access</span>
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white text-sfm-navy text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">Same-day or next-business-day virtual visits for urgent concerns when available.<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" /></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="opacity-0 animate-scale-in animation-delay-300 relative">
                  <div className="absolute -inset-12" style={{ background: 'radial-gradient(ellipse at center, rgba(188, 152, 51, 0.15) 0%, rgba(188, 152, 51, 0.05) 50%, transparent 70%)' }} aria-hidden="true" />
                  <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] aspect-[3/4]">
                    <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl shadow-sfm-navy/40">
                      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-sfm-navy/40 via-transparent to-transparent" />
                      <Image src="/images/sankofa-wooden-sculpture.png" alt="Traditional wooden Sankofa bird sculpture symbolizing the importance of learning from the past" fill priority className="object-cover object-center transition-transform duration-700 hover:scale-105" sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 460px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1500 hidden lg:flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-subtle opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex justify-center mb-4">
              <Image src="/images/comettrans.png" alt="" width={48} height={48} className="opacity-60" aria-hidden="true" />
            </div>
            <span className="inline-block text-sfm-gold text-sm font-semibold tracking-widest uppercase mb-6">Our Philosophy</span>
            <h2 className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight">Medicine That Remembers™</h2>
            <p className="text-lg text-sfm-navy/70 leading-relaxed mb-6">Sankofa is a West African word and symbol that means &ldquo;go back and retrieve what matters.&rdquo; In medicine, what matters is continuity, relationship, and the bond between patient and physician.</p>
            <p className="text-lg text-sfm-navy/70 leading-relaxed">At Sankofa Family Medicine, that idea guides everything we do. We believe good care begins with memory, with knowing your history, your context, and your goals. Lasting relationships make better medicine.</p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Heart, title: 'Relationship First', description: 'One physician who knows your history, your context, and your goals. No rotating providers. No repeating your history. No starting from zero.' },
              { icon: Clock, title: 'Time That Matters', description: 'Visits of 45 to 75 minutes give you time to be heard. Time to understand. Time to address what truly matters to you.' },
              { icon: MessageCircle, title: 'Accessible When Needed', description: 'Secure messages answered within one business day (Mon-Fri). Same-day or next-business-day visits for urgent concerns when available.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-sfm-gold/10 flex items-center justify-center transition-all duration-300 group-hover:bg-sfm-gold/20 group-hover:scale-110">
                    <item.icon className="w-7 h-7 text-sfm-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3 transition-colors duration-300 group-hover:text-sfm-gold">{item.title}</h3>
                  <p className="text-sfm-navy/70 text-base leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <ScrollReveal className="max-w-3xl mx-auto text-center mt-16">
            <p className="text-lg text-sfm-navy/70 leading-relaxed italic">Continuity is not an old idea. It is the foundation of medicine that does not forget.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight">Who We Serve</h2>
            <p className="text-lg text-sfm-navy/70 leading-relaxed">Whether you are a busy professional, a growing family, tech forward, or focused on proactive health, our virtual membership model is built to fit your life.</p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { src: '/images/telehealth-video-visit.png', alt: 'Professional woman enjoying a video consultation with her physician from home', label: 'Busy Professionals', description: 'Responsive support for high-performing leaders who value their time.' },
              { src: '/images/patient-tablet-seattle.png', alt: 'Man reviewing health information on tablet with Seattle skyline in background', label: 'Tech-Forward Patients', description: 'Digital-first care with modern workflows designed for clarity and follow-through.' },
              { src: '/images/family-gathering-pnw.png', alt: 'Multigenerational family enjoying time together in the Pacific Northwest', label: 'Families', description: 'Continuity for every member of your household with one physician who knows your history.' },
              { src: '/images/woman-tablet-thoughtful.png', alt: 'Woman thoughtfully reviewing her health plan on a tablet', label: 'Proactive Health', description: 'Prevention and long-term planning for patients who invest in longevity.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] ring-2 ring-transparent hover:ring-sfm-gold/40 transition-all duration-300">
                  <Image src={item.src} alt={item.alt} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/90 via-sfm-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <p className="text-white font-display text-base lg:text-lg mb-1">{item.label}</p>
                    <p className="text-white/80 text-sm lg:text-base leading-snug hidden sm:block">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      <CareJourney />

      {/* DPC COMPARISON - SAFER CLAIMS */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sfm-gold text-sm font-semibold tracking-widest uppercase mb-6">The Difference</span>
            <h2 className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight">Why Direct Primary Care Works</h2>
            <p className="text-lg text-sfm-navy/70">Insurance-driven systems are built for volume, not memory. Direct Primary Care restores time, continuity, and transparency.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-display text-xl text-sfm-navy mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gray-400" aria-hidden="true" />Insurance-Based Primary Care<span className="text-sfm-navy/50">*</span>
                  </h3>
                  <ul className="space-y-4">
                    {['15 minute appointments that feel rushed', 'Long waits for visits and limited access', 'Thousands of patients per physician', 'Different provider at each visit', 'Surprise billing and confusing statements'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sfm-navy/70 text-base"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-sfm-navy rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="font-display text-xl text-white mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-sfm-gold" aria-hidden="true" />Sankofa Family Medicine
                  </h3>
                  <ul className="space-y-4">
                    {['45 to 75 minute visits that give you time to be heard', 'Same-day or next-business-day visits for urgent concerns when available', 'Intentionally limited panel size to protect time and access', 'The same physician every time, not a rotating team', 'Clear monthly pricing with multiple payment options. No visit fees or unexpected bills.'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85 text-base"><CheckCircle2 className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-center text-sm text-sfm-navy/60 mt-8">*Typical features of many insurance-based primary care clinics. Individual experiences may differ.</p>
              <div className="text-center mt-6">
                <Link href="/compare" className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium text-base focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded">See the full comparison<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SELF-ASSESSMENT */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight">Is This Model Right for You?</h2>
              <p className="text-lg text-sfm-navy/70 mb-8 leading-relaxed">If you value time with your physician, continuity of care, and predictable pricing, you will fit right in.</p>
              <div className="flex items-center gap-4">
                <Link href="/resources/primary-care-guide" className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium text-base focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded">Download the Free Guide<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sfm-border-light">
                <p className="font-display text-xl text-sfm-navy mb-6">Check all that apply to you:</p>
                <div className="space-y-4 mb-8">
                  {['I want more time with my doctor.', 'I want the same physician who knows my history.', 'I want easier access when I need care.', 'I prefer transparent monthly costs.', 'I believe prevention is worth investing in.'].map((item, index) => (
                    <label key={index} className="flex items-start gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${checkedItems[index] ? 'bg-sfm-gold border-sfm-gold' : 'border-gray-300 group-hover:border-sfm-gold/50'}`}>
                        {checkedItems[index] && <CheckCircle2 className="w-4 h-4 text-white" aria-hidden="true" />}
                      </div>
                      <input type="checkbox" className="sr-only" checked={checkedItems[index]} onChange={() => handleCheckChange(index)} aria-label={item} />
                      <span className="text-sfm-navy/80 text-base">{item}</span>
                    </label>
                  ))}
                </div>
                <div className={`p-4 rounded-xl transition-all ${yesCount >= 3 ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50 border border-gray-200'}`}>
                  {yesCount >= 3 ? (
                    <div>
                      <p className="text-emerald-800 text-base mb-3"><strong>Direct Primary Care may be a great fit.</strong> You value continuity, time, and transparency.</p>
                      <Link href="/founders-waitlist" className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded">Join the Founders Waitlist<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                    </div>
                  ) : yesCount > 0 ? (
                    <p className="text-gray-700 text-base">Check more items to see if Direct Primary Care aligns with your healthcare priorities.</p>
                  ) : (
                    <p className="text-gray-500 text-base">Select the statements that resonate with you.</p>
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
            <span className="inline-block text-sfm-gold text-sm font-semibold tracking-widest uppercase mb-6">Membership Plans</span>
            <h2 className="text-4xl lg:text-5xl font-display text-sfm-navy mb-6 leading-tight">Membership-Based Primary Care</h2>
            <p className="text-lg text-sfm-navy/70 max-w-2xl mx-auto mb-4">Every membership includes generous virtual visit access, direct secure messaging with your physician, and wholesale lab pricing. All memberships operate under the Direct Primary Care (DPC) model: no insurance billing for primary care services.</p>
            <p className="text-base text-sfm-navy/60 max-w-2xl mx-auto mb-4">We do not bill insurance for membership services, but you may use insurance for labs, imaging, and specialists outside the membership.</p>
            <p className="text-sfm-gold font-medium text-base">Founding members receive the lower end of each range. Your exact rate is confirmed before enrollment.</p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Continuity', priceRange: '$225–$275', description: 'Essential virtual primary care designed to restore the continuity traditional medicine has lost.', featured: false, anchor: 'continuity' },
              { name: 'Precision', priceRange: '$325–$375', description: 'Everything in Continuity plus deeper preventive insight and advanced diagnostics when appropriate.', featured: true, anchor: 'precision' },
              { name: 'Executive', priceRange: '$650–$725', description: 'Enhanced access, coordination, and comprehensive health planning for individuals and families.', featured: false, anchor: 'executive' },
            ].map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden ${tier.featured ? 'bg-sfm-navy text-white ring-2 ring-sfm-gold' : 'bg-white border border-sfm-border-light hover:border-sfm-border hover:shadow-lg'}`}>
                  {tier.featured && (
                    <>
                      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"><div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: 'shine 4s ease-in-out infinite' }} /></div>
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"><span className="px-4 py-1 bg-sfm-gold text-sfm-navy text-sm font-semibold rounded-full">Most Popular</span></div>
                    </>
                  )}
                  <h3 className={`font-display text-2xl mb-2 relative z-10 ${tier.featured ? 'text-white' : 'text-sfm-navy'}`}>{tier.name}</h3>
                  <p className={`text-sm mb-4 relative z-10 ${tier.featured ? 'text-white/60' : 'text-sfm-navy/50'}`}>Membership-Based Primary Care (DPC model)</p>
                  <div className="mb-4 relative z-10">
                    <span className={`text-4xl font-display ${tier.featured ? 'text-sfm-gold' : 'text-sfm-navy'}`}>{tier.priceRange}</span>
                    <span className={`text-base ${tier.featured ? 'text-white/70' : 'text-sfm-navy/60'}`}>/month</span>
                  </div>
                  <p className={`text-base mb-6 leading-relaxed relative z-10 ${tier.featured ? 'text-white/80' : 'text-sfm-navy/70'}`}>{tier.description}</p>
                  <Link href={`/services#${tier.anchor}`} className={`inline-flex items-center gap-2 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded relative z-10 ${tier.featured ? 'text-sfm-gold hover:text-sfm-gold-light focus:ring-offset-sfm-navy' : 'text-sfm-azure hover:text-sfm-gold'}`}>View Plan Details <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                </div>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-navy text-white font-medium rounded-xl hover:bg-sfm-azure transition-colors text-base focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2">View All Plan Details<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="relative py-24 lg:py-32 bg-sfm-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-display text-sfm-navy leading-tight">Insights from the Practice</h2>
              <p className="text-sfm-navy/70 text-lg mt-4 max-w-xl">Articles on virtual care, prevention, and modern primary care written for clarity and better decision-making.</p>
            </ScrollReveal>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium text-base focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded">View all articles<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-8">
            {[
              { href: '/blog/genetic-testing-what-it-tells-you', image: '/images/blog-genetic-testing.png', category: 'Precision Medicine', title: 'What Genetic Testing Actually Tells You', excerpt: 'Genetic testing is not about predicting the future. It is about adding context to the present.' },
              { href: '/blog/virtual-care-more-personal', image: '/images/blog-virtual-care.png', category: 'Virtual Care', title: 'Why Virtual Care Is More Personal, Not Less', excerpt: 'There is a common assumption that virtual medicine is impersonal. The opposite is often true.' },
              { href: '/blog/why-skipping-primary-care-costs-years', image: '/images/blog-primary-care.png', category: 'Primary Care', title: 'Why Skipping Primary Care Costs You Years', excerpt: 'The cost of avoiding primary care is not measured in dollars. It is measured in time.' },
            ].map((article, i) => (
              <ScrollReveal key={article.href} delay={i * 0.1}>
                <Link href={article.href} className="group block focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded-2xl">
                  <article className="bg-white rounded-2xl overflow-hidden border border-sfm-border-light group-hover:border-sfm-border transition-all group-hover:shadow-lg">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image src={article.image} alt={article.title} fill loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-4 left-4"><span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-sfm-navy">{article.category}</span></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl text-sfm-navy mb-2 group-hover:text-sfm-azure transition-colors">{article.title}</h3>
                      <p className="text-sfm-navy/70 text-base leading-relaxed">{article.excerpt}</p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>

          <div className="text-center mt-10 md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium text-base focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 rounded">View all articles<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-sfm-navy" />
        <div className="absolute inset-0 pattern-sankofa-subtle opacity-30" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" style={{ background: 'radial-gradient(ellipse at center, rgba(188, 152, 51, 0.08) 0%, rgba(188, 152, 51, 0.02) 50%, transparent 70%)' }} aria-hidden="true" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full mb-10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/80 text-base font-medium">Founders Waitlist Now Open</span>
          </div>
          
          <h2 id="cta-heading" className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight" data-speakable>Begin with a Physician Who <span className="text-sfm-gold" style={{ textShadow: '0 0 40px rgba(188, 152, 51, 0.4)' }}>Remembers</span></h2>
          <p className="text-white/70 text-lg lg:text-xl mb-6 max-w-xl mx-auto leading-relaxed">Care is delivered through Atlas. Secure intake, scheduling, messaging, and visits happen there.</p>
          <p className="text-white/50 text-base mb-10">Founding member pricing available through February 2026.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA variant="hero" />
            <Link href="#membership-plans" onClick={(e) => scrollToSection(e, 'membership-plans')} className="btn-outline btn-shine text-base px-6 py-3 focus:outline-none focus:ring-2 focus:ring-sfm-gold focus:ring-offset-2 focus:ring-offset-sfm-navy">Membership Plans</Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/50 text-base">
              <span className="flex items-center gap-2"><Shield className="w-5 h-5" aria-hidden="true" />HIPAA Compliant</span>
              <span className="flex items-center gap-2"><MessageCircle className="w-5 h-5" aria-hidden="true" />Secure Portal</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  )
}
