import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PrimaryCTA from '@/components/PrimaryCTA'
import { ArrowRight, FileText, Scale, Shield, AlertCircle } from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: 'Membership Terms & Founders Advantage | Sankofa Family Medicine',
  description: 'Comprehensive membership terms for Sankofa Family Medicine, including Founders Advantage pricing for early members, payment terms, and membership policies.',
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/membership-terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// =============================================================================
// COMPONENT
// =============================================================================

export default function MembershipTermsPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sfm-navy via-sfm-navy-light to-sfm-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-20 -right-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl animate-pulse-slow"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Breadcrumbs
            items={[{ label: 'Membership Terms' }]}
            className="mb-8 text-white/70"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <FileText className="w-4 h-4 text-sfm-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Legal & Membership Terms</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Membership Terms & Policies
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Transparent pricing, clear terms, and the Founders Advantage benefit for early members.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">
              Sankofa Family Medicine operates as a direct primary care (DPC) membership practice. Members pay a monthly or annual membership fee directly to the practice in exchange for comprehensive primary care services. The membership fee is separate from and does not include insurance, laboratory testing, imaging, medications, or services provided by other healthcare providers.
            </p>
          </div>

          {/* Founders Advantage Section */}
          <div id="founders-advantage" className="scroll-mt-20 mb-16">
            <div className="bg-gradient-to-br from-sfm-gold/5 via-sfm-cream to-sfm-gold/5 rounded-2xl border-2 border-sfm-gold/20 p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sfm-gold rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sfm-navy" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-2">
                    Founders Advantage Pricing
                  </h2>
                  <p className="text-sfm-gold font-medium">Exclusive benefit for the first 30 enrollees</p>
                </div>
              </div>

              {/* Founders Advantage Overview */}
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-display text-2xl text-sfm-navy mb-4">
                    Founders Advantage Overview
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Sankofa Family Medicine PLLC offers a limited Founders Advantage to early members of the practice.
                    </p>
                    <p>
                      The Founders Cohort is limited to approximately the first 30 individuals who complete enrollment when patient registration opens.
                    </p>
                    <p>
                      Founders Cohort members are eligible for reduced founding member pricing across all membership tiers. This pricing is locked in for as long as the member maintains continuous membership in good standing, even if standard membership rates increase in the future.
                    </p>
                    <p>
                      Founders Advantage eligibility is determined solely by enrollment order and is not contingent on billing frequency. Members may choose monthly or annual billing in accordance with published options. Any annual billing discounts, if offered, apply separately and in addition to Founders Advantage pricing.
                    </p>
                    <p>
                      If a Founders Cohort member's membership lapses, is canceled, paused, or is otherwise terminated for any reason, Founders Advantage pricing is forfeited and may not be reinstated. Any future re-enrollment will be subject to then-current standard rates.
                    </p>
                    <p>
                      Founders Advantage pricing is non-transferable and applies only to the enrolled member(s).
                    </p>
                  </div>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto -mx-4 px-4">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden rounded-xl border border-sfm-gold/30 bg-white shadow-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-sfm-navy">
                          <tr>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">
                              Membership Tier
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">
                              Standard Monthly Price
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">
                              Founders Monthly Price
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">
                              Monthly Savings
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-sfm-navy">
                              Continuity Concierge
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              $275/month
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-sfm-gold">
                              $225/month
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              $50/month ($600/year)
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-sfm-navy">
                              Precision Concierge
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              $375/month
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-sfm-gold">
                              $325/month
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              $50/month ($600/year)
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-sfm-navy">
                              Executive Concierge
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              $650–$725/month
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-sfm-gold">
                              $650/month
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              Up to $75/month ($900/year)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  *Founders pricing reflects the lower end of each tier's standard pricing range.
                </p>

                {/* Annual Billing Note */}
                <div className="bg-sfm-azure/5 rounded-xl p-6 border border-sfm-azure/20">
                  <h4 className="font-display text-lg text-sfm-navy mb-3 font-semibold">
                    Annual Billing Note
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Annual billing options may offer an additional discount (currently 10%) and are calculated based on the applicable monthly rate. Annual billing discounts are promotional, separate from Founders Advantage pricing, and may be modified or discontinued prospectively at the practice's discretion.
                  </p>
                </div>

                {/* Legal Safety Language */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-sfm-navy flex-shrink-0 mt-0.5" />
                    <h4 className="font-display text-lg text-sfm-navy font-semibold">
                      Legal Safety Language
                    </h4>
                  </div>
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                    <p>
                      Founders Advantage pricing does not guarantee enrollment, continued availability of any specific services, response times, or clinical outcomes, and does not alter clinical judgment, triage protocols, or scope of services. All services remain subject to clinical appropriateness, availability, and practice policies.
                    </p>
                    <p>
                      Notwithstanding any general fee-modification language elsewhere in these Membership Terms, Founders Advantage pricing applies as described above only while continuous membership is maintained.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* General Pricing and Payment Terms */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-sfm-azure" />
              <h2 className="font-display text-3xl text-sfm-navy">
                General Pricing and Payment Terms
              </h2>
            </div>

            <div className="bg-sfm-cream/50 rounded-xl p-8 border border-gray-200">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Annual prepayment option available for members with a discount of 10%.
                </p>
                <p>
                  Members may also prepay multiple months in advance, including via a health management trust, where permitted. Prepaid amounts are held in trust and applied to the monthly direct fee as earned; unearned amounts are refundable according to the Membership Agreement.
                </p>
                <p>
                  Prepaid amounts are held in trust and applied to the monthly direct fee as earned.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Terms Placeholder */}
          <div className="mb-16">
            <h2 className="font-display text-3xl text-sfm-navy mb-6">
              Additional Terms
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Complete membership terms, including scope of services, cancellation policies, dispute resolution procedures, and other legal provisions will be provided in the full Membership Agreement at the time of enrollment. All members will be required to review and accept the complete terms prior to finalizing enrollment.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                For questions about membership terms or the Founders Advantage program, please{' '}
                <Link href="/contact" className="text-sfm-azure hover:text-sfm-gold font-medium transition-colors">
                  contact us
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sfm-navy via-sfm-navy-light to-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Ready to Join the Founders Cohort?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join the Founders Waitlist today to secure your position for early enrollment and potential Founders Advantage pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryCTA variant="hero">
              Join the Founders Waitlist
            </PrimaryCTA>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-display font-medium text-white border-2 border-white/25 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              View Membership Tiers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="py-8 bg-sfm-cream/50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-gray-500 leading-relaxed text-center">
            <strong>Disclaimer:</strong> The information on this page is for informational purposes only and does not constitute legal or financial advice. Terms are subject to change. Complete membership terms will be provided at the time of enrollment. Sankofa Family Medicine PLLC reserves the right to modify membership terms, pricing, and policies with appropriate notice to members in accordance with applicable law.
          </p>
        </div>
      </section>
    </main>
  )
}