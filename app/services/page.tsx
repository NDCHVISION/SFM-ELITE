import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

/* =========================================================
SERVICES PAGE - Server Component with Metadata
Version: 11.0 (Membership-Based Primary Care + Corrected Tiers)
=========================================================

POSITIONING: Membership-Based Primary Care
ANCHOR: "One physician. One relationship. Built over time."
DIFFERENTIATOR: Comprehensive Precision Baseline (genetics + labs)

========================================================= */

export const metadata: Metadata = {
  title: 'Membership | Primary Care | Sankofa Family Medicine',
  description:
    'Membership-based primary care with comprehensive genetic and metabolic health assessment. One physician. One relationship. Built over time. Serving Washington State.',
  keywords: [
    'membership primary care Washington',
    'primary care membership',
    'genetic health analysis',
    'precision primary care',
    'virtual primary care Seattle',
    'telehealth Washington State',
    'personalized primary care',
    'membership physician',
    'concierge medicine Washington',
  ],
  openGraph: {
    title: 'Membership | Primary Care | Sankofa Family Medicine',
    description:
      'Membership-based primary care with comprehensive genetic and metabolic health assessment. One physician. One relationship. Built over time.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

