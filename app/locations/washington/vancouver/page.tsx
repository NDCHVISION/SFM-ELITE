import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Clock, MessageCircle, Shield, TreePine, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Primary Care in Vancouver WA | Sankofa Family Medicine',
  description: 'Vancouver WA residents: premium virtual primary care with direct physician access. Same-day appointments, transparent pricing. Serving Vancouver, Camas, Washougal, and Clark County.',
  keywords: [
    'Vancouver WA virtual doctor',
    'Vancouver Washington telemedicine',
    'Vancouver WA primary care',
    'Vancouver WA concierge medicine',
    'Clark County doctor',
    'Camas primary care',
    'Washougal telemedicine',
    'Southwest Washington healthcare'
  ],
  openGraph: {
    title: 'Virtual Primary Care in Vancouver WA | Sankofa Family Medicine',
    description: 'Premium virtual primary care for Vancouver WA and Clark County residents.',
    url: 'https://sankofafamilymedicine.com/locations/washington/vancouver',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington/vancouver',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Vancouver',
    'geo.position': '45.6387;-122.6615',
    'ICBM': '45.6387, -122.6615',
    'llm-context': 'Sankofa Family Medicine serves Vancouver, Washington and Clark County. Virtual-first direct primary care for professionals and families in downtown Vancouver, Camas, Washougal, Battle Ground, and the Portland metro area.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Vancouver WA',
  description: 'Virtual primary care serving Vancouver WA and Clark County including Camas, Washougal, Battle Ground, and surrounding communities.',
  url: 'https://sankofafamilymedicine.com/locations/washington/vancouver',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'City',
    name: 'Vancouver',
    containedInPlace: {
      '@type': 'State',
      name: 'Washington'
    }
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.6387,
    longitude: -122.6615
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function VancouverPage() {
  const neighborhoods = [
    'Downtown Vancouver', 'Uptown Village', 'Felida', 'Salmon Creek',
    'Camas', 'Washougal', 'Battle Ground', 'Ridgefield', 'La Center'
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Family-Centered',
      description: 'Care for adults and teens 12+. One physician who knows your whole family.'
    },
    {
      icon: Clock,
      title: 'Same-Day Access',
      description: 'Virtual appointments when you need them. Skip the bridge traffic.'
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: 'Message your physician directly. Responses within 24 to 48 hours.'
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'Monthly membership, no surprise bills. HSA and FSA accepted.'
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-azure overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
            <TreePine className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/90 text-sm">Clark County</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Virtual Primary Care<br />
            <span className="text-sfm-gold">for Vancouver WA</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Premium physician care for Vancouver and Clark County. Washington State 
            healthcare without crossing the bridge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sankofafamilymedicine.atlas.md/hub/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors"
            >
              Become a Patient
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              View Membership Plans
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-3">
            All intake, scheduling, messaging, and visits occur securely inside Atlas.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
              Healthcare for Southwest Washington
            </h2>
            <p className="text-sfm-text-muted max-w-2xl mx-auto">
              From downtown to Camas, care designed for Clark County living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group p-6 rounded-2xl hover:bg-sfm-cream/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-4 bg-sfm-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-sfm-gold/20 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-sfm-gold" />
                </div>
                <h3 className="font-display text-xl text-sfm-navy mb-2">{benefit.title}</h3>
                <p className="text-sfm-text-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">
              Serving Clark County
            </h2>
            <p className="text-sfm-text-muted">
              Virtual care for Southwest Washington communities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm text-sfm-navy border border-sfm-azure/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sfm-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          {/* Now Accepting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Now Accepting Founding Members</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Begin Your Care with<br />
            <span className="text-sfm-gold">Medicine That Remembers</span><span className="text-sfm-gold text-xl align-top">&#8482;</span>
          </h2>
          <p className="text-white/60 mb-4">
            Complete your intake and schedule your first visit directly through our secure patient portal.
          </p>
          <p className="text-white/40 text-xs mb-8">
            All intake, scheduling, messaging, and visits occur securely inside Atlas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://sankofafamilymedicine.atlas.md/hub/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors"
            >
              Become a Patient
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/services" className="btn-secondary-white px-8 py-4">
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
