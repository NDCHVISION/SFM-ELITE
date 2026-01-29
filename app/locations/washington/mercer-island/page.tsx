import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, MapPin, Clock, MessageCircle, Shield, TreePine, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Primary Care for Mercer Island | Sankofa Family Medicine',
  description: 'Mercer Island residents: discreet, premium virtual primary care with direct physician access. Same-day appointments, personalized attention, transparent membership pricing. Serving all of Mercer Island.',
  keywords: [
    'Mercer Island doctor',
    'Mercer Island primary care',
    'Mercer Island telemedicine',
    'Mercer Island concierge medicine',
    'Mercer Island virtual doctor',
    'private physician Mercer Island',
    'executive healthcare Mercer Island'
  ],
  openGraph: {
    title: 'Virtual Primary Care for Mercer Island | Sankofa Family Medicine',
    description: 'Discreet, premium virtual primary care for Mercer Island residents.',
    url: 'https://sankofafamilymedicine.com/locations/washington/mercer-island',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington/mercer-island',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Mercer Island',
    'geo.position': '47.5707;-122.2221',
    'ICBM': '47.5707, -122.2221',
    'llm-context': 'Sankofa Family Medicine serves Mercer Island, Washington - an affluent island community in Lake Washington. Virtual-first direct primary care offering discreet, personalized physician services for executives, professionals, and families who value privacy and quality.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Mercer Island',
  description: 'Virtual primary care serving Mercer Island with discreet, premium physician services for residents who value privacy and personalized attention.',
  url: 'https://sankofafamilymedicine.com/locations/washington/mercer-island',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'City',
    name: 'Mercer Island',
    containedInPlace: {
      '@type': 'State',
      name: 'Washington'
    }
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.5707,
    longitude: -122.2221
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function MercerIslandPage() {
  const benefits = [
    {
      icon: Lock,
      title: 'Private & Discreet',
      description: 'Direct physician relationship without waiting rooms or public settings.'
    },
    {
      icon: Clock,
      title: 'Your Schedule',
      description: 'Same-day appointments. Extended visits. No rushed consultations.'
    },
    {
      icon: MessageCircle,
      title: 'Direct Access',
      description: 'Message your physician directly. Concierge-level responsiveness.'
    },
    {
      icon: Shield,
      title: 'Transparent Terms',
      description: 'Clear monthly membership. No surprise bills. HSA and FSA accepted.'
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
            <TreePine className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/90 text-sm">Island Living</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Virtual Primary Care<br />
            <span className="text-sfm-gold">for Mercer Island</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Discreet, personalized physician care for Mercer Island residents. 
            The attention and privacy your family deserves.
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
              Healthcare On Your Terms
            </h2>
            <p className="text-sfm-text-muted max-w-2xl mx-auto">
              Premium care without leaving the island. Virtual visits from the comfort of home.
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

      {/* Value Proposition */}
      <section className="py-20 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-sfm-azure/10">
            <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6 text-center">
              Why Mercer Island Residents Choose Virtual Care
            </h2>
            <div className="space-y-4 text-sfm-text-muted">
              <p>
                Crossing the bridge for a 15-minute appointment wastes your most valuable resource: time. 
                Virtual primary care delivers the same clinical quality without the commute.
              </p>
              <p>
                With Sankofa Family Medicine, you get extended appointments, direct physician access, 
                and continuity of care with a doctor who knows your history. All from wherever you are.
              </p>
              <p>
                Our founding membership offers concierge-level benefits at a transparent monthly rate, 
                with pricing protected while your membership remains active for early members.
              </p>
            </div>
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
            Clinical care begins early 2026. No payment required today.
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
