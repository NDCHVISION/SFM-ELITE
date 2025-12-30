import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expansion | Bring Virtual Primary Care to Your State',
  description: 'Request Sankofa Family Medicine expansion to your state. Help us bring Medicine That Remembers and virtual-first direct primary care nationwide.',
  keywords: ['virtual primary care expansion', 'telemedicine nationwide', 'direct primary care near me', 'DPC expansion'],
  openGraph: {
    title: 'Bring Sankofa Family Medicine to Your State',
    description: 'Request expansion of our virtual-first direct primary care to your state.',
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
