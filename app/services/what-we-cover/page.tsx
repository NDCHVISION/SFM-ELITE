import Link from 'next/link'
import {
  ArrowRight,
  Heart,
  Activity,
  Brain,
  Bone,
  Stethoscope,
  Thermometer,
  Users,
  ShieldCheck,
  Microscope,
  UserCheck,
  Droplets,
  Eye,
  Clipboard,
  Phone,
  AlertTriangle,
} from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// COMPREHENSIVE STRUCTURED DATA FOR SEO + AI DISCOVERY
// =============================================================================

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  alternateName: ['SFM', 'Medicine That Remembers'],
  description:
    'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, the practice solves healthcare fragmentation through Medicine That Remembers - a care model built on continuity, genetic testing, precision medicine, and cardiometabolic health optimization.',
  url: 'https://sankofafamilymedicine.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sankofafamilymedicine.com/images/sfm-logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://sankofafamilymedicine.com/images/sfm-background.png',
  email: 'info@sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'WA',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'State',
    name: 'Washington',
    sameAs: 'https://en.wikipedia.org/wiki/Washington_(state)',
  },
  priceRange: '$149-$449/month',
  paymentAccepted: 'Cash, Credit Card, HSA, FSA',
  currenciesAccepted: 'USD',
  medicalSpecialty: ['PrimaryCare', 'FamilyPractice', 'Telemedicine', 'PreventiveMedicine'],
  isAcceptingNewPatients: true,
  founder: {
    '@type': 'Physician',
    '@id': 'https://sankofafamilymedicine.com/#founder',
    name: 'Dr. Yaw Nkrumah',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'MD',
    jobTitle: 'Founder and Medical Director',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Medical License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Washington State Department of Health',
      },
    },
  ],
  knowsAbout: [
    'Direct Primary Care (DPC)',
    'Virtual/Telehealth Medicine',
    'Genetic Testing & Precision Medicine',
    'Cardiometabolic Health',
    'Medicine That Remembers',
    'Type 2 Diabetes Management',
    'Hypertension Treatment',
    'Weight Management',
    'Thyroid Disorders',
    'Mental Health Primary Care',
  ],
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': 'https://sankofafamilymedicine.com/services/#webpage',
  url: 'https://sankofafamilymedicine.com/services',
  name: 'Clinical Services | Sankofa Family Medicine',
  description:
    'Comprehensive virtual primary care services in Washington State including cardiometabolic health, diabetes management, weight management, mental health support, and acute telemedicine care.',
  isPartOf: {
    '@id': 'https://sankofafamilymedicine.com/#website',
  },
  about: {
    '@id': 'https://sankofafamilymedicine.com/#organization',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Clinical Services Offered',
    numberOfItems: 12,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'MedicalTherapy',
          name: 'Cardiometabolic and Endocrine Care',
          description:
            'Management of hypertension, diabetes, thyroid disorders, PCOS, and metabolic syndrome.',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'MedicalTherapy',
          name: 'Weight and Energy Management',
          description:
            'Medical weight management with prescription therapies, metabolic optimization, and lifestyle support.',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'MedicalTherapy',
          name: 'Mental Health (Primary Care Scope)',
          description:
            'Depression, anxiety, adjustment disorders, burnout, and sleep-related mood concerns.',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'MedicalTherapy',
          name: 'Musculoskeletal and Pain Management',
          description:
            'Osteoarthritis, chronic back and neck pain, fibromyalgia, and gout management.',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'MedicalTherapy',
          name: 'Gastrointestinal and Respiratory Care',
          description:
            'GERD, IBS, asthma, COPD, allergic rhinitis, and digestive health management.',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'MedicalTherapy',
          name: 'Acute Telemedicine Care',
          description:
            'Same-day virtual visits for respiratory infections, UTIs, skin conditions, and urgent medication needs.',
        },
      },
    ],
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#hero-heading', '.service-category-title', '#clinical-boundary'],
  },
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  inLanguage: 'en-US',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What conditions can be treated through telemedicine at Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine treats the majority of conditions traditionally managed in family medicine when appropriate for virtual care, including cardiometabolic conditions (hypertension, diabetes, thyroid disorders), mental health concerns (depression, anxiety, burnout), musculoskeletal issues, respiratory conditions, and acute illnesses like UTIs and respiratory infections.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services are outside the scope of virtual primary care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Services requiring physical examination, in-person procedures, or urgent intervention are referred to appropriate in-person care. This includes emergencies, surgical procedures, sports physicals (WIAA requires in-person examination), obstetric care, complex psychiatric conditions, and chronic opioid pain management. Pediatric patients under 12 are accepted on a case-by-case basis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Sankofa Family Medicine prescribe weight loss medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Sankofa Family Medicine offers comprehensive medical weight management including prescription therapies when clinically appropriate. Dr. Nkrumah evaluates each patient individually to determine the best approach, which may include GLP-1 agonists, combination therapies, or other medications alongside lifestyle and behavioral support for sustainable weight management.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does care coordination work at Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide comprehensive care coordination including laboratory ordering and interpretation, diagnostic imaging coordination, specialty referrals, remote patient monitoring for blood pressure and glucose, chronic care management, care transitions support following hospitalization, and prior authorization assistance.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sankofafamilymedicine.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Clinical Services',
      item: 'https://sankofafamilymedicine.com/services',
    },
  ],
}

// =============================================================================
// METADATA FOR SEO
// =============================================================================

export const metadata: Metadata = {
  title: 'What We Treat | Virtual Direct Primary Care Services | Washington State',
  description:
    'Sankofa Family Medicine offers virtual-first direct primary care (DPC) across Washington State. We treat cardiometabolic conditions, diabetes, hypertension, mental health, weight management, and acute illness through Medicine That Remembers.',
  keywords: [
    'direct primary care services',
    'DPC conditions treated',
    'virtual primary care Washington',
    'genetic testing primary care',
    'precision medicine',
    'cardiometabolic health',
    'diabetes management telehealth',
    'weight management DPC',
    'mental health primary care',
    'Medicine That Remembers',
    'Dr. Yaw Nkrumah',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/services/what-we-cover',
  },
  openGraph: {
    title: 'What We Treat | Sankofa Family Medicine',
    description:
      'Comprehensive virtual primary care in Washington State. Physician-led telemedicine for cardiometabolic health, preventive care, mental wellness, and acute conditions.',
    url: 'https://sankofafamilymedicine.com/services/what-we-cover',
    siteName: 'Sankofa Family Medicine',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine What We Treat Virtual Primary Care Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Treat | Sankofa Family Medicine',
    description:
      'Comprehensive virtual primary care in Washington State. Medicine That Remembers.',
    images: ['/images/og-image.png'],
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
    'content-type': 'Services',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

// =============================================================================
// SERVICE DATA
// =============================================================================

const primaryServices = [
  {
    id: 'cardiometabolic',
    icon: Heart,
    category: 'Cardiometabolic and Endocrine',
    tagline: 'Heart health meets metabolic optimization',
    conditions: [
      'Hypertension and blood pressure management',
      'Hyperlipidemia and cholesterol optimization',
      'Prediabetes and Type 2 diabetes',
      'Obesity and metabolic syndrome',
      'Thyroid disorders including hypothyroidism and hyperthyroidism',
      'Polycystic ovary syndrome (PCOS)',
      'Fatty liver disease (MAFLD and NAFLD)',
      'ASCVD risk assessment and cardiovascular prevention',
    ],
  },
  {
    id: 'weight-energy',
    icon: Activity,
    category: 'Weight, Energy, and Prevention',
    tagline: 'Sustainable transformation through medical science',
    conditions: [
      'Medical weight management with prescription therapies',
      'Weight loss medications when clinically appropriate',
      'Weight regain following prior interventions',
      'Insulin resistance and metabolic fatigue',
      'Cardiometabolic risk reduction',
      'Lifestyle modification and behavioral support',
    ],
  },
  {
    id: 'mental-health',
    icon: Brain,
    category: 'Mental Health (Primary Care Scope)',
    tagline: 'Integrated support for mind and body',
    conditions: [
      'Depression (mild to moderate)',
      'Anxiety disorders including generalized and social anxiety',
      'Adjustment disorders and life transitions',
      'Burnout and chronic stress conditions',
      'Sleep-related mood disturbances',
      'Adult ADHD (established diagnosis, stable management)',
      'Grief and bereavement support',
    ],
  },
  {
    id: 'musculoskeletal',
    icon: Bone,
    category: 'Musculoskeletal and Pain',
    tagline: 'Movement without limitation',
    conditions: [
      'Osteoarthritis evaluation and management',
      'Chronic low back and neck pain',
      'Myofascial pain syndromes',
      'Overuse and repetitive strain injuries',
      'Fibromyalgia',
      'Gout and hyperuricemia',
      'Osteoporosis screening and management',
    ],
  },
  {
    id: 'gastrointestinal',
    icon: Stethoscope,
    category: 'Gastrointestinal and Respiratory',
    tagline: 'Digestive wellness and respiratory clarity',
    conditions: [
      'GERD and acid reflux management',
      'Irritable bowel syndrome (IBS)',
      'Chronic constipation or diarrhea',
      'Asthma (mild to moderate, stable)',
      'COPD maintenance and monitoring',
      'Allergic rhinitis and chronic sinusitis',
      'Sleep-disordered breathing and CPAP follow-up',
    ],
  },
  {
    id: 'acute-care',
    icon: Thermometer,
    category: 'Acute Telemedicine Care',
    tagline: 'Same-day access when you need it most',
    conditions: [
      'Upper respiratory infections and pharyngitis',
      'Acute sinusitis and bronchitis',
      'Uncomplicated urinary tract infections',
      'Skin conditions and dermatologic concerns',
      'Minor gastrointestinal illnesses',
      'COVID-19 and influenza evaluation',
      'Urgent medication refills and management',
    ],
  },
]

const additionalServices = [
  {
    id: 'womens-health',
    icon: Users,
    title: "Women's Health",
    items: [
      'Contraception counseling and management',
      'Menopause and perimenopause care',
      'Hormone replacement therapy',
      'Menstrual disorders',
      'Cervical cancer screening coordination',
    ],
  },
  {
    id: 'mens-health',
    icon: UserCheck,
    title: "Men's Health",
    items: [
      'Erectile dysfunction',
      'Testosterone evaluation and management',
      'Prostate health screening',
      'BPH symptom management',
    ],
  },
  {
    id: 'sexual-health',
    icon: ShieldCheck,
    title: 'Sexual and Reproductive Health',
    items: [
      'STI screening and treatment',
      'HIV PrEP and monitoring',
      'Sexual health counseling',
      'Reproductive planning',
    ],
  },
  {
    id: 'dermatology',
    icon: Eye,
    title: 'Dermatologic Conditions',
    items: [
      'Acne and rosacea',
      'Eczema and psoriasis',
      'Skin infection triage',
      'Teledermatology referral',
    ],
  },
  {
    id: 'neurologic',
    icon: Brain,
    title: 'Neurologic and Cognitive',
    items: [
      'Migraine disorders',
      'Tension headaches',
      'Insomnia and sleep disorders',
      'Peripheral neuropathy',
    ],
  },
  {
    id: 'hematologic',
    icon: Droplets,
    title: 'Hematologic Conditions',
    items: [
      'Iron deficiency anemia',
      'B12 and folate deficiency',
      'Anticoagulation management',
    ],
  },
]

const careCoordination = [
  { icon: Microscope, text: 'Laboratory ordering, interpretation, and longitudinal tracking' },
  { icon: Clipboard, text: 'Diagnostic imaging orders and coordination' },
  { icon: Users, text: 'Specialty referral facilitation and care navigation' },
  { icon: Activity, text: 'Remote patient monitoring for blood pressure, glucose, and weight' },
  { icon: Heart, text: 'Chronic care management and personalized care plans' },
  { icon: ArrowRight, text: 'Care transitions support following hospitalization' },
  { icon: ShieldCheck, text: 'Prior authorization assistance' },
  { icon: Clipboard, text: 'Medical records coordination' },
]

const exclusions = [
  { item: 'Emergency and life-threatening conditions', note: 'Call 911' },
  { item: 'Inpatient hospital care', note: null },
  { item: 'Surgical and invasive procedures', note: null },
  { item: 'Pre-participation sports physicals', note: 'WIAA requires in-person examination' },
  { item: 'Obstetric care and delivery', note: null },
  { item: 'Pediatric care under age 12', note: 'case-by-case approval' },
  { item: 'Complex psychiatric conditions requiring stabilization', note: null },
  { item: 'Chronic opioid pain management', note: null },
  { item: 'Workers compensation evaluations', note: null },
]

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function ServicesPage() {
  return (
    <>
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section
          className="relative pt-40 pb-24 bg-sfm-navy overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sfm-azure/20 rounded-full blur-3xl" />
          
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center relative">
            <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6 font-medium">
              Scope of Care
            </p>
            <h1
              id="hero-heading"
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1]"
            >
              Comprehensive Virtual Primary Care
            </h1>
            <div className="divider-gold mx-auto mb-10" aria-hidden="true" />

            <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
              Physician-led family medicine delivered through secure telemedicine.
              We treat the full spectrum of conditions traditionally managed in
              primary care, with the time and attention your health deserves.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm text-white font-medium hover:bg-white/20 hover:border-sfm-gold/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-sfm-gold" aria-hidden="true" />
                18+ Clinical Categories
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm text-white font-medium hover:bg-white/20 hover:border-sfm-gold/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                100+ Conditions Treated
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm text-white font-medium hover:bg-white/20 hover:border-sfm-gold/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                1 Physician Relationship
              </span>
            </div>

            {/* Key Stats */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
              aria-label="Key statistics"
            >
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-sfm-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-4xl font-display text-sfm-gold mb-2 group-hover:scale-110 transition-transform duration-300">Same Day</p>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Acute care appointments available</p>
              </div>
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-sfm-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-4xl font-display text-sfm-gold mb-2 group-hover:scale-110 transition-transform duration-300">100%</p>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Virtual via HIPAA-compliant telehealth</p>
              </div>
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-sfm-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-4xl font-display text-sfm-gold mb-2 group-hover:scale-110 transition-transform duration-300">Your Physician</p>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Dr. Nkrumah for every visit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white" aria-labelledby="intro-heading">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              Sankofa Family Medicine provides comprehensive, virtual-first primary care
              across the majority of conditions traditionally managed in family medicine.
              Our approach combines clinical excellence with the convenience of telemedicine,
              ensuring you receive thorough, personalized care without compromise.
            </p>
          </div>
        </section>

        {/* Featured Focus: Cardiometabolic Health */}
        <section className="py-16 bg-gradient-to-r from-sfm-navy to-sfm-azure relative overflow-hidden">
          <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-30" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sfm-gold/20 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-sfm-gold" />
                  <span className="text-sfm-gold text-xs font-semibold tracking-wider uppercase">Clinical Focus</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
                  Cardiometabolic Health Excellence
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Heart disease and metabolic conditions are deeply connected. Dr. Nkrumah takes an integrated 
                  approach to cardiovascular and metabolic health, addressing the root causes rather than 
                  treating symptoms in isolation. From hypertension and diabetes to lipid optimization and 
                  weight management, your care plan is built around your unique physiology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: '70%', label: 'of chronic disease is metabolic' },
                    { stat: '45min', label: 'average visit length' },
                    { stat: '100+', label: 'biomarkers tracked' },
                    { stat: '1:1', label: 'physician relationship' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <p className="text-2xl font-display text-sfm-gold">{item.stat}</p>
                      <p className="text-white/60 text-xs">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="font-display text-xl text-white mb-6">Conditions We Specialize In</h3>
                  <ul className="space-y-3">
                    {[
                      'Hypertension and blood pressure optimization',
                      'Type 2 diabetes and prediabetes reversal',
                      'Cholesterol and lipid management',
                      'Metabolic syndrome and insulin resistance',
                      'Fatty liver disease (NAFLD/MAFLD)',
                      'Cardiovascular risk reduction',
                      'Thyroid and hormonal balance',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                        <div className="w-2 h-2 bg-sfm-gold rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Services */}
        <section
          className="py-24 bg-sfm-cream"
          aria-labelledby="primary-services-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">
                Primary Focus Areas
              </p>
              <h2
                id="primary-services-heading"
                className="font-display text-4xl text-sfm-navy mb-4"
              >
                Conditions We Treat
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Comprehensive primary care across the full spectrum of family medicine, 
                delivered with the time and attention your health deserves.
              </p>
            </div>

            <div className="space-y-6">
              {primaryServices.map((service, index) => (
                <article
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sfm-gold/10"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Category Header - Left Side */}
                    <div className="lg:w-1/3 bg-gradient-to-br from-sfm-navy to-sfm-azure p-8 lg:p-10 relative overflow-hidden">
                      <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-subtle opacity-20" />
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-2xl bg-sfm-gold/20 flex items-center justify-center">
                            <service.icon
                              className="w-7 h-7 text-sfm-gold"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </div>
                          <span className="text-sfm-gold/60 text-xs tracking-wider uppercase font-semibold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl text-white mb-3">
                          {service.category}
                        </h3>
                        <p className="text-white/60 italic text-sm">{service.tagline}</p>
                      </div>
                    </div>

                    {/* Conditions Grid - Right Side */}
                    <div className="lg:w-2/3 p-8 lg:p-10">
                      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {service.conditions.map((condition) => (
                          <li
                            key={condition}
                            className="flex items-start gap-3 text-muted group-hover:text-sfm-navy transition-colors"
                          >
                            <div
                              className="w-2 h-2 rounded-full bg-sfm-gold mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed">{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section
          className="py-24 bg-white"
          aria-labelledby="additional-services-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
                Specialized Care
              </p>
              <h2
                id="additional-services-heading"
                className="font-display text-4xl text-sfm-navy mb-4"
              >
                Additional Clinical Services
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Focused care for specific health needs, all within the primary care relationship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <article
                  key={service.id}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-sfm-gold/50 hover:shadow-xl hover:shadow-sfm-gold/10 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-sfm-azure/10 flex items-center justify-center mb-4 group-hover:bg-sfm-gold/10 transition-colors">
                      <service.icon
                        className="w-6 h-6 text-sfm-azure group-hover:text-sfm-gold transition-colors"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-lg text-sfm-navy mb-4 group-hover:text-sfm-azure transition-colors">
                      {service.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-muted"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-sfm-gold mt-2 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Model Works */}
        <section className="py-24 bg-gradient-to-b from-white via-sfm-cream/50 to-white relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sfm-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sfm-azure/5 rounded-full blur-[80px]" />
          
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                The Evidence
              </p>
              <h2 className="font-display text-4xl lg:text-5xl text-sfm-navy mb-6">
                Why This Model Works
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Virtual care with adequate time produces measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  stat: '90%+',
                  title: 'Equivalent Outcomes',
                  desc: 'Peer-reviewed research confirms virtual primary care achieves equivalent or superior outcomes for conditions traditionally managed in family medicine.',
                  source: 'JAMA, Annals of Internal Medicine',
                },
                {
                  stat: '3x',
                  title: 'Longer Visits',
                  desc: 'Your appointments are 45 to 60 minutes. The national average for primary care is 15 minutes. Time is the foundation of understanding.',
                  source: 'vs. national average',
                },
                {
                  stat: 'Same Day',
                  title: 'When It Matters',
                  desc: 'Acute concerns are addressed immediately. The average wait for a new patient appointment in traditional care exceeds 26 days.',
                  source: 'Merritt Hawkins Survey',
                },
              ].map((item, index) => (
                <div 
                  key={item.title} 
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-sfm-gold/30 transition-all duration-500"
                >
                  {/* Number indicator */}
                  <div className="absolute -top-4 -left-2 w-8 h-8 bg-sfm-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-sfm-gold text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-5xl font-display text-sfm-gold mb-4 group-hover:scale-105 transition-transform duration-300">{item.stat}</p>
                    <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                    <p className="text-xs text-sfm-azure/60 italic">{item.source}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom quote */}
            <div className="mt-16 text-center">
              <blockquote className="max-w-3xl mx-auto">
                <p className="font-display text-2xl text-sfm-navy/80 italic leading-relaxed">
                  "The quality of care is inseparable from the quality of the relationship."
                </p>
                <footer className="mt-4 text-sm text-muted">
                  The Sankofa Philosophy
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Care Coordination */}
        <section
          className="py-24 bg-sfm-navy"
          aria-labelledby="care-coordination-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
                  Beyond the Visit
                </p>
                <h2
                  id="care-coordination-heading"
                  className="font-display text-4xl text-white mb-6"
                >
                  Comprehensive Care Coordination
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Your health journey extends beyond individual appointments. We provide
                  end-to-end care coordination, connecting you to the diagnostics,
                  specialists, and resources you need while maintaining continuity
                  across all touchpoints.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sfm-gold hover:text-white transition-colors group"
                >
                  <span>Learn about membership benefits</span>
                  <ArrowRight
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-8">
                <ul className="space-y-4">
                  {careCoordination.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0">
                        <item.icon
                          className="w-4 h-4 text-sfm-gold"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-white/80 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Standards */}
        <section
          className="py-24 bg-white"
          aria-labelledby="standards-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Clinical Approach */}
              <div className="bg-sfm-cream p-8 lg:p-10 border-l-4 border-sfm-gold rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sfm-gold/10 flex items-center justify-center">
                    <ShieldCheck
                      className="w-5 h-5 text-sfm-gold"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h2
                    id="standards-heading"
                    className="font-display text-2xl text-sfm-navy"
                  >
                    Clinical Approach
                  </h2>
                </div>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p id="clinical-boundary">
                    Sankofa Family Medicine treats the majority of conditions traditionally
                    managed in family medicine when appropriate for virtual care delivery.
                    Conditions requiring physical examination, in-person procedures,
                    advanced imaging interpretation, or urgent physical intervention are
                    referred or escalated to appropriate in-person or specialty care.
                  </p>
                  <p>
                    We maintain relationships with trusted specialists and facilities
                    throughout Washington State to ensure seamless care transitions when
                    in-person evaluation is clinically indicated.
                  </p>
                </div>
              </div>

              {/* Telemedicine Compliance */}
              <div className="bg-sfm-navy p-8 lg:p-10 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone
                      className="w-5 h-5 text-sfm-gold"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-display text-2xl">Telemedicine Standards</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  All care is delivered via secure, HIPAA-compliant telemedicine
                  technology in accordance with Washington State telemedicine
                  regulations (RCW 48.43.735, ESSB 5481).
                </p>
                <ul className="space-y-3">
                  {[
                    'Virtual visits meet applicable standards of care for family medicine',
                    'Services available to patients located in Washington State at time of service',
                    'In-person referral provided when clinically indicated',
                    'Controlled substance prescribing follows current DEA regulations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sfm-gold" />
                      </div>
                      <span className="text-white/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section
          className="py-24 bg-sfm-navy"
          aria-labelledby="exclusions-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
                Transparency in Care
              </p>
              <h2
                id="exclusions-heading"
                className="font-display text-4xl text-white mb-4"
              >
                Services Outside Our Scope
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                In the interest of patient safety and clinical appropriateness, certain
                services require in-person evaluation or specialized care settings.
                Patients with emergent or unstable conditions should seek emergency
                services immediately.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {exclusions.map((exclusion) => (
                <div
                  key={exclusion.item}
                  className="flex items-start gap-3 bg-black/20 border border-white/10 rounded-lg px-5 py-4"
                >
                  <AlertTriangle
                    className="w-4 h-4 text-sfm-gold/60 flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="text-white/80 text-sm">{exclusion.item}</span>
                    {exclusion.note && (
                      <p className="text-white/40 text-xs mt-1">{exclusion.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-sfm-cream via-white to-sfm-cream">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Now Accepting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 rounded-full border border-sfm-gold/20 mb-8">
              <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-sfm-gold text-sm font-semibold">Now Accepting Founding Members</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sfm-navy mb-6 leading-tight">
              Begin Your Care with{' '}
              <span className="text-sfm-gold">Medicine That Remembers</span>
              <span className="text-sfm-gold text-xl align-top">&#8482;</span>
            </h2>

            <p className="text-sfm-navy/60 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a brief enrollment consultation to see if our approach aligns with your health goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://sankofafamilymedicine.atlas.md/hub/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl hover:bg-sfm-gold-light transition-all shadow-lg shadow-sfm-gold/25"
              >
                Become a Patient
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-sfm-navy/20 text-sfm-navy font-semibold rounded-xl hover:bg-sfm-navy hover:text-white transition-all"
              >
                View Membership Options
              </Link>
            </div>

            <p className="text-sfm-navy/40 text-sm mt-8">
              Questions? Call us at{' '}
              <a href="tel:+14252857390" className="text-sfm-gold hover:text-sfm-azure transition-colors">
                +1 (425) 285-7390
              </a>
            </p>
          </div>
        </section>

        {/* Clinical Authority Footer */}
        <section
          className="py-12 bg-sfm-cream border-t border-sfm-azure/10"
          aria-label="Disclaimer"
        >
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm text-muted/70 leading-relaxed text-center">
              All clinical decisions are made by licensed physicians practicing within
              their scope of licensure and applicable state and federal regulations.
              Sankofa Family Medicine retains sole authority over clinical judgment,
              treatment decisions, referrals, prescribing, and care escalation. This
              information does not constitute a guarantee of treatment for any specific
              condition. All care is subject to clinical appropriateness and the
              physician-patient relationship.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

