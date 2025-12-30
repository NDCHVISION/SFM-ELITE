import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Phone, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sfm-cream via-white to-sfm-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 pattern-sankofa-spiral pattern-subtle" />
      
      <div className="relative max-w-2xl mx-auto px-6 text-center py-20">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/SFM_Trans.png"
            alt="Sankofa Family Medicine"
            width={80}
            height={80}
            className="mx-auto opacity-30"
          />
        </div>
        
        {/* 404 Display */}
        <div className="mb-8">
          <span className="font-display text-[10rem] md:text-[12rem] leading-none text-sfm-navy/10 select-none">
            404
          </span>
        </div>
        
        <h1 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4 -mt-16">
          Page Not Found
        </h1>
        
        <p className="text-sfm-text-muted text-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. 
          Let us help you find your way back.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            <Phone className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
        
        {/* Emergency Notice */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-10 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-rose-700">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Medical Emergency?</span>
          </div>
          <p className="text-rose-600 text-sm mt-1">
            Call 911 or visit our{' '}
            <Link href="/emergency" className="underline font-medium hover:text-rose-800">
              Emergency Resources
            </Link>
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-10">
          <p className="text-sm text-sfm-text-muted mb-6">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { href: '/services', label: 'Membership Plans' },
              { href: '/about', label: 'How It Works' },
              { href: '/founder', label: 'Meet Dr. Nkrumah' },
              { href: '/faq', label: 'FAQs' },
              { href: '/locations/washington', label: 'Washington' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 px-4 py-2 text-sm text-sfm-azure hover:text-sfm-navy hover:bg-sfm-cream rounded-lg transition-colors"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
