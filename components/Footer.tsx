'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Phone, Mail, ArrowRight, MapPin, Clock, Shield, Sparkles } from 'lucide-react'
import { ATLAS_PORTAL_URL } from './PrimaryCTA'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    practice: {
      title: 'Practice',
      links: [
        { label: 'Meet Dr. Nkrumah', href: '/founder' },
        { label: 'Membership Plans', href: '/services' },
        { label: 'What We Treat', href: '/services/what-we-cover' },
        { label: 'FAQs', href: '/faq' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Free Guide', href: '/resources/primary-care-guide' },
        { label: 'Emergency Info', href: '/emergency' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    locations: {
      title: 'Locations',
      links: [
        { label: 'Washington', href: '/locations/washington', badge: 'Active' },
        { label: 'South Carolina', href: '/locations/south-carolina', badge: '2026' },
      ],
    },
  }

  return (
    <footer className="bg-gradient-to-b from-sfm-navy to-sfm-navy-deep relative overflow-hidden" role="contentinfo">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sfm-azure/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sfm-gold/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 pattern-sankofa-subtle opacity-20" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
        
        {/* CTA Banner - V30 Elite Premium */}
        <div className="bg-gradient-to-r from-white/10 via-white/6 to-white/10 backdrop-blur-2xl border border-white/15 rounded-[2rem] p-12 mb-20 relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-sfm-gold/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 rounded-full">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-300 text-sm font-medium">Now Accepting Patients</span>
                </span>
              </div>
              <h3 className="text-white font-display text-2xl lg:text-3xl mb-2">Ready to Begin Your Care?</h3>
              <p className="text-white/50 text-sm max-w-md">Join our practice and experience healthcare built on relationship, continuity, and trust.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={ATLAS_PORTAL_URL}
                className="inline-flex items-center gap-3 px-10 py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-2xl 
                  shadow-gold hover:bg-sfm-gold-light hover:shadow-gold-hover transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="text-lg relative">Become a Patient</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 relative" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl 
                  border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 btn-shine"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Column - V30 Elite */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10 group">
              <div className="flex items-center gap-6">
                <Image 
                  src="/images/SFM_Trans.png" 
                  alt="Sankofa Family Medicine" 
                  width={160}
                  height={160}
                  quality={100}
                  priority
                  className="h-24 lg:h-28 w-auto transition-all duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div>
                  <span className="font-display text-2xl lg:text-3xl text-white leading-none tracking-tight group-hover:text-sfm-gold transition-colors duration-300">
                    Sankofa Family Medicine
                  </span>
                  <span className="flex items-center gap-2 text-sfm-gold text-sm font-semibold tracking-wider uppercase mt-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Medicine That Remembers<sup className="text-[8px]">&#8482;</sup>
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-white/50 text-base leading-relaxed max-w-md mb-10">
              Premium virtual primary care built on memory, dignity, and the physician-patient relationship. 
              Serving Washington State with South Carolina coming 2026.
            </p>

            {/* Contact - Enhanced */}
            <div className="space-y-4 mb-10">
              <a 
                href="tel:+14252857390" 
                className="flex items-center gap-4 text-white/60 hover:text-sfm-gold transition-all duration-300 group"
              >
                <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sfm-gold/10 group-hover:border-sfm-gold/30 transition-all duration-300">
                  <Phone className="w-4.5 h-4.5 text-sfm-gold/80" />
                </span>
                <span className="font-medium">+1 (425) 285-7390</span>
              </a>
              <a 
                href="mailto:info@sankofafamilymedicine.com" 
                className="flex items-center gap-4 text-white/60 hover:text-sfm-gold transition-all duration-300 group"
              >
                <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sfm-gold/10 group-hover:border-sfm-gold/30 transition-all duration-300">
                  <Mail className="w-4.5 h-4.5 text-sfm-gold/80" />
                </span>
                <span className="font-medium">info@sankofafamilymedicine.com</span>
              </a>
            </div>

            {/* Social - Enhanced */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/109183000/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                  hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300"
                aria-label="Follow Sankofa Family Medicine on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yaw-nkrumah-md/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                  hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300"
                aria-label="Connect with Dr. Yaw Nkrumah on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns - Enhanced */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12">
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sfm-gold" />
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-white/55 hover:text-sfm-gold transition-all duration-300 text-sm flex items-center gap-2 group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                          {'badge' in link && link.badge && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              link.badge === 'Active' 
                                ? 'bg-emerald-500/20 text-emerald-400' 
                                : 'bg-amber-500/20 text-amber-400'
                            }`}>
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/8">
              <div className="flex flex-wrap gap-6 text-white/40 text-xs">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-sfm-gold/60" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sfm-gold/60" />
                  <span>Same-Day Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sfm-gold/60" />
                  <span>Washington State Licensed</span>
                </div>
              </div>
            </div>

            {/* Legal Links - Enhanced */}
            <div className="mt-8 pt-6 border-t border-white/8">
              <div className="flex flex-wrap gap-8 text-sm">
                <Link href="/privacy" className="text-white/40 hover:text-white/70 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/40 hover:text-white/70 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-white/40 hover:text-white/70 transition-colors duration-300">
                  Accessibility
                </Link>
                <Link href="/sitemap.xml" className="text-white/40 hover:text-white/70 transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Premium */}
      <div className="relative border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Sankofa Family Medicine. All rights reserved.
            </p>
            <p className="text-white/25 text-xs text-center md:text-right max-w-xl">
              This website is for informational purposes only and does not constitute medical advice. 
              For emergencies, call 911. Medicine That Remembers&#8482; is a trademark of Sankofa Family Medicine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
