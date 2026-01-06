import Link from 'next/link'
import { BookOpen, ArrowRight, PenTool, Wrench, AlertTriangle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Resources | Sankofa Family Medicine',
  description: 'Educational health resources, patient guides, and wellness tools from Sankofa Family Medicine. Access primary care guides, blog articles, health tools, and emergency resources.',
  keywords: ['patient resources', 'health guides', 'wellness tools', 'patient education', 'health information Washington', 'primary care guide', 'concierge medicine resources'],
  openGraph: {
    title: 'Patient Resources | Sankofa Family Medicine',
    description: 'Educational resources and tools to support your wellness journey.',
    url: 'https://sankofafamilymedicine.com/resources',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Patient Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Resources | Sankofa Family Medicine',
    description: 'Educational resources and tools to support your wellness journey.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/resources',
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
  ],
}

const resourceCategories = [
  {
    title: 'Primary Care Relationship Guide',
    description: 'Assess the health of your relationship with your primary care doctor. Learn what good primary care looks like.',
    href: '/resources/primary-care-guide',
    icon: BookOpen,
    color: 'sfm-gold',
    bgColor: 'bg-sfm-gold/10',
    borderColor: 'border-sfm-gold/20',
    hoverBorderColor: 'hover:border-sfm-gold/40',
    textColor: 'text-sfm-gold',
  },
  {
    title: 'Blog',
    description: 'Health insights and articles from Dr. Yaw Nkrumah on primary care, virtual medicine, and precision health.',
    href: '/blog',
    icon: PenTool,
    color: 'sfm-azure',
    bgColor: 'bg-sfm-azure/10',
    borderColor: 'border-sfm-azure/20',
    hoverBorderColor: 'hover:border-sfm-azure/40',
    textColor: 'text-sfm-azure',
  },
  {
    title: 'Sankofa Tools',
    description: 'Free interactive tools to help you prepare for visits, track health metrics, and communicate with providers.',
    href: '/resources/tools',
    icon: Wrench,
    color: 'emerald',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    hoverBorderColor: 'hover:border-emerald-500/40',
    textColor: 'text-emerald-600',
  },
  {
    title: 'Emergency Guide',
    description: 'Crisis hotlines, hospital listings, and guidance for when to call 911. Know where to go in an emergency.',
    href: '/emergency',
    icon: AlertTriangle,
    color: 'red',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-200',
    hoverBorderColor: 'hover:border-red-300',
    textColor: 'text-red-600',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
          <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <BookOpen className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Knowledge Center</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Patient Resources
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" />
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Educational guides and tools to help you navigate your health journey with confidence.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-sfm-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourceCategories.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className={`group relative bg-white ${resource.borderColor} border rounded-2xl p-8 ${resource.hoverBorderColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl ${resource.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <resource.icon className={`w-7 h-7 ${resource.textColor}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-xl text-sfm-navy mb-3 group-hover:text-sfm-azure transition-colors">
                        {resource.title}
                      </h2>
                      <p className="text-sfm-navy/60 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <span className={`inline-flex items-center gap-2 ${resource.textColor} font-medium text-sm group-hover:gap-3 transition-all`}>
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy relative overflow-hidden">
          <div className="absolute inset-0 pattern-sankofa-spiral-gold pattern-subtle" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sfm-gold/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Have Questions About Your Health?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              If you are looking for personalized guidance, we are here to help. Schedule a conversation to discuss your health goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary-white">
                View Membership Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
