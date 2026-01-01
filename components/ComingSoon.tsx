import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

interface ComingSoonProps {
  title: string
  description: string
  icon: React.ReactNode
  expectedDate?: string
}

export default function ComingSoon({ title, description, icon, expectedDate }: ComingSoonProps) {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy">
        {/* Background Elements */}
        <div className="absolute inset-0 pattern-sankofa-spiral-gold pattern-sankofa-animated pattern-subtle" aria-hidden="true" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sfm-gold/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sfm-gold/30 to-sfm-azure/20 rounded-3xl blur-xl opacity-60" />
              <div className="relative p-8 bg-gradient-to-br from-sfm-gold/20 to-sfm-gold/5 backdrop-blur-sm rounded-3xl border border-sfm-gold/20 text-sfm-gold shadow-2xl shadow-sfm-gold/10">
                {icon}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {description}
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-block mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sfm-gold to-amber-500 text-sfm-navy font-semibold text-sm rounded-full shadow-lg shadow-sfm-gold/25">
              <Sparkles className="w-4 h-4" />
              Coming Soon
            </div>
          </div>

          {/* Expected Date */}
          {expectedDate && (
            <p className="text-lg text-sfm-gold/80 mb-12 font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Expected: {expectedDate}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Book a 15-Minute Enrollment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/"
              className="btn-secondary-white"
            >
              Back to Home
            </Link>
          </div>

          {/* Info Box */}
          <div className="p-8 md:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="font-display text-2xl text-white mb-4">In the Meantime</h2>
            <p className="text-white/60 mb-8">
              Explore our current offerings or reach out to learn more about Sankofa Family Medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-sfm-gold text-white hover:text-sfm-navy rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-sfm-gold group"
              >
                View Services 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-sfm-gold text-white hover:text-sfm-navy rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-sfm-gold group"
              >
                About Our Practice 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
