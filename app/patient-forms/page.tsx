import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Phone, Calendar, AlertCircle, Users, Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patient Forms and Policies | Sankofa Family Medicine',
  description: 'Access important patient documents including Notice of Privacy Practices, telehealth consent, appointment policies, patient rights, and emergency resources for Sankofa Family Medicine.',
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
    description: 'Access important patient documents including privacy practices, consent forms, and policies.',
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
    description: 'Access important patient documents including privacy practices and consent forms.',
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

interface DocumentItem {
  title: string
  description: string
  href: string
  required: boolean
  urgent?: boolean
}

interface DocumentCategory {
  category: string
  icon: typeof Shield
  description: string
  items: DocumentItem[]
}

const documents: DocumentCategory[] = [
  {
    category: 'Privacy and Rights',
    icon: Shield,
    description: 'Documents outlining how we protect your health information and your rights as a patient.',
    items: [
      {
        title: 'Notice of Privacy Practices',
        description: 'Comprehensive overview of how Sankofa Family Medicine uses, discloses, and protects your protected health information (PHI) under HIPAA regulations.',
        href: '/documents/notice-of-privacy-practices.pdf',
        required: true,
      },
      {
        title: 'Washington State Privacy Addendum',
        description: 'Additional privacy protections specific to Washington State residents under RCW 70.02, including the 15 working day access timeline.',
        href: '/documents/privacy-practices-washington-addendum.pdf',
        required: true,
      },
      {
        title: 'Your Rights as a Patient',
        description: 'Plain language summary of your rights regarding access, amendment, restriction, and disclosure of your health records.',
        href: '/documents/patient-rights-summary.pdf',
        required: false,
      },
    ],
  },
  {
    category: 'Telehealth and Consent',
    icon: Users,
    description: 'Information about our virtual care services and what to expect during telehealth visits.',
    items: [
      {
        title: 'Telehealth Informed Consent',
        description: 'Detailed explanation of telehealth services, technology requirements, benefits, risks, and your consent for virtual care. Includes Washington State minor consent exceptions.',
        href: '/documents/telehealth-informed-consent.pdf',
        required: true,
      },
      {
        title: 'Recording Consent Policy',
        description: 'Washington State requires two-party consent for recording. This policy explains when and how visit recordings may occur.',
        href: '/documents/recording-consent-policy.pdf',
        required: false,
      },
      {
        title: 'Minor Consent and Assent Policy',
        description: 'Guidelines for adolescent patients ages 12 to 17, including Washington State exceptions for reproductive health, mental health, and substance use services.',
        href: '/documents/minor-consent-policy.pdf',
        required: false,
      },
    ],
  },
  {
    category: 'Appointments and Policies',
    icon: Calendar,
    description: 'Policies regarding scheduling, cancellations, and practice procedures.',
    items: [
      {
        title: 'Appointment and Cancellation Policy',
        description: 'Guidelines for scheduling appointments, cancellation requirements, and our approach to missed appointments within the membership model.',
        href: '/documents/appointment-policy.pdf',
        required: false,
      },
      {
        title: 'Patient Grievance Policy',
        description: 'Process for submitting concerns, complaints, or grievances, and how we address patient feedback to improve care.',
        href: '/documents/patient-grievance-policy.pdf',
        required: false,
      },
    ],
  },
  {
    category: 'Emergency Resources',
    icon: AlertCircle,
    description: 'Critical information for mental health crises and medical emergencies.',
    items: [
      {
        title: 'Emergency and Crisis Resources',
        description: 'Comprehensive list of emergency contacts, crisis hotlines, and resources for mental health emergencies. Available 24/7.',
        href: '/documents/emergency-crisis-resources.pdf',
        required: false,
        urgent: true,
      },
    ],
  },
]

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
              and patient rights documents to understand how we protect your health information and 
              deliver care.
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
                Accountability Act (HIPAA) and Washington State privacy laws. All documents are reviewed 
                annually and updated to reflect current regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {documents.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div key={categoryIndex}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-sfm-azure/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-sfm-azure" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl lg:text-3xl font-semibold text-sfm-navy">
                        {category.category}
                      </h2>
                      <p className="text-sfm-navy/60 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Document Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((doc, docIndex) => (
                      <a
                        key={docIndex}
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block bg-white border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-sfm-gold/50 ${
                          doc.urgent 
                            ? 'border-red-200 bg-red-50/30 hover:border-red-300' 
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            doc.urgent 
                              ? 'bg-red-100' 
                              : 'bg-sfm-azure/10'
                          }`}>
                            <FileText className={`w-5 h-5 ${
                              doc.urgent ? 'text-red-600' : 'text-sfm-azure'
                            }`} />
                          </div>
                          <div className="flex items-center gap-2">
                            {doc.required && (
                              <span className="text-xs font-medium text-sfm-gold bg-sfm-gold/10 px-2 py-1 rounded-full">
                                Required
                              </span>
                            )}
                            {doc.urgent && (
                              <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
                                24/7 Access
                              </span>
                            )}
                          </div>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-sfm-navy mb-2 group-hover:text-sfm-azure transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sfm-navy/60 text-sm leading-relaxed mb-4">
                          {doc.description}
                        </p>
                        <div className="flex items-center gap-2 text-sfm-azure text-sm font-medium">
                          <Download className="w-4 h-4" />
                          <span>View PDF</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
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
            description: 'Access important patient documents including Notice of Privacy Practices, telehealth consent, appointment policies, and emergency resources.',
            url: 'https://sankofafamilymedicine.com/patient-forms',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Sankofa Family Medicine',
              url: 'https://sankofafamilymedicine.com'
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'DigitalDocument',
                    name: 'Notice of Privacy Practices',
                    description: 'HIPAA-compliant notice explaining how protected health information is used and disclosed.',
                    url: 'https://sankofafamilymedicine.com/documents/notice-of-privacy-practices.pdf'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'DigitalDocument',
                    name: 'Telehealth Informed Consent',
                    description: 'Consent form for virtual care services including technology requirements and patient rights.',
                    url: 'https://sankofafamilymedicine.com/documents/telehealth-informed-consent.pdf'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'DigitalDocument',
                    name: 'Patient Rights Summary',
                    description: 'Plain language summary of patient rights under HIPAA and Washington State law.',
                    url: 'https://sankofafamilymedicine.com/documents/patient-rights-summary.pdf'
                  }
                }
              ]
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
