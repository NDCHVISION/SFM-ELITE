import Link from 'next/link' 
import Image from 'next/image'
import Script from 'next/script'
import { ArrowRight, GraduationCap, FileText, Heart, Stethoscope, Brain, Wifi, Globe, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),
  title: 'Dr. Yaw Nkrumah, MD | Founder | Sankofa Family Medicine',
  description: 'Dr. Yaw Nkrumah, MD is the founder of Sankofa Family Medicine, a membership-based primary care practice available to Washington State patients via telehealth. Continuity-driven care built on Medicine That Remembers™.',
  authors: [{ name: 'Dr. Yaw Nkrumah, MD' }],
  keywords: [
    'Dr. Yaw Nkrumah',
    'family physician Washington',
    'Sankofa Family Medicine',
    'membership-based primary care',
    'direct primary care Washington',
    'DPC Washington State',
    'telehealth primary care Washington',
    'continuity of care',
    'Medicine That Remembers',
  ],
  openGraph: {
    title: 'Dr. Yaw Nkrumah, MD | Founder | Sankofa Family Medicine',
    description: 'Founder of Sankofa Family Medicine, a membership-based primary care practice serving Washington State.',
    url: 'https://sankofafamilymedicine.com/founder',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
        width: 400,
        height: 400,
        alt: 'Yaw Nkrumah, M.D., Founder of Sankofa Family Medicine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Yaw Nkrumah, MD | Sankofa Family Medicine',
    description: 'Founder of Sankofa Family Medicine, a membership-based primary care practice serving Washington State.',
    images: ['https://sankofafamilymedicine.com/images/dr-nkrumah.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/founder',
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
    'content-type': 'Profile',
    'medical-specialty': 'Primary Care, Family Medicine',
    'practice-model': 'Membership-Based Primary Care (DPC-aligned)',
    'service-area': 'Washington State, USA',
  },
}

// Consolidated schema using @graph for cleaner entity linking
const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebPage node
    {
      '@type': 'WebPage',
      '@id': 'https://sankofafamilymedicine.com/founder#webpage',
      url: 'https://sankofafamilymedicine.com/founder',
      name: 'Dr. Yaw Nkrumah, MD | Founder | Sankofa Family Medicine',
      description: 'Founder profile for Dr. Yaw Nkrumah, MD, board-certified family physician.',
      inLanguage: 'en-US',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
      },
      about: { '@id': 'https://sankofafamilymedicine.com/#founder' },
      isPartOf: { '@id': 'https://sankofafamilymedicine.com/#organization' },
    },
    // Person node
    {
      '@type': 'Person',
      '@id': 'https://sankofafamilymedicine.com/#founder',
      name: 'Dr. Yaw Nkrumah, MD',
      givenName: 'Yaw',
      familyName: 'Nkrumah',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'MD',
      jobTitle: 'Founder & Medical Director',
      disambiguatingDescription: 'Board-certified family physician and founder of Sankofa Family Medicine PLLC (Washington).',
      description: 'Dr. Yaw Nkrumah, MD is the founder of Sankofa Family Medicine, a membership-based primary care practice available to Washington State patients via telehealth. The practice emphasizes continuity, clinical judgment, and relationship-based care.',
      image: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
      url: 'https://sankofafamilymedicine.com/founder',
      mainEntityOfPage: { '@id': 'https://sankofafamilymedicine.com/founder#webpage' },
      sameAs: [
        'https://www.linkedin.com/in/yawnkrumahmd/',
      ],
      knowsLanguage: ['en'],
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Medical University of South Carolina',
          alternateName: 'MUSC',
        },
        {
          '@type': 'MedicalOrganization',
          name: 'Kadlec Family Medicine Residency',
          address: { '@type': 'PostalAddress', addressRegion: 'WA', addressCountry: 'US' },
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          '@id': 'https://sankofafamilymedicine.com/#abfm-board-certification',
          name: 'Board Certification in Family Medicine',
          credentialCategory: 'Board Certification',
          recognizedBy: { '@type': 'Organization', name: 'American Board of Family Medicine', alternateName: 'ABFM' },
          url: 'https://www.credential.net/169707940',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          '@id': 'https://sankofafamilymedicine.com/#wa-medical-license',
          name: 'Physician License - Washington State',
          credentialCategory: 'Medical License',
          recognizedBy: { '@type': 'GovernmentOrganization', name: 'Washington State Department of Health' },
        },
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Family Physician',
        occupationLocation: {
          '@type': 'AdministrativeArea',
          name: 'Washington',
          addressCountry: 'US',
        },
      },
      knowsAbout: [
        'Membership-Based Primary Care',
        'Virtual Primary Care',
        'Preventive Medicine',
        'Cardiometabolic Health',
      ],
      worksFor: { '@id': 'https://sankofafamilymedicine.com/#organization' },
    },
    // Organization node
    {
      '@type': 'MedicalClinic',
      '@id': 'https://sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      legalName: 'Sankofa Family Medicine PLLC',
      url: 'https://sankofafamilymedicine.com',
      logo: 'https://sankofafamilymedicine.com/images/SFM_Trans.png',
      description: 'Membership-based primary care practice available to Washington State patients via telehealth.',
      medicalSpecialty: ['Family Medicine', 'Primary Care'],
      availableLanguage: ['English'],
      isAccessibleForFree: false,
      knowsAbout: [
        'Direct Primary Care',
        'Membership-based primary care',
        'Telehealth primary care',
        'Continuity of care',
      ],
      sameAs: [
        'https://www.linkedin.com/company/sankofa-family-medicine/',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Membership Options',
        url: 'https://sankofafamilymedicine.com/services',
      },
      areaServed: {
        '@type': 'State',
        name: 'Washington',
        addressCountry: 'US',
      },
      founder: { '@id': 'https://sankofafamilymedicine.com/#founder' },
      contactPoint: [{
        '@type': 'ContactPoint',
        contactType: 'new patient inquiries',
        url: 'https://sankofafamilymedicine.com/founders-waitlist',
        availableLanguage: ['English'],
      }],
    },
  ],
}

export default function FounderPage() {
  return (
    <>
      {/* Consolidated Schema Graph */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-sfm-navy overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sfm-azure/20 rounded-full blur-3xl animate-float" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="relative inline-block mb-10 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sfm-gold/40 to-sfm-gold/10 blur-2xl scale-125 animate-pulse-slow" />
            <div className="absolute -inset-2 rounded-full border-2 border-sfm-gold/20 opacity-0 group-hover:opacity-100 group-hover:-inset-4 transition-all duration-500" />
            <Image 
              src="/images/dr-nkrumah.png" 
              alt="Dr. Yaw Nkrumah, MD" 
              width={208}
              height={208}
              className="relative w-52 h-52 rounded-full object-cover object-top border-4 border-sfm-gold/40 shadow-2xl transition-all duration-500 group-hover:border-sfm-gold/60 group-hover:scale-105"
              priority
            />
          </div>
          <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4 font-medium">Founder & Medical Director</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">Meet Yaw Nkrumah, M.D.</h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Board-certified family physician and founder of Sankofa Family Medicine. Continuity-driven primary care available to Washington State patients via telehealth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/founders-waitlist"
              className="btn-primary"
            >
              Join the Founders Waitlist
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <a 
              href="https://www.linkedin.com/in/yawnkrumahmd/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View Dr. Nkrumah on LinkedIn (opens in a new tab)"
              className="btn-secondary-white text-sm py-2 px-4"
            >
              LinkedIn
              <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">No payment required today</p>
          <p className="text-white/40 text-sm mt-6">
            ABFM Board Certified · Washington State Licensed · MUSC Graduate
          </p>
          <p className="text-white/30 text-xs mt-3">
            Waitlist submission does not create a physician-patient relationship.
          </p>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 bg-sfm-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-sfm-gold/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-sfm-gold/20" />
        
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-sfm-navy italic leading-relaxed">
            &quot;Care is stronger when we take the time to listen, document with intention, and follow through 
            with consistency. Memory is the foundation of trust.&quot;
          </blockquote>
          <p className="text-sfm-navy/60 text-lg mt-6 font-display">- Dr. Yaw Nkrumah</p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">Biography</p>
            <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">About Our Founder</h2>
            <div className="divider-gold mb-10" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Environmental Portrait */}
            <div className="relative order-2 lg:order-1 group">
              <div className="absolute -inset-4 bg-gradient-to-br from-sfm-gold/20 to-transparent rounded-3xl blur-2xl animate-pulse-slow" />
              <div className="image-lift portrait-premium">
                <Image
                  src="/images/dr-nkrumah-thoughtful.png"
                  alt="Dr. Yaw Nkrumah in a contemplative moment at Sankofa Family Medicine"
                  width={600}
                  height={800}
                  className="relative rounded-2xl shadow-2xl object-cover w-full transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="font-display text-sfm-navy text-lg">The Thoughtful Moment</p>
                <p className="text-muted text-sm">Where listening becomes understanding</p>
              </div>
            </div>
            
            {/* Biography Text */}
            <div className="space-y-6 text-muted leading-relaxed order-1 lg:order-2">
              <p>
                Dr. Yaw Nkrumah is a board-certified family physician and founder of Sankofa Family Medicine. His work centers on restoring the physician-patient relationship through continuity, clarity, and systems that preserve memory.
              </p>
              
              <p>
                Core Principles:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-sfm-navy">Presence.</strong> Giving patients undivided attention.</li>
                <li><strong className="text-sfm-navy">Clarity.</strong> Explaining health in understandable terms.</li>
                <li><strong className="text-sfm-navy">Continuity.</strong> Carrying history through every visit.</li>
              </ul>
              
              <p>
                He blends frontline medical training with HIPAA-compliant digital workflows to strengthen follow-through without losing the human core of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Credentials */}
      <section className="py-28 bg-sfm-navy relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4 font-medium">Training & Credentials</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Education & Licensure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Board Certification - Featured with Verified Link */}
            <a 
              href="https://www.credential.net/169707940"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ABFM board certification verification (opens in a new tab)"
              className="bg-gradient-to-br from-sfm-gold/20 to-sfm-gold/5 backdrop-blur p-8 border border-sfm-gold/30 rounded-2xl hover:border-sfm-gold/50 transition-all duration-300 hover:-translate-y-1 block group"
            >
              <div className="flex items-start justify-between mb-4">
                <svg className="w-10 h-10 text-sfm-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                <span className="px-2 py-1 bg-sfm-gold/20 text-sfm-gold text-xs font-medium rounded-full">ABFM Verification</span>
              </div>
              <h3 className="font-display text-xl text-white mb-3">Board Certified</h3>
              <p className="text-white/80">Family Medicine</p>
              <p className="text-sfm-gold text-sm mt-2 font-medium flex items-center gap-2">
                ABFM
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </p>
            </a>

            <div className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <GraduationCap className="w-10 h-10 text-sfm-gold mb-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-3">Medical School</h3>
              <p className="text-white/80">Medical University of South Carolina (MUSC)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <Stethoscope className="w-10 h-10 text-sfm-gold mb-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-3">Residency</h3>
              <p className="text-white/80">Kadlec Family Medicine</p>
              <p className="text-white/50 text-sm mt-2">Washington State</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <FileText className="w-10 h-10 text-sfm-gold mb-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-3">Licensure</h3>
              <p className="text-white/80">Licensed Physician</p>
              <p className="text-white/50 text-sm mt-2">Washington State</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section id="publications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Research</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-6">Publications</h2>
            <div className="divider-gold mb-8" />
          </div>

          <div className="space-y-8">
            {/* COVID-19 Publication */}
            <div className="border border-gray-100 p-6 rounded-xl hover:border-sfm-azure/30 transition-colors shadow-sm">
              <p className="text-sfm-azure text-xs tracking-wide uppercase mb-2">COVID-19 Therapeutics First Author</p>
              <h3 className="font-display text-xl text-sfm-navy mb-2">
                Treatment of COVID-19 Patients with Remdesivir: A Systematic Review and Meta-Analysis
              </h3>
              <p className="text-muted text-sm mb-4">Annals of Epidemiology & Public Health</p>
              <a 
                href="https://www.scienceopen.com/hosted-document?doi=10.33696/epidemiology.4.040" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Read publication: Treatment of COVID-19 Patients with Remdesivir (opens in a new tab)"
                className="inline-flex items-center text-sfm-azure hover:text-sfm-navy transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
              >
                Read Publication
                <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />
              </a>
            </div>

            {/* Ménière Disease Publication */}
            <div className="border border-gray-100 p-6 rounded-xl hover:border-sfm-azure/30 transition-colors shadow-sm">
              <p className="text-sfm-azure text-xs tracking-wide uppercase mb-2">Ménière Disease Research</p>
              <h3 className="font-display text-xl text-sfm-navy mb-2">
                Pathogenesis and Etiology of Ménière Disease: A Scoping Review
              </h3>
              <p className="text-muted text-sm mb-4">PubMed</p>
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/35142800/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Ménière disease research on PubMed (opens in a new tab)"
                className="inline-flex items-center text-sfm-azure hover:text-sfm-navy transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
              >
                View on PubMed
                <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Interests */}
      <section className="py-24 bg-sfm-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">Specializations</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">Clinical Interests</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Cardiometabolic Health', description: 'Blood pressure, cholesterol, diabetes prevention and management' },
              { icon: Stethoscope, title: 'Preventive & Precision Care', description: 'Evidence-based screening, pharmacogenomic guidance when appropriate, personalized protocols' },
              { icon: Brain, title: 'AI-Supported Workflows', description: 'Technology that supports clinical decision-making and documentation' },
              { icon: Wifi, title: 'Virtual Care Delivery', description: 'HIPAA-compliant telehealth that maintains human connection' },
              { icon: Globe, title: 'Culturally Grounded Medicine', description: 'Care that honors diverse backgrounds and health traditions' },
            ].map((interest, index) => (
              <div 
                key={interest.title} 
                className="group bg-white p-6 border-l-4 border-sfm-azure rounded-xl shadow-sm hover:shadow-xl hover:shadow-sfm-azure/10 hover:-translate-y-1 hover:border-sfm-gold transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-sfm-azure/10 flex items-center justify-center mb-4 group-hover:bg-sfm-gold/20 group-hover:scale-110 transition-all duration-300">
                  <interest.icon className="w-6 h-6 text-sfm-azure group-hover:text-sfm-gold transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-sfm-navy mb-2 group-hover:text-sfm-azure transition-colors duration-300">{interest.title}</h3>
                <p className="text-muted text-sm group-hover:text-sfm-navy/80 transition-colors duration-300">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SFM */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">The Vision</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-6">Why I Founded Sankofa Family Medicine</h2>
            <div className="divider-gold mb-8" />
          </div>
          
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Sankofa Family Medicine was built to restore relationship-centered primary care where continuity, clinical judgment, and follow-through are protected.
            </p>
            <p>
              The Sankofa principle means looking back to move forward wisely. Each visit, result, and conversation is carried forward so care compounds over time.
            </p>
            <p>
              Sankofa Family Medicine is a membership-based primary care practice (Direct Primary Care model). Membership is not insurance, and we do not bill insurance for primary care services included in membership.
            </p>
            <p>
              At Sankofa Family Medicine, physicians have time to think, explain, and follow through.
            </p>
            <p className="text-sfm-navy font-medium text-lg">
              This is the kind of practice I would trust with my own family.
            </p>
          </div>
        </div>
      </section>

      {/* How to Work With Me */}
      <section className="py-16 bg-sfm-cream/50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">How to Work With Our Team</h2>
            <p className="text-muted">Three steps to get started</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-sfm-gold/20 flex items-center justify-center">
                <span className="font-display text-sfm-gold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-sfm-navy mb-2">Join the Founders Waitlist</h3>
              <p className="text-muted text-sm">Join the Founders Waitlist. No payment required today.</p>
              <p className="text-muted/60 text-xs mt-2 italic">Submitting the waitlist form does not create a physician-patient relationship.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-sfm-gold/20 flex items-center justify-center">
                <span className="font-display text-sfm-gold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-sfm-navy mb-2">Complete Onboarding</h3>
              <p className="text-muted text-sm">Complete onboarding in Atlas when enrollment opens (February 2026).</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-sfm-gold/20 flex items-center justify-center">
                <span className="font-display text-sfm-gold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-sfm-navy mb-2">Begin Care</h3>
              <p className="text-muted text-sm">Membership includes primary care services provided by Sankofa Family Medicine. Labs, imaging, prescriptions, and specialist care are billed separately (insurance or direct pay).</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-sfm-navy relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          {/* Founders Waitlist Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Founders Waitlist Now Open</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 leading-tight">
            Begin with a Physician Who <span className="text-sfm-gold">Remembers</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Clinical care begins February 2026. No payment required to join the waitlist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/founders-waitlist"
              className="btn-primary"
            >
              Join the Founders Waitlist
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary-white">
              View Membership Options
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-8">
            Not for emergencies. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department. Washington State patients only.
          </p>
          <p className="text-white/30 text-xs mt-2">
            Information on this site is for general informational purposes and is not medical advice.
          </p>
        </div>
      </section>
    </>
  )
}

