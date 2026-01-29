import Image from 'next/image'
import Link from 'next/link'
import { MessageSquare, ArrowRight, Heart, Clock, Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Reviews & Testimonials | Sankofa Family Medicine',
  description: 'Patient stories and testimonials from Sankofa Family Medicine. Real experiences with virtual primary care, Dr. Yaw Nkrumah, and our "Medicine That Remembers" approach in Washington State.',
  keywords: ['patient testimonials', 'doctor reviews', 'Sankofa reviews', 'Dr. Nkrumah reviews', 'virtual care testimonials'],
  openGraph: {
    title: 'Patient Reviews & Testimonials | Sankofa Family Medicine',
    description: 'Real stories from patients experiencing Medicine That Remembers™.',
  },
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/sankofa-interior.png"
            alt="Sankofa bird sculpture in a serene, sunlit interior setting"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sfm-navy/90 via-sfm-navy/70 to-sfm-navy/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <Clock className="w-4 h-4 text-sfm-gold" />
            <span className="text-white/80 text-sm font-medium">Coming After Launch</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Patient Stories
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sfm-gold to-transparent mx-auto mb-8" />
          
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Real stories from our patients experiencing Medicine That Remembers™. 
            We will share testimonials once we have had the privilege of serving our founding members.
          </p>
          
          <Link 
            href="/founders-waitlist" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-gold hover:bg-sfm-gold-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Join the Founders Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      
      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl text-sfm-navy text-center mb-4">
            What Our Members Will Experience
          </h2>
          <p className="text-sfm-text-muted text-center mb-12 max-w-2xl mx-auto">
            The care that builds stories worth sharing.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Continuity',
                description: 'One physician who knows your complete history, not fragments scattered across systems.',
              },
              {
                icon: Clock,
                title: 'Unhurried Care',
                description: '45 to 75 minute visits that honor the complexity of your health, not 15 minute transactions.',
              },
              {
                icon: Users,
                title: 'True Partnership',
                description: 'A physician who remembers your last conversation and follows through.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 bg-sfm-cream rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-sfm-gold" />
                </div>
                <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                <p className="text-sfm-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-6 text-sfm-gold" />
          <h2 className="font-display text-2xl text-sfm-navy mb-4">
            Your Story Starts Here
          </h2>
          <p className="text-sfm-text-muted mb-8">
            Join the Founders Waitlist and be among the first to experience Medicine That Remembers™.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/founders-waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-azure hover:bg-sfm-navy text-white font-medium rounded-lg transition-colors"
            >
              Join the Founders Waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              href="/services" 
              className="text-sfm-azure hover:text-sfm-navy font-medium transition-colors"
            >
              View Membership Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
