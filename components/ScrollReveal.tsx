'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'fade' | 'left' | 'right' | 'scale'
  delay?: number
  threshold?: number
  once?: boolean
}

/**
 * ScrollReveal Component
 * 
 * Wraps content and reveals it with animation when scrolled into view.
 * Uses Intersection Observer for performance.
 * 
 * @param variant - Animation type: 'default' (up), 'fade', 'left', 'right', 'scale'
 * @param delay - Delay in ms before animation starts
 * @param threshold - How much of element must be visible (0-1)
 * @param once - If true, only animate once (default: true)
 */
export default function ScrollReveal({
  children,
  className = '',
  variant = 'default',
  delay = 0,
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      element.classList.add('revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add('revealed')
              }, delay)
            } else {
              entry.target.classList.add('revealed')
            }

            // Unobserve if once is true
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            entry.target.classList.remove('revealed')
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is in view
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, threshold, once])

  // Map variant to CSS class
  const variantClass = {
    default: 'reveal',
    fade: 'reveal-fade',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[variant]

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/**
 * ScrollRevealGroup Component
 * 
 * Wraps multiple elements that should reveal with staggered timing.
 * Each direct child with .reveal class will animate in sequence.
 */
interface ScrollRevealGroupProps {
  children: ReactNode
  className?: string
  threshold?: number
}

export function ScrollRevealGroup({
  children,
  className = '',
  threshold = 0.1,
}: ScrollRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      container.querySelectorAll('.reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale')
        .forEach(el => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal all children with stagger
            const revealElements = entry.target.querySelectorAll(
              '.reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale'
            )
            revealElements.forEach((el) => {
              el.classList.add('revealed')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    observer.observe(container)

    return () => {
      observer.unobserve(container)
    }
  }, [threshold])

  return (
    <div ref={ref} className={`reveal-stagger ${className}`}>
      {children}
    </div>
  )
}
