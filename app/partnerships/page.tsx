import Link from 'next/link'
import { ArrowRight, Shield, Brain, Building2, Heart, Users, Briefcase, CheckCircle2, Stethoscope } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Partnerships | Sankofa Family Medicine',
  description: 'Strategic healthcare partnerships powering Medicine That Remembers. Partner opportunities for employers, health systems, and community organizations in Washington State.',
  keywords: ['healthcare partnerships', 'employer health benefits', 'telehealth partnerships', 'corporate wellness', 'healthcare collaboration', 'concierge medicine employer benefits'],
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

      {/* Current Partners */}
      <section className="py-20 bg-sfm-navy relative overflow-hidden" aria-labelledby="current-partners">
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="current-partners" className="font-display text-3xl md:text-4xl text-white mb-4">
              Current Partners
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Organizations helping us deliver Medicine That Remembers™
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nexus Health */}
            <div className="bg-white/[0.05] border border-sfm-gold/30 rounded-2xl p-8 hover:bg-white/[0.08] transition-all hover:border-sfm-gold/50">
              <div className="w-12 h-12 mb-6 bg-sfm-gold/20 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-white mb-3">Nexus Health</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Clinical decision support through BioMatrix™, providing genomic and laboratory analysis integrated into our care workflows.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/sankofa-os#nexus-health"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-sfm-gold text-sfm-navy font-semibold rounded-lg hover:bg-sfm-gold-light transition-all shadow-lg shadow-sfm-gold/25"
                >
                  Learn About Integration
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://nexushealth.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/15 border border-white/20 transition-all"
                >
                  Visit Nexus Health
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Future Partners Placeholder */}
            <div className="bg-white/[0.03] border border-sfm-gold/20 border-dashed rounded-2xl p-8 opacity-70">
              <div className="w-12 h-12 mb-6 bg-sfm-gold/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-sfm-gold/60" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-white/70 mb-3">Coming Soon</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                Additional strategic partnerships that amplify our commitment to precision, continuity, and equitable care.
              </p>
              <p className="text-white/40 text-sm font-medium">More partnerships launching in 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-sfm-navy relative overflow-hidden" aria-labelledby="opportunities">
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="opportunities" className="font-display text-3xl md:text-4xl text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
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
                    ? 'bg-emerald-500/20 text-emerald-300' 
                    : 'bg-amber-500/20 text-amber-300'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    item.status === 'Accepting Inquiries' ? 'bg-emerald-400' : 'bg-amber-400'
                  }`} aria-hidden="true" />
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-sfm-navy relative overflow-hidden" aria-labelledby="why-partner">
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          <div className="absolute top-1/3 -left-96 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-96 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="why-partner" className="font-display text-3xl text-white mb-4">
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
                <div className="w-12 h-12 bg-sfm-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />
        </div>
        
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold hover:bg-sfm-gold-light text-sfm-navy font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
