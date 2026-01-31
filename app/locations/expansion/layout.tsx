import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expansion | Bring Virtual Primary Care to Your State',
  description: 'Request Sankofa Family Medicine expansion to your state. Help us bring Medicine That Remembers and virtual membership-based primary care to more locations.',
  keywords: ['virtual primary care expansion', 'telemedicine nationwide', 'concierge primary care near me', 'concierge medicine expansion'],
  openGraph: {
    title: 'Bring Sankofa Family Medicine to Your State',
    description: 'Request expansion of our virtual membership-based primary care to your state.',
    url: 'https://sankofafamilymedicine.com/locations/expansion',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/locations/expansion',
  },
}

export default function ExpansionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
