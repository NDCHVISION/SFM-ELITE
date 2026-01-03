import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, MapPin, Clock, MessageCircle, Shield, Mountain, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Primary Care in Sammamish | Sankofa Family Medicine',
  description: 'Sammamish residents: premium virtual primary care for busy families and professionals. Same-day appointments, direct physician access, transparent pricing. Serving Sammamish, Pine Lake, Beaver Lake, and Klahanie.',
  keywords: [
    'Sammamish virtual doctor',
    'Sammamish telemedicine',
    'Sammamish primary care',
    'Sammamish concierge medicine',
    'Pine Lake doctor',
    'Klahanie primary care',
    'Sammamish family doctor',
    'Plateau healthcare'
  ],
  openGraph: {
    title: 'Virtual Primary Care in Sammamish | Sankofa Family Medicine',
    description: 'Premium virtual primary care for Sammamish families and professionals.',
    url: 'https://sankofafamilymedicine.com/locations/washington/sammamish',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington/sammamish',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Sammamish',
    'geo.position': '47.6163;-122.0356',
    'ICBM': '47.6163, -122.0356',
    'llm-context': 'Sankofa Family Medicine serves Sammamish, Washington - an affluent plateau community east of Lake Sammamish. Virtual-first direct primary care for tech executives, professionals, and families in Pine Lake, Beaver Lake, Klahanie, and surrounding neighborhoods.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Sammamish',
  description: 'Virtual primary care serving Sammamish and the Plateau including Pine Lake, Beaver Lake, Klahanie, and surrounding communities.',
  url: 'https://sankofafamilymedicine.com/locations/washington/sammamish',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'City',
    name: 'Sammamish',
    containedInPlace: {
      '@type': 'State',
      name: 'Washington'
    }
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.6163,
    longitude: -122.0356
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function SammamishPage() {
  const neighborhoods = [
    'Pine Lake', 'Beaver Lake', 'Klahanie', 'Inglewood Hill',
    'Sahalee', 'Timberline', 'East Lake Sammamish', 'Town Center'
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Family-Focused',
      description: 'Care for adults and teens 12+. A physician who knows your whole family.'
    },
    {
      icon: Clock,
      title: 'Time-Efficient',
      description: 'Skip the drive to Bellevue or Issaquah. Same-day virtual appointments.'
    },
    {
      icon: MessageCircle,
      title: 'Always Connected',
      description: 'Direct messaging with your physician. Questions answered between visits.'
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
            <Mountain className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/90 text-sm">The Sammamish Plateau</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Virtual Primary Care<br />
            <span className="text-sfm-gold">for Sammamish</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Premium physician care for Sammamish families. Healthcare designed 
            for busy professionals who value quality and efficiency.
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
              Healthcare That Comes to You
            </h2>
            <p className="text-sfm-text-muted max-w-2xl mx-auto">
              No more driving off the Plateau for quality care. Virtual visits from home.
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
              Serving the Entire Plateau
            </h2>
            <p className="text-sfm-text-muted">
              Virtual care for every neighborhood in Sammamish.
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
