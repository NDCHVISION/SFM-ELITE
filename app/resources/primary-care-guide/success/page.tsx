import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Download, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Your Guide Is Ready | Sankofa Family Medicine',
  description: 'Download your free guide to understanding what good primary care really looks like.',
  robots: 'noindex, nofollow',
}

export default function GuideSuccessPage() {
  return (
    <>
      {/* Success State */}
      <section className="min-h-screen pt-40 pb-20 bg-gradient-to-b from-sfm-navy via-sfm-navy to-[#030d1a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-sfm-azure/5 rounded-full blur-3xl" />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 group">
            <div className="relative">
              <div className="absolute -inset-4 bg-sfm-gold/10 rounded-full blur-xl animate-pulse-slow" />
              <Image
                src="/images/SFM_Trans.png"
                alt="Sankofa Family Medicine"
                width={160}
                height={100}
                className="h-auto w-auto max-h-20 opacity-90 relative transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          </div>

          <div className="w-20 h-20 rounded-full bg-sfm-gold/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-sfm-gold" strokeWidth={1.5} />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-white mb-6">
            Your Guide Is Ready
          </h1>
          
          <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
Check your email for your guide, or download it now below.          </p>

          {/* Download Button */}
          <div className="mb-12">
            <a 
              href="/guides/primary-care-guide.pdf"
              download="How-Healthy-Is-Your-Relationship-With-Your-Primary-Care-Doctor-SFM.pdf"
              className="inline-flex items-center gap-3 bg-sfm-gold hover:bg-sfm-gold/90 text-sfm-navy font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <Download className="w-5 h-5" strokeWidth={2} />
              Download Your Guide (PDF)
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 text-left">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-sfm-gold" strokeWidth={1.5} />
              <p className="text-white font-medium">Inside the guide:</p>
            </div>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-sfm-gold">01</span>
                <span>A real patient case showing why normal labs can miss real problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sfm-gold">02</span>
                <span>The research behind continuity and better health outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sfm-gold">03</span>
                <span>A self-assessment to identify your current care relationship type</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sfm-gold">04</span>
                <span>Practical steps whether you stay or seek something different</span>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-secondary-white">
              Learn About Our Approach
            </Link>
          </div>

          {/* Subtle reminder */}
          <p className="text-white/30 text-xs mt-16">
            Sankofa Family Medicine • Virtual-first primary care for adults in Washington State
          </p>
        </div>
      </section>
    </>
  )
}
