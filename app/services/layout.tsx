import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

/* =========================================================
SERVICES PAGE - SERVER COMPONENT
Version: 6.1
=========================================================
This server component handles metadata export.
The client component handles interactivity (FAQ accordion).
========================================================= */

// --- METADATA ---
export const metadata: Metadata = {
  title: 'Membership Plans | Sankofa Family Medicine | Direct Primary Care Washington',
  description:
    'Virtual Direct Primary Care membership for Washington State. Three tiers of access. No insurance billing. One physician relationship built over time.',
  openGraph: {
    title: 'Membership Plans | Sankofa Family Medicine',
    description:
      'Virtual Direct Primary Care membership for Washington State. One physician, one relationship.',
    type: 'website',
  },
}

// --- SCHEMA DATA ---
const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine',
  description: 'Direct Primary Care membership practice serving Washington State via telehealth',
  url: 'https://www.sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Primary Care',
  },
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Virtual Primary Care Visit',
      procedureType: 'Telehealth',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Chronic Disease Management',
      procedureType: 'Telehealth',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Preventive Care',
      procedureType: 'Telehealth',
    },
  ],
  areaServed: {
    '@type': 'State',
    name: 'Washington',
    sameAs: 'https://www.wikidata.org/wiki/Q1223',
  },
  isAcceptingNewPatients: false,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Membership Tiers',
    itemListElement: [
      { '@type': 'Offer', name: 'Continuity', description: 'Steady, consistent primary care' },
      { '@type': 'Offer', name: 'Precision', description: 'More access for time-sensitive needs' },
      { '@type': 'Offer', name: 'Executive', description: 'Expanded coordination and access' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Direct Primary Care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct Primary Care is a membership model. You pay a monthly fee directly to the practice for primary care services. We do not bill insurance for visits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I still need health insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. This membership covers primary care only. Keep insurance for emergencies, hospital stays, specialists, imaging, and prescriptions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be in Washington State?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You must be in Washington State during your telehealth visit. This is required by law.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this for emergencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We do not provide emergency or urgent care. For emergencies, call 911 or go to the nearest emergency room.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the waitlist make me a patient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Joining the waitlist does not create a doctor-patient relationship. That begins only after you enroll and have your first visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How will I learn about pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We will share pricing when we contact you from the waitlist. You will see all terms and costs before any commitment.',
      },
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Client Component */}
      <ServicesPageClient />
    </>
  )
}
