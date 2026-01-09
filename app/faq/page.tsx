'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ArrowRight, ChevronDown, CreditCard, Shield, Video, Users, Clock, HelpCircle, Pill, TestTube } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string | React.ReactNode
}

type FAQSection = {
  title: string
  icon: React.ElementType
  items: FAQItem[]
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const faqSections: FAQSection[] = [
    {
      title: 'Payment & Insurance',
      icon: CreditCard,
      items: [
        {
          question: 'Do you accept insurance?',
          answer: 'Sankofa Family Medicine is currently a direct-pay (cash-pay) practice. We do not bill insurance directly. This model allows us to spend more time with patients, avoid insurance restrictions, and provide truly personalized care. We may expand to accept insurance in the future.'
        },
        {
          question: 'How do I pay for services?',
          answer: (
            <div className="space-y-3">
              <p>We accept payment via credit card, debit card, and HSA/FSA cards through our secure, HIPAA-compliant payment system.</p>
              <p>Membership fees are billed monthly. Individual visits and programs are billed at the time of service.</p>
              {/* Stripe payment link placeholder - uncomment when ready */}
              {/* <a href="YOUR_STRIPE_LINK_HERE" className="inline-flex items-center text-sfm-azure hover:text-sfm-navy font-medium">
                Make a Payment <ArrowRight className="ml-2 w-4 h-4" />
              </a> */}
            </div>
          )
        },
        {
          question: 'Can I use my HSA or FSA?',
          answer: 'Yes! Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can be used for membership fees, visits, and programs at Sankofa Family Medicine. These are qualified medical expenses.'
        },
        {
          question: 'Can you provide documentation for insurance reimbursement?',
          answer: 'Yes. We can provide a superbill (itemized receipt with procedure codes) that you can submit to your insurance company for potential out-of-network reimbursement. Reimbursement rates vary by plan.'
        },
        {
          question: 'What if I need to cancel my membership?',
          answer: 'Memberships can be cancelled at any time with 30 days notice. There are no cancellation fees. Founding member pricing is locked for the duration of continuous membership.'
        },
        {
          question: 'How does concierge medicine compare to traditional insurance co-pays?',
          answer: 'While insurance co-pays may seem lower per visit, most patients with chronic conditions or those who value preventive care find concierge medicine more economical. With concierge medicine, you get generous virtual visit access, no surprise bills, longer appointments, and direct access to your physician. Many members save money overall, especially when factoring in wholesale lab pricing (70-90% savings) and avoiding unnecessary specialist referrals.'
        },
      ]
    },
    {
      title: 'Virtual Care',
      icon: Video,
      items: [
        {
          question: 'How do virtual visits work?',
          answer: 'Virtual visits are conducted via secure, HIPAA-compliant video conferencing. You\'ll receive a link before your appointment and can join from any device with a camera and internet connection. No special software is required.'
        },
        {
          question: 'What can be treated virtually?',
          answer: 'Most primary care concerns can be effectively addressed via telehealth, including: acute illnesses (cold, flu, infections), chronic disease management, medication refills and adjustments, mental health support, preventive care planning, lab result reviews, and health coaching. Some conditions may require in-person evaluation, and we will coordinate referrals when needed.'
        },
        {
          question: 'Is telehealth as effective as in-person care?',
          answer: 'For most primary care needs, yes. Research shows that telehealth delivers comparable outcomes for many conditions, often with greater convenience and continuity. The key advantage of our model is that you see the same physician every time. This continuity actually improves outcomes compared to fragmented in-person care.'
        },
        {
          question: 'What if I need in-person care?',
          answer: 'We maintain relationships with trusted local specialists and facilities in Washington State. If you need labs, imaging, procedures, or specialist care, we\'ll coordinate referrals and ensure your records follow you.'
        },
        {
          question: 'What technology do I need for virtual visits?',
          answer: 'You need a smartphone, tablet, or computer with a camera, microphone, and stable internet connection. Our video platform works in most modern web browsers. No app download is required, though mobile apps are available for convenience.'
        },
        {
          question: 'Can I do a virtual visit from work or while traveling?',
          answer: 'Yes, as long as you are physically located in Washington State during the visit. Due to medical licensing laws, we can only provide care to patients who are in a state where Dr. Nkrumah is licensed. If you travel frequently, let us know and we can discuss options.'
        },
      ]
    },
    {
      title: 'Prescriptions & Labs',
      icon: Pill,
      items: [
        {
          question: 'Can you prescribe medications virtually?',
          answer: 'Yes. Dr. Nkrumah can prescribe most medications via telehealth, including antibiotics, blood pressure medications, diabetes medications, mental health medications, and more. Prescriptions are sent electronically to your pharmacy of choice.'
        },
        {
          question: 'Can you prescribe controlled substances?',
          answer: 'Yes, with appropriate clinical justification and established care relationship. This includes medications for ADHD, anxiety, pain management, and other conditions. We follow all DEA and Washington State regulations for controlled substance prescribing via telehealth.'
        },
        {
          question: 'Can you prescribe GLP-1 medications for weight loss?',
          answer: 'Yes. We offer comprehensive weight management programs that may include GLP-1 medications (semaglutide, tirzepatide) when clinically appropriate. These programs include ongoing monitoring, lifestyle coaching, and medication management.'
        },
        {
          question: 'How do labs work with virtual care?',
          answer: 'We order labs through Quest Diagnostics and Labcorp. You visit a local draw site at your convenience. Results come directly to us, and we review them with you via secure message or video visit. Members receive wholesale lab pricing with 70-90% savings compared to hospital prices.'
        },
        {
          question: 'What are the lab cost savings?',
          answer: (
            <div className="space-y-3">
              <p>Members access wholesale lab pricing. Examples of typical savings:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Comprehensive Metabolic Panel: $8-12 (vs. $50-150 at hospitals)</li>
                <li>Lipid Panel: $8-12 (vs. $50-100 at hospitals)</li>
                <li>Thyroid Panel: $15-25 (vs. $75-200 at hospitals)</li>
                <li>Hemoglobin A1c: $10-15 (vs. $50-100 at hospitals)</li>
              </ul>
              <p>Exact pricing depends on the specific lab and test ordered.</p>
            </div>
          )
        },
        {
          question: 'Can you order imaging (X-rays, MRIs)?',
          answer: 'Yes. We can order imaging studies and refer you to local imaging centers. While imaging costs are not included in membership, we can often help you find competitive cash-pay pricing at independent imaging centers.'
        },
      ]
    },
    {
      title: 'Membership',
      icon: Users,
      items: [
        {
          question: 'What\'s included in membership?',
          answer: 'All membership tiers include unlimited virtual visits with Dr. Nkrumah, secure messaging with 24-48 hour response times, care coordination, and prescription management. Higher tiers add genetic testing, AI-powered health insights, and direct physician access. See our Services page for full details.'
        },
        {
          question: 'What\'s the founding member offer?',
          answer: 'Founding members lock in their rate for life. Limited spots available. Join now to secure your membership at current pricing.'
        },
        {
          question: 'Can I change my membership tier?',
          answer: 'Yes. You can upgrade or downgrade your membership tier at any time. Changes take effect at the start of your next billing cycle. Note: founding member pricing applies only to the original tier selected.'
        },
        {
          question: 'Do you see families?',
          answer: 'Yes! Sankofa Family Medicine serves patients of all ages. Family memberships and multi-member discounts may be available. Contact us for details.'
        },
        {
          question: 'What ages do you treat?',
          answer: 'We provide care for patients ages 12 and older. Adolescent patients (12-17) require parental/guardian consent and involvement in care. We are evaluating expansion to younger pediatric patients in the future.'
        },
        {
          question: 'Is there a minimum commitment?',
          answer: 'No. Memberships are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. We believe you should stay because the care is excellent, not because you are locked in.'
        },
      ]
    },
    {
      title: 'Getting Started',
      icon: Clock,
      items: [
        {
          question: 'How do I become a patient?',
          answer: (
            <div className="space-y-3">
              <p>Start in Atlas, our secure patient portal. Complete your intake, select your membership tier, and schedule your first visit directly through the platform.</p>
              <a href="https://sankofafamilymedicine.atlas.md/hub/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sfm-azure hover:text-sfm-navy font-medium">
                Founding Member Enrollment Now Open <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          )
        },
        {
          question: 'What happens during the first visit?',
          answer: 'Your first visit is a comprehensive intake (45-60 minutes) where we review your complete health history, discuss your goals, and develop a personalized care plan. This is the foundation of "Medicine That Remembers": we take the time to truly understand you.'
        },
        {
          question: 'How does enrollment work?',
          answer: 'Enrollment begins in Atlas. Complete your intake and schedule your first visit directly through our secure patient portal. Care can begin as early as the same week, depending on onboarding.'
        },
        {
          question: 'Do I need to transfer my medical records?',
          answer: 'We\'ll help you request records from previous providers. Having your history helps us provide better care, but you can start as a patient before records arrive.'
        },
        {
          question: 'Where do you practice?',
          answer: 'Sankofa Family Medicine is a virtual practice serving patients throughout Washington State. Dr. Nkrumah is licensed in Washington. We plan to expand to additional states in the future.'
        },
        {
          question: 'How quickly can I get an appointment?',
          answer: 'Most members can get same-day or next-day appointments for acute needs. Routine appointments are typically available within a few days. Executive Concierge members have priority scheduling with same-day guarantee for urgent concerns.'
        },
        {
          question: 'Do I need to leave my current doctor?',
          answer: 'No. Some patients use concierge medicine as their primary care and maintain specialists as needed. Others keep their traditional PCP for insurance-covered services and use Sankofa for enhanced access, longer visits, and specialized programs. We can work alongside your existing care team.'
        },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        {
          question: 'Is this an emergency service?',
          answer: 'No. Sankofa Family Medicine does not replace emergency services. If you experience chest pain, shortness of breath, neurological symptoms, severe injury, or any life-threatening condition, call 911 or seek immediate emergency care.'
        },
        {
          question: 'Is my health information secure?',
          answer: 'Yes. We are fully HIPAA-compliant. All video visits, messaging, and health records are encrypted and stored securely. We use enterprise-grade security practices and never sell or share your data.'
        },
        {
          question: 'Who can see my medical records?',
          answer: 'Only Dr. Nkrumah and authorized clinical staff have access to your records. We will never share your information with third parties without your explicit consent, except as required by law.'
        },
        {
          question: 'How does AI fit into your practice?',
          answer: 'We use AI tools to support clinical workflows, helping with documentation, surfacing relevant history, and identifying potential health insights. AI never makes clinical decisions; it is a tool that helps your physician focus on you. All AI systems we use are HIPAA-compliant.'
        },
        {
          question: 'Can I access my own medical records?',
          answer: 'Yes. You have the right to access your complete medical records at any time. We can provide copies electronically or in print. There is no charge for accessing your own records.'
        },
      ]
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-white to-sfm-cream/30">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'FAQ' }]} />
          </div>
          
          <div className="text-center">
            <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">Support</p>
            <h1 className="font-display text-5xl md:text-6xl text-sfm-navy mb-8 leading-[1.1]">
              Frequently Asked Questions
            </h1>
            <div className="divider-gold mx-auto mb-10" />
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
              Everything you need to know about Sankofa Family Medicine, from payment to virtual care to getting started.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-6 h-6 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="font-display text-2xl text-sfm-navy">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const itemId = `${sectionIndex}-${itemIndex}`
                  const isOpen = openItems[itemId]

                  return (
                    <div key={itemId} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-inset"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${itemId}`}
                      >
                        <span className="font-medium text-sfm-navy pr-4 text-lg">{item.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-sfm-azure flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      <div 
                        id={`faq-answer-${itemId}`}
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                        role="region"
                        aria-labelledby={`faq-question-${itemId}`}
                      >
                        <div className="px-6 pb-6 text-muted leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-sfm-azure/10 flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="w-10 h-10 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-6">Still Have Questions?</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            We're happy to answer any questions not covered here. Reach out and we'll respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <a href="mailto:info@sankofafamilymedicine.com" className="btn-secondary">
              Email: info@sankofafamilymedicine.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-sfm-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          {/* Now Accepting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Now Accepting Founding Members</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 leading-tight">
            Begin Your Care with<br />
            <span className="text-sfm-gold">Medicine That Remembers</span><span className="text-sfm-gold text-xl align-top">&#8482;</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
            Enrollment begins in Atlas. Complete your intake and schedule your first visit directly through our secure patient portal.
          </p>
          <p className="text-white/40 text-sm mb-12 max-w-2xl mx-auto">
            All intake, scheduling, messaging, and visits occur securely inside Atlas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://sankofafamilymedicine.atlas.md/hub/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Founding Member Enrollment Now Open
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </a>
            <Link href="/services" className="btn-secondary-white">
              View Membership Options
            </Link>
          </div>
        </div>
      </section>

      {/* Accessibility: Announce state changes */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        FAQ section loaded
      </div>
    </>
  )
}

