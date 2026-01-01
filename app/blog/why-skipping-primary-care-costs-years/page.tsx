import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Skipping Primary Care Feels Rational (And Why It Quietly Costs People Years) | Sankofa Family Medicine',
  description: 'Most people avoid primary care because their reasoning makes sense to them. Learn why reactive thinking in a system that punishes delay has hidden costs measured in years.',
  keywords: ['primary care', 'preventive medicine', 'health prevention', 'direct primary care'],
  openGraph: {
    title: 'Why Skipping Primary Care Feels Rational (And Why It Quietly Costs People Years)',
    description: 'Most people avoid primary care because their reasoning makes sense to them. Learn why reactive thinking has hidden costs.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
    authors: ['Dr. Yaw Nkrumah'],
    images: ['/images/blog-primary-care.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Skipping Primary Care Feels Rational (And Why It Quietly Costs People Years)',
    description: 'Most people avoid primary care because their reasoning makes sense to them.',
    images: ['/images/blog-primary-care.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Skipping Primary Care Feels Rational (And Why It Quietly Costs People Years)',
  description: 'Most people avoid primary care because their reasoning makes sense to them. Learn why reactive thinking in a system that punishes delay has hidden costs measured in years.',
  image: 'https://sankofafamilymedicine.com/images/blog-primary-care.png',
  datePublished: '2025-12-01T00:00:00Z',
  dateModified: '2025-12-01T00:00:00Z',
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
      url: 'https://sankofafamilymedicine.com/images/sfm-logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sankofafamilymedicine.com/blog/why-skipping-primary-care-costs-years',
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
          
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold border bg-purple-100 text-purple-700 border-purple-200 mb-6">
            Primary Care
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Why Skipping Primary Care Feels Rational (And Why It Quietly Costs People Years)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Yaw Nkrumah, MD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 1, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-xl group image-depth">
          <Image
            src="/images/blog-primary-care.png"
            alt="Doctor analyzing patient health trends over time"
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
            Most people do not avoid primary care because they are careless.
            They avoid it because their reasoning makes sense to them.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            From a social psychology perspective, primary care has a visibility problem. When it works, nothing dramatic happens. No emergency. No hospital stay. No crisis story. Humans consistently undervalue systems that prevent problems they never see.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            That logic feels efficient.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            It is also costly.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">The Mental Model That Fails People</h2>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy">Many people run some version of this internal script:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>&ldquo;I feel fine.&rdquo;</li>
            <li>&ldquo;I&apos;ll go if something is actually wrong.&rdquo;</li>
            <li>&ldquo;Doctors just refer you anyway.&rdquo;</li>
            <li>&ldquo;I don&apos;t want to waste time or money.&rdquo;</li>
          </ul>

          <p className="text-lg text-muted leading-relaxed mb-6">
            This reasoning feels independent and practical. In reality, it is reactive thinking in a system that punishes delay.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Primary care is not about fixing what is broken. It is about identifying what is forming before it becomes expensive, dangerous, or irreversible.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">By the time symptoms are obvious, leverage has already been lost.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">Why Humans Undervalue Prevention</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">People are wired to respond to pain, not probability.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Preventive care deals in trends, risk gradients, and slow shifts. Humans prefer certainty and immediacy. That mismatch leads people to overvalue urgent care and undervalue <Link href="/services/what-we-cover" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">continuity</Link>.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy">The paradox is simple:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>When primary care works, you never feel rescued.</li>
            <li>When it fails or is absent, the consequences arrive late and all at once.</li>
          </ul>

          <p className="text-lg text-muted leading-relaxed mb-6">
            This delay masks causality. People associate the crisis with bad luck rather than years of missed opportunities to intervene earlier.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">What Primary Care Actually Does</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">Primary care is not a single visit. It is longitudinal pattern recognition.</p>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy">A clinician who knows you over time notices changes that no one visit can capture:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>Blood pressure that is &ldquo;acceptable&rdquo; but rising every year</li>
            <li>Labs that remain in range while steadily drifting toward a threshold</li>
            <li>Weight changes that signal metabolic shifts before diabetes appears</li>
            <li>Fatigue that keeps resurfacing under different explanations</li>
          </ul>

          <p className="text-lg text-muted leading-relaxed mb-6">None of these trigger alarms on their own. Together, they tell a story.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            I think of a patient I saw recently. Forty-six years old. Felt fine. Annual labs looked &ldquo;normal&rdquo; by standard reference ranges. But compared to his results from three years prior, his fasting glucose had risen 14 points, his triglycerides had climbed steadily, and his blood pressure had shifted from low-normal to high-normal.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            No single value was flagged. But the direction was clear.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            We made changes. Diet, movement, stress. Six months later, the trend reversed. He never became diabetic. He never needed medication. He never knew how close he was.
          </p>

          <p className="text-lg leading-relaxed mb-6 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">That is what continuity catches.</strong>
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Emergency departments manage events. Specialists manage organs. Primary care manages the longer arc: the patterns that only reveal themselves over time.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">The Real Cost of Avoiding Primary Care</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Urgent care and emergency medicine answer one question well: &ldquo;Is this immediately dangerous right now?&rdquo;
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            They are not designed to answer why something keeps happening, what risk is accumulating, or how to prevent recurrence. Episodic care resets context every visit. No memory. No baseline. No narrative.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">The cost of skipping primary care is not the missed appointment.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            The cost is the delayed diagnosis. The preventable hospitalization. The irreversible complication. The moment someone says, &ldquo;I should have come in earlier.&rdquo;
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            I hear that sentence more often than I would like. And nearly every time, the signs were there. They just were not tracked.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">Primary care is not for people who are sick. It is for people who want to stay functional, independent, and ahead of problems rather than reacting to them under pressure.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">A Final Note</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">You do not need to see me specifically.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            But you do need someone who remembers your story, tracks your direction over time, and treats prevention as a clinical discipline rather than a slogan.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            If that kind of relationship sounds like what has been missing from your care, that is exactly what I do. Not rushed. Not transactional. Just steady attention to the things that matter before they become urgent. <Link href="/compare" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">Direct primary care</Link> makes this possible.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">That difference is measured in years.</strong>
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
          {/* Removed duplicate 'Medicine That Remembers' heading, keep only one per page */}
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Experience the difference of continuity-based care with a physician who tracks your health over time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://sankofafamilymedicine.atlas.md/hub/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Become a Patient
            </a>
            <Link href="/services" className="btn-secondary btn-shine">
              Pricing
            </Link>
          </div>
          <p className="text-sfm-text-muted text-xs mt-3">
            This is a brief, non-clinical call to ensure alignment before enrollment.
          </p>
        </div>
      </section>
    </>
  )
}
