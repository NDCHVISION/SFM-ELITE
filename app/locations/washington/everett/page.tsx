import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Clock, MessageCircle, Shield, Plane, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Primary Care in Everett | Sankofa Family Medicine',
  description: 'Everett residents: premium virtual primary care with direct physician access. Same-day appointments, transparent pricing. Serving Everett, Marysville, Lake Stevens, and Snohomish County.',
  keywords: [
    'Everett virtual doctor',
    'Everett telemedicine',
    'Everett primary care',
    'Everett concierge medicine',
    'Snohomish County doctor',
    'Marysville primary care',
    'Lake Stevens telemedicine',
    'Boeing employee doctor'
  ],
  openGraph: {
    title: 'Virtual Primary Care in Everett | Sankofa Family Medicine',
    description: 'Premium virtual primary care for Everett and Snohomish County residents.',
    url: 'https://sankofafamilymedicine.com/locations/washington/everett',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington/everett',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Everett',
    'geo.position': '47.9790;-122.2021',
    'ICBM': '47.9790, -122.2021',
    'llm-context': 'Sankofa Family Medicine serves Everett, Washington and Snohomish County. Virtual-first direct primary care for aerospace professionals, families, and residents in downtown Everett, Marysville, Lake Stevens, Mukilteo, and surrounding communities.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Everett',
  description: 'Virtual primary care serving Everett and Snohomish County including Marysville, Lake Stevens, Mukilteo, and surrounding communities.',
  url: 'https://sankofafamilymedicine.com/locations/washington/everett',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'City',
    name: 'Everett',
    containedInPlace: {
      '@type': 'State',
      name: 'Washington'
    }
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.9790,
    longitude: -122.2021
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function EverettPage() {
  const neighborhoods = [
    'Downtown Everett', 'Bayside', 'Port Gardner', 'Mukilteo',
    'Marysville', 'Lake Stevens', 'Snohomish', 'Mill Creek', 'Lynnwood'
  ]

  const benefits = [
    {
      icon: Plane,
      title: 'Shift-Friendly Care',
      description: 'Virtual appointments that work around manufacturing and rotating schedules.'
    },
    {
      icon: Clock,
      title: 'Same-Day Access',
      description: 'Appointments when you need them. No weeks-long waits for routine care.'
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
            <Plane className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/90 text-sm">Snohomish County</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Virtual Primary Care<br />
            <span className="text-sfm-gold">for Everett</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Premium physician care for Everett and Snohomish County. Healthcare 
            designed for busy professionals and families.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sankofafamilymedicine.atlas.md/hub/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors"
            >
              Founding Member Enrollment Now Open
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
              Healthcare That Fits Your Schedule
            </h2>
            <p className="text-sfm-text-muted max-w-2xl mx-auto">
              From downtown to Lake Stevens, care designed for Snohomish County.
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
              Serving Snohomish County
            </h2>
            <p className="text-sfm-text-muted">
              Virtual care for communities throughout the North Sound.
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
            Enrollment begins in Atlas. Complete your intake and schedule your first visit directly through our secure patient portal.
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
              Founding Member Enrollment Now Open
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
