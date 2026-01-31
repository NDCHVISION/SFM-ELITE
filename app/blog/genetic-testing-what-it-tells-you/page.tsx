import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Genetic Testing Actually Tells You (And What It Does Not) | Sankofa Family Medicine',
  description: 'Genetic testing is not about predicting the future. It is about adding context to the present. Learn when testing adds value and why precision without continuity is just fragmentation.',
  keywords: ['genetic testing', 'precision medicine', 'preventive care', 'personalized medicine', 'membership primary care'],
  openGraph: {
    title: 'What Genetic Testing Actually Tells You (And What It Does Not)',
    description: 'Genetic testing is not about predicting the future. It is about adding context to the present.',
    type: 'article',
    publishedTime: '2025-12-15T00:00:00Z',
    authors: ['Dr. Yaw Nkrumah'],
    images: ['/images/blog-genetic-testing.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Genetic Testing Actually Tells You (And What It Does Not)',
    description: 'Genetic testing is not about predicting the future. It is about adding context to the present.',
    images: ['/images/blog-genetic-testing.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Genetic Testing Actually Tells You (And What It Does Not)',
  description: 'Genetic testing is not about predicting the future. It is about adding context to the present. Learn when testing adds value and why precision without continuity is just fragmentation.',
  image: 'https://sankofafamilymedicine.com/images/blog-genetic-testing.png',
  datePublished: '2025-12-15T00:00:00Z',
  dateModified: '2025-12-15T00:00:00Z',
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
    '@id': 'https://sankofafamilymedicine.com/blog/genetic-testing-what-it-tells-you',
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
          
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold border bg-blue-100 text-blue-700 border-blue-200 mb-6">
            Genetics
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            What Genetic Testing Actually Tells You (And What It Does Not)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Yaw Nkrumah, MD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-xl group image-depth">
          <Image
            src="/images/blog-genetic-testing.png"
            alt="Clinician analyzing genetic testing data and patient health timeline"
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
            There is a version of genetic testing that sounds like fortune-telling.
            Spit in a tube. Get a report. Learn your destiny.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            That is not how it works. And when people expect prophecy, they either over-react to the results or dismiss them entirely.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">Both responses miss the point.</p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">Genetic testing, used correctly, is not about predicting the future. It is about adding context to the present.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">What Genetics Can Clarify</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Your genes do not tell you what will happen. They tell you what might be more likely to happen, given certain conditions.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">That distinction matters.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            A genetic variant associated with cardiovascular disease does not mean you will have a heart attack. It means that the standard advice to &ldquo;watch your cholesterol&rdquo; might be more urgent for you than for someone without that variant. It means your threshold for intervention might be lower. It means your clinician should be paying closer attention, earlier.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy">Genetics helps explain:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>Why disease sometimes appears earlier than expected</li>
            <li>Why certain medications cause side effects in some people and not others</li>
            <li>Why standard treatments work unevenly across patients</li>
            <li>Why family history matters even when labs look normal</li>
            <li>Why two people with identical lifestyles can have different outcomes</li>
          </ul>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">It is not destiny. It is dimensionality.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">A Case Where Testing Changed the Approach</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            I had a patient in his early fifties. No major health issues. Exercised regularly. Ate reasonably well. His labs were unremarkable year after year.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            But his father had died of a heart attack at 58. His uncle had a stroke at 61. The family pattern was hard to ignore.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Standard risk calculators said he was low risk. The math did not account for what his family had already shown him.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            We did targeted genetic testing. It revealed a variant associated with elevated lipoprotein(a), a cardiovascular risk factor that standard lipid panels do not measure directly and that does not respond to lifestyle changes.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Knowing this changed everything. Not because he was doomed, but because we could act with precision instead of guessing. Earlier imaging. Appropriate medication. A plan that matched his actual risk, not the population average.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">He is not a statistic. He is a person with a specific biology. The testing helped us treat him that way.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">When Genetic Testing Makes Sense</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Genetic testing is not something I recommend for everyone. It adds value when it meaningfully changes decisions.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy">That typically includes:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>Strong family history of early disease (cardiovascular, cancer, neurological)</li>
            <li>Unexpected medication reactions or failures</li>
            <li>Ambiguous symptoms that do not fit a clear pattern</li>
            <li>Patients who want to move from reactive care to <Link href="/services/what-we-cover" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">precision prevention</Link></li>
            <li>Situations where standard risk tools seem to underestimate true risk</li>
          </ul>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">Testing without context is just data. Testing within a <Link href="/about" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">continuous care relationship</Link> becomes actionable intelligence.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">When It Does Not Help</h2>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy"><Link href="/services/what-we-cover" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">Genetic testing</Link> is not useful when:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>There is no plan to act on the results</li>
            <li>The findings would not change clinical management</li>
            <li>It is driven by anxiety rather than clinical reasoning</li>
            <li>It replaces rather than complements the basics (lifestyle, labs, physical exam, history)</li>
          </ul>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Genetics is a layer. It is not a shortcut. And it is not a substitute for the fundamentals of good care.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">The Risk of Testing Outside a Relationship</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Direct-to-consumer genetic tests are widely available now. Some of them are reasonably accurate. But accuracy is not the same as usefulness.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Without clinical interpretation, results can mislead. A &ldquo;risk variant&rdquo; sounds terrifying until you understand its actual penetrance. A &ldquo;normal&rdquo; result sounds reassuring until you realize the test only covered a fraction of relevant genes.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            Genetic data without context creates noise. Sometimes it creates unnecessary fear. Sometimes it creates false confidence.
          </p>

          <p className="text-lg leading-relaxed mb-6 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">The testing matters less than what happens after the testing.</strong>
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            That is why I only use genetic information within an ongoing relationship, where I can interpret results against everything else I know about a patient: their history, their labs, their family, their life.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">Precision without continuity is just fragmentation with better marketing.</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mt-12 mb-6">The Future of Primary Care Is Layered</h2>

          <p className="text-lg text-muted leading-relaxed mb-6">Modern primary care is becoming more precise. That is a good thing.</p>

          <p className="text-lg text-muted leading-relaxed mb-6">But precision is not a replacement for relationship. It is an enhancement. This is similar to how <Link href="/blog/virtual-care-more-personal" className="text-sfm-azure hover:text-sfm-navy underline underline-offset-2 transition-colors">virtual care deepens relationships</Link> when done correctly.</p>

          <p className="text-lg text-muted leading-relaxed mb-4"><strong className="text-sfm-navy">The most effective model combines:</strong></p>

          <ul className="text-lg text-muted leading-relaxed mb-8 space-y-2 list-disc pl-6">
            <li>Longitudinal knowledge of the patient</li>
            <li>Strong clinical reasoning</li>
            <li>Genetic and metabolic data used selectively</li>
            <li>A willingness to update the plan as new information emerges</li>
          </ul>

          <p className="text-lg text-muted leading-relaxed mb-6">
            This is how care moves from population averages to individualized strategy. Not by testing everything, but by testing the right things at the right time for the right reasons.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            If you have been curious about whether genetic testing makes sense for you, the answer depends on your history, your goals, and what we are trying to understand.
          </p>

          <p className="text-lg leading-relaxed mb-8 bg-sfm-cream/50 p-4 rounded-lg border-l-4 border-sfm-gold">
            <strong className="text-sfm-navy">That is a conversation worth having.</strong>
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
            Wondering If Genetic Testing Is Right for You?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            The answer depends on your history, your goals, and what we are trying to understand. Let&apos;s have that conversation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/founders-waitlist"
              className="btn-primary"
            >
              Join the Founders Waitlist
            </Link>
            <Link href="/services" className="btn-secondary btn-shine">
              Membership Plans
            </Link>
          </div>
          <p className="text-sfm-text-muted text-xs mt-3">
            Clinical care begins early 2026. No payment required today.
          </p>
        </div>
      </section>
    </>
  )
}
