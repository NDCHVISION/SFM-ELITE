import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, CheckCircle2, MapPin, Clock, MessageCircle, Shield, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Primary Care in Tri-Cities | Sankofa Family Medicine',
  description: 'Tri-Cities residents: access premium virtual primary care from anywhere. Same-day appointments, direct physician messaging, no insurance hassles. Serving Kennewick, Pasco, Richland, and surrounding communities.',
  keywords: [
    'Tri-Cities virtual doctor',
    'Tri-Cities telemedicine',
    'Kennewick virtual doctor',
    'Pasco telemedicine',
    'Richland primary care',
    'Tri-Cities concierge medicine',
    'Kennewick primary care',
    'Pasco doctor',
    'Richland telemedicine',
    'virtual doctor Tri-Cities WA'
  ],
  openGraph: {
    title: 'Virtual Primary Care in Tri-Cities | Sankofa Family Medicine',
    description: 'Premium virtual primary care for Tri-Cities residents. One physician who knows your history.',
    url: 'https://sankofafamilymedicine.com/locations/washington/tri-cities',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington/tri-cities',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Tri-Cities',
    'geo.position': '46.2396;-119.2294',
    'ICBM': '46.2396, -119.2294',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Tri-Cities',
  description: 'Virtual primary care serving Tri-Cities and surrounding communities including Kennewick, Pasco, Richland, West Richland, Finley, Burbank, Benton City, Prosser, Connell, and Basin City.',
  url: 'https://sankofafamilymedicine.com/locations/washington/tri-cities',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'City',
    name: 'Tri-Cities',
    containedInPlace: {
      '@type': 'State',
      name: 'Washington'
    }
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.2396,
    longitude: -119.2294
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
  availableService: {
    '@type': 'MedicalProcedure',
    name: 'Virtual Primary Care',
    description: 'Comprehensive telehealth primary care for Tri-Cities residents'
  }
}

export default function TriCitiesPage() {
  const neighborhoods = [
    'Kennewick', 'Pasco', 'Richland', 'West Richland', 'Finley',
    'Burbank', 'Benton City', 'Prosser', 'Connell', 'Basin City'
  ]

  const benefits = [
    {
      icon: Video,
      title: 'Skip the Drive',
      description: 'No driving across the Tri-Cities or searching for parking. Quality care from your home or office.'
    },
    {
      icon: Clock,
      title: 'Same-Day Access',
      description: 'Appointments available within 24 hours, often same-day. No weeks-long waits.'
    },
    {
      icon: MessageCircle,
      title: 'Direct Messaging',
      description: 'Text or message Dr. Nkrumah directly. Responses within 24 to 48 hours.'
    },
    {
      icon: Shield,
      title: 'No Insurance Games',
      description: 'Transparent monthly membership. No copays, no surprise bills, no prior authorizations.'
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
            <MapPin className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/90 text-sm">Now Serving Tri-Cities</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Virtual Primary Care<br />
            <span className="text-sfm-gold">for Tri-Cities</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Premium concierge primary care serving Kennewick, Pasco, and Richland. 
            One doctor who knows your history, available when you need them.
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
              Why Tri-Cities Chooses Virtual Care
            </h2>
            <p className="text-sfm-text-muted max-w-2xl mx-auto">
              Your time matters. Skip the traffic, the waiting rooms, and the rushed appointments.
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
              Serving the Tri-Cities Area
            </h2>
            <p className="text-sfm-text-muted">
              From Kennewick to Pasco to Richland, we provide care to residents across the region.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((neighborhood, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm text-sfm-navy border border-sfm-azure/10"
              >
                {neighborhood}
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
