import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, ArrowRight, FileText, Heart, Download, Sparkles, Clock, CheckCircle2 } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Resources and Health Guides | Sankofa Family Medicine',
  description: 'Educational health resources, patient guides, and wellness tools from Sankofa Family Medicine. Free health information for Washington State residents on preventive care, chronic disease management, and telehealth.',
  keywords: ['patient resources', 'health guides', 'wellness tools', 'patient education', 'health information Washington', 'primary care guide', 'concierge medicine resources'],
  openGraph: {
    title: 'Patient Resources and Health Guides | Sankofa Family Medicine',
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
        alt: 'Sankofa Family Medicine Patient Resources and Health Guides',
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
    'content-type': 'Resources',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
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

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
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

        {/* Featured Guide */}
        <section className="py-20 bg-sfm-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sfm-gold/20 to-sfm-azure/10 rounded-[40px] blur-2xl opacity-50" />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-sfm-gold/10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="p-8 md:p-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 rounded-full border border-sfm-gold/20 mb-6">
                      <Download className="w-4 h-4 text-sfm-gold" />
                      <span className="text-sfm-gold text-sm font-semibold">FREE GUIDE</span>
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4 leading-tight">
                      How Healthy Is Your Relationship With Your Primary Care Doctor?
                    </h2>
                    
                    <p className="text-sfm-navy/70 mb-8 leading-relaxed text-lg">
                      A physician&apos;s guide to continuity, prevention, and what most patients never see. Learn what good primary care looks like and how to recognize when it is quietly failing you.
                    </p>

                    <div className="space-y-4 mb-8">
                      {[
                        'Why normal labs can still miss real problems',
                        'How continuity changes outcomes before symptoms appear',
                        'What questions to ask before committing to a doctor',
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-sfm-gold" />
                          </div>
                          <span className="text-sfm-navy/70">{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/resources/primary-care-guide" className="btn-primary">
                      Get the Free Guide
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                  {/* Visual Side - Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src="/images/sfm-about.png"
                      alt="Medical desk with stethoscope representing thoughtful, unhurried care"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/80 via-sfm-navy/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <p className="text-white/90 font-display text-xl italic leading-relaxed">
                        &ldquo;Do you feel known by the person responsible for your care?&rdquo;
                      </p>
                      <div className="w-12 h-1 bg-sfm-gold/50 rounded-full mx-auto my-4" />
                      <p className="text-white/60 text-sm">
                        Written by Dr. Yaw Nkrumah
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Resources Coming */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-azure/10 rounded-full border border-sfm-azure/20 mb-6">
                <Sparkles className="w-4 h-4 text-sfm-azure" />
                <span className="text-sfm-azure text-sm font-medium">Resource Library</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">Additional Resources</h2>
              <p className="text-sfm-navy/60 max-w-xl mx-auto">
                We are building a comprehensive library of educational content for our patients and the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Available Now */}
              <Link
                href="/resources/primary-care-guide"
                className="group relative bg-white border border-sfm-gold/20 rounded-2xl p-6 hover:border-sfm-gold/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-sfm-gold/10 text-sfm-gold text-xs font-semibold rounded-full">
                    Available Now
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sfm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sfm-gold/20 transition-colors">
                    <FileText className="w-7 h-7 text-sfm-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl text-sfm-navy mb-2 group-hover:text-sfm-azure transition-colors">
                      Concierge Medicine Guide
                    </h3>
                    <p className="text-sfm-navy/60 text-sm mb-4">
                      Understanding the concierge medicine model and whether it is right for you.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sfm-azure font-medium text-sm group-hover:gap-3 transition-all">
                      Read Guide
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Emergency Resources - Available Now */}
              <Link
                href="/emergency"
                className="group relative bg-white border border-red-200 rounded-2xl p-6 hover:border-red-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full">
                    Available Now
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <Heart className="w-7 h-7 text-red-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl text-sfm-navy mb-2 group-hover:text-red-600 transition-colors">
                      Emergency Resources
                    </h3>
                    <p className="text-sfm-navy/60 text-sm mb-4">
                      Crisis hotlines, hospital listings, and know when to call 911.
                    </p>
                    <span className="inline-flex items-center gap-2 text-red-600 font-medium text-sm group-hover:gap-3 transition-all">
                      View Resources
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Coming Soon */}
              <div className="relative bg-sfm-cream/50 border border-sfm-navy/10 rounded-2xl p-6">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-sfm-navy/10 text-sfm-navy/50 text-xs font-semibold rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Coming 2026
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sfm-navy/5 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-sfm-navy/30" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl text-sfm-navy/50 mb-2">
                      Cardiometabolic Health Basics
                    </h3>
                    <p className="text-sfm-navy/40 text-sm">
                      Understanding blood pressure, cholesterol, and metabolic markers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="relative bg-sfm-cream/50 border border-sfm-navy/10 rounded-2xl p-6">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-sfm-navy/10 text-sfm-navy/50 text-xs font-semibold rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Coming 2026
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sfm-navy/5 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-7 h-7 text-sfm-navy/30" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl text-sfm-navy/50 mb-2">
                      Genetic Testing Explained
                    </h3>
                    <p className="text-sfm-navy/40 text-sm">
                      How precision medicine enhances preventive care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="relative bg-sfm-cream/50 border border-sfm-navy/10 rounded-2xl p-6">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-sfm-navy/10 text-sfm-navy/50 text-xs font-semibold rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Coming 2026
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sfm-navy/5 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-sfm-navy/30" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-xl text-sfm-navy/50 mb-2">
                      Weight Management Guide
                    </h3>
                    <p className="text-sfm-navy/40 text-sm">
                      Medical approaches to sustainable weight management.
                    </p>
                  </div>
                </div>
              </div>
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
