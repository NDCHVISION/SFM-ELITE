import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

/* =========================================================
SERVICES PAGE - Server Component with Metadata & Schema
Version: 12.0 (Final Tier Design)
========================================================= */

export const metadata: Metadata = {
  title: 'Membership | Primary Care | Sankofa Family Medicine',
  description:
    'Membership-based primary care with comprehensive genetic and metabolic health assessment. One physician. One relationship. Built over time. Serving Washington State.',
  keywords: [
    'membership primary care Washington',
    'primary care membership Seattle',
    'precision primary care',
    'virtual primary care Seattle',
    'telehealth Washington State',
    'personalized primary care',
    'concierge medicine Washington',
    'concierge doctor Seattle',
  ],
  openGraph: {
    title: 'Membership | Primary Care | Sankofa Family Medicine',
    description:
      'Membership-based primary care with comprehensive genetic and metabolic health assessment. One physician. One relationship. Built over time.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sankofa Family Medicine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Membership | Sankofa Family Medicine',
    // Compliance: Updated genetics framing
    description: 'Membership-based primary care with physician-led interpretation of genetic health information. Washington State.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.sankofafamilymedicine.com/services',
  },
}

// Schema.org Structured Data
const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://www.sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      alternateName: 'Sankofa Family Medicine PLLC',
      description:
        'Membership-based primary care practice offering comprehensive genetic and metabolic health assessment with virtual visits for Washington State residents.',
      url: 'https://www.sankofafamilymedicine.com',
      telephone: '425-285-7390',
      email: 'info@sankofafamilymedicine.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '522 W Riverside Ave, Ste N',
        addressLocality: 'Spokane',
        addressRegion: 'WA',
        postalCode: '99201',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'State',
        name: 'Washington',
        sameAs: 'https://en.wikipedia.org/wiki/Washington_(state)',
      },
      medicalSpecialty: 'Family Medicine',
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Comprehensive Precision Baseline',
          // Compliance: Genetics requires "physician-led interpretation" modifier
          description:
            'Full intake, comprehensive lab panel, and physician-led interpretation of genetic health information at enrollment',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Virtual Primary Care Visits',
          description: 'Telehealth visits ranging from 40 to 60 minutes depending on membership tier',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Physician-Led Genetic Health Interpretation',
          // Compliance: Genetics requires "physician-led interpretation" modifier
          description:
            'Clinical-grade genetic profiling integrated with lab results for personalized care through physician-led interpretation',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Membership Tiers',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Continuity Care',
              description:
                'Foundation tier with Comprehensive Precision Baseline, annual genetic review, 40-minute visits, and 48-hour response time.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Precision Care',
              description:
                'Optimization tier with twice-yearly genetic review, one included lab reassessment, 50-minute visits, and 24-hour response time.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Executive Care',
              description:
                'Priority tier with quarterly genetic review, up to four included lab reassessments, 60-minute visits, and highest response priority within the care model.',
            },
          },
        ],
      },
      isAcceptingNewPatients: true,
      healthPlanNetworkId: 'NONE',
      // Compliance: Removed priceRange per WA DOH requirements
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is membership-based primary care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Membership-based primary care means you pay a monthly fee directly to your physician for primary care services. Instead of billing insurance for each visit, you have a direct relationship with one doctor who has time to know you.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Comprehensive Precision Baseline?',
          acceptedAnswer: {
            '@type': 'Answer',
            // Compliance: Genetics requires "physician-led interpretation" modifier
            text: 'Every member starts with a Comprehensive Precision Baseline including a full intake, comprehensive lab panel, and physician-led interpretation of genetic health information. Lab results are correlated with genetic findings to identify risk trends and prevention targets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need health insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Membership covers primary care services only. Keep insurance for emergencies, hospital care, specialists, imaging, and prescriptions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to be in Washington State for visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You must be physically located in Washington State at the time of your telehealth visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this service for emergencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This practice does not provide emergency or urgent care services. For emergencies, call 911 or go to the nearest emergency room.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.sankofafamilymedicine.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Membership',
          item: 'https://www.sankofafamilymedicine.com/services',
        },
      ],
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld車"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesPageClient />
    </>
  )
}

