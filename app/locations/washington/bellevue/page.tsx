import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, MapPin, Clock, MessageCircle, Shield, Video, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Primary Care in Bellevue | Sankofa Family Medicine',
  description: 'Bellevue residents and tech professionals: access premium virtual primary care that fits your schedule. Same-day appointments, direct physician access, transparent pricing.',
  keywords: [
    'Bellevue virtual doctor',
    'Bellevue telemedicine',
    'Bellevue primary care',
    'Eastside doctor',
    'Bellevue DPC',
    'Redmond primary care',
    'Kirkland virtual doctor',
    'Eastside telemedicine'
  ],
  openGraph: {
    title: 'Virtual Primary Care in Bellevue | Sankofa Family Medicine',
    description: 'Premium virtual primary care for Bellevue and Eastside residents.',
    url: 'https://sankofafamilymedicine.com/locations/washington/bellevue',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/washington/bellevue',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Bellevue',
    'geo.position': '47.6101;-122.2015',
    'ICBM': '47.6101, -122.2015',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - Bellevue',
  description: 'Virtual primary care serving Bellevue and the Eastside including Redmond, Kirkland, Issaquah, and surrounding areas.',
  url: 'https://sankofafamilymedicine.com/locations/washington/bellevue',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'City',
    name: 'Bellevue',
    containedInPlace: {
      '@type': 'State',
      name: 'Washington'
    }
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.6101,
    longitude: -122.2015
  },
  isAcceptingNewPatients: true,
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function BellevuePage() {
  const eastsideCities = [
    'Bellevue', 'Redmond', 'Kirkland', 'Issaquah', 'Sammamish',
    'Woodinville', 'Bothell', 'Newcastle', 'Mercer Island', 'Factoria'
  ]

  const benefits = [
    {
      icon: Building2,
      title: 'Built for Busy Professionals',
      description: 'Virtual appointments that fit between meetings. No time lost to commuting.'
    },
    {
      icon: Clock,
      title: 'Responsive Care',
      description: 'Same-day appointments. Direct messaging with 24 to 48 hour response times.'
    },
    {
      icon: MessageCircle,
      title: 'Continuous Relationship',
      description: 'One physician who knows your history, your goals, your context.'
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
            <MapPin className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/90 text-sm">Serving the Eastside</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Virtual Primary Care<br />
            <span className="text-sfm-gold">for Bellevue</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Healthcare designed for Eastside professionals. Premium physician care 
            that respects your time and your intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors"
            >
              Book a 15-Minute Fit Call
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
            This is a brief, non-clinical call to ensure alignment before enrollment.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
              Healthcare That Works Like You Do
            </h2>
            <p className="text-sfm-text-muted max-w-2xl mx-auto">
              Built for professionals who value efficiency, transparency, and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-sfm-gold/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-sfm-gold" />
                </div>
                <h3 className="font-display text-xl text-sfm-navy mb-2">{benefit.title}</h3>
                <p className="text-sfm-text-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">
              Serving the Entire Eastside
            </h2>
            <p className="text-sfm-text-muted">
              From Bellevue to Issaquah, we provide care across the Eastside.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {eastsideCities.map((city, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm text-sfm-navy border border-sfm-azure/10"
              >
                {city}
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
            Founding members begin with a brief fit call. If aligned, onboarding and first visit scheduling follow.
          </p>
          <p className="text-white/40 text-xs mb-8">
            This is a brief, non-clinical call to ensure alignment before enrollment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-colors"
            >
              Book a 15-Minute Fit Call
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
