import { Metadata } from 'next'
import { stateConfigs } from '@/lib/states'

const scConfig = stateConfigs.SC

export const metadata: Metadata = {
  title: 'Virtual Primary Care Coming to South Carolina | Request Access',
  description: scConfig.metadata.description,
  keywords: scConfig.metadata.keywords,
  openGraph: {
    title: 'Sankofa Family Medicine | Coming to South Carolina',
    description: scConfig.metadata.description,
    url: 'https://sankofafamilymedicine.com/locations/south-carolina',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/south-carolina',
  },
  other: {
    'geo.region': 'US-SC',
    'geo.placename': 'South Carolina',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine - South Carolina (Coming Soon)',
  description: scConfig.metadata.description,
  url: 'https://sankofafamilymedicine.com/locations/south-carolina',
  areaServed: {
    '@type': 'State',
    name: 'South Carolina',
    addressCountry: 'US'
  },
  potentialAction: {
    '@type': 'JoinAction',
    name: 'Request Access',
    target: 'https://sankofafamilymedicine.com/locations/south-carolina'
  }
}

export default function SouthCarolinaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
