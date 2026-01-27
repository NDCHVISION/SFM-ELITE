import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Clock, MessageCircle, Shield, Anchor, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Primary Care in Tacoma | Sankofa Family Medicine',
  description: 'Tacoma residents: premium virtual primary care with direct physician access. Same-day appointments, transparent pricing, continuity of care. Serving Tacoma, University Place, Lakewood, and Pierce County.',
  keywords: [
    'Tacoma virtual doctor',
    'Tacoma telemedicine',
    'Tacoma primary care',
    'Tacoma concierge medicine',
    'Pierce County doctor',
    'University Place primary care',
    'Lakewood telemedicine'
  ],
  openGraph: {
    title: 'Virtual Primary Care in Tacoma | Sankofa Family Medicine',
    description: 'Premium virtual primary care for Tacoma and Pierce County residents.',
    url: 'https://sankofafamilymedicine.com/locations/washington/tacoma',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington/tacoma',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Tacoma',
    'geo.position': '47.2529;-122.4443',
    'ICBM': '47.2529, -122.4443',
    'llm-context': 'Sankofa Family Medicine serves Tacoma, Washington and Pierce County. Virtual-first direct primary care for professionals, families, and port workers in Stadium District, North End, University Place, Lakewood, and surrounding communities.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Tacoma',
  description: 'Virtual primary care serving Tacoma and Pierce County including University Place, Lakewood, Puyallup, and surrounding communities.',
  url: 'https://sankofafamilymedicine.com/locations/washington/tacoma',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'City',
    name: 'Tacoma',
    containedInPlace: {
      '@type': 'State',
      name: 'Washington'
    }
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.2529,
    longitude: -122.4443
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function TacomaPage() {
  const neighborhoods = [
    'Stadium District', 'North End', 'Proctor', 'Old Town',
    'University Place', 'Lakewood', 'Fircrest', 'Ruston', 'Puyallup'
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Family Medicine',
      description: 'Care for adults and teens 12+. One physician who knows your whole family.'
    },
    {
      icon: Clock,
      title: 'Same-Day Access',
      description: 'Virtual appointments when you need them. No weeks-long waits.'
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
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-azure overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
            <Anchor className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/90 text-sm">City of Destiny</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Virtual Primary Care<br />
            <span className="text-sfm-gold">for Tacoma</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Premium physician care for Tacoma and Pierce County. Healthcare 
            that fits your schedule without sacrificing quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/founders-waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors"
            >
              Join the Founders Waitlist
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              View Membership Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
              Healthcare That Works for Tacoma
            </h2>
            <p className="text-sfm-text-muted max-w-2xl mx-auto">
              From the Stadium District to University Place, care designed for South Sound living.
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
              Serving Tacoma &amp; Pierce County
            </h2>
            <p className="text-sfm-text-muted">
              Virtual care for every neighborhood in the South Sound.
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
            <span className="text-white/80 text-sm font-medium">Founders Waitlist Now Open</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Begin Your Care with<br />
            <span className="text-sfm-gold">Medicine That Remembers</span><span className="text-sfm-gold text-xl align-top">&#8482;</span>
          </h2>
          <p className="text-white/60 mb-8">
            Enrollment begins February 2026. No payment required today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/founders-waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors"
            >
              Join the Founders Waitlist
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
