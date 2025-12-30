import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MessageCircle, Shield, Heart, Stethoscope, CheckCircle2, Phone, Calendar, Sparkles } from 'lucide-react'
import { Metadata } from 'next'
import CareJourney from '@/components/CareJourney'
import TrustStrip from '@/components/TrustStrip'
import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Sankofa Family Medicine | Medicine That Remembers | Washington State',
  description: 'Virtual-first direct primary care built on continuity, relationship, and the physician-patient bond. One physician. Your complete history. Every visit. Serving Washington State.',
  keywords: [
    'direct primary care Washington',
    'virtual DPC',
    'Medicine That Remembers',
    'continuity of care',
    'physician-patient relationship',
    'concierge medicine Seattle',
    'Dr. Yaw Nkrumah',
    'telehealth Washington',
    'primary care membership',
    'DPC doctor Washington State',
    'virtual doctor near me',
    'telemedicine family doctor',
    'genetic testing primary care',
    'pharmacogenomics Washington',
  ],
  openGraph: {
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description: 'Virtual-first direct primary care built on continuity, relationship, and the physician-patient bond.',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Sankofa Family Medicine' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa Family Medicine | Medicine That Remembers',
    description: 'Virtual-first direct primary care built on continuity, relationship, and the physician-patient bond.',
    images: ['/images/og-image.png'],
  },
  alternates: { canonical: 'https://sankofafamilymedicine.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    // Content Declaration
    'ai-content-declaration': 'human-authored',
    'content-type': 'Homepage',
    
    // Medical Practice Info
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
    'practice-type': 'Direct Primary Care',
    'accepting-patients': 'true',
    'price-range': '$149-$449/month',
    
    // Enhanced LLM Context (2026)
    'llm-summary': 'Homepage for Sankofa Family Medicine, a virtual-first Direct Primary Care practice in Washington State. The practice operates on the Sankofa principle: go back and retrieve what matters. Medicine That Remembers is the practice standard, emphasizing continuity, the physician-patient relationship, and care that follows through. Three membership tiers available. Founded by Dr. Yaw Nkrumah, MD.',
    'llm-key-facts': 'Virtual DPC | Washington State | $149-$449/month | Dr. Yaw Nkrumah MD | MUSC Graduate | Board Certified | Sankofa means go back and retrieve',
    
    // Voice Search Optimization
    'voice-search-answer': 'Sankofa Family Medicine is a virtual primary care practice in Washington State founded by Dr. Yaw Nkrumah. Membership starts at $149 per month.',
    'speakable-summary': 'Sankofa Family Medicine offers virtual primary care across Washington State with membership plans from $149 to $449 monthly.',
    
    // Featured Snippet Answers
    'snippet-what': 'Sankofa Family Medicine is a virtual Direct Primary Care practice serving Washington State',
    'snippet-who': 'Founded by Dr. Yaw Nkrumah, MD, Board Certified Family Medicine',
    'snippet-cost': 'Membership plans: Continuity Care $149/month, Precision Care $249/month, Legacy Health $449/month',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine',
  description: 'Virtual-first direct primary care practice. Medicine That Remembers.',
  url: 'https://sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: 'Washington State, USA',
  priceRange: '$149-$449/month',
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
  isAcceptingNewPatients: true,
  founder: {
    '@type': 'Physician',
    name: 'Dr. Yaw Nkrumah',
    honorificSuffix: 'MD',
    medicalSpecialty: 'FamilyMedicine'
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure/80" />
        
        {/* Sankofa Pattern Overlay */}
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" aria-hidden="true" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-sfm-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sfm-azure/20 rounded-full blur-[100px]" />

        {/* Memory Thread */}
        <div className="absolute left-6 lg:left-16 top-0 h-full w-px hidden md:block">
          <div className="memory-thread h-full opacity-20" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 memory-node memory-node-pulse" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-32 pb-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-32">
              
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1">
                
                {/* Location Badge */}
                <div className="opacity-0 animate-fade-in animation-delay-200 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-sm font-medium">Virtual Primary Care · Washington State</span>
                  </div>
                </div>

                {/* Headline */}
                <div className="overflow-hidden mb-8">
                  <h1 className="opacity-0 animate-hero-text animation-delay-400" data-speakable>
                    <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-white leading-[0.92] mb-3">
                      Medicine That
                    </span>
                    <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-gold-glow leading-[0.92]">
                      Remembers<span className="text-sfm-gold text-2xl align-top">&#8482;</span>
                    </span>
                  </h1>
                </div>

                {/* Subheadline */}
                <div className="opacity-0 animate-fade-in animation-delay-600 mb-10">
                  <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-lg" data-speakable>
                    Primary care built on continuity, relationship, and the 
                    physician-patient bond. One doctor who knows your history, 
                    your context, and your trajectory.
                  </p>
                </div>

                {/* The Standard */}
                <div className="opacity-0 animate-fade-in animation-delay-700 mb-10">
                  <div className="space-y-3">
                    {[
                      'Every visit documented with continuity and context',
                      'Direct access to your physician',
                      'Clear pricing, no surprise bills',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-sfm-gold" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="opacity-0 animate-fade-in animation-delay-800 flex flex-wrap items-center gap-4">
                  <a 
                    href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Book a 15-Minute Fit Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link 
                    href="/services" 
                    className="btn-outline"
                  >
                    View Membership Options
                  </Link>
                </div>
                
                {/* CTA Clarification */}
                <p className="opacity-0 animate-fade-in animation-delay-850 text-white/40 text-xs mt-3">
                  This is a brief, non-clinical call to ensure alignment before enrollment.
                </p>

                {/* Trust Indicators */}
                <div className="opacity-0 animate-fade-in animation-delay-900 mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-sfm-gold" />
                      <span className="text-white/50 text-sm">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sfm-gold" />
                      <span className="text-white/50 text-sm">Same-Day Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-sfm-gold" />
                      <span className="text-white/50 text-sm">Board Certified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Visual */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="opacity-0 animate-scale-in animation-delay-500 relative group">
                  {/* Soft glow behind image */}
                  <div className="absolute -inset-12 bg-gradient-to-br from-sfm-gold/25 via-sfm-gold/15 to-sfm-azure/20 rounded-[60px] blur-3xl animate-pulse-slow" />
                  
                  {/* Main Image Container - Larger with soft edges */}
                  <div className="relative w-[320px] sm:w-[420px] lg:w-[520px] aspect-[4/3]">
                    {/* Soft feathered border effect */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                      {/* Gradient mask for soft edges */}
                      <div className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,28,59,0.3) 75%, rgba(5,28,59,0.8) 100%)',
                        }}
                      />
                      
                      {/* Interior/Room Image */}
                      <Image
                        src="/images/sankofa-interior.png"
                        alt="Sankofa Family Medicine - Premium virtual care environment"
                        fill
                        priority
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 520px"
                      />
                    </div>
                    
                    {/* Decorative ring - outer */}
                    <div className="absolute -inset-4 rounded-[50px] border border-sfm-gold/20 opacity-60" />
                    
                    {/* Gold accent ring */}
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 lg:w-40 lg:h-40 rounded-full border-2 border-sfm-gold/30 border-dashed animate-spin-slow z-10" style={{ animationDuration: '30s' }} />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-2xl shadow-sfm-navy/20 z-30">
                    <p className="text-sfm-navy font-display text-base text-center">Go back and retrieve</p>
                    <p className="text-sfm-gold text-sm text-center font-semibold tracking-wide">what matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* PHILOSOPHY SECTION */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sfm-cream/50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <ScrollReveal variant="left">
              <div className="relative group">
                {/* Sankofa Bird Sculpture */}
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute -inset-4 bg-sfm-gold/10 rounded-full blur-2xl animate-pulse-slow" />
                  <div className="image-float">
                    <Image
                      src="/images/sankofa-gold-sculpture.png"
                      alt="Sankofa Bird - Symbol of retrieving wisdom from the past"
                      fill
                      className="object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>
                </div>
                {/* Caption */}
                <p className="text-center mt-6 text-sm text-sfm-text-muted italic">
                  The Sankofa Bird: Go back and retrieve what matters
                </p>
              </div>
            </ScrollReveal>

            {/* Content Side */}
            <ScrollReveal variant="right">
              <div>
                <p className="text-editorial text-sfm-gold mb-4">The Sankofa Principle</p>
                <h2 className="text-display-md text-sfm-navy mb-6">
                  Healthcare That Honors Your Story
                </h2>
                <div className="space-y-4 text-sfm-text-muted leading-relaxed">
                  <p>
                    Sankofa is an Akan word meaning "go back and retrieve what matters." 
                    In a healthcare system that has forgotten the value of continuity, 
                    we remember.
                  </p>
                  <p>
                    Medicine That Remembers is not just a tagline. It is a commitment to 
                    the kind of care that existed before medicine became transactional: 
                    a single physician who knows your history, understands your context, 
                    and follows your health trajectory over time.
                  </p>
                  <p>
                    This is not innovation. It is restoration. And it changes everything 
                    about how care feels.
                  </p>
                </div>
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 mt-8 text-sfm-azure font-medium hover:gap-3 transition-all"
                >
                  <span>Learn how it works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 lg:py-32 bg-sfm-cream relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-editorial text-sfm-gold mb-4">What We Offer</p>
            <h2 className="text-display-md text-sfm-navy mb-6">
              Primary Care Without Compromise
            </h2>
            <p className="text-sfm-text-muted leading-relaxed">
              Comprehensive care delivered virtually, with the time and attention 
              that modern healthcare has forgotten.
            </p>
          </div>

          <ScrollRevealGroup>
            {[
              {
                icon: Clock,
                title: 'Unhurried Visits',
                description: '30 to 60 minute appointments. No rushing. No interruptions. Your concerns deserve complete attention.',
              },
              {
                icon: MessageCircle,
                title: 'Direct Access',
                description: 'Reach Dr. Nkrumah directly via secure messaging. No gatekeepers, no phone trees, no waiting.',
              },
              {
                icon: Shield,
                title: 'Transparent Pricing',
                description: 'One monthly membership. No copays, no surprise bills, no insurance games. Clear value, simple math.',
              },
              {
                icon: Heart,
                title: 'Continuity of Care',
                description: 'One physician who knows your complete history. Every visit builds on the last. Nothing falls through the cracks.',
              },
              {
                icon: Stethoscope,
                title: 'Comprehensive Scope',
                description: 'From acute illness to chronic disease management. Mental health support to preventive care. Full-spectrum primary care.',
              },
              {
                icon: Sparkles,
                title: 'Precision Medicine',
                description: 'Genetic testing and pharmacogenomics to personalize your care. Data-driven decisions tailored to your biology.',
              },
            ].map((feature) => (
              <div key={feature.title} className="card-premium p-8 text-center group">
                <div className="w-14 h-14 mx-auto mb-6 bg-sfm-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-sfm-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-sfm-gold" />
                </div>
                <h3 className="font-display text-xl text-sfm-navy mb-3">{feature.title}</h3>
                <p className="text-sfm-text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </ScrollRevealGroup>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              <span>View Membership Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CARE JOURNEY */}
      <CareJourney />

      {/* PHYSICIAN-PATIENT CONNECTION */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          {/* Image Side - Dr. Nkrumah at Desk */}
          <div className="relative h-[400px] lg:h-auto group overflow-hidden">
            <div className="absolute inset-0 image-ken-burns">
              <Image
                src="/images/dr-nkrumah-desk.png"
                alt="Dr. Yaw Nkrumah at his desk, ready to listen - the heart of patient-centered care"
                fill
                loading="lazy"
                className="object-cover object-center transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-sfm-navy/30 via-transparent to-transparent lg:bg-gradient-to-l lg:from-white lg:via-transparent lg:to-transparent" />
            {/* Floating credential badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg hidden lg:block">
              <p className="text-sfm-navy font-display text-sm">Board Certified</p>
              <p className="text-sfm-text-muted text-xs">Family Medicine</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative flex items-center py-16 lg:py-24 px-5 lg:px-16 bg-white">
            <div className="max-w-lg">
              <p className="text-editorial text-sfm-gold mb-4">The Heart of Medicine</p>
              <h2 className="text-display-md text-sfm-navy mb-6">
                The Relationship That Changes Everything
              </h2>
              <div className="space-y-4 text-sfm-text-muted leading-relaxed mb-8">
                <p>
                  In traditional medicine, the average physician visit lasts 15 minutes, 
                  and you may never see the same doctor twice. Fragments of your story 
                  scattered across electronic records, none of them complete.
                </p>
                <p>
                  At Sankofa Family Medicine, continuity is not a feature. It is the 
                  foundation. One physician who knows your history, understands your 
                  concerns, and advocates for your health over time.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Cardiometabolic Health', 'Weight Management', 'Mental Health', 'Chronic Disease'].map((specialty) => (
                  <span key={specialty} className="px-3 py-1.5 bg-sfm-cream rounded-full text-sfm-navy text-sm">
                    {specialty}
                  </span>
                ))}
              </div>

              <Link href="/services/what-we-cover" className="inline-flex items-center gap-2 text-sfm-azure font-medium hover:gap-3 transition-all">
                <span>Explore conditions we treat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS / BLOG */}
      <section className="py-20 lg:py-28 bg-sfm-cream relative">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-editorial text-sfm-gold mb-3">From Dr. Nkrumah</p>
              <h2 className="text-display-md text-sfm-navy">Insights</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sfm-azure font-medium">
              All articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
            ].map((article) => (
              <Link key={article.href} href={article.href} className="group">
                <article className="card-premium overflow-hidden">
                  <div className="aspect-[16/10] relative overflow-hidden image-depth">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-all duration-700 group-hover:scale-[1.08] group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-sfm-navy shadow-soft">
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
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-sfm-navy" />
        <div className="absolute inset-0 pattern-sankofa-spiral-gold pattern-subtle pattern-sankofa-animated" aria-hidden="true" />
        
        {/* Ambient Glow with blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sfm-gold/8 rounded-full blur-[200px]" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sfm-azure/10 rounded-full blur-[150px]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sfm-gold/15 rounded-full blur-[120px]" aria-hidden="true" />
        
        <div className="relative max-w-4xl mx-auto px-5">
          {/* Glass Card Container */}
          <div className="glass-premium rounded-3xl p-8 lg:p-12 text-center">
            {/* Now Accepting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-white/80 text-sm font-medium">Now Accepting Founding Members</span>
            </div>
            
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-4 leading-tight" data-speakable>
              Begin Your Care with<br />
              <span className="text-gold-glow">Medicine That Remembers</span><span className="text-sfm-gold text-2xl align-top">&#8482;</span>
            </h2>
            
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Founding members begin with a brief fit call. If aligned, onboarding and first visit scheduling follow.
            </p>

            {/* Physician Preview */}
            <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 max-w-sm mx-auto">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-sfm-gold/50">
                <Image
                  src="/images/dr-nkrumah-thoughtful.png"
                  alt="Dr. Yaw Nkrumah"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">Dr. Yaw Nkrumah, MD</p>
                <p className="text-white/50 text-xs">Board Certified Family Medicine</p>
                <Link href="/founder" className="text-sfm-gold text-xs hover:text-sfm-gold-light transition-colors">
                  Meet your physician →
                </Link>
              </div>
            </div>

            {/* Urgency Indicator */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-amber-500/10 border border-amber-400/30 rounded-xl text-amber-200 text-sm mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" aria-hidden="true" />
              <span>Limited to 30 founding members for personalized onboarding</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-ripple cta-pulse touch-target"
                aria-label="Book a 15-minute fit call with Dr. Nkrumah"
              >
                <span>Book a 15-Minute Fit Call</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link href="/services" className="btn-outline touch-target">
                View Membership Options
              </Link>
            </div>
            
            {/* CTA Clarification */}
            <p className="text-white/40 text-xs mt-4">
              This is a brief, non-clinical call to ensure alignment before enrollment.
            </p>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" aria-hidden="true" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>24hr Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>30 Founding Spots</span>
                </div>
              </div>
            </div>

            {/* Social Proof Placeholder */}
            <div className="mt-8 flex items-center justify-center gap-2 text-white/30 text-xs">
              <span className="flex -space-x-2">
                <span className="w-6 h-6 rounded-full bg-white/20 border border-white/30" aria-hidden="true" />
                <span className="w-6 h-6 rounded-full bg-white/15 border border-white/30" aria-hidden="true" />
                <span className="w-6 h-6 rounded-full bg-white/10 border border-white/30" aria-hidden="true" />
              </span>
              <span>Professionals across Washington are joining</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
