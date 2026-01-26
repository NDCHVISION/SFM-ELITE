import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Check, X, Clock, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'

// =============================================================================
// METADATA - Fully Optimized for 2026 SEO & AI Scraper Indexing
// =============================================================================

export const metadata: Metadata = {
  title: 'Why Membership Medicine? | Traditional vs. Sankofa Family Medicine Comparison',
  description:
    'Compare membership-based primary care to traditional insurance-based clinics. Evidence-based differences: 15 min vs 45-60 min visits, 26-day waits vs same-day access, 2,300 patients vs fewer than 200. See why membership medicine offers a better physician relationship.',
  keywords: [
    'membership medicine comparison',
    'concierge medicine comparison',
    'concierge vs traditional primary care',
    'direct primary care comparison',
    'DPC vs insurance',
    'Washington State concierge medicine',
    'Medicine That Remembers',
    'healthcare fragmentation',
    'virtual primary care comparison',
    'membership primary care Seattle',
    'concierge medicine Bellevue',
    'DPC Washington',
    'primary care wait times',
    'doctor patient ratio',
    'longer doctor visits',
    'same day doctor appointments',
    'Sankofa Family Medicine',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'Why Membership Medicine? | Traditional vs. Sankofa Comparison',
    description:
      'Evidence-based comparison: 15 min vs 45-60 min visits, 26-day waits vs same-day access, 2,300 patients vs fewer than 200. See why membership-based primary care works.',
    url: 'https://sankofafamilymedicine.com/compare',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-compare.png',
        width: 1200,
        height: 630,
        alt: 'Compare Traditional Insurance-Based Care vs Sankofa Family Medicine Membership-Based Primary Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Membership Medicine? | Sankofa Family Medicine',
    description:
      'Evidence-based comparison: 15 min vs 45-60 min visits, 26-day waits vs same-day access. See why membership medicine works.',
    images: ['https://sankofafamilymedicine.com/images/og-compare.png'],
    creator: '@sankofafamilymed',
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
    'content-type': 'Comparison Page',
    'content-purpose': 'Healthcare model comparison, decision support',
    'page-category': 'Healthcare Services',
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine',
    'practice-model': 'Direct Primary Care, Concierge Medicine, Membership Medicine',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'service-cities': 'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities',
    'entity-organization': 'Sankofa Family Medicine',
    'entity-person': 'Dr. Yaw Nkrumah, MD',
    'entity-concept': 'Membership-Based Primary Care, Healthcare Comparison, Patient Panel Size, Visit Duration',
    'topic-primary': 'Healthcare Model Comparison, Membership Medicine',
    'topic-secondary': 'Patient Experience, Physician Access, Healthcare Costs',
    'article-modified-time': '2026-01-26',
    'content-modified': '2026-01-26',
    'voice-query-match': 'What is the difference between concierge medicine and regular doctor, How long are concierge medicine appointments, How many patients does a concierge doctor have, Is membership medicine worth it, What is direct primary care',
    'snippet-target': 'comparison, table, list',
    'answer-box-eligible': 'true',
  },
}

// =============================================================================
// STRUCTURED DATA - Comprehensive Schema for 2026 SEO
// =============================================================================

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://sankofafamilymedicine.com/compare#webpage',
      url: 'https://sankofafamilymedicine.com/compare',
      name: 'Healthcare Model Comparison: Traditional vs Membership-Based Primary Care',
      description:
        'Evidence-based side-by-side comparison between typical insurance-based primary care and membership-based primary care at Sankofa Family Medicine.',
      specialty: { '@type': 'MedicalSpecialty', name: 'Family Medicine' },
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://sankofafamilymedicine.com/#website',
        name: 'Sankofa Family Medicine',
        url: 'https://sankofafamilymedicine.com',
      },
      publisher: {
        '@type': 'MedicalOrganization',
        '@id': 'https://sankofafamilymedicine.com/#organization',
        name: 'Sankofa Family Medicine',
        url: 'https://sankofafamilymedicine.com',
        areaServed: { '@type': 'State', name: 'Washington' },
        priceRange: '$149-$449/month',
      },
      dateModified: '2026-01-26',
      lastReviewed: '2026-01-26',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long is a typical primary care appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical insurance-based primary care appointments average 15 minutes. Membership-based practices like Sankofa Family Medicine offer 45 to 60 minute visits, allowing for comprehensive evaluation and unhurried conversation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many patients does a typical primary care doctor have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical insurance-based practices average 2,300 or more patients per physician. Membership-based practices like Sankofa Family Medicine maintain fewer than 200 patients per physician, enabling personalized care and same-day access.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I message my doctor directly with membership medicine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. In typical insurance-based care, patients use patient portals with 48+ hour response times. Sankofa Family Medicine offers direct secure messaging with responses within one business day, Monday through Friday.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do labs cost with membership-based primary care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Membership-based practices often offer wholesale lab pricing, frequently significantly lower than retail cash rates or insurance-negotiated prices.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I see the same doctor every visit with membership medicine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. At Sankofa Family Medicine, you see Dr. Nkrumah at every visit. In typical insurance-based clinics, you may see whoever is available, leading to fragmented care.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between concierge medicine and direct primary care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both are membership-based models with smaller patient panels and longer visits. Direct Primary Care (DPC) does not bill insurance for visits, while some concierge practices still bill insurance. Sankofa Family Medicine combines DPC structure with concierge-level service.',
          },
        },
      ],
    },
    {
      '@type': 'Table',
      about: 'Healthcare Model Comparison',
      description: 'Comparison of typical insurance-based primary care versus Sankofa Family Medicine membership-based care',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
        { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://sankofafamilymedicine.com/compare' },
      ],
    },
  ],
}

// =============================================================================
// DATA
// =============================================================================

const statPreviews = [
  {
    icon: Clock,
    before: '15 min',
    after: '45-60 min',
    label: 'Visit Duration',
  },
  {
    icon: Users,
    before: '2,300+',
    after: '<200',
    label: 'Patient Panel',
  },
  {
    icon: Zap,
    before: '26+ days',
    after: 'Same Day',
    label: 'Wait Time',
  },
]

const comparisonData = [
  {
    category: 'Visit Duration',
    context: 'Time with your physician',
    traditional: { value: '15 min', label: 'average', isNegative: false },
    sankofa: { value: '45 to 60 min', label: 'standard', isPositive: true },
    highlight: true,
  },
  {
    category: 'Appointment Waits',
    context: 'Days until you are seen',
    traditional: { value: '26+ days', label: 'average wait', isNegative: false },
    sankofa: { text: 'Same day or next business day for urgent concerns whenever possible', isPositive: true },
    highlight: false,
  },
  {
    category: 'Patients per Physician',
    context: 'How many share your doctor',
    traditional: { value: '2,300+', label: 'patients per physician', isNegative: false },
    sankofa: { text: 'Fewer than 200 patients per physician', isPositive: true },
    highlight: true,
  },
  {
    category: 'Your Physician',
    context: 'Who you see each visit',
    traditional: { text: 'Whoever is available', isNegative: true },
    sankofa: { text: 'Dr. Nkrumah, every visit', isPositive: true },
    highlight: false,
  },
  {
    category: 'Message Your Doctor',
    context: 'How you reach your physician',
    traditional: { text: 'Patient portal, 48+ hour response', isNegative: true },
    sankofa: { text: 'Direct secure messaging, response within one business day', isPositive: true },
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
    traditional: { value: '$100s', label: 'often opaque pricing', isNegative: false },
    sankofa: { text: 'Wholesale pricing, often significantly lower than retail rates', isPositive: true },
    highlight: true,
  },
  {
    category: 'Prior Authorizations',
    context: 'Insurance approval delays',
    traditional: { text: 'Days to weeks waiting', isNegative: true },
    sankofa: { text: 'Help navigating prior authorizations when required', isPositive: true },
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
    sankofa: { text: 'Direct line to the practice and secure messaging with your physician', isPositive: true },
    highlight: false,
  },
]

// =============================================================================
// COMPONENT
// =============================================================================

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero with Stat Preview */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-sfm-navy via-sfm-navy to-[#070705] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Sankofa Bird Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 relative">
              <Image
                src="/images/comettrans.png"
                alt="Sankofa bird symbol"
                width={64}
                height={64}
                className="opacity-80"
              />
            </div>
          </div>

          <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Side by Side
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
            The <em className="text-sfm-gold italic">Evidence</em> Speaks
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Every metric below is drawn from peer-reviewed research. The difference between typical insurance-based care and membership-based primary care is not subtle.
          </p>

          {/* Stat Preview Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {statPreviews.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
              >
                <stat.icon className="w-6 h-6 text-sfm-gold mx-auto mb-3" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-white/40 text-lg line-through">{stat.before}</span>
                  <ArrowRight className="w-4 h-4 text-sfm-gold" aria-hidden="true" />
                  <span className="text-sfm-gold text-xl font-display font-semibold">{stat.after}</span>
                </div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Memory Thread */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sfm-gold/30 to-transparent" aria-hidden="true" />
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-b from-[#070705] to-sfm-navy">
        <div className="max-w-5xl mx-auto px-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full" role="table" aria-label="Healthcare model comparison: Traditional insurance-based care versus Sankofa Family Medicine membership-based care">
              <thead>
                <tr>
                  <th className="w-[28%] p-6 text-left text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                    Category
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40 bg-white/[0.02]">
                    <span className="block text-white/60">Typical Insurance-Based Clinic</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white/40 mt-2">
                      What Most Experience
                    </span>
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-sfm-gold bg-sfm-gold/[0.08]">
                    <span className="block">Sankofa Family Medicine</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white mt-2">
                      What We Offer
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
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
                          <X className="w-5 h-5 text-white/25 flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
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
                          <Check className="w-5 h-5 text-sfm-gold flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
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
                    <div className="text-xs uppercase tracking-wider text-white/30 mb-2">Insurance-Based</div>
                    <div className="flex items-center justify-center gap-2">
                      {row.traditional.isNegative && (
                        <X className="w-4 h-4 text-white/25" strokeWidth={2.5} aria-hidden="true" />
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
                    <div className="text-xs uppercase tracking-wider text-sfm-gold mb-2">Sankofa</div>
                    <div className="flex items-center justify-center gap-2">
                      {row.sankofa.isPositive && !row.sankofa.value && (
                        <Check className="w-4 h-4 text-sfm-gold" strokeWidth={2.5} aria-hidden="true" />
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
              *Typical features of many insurance-based primary care clinics. Individual experiences may differ.
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
              <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sfm-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span>Board Certified</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>HIPAA Compliant</span>
                <span className="hidden sm:inline">•</span>
                <Link href="/resources/research" className="text-sfm-gold hover:text-white transition-colors">
                  View Research Sources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means For You */}
      <section className="py-16 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-sfm-gold/10 via-sfm-azure/5 to-transparent rounded-3xl border border-sfm-gold/20 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-sfm-gold/20 rounded-2xl flex items-center justify-center">
                <Check className="w-6 h-6 text-sfm-gold" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
                  What This Means for You
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  The numbers tell a clear story: when your physician has fewer patients and more time, care improves. You get appointments when you need them, visits that address your full concern, and a physician who actually knows your history.
                </p>
                <p className="text-white/70 leading-relaxed">
                  This is not about luxury. It is about how primary care should work. One physician, one relationship, building over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-8 bg-sfm-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-sfm-gold/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-sfm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl text-white mb-2">Still Weighing Your Options?</h3>
                <p className="text-white/60 text-sm">
                  Read the free guide <strong className="text-white">&quot;How Healthy Is Your Relationship With Your Primary Care Doctor?&quot;</strong> for a simple way to decide whether membership-based primary care fits how you want to be treated.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/resources/primary-care-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all border border-white/10"
                >
                  Read Free Guide
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-sfm-navy to-sfm-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-30" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-[150px]" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sfm-azure/20 rounded-full blur-[100px]" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Founders Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Founding Memberships Now Available</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
            Ready to Experience<br />
            <span className="text-sfm-gold">the Difference?</span>
          </h2>

          <p className="text-white/60 text-lg mb-4 max-w-2xl mx-auto">
            The evidence is clear. The choice is yours.
          </p>

          <p className="text-white/50 text-base mb-10 max-w-xl mx-auto">
            Join the first 30 founding members who shape how this practice grows. Enrollment begins February 2026. No payment required today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/founders-waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-all shadow-lg shadow-sfm-gold/25"
              aria-label="Reserve your founding membership spot at Sankofa Family Medicine"
            >
              Reserve a Founders Spot
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-sfm-navy transition-all"
              aria-label="View membership options and services"
            >
              View Membership Options
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/50">
            <span>HSA/FSA Accepted</span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel Anytime</span>
            <span className="hidden sm:inline">•</span>
            <span>Same Physician Every Visit</span>
          </div>
        </div>
      </section>

      {/* Page Footer Note */}
      <div className="bg-sfm-navy border-t border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs text-white/20 text-center">Last updated: January 26, 2026</p>
        </div>
      </div>
    </>
  )
}
