import Link from 'next/link'
import { Shield, Dna, Lock, Star } from 'lucide-react'

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Shield,
      label: 'HIPAA-Aligned Communication',
      href: '/about',
    },
    {
      icon: Star,
      label: 'Board Certified Family Medicine',
      href: '/founder',
    },
    {
      icon: Lock,
      label: 'Washington State Licensed',
      href: '/about',
    },
    {
      icon: Dna,
      label: 'Secure Atlas Portal',
      href: '/services',
    },
  ]

  return (
    <section className="py-8 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-sankofa-flow-gold pattern-sankofa-animated pattern-subtle" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 text-sfm-navy hover:text-sfm-azure transition-colors duration-300 cursor-pointer hover-arrow-slide"
                aria-label={item.label}
              >
                <div className="w-11 h-11 rounded-xl bg-sfm-cream flex items-center justify-center group-hover:bg-sfm-gold/10 transition-all duration-300 group-hover:scale-105">
                  <Icon
                    className="w-5 h-5 text-sfm-azure group-hover:text-sfm-gold transition-colors duration-300"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm font-medium hidden sm:inline whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
