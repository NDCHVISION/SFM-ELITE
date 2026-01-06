import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Activity, Pill, HelpCircle, Clock, Sparkles } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sankofa Tools - The Continuity Kit | Sankofa Family Medicine',
  description: 'Free patient tools to help you prepare for medical visits, track symptoms, manage medications, and communicate effectively with your healthcare provider.',
  keywords: ['patient tools', 'medical visit preparation', 'symptom tracker', 'medication organizer', 'healthcare communication'],
  openGraph: {
    title: 'Sankofa Tools - The Continuity Kit',
    description: 'Free patient tools to help you prepare for medical visits and communicate effectively with your provider.',
    url: 'https://sankofafamilymedicine.com/resources/tools',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/resources/tools',
  },
}

const tools = [
  {
    id: 'symptom-timeline',
    name: 'Symptom Timeline Builder',
    description: 'Track your symptoms over time to help your provider understand the full picture of your health concerns.',
    icon: Activity,
    href: '/resources/tools/symptom-timeline',
    available: true,
    comingSoon: false,
    image: '/images/Symptom timeline.png'
  },
  {
    id: 'visit-goal',
    name: 'Two-Sentence Visit Goal Generator',
    description: 'Turn scattered thoughts into a clear opening statement for a medical visit.',
    icon: Target,
    href: '/resources/tools/visit-goal-generator',
    available: true,
    comingSoon: false,
    image: '/images/2 sentence visit goal generator.png'
  },
  {
    id: 'bp-checker',
    name: 'Blood Pressure Reality Checker',
    description: 'Learn correct measurement technique and calculate a meaningful home BP average.',
    icon: Activity,
    href: '/resources/tools/bp-checker',
    available: true,
    comingSoon: false,
    image: '/images/Blood Pressure Reality.png'
  },
  {
    id: 'medication',
    name: 'Medication List Organizer',
    description: 'Create a clear, organized medication list to share with providers.',
    icon: Pill,
    href: '/resources/tools/medication-organizer',
    available: true,
    comingSoon: false,
    image: null
  },
  {
    id: 'questions',
    name: 'Pre-Visit Question Planner',
    description: 'Prepare thoughtful questions before a medical appointment.',
    icon: HelpCircle,
    href: '/resources/tools/question-planner',
    available: true,
    comingSoon: false,
    image: null
  }
]

export default function ToolsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Sankofa Tools</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            The Continuity Kit
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-8" />
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Free tools to help you prepare for medical visits, track your health, and communicate effectively with your provider.
          </p>
          <p className="text-white/50 text-sm">
            No login required • No data stored • Educational use only
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-sfm-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className={`group relative bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  !tool.available ? 'pointer-events-none' : ''
                }`}
              >
                {/* Hero Image */}
                {tool.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8">
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    {tool.available ? (
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full">
                        Available Now
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-sfm-navy/10 text-sfm-navy/50 text-xs font-semibold rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    tool.available 
                      ? 'bg-sfm-gold/10 group-hover:bg-sfm-gold/20' 
                      : 'bg-sfm-navy/5'
                  } transition-colors`}>
                    <tool.icon 
                      className={`w-7 h-7 ${
                        tool.available ? 'text-sfm-gold' : 'text-sfm-navy/30'
                      }`} 
                      strokeWidth={1.5} 
                    />
                  </div>

                  {/* Content */}
                  <h3 className={`font-display text-xl mb-3 ${
                    tool.available 
                      ? 'text-sfm-navy group-hover:text-sfm-azure' 
                      : 'text-sfm-navy/50'
                  } transition-colors`}>
                    {tool.name}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    tool.available ? 'text-sfm-navy/70' : 'text-sfm-navy/40'
                  }`}>
                    {tool.description}
                  </p>

                  {tool.available && (
                    <span className="inline-flex items-center gap-2 text-sfm-azure font-medium text-sm group-hover:gap-3 transition-all">
                      Open Tool
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Info Card */}
          <div className="mt-12 bg-white rounded-2xl p-8 border-l-4 border-sfm-gold shadow-soft">
            <h3 className="font-display text-2xl text-sfm-navy mb-4">About These Tools</h3>
            <div className="space-y-3 text-sfm-navy/70">
              <p className="flex items-start gap-3">
                <span className="text-sfm-gold mt-1">✓</span>
                <span>All tools are completely free and require no login or account</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-sfm-gold mt-1">✓</span>
                <span>Your data stays on your device - we don't store or transmit anything you enter</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-sfm-gold mt-1">✓</span>
                <span>Designed for educational purposes only, not medical advice</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-sfm-gold mt-1">✓</span>
                <span>Mobile-friendly with print and PDF export options</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-sankofa-spiral-gold pattern-subtle" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sfm-gold/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Ready for Continuity-Based Care?
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            These tools are just the beginning. Experience what it's like to have a physician who truly knows you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/resources" className="btn-secondary-white">
              Browse All Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
