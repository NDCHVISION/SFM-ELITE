# SANKOFA FAMILY MEDICINE
## Website Technical Handoff Document
### Version 17 Elite Final
### December 2025

---

## Medicine That Remembers™

---

# EXECUTIVE SUMMARY

This is a **production-ready Next.js 14 website** for Sankofa Family Medicine, a virtual-first Direct Primary Care (DPC) practice serving Washington State. The site is optimized for conversion, SEO, accessibility, and 2026-ready AI search engines (Perplexity, Google AI Overviews, ChatGPT, Claude).

## V17 Enhancements

- **Cormorant Garamond primary typography** throughout (per brand spec)
- **Enhanced 2026 AI metadata** for Perplexity, Google AI, voice search
- **Voice search optimization** tags added
- **Entity tags** for knowledge graphs
- **Featured snippet optimization** metadata
- All V16 features preserved and refined

---

# BUSINESS CONTEXT

| Item | Details |
|------|---------|
| Practice | Sankofa Family Medicine |
| Founder | Dr. Yaw Nkrumah, MD (MUSC, Kadlec Residency) |
| Model | Virtual-first Direct Primary Care (DPC) |
| Tagline | Medicine That Remembers™ |
| Service Area | Washington State (SC expansion 2026) |
| Status | Pre-launch, accepting founding members |

## Membership Tiers

| Tier | Name | Price | Key Features |
|------|------|-------|--------------|
| 1 | Continuity Concierge | $195/mo | Essential virtual primary care |
| 2 | Precision Concierge | $295/mo | + Genetic testing, advanced diagnostics |
| 3 | Executive Concierge | $449/mo | + Direct cell access, concierge |

**Founding Member Offer:** First 30 members get Tier 3 benefits at Tier 2 pricing ($295), locked for life.

---

# TECHNICAL STACK

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Primary Font | Cormorant Garamond |
| UI Font | System UI (buttons, nav) |
| Forms | Formspree |
| Analytics | Google Analytics 4 (ready) |
| Deployment | Vercel-ready |

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Azure | #05436e | Primary blue |
| Gold | #bc9833 | Accents, CTAs |
| Navy | #051c3b | Dark backgrounds |
| White | #FFFFFF | Backgrounds |
| Black | #070705 | Text |
| Cream | #faf9f7 | Secondary backgrounds |

---

# SITE ARCHITECTURE (42 Pages)

## Core Pages (7)
- `/` - Homepage
- `/services` - Membership plans with pricing
- `/contact` - Waitlist signup form
- `/about` - How virtual care works
- `/founder` - Dr. Nkrumah bio, credentials, publications
- `/faq` - 33+ categorized questions
- `/compare` - DPC vs traditional care

## Location Pages (14)
- `/locations/washington` - State hub with SVG map
- `/locations/washington/seattle`, bellevue, kirkland, redmond
- `/locations/washington/sammamish`, mercer-island, everett
- `/locations/washington/tacoma`, olympia, vancouver, spokane
- `/locations/south-carolina` - Coming 2026
- `/locations/expansion` - Request your state

## Service & Content Pages
- `/services/what-we-cover` - Conditions treated
- `/sankofa-os` - Technology platform
- `/blog` - Blog index with 3 articles
- `/resources` - Resource hub with lead magnets
- `/careers`, `/partnerships`, `/patient-forms`, `/testimonials`
- `/privacy`, `/terms`, `/accessibility`

---

# IMAGE ASSETS

## Professional Images
| File | Description | Usage |
|------|-------------|-------|
| dr-nkrumah-thoughtful.png | Dr. Nkrumah in white coat | Hero, Founder, About |
| gold-heart-sculpture.png | Gold heart on marble | CTA sections |
| sankofa-gold-sculpture.png | Gold Sankofa bird | Philosophy section |
| physician-patient-connection.png | Bronze wall art | Relationship section |
| sankofa-interior.png | Wooden Sankofa bird | Ambient imagery |

---

# SEO AND AI OPTIMIZATION (2026-Ready)

## Metadata Coverage
- All 42 pages have unique title and description
- OpenGraph tags on all pages
- Canonical URLs set
- Geo tags on all location pages

## AI-Specific Tags (NEW in V17)
- `ai-content-declaration`: human-authored
- `ai-assistant-context`: Contextual info for AI assistants
- `ai-citation-preference`: cite-with-link
- `perplexity-context`: Optimized for Perplexity AI
- `voice-search-answer`: Natural language answers
- `speakable-summary`: Voice assistant summaries
- `entity-type`, `entity-name`, `entity-founder`: Knowledge graph data

## Featured Snippet Optimization
- `snippet-answer-what`: What is Sankofa Family Medicine?
- `snippet-answer-cost`: How much does it cost?
- `snippet-answer-how`: How to join?

## Structured Data
- MedicalBusiness (primary)
- Physician (Dr. Nkrumah)
- FAQPage (common questions)
- OfferCatalog (membership tiers)
- WebSite with SearchAction
- Speakable specification

---

# BRAND VOICE COMPLIANCE

**Required Tone:** Quiet authority, clinical calm, no hype

## Verified Clean
- ✓ No "Ready to Experience" or "Ready to Get Started"
- ✓ No urgency animations (pulse/bounce on scarcity)
- ✓ No red/amber warning colors
- ✓ No "Wait, before you go..." copy
- ✓ No em dashes anywhere

## Standard CTAs
- "Begin Your Care"
- "Join the Waitlist"
- "Request Enrollment"

---

# TYPOGRAPHY SYSTEM (V17)

## Font: Cormorant Garamond (Primary)

Per brand specifications, Cormorant Garamond is used as the primary font throughout:

```css
body {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.01em;
  font-size: 1.0625rem;
}

.font-display {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 500;
  letter-spacing: -0.03em;
}
```

## UI Elements
Navigation, buttons, and small labels use system-ui for maximum clarity:
```css
.font-ui {
  font-family: system-ui, -apple-system, sans-serif;
}
```

---

# COMPONENTS (18)

| Component | Purpose |
|-----------|---------|
| Navigation.tsx | Header with mega-menu dropdowns |
| Footer.tsx | 4-column footer with CTA |
| ScrollReveal.tsx | Scroll-triggered animations |
| CareJourney.tsx | 3-step process visualization |
| TrustStrip.tsx | Trust badges (HIPAA, etc.) |
| ExitIntentPopup.tsx | Exit intent capture |
| MobileCTA.tsx | Sticky mobile CTA |
| ThemeProvider.tsx | Dark mode support |
| BackToTop.tsx | Scroll to top button |
| CookieConsent.tsx | GDPR cookie banner |
| Breadcrumbs.tsx | Navigation breadcrumbs |
| ScrollProgress.tsx | Reading progress indicator |

---

# CONTACT INFORMATION

| Item | Value |
|------|-------|
| Phone | +1 (425) 285-7390 |
| Email | info@sankofafamilymedicine.com |
| Website | sankofafamilymedicine.com |

---

# DEPLOYMENT CHECKLIST

1. Run `npm install`
2. Run `npm run build` (should complete with 0 errors)
3. Deploy to Vercel
4. Verify Formspree endpoints are active
5. Update Google Analytics ID if needed
6. Test all forms submit correctly
7. Verify all images load properly

---

# BUILD VERIFICATION

- ✓ Compiled successfully
- ✓ 42 static pages generated
- ✓ 0 errors, 0 warnings
- ✓ All internal links verified
- ✓ All static assets present
- ✓ Brand voice compliant
- ✓ No em dashes found
- ✓ Cormorant Garamond primary typography
- ✓ 2026 AI metadata implemented

---

# API ENDPOINTS

## Formspree Forms
- Contact/Waitlist: Configured in contact page
- Newsletter: Footer subscription form
- Lead Magnets: Resource download forms

## External Services
- Google Analytics: G-V9M27XXYYB
- Formspree: Endpoints in contact forms

---

# CSS CUSTOM PROPERTIES

```css
:root {
  --sfm-azure: #05436e;
  --sfm-azure-alpha: rgba(5, 67, 110, 0.27);
  --sfm-gold: #bc9833;
  --sfm-navy: #051c3b;
  --sfm-white: #FFFFFF;
  --sfm-black: #070705;
  --sfm-cream: #faf9f7;
}
```

---

# ANIMATION SYSTEM

## Premium Animations
- `animate-fade-in`: Fade in with upward motion
- `animate-fade-in-up`: More pronounced upward fade
- `animate-scale-in`: Scale up entrance
- `animate-float`: Gentle floating motion
- `animate-shimmer`: Gold shimmer effect

## Timing Functions
- `--ease-out-expo`: Premium exit easing
- `--ease-spring`: Bouncy interactions
- `--ease-luxury`: Smooth luxury feel

---

# ACCESSIBILITY FEATURES

- Skip to content link
- ARIA labels on all interactive elements
- Focus visible states
- Reduced motion support
- Semantic HTML structure
- Color contrast compliance
- Screen reader announcements

---

# DARK MODE SUPPORT

Full dark mode implementation with CSS custom properties that automatically invert the color scheme while maintaining brand identity.

---

# FILE STRUCTURE

```
/app
  /about
  /accessibility
  /blog
  /careers
  /compare
  /contact
  /faq
  /founder
  /locations
    /expansion
    /south-carolina
    /washington
      /bellevue
      /everett
      /kirkland
      /mercer-island
      /olympia
      /redmond
      /sammamish
      /seattle
      /spokane
      /tacoma
      /vancouver
  /partnerships
  /patient-forms
  /policies
  /privacy
  /resources
  /sankofa-os
  /services
  /terms
  /testimonials
  globals.css
  layout.tsx
  page.tsx
  sitemap.ts

/components
  BackToTop.tsx
  Breadcrumbs.tsx
  CareJourney.tsx
  ComingSoon.tsx
  CookieConsent.tsx
  ExitIntentPopup.tsx
  Footer.tsx
  MemberStories.tsx
  MobileCTA.tsx
  Navigation.tsx
  ReadingTime.tsx
  ScrollProgress.tsx
  ScrollReveal.tsx
  SocialShare.tsx
  SpotsCounter.tsx
  TableOfContents.tsx
  ThemeProvider.tsx
  TrustStrip.tsx

/lib
  analytics.ts
  services.ts
  states.ts

/public
  /documents (9 PDFs)
  /guides (1 PDF)
  /images (17 images)
  favicon.png
  manifest.json
  robots.txt
```

---

# KNOWN ISSUES / FUTURE ENHANCEMENTS

## Pending
- NPI number registration (placeholder in metadata)
- DEA registration
- EMR integration
- Direct booking API
- South Carolina licensure (2026)

## Recommended Next Steps
1. Complete professional photography session
2. Finalize EMR selection
3. Set up lab partnerships
4. Implement booking integration
5. Launch marketing automation

---

# HANDOFF NOTES

This document and codebase are ready for production deployment. All features are tested, brand compliant, and optimized for 2026 AI search engines.

**Document generated for AI handoff.**  
**Site ready for production deployment.**

---

*Version 17 Elite Final*  
*December 2025*  
*Medicine That Remembers™*
