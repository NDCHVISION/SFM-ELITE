'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook, Instagram, Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'
import { CookieSettingsButton } from './CookieConsent'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    practice: {
      title: 'Practice',
      links: [
        { label: 'Meet Our Founder', href: '/founder' },
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
        { label: 'Request a Location', href: '/locations/request' },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Column - V30 Elite */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10 group">
              <div className="flex items-center gap-6">
                <Image 
                  src="/images/comettrans.png" 
                  alt="Sankofa Bird Logo" 
                  width={160}
                  height={160}
                  quality={100}
                  priority
                  className="h-24 lg:h-28 w-auto transition-all duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div>
                  <span className="font-display text-2xl lg:text-3xl text-white leading-none tracking-tight group-hover:text-sfm-gold transition-colors duration-300">
                    Sankofa Family Medicine<sup className="text-[14px]">™</sup>
                  </span>
                  <span className="text-sfm-gold text-sm font-semibold tracking-wider uppercase mt-2 block">
                    Medicine That Remembers<sup className="text-[8px]">®</sup>
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-white/50 text-base leading-relaxed max-w-md mb-10">
              Premium virtual primary care built on memory, dignity, and the physician-patient relationship. 
              Serving Washington State. South Carolina coming 2026.
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
              <a
                href="https://www.facebook.com/profile.php?id=61585659638610"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                  hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300"
                aria-label="Follow Sankofa Family Medicine on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/sankofafamilymedicine/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                  hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300"
                aria-label="Follow Sankofa Family Medicine on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@sankofafammed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                  hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300"
                aria-label="Follow Sankofa Family Medicine on TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://x.com/sankofafammed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                  hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300"
                aria-label="Follow Sankofa Family Medicine on X (Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@SankofaFamilyMedicine"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                  hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300"
                aria-label="Follow Sankofa Family Medicine on YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
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
                <CookieSettingsButton />
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
