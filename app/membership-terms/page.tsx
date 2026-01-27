'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PrimaryCTA from '@/components/PrimaryCTA'
import ScrollReveal from '@/components/ScrollReveal'
import { 
  Check, X, FileText, DollarSign, Shield, AlertCircle, 
  Clock, Heart, MessageCircle, Pill, TestTube, Calendar 
} from 'lucide-react'

export default function MembershipTermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-white to-sfm-cream/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Membership Terms & Agreements' }]} />
          </div>

          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">
              Membership Terms & Agreements
            </h1>
            <p className="text-lg text-sfm-text-muted">
              Everything you need to know about membership at Sankofa Family Medicine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* DPC Model Explanation */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy">
                Direct Primary Care Model
              </h2>
              <p className="text-sfm-text-muted leading-relaxed">
                Sankofa Family Medicine is a Direct Primary Care (DPC) practice, registered with the Washington State Office of the Insurance Commissioner pursuant to RCW 48.150. This is a fee-for-service membership model, not insurance. You pay a monthly or annual membership fee directly to the practice for primary care services.
              </p>
              <p className="text-sfm-text-muted leading-relaxed">
                This model allows us to eliminate insurance-driven administrative overhead, spend more time with patients, avoid insurance restrictions on care decisions, and provide truly personalized care focused on your health rather than billing codes.
              </p>
            </div>
          </ScrollReveal>

          {/* Membership Tiers */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy">
                Membership Tiers
              </h2>
              <p className="text-sfm-text-muted leading-relaxed">
                We offer three membership tiers to meet different healthcare needs:
              </p>
              
              <div className="space-y-4">
                <div className="border border-sfm-border rounded-xl p-6">
                  <h3 className="font-display text-xl text-sfm-navy mb-2">
                    Continuity Concierge
                  </h3>
                  <p className="text-sfm-text-muted mb-2">
                    Essential virtual primary care with the continuity and access that traditional medicine has lost.
                  </p>
                  <p className="text-sfm-azure font-semibold">
                    $225-275/month
                  </p>
                </div>

                <div className="border border-sfm-border rounded-xl p-6">
                  <h3 className="font-display text-xl text-sfm-navy mb-2">
                    Precision Concierge
                  </h3>
                  <p className="text-sfm-text-muted mb-2">
                    Everything in Continuity, plus genetic insights and advanced diagnostics for truly personalized care.
                  </p>
                  <p className="text-sfm-azure font-semibold">
                    $325-375/month
                  </p>
                </div>

                <div className="border border-sfm-border rounded-xl p-6">
                  <h3 className="font-display text-xl text-sfm-navy mb-2">
                    Executive Concierge
                  </h3>
                  <p className="text-sfm-text-muted mb-2">
                    The highest level of physician-directed concierge care, designed for individuals and families requiring enhanced access and coordination.
                  </p>
                  <p className="text-sfm-azure font-semibold">
                    $650-725/month
                  </p>
                </div>
              </div>

              <p className="text-sm text-sfm-text-light italic">
                See our <Link href="/services" className="text-sfm-azure hover:underline">Services page</Link> for complete details on what's included in each tier.
              </p>
            </div>
          </ScrollReveal>

          {/* Payment Terms */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-sfm-azure" />
                Payment Terms
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Billing Options
                  </h3>
                  <ul className="space-y-3 text-sfm-text-muted">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span><strong>Monthly billing:</strong> Membership fees are billed on the 1st of each month via automatic recurring payment.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span><strong>Annual prepayment:</strong> Save 10% when you prepay for a full year upfront.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Payment Methods
                  </h3>
                  <p className="text-sfm-text-muted mb-3">
                    We accept credit cards, debit cards, HSA/FSA cards, ACH bank transfers, Apple Pay, and Google Pay through our secure, HIPAA-compliant patient portal.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    HSA/FSA Eligibility
                  </h3>
                  <p className="text-sfm-text-muted mb-3">
                    As of January 1, 2026, Direct Primary Care (DPC) membership fees are HSA-eligible qualified medical expenses under IRS Section 213(d). Sankofa Family Medicine is registered as a DPC practice with the Washington State Office of the Insurance Commissioner (RCW 48.150), making our membership fees HSA-eligible for patients enrolled in HSA-qualified high-deductible health plans (HDHPs).
                  </p>
                  <p className="text-sfm-text-muted">
                    FSA eligibility depends on your specific FSA plan rules. Please confirm with your HSA/FSA administrator before enrollment.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Flexible Terms
                  </h3>
                  <ul className="space-y-3 text-sfm-text-muted">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span><strong>No long-term contracts:</strong> Memberships are month-to-month. Cancel anytime with 30 days written notice.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span><strong>Prepaid amounts:</strong> If you prepay multiple months in advance, prepaid amounts are held in trust and applied to your monthly direct fee as earned. Unearned amounts are refundable according to the Membership Agreement.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Founding Member Program */}
          <ScrollReveal>
            <div id="founding-member-program" className="bg-sfm-gold/5 border border-sfm-gold/30 rounded-2xl p-8 space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy flex items-center gap-3">
                <Shield className="w-8 h-8 text-sfm-gold" />
                Founding Member Program
              </h2>
              
              <div className="space-y-4">
                <p className="text-sfm-text-muted leading-relaxed">
                  The first 30 founding members receive <strong>Executive Concierge benefits</strong> at <strong>Precision Concierge pricing</strong> ($295/month, locked for life).
                </p>

                <div className="bg-white rounded-xl p-6 space-y-4">
                  <h3 className="font-display text-lg text-sfm-navy">
                    Founding Member Benefits:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sfm-text-muted">Executive Concierge benefits at Precision Concierge pricing ($295/month vs. standard $650-725/month)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sfm-text-muted">Pricing protected for life while membership remains active</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sfm-text-muted">Priority access to new services and programs as they launch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sfm-text-muted">Early enrollment before public launch</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-sfm-azure/5 border border-sfm-azure/30 rounded-xl p-6">
                  <h3 className="font-display text-lg text-sfm-navy mb-3">
                    How It Works:
                  </h3>
                  <ul className="space-y-3 text-sfm-text-muted">
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span><strong>Join the waitlist today.</strong> No payment required now.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span><strong>Enrollment begins February 2026.</strong> Founding members will be invited first.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span><strong>Lock in your rate.</strong> Once you enroll, your founding member pricing is protected for life as long as your membership remains active.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex justify-center">
                  <PrimaryCTA variant="hero">
                    Join the Founders Waitlist
                  </PrimaryCTA>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Services Covered */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy flex items-center gap-3">
                <Heart className="w-8 h-8 text-sfm-azure" />
                What's Included in Membership
              </h2>
              
              <p className="text-sfm-text-muted leading-relaxed">
                All membership tiers include core primary care services:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Virtual primary care visits:</strong> Physician-led video consultations with Dr. Nkrumah</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Secure messaging:</strong> Direct communication with your physician, typically responded to within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Care coordination:</strong> Referrals and coordination with specialists and external providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Medication management:</strong> Prescriptions, refills, and adjustments as medically appropriate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Wholesale lab pricing access:</strong> 70-90% savings on laboratory tests through Quest Diagnostics and Labcorp (labs are ordered by the physician but paid separately by the patient at wholesale rates)</span>
                </li>
              </ul>

              <p className="text-sm text-sfm-text-light italic">
                Higher tiers include additional services like genetic testing interpretation, advanced diagnostics, priority scheduling, and enhanced access. See our <Link href="/services" className="text-sfm-azure hover:underline">Services page</Link> for complete details.
              </p>
            </div>
          </ScrollReveal>

          {/* What's NOT Covered */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-sfm-text-muted" />
                What's NOT Covered
              </h2>
              
              <p className="text-sfm-text-muted leading-relaxed">
                DPC membership does NOT replace health insurance. The following services are not included in membership and should be covered by your health insurance or paid separately:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-sfm-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Emergency services:</strong> Call 911 for life-threatening conditions. Sankofa Family Medicine is not an emergency service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-sfm-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Specialist care:</strong> Cardiology, dermatology, orthopedics, and other specialty services (we provide referrals and coordinate care).</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-sfm-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Hospital services:</strong> Inpatient care, surgery, emergency department visits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-sfm-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Imaging:</strong> X-rays, MRIs, CT scans (we can order these and refer you to imaging centers, but costs are separate).</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-sfm-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-sfm-text-muted"><strong>Laboratory tests:</strong> While we provide access to wholesale lab pricing (70-90% savings), lab tests are paid separately by the patient directly to the lab.</span>
                </li>
              </ul>

              <div className="bg-sfm-azure/5 border border-sfm-azure/30 rounded-xl p-6">
                <p className="text-sfm-text-muted">
                  <strong>Important:</strong> You must maintain health insurance for hospitalizations, emergencies, specialist visits, and other services not included in DPC membership. DPC is designed to work alongside your insurance, not replace it.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Cancellation Policy */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy flex items-center gap-3">
                <Clock className="w-8 h-8 text-sfm-azure" />
                Cancellation Policy
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    No Long-Term Contracts
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    We believe you should stay because the care is excellent, not because you're locked into a contract. All memberships are month-to-month unless you choose annual prepayment.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Monthly Memberships
                  </h3>
                  <ul className="space-y-3 text-sfm-text-muted">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span>Cancel anytime with 30 days written notice to info@sankofafamilymedicine.com</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span>Cancellation becomes effective at the end of your current billing period</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span>No cancellation fees apply</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Annual Prepaid Memberships
                  </h3>
                  <ul className="space-y-3 text-sfm-text-muted">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span>Cancel with 30 days written notice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span>You will receive a pro-rata refund for unused full months minus a $100 administrative fee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sfm-azure flex-shrink-0 mt-0.5" />
                      <span>No refund is provided for any month in which services were rendered or available</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Founding Member Pricing
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    Founding member pricing is locked for the duration of continuous membership. If you cancel and re-enroll later, founding member pricing does not apply. You will be charged current standard rates upon re-enrollment.
                  </p>
                </div>

                <div className="bg-sfm-azure/5 border border-sfm-azure/30 rounded-xl p-6">
                  <p className="text-sfm-text-muted">
                    <strong>Important:</strong> Membership fees are non-refundable for any month in which you accessed services or services were available to you, even if you did not use them.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Important Disclosures */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-sfm-navy flex items-center gap-3">
                <FileText className="w-8 h-8 text-sfm-azure" />
                Important Disclosures
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    This Is Not Insurance
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    Sankofa Family Medicine is a Direct Primary Care practice, not an insurance company. DPC membership fees are not insurance premiums and do not cover hospital services, emergency care, specialist visits, or other services typically covered by health insurance.
                  </p>
                  <p className="text-sfm-text-muted leading-relaxed mt-3">
                    You must maintain health insurance for hospitalizations, emergencies, specialists, and other services not included in DPC membership.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Maintain Your Health Insurance
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    We strongly recommend that all patients maintain comprehensive health insurance coverage. DPC is designed to work alongside your insurance, providing enhanced primary care while your insurance covers hospitalizations, specialists, imaging, surgeries, and emergency services.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Controlled Substances Policy
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    Dr. Nkrumah can prescribe controlled substances via telehealth when clinically appropriate and in accordance with DEA and Washington State regulations. This includes medications for ADHD, anxiety, pain management, and other conditions. However, all controlled substance prescribing is subject to clinical judgment, established care relationships, and regulatory compliance. Membership does not guarantee access to any specific medication.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Physician-Patient Relationship
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    A formal physician-patient relationship is established only upon enrollment and completion of the initial consultation. Joining the waitlist, browsing the website, or communicating with our team does not create a physician-patient relationship. Medical advice is provided only to enrolled patients through secure, HIPAA-compliant channels.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Medical Licensing
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    Dr. Yaw Nkrumah is licensed to practice medicine in Washington State. All care is provided virtually to patients physically located in Washington at the time of service. We plan to expand to additional states in the future.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">
                    Privacy & Security
                  </h3>
                  <p className="text-sfm-text-muted leading-relaxed">
                    We are fully HIPAA-compliant. All video visits, messaging, and health records are encrypted and stored securely. We use enterprise-grade security practices and never sell or share your data. See our <Link href="/privacy" className="text-sfm-azure hover:underline">Privacy Policy</Link> for complete details.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact & CTA */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-sfm-navy to-sfm-navy-light rounded-2xl p-8 md:p-12 text-center space-y-6">
              <h2 className="font-display text-3xl text-white">
                Questions About Membership?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Join our founders waitlist to secure your spot, or reach out to our team if you have questions about membership terms.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <PrimaryCTA variant="hero">
                  Join the Founders Waitlist
                </PrimaryCTA>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-display font-semibold text-white border-2 border-white/25 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  Email: <a href="mailto:info@sankofafamilymedicine.com" className="text-sfm-gold hover:underline">info@sankofafamilymedicine.com</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  )
}