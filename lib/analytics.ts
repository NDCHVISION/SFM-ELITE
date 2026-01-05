// ============================================
// GA4 Event Tracking Utility
// Sankofa Family Medicine
// Enhanced for conversion optimization
// ============================================

type EventCategory = 
  | 'engagement'
  | 'conversion'
  | 'navigation'
  | 'form'
  | 'content'
  | 'ecommerce'
  | 'user_journey'

interface TrackEventParams {
  action: string
  category: EventCategory
  label?: string
  value?: number
  custom_params?: Record<string, any>
}

// Core tracking function with enhanced parameters
export function trackEvent({ action, category, label, value, custom_params }: TrackEventParams) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...custom_params
    })
  }
}

// GA4 Ecommerce-style item for membership tiers
interface MembershipItem {
  item_id: string
  item_name: string
  item_category: string
  price: number
  quantity: number
}

const membershipTiers: Record<string, MembershipItem> = {
  continuity: {
    item_id: 'tier_1_continuity',
    item_name: 'Continuity Concierge',
    item_category: 'membership',
    price: 195,
    quantity: 1
  },
  precision: {
    item_id: 'tier_2_precision',
    item_name: 'Precision Concierge',
    item_category: 'membership',
    price: 295,
    quantity: 1
  },
  executive: {
    item_id: 'tier_3_executive',
    item_name: 'Executive Concierge',
    item_category: 'membership',
    price: 549,
    quantity: 1
  },
  founding: {
    item_id: 'founding_member',
    item_name: 'Founding Member',
    item_category: 'membership',
    price: 295,
    quantity: 1
  }
}

// Pre-defined event helpers
export const analytics = {
  // ============================================
  // CONVERSION EVENTS (High Priority)
  // ============================================
  
  ctaClick: (location: string, destination?: string) => trackEvent({
    action: 'cta_click',
    category: 'conversion',
    label: location,
    custom_params: { destination }
  }),

  formStart: (formName: string) => trackEvent({
    action: 'form_start',
    category: 'form',
    label: formName
  }),

  formSubmit: (formName: string, success: boolean = true) => trackEvent({
    action: success ? 'form_submit' : 'form_error',
    category: 'conversion',
    label: formName,
    custom_params: { success }
  }),

  leadCapture: (source: string, tierInterest?: string) => trackEvent({
    action: 'generate_lead',
    category: 'conversion',
    label: source,
    custom_params: { 
      tier_interest: tierInterest,
      currency: 'USD'
    }
  }),

  waitlistJoin: (source: string) => trackEvent({
    action: 'waitlist_join',
    category: 'conversion',
    label: source,
    value: 1
  }),

  // ============================================
  // ECOMMERCE-STYLE EVENTS (GA4 Standard)
  // ============================================

  viewItem: (tierId: string) => {
    const tier = membershipTiers[tierId]
    if (tier && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_item', {
        currency: 'USD',
        value: tier.price,
        items: [tier]
      })
    }
  },

  selectItem: (tierId: string) => {
    const tier = membershipTiers[tierId]
    if (tier && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'select_item', {
        item_list_name: 'membership_plans',
        items: [tier]
      })
    }
  },

  beginCheckout: (tierId: string) => {
    const tier = membershipTiers[tierId]
    if (tier && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: 'USD',
        value: tier.price,
        items: [tier]
      })
    }
  },

  // ============================================
  // USER JOURNEY EVENTS
  // ============================================

  pageView: (pagePath: string, pageTitle: string) => trackEvent({
    action: 'page_view',
    category: 'user_journey',
    label: pagePath,
    custom_params: { page_title: pageTitle }
  }),

  sessionStart: () => trackEvent({
    action: 'session_start',
    category: 'user_journey'
  }),

  firstVisit: () => trackEvent({
    action: 'first_visit',
    category: 'user_journey'
  }),

  returnVisit: () => trackEvent({
    action: 'return_visit',
    category: 'user_journey'
  }),

  exitIntent: (triggered: boolean, converted: boolean) => trackEvent({
    action: 'exit_intent',
    category: 'user_journey',
    custom_params: { 
      popup_shown: triggered,
      converted: converted
    }
  }),

  // ============================================
  // ENGAGEMENT EVENTS
  // ============================================

  scrollDepth: (percentage: number) => trackEvent({
    action: 'scroll',
    category: 'engagement',
    value: percentage,
    custom_params: { percent_scrolled: percentage }
  }),

  timeOnPage: (seconds: number, pagePath: string) => trackEvent({
    action: 'user_engagement',
    category: 'engagement',
    value: seconds,
    custom_params: { 
      engagement_time_msec: seconds * 1000,
      page_path: pagePath
    }
  }),

  videoPlay: (videoName: string, duration?: number) => trackEvent({
    action: 'video_start',
    category: 'content',
    label: videoName,
    custom_params: { video_duration: duration }
  }),

  videoComplete: (videoName: string) => trackEvent({
    action: 'video_complete',
    category: 'content',
    label: videoName
  }),

  // ============================================
  // NAVIGATION EVENTS
  // ============================================

  externalLink: (url: string, linkText?: string) => trackEvent({
    action: 'click',
    category: 'navigation',
    label: url,
    custom_params: { 
      link_url: url,
      link_text: linkText,
      outbound: true
    }
  }),

  phoneClick: (location: string) => trackEvent({
    action: 'click',
    category: 'conversion',
    label: 'phone_call',
    custom_params: { click_location: location }
  }),

  emailClick: (location: string) => trackEvent({
    action: 'click',
    category: 'conversion',
    label: 'email',
    custom_params: { click_location: location }
  }),

  navMenuOpen: (menuName: string) => trackEvent({
    action: 'menu_open',
    category: 'navigation',
    label: menuName
  }),

  // ============================================
  // CONTENT EVENTS
  // ============================================

  blogRead: (articleSlug: string, readTime?: number) => trackEvent({
    action: 'blog_read',
    category: 'content',
    label: articleSlug,
    custom_params: { estimated_read_time: readTime }
  }),

  blogComplete: (articleSlug: string) => trackEvent({
    action: 'blog_complete',
    category: 'content',
    label: articleSlug
  }),

  downloadGuide: (guideName: string) => trackEvent({
    action: 'file_download',
    category: 'conversion',
    label: guideName,
    custom_params: { file_name: guideName }
  }),

  faqExpand: (question: string, position: number) => trackEvent({
    action: 'faq_expand',
    category: 'engagement',
    label: question,
    custom_params: { faq_position: position }
  }),

  tierSelect: (tierName: string) => {
    trackEvent({
      action: 'tier_select',
      category: 'engagement',
      label: tierName
    })
    // Also fire ecommerce event
    analytics.selectItem(tierName.toLowerCase())
  },

  tierCompare: () => trackEvent({
    action: 'tier_compare',
    category: 'engagement',
    label: 'pricing_table'
  }),

  locationView: (state: string, city?: string) => trackEvent({
    action: 'location_view',
    category: 'navigation',
    label: city ? `${state}/${city}` : state,
    custom_params: { state, city }
  }),

  // ============================================
  // SEARCH & DISCOVERY EVENTS
  // ============================================

  siteSearch: (query: string, resultsCount?: number) => trackEvent({
    action: 'search',
    category: 'engagement',
    label: query,
    custom_params: { 
      search_term: query,
      results_count: resultsCount
    }
  }),

  conditionSearch: (condition: string) => trackEvent({
    action: 'condition_lookup',
    category: 'engagement',
    label: condition
  }),

  // ============================================
  // ERROR TRACKING
  // ============================================

  formError: (formName: string, errorType: string) => trackEvent({
    action: 'form_error',
    category: 'form',
    label: formName,
    custom_params: { error_type: errorType }
  }),

  pageError: (errorCode: number, pagePath: string) => trackEvent({
    action: 'page_error',
    category: 'navigation',
    label: pagePath,
    custom_params: { error_code: errorCode }
  }),
}

// ============================================
// SCROLL DEPTH TRACKING HOOK
// ============================================
export function useScrollTracking() {
  if (typeof window === 'undefined') return

  let tracked25 = false
  let tracked50 = false
  let tracked75 = false
  let tracked100 = false

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    )

    if (scrollPercent >= 25 && !tracked25) {
      tracked25 = true
      analytics.scrollDepth(25)
    }
    if (scrollPercent >= 50 && !tracked50) {
      tracked50 = true
      analytics.scrollDepth(50)
    }
    if (scrollPercent >= 75 && !tracked75) {
      tracked75 = true
      analytics.scrollDepth(75)
    }
    if (scrollPercent >= 100 && !tracked100) {
      tracked100 = true
      analytics.scrollDepth(100)
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}

// ============================================
// TIME ON PAGE TRACKING
// ============================================
export function useTimeTracking(pagePath: string) {
  if (typeof window === 'undefined') return

  const startTime = Date.now()
  let tracked30 = false
  let tracked60 = false
  let tracked180 = false

  const checkTime = () => {
    const seconds = Math.floor((Date.now() - startTime) / 1000)
    
    if (seconds >= 30 && !tracked30) {
      tracked30 = true
      analytics.timeOnPage(30, pagePath)
    }
    if (seconds >= 60 && !tracked60) {
      tracked60 = true
      analytics.timeOnPage(60, pagePath)
    }
    if (seconds >= 180 && !tracked180) {
      tracked180 = true
      analytics.timeOnPage(180, pagePath)
    }
  }

  const interval = setInterval(checkTime, 10000) // Check every 10 seconds
  
  return () => clearInterval(interval)
}

// ============================================
// CONVERSION TRACKING UTILITIES
// ============================================
export const conversionGoals = {
  // Track high-value conversions
  trackWaitlistSignup: (source: string, tierInterest?: string) => {
    analytics.waitlistJoin(source)
    analytics.leadCapture(source, tierInterest)
    if (tierInterest) {
      analytics.beginCheckout(tierInterest)
    }
  },

  // Track contact form completion
  trackContactSubmit: (formData: { interest?: string }) => {
    analytics.formSubmit('contact_form', true)
    if (formData.interest) {
      analytics.leadCapture('contact_form', formData.interest)
    }
  },

  // Track guide download as micro-conversion
  trackGuideDownload: (guideName: string, email: string) => {
    analytics.downloadGuide(guideName)
    analytics.leadCapture('guide_download')
  }
}
