'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Story {
  id: number
  quote: string
  attribution: string
  category: 'testimonial' | 'case-study'
}

export default function MemberStories() {
  const [activeSlide, setActiveSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const stories: Story[] = [
    {
      id: 1,
      quote: 'Before SFM I felt unheard in the healthcare system. Now I feel truly in control of my health. Dr. Nkrumah takes time to understand my concerns and explains everything clearly.',
      attribution: 'J.D.',
      category: 'testimonial',
    },
    {
      id: 2,
      quote: 'We solved my chronic fatigue through complete lab work and genetic testing that revealed crucial insights. The personalized plan changed everything for me.',
      attribution: 'L.M.',
      category: 'case-study',
    },
    {
      id: 3,
      quote: 'Having the same doctor for every visit means no repeating my story. Dr. Nkrumah knows my history and my family. It feels like real continuity of care.',
      attribution: 'M.R.',
      category: 'testimonial',
    },
    {
      id: 4,
      quote: 'The genetic testing and precision medicine approach revealed predispositions I never knew about. Now I can take proactive steps instead of waiting for problems.',
      attribution: 'S.K.',
      category: 'case-study',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const itemWidth = scrollRef.current.children[0]?.clientWidth || 0
      const spacing = 24 // gap-6 = 1.5rem = 24px
      const calculatedIndex = Math.round(scrollPosition / (itemWidth + spacing))
      setActiveSlide(Math.min(calculatedIndex, stories.length - 1))
    }
  }

  useEffect(() => {
    const ref = scrollRef.current
    ref?.addEventListener('scroll', handleScroll)
    return () => ref?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-28 bg-sfm-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">
            Member Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">
            Real Experiences, Real Results
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Hear from members about how personalized, longitudinal care transformed their health.
          </p>
        </div>

        {/* Stories Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scroll-snap-type-x-mandatory -mx-6 px-6 pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] scroll-snap-align-center"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  {/* Quote Mark Icon */}
                  <Quote className="w-8 h-8 text-sfm-gold/40 mb-6" strokeWidth={1.5} aria-hidden="true" />

                  {/* Quote Text */}
                  <p className="text-lg md:text-xl text-sfm-navy leading-relaxed mb-8 flex-grow font-medium">
                    "{story.quote}"
                  </p>

                  {/* Attribution */}
                  <div className="pt-6 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sfm-gold to-sfm-azure flex items-center justify-center text-white text-sm font-bold">
                      {story.attribution.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-sfm-navy">{story.attribution}</p>
                      <p className="text-xs text-muted">
                        {story.category === 'testimonial' ? 'Member Testimonial' : 'Case Study'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-sfm-gold hover:bg-sfm-cream transition-all duration-300 text-sfm-navy hover:text-sfm-gold"
                aria-label="Scroll stories left"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-sfm-gold hover:bg-sfm-cream transition-all duration-300 text-sfm-navy hover:text-sfm-gold"
                aria-label="Scroll stories right"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? 'bg-sfm-gold w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    if (scrollRef.current) {
                      const itemWidth = scrollRef.current.children[0]?.clientWidth || 0
                      const spacing = 24
                      scrollRef.current.scrollTo({
                        left: index * (itemWidth + spacing),
                        behavior: 'smooth',
                      })
                    }
                  }}
                  aria-label={`Go to story ${index + 1}`}
                  aria-current={index === activeSlide ? 'true' : 'false'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
