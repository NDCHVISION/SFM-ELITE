import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Difference | Why Concierge Membership Works | Sankofa Family Medicine',
  description: 'Insurance driven systems are designed for volume, not memory. Our virtual concierge membership restores time, continuity, and transparency. Compare traditional primary care vs Sankofa Family Medicine.',
  keywords: ['concierge medicine comparison', 'DPC vs traditional', 'Washington State DPC', 'Medicine That Remembers', 'healthcare fragmentation', 'virtual primary care', 'concierge membership'],
  openGraph: {
    title: 'The Difference | Why Concierge Membership Works',
    description: 'Insurance driven systems are designed for volume, not memory. Our virtual concierge membership restores time, continuity, and transparency.',
    url: 'https://sankofafamilymedicine.com/compare',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Compare Traditional vs Concierge Primary Care - Sankofa Family Medicine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Difference | Why Concierge Membership Works',
    description: 'Insurance driven systems are designed for volume, not memory. Our virtual concierge membership restores time, continuity, and transparency.',
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
      name: 'The Difference - Why Concierge Membership Works',
      description: 'Side-by-side comparison between traditional insurance-based primary care and Sankofa Family Medicine concierge membership',
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
            text: 'Traditional primary care averages 15 minutes and often feels rushed. Sankofa Family Medicine visits average about forty five minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many patients does a typical doctor have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional practices have thousands of patients per physician. Sankofa maintains a limited panel of approximately 200 adults to protect time and access.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I see the same doctor every time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In traditional care, you may see a different provider at each visit. At Sankofa Family Medicine, you see the same physician every time, not a rotating team.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is billing handled at Sankofa Family Medicine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unlike traditional care with surprise billing and confusing statements, Sankofa offers clear monthly pricing with no visit fees or unexpected bills.',
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
    traditional: { text: '15 minute appointments that feel rushed', isNegative: true },
    sankofa: { text: 'Visits that average about forty five minutes', isPositive: true },
    highlight: true,
  },
  {
    category: 'Access & Wait Times',
    context: 'When you can be seen',
    traditional: { text: 'Long waits for visits and limited access', isNegative: true },
    sankofa: { text: 'Same or next business day virtual access for urgent concerns whenever possible', isPositive: true },
    highlight: false,
  },
  {
    category: 'Panel Size',
    context: 'How many share your physician',
    traditional: { text: 'Thousands of patients per physician', isNegative: true },
    sankofa: { text: 'A limited panel of approximately 200 adults to protect time and access', isPositive: true },
    highlight: true,
  },
  {
    category: 'Continuity of Care',
    context: 'Who you see each visit',
    traditional: { text: 'Different provider at each visit', isNegative: true },
    sankofa: { text: 'The same physician every time, not a rotating team', isPositive: true },
    highlight: false,
  },
  {
    category: 'Pricing & Billing',
    context: 'What you pay for care',
    traditional: { text: 'Surprise billing and confusing statements', isNegative: true },
    sankofa: { text: 'Clear monthly pricing with no visit fees or unexpected bills', isPositive: true },
    highlight: true,
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
      <section className="pt-40 pb-16 bg-gradient-to-b from-sfm-navy via-sfm-navy to-[#070705]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            The Difference
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
            Why <em className="text-sfm-gold italic">Concierge Membership</em> Works
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Insurance driven systems are designed for volume, not memory.<br className="hidden md:block" />
            Our virtual concierge membership restores time, continuity, and transparency.
          </p>
          <p className="text-white/40 text-base mt-4 max-w-xl mx-auto italic">
            It creates space for relationships, not rush.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-[#070705] to-sfm-navy">
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
                    <span className="block text-white/50">Traditional Primary Care</span>
                    <span className="block font-display text-xl font-normal tracking-normal normal-case text-white/40 mt-2 italic">
                      Insurance-Based
                    </span>
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-sfm-gold bg-sfm-gold/[0.08]">
                    <span className="block">Sankofa Family Medicine</span>
                    <span className="block font-display text-xl font-normal tracking-normal normal-case text-white mt-2 italic">
                      Concierge Membership
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr 
                    key={row.category}
                    className={`border-t border-white/[0.06] transition-colors hover:bg-white/[0.02] ${
                      row.highlight ? 'bg-sfm-gold/[0.02]' : ''
                    }`}
                  >
                    <td className="p-6 text-left">
                      <div className="font-display text-lg text-white mb-1">{row.category}</div>
                      <div className="text-sm text-white/40 italic">{row.context}</div>
                    </td>
                    <td className={`p-6 text-center bg-white/[0.02] ${row.highlight ? 'bg-white/[0.03]' : ''}`}>
                      <div className="flex items-start justify-center gap-3">
                        {row.traditional.isNegative && (
                          <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        )}
                        <span className="text-white/50 text-base leading-relaxed">
                          {row.traditional.text}
                        </span>
                      </div>
                    </td>
                    <td className={`p-6 text-center bg-sfm-gold/[0.08] ${row.highlight ? 'bg-sfm-gold/[0.12]' : ''}`}>
                      <div className="flex items-start justify-center gap-3">
                        {row.sankofa.isPositive && (
                          <Check className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        )}
                        <span className="text-white text-base leading-relaxed">
                          {row.sankofa.text}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards - Stacked vertically */}
          <div className="md:hidden space-y-6">
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
                <div className="flex flex-col">
                  {/* Traditional - Gray styling */}
                  <div className="p-5 bg-white/[0.02] text-center border-b border-white/[0.06]">
                    <div className="text-xs uppercase tracking-wider text-white/30 mb-3">Traditional Primary Care</div>
                    <div className="flex items-start justify-center gap-2">
                      {row.traditional.isNegative && (
                        <X className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      )}
                      <span className="text-white/50 text-sm leading-relaxed">
                        {row.traditional.text}
                      </span>
                    </div>
                  </div>
                  {/* Sankofa - Gold styling */}
                  <div className="p-5 bg-sfm-gold/[0.08] text-center">
                    <div className="text-xs uppercase tracking-wider text-sfm-gold mb-3">Sankofa Family Medicine</div>
                    <div className="flex items-start justify-center gap-2">
                      {row.sankofa.isPositive && (
                        <Check className="w-4 h-4 text-sfm-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      )}
                      <span className="text-white text-sm leading-relaxed">
                        {row.sankofa.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer Footer */}
          <div className="mt-12 p-6 bg-white/[0.02] rounded-xl border border-white/[0.04]">
            <p className="text-white/40 text-sm text-center italic leading-relaxed">
              *Typical features of many insurance based primary care clinics. Individual experiences may differ.
            </p>
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
                <h3 className="font-display text-xl text-white mb-2">Not Sure If DPC Is Right for You?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Read our free guide: <strong className="text-white">"How Healthy Is Your Relationship With Your Primary Care Doctor?"</strong> An interactive self-assessment to discover what kind of care you&apos;re getting.
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
      <section className="py-24 bg-sfm-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-30" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sfm-azure/20 rounded-full blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Now Accepting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
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
              Become a Patient
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
