import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Concierge Medicine? | Traditional vs. Sankofa Concierge Membership Comparison',
  description: 'Sankofa Family Medicine is a virtual-first concierge medicine practice. Compare: 15 min vs 30-60 min visits, 26-day waits vs same-day access, 2,300 patients vs approximately 200. See why concierge primary care offers a better relationship with your physician.',
  keywords: ['concierge medicine comparison', 'concierge vs traditional', 'Washington State concierge medicine', 'Medicine That Remembers', 'healthcare fragmentation', 'virtual primary care'],
  openGraph: {
    title: 'Why Concierge Medicine? | Traditional vs. Sankofa Concierge Membership Comparison',
    description: 'See the evidence-based differences: 15 min vs 30-60 min visits, 26-day waits vs same-day access. Concierge primary care offers a better relationship with your physician.',
    url: 'https://sankofafamilymedicine.com/compare',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compare Traditional vs Concierge Medicine Sankofa Family Medicine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Concierge Medicine? | Sankofa Family Medicine',
    description: 'See the evidence-based differences: 15 min vs 30-60 min visits, 26-day waits vs same-day access.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/compare',
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
    'content-type': 'Comparison',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: 'Healthcare Model Comparison',
      description: 'Side-by-side evidence-based comparison between typical insurance-based primary care and Concierge Medicine',
      specialty: { '@type': 'MedicalSpecialty', name: 'Family Medicine' },
      publisher: {
        '@type': 'MedicalBusiness',
        name: 'Sankofa Family Medicine',
        areaServed: { '@type': 'State', name: 'Washington' },
        priceRange: '$149-$449/month',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long is a typical primary care appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical insurance-based primary care averages 15 minutes. Concierge medicine practices like Sankofa offer 30 to 60 minute visits.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many patients does a typical doctor have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical practices average 2,300+ patients per physician. Concierge practices like Sankofa have approximately 200 patients per physician, enabling personalized care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I message my doctor directly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In typical insurance-based care, patients use patient portals with 48+ hour response times. Sankofa offers direct secure messaging with responses within one business day, Monday through Friday.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do labs cost with Concierge Medicine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Concierge practices offer wholesale lab pricing, often significantly lower than retail cash rates.',
          },
        },
      ],
    },
  ],
}

const comparisonData = [
  {
    category: 'Visit Duration',
    context: 'Time with your physician',
    traditional: { value: '15 min', label: '', isNegative: false },
    sankofa: { value: '30 to 60 min', label: '', isPositive: true },
    highlight: true,
  },
  {
    category: 'Appointment Waits',
    context: 'Days until you are seen',
    traditional: { value: '26+ days', label: '', isNegative: false },
    sankofa: { text: 'Same day or next business day for urgent concerns whenever possible', isPositive: true },
    highlight: false,
  },
  {
    category: 'Patients per Doctor',
    context: 'How many share your physician',
    traditional: { value: '2,300+', label: 'patients per physician', isNegative: false },
    sankofa: { text: 'Approximately 200 patients per physician', isPositive: true },
    highlight: true,
  },
  {
    category: 'Your Physician',
    context: 'Who you see each visit',
    traditional: { text: 'Whoever is available', isNegative: true },
    sankofa: { text: 'Dr. Nkrumah, always', isPositive: true },
    highlight: false,
  },
  {
    category: 'Message Your Doctor',
    context: 'How you reach your physician',
    traditional: { text: 'Patient portal, 48+ hrs', isNegative: true },
    sankofa: { text: 'Direct secure messaging, responses within one business day, Monday through Friday', isPositive: true },
    highlight: true,
  },
  {
    category: 'After Hours Care',
    context: 'When you need help at night',
    traditional: { text: 'ER or wait until Monday', isNegative: true },
    sankofa: { text: 'Clear after hours guidance and physician access options defined in your membership', isPositive: true },
    highlight: false,
  },
  {
    category: 'Lab Work Pricing',
    context: 'What routine labs cost you',
    traditional: { value: '$100s', label: 'often opaque', isNegative: false },
    sankofa: { text: 'Wholesale pricing, often significantly lower than retail cash rates', isPositive: true },
    highlight: true,
  },
  {
    category: 'Prior Authorizations',
    context: 'Insurance approval delays',
    traditional: { text: 'Days to weeks waiting', isNegative: true },
    sankofa: { text: 'Help navigating prior authorizations when they are required', isPositive: true },
    highlight: false,
  },
  {
    category: 'Monthly Cost',
    context: 'What you pay for access',
    traditional: { text: 'Unpredictable copays and bills', isNegative: true },
    sankofa: { text: 'One transparent membership fee', isPositive: true },
    highlight: true,
  },
  {
    category: 'When You Call',
    context: 'The phone experience',
    traditional: { text: 'Phone tree, holds, callbacks', isNegative: true },
    sankofa: { text: 'Direct line to the practice and direct secure messaging with your physician', isPositive: true },
    highlight: false,
  },
]

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-gradient-to-b from-sfm-navy via-sfm-navy to-[#070705] overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" aria-hidden="true" />
        
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-sfm-gold/8 rounded-full blur-[150px] pulse-glow-elite" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-sfm-azure/10 rounded-full blur-[120px]" aria-hidden="true" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          {/* Badge with pulse animation */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full mb-6 float-elite">
            <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/70 text-sm font-medium tracking-wide">Side by Side</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
            The <em className="text-sfm-gold italic">Evidence</em> Speaks
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Every metric below is drawn from peer-reviewed research. The difference is not subtle.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-b from-[#070705] to-sfm-navy">
        <div className="max-w-5xl mx-auto px-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full" role="table" aria-label="Healthcare comparison">
              <thead>
                <tr>
                  <th className="w-[28%] p-6 text-left text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                    Category
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40 bg-white/[0.02]">
                    <span className="block text-white/60">Typical Insurance Based Clinic</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white/50 mt-2">
                      The Norm
                    </span>
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-sfm-gold bg-sfm-gold/[0.08]">
                    <span className="block">Sankofa Concierge Membership</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white mt-2">
                      The Standard
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={row.category}
                    className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${
                      row.highlight ? 'bg-sfm-gold/[0.02]' : ''
                    }`}
                  >
                    <td className="p-6 text-left">
                      <div className="font-display text-lg text-white mb-1">{row.category}</div>
                      <div className="text-sm text-white/40 italic">{row.context}</div>
                    </td>
                    <td className={`p-6 text-center bg-white/[0.02] ${row.highlight ? 'bg-white/[0.03]' : ''}`}>
                      <div className="flex items-center justify-center gap-3">
                        {row.traditional.isNegative && (
                          <X className="w-5 h-5 text-white/25 flex-shrink-0" strokeWidth={2.5} />
                        )}
                        <span className="text-white/50">
                          {row.traditional.value ? (
                            <>
                              <span className="block text-2xl font-display font-medium text-white/50">
                                {row.traditional.value}
                              </span>
                              <span className="text-sm opacity-70">{row.traditional.label}</span>
                            </>
                          ) : (
                            row.traditional.text
                          )}
                        </span>
                      </div>
                    </td>
                    <td className={`p-6 text-center bg-sfm-gold/[0.08] ${row.highlight ? 'bg-sfm-gold/[0.12]' : ''}`}>
                      <div className="flex items-center justify-center gap-3">
                        {row.sankofa.isPositive && !row.sankofa.value && (
                          <Check className="w-5 h-5 text-sfm-gold flex-shrink-0" strokeWidth={2.5} />
                        )}
                        <span className="text-white">
                          {row.sankofa.value ? (
                            <>
                              <span className="block text-2xl font-display font-medium text-sfm-gold">
                                {row.sankofa.value}
                              </span>
                              <span className="text-sm opacity-70">{row.sankofa.label}</span>
                            </>
                          ) : (
                            row.sankofa.text
                          )}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row) => (
              <div 
                key={row.category}
                className={`rounded-2xl overflow-hidden border border-white/10 ${
                  row.highlight ? 'border-sfm-gold/20' : ''
                }`}
              >
                <div className="bg-white/[0.03] p-4 text-center">
                  <div className="font-display text-lg text-white">{row.category}</div>
                  <div className="text-sm text-white/40 italic">{row.context}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 bg-white/[0.02] text-center border-r border-white/[0.04]">
                    <div className="text-xs uppercase tracking-wider text-white/30 mb-2">Insurance Based</div>
                    <div className="flex items-center justify-center gap-2">
                      {row.traditional.isNegative && (
                        <X className="w-4 h-4 text-white/25" strokeWidth={2.5} />
                      )}
                      <span className="text-white/50 text-sm">
                        {row.traditional.value ? (
                          <>
                            <span className="block text-xl font-display">{row.traditional.value}</span>
                            <span className="text-xs opacity-70">{row.traditional.label}</span>
                          </>
                        ) : (
                          row.traditional.text
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-sfm-gold/[0.08] text-center">
                    <div className="text-xs uppercase tracking-wider text-sfm-gold mb-2">Sankofa Concierge</div>
                    <div className="flex items-center justify-center gap-2">
                      {row.sankofa.isPositive && !row.sankofa.value && (
                        <Check className="w-4 h-4 text-sfm-gold" strokeWidth={2.5} />
                      )}
                      <span className="text-white text-sm">
                        {row.sankofa.value ? (
                          <>
                            <span className="block text-xl font-display text-sfm-gold">{row.sankofa.value}</span>
                            <span className="text-xs opacity-70">{row.sankofa.label}</span>
                          </>
                        ) : (
                          row.sankofa.text
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm italic">
              *Typical features of many insurance based primary care clinics. Individual experiences may differ.
            </p>
          </div>

          {/* Evidence Footer */}
          <div className="mt-8 p-8 bg-white/[0.02] rounded-xl border border-white/[0.04]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm mb-2">
                  <strong className="text-white">Evidence-based statistics</strong> from peer-reviewed sources:
                </p>
                <p className="text-white/40 text-xs leading-relaxed">
                  PMC, AAFP, AMN Healthcare, Society of Actuaries, Health Tracking Household Survey
                </p>
              </div>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sfm-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                  <span>Board Certified</span>
                </div>
                <span>•</span>
                <span>HIPAA Compliant</span>
                <span>•</span>
                <Link href="/founder#publications" className="text-sfm-gold hover:text-white transition-colors">
                  View Publications
                </Link>
              </div>
            </div>
          </div>

          {/* Lead Magnet - Download Guide */}
          <div className="mt-8 p-8 bg-gradient-to-r from-sfm-gold/10 to-sfm-azure/10 rounded-2xl border border-sfm-gold/20">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-sfm-gold/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-sfm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl text-white mb-2">Not Sure If Concierge Primary Care Is Right for You?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Read the free guide <strong className="text-white">&quot;How Healthy Is Your Relationship With Your Primary Care Doctor?&quot;</strong> for a simple way to decide whether concierge primary care fits how you want to be treated.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/resources/primary-care-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-gold hover:bg-sfm-gold-light text-sfm-navy font-medium rounded-lg transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Read Free Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sfm-navy relative overflow-hidden cta-glow-bg">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-30" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-[150px] pulse-glow-elite" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sfm-azure/20 rounded-full blur-[100px]" aria-hidden="true" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Now Accepting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 float-elite">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Now Accepting Founding Members</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
            Begin Your Care with<br />
            <span className="text-sfm-gold">Medicine That Remembers</span>
            <span className="text-sfm-gold text-xl align-top">&#8482;</span>
          </h2>
          
          <p className="text-white/60 text-lg mb-4 max-w-2xl mx-auto">
            Enrollment begins in Atlas. Complete your intake and schedule your first visit directly through our secure patient portal.
          </p>
          <p className="text-white/40 text-sm mb-10 max-w-2xl mx-auto">
            All intake, scheduling, messaging, and visits occur securely inside Atlas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://sankofafamilymedicine.atlas.md/hub/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-all shadow-lg shadow-sfm-gold/25"
            >
              Founding Member Enrollment Now Open
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-sfm-navy transition-all"
            >
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
