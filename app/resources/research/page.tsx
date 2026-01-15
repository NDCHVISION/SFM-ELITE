import Link from 'next/link'
import { ArrowLeft, ExternalLink, BookOpen, Clock, Building2, FileText } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & Evidence | Sankofa Family Medicine',
  description: 'Peer-reviewed research and publications supporting evidence-based comparisons between traditional insurance-based primary care and concierge medicine. Sources from PMC, JAMA, AAFP, AMA, and more.',
  keywords: ['concierge medicine research', 'primary care evidence', 'peer-reviewed healthcare studies', 'DPC research', 'healthcare comparison data', 'medical publications'],
  openGraph: {
    title: 'Research & Evidence | Sankofa Family Medicine',
    description: 'Peer-reviewed research supporting evidence-based healthcare comparisons.',
    url: 'https://sankofafamilymedicine.com/resources/research',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Research & Evidence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research & Evidence | Sankofa Family Medicine',
    description: 'Peer-reviewed research supporting evidence-based healthcare comparisons.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/resources/research',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://sankofafamilymedicine.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'Research', item: 'https://sankofafamilymedicine.com/resources/research' },
  ],
}

const researchData = [
  {
    metric: 'Visit Duration (Typical insurance-based clinic ~15 min)',
    title: 'Time Allocation in Primary Care Office Visits',
    publisher_or_journal: 'Health Services Research (PMC full text available)',
    year: 2007,
    why_it_supports_metric: 'Analyzed videotaped primary care visits and found a median visit length of 15.7 minutes, supporting the ~15-minute "insurance-based" benchmark.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2254573/',
  },
  {
    metric: 'Visit Duration (Typical insurance-based clinic ~15 min)',
    title: 'Primary Care Visit Duration and Quality: Does Good Care Take Longer?',
    publisher_or_journal: 'JAMA Internal Medicine',
    year: 2009,
    why_it_supports_metric: 'Using national survey data over 9 years, the median primary care visit duration was 15 minutes, reinforcing the common baseline.',
    url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1108557',
  },
  {
    metric: 'Visit Duration (Concierge/DPC 30–60 min or ~40 min average)',
    title: 'Direct Primary Care: Evaluating a New Model of Delivery and Financing Health Care',
    publisher_or_journal: 'Society of Actuaries (Research Report, PDF)',
    year: 2020,
    why_it_supports_metric: 'Reports DPC office visits average around 40 minutes and vary by patient need, supporting longer-visit claims (fits within 30–60 min range).',
    url: 'https://www.soa.org/globalassets/assets/files/resources/research-report/2020/direct-primary-care-eval-model.pdf',
  },
  {
    metric: 'Visit Duration (Concierge/DPC 30–60 min)',
    title: 'Understanding Patient Perceptions Towards Direct Primary Care in the United States',
    publisher_or_journal: 'BMC Health Services Research (PMC full text available)',
    year: 2022,
    why_it_supports_metric: 'States that the average DPC appointment consists of 30 to 60 minutes, directly matching the 30–60 minute metric.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9350501/',
  },
  {
    metric: 'Appointment Waits (26+ days average for new patient appointments)',
    title: 'Survey of Physician Appointment Wait Times and Medicare and Medicaid Acceptance Rates (2022)',
    publisher_or_journal: 'AMN Healthcare / Merritt Hawkins (Report PDF)',
    year: 2022,
    why_it_supports_metric: 'The 2022 survey reports that average wait times to schedule a new patient appointment were about 26 days across the surveyed markets/specialties.',
    url: 'https://hasdic.org/wp-content/uploads/sites/4/2022/12/mha2022waittimesurveyfinal.pdf',
  },
  {
    metric: 'Appointment Waits (26+ days summary framing)',
    title: 'Appointment wait times increase across specialties, but not in family medicine',
    publisher_or_journal: 'AAFP (FPM blog)',
    year: 2022,
    why_it_supports_metric: 'AAFP summarizes the AMN/Merritt Hawkins findings and explicitly cites 26 days average wait time across specialties.',
    url: 'https://www.aafp.org/pubs/fpm/blogs/inpractice/entry/wait-times.html',
  },
  {
    metric: 'Patients per Doctor (2,300+ patients per physician)',
    title: 'Estimating a Reasonable Patient Panel Size for Primary Care Physicians With Team-Based Task Delegation',
    publisher_or_journal: 'Annals of Family Medicine (PMC full text available)',
    year: 2012,
    why_it_supports_metric: 'Notes that the average US primary care panel size is about 2,300, supporting the "2,300+ patients per physician" comparison anchor.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3438206/',
  },
  {
    metric: 'Prior Authorizations (days to weeks waiting, delays in necessary care)',
    title: 'Exhausted by prior auth, many patients abandon care: AMA survey',
    publisher_or_journal: 'American Medical Association (AMA)',
    year: 2024,
    why_it_supports_metric: 'AMA summarizes physician survey findings that prior authorization negatively impacts outcomes and causes delays in care.',
    url: 'https://www.ama-assn.org/practice-management/prior-authorization/exhausted-prior-auth-many-patients-abandon-care-ama-survey',
  },
  {
    metric: 'Message Response Times (24–48 hours expectation for portal messages)',
    title: 'Secure Messaging: Myths, Facts, and Pitfalls',
    publisher_or_journal: 'AAFP Family Practice Management (FPM)',
    year: 2013,
    why_it_supports_metric: 'Describes common operational expectations where practices ask patients to allow 24 to 48 hours for replies to secure messages.',
    url: 'https://www.aafp.org/fpm/2013/0100/p21.html',
  },
  {
    metric: 'Message Response Times (example of explicit program expectation ≤24 hours)',
    title: 'Impact of Patient Portal Secure Messages and Electronic Visits on Adult Primary Care Office Visits',
    publisher_or_journal: 'Journal of General Internal Medicine (PMC full text available)',
    year: 2014,
    why_it_supports_metric: 'In a real-world portal implementation, the stated expectation was response time no more than 24 hours (except weekends).',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3934543/',
  },
  {
    metric: 'Lab Work Pricing (cash/direct options can be lower than hospital/insurance-negotiated settings)',
    title: 'Cost Comparisons of Physician-Ordered Versus Direct-to-Consumer Laboratory Testing',
    publisher_or_journal: 'PubMed indexed article',
    year: 2024,
    why_it_supports_metric: 'Finds direct-to-consumer lab test prices were generally lower than mean insurance-negotiated hospital-based prices.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39712746/',
  },
]

// Group resources by metric category
const groupedResources = researchData.reduce((acc, resource) => {
  // Extract main category from metric
  const category = resource.metric.split('(')[0].trim()
  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(resource)
  return acc
}, {} as Record<string, typeof researchData>)

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-20 bg-gradient-to-b from-sfm-navy via-sfm-navy to-[#070705] overflow-hidden">
          <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-30" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sfm-azure/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <Link 
              href="/compare" 
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Comparison
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <BookOpen className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Peer-Reviewed Sources</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              Research &amp; <em className="text-sfm-gold italic">Evidence</em>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Every comparison on our Evidence Speaks page is backed by peer-reviewed research. Explore the sources below.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-sfm-gold" />
                <span>{researchData.length} Publications</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sfm-gold" />
                <span>PMC, JAMA, AAFP, AMA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Resources */}
        <section className="py-20 bg-gradient-to-b from-[#070705] via-sfm-navy to-sfm-navy">
          <div className="max-w-5xl mx-auto px-6">
            {Object.entries(groupedResources).map(([category, resources]) => (
              <div key={category} className="mb-16 last:mb-0">
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="font-display text-2xl md:text-3xl text-white mb-2">{category}</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/30 rounded-full" />
                </div>
                
                {/* Resource Cards */}
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-sfm-gold/30 rounded-2xl p-6 md:p-8 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                        {/* Year Badge */}
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sfm-gold/10 border border-sfm-gold/20 rounded-full">
                            <Clock className="w-3.5 h-3.5 text-sfm-gold" />
                            <span className="text-sfm-gold text-sm font-medium">{resource.year}</span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg md:text-xl text-white mb-2 group-hover:text-sfm-gold transition-colors leading-tight">
                            {resource.title}
                          </h3>
                          <p className="text-white/50 text-sm mb-3">
                            {resource.publisher_or_journal}
                          </p>
                          <p className="text-white/70 text-sm leading-relaxed mb-4">
                            {resource.why_it_supports_metric}
                          </p>
                          <div className="inline-flex items-center gap-2 text-sfm-gold text-sm font-medium group-hover:gap-3 transition-all">
                            <span>Read Publication</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology Note */}
        <section className="py-16 bg-sfm-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-2xl text-white mb-4">About Our Sources</h3>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  The research presented on this page represents peer-reviewed publications, professional organization surveys, and government health data. Sources include the National Institutes of Health (NIH) PubMed Central (PMC), JAMA Network journals, the American Academy of Family Physicians (AAFP), the American Medical Association (AMA), and the Society of Actuaries.
                </p>
                <p>
                  These publications provide the evidence base for the comparisons shown on our <Link href="/compare" className="text-sfm-gold hover:text-white transition-colors underline underline-offset-2">Evidence Speaks</Link> page. We encourage you to review the original sources for full context and methodology.
                </p>
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
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6 leading-tight">
              Experience the Difference
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              The research is clear. Concierge medicine offers more time, better access, and deeper relationships. See how Sankofa Family Medicine brings these benefits to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/compare"
                className="btn-primary"
              >
                View Full Comparison
              </Link>
              <Link 
                href="/services" 
                className="btn-secondary-white"
              >
                View Membership Options
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
