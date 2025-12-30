import Link from 'next/link'
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
        <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy via-sfm-navy to-sfm-azure" />
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        
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
              <a href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-5 group">
                <span>Book a 15-Minute Fit Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/services" className="btn-secondary-white text-base px-10 py-5">
                View Membership Options
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
          <div className="bg-white dark:bg-sfm-surface rounded-2xl p-8 mb-12 border border-sfm-azure/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Washington State Map - Accurate Outline */}
              <div className="relative">
                <svg viewBox="0 0 500 320" className="w-full h-auto" aria-label="Washington State service area map">
                  <defs>
                    {/* Glow filter for state */}
                    <filter id="stateGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    {/* Gradient fill */}
                    <linearGradient id="waGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05436e" stopOpacity="0.12"/>
                      <stop offset="50%" stopColor="#05436e" stopOpacity="0.08"/>
                      <stop offset="100%" stopColor="#bc9833" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Actual Washington State Outline */}
                  <path 
                    d="M15,95 C15,90 20,80 30,70 L45,55 L60,45 L80,38 L100,32 L125,28 L150,25 L175,22 L200,20 L225,18 L250,17 L275,18 L300,20 L325,22 L350,20 L375,18 L400,15 L425,12 L445,15 L455,25 L460,40 L458,60 L455,80 L452,100 L448,120 L445,140 L440,160 L435,178 L428,195 L418,210 L405,220 L388,228 L370,232 L350,235 L330,236 L308,235 L285,232 L262,228 L240,225 L218,228 L195,235 L172,242 L150,248 L128,252 L105,255 L82,255 L62,252 L45,245 L32,235 L22,220 L15,200 L12,178 L10,155 L8,132 L10,110 L15,95 Z"
                    fill="url(#waGradient)"
                    stroke="#05436e"
                    strokeWidth="2.5"
                    filter="url(#stateGlow)"
                    className="transition-all duration-300"
                  />
                  
                  {/* Puget Sound region highlight */}
                  <ellipse 
                    cx="135" cy="145" rx="70" ry="65" 
                    fill="#bc9833" 
                    fillOpacity="0.12"
                    stroke="#bc9833"
                    strokeWidth="1.5"
                    strokeDasharray="6,3"
                  />
                  
                  {/* City markers with enhanced visibility */}
                  <g className="city-markers">
                    {/* Everett */}
                    <circle cx="120" cy="95" r="5" fill="#bc9833" className="drop-shadow-sm" />
                    <text x="105" y="88" textAnchor="end" className="text-[11px] fill-sfm-navy font-medium">Everett</text>
                    
                    {/* Seattle - Major */}
                    <circle cx="105" cy="125" r="8" fill="#bc9833" className="drop-shadow-md" />
                    <text x="88" y="128" textAnchor="end" className="text-[12px] fill-sfm-navy font-bold">Seattle</text>
                    
                    {/* Bellevue - Major */}
                    <circle cx="150" cy="135" r="7" fill="#bc9833" className="drop-shadow-md" />
                    <text x="150" y="122" textAnchor="middle" className="text-[11px] fill-sfm-navy font-semibold">Bellevue</text>
                    
                    {/* Kirkland */}
                    <circle cx="148" cy="110" r="4" fill="#bc9833" />
                    <text x="165" y="108" textAnchor="start" className="text-[10px] fill-sfm-navy">Kirkland</text>
                    
                    {/* Redmond */}
                    <circle cx="175" cy="125" r="5" fill="#bc9833" />
                    <text x="192" y="123" textAnchor="start" className="text-[10px] fill-sfm-navy">Redmond</text>
                    
                    {/* Sammamish */}
                    <circle cx="190" cy="142" r="4" fill="#bc9833" />
                    <text x="207" y="145" textAnchor="start" className="text-[10px] fill-sfm-navy">Sammamish</text>
                    
                    {/* Mercer Island */}
                    <circle cx="135" cy="148" r="4" fill="#bc9833" />
                    <text x="135" y="165" textAnchor="middle" className="text-[10px] fill-sfm-navy">Mercer Is.</text>
                    
                    {/* Tacoma - Major */}
                    <circle cx="95" cy="185" r="7" fill="#bc9833" className="drop-shadow-md" />
                    <text x="78" y="190" textAnchor="end" className="text-[11px] fill-sfm-navy font-semibold">Tacoma</text>
                    
                    {/* Olympia */}
                    <circle cx="75" cy="218" r="5" fill="#bc9833" />
                    <text x="58" y="223" textAnchor="end" className="text-[10px] fill-sfm-navy">Olympia</text>
                    
                    {/* Vancouver */}
                    <circle cx="62" cy="252" r="5" fill="#bc9833" />
                    <text x="78" y="258" textAnchor="start" className="text-[10px] fill-sfm-navy">Vancouver</text>
                    
                    {/* Spokane - Major (Eastern WA) */}
                    <circle cx="430" cy="75" r="8" fill="#bc9833" className="drop-shadow-md" />
                    <text x="430" y="60" textAnchor="middle" className="text-[12px] fill-sfm-navy font-bold">Spokane</text>
                  </g>
                  
                  {/* Legend - positioned better */}
                  <g transform="translate(320, 245)">
                    <circle cx="8" cy="8" r="5" fill="#bc9833" />
                    <text x="22" y="12" className="text-[11px] fill-sfm-text-muted font-medium">Service Areas</text>
                  </g>
                  <g transform="translate(320, 268)">
                    <rect x="3" y="3" width="10" height="10" fill="#05436e" fillOpacity="0.12" stroke="#05436e" strokeWidth="1" rx="2" />
                    <text x="22" y="12" className="text-[11px] fill-sfm-text-muted font-medium">Statewide Coverage</text>
                  </g>
                </svg>
              </div>
              
              {/* City Links */}
              <div>
                <h3 className="font-display text-xl text-sfm-navy mb-4">Eastside &amp; Greater Seattle</h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <Link href="/locations/washington/seattle" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Seattle</span>
                  </Link>
                  <Link href="/locations/washington/bellevue" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Bellevue</span>
                  </Link>
                  <Link href="/locations/washington/kirkland" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Kirkland</span>
                  </Link>
                  <Link href="/locations/washington/redmond" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Redmond</span>
                  </Link>
                  <Link href="/locations/washington/sammamish" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Sammamish</span>
                  </Link>
                  <Link href="/locations/washington/mercer-island" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Mercer Island</span>
                  </Link>
                  <Link href="/locations/washington/everett" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Everett</span>
                  </Link>
                </div>
                
                <h3 className="font-display text-xl text-sfm-navy mb-4">South Sound &amp; Beyond</h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <Link href="/locations/washington/tacoma" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Tacoma</span>
                  </Link>
                  <Link href="/locations/washington/olympia" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Olympia</span>
                  </Link>
                  <Link href="/locations/washington/vancouver" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Vancouver</span>
                  </Link>
                  <Link href="/locations/washington/spokane" className="flex items-center gap-2 px-3 py-2 bg-sfm-cream rounded-lg hover:bg-sfm-gold/10 transition-colors group">
                    <MapPin className="w-3 h-3 text-sfm-gold" />
                    <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">Spokane</span>
                  </Link>
                </div>

                <div className="bg-sfm-cream rounded-xl p-4 border border-sfm-gold/20">
                  <p className="text-sm text-sfm-navy font-medium mb-1">
                    Statewide Virtual Coverage
                  </p>
                  <p className="text-sm text-sfm-text-muted">
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
            Founding members begin with a brief fit call. If aligned, onboarding and first visit scheduling follow.
          </p>
          <p className="text-white/40 text-sm mb-12 max-w-2xl mx-auto">
            This is a brief, non-clinical call to ensure alignment before enrollment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-12 py-5 group">
              <span>Book a 15-Minute Fit Call</span>
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
