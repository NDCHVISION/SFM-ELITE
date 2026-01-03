import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patient Forms and Policies | Sankofa Family Medicine',
  description: 'Access patient forms and HIPAA documents through the Sankofa Family Medicine patient portal.',
  keywords: [
    'patient forms',
    'HIPAA notice of privacy practices',
    'telehealth consent',
    'patient rights',
    'healthcare policies',
    'Washington State healthcare',
    'virtual primary care forms',
    'medical consent forms'
  ],
  openGraph: {
    title: 'Patient Forms and Policies | Sankofa Family Medicine',
    description: 'Access patient forms and HIPAA documents through the patient portal.',
    url: 'https://sankofafamilymedicine.com/patient-forms',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Patient Forms and Policies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Forms | Sankofa Family Medicine',
    description: 'Access patient forms and HIPAA documents through the patient portal.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/patient-forms',
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
    'content-type': 'Forms',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

export default function PatientFormsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sfm-navy via-sfm-azure to-sfm-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/sankofa-bird.png')] bg-no-repeat bg-right-bottom opacity-5 bg-contain" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-sfm-gold/10 border border-sfm-gold/30 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-sfm-gold" />
              <span className="text-sfm-gold text-sm font-medium tracking-wide">Patient Resources</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Patient Forms <span className="text-sfm-gold">&amp;</span> Policies
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Transparency is fundamental to the care relationship. Access our policies, consent forms, 
              and patient rights documents through the patient portal.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-sfm-cream border-b border-sfm-gold/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-start gap-4 max-w-4xl">
            <div className="flex-shrink-0 w-10 h-10 bg-sfm-azure/10 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-sfm-azure" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-sfm-navy mb-1">HIPAA Compliant Practice</h2>
              <p className="text-sfm-navy/70 text-sm leading-relaxed">
                Sankofa Family Medicine maintains full compliance with the Health Insurance Portability and 
                Accountability Act (HIPAA) and Washington State privacy laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Portal Notice */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-sfm-azure/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="w-10 h-10 text-sfm-azure" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-sfm-navy mb-6">
              Documents Available in Patient Portal
            </h2>
            <p className="text-sfm-navy/70 text-lg leading-relaxed mb-8">
              Full HIPAA documents, including our Notice of Privacy Practices, telehealth consent forms, 
              and other compliance materials, are available in the patient portal. Please contact us if 
              you need assistance accessing these documents.
            </p>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="bg-sfm-cream py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-sfm-navy mb-4">
              Questions About Our Policies?
            </h2>
            <p className="text-sfm-navy/70 mb-8 leading-relaxed">
              We believe in transparency and want you to fully understand your rights and our practices. 
              If you have questions about any document or need clarification, please reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-sfm-azure text-white px-6 py-3 rounded-lg font-medium hover:bg-sfm-navy transition-colors"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 bg-white text-sfm-azure border border-sfm-azure/20 px-6 py-3 rounded-lg font-medium hover:bg-sfm-azure/5 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Officer Contact */}
      <section className="bg-sfm-navy py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sfm-azure/20 border border-sfm-gold/20 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sfm-gold/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-sfm-gold" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">Privacy Officer Contact</h3>
                  <p className="text-white/70 mb-4">
                    For privacy-related inquiries, requests to access or amend your health records, 
                    or to file a privacy complaint:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="text-white/90">
                      <span className="text-sfm-gold font-medium">Privacy Officer:</span> Yaw A. Nkrumah, MD
                    </div>
                    <div className="text-white/90">
                      <span className="text-sfm-gold font-medium">Email:</span>{' '}
                      <a href="mailto:privacy@sankofafamilymedicine.com" className="underline hover:text-sfm-gold transition-colors">
                        privacy@sankofafamilymedicine.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Patient Forms and Policies',
            description: 'Access patient forms and HIPAA documents through the Sankofa Family Medicine patient portal.',
            url: 'https://sankofafamilymedicine.com/patient-forms',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Sankofa Family Medicine',
              url: 'https://sankofafamilymedicine.com'
            },
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Sankofa Family Medicine',
              '@id': 'https://sankofafamilymedicine.com/#organization'
            }
          })
        }}
      />
    </main>
  )
}
