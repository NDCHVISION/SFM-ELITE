import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Health Insights | Sankofa Family Medicine',
  description: 'Health insights, precision medicine articles, and updates from Sankofa Family Medicine. Expert perspectives on direct primary care, virtual medicine, genetic testing, and preventive health from Dr. Yaw Nkrumah.',
  keywords: [
    'health blog',
    'precision medicine',
    'direct primary care',
    'wellness',
    'virtual care',
    'genetic testing',
    'preventive health',
    'Dr. Yaw Nkrumah',
    'Medicine That Remembers',
  ],
  openGraph: {
    title: 'Blog | Health Insights | Sankofa Family Medicine',
    description: 'Expert perspectives on direct primary care, virtual medicine, genetic testing, and preventive health.',
    url: 'https://sankofafamilymedicine.com/blog',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine Blog Health Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Sankofa Family Medicine',
    description: 'Expert perspectives on direct primary care, virtual medicine, and preventive health.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'ai-content-declaration': 'human-authored',
    'content-type': 'Blog',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: number
  author: string
  date: string
  slug: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Skipping Primary Care Feels Rational (And Why It Quietly Costs People Years)',
    excerpt:
      'Most people avoid primary care because their reasoning makes sense to them. But reactive thinking in a system that punishes delay has hidden costs. Learn why prevention is measured in years, not visits.',
    category: 'Primary Care',
    readTime: 8,
    author: 'Yaw Nkrumah, MD',
    date: '2025-12-01',
    slug: 'why-skipping-primary-care-costs-years',
    image: '/images/blog-primary-care.png',
  },
  {
    id: 2,
    title: 'Why Virtual Care With the Right Physician Is More Personal, Not Less',
    excerpt:
      'There is a common assumption that virtual medicine is impersonal. After years of practicing both in-person and virtual primary care, I have found the opposite is often true. When done correctly, virtual care deepens the relationship.',
    category: 'Virtual Care',
    readTime: 7,
    author: 'Yaw Nkrumah, MD',
    date: '2025-12-08',
    slug: 'virtual-care-more-personal',
    image: '/images/blog-virtual-care.png',
  },
  {
    id: 3,
    title: 'What Genetic Testing Actually Tells You (And What It Does Not)',
    excerpt:
      'Genetic testing is not about predicting the future. It is about adding context to the present. Learn when testing adds value, when it does not, and why precision without continuity is just fragmentation with better marketing.',
    category: 'Genetics',
    readTime: 9,
    author: 'Yaw Nkrumah, MD',
    date: '2025-12-15',
    slug: 'genetic-testing-what-it-tells-you',
    image: '/images/blog-genetic-testing.png',
  },
]

// Filter to only show published posts (date <= today)
function getPublishedPosts(): BlogPost[] {
  const today = new Date()
  today.setHours(23, 59, 59, 999) // End of today
  
  return blogPosts
    .filter(post => new Date(post.date) <= today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function BlogPage() {
  const publishedPosts = getPublishedPosts()
  
  const categoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Genetics': 'bg-blue-100 text-blue-700 border-blue-200',
      'Cardiometabolic Health': 'bg-red-100 text-red-700 border-red-200',
      'Direct Care': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Conditions': 'bg-amber-100 text-amber-700 border-amber-200',
      'Primary Care': 'bg-purple-100 text-purple-700 border-purple-200',
      'Virtual Care': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    }
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-azure/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Knowledge Center
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Health Insights & Updates
            </h1>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Precision medicine articles, wellness strategies, and direct primary care insights from Dr. Yaw Nkrumah and the SFM team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Post */}
          {publishedPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl text-sfm-navy mb-8">Latest Article</h2>
              <div className="grid lg:grid-cols-2 gap-10 items-center bg-sfm-cream rounded-3xl p-8 border border-gray-100">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-6 ${categoryColor(publishedPosts[0].category)}`}>
                    {publishedPosts[0].category}
                  </div>
                  <h3 className="font-display text-3xl text-sfm-navy mb-4 leading-tight">
                    {publishedPosts[0].title}
                  </h3>
                  <p className="text-muted text-lg mb-6 leading-relaxed">
                    {publishedPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{publishedPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(publishedPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{publishedPosts[0].readTime} min read</span>
                    </div>
                  </div>
                  <Link href={`/blog/${publishedPosts[0].slug}`} className="btn-primary">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="hidden lg:block group">
                  <div className="rounded-2xl overflow-hidden shadow-lg image-depth">
                    <Image
                      src={publishedPosts[0].image}
                      alt={publishedPosts[0].title}
                      width={600}
                      height={338}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Posts Grid - only show if more than 1 post */}
          {publishedPosts.length > 1 && (
          <div>
            <h2 className="font-display text-2xl text-sfm-navy mb-8">More Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-sfm-gold/30 transition-all duration-300 group flex flex-col h-full">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 w-fit ${categoryColor(post.category)}`}>
                    {post.category}
                  </div>

                  <h3 className="font-display text-xl text-sfm-navy mb-3 leading-tight group-hover:text-sfm-azure transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="border-t border-gray-100 pt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-gold transition-colors font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-28 bg-gradient-to-r from-sfm-navy to-sfm-azure relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Get Health Insights Delivered
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for precision medicine articles, wellness updates, and exclusive insights from Dr. Nkrumah.
          </p>
          <form 
            action="https://formspree.io/f/xjgbllpe"
            method="POST"
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-sfm-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-sfm-gold text-sfm-navy font-semibold rounded-lg hover:bg-sfm-gold-light transition-colors"
              >
                Subscribe
              </button>
            </div>
            {/* Hidden fields for tracking */}
            <input type="hidden" name="_subject" value="New Newsletter Subscriber" />
            <input type="hidden" name="leadType" value="Newsletter" />
            <input type="hidden" name="sourcePage" value="/blog" />
            {/* Consent checkbox */}
            <div className="flex items-start gap-3 justify-center text-left max-w-sm mx-auto mb-4">
              <input
                type="checkbox"
                id="newsletter-consent"
                name="consent"
                required
                className="mt-1 w-4 h-4 rounded border-white/30 text-sfm-gold focus:ring-sfm-gold/20 cursor-pointer bg-white/10"
              />
              <label htmlFor="newsletter-consent" className="text-xs text-white/60 cursor-pointer leading-relaxed">
                I agree to receive email updates from Sankofa Family Medicine. I can unsubscribe at any time.
              </label>
            </div>
          </form>
          <p className="text-white/50 text-xs">No spam, just quality health content.</p>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted mb-4">Take the next step in your health journey.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://sankofafamilymedicine.atlas.md/hub/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Become a Patient
              <ArrowRight className="w-4 h-4" />
            </a>
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

