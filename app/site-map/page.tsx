import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: 'Site Map | All Pages - Sankofa Family Medicine',
  description:
    'Browse all pages on Sankofa Family Medicine website. Find information about our services, locations, resources, and more.',
  openGraph: {
    title: 'Site Map | All Pages - Sankofa Family Medicine',
    description:
      'Browse all pages on Sankofa Family Medicine website.',
    url: 'https://sankofafamilymedicine.com/site-map',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
}

// =============================================================================
// PAGE DATA
// =============================================================================

interface PageLink {
  title: string
  href: string
  description?: string
}

interface PageCategory {
  category: string
  description: string
  pages: PageLink[]
}

const sitePages: PageCategory[] = [
  {
    category: 'Core Pages',
    description: 'Essential information about our practice',
    pages: [
      {
        title: 'Home',
        href: '/',
        description: 'Welcome to Sankofa Family Medicine - Medicine That Remembers',
      },
      {
        title: 'Services',
        href: '/services',
        description: 'Explore our concierge medicine membership plans',
      },
      {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
      },
    ],
  },
  {
    category: 'About Us',
    description: 'Learn about our practice and philosophy',
    pages: [
      {
        title: 'About',
        href: '/about',
        description: 'Our mission, values, and approach to primary care',
      },
      {
        title: 'Meet Our Founder',
        href: '/founder',
        description: 'Learn about Dr. Yaw Nkrumah and his vision',
      },

      {
        title: 'FAQ',
        href: '/faq',
        description: 'Frequently asked questions about our practice',
      },
      {
        title: 'Testimonials',
        href: '/testimonials',
        description: 'Hear from our members about their experience',
      },
    ],
  },
  {
    category: 'Washington Locations',
    description: 'We provide virtual concierge care to:',
    pages: [
      {
        title: 'Washington State',
        href: '/locations/washington',
        description: '',
      },
      {
        title: 'Seattle',
        href: '/locations/washington/seattle',
        description: '',
      },
      {
        title: 'Bellevue',
        href: '/locations/washington/bellevue',
        description: '',
      },
      {
        title: 'Spokane',
        href: '/locations/washington/spokane',
        description: '',
      },
      {
        title: 'Kirkland',
        href: '/locations/washington/kirkland',
        description: '',
      },
      {
        title: 'Redmond',
        href: '/locations/washington/redmond',
        description: '',
      },
      {
        title: 'Sammamish',
        href: '/locations/washington/sammamish',
        description: '',
      },
      {
        title: 'Mercer Island',
        href: '/locations/washington/mercer-island',
        description: '',
      },
      {
        title: 'Tacoma',
        href: '/locations/washington/tacoma',
        description: '',
      },
      {
        title: 'Everett',
        href: '/locations/washington/everett',
        description: '',
      },
      {
        title: 'Olympia',
        href: '/locations/washington/olympia',
        description: '',
      },
      {
        title: 'Vancouver',
        href: '/locations/washington/vancouver',
        description: '',
      },
      {
        title: 'Tri-Cities',
        href: '/locations/washington/tri-cities',
        description: '',
      },
    ],
  },
  {
    category: 'Expansion',
    description: 'Coming soon to new states',
    pages: [
      {
        title: 'South Carolina',
        href: '/locations/south-carolina',
        description: 'Coming 2026 - Join our waitlist',
      },
      {
        title: 'Request Your State',
        href: '/locations/request',
        description: 'Tell us where you want Sankofa to expand',
      },
    ],
  },
  {
    category: 'Services & Care',
    description: 'What we offer and how we help',
    pages: [
      {
        title: 'Membership Plans',
        href: '/services',
        description: 'View our concierge care membership options',
      },
      {
        title: 'Membership Terms',
        href: '/membership-terms',
        description: 'View membership agreement details',
      },
      {
        title: 'Founding Member Program',
        href: '/membership-terms#founding-member-program',
        description: 'Exclusive benefits for our first 30 members',
      },
      {
        title: 'What We Cover',
        href: '/services/what-we-cover',
        description: 'Comprehensive list of conditions we treat',
      },
      {
        title: 'Sankofa OS',
        href: '/sankofa-os',
        description: 'Our proprietary continuity of care system',
      },
      {
        title: 'Emergency Info',
        href: '/emergency',
        description: 'What to do in a medical emergency',
      },
      {
        title: 'Patient Forms',
        href: '/patient-forms',
        description: 'Download and complete patient forms',
      },
    ],
  },
  {
    category: 'Resources & Blog',
    description: 'Educational content and guides',
    pages: [
      {
        title: 'Resources',
        href: '/resources',
        description: 'Tools and information for better health',
      },
      {
        title: 'Primary Care Guide',
        href: '/resources/primary-care-guide',
        description: 'Free guide to choosing primary care',
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Latest articles and health insights',
      },
      {
        title: 'Why Skipping Primary Care Costs Years',
        href: '/blog/why-skipping-primary-care-costs-years',
        description: 'The hidden cost of avoiding regular checkups',
      },
      {
        title: 'Virtual Care More Personal',
        href: '/blog/virtual-care-more-personal',
        description: 'How telehealth enhances the patient relationship',
      },
      {
        title: 'Genetic Testing: What It Tells You',
        href: '/blog/genetic-testing-what-it-tells-you',
        description: 'Understanding your genetic health information',
      },
    ],
  },
  {
    category: 'Careers & Partnerships',
    description: 'Join our team or partner with us',
    pages: [
      {
        title: 'Careers',
        href: '/careers',
        description: 'Join the Sankofa Family Medicine team',
      },
      {
        title: 'Partnerships',
        href: '/partnerships',
        description: 'Partner with us to provide better care',
      },
    ],
  },
  {
    category: 'Legal & Compliance',
    description: 'Privacy, terms, and accessibility',
    pages: [
      {
        title: 'Privacy Policy',
        href: '/privacy',
        description: 'How we protect your personal information',
      },
      {
        title: 'Terms of Service',
        href: '/terms',
        description: 'Terms and conditions for using our services',
      },
      {
        title: 'Accessibility',
        href: '/accessibility',
        description: 'Our commitment to digital accessibility',
      },
    ],
  },
]

// =============================================================================
// COMPONENT
// =============================================================================

export default function SiteMapPage() {
  return (
    <main className="bg-sfm-cream min-h-screen pt-16 lg:pt-[128px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sfm-navy to-sfm-navy-deep py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sfm-azure/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sfm-gold/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Site Map
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Browse all pages on our website to find exactly what you need
          </p>
        </div>
      </section>

      {/* Site Map Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitePages.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-soft border border-sfm-navy/5 hover:shadow-medium transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h2 className="font-serif text-2xl text-sfm-navy mb-2">
                    {category.category}
                  </h2>
                  <p className="text-sfm-text-muted text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Page Links */}
                <ul className="space-y-4">
                  {category.pages.map((page, pageIdx) => (
                    <li key={pageIdx}>
                      <Link
                        href={page.href}
                        className="group block"
                      >
                        <div className="flex items-start gap-2">
                          <ExternalLink className="w-4 h-4 text-sfm-gold mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <div className="flex-1">
                            <h3 className="text-sfm-navy font-semibold group-hover:text-sfm-gold transition-colors duration-200">
                              {page.title}
                            </h3>
                            {page.description && (
                              <p className="text-sfm-text-muted text-sm mt-1">
                                {page.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-16 text-center">
            <p className="text-sfm-text-muted mb-4">
              Can't find what you're looking for?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-gold text-sfm-navy rounded-xl font-semibold hover:bg-sfm-gold-light transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}