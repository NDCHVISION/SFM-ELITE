'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
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
      title: 'Intake & Evaluation',
      description: 'We get to know your complete history, goals, and health concerns. This foundation shapes everything we do.',
    },
    {
      number: 2,
      title: 'Personalized Testing',
      description: 'We run comprehensive labs, genetic panels, and specialized tests tailored specifically to you.',
    },
    {
      number: 3,
      title: 'Follow-Up & Plan',
      description: 'We review all results together and build a detailed, actionable plan you understand.',
    },
    {
      number: 4,
      title: 'Ongoing Care & Support',
      description: 'Regular check-ins, goal tracking, and adjustments. We stay with you every step of the way.',
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
          <p className="text-editorial text-sfm-gold mb-4">
            Your Care Journey
          </p>
          <h2 className="text-display-md text-sfm-navy mb-6">
            What Happens After You Join
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A clear, transparent process designed to build confidence and set expectations from day one.
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
                    {step.number}
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6">
            Take the first step.
          </p>
          <a 
            href="https://sankofafamilymedicine.atlas.md/hub/login" 
            className="btn-primary"
          >
            Become a Patient
          </a>
        </div>
      </div>
    </section>
  )
}
