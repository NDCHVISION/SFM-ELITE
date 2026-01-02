'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Stethoscope, Users, FileText, Shield, Heart, MapPin, Globe } from 'lucide-react'
import { ATLAS_PORTAL_URL } from './PrimaryCTA'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleDropdownEnter = useCallback((dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(dropdown)
  }, [])

  const handleDropdownLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const navGroups = {
    about: {
      label: 'About',
      items: [
        { href: '/founder', label: 'Meet Our Founder', desc: 'Board Certified Family Physician', icon: Users },
        { href: '/about', label: 'How It Works', desc: 'Our virtual care model', icon: Heart },
        { href: '/faq', label: 'FAQs', desc: 'Common questions answered', icon: FileText },
      ],
    },
    services: {
      label: 'Services',
      items: [
        { href: '/services', label: 'Membership Plans', desc: 'From $149/month', icon: Heart },
        { href: '/services/what-we-cover', label: 'Conditions We Treat', desc: 'Scope of care', icon: Stethoscope },
        { href: '/compare', label: 'Our Standard', desc: 'Philosophy and safeguards', icon: Shield },
      ],
    },
    locations: {
      label: 'Locations',
      items: [
        { href: '/locations/washington', label: 'Washington', desc: 'Now accepting patients', icon: MapPin, status: 'active' },
        { href: '/locations/south-carolina', label: 'South Carolina', desc: 'Coming 2026', icon: MapPin, status: 'coming-soon' },
        { href: '/locations/request', label: 'Request a Location', desc: 'Bring us to your area', icon: Globe },
      ],
    },
  }

  // Streamlined mobile nav - reduced to essential items
  const mobileNav = [
    { href: '/', label: 'Home' },
    { href: '/founder', label: 'Meet Our Founder' },
    { href: '/services', label: 'Membership Plans' },
    { href: '/services/what-we-cover', label: 'What We Treat' },
    { href: '/faq', label: 'FAQs' },
    { href: '/locations/washington', label: 'Washington', status: 'active' },
    { href: '/locations/request', label: 'Request a Location' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled 
            ? 'bg-white/98 dark:bg-sfm-bg-primary/98 shadow-lg shadow-sfm-navy/5 dark:shadow-black/20 backdrop-blur-xl' 
            : 'bg-white/95 dark:bg-sfm-bg-primary/95 backdrop-blur-md'}`}
        role="banner"
      >
        {/* Top Bar - Enhanced */}
        <div className="hidden lg:block bg-gradient-to-r from-sfm-navy via-sfm-navy to-sfm-azure/90 text-white">
          <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a 
                href="tel:+14252857390" 
                className="flex items-center gap-2.5 text-sm hover:text-sfm-gold transition-colors duration-300 group"
                aria-label="Call Sankofa Family Medicine at 425-285-7390"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sfm-gold/20 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">+1 (425) 285-7390</span>
              </a>
              <a 
                href="mailto:info@sankofafamilymedicine.com" 
                className="flex items-center gap-2.5 text-sm hover:text-sfm-gold transition-colors duration-300 group"
                aria-label="Email Sankofa Family Medicine"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sfm-gold/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">info@sankofafamilymedicine.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-medium">Virtual Care Available</span>
              </span>
              <span className="text-white/40 mx-1">|</span>
              <span className="text-white/70 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Washington State
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center group" aria-label="Sankofa Family Medicine - Home">
              <Image 
                src="/images/comettrans.png" 
                alt="Sankofa Bird Logo" 
                width={96} 
                height={96}
                priority
                quality={100}
                className="h-11 w-auto sm:h-12 transition-all duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="hidden sm:flex flex-col ml-3.5">
                <span className="font-display text-lg text-sfm-navy dark:text-sfm-text leading-tight tracking-tight group-hover:text-sfm-azure transition-colors duration-300">
                  Sankofa Family Medicine<sup className="text-[10px]">™</sup>
                </span>
                <span className="text-[10px] text-sfm-gold font-semibold tracking-wider uppercase flex items-center gap-1">
                  Medicine That Remembers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {/* Home Link */}
              <Link 
                href="/" 
                className="px-4 py-2.5 text-sfm-navy dark:text-sfm-text hover:text-sfm-azure transition-colors duration-300 text-[15px] font-medium rounded-lg hover:bg-sfm-cream/50 dark:hover:bg-white/5"
              >
                Home
              </Link>

              {Object.entries(navGroups).map(([key, group]) => (
                <div 
                  key={key} 
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(key)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="flex items-center gap-1.5 px-4 py-2.5 text-sfm-navy dark:text-sfm-text hover:text-sfm-azure transition-all duration-300 text-[15px] font-medium rounded-xl hover:bg-gradient-to-r hover:from-sfm-cream/60 hover:to-sfm-cream/30 dark:hover:from-white/10 dark:hover:to-white/5"
                    aria-expanded={activeDropdown === key}
                    aria-haspopup="true"
                  >
                    {group.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === key ? 'rotate-180 text-sfm-gold' : ''}`} />
                  </button>
                  
                  {/* Dropdown - V30 Elite Enhanced */}
                  <div 
                    className={`absolute top-full left-0 pt-3 transition-all duration-300 ${
                      activeDropdown === key 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-3'
                    }`}
                  >
                    <div className="bg-white/95 dark:bg-sfm-surface/95 backdrop-blur-xl rounded-2xl border border-sfm-cream-dark dark:border-sfm-dark-border shadow-2xl shadow-sfm-navy/10 dark:shadow-black/30 p-3 min-w-[300px] ring-1 ring-sfm-navy/5 dark:ring-white/5">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-4 px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-sfm-cream hover:to-sfm-cream/50 dark:hover:from-white/10 dark:hover:to-white/5 transition-all duration-300 group/item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sfm-cream to-white dark:from-sfm-bg-secondary dark:to-sfm-surface flex items-center justify-center flex-shrink-0 group-hover/item:bg-white dark:group-hover/item:bg-sfm-surface-elevated group-hover/item:shadow-lg group-hover/item:shadow-sfm-gold/10 transition-all duration-300 border border-sfm-cream-dark/50 dark:border-sfm-dark-border-light">
                            <item.icon className="w-5 h-5 text-sfm-gold" />
                          </div>
                          <div>
                            <span className="block text-sm font-semibold text-sfm-navy dark:text-sfm-dark-text group-hover/item:text-sfm-azure transition-colors duration-300">
                              {item.label}
                              {'status' in item && item.status === 'active' && (
                                <span className="ml-2 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full">NOW</span>
                              )}
                              {'status' in item && item.status === 'coming-soon' && (
                                <span className="ml-2 px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold rounded-full">2026</span>
                              )}
                            </span>
                            <span className="text-xs text-sfm-text-muted dark:text-sfm-dark-text-muted mt-0.5 block">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link 
                href="/resources" 
                className="px-4 py-2.5 text-sfm-navy dark:text-sfm-text hover:text-sfm-azure transition-colors duration-300 text-[15px] font-medium rounded-lg hover:bg-sfm-cream/50 dark:hover:bg-white/5"
              >
                Resources
              </Link>
              
              <Link 
                href="/contact" 
                className="px-4 py-2.5 text-sfm-navy dark:text-sfm-text hover:text-sfm-azure transition-colors duration-300 text-[15px] font-medium rounded-lg hover:bg-sfm-cream/50 dark:hover:bg-white/5"
              >
                Contact
              </Link>

              {/* Primary CTA - Premium Styling */}
              <a
                href={ATLAS_PORTAL_URL}
                className="ml-3 btn-primary group"
                aria-label="Become a patient at Sankofa Family Medicine"
              >
                <span>Become a Patient</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-3 text-sfm-navy dark:text-sfm-text hover:bg-sfm-cream dark:hover:bg-white/10 rounded-xl transition-all duration-300"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Premium */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-sfm-navy/60 backdrop-blur-md transition-opacity duration-500 
            ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-sfm-bg-primary shadow-2xl 
            transition-transform duration-500 ease-out-expo overflow-y-auto
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-sfm-cream-dark dark:border-sfm-border">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <Image 
                src="/images/comettrans.png" 
                alt="Sankofa Bird Logo" 
                width={80} 
                height={80} 
                quality={100}
                className="h-11 w-auto"
                unoptimized
              />
              <div>
                <span className="font-display text-lg text-sfm-navy dark:text-sfm-text block leading-tight">Sankofa<sup className="text-[8px]">™</sup></span>
                <span className="text-[10px] text-sfm-gold font-semibold uppercase tracking-wide">
                  Medicine That Remembers
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 text-sfm-navy dark:text-sfm-text hover:bg-sfm-cream dark:hover:bg-white/10 rounded-xl transition-all duration-300"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          
          <nav className="p-5" aria-label="Mobile navigation">
            {/* Primary CTA - Top position */}
            <a
              href={ATLAS_PORTAL_URL}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-4 bg-sfm-gold text-sfm-navy font-semibold rounded-xl mb-6 shadow-gold hover:bg-sfm-gold-light transition-all duration-300"
            >
              Become a Patient
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Main Links - Streamlined */}
            <div className="space-y-1 mb-6">
              {mobileNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-sfm-navy dark:text-sfm-text hover:bg-sfm-cream dark:hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                >
                  <span className="flex items-center gap-2.5">
                    {item.label}
                    {'status' in item && item.status === 'active' && (
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full">NOW</span>
                    )}
                  </span>
                  <ArrowRight className="w-4 h-4 text-sfm-text-light" />
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-sfm-cream dark:bg-sfm-surface rounded-xl p-5 space-y-4">
              <a href="tel:+14252857390" className="flex items-center gap-3.5 text-sm text-sfm-navy dark:text-sfm-text hover:text-sfm-azure transition-colors duration-300">
                <span className="w-10 h-10 rounded-xl bg-white dark:bg-sfm-bg-primary flex items-center justify-center shadow-sm">
                  <Phone className="w-4 h-4 text-sfm-gold" />
                </span>
                <span className="font-medium">+1 (425) 285-7390</span>
              </a>
              <a href="mailto:info@sankofafamilymedicine.com" className="flex items-center gap-3.5 text-sm text-sfm-navy dark:text-sfm-text hover:text-sfm-azure transition-colors duration-300">
                <span className="w-10 h-10 rounded-xl bg-white dark:bg-sfm-surface flex items-center justify-center shadow-sm">
                  <Mail className="w-4 h-4 text-sfm-gold" />
                </span>
                <span className="font-medium">info@sankofafamilymedicine.com</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
