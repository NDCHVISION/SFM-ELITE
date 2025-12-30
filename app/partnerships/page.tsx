import Link from 'next/link'
import { ArrowRight, Shield, Brain, Building2, Heart, Users, Briefcase, CheckCircle2, Stethoscope } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Partnerships | Sankofa Family Medicine',
  description: 'Strategic healthcare partnerships powering Medicine That Remembers. Partner opportunities for employers, health systems, and community organizations in Washington State.',
  keywords: ['healthcare partnerships', 'employer health benefits', 'telehealth partnerships', 'corporate wellness', 'healthcare collaboration', 'DPC employer benefits'],
  openGraph: {
    title: 'Healthcare Partnerships | Sankofa Family Medicine',
    description: 'Strategic partnerships powering precision primary care.',
    url: 'https://sankofafamilymedicine.com/partnerships',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Healthcare Partnerships',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Partnerships | Sankofa Family Medicine',
    description: 'Strategic partnerships powering precision primary care.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/partnerships',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'ai-content-declaration': 'human-authored',
    'content-type': 'Partnerships',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" aria-hidden="true" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <Users className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Strategic Partnerships</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Partners in Better Care
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" />
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            We collaborate with organizations that share our commitment to patient-centered, 
            relationship-driven healthcare.
          </p>
        </div>
      </section>

      {/* Current Partners - Simple mention */}
      <section className="py-16 bg-white" aria-labelledby="current-partners">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4 font-medium">Clinical Infrastructure</p>
          <p className="text-sfm-navy/70 text-lg">
            Our{' '}
            <Link href="/sankofa-os" className="text-sfm-azure hover:text-sfm-navy font-medium underline underline-offset-4 decoration-sfm-gold/50 hover:decoration-sfm-gold transition-colors">
              Sankofa OS
            </Link>
            {' '}platform delivers advanced clinical decision support through BioMatrix integration.
          </p>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-sfm-cream" aria-labelledby="opportunities">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="opportunities" className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-sfm-navy/60 max-w-2xl mx-auto">
              We are building relationships with organizations committed to transforming healthcare delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Employers',
                description: 'Offer your team access to premium virtual primary care with meaningful physician relationships, reducing healthcare costs while improving employee health outcomes.',
                benefits: ['Reduced absenteeism', 'Lower healthcare spend', 'Happier, healthier teams'],
                status: 'Accepting Inquiries',
              },
              {
                icon: Stethoscope,
                title: 'Health Systems',
                description: 'Collaborate on innovative care models that prioritize continuity, patient outcomes, and physician satisfaction in the evolving healthcare landscape.',
                benefits: ['Extended care reach', 'Patient retention', 'Quality metrics improvement'],
                status: 'Accepting Inquiries',
              },
              {
                icon: Heart,
                title: 'Community Organizations',
                description: 'Partner to expand access to quality primary care for underserved populations across Washington State and beyond.',
                benefits: ['Health equity advancement', 'Community impact', 'Preventive care access'],
                status: 'Future Initiative',
              },
            ].map((item) => (
              <div 
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-sfm-gold/10 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 mb-6 bg-sfm-azure/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-sfm-azure" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                <p className="text-sfm-navy/60 text-sm leading-relaxed mb-4">{item.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-sfm-navy/70">
                      <CheckCircle2 className="w-4 h-4 text-sfm-gold flex-shrink-0" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Accepting Inquiries' 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'bg-sfm-cream text-sfm-navy/50'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    item.status === 'Accepting Inquiries' ? 'bg-emerald-500' : 'bg-sfm-navy/30'
                  }`} aria-hidden="true" />
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white" aria-labelledby="why-partner">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="why-partner" className="font-display text-3xl text-sfm-navy mb-4">
              Why Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Clinical Excellence',
                description: 'Board-certified physician leadership with evidence-based protocols and continuous quality improvement.',
              },
              {
                icon: Brain,
                title: 'Innovation Ready',
                description: 'Modern technology infrastructure including Sankofa OS for seamless integration and data-driven insights.',
              },
              {
                icon: Heart,
                title: 'Patient-Centered',
                description: 'Every decision guided by what is best for patients, not administrative convenience or volume metrics.',
              },
              {
                icon: Users,
                title: 'Relationship Focused',
                description: 'We build lasting partnerships based on shared values, transparency, and mutual success.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-sfm-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-sfm-navy mb-2">{item.title}</h3>
                  <p className="text-sfm-navy/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sfm-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-spiral-gold pattern-subtle" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" aria-hidden="true" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Start a Conversation
          </h2>
          <p className="text-white/60 mb-8">
            We review every inquiry personally. Share your vision and let us explore how we might work together 
            to improve healthcare in Washington State.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold hover:bg-sfm-gold-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
