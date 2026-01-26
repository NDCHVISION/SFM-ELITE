import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Virtual Care With the Right Physician Is More Personal, Not Less | Sankofa Family Medicine',
  description: 'There is a common assumption that virtual medicine is impersonal. After years of practicing both models, I have found the opposite is often true. Virtual care can deepen the relationship.',
  keywords: ['virtual care', 'telehealth', 'telemedicine', 'direct primary care', 'physician relationship'],
  openGraph: {
    title: 'Why Virtual Care With the Right Physician Is More Personal, Not Less',
    description: 'There is a common assumption that virtual medicine is impersonal. After years of practicing both models, I have found the opposite is often true.',
    type: 'article',
    publishedTime: '2025-12-08T00:00:00Z',
    authors: ['Dr. Yaw Nkrumah'],
    images: ['/images/blog-virtual-care.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Virtual Care With the Right Physician Is More Personal, Not Less',
    description: 'There is a common assumption that virtual medicine is impersonal. After years of practicing both models, I have found the opposite is often true.',
    images: ['/images/blog-virtual-care.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Virtual Care With the Right Physician Is More Personal, Not Less',
  description: 'There is a common assumption that virtual medicine is impersonal. After years of practicing both models, I have found the opposite is often true.',
  image: 'https://sankofafamilymedicine.com/images/blog-virtual-care.png',
  datePublished: '2025-12-08T00:00:00Z',
  dateModified: '2025-12-08T00:00:00Z',
  author: {
    '@type': 'Person',
    name: 'Dr. Yaw Nkrumah',
    jobTitle: 'Board Certified Family Physician',
    url: 'https://sankofafamilymedicine.com/founder',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sankofa Family Medicine',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sankofafamilymedicine.com/images/SFM_Trans.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sankofafamilymedicine.com/blog/virtual-care-more-personal',
  },
}

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-azure/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-sfm-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold border bg-cyan-100 text-cyan-700 border-cyan-200 mb-6">
            Virtual Care
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Why Virtual Care With the Right Physician Is More Personal, Not Less
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Yaw Nkrumah, MD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-xl group image-depth">
          <Image
            src="/images/telehealth-video-visit.png"
            alt="Patient having a virtual care appointment with their physician"
            width={1200}
            height={675}
            className="w-full h-auto transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <p className="text-xl text-sfm-navy leading-relaxed mb-8 font-medium">
            There is a common assumption that virtual medicine is impersonal.
            A screen instead of a handshake. Pixels instead of presence.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            I understand the instinct. But after years of practicing both in-person and <Link href="/about" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">virtual primary care</Link>, I have found the opposite is often true.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">When done correctly, virtual care does not reduce the relationship. It deepens it.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">The Real Barrier to Good Primary Care</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">For most people, the problem with primary care is not quality. It is friction.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            The 45-minute commute. The waiting room. The half-day blocked for a 12-minute visit. The slow realization that seeing your doctor requires so much effort that you only do it when something is already wrong.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Friction delays follow-up. Delayed follow-up breaks <Link href="/blog/why-skipping-primary-care-costs-years" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">continuity</Link>. Broken continuity means your physician is always working from a snapshot instead of a full picture.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">The issue is not that people do not value their health.</p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">The issue is that the system makes consistent engagement unreasonably hard.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">What Changes When Access Is Easy</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">When I can see a patient virtually within days instead of weeks, something shifts.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            They reach out earlier. Not just when symptoms are severe, but when something feels slightly off. When sleep has been disrupted for a week. When stress is affecting their body in ways they cannot name. When they notice a change and want to talk it through before it becomes a problem.
          </p>

          <p className="text-lg leading-relaxed mb-6 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">This is not convenience medicine. This is medicine the way it should work.</strong>
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Frequency builds context. Context builds trust. Trust builds honesty. Honesty builds accuracy.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">That sequence matters more than whether we are in the same room.</p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">A Different Kind of Visit</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            I had a patient message me on a Thursday evening. She had been having headaches for a few days. Not the worst of her life, but persistent in a way that felt unfamiliar.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            In a <Link href="/compare" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">traditional model</Link>, she probably would have waited. Taken ibuprofen. Hoped it passed. Maybe gone to urgent care if it got bad enough, where a provider with no context would have started from zero.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Instead, we talked for ten minutes that night. I knew her history. I knew she had been under significant stress at work. I knew her blood pressure had been creeping up over the past year.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            We adjusted her management. The headaches resolved. No urgent care. No ER. No unnecessary imaging. Just continuity doing what it is supposed to do.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">What Virtual Care Is Not</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            I am not arguing that virtual medicine replaces all in-person care. Some things require hands-on examination. Some diagnoses need imaging, labs, or procedures.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            But the majority of primary care is not procedural. It is conversational. It is pattern recognition. It is listening carefully, asking the right questions, and knowing what to do with the answers.
          </p>

          <p className="text-lg leading-relaxed mb-6 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">Virtual care fails when it replaces judgment. It succeeds when it removes friction around it.</strong>
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            The danger is not the screen. The danger is care without memory, without context, without someone who knows your story and can interpret new information against everything that came before.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">Why the Physician Still Matters</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Virtual care has expanded access. That is a good thing. But it has also flooded the market with episodic, transactional encounters that feel like customer service, not medicine.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">The differentiator is not technology. It is who is on the other side.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            A physician trained to manage uncertainty. To hold broad differentials even when symptoms are vague. To treat when appropriate and refer when necessary, but not reflexively. To integrate mental, metabolic, and lifestyle factors rather than siloing each into a separate specialty visit.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            That kind of thinking does not come from an algorithm or a protocol. It comes from years of training and accumulated judgment.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">When that is present, virtual care becomes an amplifier. When it is absent, virtual care becomes a vending machine.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">What This Looks Like in Practice</h2>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy">The best care I have delivered combines:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>Continuity over time</li>
            <li>Physician-level clinical reasoning</li>
            <li>Reduced friction through virtual access</li>
            <li>Responsiveness that matches how people actually live</li>
          </ul>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Primary care should not feel rushed, reactive, or transactional. It should feel steady, contextual, and responsive.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">If you have been settling for less, you do not have to.</strong>
          </p>
        </div>
      </article>

      {/* Guide CTA */}
      <section className="py-12 bg-gradient-to-r from-sfm-azure/10 to-sfm-gold/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="font-display text-xl text-sfm-navy mb-2">
              Is anyone actually watching your health?
            </h3>
            <p className="text-muted mb-6">
              Download the free guide to find out if your primary care relationship is working for you.
            </p>
            <Link 
              href="/resources/primary-care-guide" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-gold hover:bg-sfm-gold-light text-sfm-navy font-semibold rounded-lg transition-all"
            >
              Get the Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-4">
            Experience Virtual Care That Feels Personal
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Discover how physician-led virtual primary care can offer the continuity and depth you deserve.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/founders-waitlist"
              className="btn-primary"
            >
              Reserve a Founders Spot
            </Link>
            <Link href="/services" className="btn-secondary btn-shine">
              Membership Plans
            </Link>
          </div>
          <p className="text-sfm-text-muted text-xs mt-3">
            All intake, scheduling, messaging, and visits occur securely inside Atlas.
          </p>
        </div>
      </section>
    </>
  )
}
