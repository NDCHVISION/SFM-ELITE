import Link from 'next/link'
import { ArrowRight, Shield, Lock, Eye, FileText, Mail, Phone, Cookie, BarChart3, Globe, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sankofa Family Medicine',
  description: 'Privacy policy and HIPAA compliance information for Sankofa Family Medicine. Learn how we protect your health information and maintain strict medical privacy standards.',
  keywords: ['privacy policy', 'HIPAA compliance', 'medical privacy', 'health data protection', 'patient privacy'],
  openGraph: {
    title: 'Privacy Policy | Sankofa Family Medicine',
    description: 'How we protect your health information and maintain strict medical privacy standards.',
    url: 'https://sankofafamilymedicine.com/privacy',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Sankofa Family Medicine',
    description: 'How we protect your health information and maintain strict medical privacy standards.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/privacy',
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
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://sankofafamilymedicine.com/privacy' },
  ],
}

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
          <div className="absolute inset-0 pattern-sankofa-spiral-gold pattern-sankofa-animated pattern-subtle" aria-hidden="true" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <Shield className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Your Privacy Matters</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Sankofa Family Medicine is committed to protecting your privacy and maintaining the confidentiality of your health information.
            </p>
            <p className="text-white/50 text-sm mt-6">Last updated: January 2026</p>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-sfm-cream border-b border-sfm-gold/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-sfm-navy/70">
                <div className="w-10 h-10 rounded-full bg-sfm-gold/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-sfm-gold" />
                </div>
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sfm-navy/70">
                <div className="w-10 h-10 rounded-full bg-sfm-azure/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-sfm-azure" />
                </div>
                <span className="text-sm font-medium">Encrypted Data</span>
              </div>
              <div className="flex items-center gap-2 text-sfm-navy/70">
                <div className="w-10 h-10 rounded-full bg-sfm-gold/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-sfm-gold" />
                </div>
                <span className="text-sm font-medium">Transparent Practices</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-16">
              {/* Introduction */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <h2 className="font-display text-3xl text-sfm-navy">Introduction</h2>
                </div>
                <div className="pl-15 space-y-4 text-sfm-navy/70 leading-relaxed">
                  <p>
                    Sankofa Family Medicine (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;Company&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-azure/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-sfm-azure" />
                  </div>
                  <h2 className="font-display text-3xl text-sfm-navy">Information We Collect</h2>
                </div>
                <div className="space-y-8">
                  <div className="bg-sfm-cream rounded-2xl p-6 border-l-4 border-sfm-gold">
                    <h3 className="font-display text-xl text-sfm-navy mb-4">Personal Information</h3>
                    <p className="text-sfm-navy/70 mb-4">We collect information you voluntarily provide through our contact forms, including:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {['Name and email address', 'Phone number', 'Medical history and health information', 'Insurance information', 'Any other information you choose to provide'].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sfm-navy/70 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-sfm-gold" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-sfm-navy/5 rounded-2xl p-6 border-l-4 border-sfm-azure">
                    <h3 className="font-display text-xl text-sfm-navy mb-4">Automatically Collected Information</h3>
                    <p className="text-sfm-navy/70 mb-4">When you visit our website, we may automatically collect:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {['Browser type and version', 'IP address', 'Pages visited and time spent', 'Device information', 'Referral source'].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sfm-navy/70 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-sfm-azure" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <h2 className="font-display text-3xl text-sfm-navy">How We Use Your Information</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Providing and improving our services',
                    'Responding to your inquiries',
                    'Processing membership applications',
                    'Sending service updates and communications',
                    'Complying with legal obligations',
                    'Protecting against fraud and security threats',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-sfm-cream rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-sfm-gold" />
                      </div>
                      <span className="text-sfm-navy/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-gradient-to-br from-sfm-navy to-sfm-azure rounded-3xl p-8 md:p-10 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <h2 className="font-display text-3xl">Data Protection and Security</h2>
                </div>
                <p className="text-white/80 leading-relaxed">
                  We implement appropriate technical, administrative, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard protections.
                </p>
              </div>

              {/* HIPAA Section */}
              <div className="bg-sfm-cream rounded-3xl p-8 md:p-10 border border-sfm-gold/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <h2 className="font-display text-3xl text-sfm-navy">Medical Information (HIPAA)</h2>
                </div>
                <p className="text-sfm-navy/70 leading-relaxed mb-6">
                  Health information collected through our services is protected under the Health Insurance Portability and Accountability Act (HIPAA). All protected health information is handled in strict compliance with HIPAA regulations. We maintain rigorous safeguards to ensure your medical information remains confidential and secure.
                </p>
                <div className="bg-white rounded-xl p-6 border border-sfm-gold/10">
                  <h3 className="font-display text-lg text-sfm-navy mb-4">Official HIPAA Documents</h3>
                  <p className="text-sfm-navy/70 leading-relaxed">
                    Full HIPAA documents, including our Notice of Privacy Practices and other compliance materials, are available in the patient portal. Please contact us if you need assistance accessing these documents.
                  </p>
                </div>
              </div>

              {/* Website Analytics and Cookies Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-sfm-gold" />
                  </div>
                  <h2 id="website-analytics-and-cookies" className="font-display text-3xl text-sfm-navy">Website Analytics and Cookies</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-sfm-navy/70 leading-relaxed">
                    To improve our website and understand how visitors use our services, we use the following technologies. We do not use any tracking for advertising purposes.
                  </p>

                  {/* Google Analytics */}
                  <div className="bg-sfm-cream rounded-2xl p-6 border-l-4 border-sfm-gold">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-sfm-gold" />
                      <h3 className="font-display text-xl text-sfm-navy">Google Analytics 4</h3>
                    </div>
                    <p className="text-sfm-navy/70 mb-4">
                      We use Google Analytics 4 (GA4), a web analytics service provided by Google LLC, to understand how visitors interact with our website. GA4 collects:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      {['Pages visited and time spent', 'How you arrived at our website', 'General geographic location', 'Device type and browser', 'Interactions with website features'].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sfm-navy/70 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-sfm-gold" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-sfm-navy/70 text-sm mb-3">
                      This information helps us improve your experience. <strong>We do not use this data for advertising.</strong> Google may transfer data to servers in the United States.
                    </p>
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-sfm-azure hover:underline"
                    >
                      Google Privacy Policy <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Formspree */}
                  <div className="bg-sfm-navy/5 rounded-2xl p-6 border-l-4 border-sfm-azure">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-sfm-azure" />
                      <h3 className="font-display text-xl text-sfm-navy">Form Handling (Formspree)</h3>
                    </div>
                    <p className="text-sfm-navy/70 mb-3">
                      Contact forms and subscription forms on our website are processed by Formspree, a secure form handling service. When you submit a form, Formspree securely transmits your submission (name, email, and message) to us. Formspree does not use your information for marketing purposes.
                    </p>
                    <a 
                      href="https://formspree.io/legal/privacy-policy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-sfm-azure hover:underline"
                    >
                      Formspree Privacy Policy <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Vercel Hosting */}
                  <div className="bg-white rounded-2xl p-6 border border-sfm-navy/10">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-5 h-5 text-sfm-navy" />
                      <h3 className="font-display text-xl text-sfm-navy">Website Hosting (Vercel)</h3>
                    </div>
                    <p className="text-sfm-navy/70 mb-3">
                      Our website is hosted on Vercel&apos;s platform. Vercel may collect basic server logs including IP addresses for security and performance purposes.
                    </p>
                    <a 
                      href="https://vercel.com/legal/privacy-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-sfm-azure hover:underline"
                    >
                      Vercel Privacy Policy <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Cookie Consent */}
                  <div className="bg-gradient-to-br from-sfm-gold/10 to-sfm-gold/5 rounded-2xl p-6 border border-sfm-gold/20">
                    <h3 className="font-display text-xl text-sfm-navy mb-4">Your Cookie Choices</h3>
                    <p className="text-sfm-navy/70 mb-4">
                      When you first visit our website, a cookie consent banner appears allowing you to choose:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white rounded-xl p-4">
                        <p className="font-semibold text-sfm-navy mb-2">Accept All</p>
                        <p className="text-sfm-navy/60 text-sm">Enables analytics cookies in addition to essential cookies for website functionality.</p>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <p className="font-semibold text-sfm-navy mb-2">Essential Only</p>
                        <p className="text-sfm-navy/60 text-sm">Only cookies required for basic website functionality (theme preference, consent choice).</p>
                      </div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4">
                      <h4 className="font-semibold text-sfm-navy mb-2">How to Withdraw Consent</h4>
                      <p className="text-sfm-navy/70 text-sm mb-2">You may withdraw your consent to analytics tracking at any time by:</p>
                      <ul className="text-sfm-navy/60 text-sm space-y-1 list-disc list-inside">
                        <li>Clearing cookies in your browser settings and revisiting our website</li>
                        <li>Installing browser extensions that block analytics tracking</li>
                        <li>Contacting us at info@sankofafamilymedicine.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sfm-azure/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-sfm-azure" />
                  </div>
                  <h2 className="font-display text-3xl text-sfm-navy">Your Rights</h2>
                </div>
                <p className="text-sfm-navy/70 mb-6">You have the right to:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Access your personal information',
                    'Correct inaccurate information',
                    'Request deletion of your information',
                    'Opt-out of promotional communications',
                    'Request a copy of your health records',
                    'Withdraw cookie consent at any time',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-sfm-azure/10 hover:border-sfm-azure/30 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-sfm-azure/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-sfm-azure" />
                      </div>
                      <span className="text-sfm-navy/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-sfm-gold/20 shadow-lg">
                <h2 className="font-display text-3xl text-sfm-navy mb-6">Contact Us</h2>
                <p className="text-sfm-navy/70 mb-8">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="mailto:info@sankofafamilymedicine.com"
                    className="flex items-center gap-4 p-4 bg-sfm-cream rounded-xl hover:bg-sfm-gold/10 transition-colors group"
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
                    className="flex items-center gap-4 p-4 bg-sfm-cream rounded-xl hover:bg-sfm-gold/10 transition-colors group"
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

              {/* Footer Note */}
              <div className="text-center pt-8 border-t border-sfm-navy/10">
                <p className="text-sfm-navy/50 text-sm">
                  This Privacy Policy is subject to change at any time. We will notify you of material changes by posting the updated policy on our website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-sfm-cream">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sfm-navy/60 mb-4">Have questions about our privacy practices?</p>
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
