import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founders Waitlist | Sankofa Family Medicine',
  description: 'Join Sankofa Family Medicine founders waitlist. No payment today. Enrollment begins February 2026.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function FoundingMemberEnrollmentPage() {
  // Redirect to the main founders waitlist page
  redirect('/founders-waitlist')
}
