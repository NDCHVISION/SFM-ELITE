import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
  ArrowRight,
  GraduationCap,
  FileText,
  Stethoscope,
  Shield,
  Award,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import { Metadata } from 'next'

/* =========================================================
METADATA - ENHANCED FOR SEO
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),
  title: 'Dr. Yaw Nkrumah, MD | Board-Certified Family Doctor | Washington State',
  description:
    'Meet Dr. Yaw Nkrumah, MD - board-certified family doctor and founder of Sankofa Family Medicine. Membership-based primary care for Washington State patients via telehealth.',
  keywords: [
    'Dr. Yaw Nkrumah',
    'family doctor Washington State',
    'Sankofa Family Medicine',
    'membership-based primary care',
    'direct primary care Washington',
    'DPC Washington State',
    'telehealth primary care',
    'board-certified family medicine',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD' }],
  openGraph: {
    title: 'Dr. Yaw Nkrumah, MD | Board-Certified Family Doctor',
    description: 'Founder of Sankofa Family Medicine. Membership-based primary care for Washington State.',
    url: 'https://sankofafamilymedicine.com/founder',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
        width: 400,
        height: 400,
        alt: 'Dr. Yaw Nkrumah, MD',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Dr. Yaw Nkrumah, MD | Sankofa Family Medicine',
    description: 'Board-certified family doctor. Membership-based primary care for Washington State.',
    images: ['https://sankofafamilymedicine.com/images/dr-nkrumah.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/founder',
  },
  robots: { index: true, follow: true },
}

/* =========================================================
SCHEMA - ENHANCED WITH CREDENTIALS + FAQ + NAP
========================================================= */

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://sankofafamilymedicine.com/founder#page',
      url: 'https://sankofafamilymedicine.com/founder',
      name: 'Dr. Yaw Nkrumah, MD | Board-Certified Family Doctor',
      description: 'Founder profile for Dr. Yaw Nkrumah, MD, board-certified family doctor.',
      dateModified: '2026-01-28',
      mainEntity: { '@id': 'https://sankofafamilymedicine.com/#founder' },
      isPartOf: { '@id': 'https://sankofafamilymedicine.com/#website' },
      hasPart: { '@id': 'https://sankofafamilymedicine.com/founder#faq' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['[data-speakable]', 'h1', 'h2'],
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sankofafamilymedicine.com' },
          { '@type': 'ListItem', position: 2, name: 'About the Founder', item: 'https://sankofafamilymedicine.com/founder' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sankofafamilymedicine.com/#website',
      url: 'https://sankofafamilymedicine.com',
      name: 'Sankofa Family Medicine',
      publisher: { '@id': 'https://sankofafamilymedicine.com/#organization' },
    },
    {
      '@type': ['Person', 'Physician'],
      '@id': 'https://sankofafamilymedicine.com/#founder',
      name: 'Dr. Yaw Nkrumah, MD',
      givenName: 'Yaw',
      familyName: 'Nkrumah',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'MD',
      jobTitle: 'Founder & Medical Director',
      description: 'Board-certified family doctor and founder of Sankofa Family Medicine.',
      image: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
      url: 'https://sankofafamilymedicine.com/founder',
      medicalSpecialty: 'Family medicine',
      knowsAbout: ['Primary care', 'Family medicine', 'Preventive care', 'Chronic disease management', 'Telehealth'],
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Medical University of South Carolina',
          alternateName: 'MUSC',
          url: 'https://musc.edu',
        },
        {
          '@type': 'MedicalOrganization',
          name: 'Kadlec Family Medicine Residency',
          url: 'https://gme.providence.org/washington/family-medicine-residency-programs-wa/welcome-to-kadlec-family-medicine-residency/',
          address: { '@type': 'PostalAddress', addressRegion: 'WA', addressCountry: 'US' },
        },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Board Certification in Family Medicine',
        credentialCategory: 'Board Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'American Board of Family Medicine',
          alternateName: 'ABFM',
          url: 'https://www.theabfm.org',
        },
        url: 'https://www.credential.net/169707940',
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Family Physician',
        occupationLocation: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      },
      worksFor: { '@id': 'https://sankofafamilymedicine.com/#organization' },
      sameAs: ['https://www.linkedin.com/in/yawnkrumahmd/'],
    },
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      legalName: 'Sankofa Family Medicine PLLC',
      url: 'https://sankofafamilymedicine.com',
      description: 'Membership-based primary care for Washington State. Medicine That Remembers.',
      medicalSpecialty: ['Family Medicine', 'Primary Care'],
      areaServed: { '@type': 'State', name: 'Washington', addressCountry: 'US' },
      founder: { '@id': 'https://sankofafamilymedicine.com/#founder' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '522 W Riverside Ave, Ste N',
        addressLocality: 'Spokane',
        addressRegion: 'WA',
        postalCode: '99201',
        addressCountry: 'US',
      },
      telephone: '+1-425-285-7390',
      faxNumber: '+1-425-270-1506',
      foundingDate: '2025-09-29',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '12:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+1-425-285-7390',
          email: 'info@sankofafamilymedicine.com',
          areaServed: 'US-WA',
          availableLanguage: ['English'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'privacy officer',
          telephone: '+1-425-285-7390',
          email: 'privacy@sankofafamilymedicine.com',
          areaServed: 'US-WA',
          availableLanguage: ['English'],
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://sankofafamilymedicine.com/founder#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Dr. Nkrumah board certified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dr. Yaw Nkrumah is board certified in Family Medicine by the American Board of Family Medicine (ABFM).',
          },
        },
        {
          '@type': 'Question',
          name: 'Where does Dr. Nkrumah practice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sankofa Family Medicine serves patients located in Washington State through telehealth.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I become a patient?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Join the Founders Waitlist. No payment is required. Clinical care is planned to begin in early 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this covered by insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sankofa Family Medicine uses a Direct Primary Care (DPC) model. Membership is not health insurance. We do not bill insurance for membership services. You may use insurance for labs, imaging, and specialist care outside the membership.',
          },
        },
      ],
    },
  ],
}

/* =========================================================
FOUNDER PAGE - PRODUCTION READY
Fixes:
- Removed duplicate skip link (layout.tsx provides one)
- Fixed syntax error (extra </ul> tag removed)
- Updated Kadlec URL to Providence GME
- Disclaimers de-emphasized (text-xs, grouped)
========================================================= */

export default function FounderPage() {
  return (
    <>
      <Script
        id="ld-founder"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* HERO */}
      <section
        id="main-content"
        className="relative pt-20 pb-16 bg-sfm-navy text-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sfm-azure/20 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="relative inline-block group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sfm-gold/30 to-sfm-gold/10 blur-2xl scale-125 opacity-60 motion-reduce:transition-none motion-reduce:transform-none" aria-hidden="true" />
            <Image
              src="/images/dr-nkrumah.png"
              alt="Dr. Yaw Nkrumah, MD - Board-certified family doctor and founder of Sankofa Family Medicine"
              width={200}
              height={200}
              className="relative mx-auto rounded-full border-4 border-sfm-gold/40 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
              priority
            />
          </div>

          <p className="text-sfm-gold uppercase tracking-widest mt-8 text-base font-medium">
            Founder & Medical Director
          </p>

          <h1 id="hero-heading" className="text-white text-5xl md:text-6xl font-display mt-4" data-speakable>
            Yaw Nkrumah, MD
          </h1>

          <p className="text-white/80 text-xl md:text-2xl mt-6 max-w-xl mx-auto leading-relaxed" data-speakable>
            Board-certified family doctor. Founder of Sankofa Family Medicine.
            Membership-based primary care for Washington State.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/founders-waitlist" className="btn-primary text-lg px-8 py-4">
              Join the Founders Waitlist
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href="https://www.linkedin.com/in/yawnkrumahmd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Dr. Nkrumah on LinkedIn (opens in new tab)"
              className="btn-secondary-white text-base px-6 py-3"
            >
              LinkedIn
              <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 space-y-1 text-white/50 text-xs leading-tight">
            <p>No payment required. Joining does not create a doctor-patient relationship.</p>
            <p>Joining does not guarantee enrollment. Please do not submit medical information through the waitlist form.</p>
            <p>Services available only to patients located in Washington State.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10">
            <a
              href="https://www.credential.net/169707940"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-sfm-gold transition-colors text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-sfm-navy rounded-md px-2 py-1"
              aria-label="Verify ABFM board certification (opens in new tab)"
            >
              <Award className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
              <span>ABFM Board Certified</span>
            </a>
            <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2 text-white/70 text-base">
              <Shield className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
              <span>HIPAA-conscious privacy practices</span>
            </span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2 text-white/70 text-base">
              <FileText className="w-5 h-5 text-sfm-gold/80" aria-hidden="true" />
              <span>WA Licensed</span>
            </span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-24 bg-sfm-cream text-center overflow-hidden" aria-labelledby="philosophy-heading">
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-sfm-gold/20" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-sfm-gold/20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 id="philosophy-heading" className="sr-only">Philosophy</h2>
          <blockquote className="font-display text-3xl md:text-4xl text-sfm-navy leading-relaxed italic" data-speakable>
            "Good care happens when your doctor remembers your story and builds on it over time."
          </blockquote>
          <p className="text-sfm-navy/60 text-xl mt-8">- Dr. Yaw Nkrumah</p>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="py-28 bg-white" aria-labelledby="biography-heading">
        <div className="max-w-6xl mx-auto px-6">
          <header className="mb-12">
            <p className="text-sfm-azure text-base tracking-widest uppercase mb-4 font-medium">Biography</p>
            <h2 id="biography-heading" className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">About Dr. Nkrumah</h2>
            <div className="w-16 h-1 bg-sfm-gold" aria-hidden="true" />
          </header>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <article className="text-xl text-sfm-text-muted leading-relaxed space-y-6 order-2 lg:order-1">
              <p>Dr. Yaw Nkrumah is a board-certified family doctor and the founder of Sankofa Family Medicine.</p>
              <p>He practices relationship-based family medicine focused on continuity, prevention, and careful follow-through over time.</p>
              <p>He trained at the Medical University of South Carolina and completed his Family Medicine residency in Washington State. During training, he saw how often care breaks down when doctors change and history gets lost.</p>
              <p>Sankofa Family Medicine was created to fix that problem. The goal is simple: one doctor, one relationship, building over time.</p>
            </article>

            <figure className="relative order-1 lg:order-2 group">
              <div className="absolute -inset-4 bg-gradient-to-br from-sfm-gold/20 to-transparent rounded-3xl blur-2xl opacity-60" aria-hidden="true" />
              <Image
                src="/images/dr-nkrumah-thoughtful.png"
                alt="Dr. Yaw Nkrumah in a thoughtful moment"
                width={600}
                height={800}
                loading="lazy"
                className="relative rounded-2xl shadow-xl w-full transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:transform-none"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-28 bg-sfm-navy text-white relative overflow-hidden" aria-labelledby="credentials-heading">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-6">
          <header className="text-center mb-16">
            <p className="text-sfm-gold text-base tracking-widest uppercase mb-4 font-medium">Training & Credentials</p>
            <h2 id="credentials-heading" className="font-display text-4xl md:text-5xl text-white">Education & Licensure</h2>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://www.credential.net/169707940"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify ABFM board certification (opens in new tab)"
              className="bg-gradient-to-br from-sfm-gold/20 to-sfm-gold/5 backdrop-blur p-8 border border-sfm-gold/30 rounded-2xl hover:border-sfm-gold/50 transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-sfm-navy"
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-12 h-12 text-sfm-gold" aria-hidden="true" />
                <span className="px-3 py-1 bg-sfm-gold/20 text-sfm-gold text-sm font-medium rounded-full">Verified</span>
              </div>
              <h3 className="text-2xl font-display mb-2">Board Certified</h3>
              <p className="text-white/80 text-lg">Family Medicine (ABFM)</p>
              <p className="text-sfm-gold text-base mt-2 font-medium flex items-center gap-2">
                Click to verify
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </p>
            </a>

            <a
              href="https://musc.edu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medical University of South Carolina (opens in new tab)"
              className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-sfm-navy"
            >
              <div className="flex items-start justify-between mb-4">
                <GraduationCap className="w-12 h-12 text-sfm-gold" aria-hidden="true" />
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-display mb-2">Medical School</h3>
              <p className="text-white/80 text-lg">Medical University of South Carolina (MUSC)</p>
            </a>

            <a
              href="https://gme.providence.org/washington/family-medicine-residency-programs-wa/welcome-to-kadlec-family-medicine-residency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kadlec Family Medicine Residency at Providence (opens in new tab)"
              className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-sfm-navy"
            >
              <div className="flex items-start justify-between mb-4">
                <Stethoscope className="w-12 h-12 text-sfm-gold" aria-hidden="true" />
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-display mb-2">Residency</h3>
              <p className="text-white/80 text-lg">Kadlec Family Medicine</p>
              <p className="text-white/60 text-base mt-1">Washington State</p>
            </a>
          </div>
        </div>
      </section>

      {/* DPC CLARIFICATION */}
      <section className="py-16 bg-white border-y border-gray-100" aria-labelledby="dpc-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="dpc-heading" className="font-display text-2xl text-sfm-navy mb-4">About Direct Primary Care</h2>
          <p className="text-lg text-sfm-navy/70 leading-relaxed">
            Sankofa Family Medicine is a Direct Primary Care (DPC) practice operating under Washington's direct primary care framework (RCW 48.150).
            Membership is not health insurance and does not replace insurance coverage. You may use insurance for labs, imaging, prescriptions, and specialist care outside the membership.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium text-lg mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md px-2 py-1"
          >
            View Membership Options
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-sfm-cream" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <header className="text-center mb-12">
            <p className="text-sfm-gold text-base tracking-widest uppercase mb-4 font-medium">Questions</p>
            <h2 id="faq-heading" className="font-display text-4xl text-sfm-navy">Frequently Asked Questions</h2>
          </header>

          <div className="space-y-4">
            {[
              { q: 'Is Dr. Nkrumah board certified?', a: 'Yes. He is board certified in Family Medicine by the American Board of Family Medicine. You can verify this at credential.net/169707940.' },
              { q: 'Where does he practice?', a: 'Sankofa Family Medicine serves patients located in Washington State through telehealth. In-person care is not currently available.' },
              { q: 'How do I become a patient?', a: 'Join the Founders Waitlist. No payment is required. Clinical care is planned to begin in early 2026. Joining the waitlist does not create a doctor-patient relationship. Joining does not guarantee enrollment.' },
              { q: 'Is this covered by insurance?', a: 'Sankofa Family Medicine uses a Direct Primary Care (DPC) model. We do not bill insurance for membership services. You may use insurance for labs, imaging, and specialists outside the membership.' },
            ].map((item, index) => (
              <details key={index} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                <summary
                  id={`faq-summary-${index}`}
                  aria-controls={`faq-panel-${index}`}
                  className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="font-display text-lg text-sfm-navy pr-4">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-sfm-azure flex-shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none motion-reduce:transform-none" aria-hidden="true" />
                </summary>
                <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-summary-${index}`} className="px-6 pb-6">
                  <p className="text-sfm-text-muted text-lg leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 bg-sfm-navy text-center overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-10">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            <span className="text-white/80 text-lg font-medium">Founders Waitlist Open</span>
          </div>

          <h2 id="cta-heading" className="text-white text-4xl md:text-5xl lg:text-6xl font-display mb-6" data-speakable>
            Begin with a Doctor Who <span className="text-sfm-gold">Remembers</span>
          </h2>

          <p className="text-white/70 text-xl md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed">
            Clinical care is planned to begin in early 2026. No payment required to join the waitlist.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/founders-waitlist" className="btn-primary text-lg px-10 py-5">
              Join the Founders Waitlist
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary-white text-lg px-8 py-4">
              View Membership Options
            </Link>
          </div>

          <div className="mt-10 space-y-3 text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
            <p>Founders Waitlist only. No payment is required to join. Joining does not guarantee enrollment. Joining does not create a doctor-patient relationship. Please do not submit medical information through the waitlist form. Services are available only to patients located in Washington State.</p>
            <p>Telehealth has limits. Some concerns require an in-person exam. Dr. Nkrumah may refer to local providers when clinically appropriate. Individual health outcomes vary.</p>
            <p>Not for emergencies. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/70 text-base">
              <a
                href="https://www.credential.net/169707940"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sfm-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-sfm-navy rounded-md px-2 py-1"
                aria-label="Verify ABFM board certification (opens in new tab)"
              >
                <Award className="w-5 h-5" aria-hidden="true" />
                <span>ABFM Board Certified</span>
              </a>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5" aria-hidden="true" />
                HIPAA-conscious privacy practices
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" aria-hidden="true" />
                WA Licensed
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Notice of Privacy Practices</Link>
              <span aria-hidden="true" className="text-white/30">|</span>
              <Link href="/founders-waitlist" className="hover:text-white transition-colors">Founders Waitlist Terms</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


