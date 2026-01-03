import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Sankofa Family Medicine is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility standards and how to report issues.',
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/accessibility',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'ai-content-declaration': 'human-authored',
    'content-type': 'Legal',
  },
}

const accessibilitySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Accessibility Statement',
  description: 'Accessibility commitment and standards for Sankofa Family Medicine website',
  url: 'https://sankofafamilymedicine.com/accessibility',
  publisher: {
    '@type': 'MedicalBusiness',
    name: 'Sankofa Family Medicine',
  },
}

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    'Keyboard navigation throughout the entire website',
    'Screen reader compatibility with ARIA labels and roles',
    'Skip to main content link for efficient navigation',
    'Consistent heading hierarchy for document structure',
    'Alternative text for all meaningful images',
    'Form labels and error messages for assistive technology',
    'Color contrast ratios meeting WCAG AA standards',
    'Resizable text without loss of functionality',
    'Focus indicators visible on all interactive elements',
    'Reduced motion support for vestibular sensitivities',
    'High contrast mode support',
    'No content that flashes more than three times per second',
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accessibilitySchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-white via-sfm-cream/20 to-sfm-cream/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">Our Commitment</p>
          <h1 className="font-display text-5xl md:text-6xl text-sfm-navy mb-8 leading-[1.1]">
            Accessibility Statement
          </h1>
          <div className="divider-gold mx-auto mb-10" />
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sankofa Family Medicine is committed to ensuring digital accessibility for people with disabilities. 
            We continually improve the user experience for everyone.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Commitment */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">Our Commitment</h2>
            <div className="prose prose-lg max-w-none text-muted">
              <p>
                Sankofa Family Medicine believes that healthcare information should be accessible to everyone. 
                We are committed to providing a website that is accessible to the widest possible audience, 
                regardless of technology or ability.
              </p>
              <p>
                We strive to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 
                Level AA. These guidelines explain how to make web content more accessible for people with disabilities 
                and more user-friendly for everyone.
              </p>
            </div>
          </div>

          {/* Standards */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">Accessibility Standards</h2>
            <p className="text-muted mb-8">
              Our website has been designed with the following accessibility features:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-sfm-cream/50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sfm-navy text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assistive Technology */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">Assistive Technology Support</h2>
            <div className="prose prose-lg max-w-none text-muted">
              <p>
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul>
                <li>Screen readers (including JAWS, NVDA, VoiceOver, and TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Browser zoom functionality (up to 200%)</li>
              </ul>
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">Feedback</h2>
            <div className="prose prose-lg max-w-none text-muted mb-8">
              <p>
                We welcome your feedback on the accessibility of the Sankofa Family Medicine website. 
                If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
              </p>
            </div>
            <div className="bg-sfm-cream/50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-xl text-sfm-navy mb-6">Contact Us About Accessibility</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:accessibility@sankofafamilymedicine.com" 
                  className="flex items-center gap-4 text-sfm-navy hover:text-sfm-azure transition-colors group"
                >
                  <span className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-sfm-azure transition-colors">
                    <Mail className="w-5 h-5 text-sfm-azure" aria-hidden="true" />
                  </span>
                  <span className="font-medium">accessibility@sankofafamilymedicine.com</span>
                </a>
                <a 
                  href="tel:+14252857390" 
                  className="flex items-center gap-4 text-sfm-navy hover:text-sfm-azure transition-colors group"
                >
                  <span className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-sfm-azure transition-colors">
                    <Phone className="w-5 h-5 text-sfm-azure" aria-hidden="true" />
                  </span>
                  <span className="font-medium">+1 (425) 285-7390</span>
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </div>
          </div>

          {/* Limitations */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">Known Limitations</h2>
            <div className="prose prose-lg max-w-none text-muted">
              <p>
                While we strive for comprehensive accessibility, some content may have limitations:
              </p>
              <ul>
                <li>PDF documents may not be fully accessible. We are working to remediate these documents. 
                Please contact us if you need information from a PDF in an alternative format.</li>
                <li>Third-party content or embedded applications may not meet our accessibility standards.</li>
              </ul>
              <p>
                We are actively working to address these limitations and improve our website accessibility.
              </p>
            </div>
          </div>

          {/* Date */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              This accessibility statement was last updated on January 3, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">
            Questions About Our Services?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            If you have questions about our healthcare services or need assistance, 
            our team is here to help.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
