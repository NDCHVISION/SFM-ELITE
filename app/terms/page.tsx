import Link from 'next/link'
import { ArrowRight, FileText, Scale, AlertTriangle, Stethoscope, Link2, RefreshCw, MapPin, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Sankofa Family Medicine',
  description: 'Terms of service and user agreement for Sankofa Family Medicine virtual membership-based primary care services in Washington State.',
  keywords: ['terms of service', 'user agreement', 'legal terms', 'service agreement', 'healthcare terms'],
  openGraph: {
    title: 'Terms of Service | Sankofa Family Medicine',
    description: 'Terms of service for Sankofa Family Medicine virtual membership-based primary care services.',
    url: 'https://sankofafamilymedicine.com/terms',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Sankofa Family Medicine',
    description: 'Terms of service for Sankofa Family Medicine virtual membership-based primary care services.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/terms',
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
    'content-type': 'Legal',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
    { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://sankofafamilymedicine.com/terms' },
  ],
}

const sections = [
  {
    icon: FileText,
    title: 'Agreement to Terms',
    content: 'By accessing and using the Sankofa Family Medicine website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.',
  },
  {
    icon: Scale,
    title: 'Use License',
    content: 'Permission is granted to temporarily download one copy of the materials (information or software) on Sankofa Family Medicine\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
    list: [
      'Modify or copy the materials',
      'Use the materials for any commercial purpose or for any public display',
      'Attempt to decompile or reverse engineer any software contained on the website',
      'Remove any copyright or other proprietary notations from the materials',
      'Transfer the materials to another person or mirror the materials on any other server',
    ],
    listPrefix: 'Under this license you may not:',
  },
  {
    icon: AlertTriangle,
    title: 'Disclaimer',
    content: 'The materials on Sankofa Family Medicine\'s website are provided on an "as is" basis. Sankofa Family Medicine makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    highlight: true,
  },
  {
    icon: Stethoscope,
    title: 'Medical Disclaimer',
    content: 'The information provided on this website is for educational and informational purposes only and does not constitute medical advice. This website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.',
    additionalContent: 'Virtual consultations provided by Sankofa Family Medicine are not intended to serve as emergency medical care. In case of a medical emergency, please call 911 or go to your nearest emergency room.',
    emergency: true,
  },
  {
    icon: Scale,
    title: 'Limitations',
    content: 'In no event shall Sankofa Family Medicine or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sankofa Family Medicine\'s website, even if Sankofa Family Medicine or an authorized representative has been notified orally or in writing of the possibility of such damage.',
  },
  {
    icon: FileText,
    title: 'Accuracy of Materials',
    content: 'The materials appearing on Sankofa Family Medicine\'s website could include technical, typographical, or photographic errors. Sankofa Family Medicine does not warrant that any of the materials on our website are accurate, complete, or current. Sankofa Family Medicine may make changes to the materials contained on our website at any time without notice.',
  },
  {
    icon: Link2,
    title: 'Links',
    content: 'Sankofa Family Medicine has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sankofa Family Medicine of the site. Use of any such linked website is at the user\'s own risk.',
  },
  {
    icon: RefreshCw,
    title: 'Modifications',
    content: 'Sankofa Family Medicine may revise these Terms of Service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.',
  },
  {
    icon: MapPin,
    title: 'Governing Law',
    content: 'These Terms of Service and any separate agreements we provide to clarify our services are governed by and construed in accordance with the laws of the State of Washington, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
  },
]

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="pt-16 lg:pt-[128px]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
          <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <Scale className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Legal Agreement</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Terms of Service
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-white/50 text-sm mt-6">Last updated: January 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div 
                  key={section.title}
                  className={`${
                    section.highlight 
                      ? 'bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-6 md:p-8' 
                      : section.emergency
                        ? 'bg-red-50 border-l-4 border-red-400 rounded-r-2xl p-6 md:p-8'
                        : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      section.highlight 
                        ? 'bg-amber-100' 
                        : section.emergency 
                          ? 'bg-red-100'
                          : 'bg-sfm-gold/10'
                    }`}>
                      <section.icon className={`w-6 h-6 ${
                        section.highlight 
                          ? 'text-amber-600' 
                          : section.emergency 
                            ? 'text-red-600'
                            : 'text-sfm-gold'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl text-sfm-navy mb-4">{section.title}</h2>
                      <p className="text-sfm-navy/70 leading-relaxed">{section.content}</p>
                      
                      {section.listPrefix && (
                        <p className="text-sfm-navy/70 mt-4 mb-3">{section.listPrefix}</p>
                      )}
                      
                      {section.list && (
                        <div className="space-y-2 mt-4">
                          {section.list.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-sfm-azure mt-2 flex-shrink-0" />
                              <span className="text-sfm-navy/70">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.additionalContent && (
                        <p className="text-sfm-navy/70 leading-relaxed mt-4">{section.additionalContent}</p>
                      )}
                      
                      {section.emergency && (
                        <div className="mt-6 p-4 bg-red-100 rounded-xl border border-red-200">
                          <p className="text-red-800 font-medium text-sm flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            For medical emergencies, call 911 immediately.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Contact Section */}
              <div className="bg-sfm-cream rounded-3xl p-8 md:p-10 border border-sfm-gold/20">
                <h2 className="font-display text-3xl text-sfm-navy mb-6">Contact Information</h2>
                <p className="text-sfm-navy/70 mb-8">
                  If you have any questions about these Terms of Service, please contact us:
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-sfm-cream">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sfm-navy/60 mb-4">Have questions about our terms?</p>
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
