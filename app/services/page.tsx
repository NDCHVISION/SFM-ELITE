import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

/* =========================================================
SERVICES PAGE - Server Component with Metadata
Version: 10.0 (Membership-Based Primary Care)
=========================================================

POSITIONING: Membership-Based Primary Care
ANCHOR: "One physician. One relationship. Built over time."
DIFFERENTIATOR: Precision medicine / genetic health analysis
BRAND: Medicine That Remembers™

========================================================= */

export const metadata: Metadata = {
  title: 'Membership | Primary Care | Sankofa Family Medicine',
  description:
    'Membership-based primary care with genetic health analysis. One physician. One relationship. Built over time. Virtual visits for Washington State.',
  keywords: [
    'membership primary care Washington',
    'primary care membership',
    'genetic health analysis',
    'virtual primary care Seattle',
    'telehealth Washington State',
    'personalized primary care',
    'membership physician',
    'precision medicine primary care',
  ],
  openGraph: {
    title: 'Membership | Primary Care | Sankofa Family Medicine',
    description:
      'Membership-based primary care with genetic health analysis. One physician. One relationship. Built over time.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

