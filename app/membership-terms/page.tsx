import Link from 'next/link'
import { ArrowRight, FileText, Shield, Clock, AlertTriangle, DollarSign, MapPin, Mail, Phone, Stethoscope, Heart, Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membership Terms | Sankofa Family Medicine',
  description: 'Detailed membership terms, pricing, inclusions, access boundaries, and policies for Sankofa Family Medicine Concierge Primary Care plans.',
  keywords: ['membership terms', 'concierge care', 'DPC', 'direct primary care', 'membership pricing', 'healthcare membership', 'primary care terms'],
  openGraph: {
    title: 'Membership Terms | Sankofa Family Medicine',
    description: 'Detailed membership terms, pricing, inclusions, access boundaries, and policies for Sankofa Family Medicine Concierge Primary Care plans.',
    url: 'https://sankofafamilymedicine.com/membership-terms',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Membership Terms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Membership Terms | Sankofa Family Medicine',
    description: 'Detailed membership terms, pricing, inclusions, access boundaries, and policies for Sankofa Family Medicine Concierge Primary Care plans.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/membership-terms',
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
    'content-type': 'Membership Terms',
    'medical-specialty': 'Primary Care, Family Medicine, Direct Primary Care',
    'service-area': 'Washington State, USA',
    'care-model': 'Direct Primary Care (DPC), Concierge Medicine',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
    { '@type': 'ListItem', position: 2, name: 'Membership Terms', item: 'https://sankofafamilymedicine.com/membership-terms' },
  ],
}

const tiers = [
  {
    name: 'Continuity Concierge',
    tagline: 'Concierge Primary Care delivered under a Direct Primary Care (DPC) model',
    priceMonthly: '$225 - $275/month',
    priceAnnual: 'Save 10% when you prepay annually — $2,430–$2,970/year (optional annual prepayment)',
    features: [
      'Physician-led virtual primary care visits',
      'Same-day or next-day appointments when available',
      'Secure non-urgent messaging',
      'Initial consultation (45 min)',
      'Chronic condition management',
      'Medication management',
      'Preventive and longitudinal care planning',
      'Ongoing care coordination',
      'Access to wholesale laboratory pricing',
    ],
    accessNotes: 'Clinical communication via secure patient portal during business hours; After-hours messaging, urgent consultations, and on-call access are not included; Services during standard business hours only',
    icon: Heart,
    color: 'sfm-azure',
  },
  {
    name: 'Precision Concierge',
    tagline: 'Concierge Primary Care delivered under a Direct Primary Care (DPC) model',
    priceMonthly: '$325 - $375/month',
    priceAnnual: 'Save 10% when you prepay annually — $3,510–$4,050/year (optional annual prepayment)',
    features: [
      'Everything in Continuity',
      'Advanced laboratory review and interpretation',
      'Cardiometabolic risk assessment',
      'Periodic health reviews',
      'Genetic testing interpretation (test costs separate)',
      'Pharmacogenomic guidance',
      'Extended visit times when clinically appropriate',
      'Priority scheduling when available',
    ],
    accessNotes: 'Includes Continuity access boundaries; Limited after-hours messaging for clinical clarification (not urgent care); Genetic testing and advanced labs billed separately',
    icon: Stethoscope,
    color: 'sfm-gold',
  },
  {
    name: 'Executive Concierge',
    tagline: 'Concierge Primary Care delivered under a Direct Primary Care (DPC) model',
    priceMonthly: '$650 - $725/month',
    priceAnnual: 'Save 10% when you prepay annually — $7,020–$7,830/year (optional annual prepayment)',
    features: [
      'Everything in Precision',
      'Priority scheduling',
      'Extended after-hours messaging availability',
      'Expanded access pathways for defined urgent needs, subject to clinical appropriateness and availability (NOT direct cell phone access)',
      'Enhanced care coordination with specialists',
      'Comprehensive executive health planning',
      'Annual comprehensive health review',
      'Physician confirmation required for enrollment',
    ],
    accessNotes: 'After-hours availability subject to physician discretion; Not a substitute for emergency services; "Executive Concierge does not provide unrestricted or continuous physician availability; access is routed through established triage and care coordination workflows, and the Practice may decline requests that fall outside the scope of primary care or are not clinically appropriate."',
    icon: Users,
    color: 'sfm-navy',
    highlight: true,
  },
]

export default function MembershipTermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
          <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <FileText className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Membership Agreement</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Membership Terms
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Concierge Primary Care delivered under a Direct Primary Care (DPC) model
            </p>
            <p className="text-white/50 text-sm mt-6">Last updated: January 2026</p>
          </div>
        </section>

        {/* Back to Membership Plans Link */}
        <section className="py-6 bg-sfm-cream border-b border-sfm-gold/20">
          <div className="max-w-4xl mx-auto px-6">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors duration-300 group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Membership Plans</span>
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-16">
              
              {/* 1. OVERVIEW */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl text-sfm-navy mb-4">Overview</h2>
                    <div className="space-y-4 text-sfm-navy/70 leading-relaxed">
                      <p>
                        Membership provides access to physician-led Concierge Primary Care under the Direct Primary Care (DPC) model (RCW 48.150).
                      </p>
                      <p>
                        Membership is not health insurance and does not replace the need for comprehensive health coverage.
                      </p>
                      <p>
                        All services are subject to clinical appropriateness and physician judgment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. TIER SUMMARIES */}
              <div>
                <h2 className="font-display text-3xl text-sfm-navy mb-8">Tier Summaries</h2>
                <div className="space-y-8">
                  {tiers.map((tier, index) => (
                    <div 
                      key={tier.name}
                      className={`rounded-3xl border-2 overflow-hidden ${
                        tier.highlight 
                          ? 'border-sfm-gold shadow-gold' 
                          : 'border-sfm-gold/20'
                      }`}
                    >
                      {/* Tier Header */}
                      <div className={`p-6 md:p-8 ${
                        tier.highlight 
                          ? 'bg-gradient-to-br from-sfm-navy to-sfm-navy-light' 
                          : 'bg-sfm-cream'
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            tier.highlight 
                              ? 'bg-sfm-gold/20' 
                              : 'bg-white'
                          }`}>
                            <tier.icon className={`w-7 h-7 ${
                              tier.highlight 
                                ? 'text-sfm-gold' 
                                : `text-${tier.color}`
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-display text-2xl md:text-3xl mb-2 ${
                              tier.highlight 
                                ? 'text-white' 
                                : 'text-sfm-navy'
                            }`}>
                              {tier.name}
                            </h3>
                            <p className={`text-sm mb-4 ${
                              tier.highlight 
                                ? 'text-white/60' 
                                : 'text-sfm-navy/60'
                            }`}>
                              {tier.tagline}
                            </p>
                            <div className="space-y-2">
                              <div className={`font-display text-xl md:text-2xl ${
                                tier.highlight 
                                  ? 'text-sfm-gold' 
                                  : 'text-sfm-navy'
                              }`}>
                                {tier.priceMonthly}
                              </div>
                              <p className={`text-sm ${
                                tier.highlight 
                                  ? 'text-white/80' 
                                  : 'text-sfm-navy/70'
                              }`}>
                                {tier.priceAnnual}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tier Features */}
                      <div className="p-6 md:p-8 bg-white">
                        <h4 className="font-display text-xl text-sfm-navy mb-4">Included Services</h4>
                        <div className="space-y-3 mb-6">
                          {tier.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-sfm-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-sfm-gold" />
                              </div>
                              <span className="text-sfm-navy/70 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Access Notes */}
                        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h5 className="font-medium text-amber-900 mb-2">Access & Availability</h5>
                              <p className="text-amber-800 text-sm leading-relaxed">{tier.accessNotes}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. SERVICE HOURS & COMMUNICATION */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-azure/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-sfm-azure" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl text-sfm-navy mb-4">Service Hours & Communication</h2>
                    <div className="space-y-4 text-sfm-navy/70 leading-relaxed">
                      <p>
                        Standard business hours for clinical communication are Monday through Friday, 9 AM to 5 PM Pacific Time.
                      </p>
                      <p>
                        The secure patient portal is the primary communication channel for all clinical and administrative matters.
                      </p>
                      <p>
                        After-hours messaging availability varies by membership tier and is subject to the access boundaries outlined above.
                      </p>
                      <p>
                        There is no guarantee of immediate response to any message; typical response is by the next business day, though response times may vary based on clinical volume and physician availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. ACCESS BOUNDARIES */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl text-sfm-navy mb-4">Access Boundaries</h2>
                    <div className="space-y-4 text-sfm-navy/70 leading-relaxed">
                      <p>
                        No membership tier provides unrestricted or continuous physician availability.
                      </p>
                      <p>
                        The Practice may decline requests that fall outside the scope of primary care or are not clinically appropriate.
                      </p>
                      <p>
                        Emergency care, hospital care, and specialty care are excluded from membership and must be obtained through appropriate channels.
                      </p>
                      <p>
                        Appointment availability is subject to panel capacity and physician discretion.
                      </p>
                    </div>

                    {/* Emergency Notice */}
                    <div className="mt-6 p-4 bg-red-100 rounded-xl border border-red-200">
                      <p className="text-red-800 font-medium text-sm flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        For medical emergencies, call 911 immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. BILLING & PREPAYMENT */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl text-sfm-navy mb-4">Billing & Prepayment</h2>
                    <div className="space-y-4 text-sfm-navy/70 leading-relaxed">
                      <p>
                        Monthly direct fees are charged in accordance with Washington State Direct Primary Care statute (RCW 48.150).
                      </p>
                      <p>
                        Annual prepayment option: Members may choose to prepay for 12 months of service at a 10% discount. The calculation is: 12 months × monthly fee × 0.90.
                      </p>
                      <p>
                        Prepaid amounts are held in trust and applied monthly as earned by the Practice.
                      </p>
                      <p>
                        Unearned prepaid amounts are refundable in accordance with the Membership Agreement upon termination.
                      </p>
                      <p>
                        Third-party costs are billed separately and are not included in membership fees. These may include laboratory testing, imaging, medications, specialty referrals, genetic testing, and other ancillary services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. GENERAL TERMS */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-navy/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-sfm-navy" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl text-sfm-navy mb-4">General Terms</h2>
                    <div className="space-y-4 text-sfm-navy/70 leading-relaxed">
                      <p>
                        <strong className="text-sfm-navy">Geographic Limitation:</strong> Telehealth services are provided only to patients located in Washington State at the time of service.
                      </p>
                      <p>
                        <strong className="text-sfm-navy">Controlled Substance Policy:</strong> Prescribing of controlled substances is at physician discretion; generally, controlled substances for chronic pain or high-risk conditions are not prescribed via telehealth.
                      </p>
                      <p>
                        <strong className="text-sfm-navy">No Guarantees:</strong> Membership does not guarantee improved health outcomes, disease prevention, or reduced healthcare costs.
                      </p>
                      <p>
                        <strong className="text-sfm-navy">Termination:</strong> Either the patient or the Practice may terminate membership in accordance with the terms outlined in the Membership Agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. CONTACT */}
              <div className="bg-sfm-cream rounded-3xl p-8 md:p-10 border border-sfm-gold/20">
                <h2 className="font-display text-3xl text-sfm-navy mb-6">Questions About Membership Terms?</h2>
                <p className="text-sfm-navy/70 mb-8">
                  For questions regarding these membership terms, please contact the Practice directly:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="mailto:info@sankofafamilymedicine.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center group-hover:bg-sfm-gold/20 transition-colors">
                      <Mail className="w-6 h-6 text-sfm-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-sfm-navy/50">Email</p>
                      <p className="text-sfm-azure font-medium">info@sankofafamilymedicine.com</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+14252857390"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sfm-azure/10 flex items-center justify-center group-hover:bg-sfm-azure/20 transition-colors">
                      <Phone className="w-6 h-6 text-sfm-azure" />
                    </div>
                    <div>
                      <p className="text-sm text-sfm-navy/50">Phone</p>
                      <p className="text-sfm-azure font-medium">+1 (425) 285-7390</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary">
                    Visit Contact Page
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-sfm-cream border-t border-sfm-gold/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sfm-navy/60 mb-6">Ready to explore our membership plans?</p>
            <Link href="/services" className="btn-primary">
              View Membership Plans
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
