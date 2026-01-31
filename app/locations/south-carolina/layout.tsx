import { Metadata } from 'next'
import { stateConfigs } from '@/lib/states'

const scConfig = stateConfigs.SC

export const metadata: Metadata = {
  title: 'Virtual Primary Care May Expand to South Carolina | Express Interest',
  description: scConfig.metadata.description,
  keywords: scConfig.metadata.keywords,
  openGraph: {
    title: 'Sankofa Family Medicine | May Expand to South Carolina',
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
  name: 'Sankofa Family Medicine - South Carolina (Potential Future Expansion)',
  description: scConfig.metadata.description,
  url: 'https://sankofafamilymedicine.com/locations/south-carolina',
  areaServed: {
    '@type': 'State',
    name: 'South Carolina',
    addressCountry: 'US'
  },
  potentialAction: {
    '@type': 'JoinAction',
    name: 'Express Interest',
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
