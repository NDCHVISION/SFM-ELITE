import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Check, X, Clock, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'

// =============================================================================
// METADATA - Pure DPC Focus, Optimized for 2026 SEO & AI Scraper Indexing
// =============================================================================

export const metadata: Metadata = {
  title: 'Direct Primary Care vs Traditional Primary Care | Sankofa Family Medicine',
  description:
    'Compare Direct Primary Care (DPC) with typical insurance-based primary care using published benchmarks on visit length, panel size, and appointment access. Membership-based, no insurance billing for primary care services.',
  keywords: [
    'direct primary care comparison',
    'DPC vs traditional primary care',
    'DPC vs insurance',
    'direct primary care Washington',
    'DPC Seattle',
    'DPC Bellevue',
    'DPC Spokane',
    'membership medicine comparison',
    'Medicine That Remembers',
    'virtual primary care comparison',
    'primary care wait times',
    'doctor patient ratio',
    'longer doctor visits',
    'same day doctor appointments',
    'Sankofa Family Medicine',
    'no insurance primary care',
    'membership primary care',
    'direct primary care benefits',
    'DPC model explained',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    title: 'Direct Primary Care vs Traditional Primary Care | Sankofa Family Medicine',
    description:
      'Compare DPC with insurance-based primary care using published benchmarks: visit length, panel size, appointment access. No insurance billing for primary care.',
    url: 'https://sankofafamilymedicine.com/compare',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/og-compare.png',
        width: 1200,
        height: 630,
        alt: 'Compare Traditional Insurance-Based Care vs Sankofa Family Medicine Direct Primary Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Primary Care vs Traditional Primary Care | Sankofa Family Medicine',
    description:
      'Compare DPC with insurance-based care: visit length, panel size, access. No insurance billing for primary care.',
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
    'content-purpose': 'Healthcare model comparison, decision support, DPC education',
    'page-category': 'Healthcare Services',
    'medical-specialty': 'Primary Care, Family Medicine, Preventive Medicine',
    'practice-model': 'Direct Primary Care, DPC, Membership Medicine',
    'service-area': 'Washington State, USA',
    'geo-region': 'US-WA',
    'geo-placename': 'Washington State',
    'service-cities': 'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, Vancouver, Olympia, Tri-Cities',
    'entity-organization': 'Sankofa Family Medicine',
    'entity-person': 'Dr. Yaw Nkrumah, MD',
    'entity-concept': 'Direct Primary Care, DPC, Healthcare Comparison, Patient Panel Size, Visit Duration, No Insurance Billing',
    'topic-primary': 'Direct Primary Care, DPC Model, Healthcare Comparison',
    'topic-secondary': 'Patient Experience, Physician Access, Healthcare Costs, Insurance-Free Medicine',
    'article-modified-time': '2026-01-26',
    'content-modified': '2026-01-26',
    'voice-query-match': 'What is direct primary care, What is DPC, How is DPC different from regular doctor, How long are DPC appointments, How many patients does a DPC doctor have, Is direct primary care worth it',
    'snippet-target': 'comparison, table, list, definition',
    'answer-box-eligible': 'true',
  },
}

// =============================================================================
// STRUCTURED DATA - Pure DPC Schema for 2026 SEO
// =============================================================================

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://sankofafamilymedicine.com/compare#webpage',
      url: 'https://sankofafamilymedicine.com/compare',
      name: 'Direct Primary Care vs Traditional Primary Care',
      description:
        'Evidence-based comparison between typical insurance-based primary care and Direct Primary Care (DPC) at Sankofa Family Medicine using published benchmarks.',
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
          name: 'What is Direct Primary Care (DPC)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Direct Primary Care is a membership-based healthcare model where patients pay a monthly fee directly to their physician. There is no insurance billing for primary care services, which eliminates administrative overhead and allows for longer visits, smaller patient panels, and same-day access.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long is a typical primary care appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical insurance-based primary care appointments average 15 minutes. Direct Primary Care practices like Sankofa Family Medicine offer 45 to 75 minute visits, allowing for comprehensive evaluation and unhurried conversation. Typical appointment length varies by clinic and region.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many patients does a typical primary care doctor have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typical insurance-based practices average 2,300 or more patients per physician. Direct Primary Care practices like Sankofa Family Medicine maintain fewer than 200 patients per physician, enabling personalized care and same-day access.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I message my doctor directly with Direct Primary Care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. In typical insurance-based care, patients use patient portals with 48+ hour response times. Sankofa Family Medicine offers direct secure messaging with response within one business day, Monday through Friday.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do labs cost with Direct Primary Care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DPC practices often offer wholesale lab pricing, frequently significantly lower than retail cash rates or insurance-negotiated prices, because they purchase directly without insurance markup.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I see the same doctor every visit with DPC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. At Sankofa Family Medicine, you see the same physician at every visit. In typical insurance-based clinics, you may see whoever is available, leading to fragmented care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need health insurance with DPC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DPC covers your primary care, but health insurance is still recommended for hospitalizations, specialists, emergencies, and catastrophic coverage. Many DPC patients pair their membership with a high-deductible health plan or health share.',
          },
        },
      ],
    },
    {
      '@type': 'Table',
      about: 'Direct Primary Care vs Insurance-Based Care Comparison',
      description: 'Comparison of typical insurance-based primary care versus Sankofa Family Medicine Direct Primary Care using published benchmarks',
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
    after: '45-75 min',
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
    sankofa: { value: '45 to 75 min', label: 'standard', isPositive: true },
    highlight: true,
  },
  {
    category: 'Appointment Waits',
    context: 'Days until you are seen',
    traditional: { value: '26+ days', label: 'average wait', isNegative: false },
    sankofa: { text: 'Same day or next business day for urgent concerns when available', isPositive: true },
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
    sankofa: { text: 'Same physician, every visit', isPositive: true },
    highlight: false,
  },
  {
    category: 'Insurance Billing',
    context: 'How your care is paid for',
    traditional: { text: 'Insurance claims, denials, appeals', isNegative: true },
    sankofa: { text: 'No insurance billing for primary care', isPositive: true },
    highlight: true,
  },
  {
    category: 'Message Your Doctor',
    context: 'How you reach your physician',
    traditional: { text: 'Patient portal, 48+ hour response', isNegative: true },
    sankofa: { text: 'Direct secure messaging with response within one business day', isPositive: true },
    highlight: false,
  },
  {
    category: 'After Hours Care',
    context: 'When you need help at night',
    traditional: { text: 'ER or wait until Monday', isNegative: true },
    sankofa: { text: 'Clear after hours guidance and access options defined in your membership', isPositive: true },
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
    sankofa: { text: 'Direct line to your care team, seen and addressed promptly', isPositive: true },
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

      {/* Hero */}
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
            Compare Models
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
            Direct Primary Care vs<br />
            <span className="text-sfm-gold">Traditional Primary Care</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Direct Primary Care removes insurance billing from primary care so time, access, and continuity return to the physician-patient relationship.
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
          {/* Section Intro */}
          <div className="text-center mb-12">
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              This page compares Direct Primary Care with typical insurance-based clinics using published benchmarks on visit length, panel size, and appointment access.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full" role="table" aria-label="Healthcare model comparison: Traditional insurance-based care versus Sankofa Family Medicine Direct Primary Care">
              <thead>
                <tr>
                  <th className="w-[28%] p-6 text-left text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                    Category
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40 bg-white/[0.02]">
                    <span className="block text-white/75">Insurance-Based Primary Care</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white/40 mt-2">
                      What Most Experience
                    </span>
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-sfm-gold bg-sfm-gold/[0.08]">
                    <span className="block">Sankofa Family Medicine</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white mt-2">
                      Direct Primary Care
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
                    <div className="text-xs uppercase tracking-wider text-sfm-gold mb-2">DPC</div>
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
              *Typical features of many insurance-based primary care clinics. Typical appointment length varies by clinic and region. Individual experiences may differ.
            </p>
          </div>

          {/* Evidence Footer */}
          <div className="mt-8 p-8 bg-white/[0.02] rounded-xl border border-white/[0.04]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-white/75 text-sm mb-2">
                  <strong className="text-white">Published benchmarks</strong> from peer-reviewed sources:
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
                <span className="hidden sm:inline">â€¢</span>
                <span>HIPAA Compliant</span>
                <span className="hidden sm:inline">â€¢</span>
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
                  Direct Primary Care removes the insurance middleman from your primary care relationship. No claim forms for primary care visits, no surprise bills. A simple monthly membership and a physician who has time for you.
                </p>
                <p className="text-white/70 leading-relaxed">
                  One physician and care team who know your history and stay with you over time. When your doctor has fewer patients and more time, care improves. That is the DPC model.
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
                <p className="text-white/75 text-sm">
                  Read the free guide <strong className="text-white">&quot;How Healthy Is Your Relationship With Your Primary Care Doctor?&quot;</strong> for a simple way to decide whether Direct Primary Care fits how you want to be treated.
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

          <p className="text-white/75 text-lg mb-4 max-w-2xl mx-auto">
            The data is clear. The choice is yours.
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
              Join the Founders Waitlist
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
            <span className="hidden sm:inline">â€¢</span>
            <span>Cancel Anytime</span>
            <span className="hidden sm:inline">â€¢</span>
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

