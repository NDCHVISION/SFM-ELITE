'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Stethoscope, Users, FileText, Shield, Heart, Sparkles, MapPin, Globe } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
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
    }, 200)
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
        { href: '/founder', label: 'Meet Dr. Nkrumah', desc: 'Board Certified Family Physician', icon: Users },
        { href: '/about', label: 'How It Works', desc: 'Our virtual care model', icon: Sparkles },
        { href: '/faq', label: 'FAQs', desc: 'Common questions answered', icon: FileText },
      ],
    },
    services: {
      label: 'Services',
      items: [
        { href: '/compare', label: 'Our Standard', desc: 'Philosophy and safeguards', icon: Shield },
        { href: '/services/what-we-cover', label: 'Conditions We Treat', desc: 'Scope of care', icon: Stethoscope },
        { href: '/services', label: 'Membership Plans', desc: 'Pricing and tiers', icon: Heart },
        { href: '/sankofa-os', label: 'Sankofa OS', desc: 'Our clinical platform', icon: Sparkles },
        { href: '/resources/primary-care-guide', label: 'Free Guide', desc: 'Is DPC right for you?', icon: FileText },
      ],
    },
    locations: {
      label: 'Locations',
      items: [
        { href: '/locations/washington', label: 'Washington', desc: 'Now accepting patients', icon: MapPin, status: 'active' },
        { href: '/locations/south-carolina', label: 'South Carolina', desc: 'Coming 2026', icon: MapPin, status: 'coming-soon' },
        { href: '/locations/expansion', label: 'Request Your State', desc: 'Help us expand nationwide', icon: Globe, status: 'interest' },
      ],
    },
  }

  const mobileNav = [
    { href: '/', label: 'Home' },
    { href: '/founder', label: 'Meet Dr. Nkrumah' },
    { href: '/about', label: 'How It Works' },
    { href: '/faq', label: 'FAQs' },
    { href: '/compare', label: 'Our Standard' },
    { href: '/services/what-we-cover', label: 'Conditions We Treat' },
    { href: '/services', label: 'Membership Plans' },
    { href: '/resources/primary-care-guide', label: 'Free Guide' },
    { href: '/locations/washington', label: 'Washington', status: 'active' },
    { href: '/locations/south-carolina', label: 'South Carolina', status: 'coming-soon' },
    { href: '/locations/expansion', label: 'Request Your State' },
    { href: '/blog', label: 'Blog' },
  ]

  const mobileSecondary = [
    { href: '/emergency', label: 'Emergency Resources', highlight: true },
    { href: '/patient-forms', label: 'Patient Forms' },
    { href: '/careers', label: 'Careers' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled 
            ? 'bg-white/[0.98] shadow-[0_1px_0_rgba(188,152,51,0.1),0_4px_20px_rgba(5,28,59,0.06)] backdrop-blur-xl' 
            : 'bg-white/95 backdrop-blur-md'}`}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-gradient-to-r from-sfm-navy via-sfm-navy to-sfm-azure/90 text-white">
          <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a 
                href="tel:+14252857390" 
                className="flex items-center gap-2 text-sm hover:text-sfm-gold transition-colors duration-300 group"
              >
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sfm-gold/20 transition-colors">
                  <Phone className="w-3 h-3" />
                </span>
                <span className="font-medium">+1 (425) 285-7390</span>
              </a>
              <a 
                href="mailto:info@sankofafamilymedicine.com" 
                className="flex items-center gap-2 text-sm hover:text-sfm-gold transition-colors duration-300 group"
              >
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sfm-gold/20 transition-colors">
                  <Mail className="w-3 h-3" />
                </span>
                <span className="font-medium">info@sankofafamilymedicine.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-white/70">Serving Washington State</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-medium">Virtual Care Available</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center group relative">
              <div className="relative flex items-center gap-3">
                <div className="relative overflow-hidden">
                  <Image 
                    src="/images/SFM_Trans.png" 
                    alt="Sankofa Family Medicine" 
                    width={96} 
                    height={96}
                    priority
                    quality={100}
                    className="h-10 w-auto sm:h-12 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    style={{ imageRendering: 'crisp-edges' }}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg sm:text-xl lg:text-2xl text-sfm-navy leading-tight group-hover:text-sfm-azure transition-colors duration-300">
                    Sankofa Family Medicine
                  </span>
                  <span className="text-[10px] sm:text-xs text-sfm-gold font-medium tracking-wider uppercase">
                    Medicine That Remembers<span className="tm">&#8482;</span>
                  </span>
                </div>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sfm-gold to-sfm-azure group-hover:w-full transition-all duration-500" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation" ref={dropdownRef}>
              <Link
                href="/"
                className="nav-link"
                aria-current={typeof window !== 'undefined' && window.location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('about')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  aria-haspopup="menu"
                  aria-expanded={activeDropdown === 'about'}
                  className="nav-link flex items-center gap-1"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300
                    ${activeDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  role="menu"
                  onMouseEnter={() => handleDropdownEnter('about')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-sfm-navy/10 border border-gray-100 overflow-hidden w-80">
                    <div className="p-2">
                      {navGroups.about.items.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-sfm-cream transition-all duration-300 group"
                          >
                            <span className="w-10 h-10 rounded-xl bg-sfm-azure/10 flex items-center justify-center text-sfm-azure group-hover:bg-sfm-gold group-hover:text-sfm-navy transition-all duration-300">
                              <IconComponent className="w-5 h-5" />
                            </span>
                            <div>
                              <span className="block text-sm font-semibold text-sfm-navy group-hover:text-sfm-azure transition-colors">
                                {item.label}
                              </span>
                              <span className="text-xs text-gray-500 mt-0.5 block">{item.desc}</span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="bg-sfm-cream/50 px-6 py-4 border-t border-gray-100">
                      <Link
                        href="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between text-sm font-semibold text-sfm-azure hover:text-sfm-navy transition-colors group"
                      >
                        <span>Have questions? Contact us</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  aria-haspopup="menu"
                  aria-expanded={activeDropdown === 'services'}
                  className="nav-link flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300
                    ${activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  role="menu"
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-sfm-navy/10 border border-gray-100 overflow-hidden w-80">
                    <div className="p-2">
                      {navGroups.services.items.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-sfm-cream transition-all duration-300 group"
                          >
                            <span className="w-10 h-10 rounded-xl bg-sfm-azure/10 flex items-center justify-center text-sfm-azure group-hover:bg-sfm-gold group-hover:text-sfm-navy transition-all duration-300">
                              <IconComponent className="w-5 h-5" />
                            </span>
                            <div>
                              <span className="block text-sm font-semibold text-sfm-navy group-hover:text-sfm-azure transition-colors">
                                {item.label}
                              </span>
                              <span className="text-xs text-gray-500 mt-0.5 block">{item.desc}</span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="bg-gradient-to-r from-sfm-gold/10 to-sfm-gold/5 px-6 py-4 border-t border-sfm-gold/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-sfm-gold font-semibold uppercase tracking-wide">Founding Member</p>
                          <p className="text-xs text-gray-600 mt-0.5">Legacy Health benefits at Precision Care pricing</p>
                        </div>
                        <Link
                          href="/contact"
                          onClick={() => setActiveDropdown(null)}
                          className="px-4 py-2 bg-sfm-gold text-sfm-navy text-xs font-bold rounded-lg hover:bg-sfm-gold-light transition-colors"
                        >
                          Join Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('locations')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'locations' ? null : 'locations')}
                  aria-haspopup="menu"
                  aria-expanded={activeDropdown === 'locations'}
                  className="nav-link flex items-center gap-1"
                >
                  Locations
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300
                    ${activeDropdown === 'locations' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  role="menu"
                  onMouseEnter={() => handleDropdownEnter('locations')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-sfm-navy/10 border border-gray-100 overflow-hidden w-80">
                    <div className="p-2">
                      {navGroups.locations.items.map((item) => {
                        const IconComponent = item.icon
                        const statusColors = {
                          active: 'bg-emerald-400',
                          'coming-soon': 'bg-amber-400',
                          interest: 'bg-sfm-azure',
                        }
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-sfm-cream transition-all duration-300 group"
                          >
                            <span className="w-10 h-10 rounded-xl bg-sfm-azure/10 flex items-center justify-center text-sfm-azure group-hover:bg-sfm-gold group-hover:text-sfm-navy transition-all duration-300 relative">
                              <IconComponent className="w-5 h-5" />
                              {'status' in item && item.status !== 'interest' && (
                                <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${statusColors[item.status as keyof typeof statusColors]} border-2 border-white`} />
                              )}
                            </span>
                            <div>
                              <span className="block text-sm font-semibold text-sfm-navy group-hover:text-sfm-azure transition-colors">
                                {item.label}
                              </span>
                              <span className="text-xs text-gray-500 mt-0.5 block">{item.desc}</span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="bg-sfm-cream/50 px-6 py-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-gray-600">Active</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="text-gray-600">Coming Soon</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/blog" className="nav-link">
                Blog
              </Link>

              <Link href="/contact" className="nav-link">
                Contact
              </Link>

              {/* Primary CTA */}
              <a
                href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sfm-gold via-sfm-gold-light to-sfm-gold bg-[length:200%_100%] 
                  text-sfm-navy text-sm font-bold rounded-xl shadow-lg shadow-sfm-gold/25
                  hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-sfm-gold/40 hover:scale-[1.02]
                  active:scale-[0.98] transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10">Book a 15-Minute Fit Call</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-3 text-sfm-navy hover:bg-sfm-cream rounded-xl transition-colors"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-visibility ${isOpen ? 'visible' : 'invisible'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-sfm-navy/60 backdrop-blur-sm transition-opacity duration-300 
            ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl 
            transition-transform duration-300 ease-out overflow-y-auto
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-sfm-cream/30">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
              <Image 
                src="/images/SFM_Trans.png" 
                alt="SFM" 
                width={88} 
                height={88} 
                quality={100}
                className="h-11 w-auto transition-all duration-500 group-hover:scale-105"
                unoptimized
              />
              <div>
                <span className="font-display text-lg text-sfm-navy block leading-tight group-hover:text-sfm-azure transition-colors">Sankofa</span>
                <span className="text-xs text-sfm-gold font-medium">Medicine That Remembers</span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 text-sfm-navy hover:bg-white rounded-xl transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          <nav className="p-6" aria-label="Mobile navigation">
            {/* Primary CTA */}
            <a
              href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-sfm-gold to-sfm-gold-light 
                text-sfm-navy font-bold rounded-xl shadow-lg shadow-sfm-gold/25 mb-8 group"
            >
              Book a 15-Minute Fit Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Main Links */}
            <div className="space-y-1 mb-8">
              {mobileNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-sfm-navy hover:bg-sfm-cream hover:text-sfm-azure rounded-xl transition-all duration-300 font-medium group"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sfm-azure group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            {/* Secondary Links */}
            <div className="border-t border-gray-100 pt-6 mb-8">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sfm-navy hover:bg-sfm-cream rounded-xl transition-colors"
                aria-expanded={moreOpen}
              >
                <span className="font-medium text-sm text-gray-500">More</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${moreOpen ? 'max-h-60 mt-2' : 'max-h-0'}`}>
                {mobileSecondary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 ml-4 text-sm rounded-lg transition-colors ${
                      'highlight' in item && item.highlight
                        ? 'text-rose-600 font-semibold hover:text-rose-700 hover:bg-rose-50 flex items-center gap-2'
                        : 'text-gray-600 hover:text-sfm-azure hover:bg-sfm-cream/50'
                    }`}
                  >
                    {'highlight' in item && item.highlight && (
                      <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                    )}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-sfm-cream/50 rounded-2xl p-6 space-y-4">
              <p className="text-xs font-semibold text-sfm-azure uppercase tracking-wider mb-4">Contact Us</p>
              <a href="tel:+14252857390" className="flex items-center gap-3 text-sm text-sfm-navy hover:text-sfm-azure transition-colors group">
                <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Phone className="w-4 h-4 text-sfm-gold" />
                </span>
                <span className="font-medium">+1 (425) 285-7390</span>
              </a>
              <a href="mailto:info@sankofafamilymedicine.com" className="flex items-center gap-3 text-sm text-sfm-navy hover:text-sfm-azure transition-colors group">
                <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Mail className="w-4 h-4 text-sfm-gold" />
                </span>
                <span className="font-medium">info@sankofafamilymedicine.com</span>
              </a>
              <p className="text-xs text-gray-500 pt-2 border-t border-gray-200 mt-4">
                Serving Washington State via Virtual Care
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
