'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Phone, Mail, MapPin, ArrowRight, ArrowUpRight, Shield, Heart, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: {
      title: 'About',
      links: [
        { label: 'Meet Dr. Nkrumah', href: '/founder' },
        { label: 'How It Works', href: '/about' },
        { label: 'FAQs', href: '/faq' },
        { label: 'Blog', href: '/blog' },
        { label: 'Free Guide', href: '/resources/primary-care-guide' },
      ],
    },
    services: {
      title: 'Services',
      links: [
        { label: 'Our Standard', href: '/compare' },
        { label: 'Conditions We Treat', href: '/services/what-we-cover' },
        { label: 'Membership Plans', href: '/services' },
        { label: 'Sankofa OS', href: '/sankofa-os' },
        { label: 'Resources', href: '/resources' },
        { label: 'Emergency Resources', href: '/emergency' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    locations: {
      title: 'Locations',
      links: [
        { label: 'Washington', href: '/locations/washington', badge: 'Active' },
        { label: 'South Carolina', href: '/locations/south-carolina', badge: '2026' },
        { label: 'Request Your State', href: '/locations/expansion' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'Careers', href: '/careers' },
        { label: 'Patient Forms', href: '/patient-forms' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  }

  const socialLinks = [
    {
      name: 'Dr. Nkrumah on LinkedIn',
      href: 'https://www.linkedin.com/in/yawnkrumahmd/',
      icon: Linkedin,
    },
    {
      name: 'Sankofa Family Medicine on LinkedIn',
      href: 'https://www.linkedin.com/company/109183000/',
      icon: Linkedin,
    },
  ]

  const trustBadges = [
    { icon: Shield, label: 'HIPAA Compliant' },
    { icon: Heart, label: 'Patient-Centered' },
    { icon: Clock, label: '24hr Response' },
  ]

  return (
    <footer className="bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-navy-deep relative overflow-hidden" role="contentinfo">
      {/* Decorative Background - Single Sankofa Bird Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sfm-azure/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sfm-gold/6 rounded-full blur-[100px]" />
        {/* Sankofa Bird Watermark */}
        <div 
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.04]"
          style={{
            backgroundImage: "url('/images/sankofa-bird.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8 group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-sfm-gold/20 rounded-2xl blur-xl group-hover:bg-sfm-gold/40 transition-all duration-500 animate-pulse-slow" />
                  <Image 
                    src="/images/SFM_Trans.png" 
                    alt="Sankofa Family Medicine" 
                    width={180}
                    height={180}
                    quality={100}
                    priority
                    className="relative h-24 lg:h-28 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    style={{ imageRendering: 'crisp-edges' }}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl lg:text-3xl text-white leading-none tracking-tight group-hover:text-sfm-gold transition-colors duration-300">
                    Sankofa Family Medicine
                  </span>
                  <span className="text-sfm-gold text-sm font-medium tracking-widest uppercase mt-1.5">
                    Medicine That Remembers<span className="tm">&#8482;</span>
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-8">
              Premium virtual primary care built on memory, dignity, and the physician-patient relationship. 
              HIPAA-compliant telehealth serving patients throughout Washington State.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
                >
                  <badge.icon className="w-4 h-4 text-sfm-gold" />
                  <span className="text-white/70 text-xs font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+14252857390" 
                className="flex items-center gap-4 text-white/70 hover:text-sfm-gold transition-colors duration-300 group"
              >
                <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-sfm-gold/10 transition-colors">
                  <Phone className="w-4 h-4 text-sfm-gold" />
                </span>
                <span className="text-sm font-medium">+1 (425) 285-7390</span>
              </a>
              <a 
                href="mailto:info@sankofafamilymedicine.com" 
                className="flex items-center gap-4 text-white/70 hover:text-sfm-gold transition-colors duration-300 group"
              >
                <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-sfm-gold/10 transition-colors">
                  <Mail className="w-4 h-4 text-sfm-gold" />
                </span>
                <span className="text-sm font-medium">info@sankofafamilymedicine.com</span>
              </a>
              <div className="flex items-center gap-4 text-white/50">
                <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-sfm-gold/60" />
                </span>
                <span className="text-sm">Serving Washington State (Virtual)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 
                    hover:bg-sfm-gold hover:border-sfm-gold hover:text-sfm-navy transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8">
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-sfm-gold" />
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-white/60 hover:text-sfm-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                        >
                          <span>{link.label}</span>
                          {'badge' in link && link.badge && (
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              link.badge === 'Active' 
                                ? 'bg-emerald-500/20 text-emerald-400' 
                                : 'bg-amber-500/20 text-amber-400'
                            }`}>
                              {link.badge}
                            </span>
                          )}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 group">
              <Image 
                src="/images/SFM_Trans.png" 
                alt="Sankofa" 
                width={64}
                height={64}
                quality={100}
                className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                style={{ imageRendering: 'crisp-edges' }}
                unoptimized
              />
              <p className="text-white/50 text-sm font-medium">
                &copy; {currentYear} Sankofa Family Medicine. All rights reserved.
              </p>
            </div>
            <p className="text-white/30 text-xs text-center md:text-right max-w-xl leading-relaxed">
              This website is for informational purposes only and does not constitute medical advice. 
              Always consult a qualified healthcare provider for diagnosis and treatment. 
              For emergencies, call 911.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
