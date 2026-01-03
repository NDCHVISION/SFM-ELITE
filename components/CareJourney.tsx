'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function CareJourney() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepsRef.current.indexOf(entry.target as HTMLDivElement)
          setVisibleSteps((prev) => {
            const newSet = new Set(prev)
            newSet.add(index)
            return newSet
          })
        }
      })
    }, { threshold: 0.2 })

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Enroll and Connect',
      description: 'Create your secure Atlas account to begin care. Atlas is our private clinical platform for intake, consent, messaging, scheduling, and visits. Your information stays protected, and your care begins with intention.',
      hasCTA: false,
    },
    {
      number: 2,
      title: 'Tell Us Your Story',
      description: 'Complete a comprehensive intake that captures your history, goals, and concerns. We document your story carefully so your care never resets.',
      hasCTA: false,
    },
    {
      number: 3,
      title: 'Design Your Plan',
      description: 'Your first visit is a 45 to 60 minute conversation focused on your context, your goals, and your care priorities. Together, you and your physician design a personalized plan built around what matters most to you.',
      hasCTA: false,
    },
    {
      number: 4,
      title: 'Grow Together',
      description: 'Stay connected through secure messaging, follow-up visits, and long-term tracking. Your care deepens as your physician knows you, remembers you, and walks with you through each chapter of your health.',
      hasCTA: true,
    },
  ]

  return (
    <section id="care-journey" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-md text-sfm-navy mb-6">
            How Your Care Unfolds
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted max-w-2xl mx-auto text-lg mb-4">
            Every patient&apos;s path begins with connection and unfolds through care that remembers.
          </p>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A simple, private pathway built for continuity, trust, and lasting connection.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                stepsRef.current[index] = el
              }}
              className={`timeline-step group relative transition-all duration-700 ease-out ${
                visibleSteps.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visibleSteps.has(index) ? `${index * 100}ms` : '0ms' }}
            >
              <div className="flex gap-6 md:gap-10">
                {/* Step Number Circle */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sfm-gold to-sfm-gold-light flex items-center justify-center text-white font-display text-xl font-bold shadow-lg group-hover:shadow-gold transition-shadow duration-300">
                    {String(step.number).padStart(2, '0')}
                  </div>
                  {/* Connector line (not on last item) */}
                  {index < steps.length - 1 && (
                    <div
                      className="w-1 bg-gradient-to-b from-sfm-gold to-sfm-azure opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ height: '60px', marginTop: '8px' }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-sfm-gold/30 transition-all duration-500 group-hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-sfm-azure flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl text-sfm-navy group-hover:text-sfm-azure transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted text-base leading-relaxed ml-10">
                    {step.description}
                  </p>
                  {step.hasCTA && (
                    <div className="ml-10 mt-4">
                      <a 
                        href="https://sankofafamilymedicine.atlas.md/hub/login" 
                        className="btn-primary inline-flex items-center"
                      >
                        Become a Patient
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-16 text-center">
          <p className="text-muted text-sm">
            All clinical care and communication take place securely inside Atlas.
          </p>
        </div>
      </div>
    </section>
  )
}
