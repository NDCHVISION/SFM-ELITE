import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowRight, CheckCircle2, MapPin, Clock, MessageCircle, Shield, Phone, Video, Stethoscope } from 'lucide-react'
import { stateConfigs } from '@/lib/states'

const waConfig = stateConfigs.WA

export const metadata: Metadata = {
  title: 'Virtual Primary Care in Washington State | Now Accepting Patients',
  description: waConfig.metadata.description,
  keywords: waConfig.metadata.keywords,
  openGraph: {
    title: 'Sankofa Family Medicine | Washington State Virtual Primary Care',
    description: waConfig.metadata.description,
    url: 'https://sankofafamilymedicine.com/locations/washington',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Washington State',
    'ICBM': `${waConfig.coordinates.lat}, ${waConfig.coordinates.lng}`,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Washington',
  description: waConfig.metadata.description,
  url: 'https://sankofafamilymedicine.com/locations/washington',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'State',
    name: 'Washington',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: waConfig.coordinates.lat,
    longitude: waConfig.coordinates.lng
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function WashingtonLocationPage() {
  const features = [
    {
      icon: Clock,
      title: 'Same-Day Access',
      description: 'Virtual appointments available within 24 hours, often same-day.'
    },
    {
      icon: MessageCircle,
      title: 'Direct Messaging',
      description: 'Text or message Dr. Nkrumah directly. Responses within 24 to 48 hours.'
    },
    {
      icon: Shield,
      title: 'No Insurance Games',
      description: 'Transparent monthly membership. No copays, no surprise bills.'
    },
    {
      icon: Stethoscope,
      title: 'Continuity of Care',
      description: 'One physician who knows your complete history, every visit.'
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hiker-pnw-mountains.png"
            alt="Hiker overlooking Pacific Northwest mountains at sunrise representing wellness and vitality"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sfm-navy/95 via-sfm-navy/90 to-sfm-navy/75" />
          {/* Brand color tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-sfm-azure/20 via-transparent to-sfm-gold/10" />
          {/* Bottom fade for content blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/40 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-20" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-premium rounded-full mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-300 text-sm font-semibold">Now Accepting Patients</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-white/60 text-sm">Washington State</span>
            </div>

            <h1 className="text-display-lg text-white mb-6">
              Virtual Primary Care in{' '}
              <span className="text-sfm-gold">Washington State</span>
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Premium virtual primary care built on continuity and the physician-patient relationship. 
              Serving adults throughout Washington State with Medicine That Remembers.
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              <a href="https://sankofafamilymedicine.atlas.md/hub/login" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-5 group">
                <span>Become a Patient</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/services" className="btn-secondary-white text-base px-10 py-5">
                Clear Pricing
              </Link>
            </div>
            <p className="text-white/40 text-xs mb-12">
              This is a brief, non-clinical call to ensure alignment before enrollment.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sfm-gold" />
                <span>{waConfig.foundingMemberSpots} Founding Member Spots</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sfm-gold" />
                <span>Board Certified Physician</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sfm-gold" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white dark:bg-sfm-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-editorial text-sfm-gold mb-4">What You Get</p>
            <h2 className="text-display-md text-sfm-navy dark:text-sfm-navy">
              Healthcare That Works for You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="group p-8 bg-sfm-cream dark:bg-sfm-surface rounded-2xl border border-transparent hover:border-sfm-gold/30 transition-all duration-500 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sfm-navy to-sfm-azure flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-sfm-navy dark:text-sfm-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-sfm-text-muted dark:text-sfm-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area with Map */}
      <section className="py-20 lg:py-28 bg-sfm-cream dark:bg-sfm-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-editorial text-sfm-gold mb-4">Service Area</p>
            <h2 className="text-display-md text-sfm-navy dark:text-sfm-navy mb-6">
              Serving All of Washington State
            </h2>
            <p className="text-sfm-text-muted dark:text-sfm-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              Our virtual-first model means you can access premium primary care from anywhere in Washington. 
              Quality care is just a video call away.
            </p>
          </div>

          {/* Service Area Map */}
          <div className="bg-white dark:bg-sfm-surface rounded-2xl p-6 md:p-8 mb-12 border border-sfm-azure/10 shadow-lg shadow-sfm-navy/5">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Washington State Map */}
              <div className="lg:col-span-3 relative group">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  {/* Subtle brand tint overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-sfm-azure/5 via-transparent to-sfm-gold/5 mix-blend-overlay" />
                  
                  {/* Edge softening */}
                  <div className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 40px 10px rgba(255,255,255,0.3)',
                    }}
                  />
                  
                  <Image
                    src="/images/map-washington.png"
                    alt="Map of Washington State showing Sankofa Family Medicine service areas including Seattle, Bellevue, Spokane, Tacoma, and the Tri-Cities"
                    width={800}
                    height={500}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
              
              {/* City Links */}
              <div className="lg:col-span-2">
                <h3 className="font-display text-lg text-sfm-navy dark:text-sfm-navy mb-3">Puget Sound Metro</h3>
                <div className="grid grid-cols-2 gap-1.5 mb-5">
                  <Link href="/locations/washington/seattle" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Seattle</span>
                  </Link>
                  <Link href="/locations/washington/bellevue" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Bellevue</span>
                  </Link>
                  <Link href="/locations/washington/kirkland" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Kirkland</span>
                  </Link>
                  <Link href="/locations/washington/redmond" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Redmond</span>
                  </Link>
                  <Link href="/locations/washington/sammamish" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Sammamish</span>
                  </Link>
                  <Link href="/locations/washington/mercer-island" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Mercer Island</span>
                  </Link>
                  <Link href="/locations/washington/everett" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Everett</span>
                  </Link>
                </div>
                
                <h3 className="font-display text-lg text-sfm-navy dark:text-sfm-navy mb-3">South Sound</h3>
                <div className="grid grid-cols-2 gap-1.5 mb-5">
                  <Link href="/locations/washington/tacoma" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Tacoma</span>
                  </Link>
                  <Link href="/locations/washington/olympia" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Olympia</span>
                  </Link>
                  <Link href="/locations/washington/vancouver" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Vancouver</span>
                  </Link>
                  <Link href="/locations/washington/spokane" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Spokane</span>
                  </Link>
                </div>

                <h3 className="font-display text-lg text-sfm-navy dark:text-sfm-navy mb-3">Tri-Cities</h3>
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-sfm-azure/5 dark:bg-sfm-azure/10 rounded-lg border border-sfm-azure/20">
                    <MapPin className="w-3 h-3 text-sfm-azure" />
                    <span className="text-sm text-sfm-navy">Richland</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-sfm-azure/5 dark:bg-sfm-azure/10 rounded-lg border border-sfm-azure/20">
                    <MapPin className="w-3 h-3 text-sfm-azure" />
                    <span className="text-sm text-sfm-navy">Pasco</span>
                  </div>
                </div>
                <p className="text-xs text-sfm-azure italic mb-5 pl-1">
                  Dr. Nkrumah completed residency training in the Tri-Cities
                </p>

                <div className="bg-sfm-cream dark:bg-sfm-surface rounded-xl p-4 border border-sfm-gold/20">
                  <p className="text-sm text-sfm-navy font-medium mb-1">
                    Statewide Virtual Coverage
                  </p>
                  <p className="text-xs text-sfm-text-muted">
                    {waConfig.telemedicineNotes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure relative overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-gold rounded-full mb-10">
            <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" />
            <span className="text-sfm-gold text-sm font-semibold">Now Accepting Founding Members</span>
          </div>

          <h2 className="text-display-lg text-white mb-6">
            Begin Your Care with<br />
            <span className="text-sfm-gold">Medicine That Remembers</span><span className="text-sfm-gold text-xl align-top">&#8482;</span>
          </h2>

          <p className="text-white/60 text-lg mb-4 max-w-2xl mx-auto">
            Founding members begin with a brief enrollment consultation. If aligned, onboarding and first visit scheduling follow.
          </p>
          <p className="text-white/40 text-sm mb-12 max-w-2xl mx-auto">
            This is a brief, non-clinical call to ensure alignment before enrollment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://sankofafamilymedicine.atlas.md/hub/login" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-12 py-5 group">
              <span>Become a Patient</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/services" className="btn-secondary-white text-base px-12 py-5">
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
