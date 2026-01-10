/**
 * Centralized Configuration
 * Single source of truth for external URLs and constants
 * 
 * IMPORTANT: Update URLs here only. All components should import from this file.
 */

export const EXTERNAL_URLS = {
  // Primary conversion portal - ALL main CTAs should use this
  atlas: 'https://sankofafamilymedicine.atlas.md/hub/login',
  
  // DEPRECATED - Use atlas for all CTAs
  // calendly: 'https://calendly.com/nkrumah-ndchvision/15-minute-fit-call',
  
  // Social media
  linkedin: {
    company: 'https://www.linkedin.com/company/109183000/',
    physician: 'https://www.linkedin.com/in/yawnkrumahmd/'
  },
  
  // Form handling
  formspree: {
    assessment: 'https://formspree.io/f/manrdjgv',
    contact: 'https://formspree.io/f/manrdjgv',
    expansion: 'https://formspree.io/f/manrdjgv'
  }
} as const

export const CONTACT_INFO = {
  phone: '+1 (425) 285-7390',
  phoneHref: 'tel:+14252857390',
  email: 'info@sankofafamilymedicine.com',
  emailHref: 'mailto:info@sankofafamilymedicine.com'
} as const

export const BRAND = {
  name: 'Sankofa Family Medicine',
  tagline: 'Medicine That Remembers',
  trademark: 'Medicine That Remembers™',
  location: 'Washington State',
  foundingMemberSpots: 30
} as const

export const PRICING = {
  tiers: {
    continuity: { monthly: 225, annual: 203 },
    precision: { monthly: 325, annual: 293 },
    legacy: { monthly: 650, annual: 585 }
  }
} as const

export const SITE_URL = 'https://sankofafamilymedicine.com'
