# SANKOFA FAMILY MEDICINE
## Website Technical Handoff Document
### Version 18 Elite Final
### December 2025

---

# EXECUTIVE SUMMARY

This is a **production-ready Next.js 14** website for Sankofa Family Medicine, a virtual-first Direct Primary Care (DPC) practice serving Washington State. The site is optimized for conversion, SEO, accessibility, and 2026-ready AI search engines (Perplexity, Google AI, ChatGPT, Claude, Gemini).

## V18 Enhancements

- **Enhanced 2026 AI Metadata**: Expanded support for Perplexity, Google AI/Gemini, ChatGPT, and Claude
- **Voice Search Optimization**: Natural language answers and speakable summaries
- **Featured Snippet Optimization**: Structured answers for what, who, where, how, and cost queries
- **Entity Recognition Tags**: Knowledge graph optimization for all major AI platforms
- **Cormorant Garamond Typography**: Primary font throughout (display + body)
- **Zero Em Dashes**: Brand guideline compliance verified
- **WCAG 2.2 AAA Accessibility**: Enhanced screen reader support and keyboard navigation

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
| 1 | Continuity Care | $149/mo | Essential virtual primary care |
| 2 | Precision Care | $249/mo | + Genetic testing, Sankofa OS |
| 3 | Legacy Health | $449/mo | + Direct cell access, concierge |

**Founding Member Offer**: First 30 members get Tier 3 benefits at Tier 2 pricing ($249), locked for life.

---

# TECHNICAL STACK

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Primary Font | Cormorant Garamond |
| UI Font | System UI (functional elements) |
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
- `/locations/washington/seattle, bellevue, kirkland, redmond`
- `/locations/washington/sammamish, mercer-island, everett`
- `/locations/washington/tacoma, olympia, vancouver, spokane`
- `/locations/south-carolina` - Coming 2026
- `/locations/expansion` - Request your state

## Service & Content Pages
- `/services/what-we-cover` - Conditions treated
- `/sankofa-os` - Technology platform
- `/blog` - Blog index with 3 articles
- `/resources` - Resource hub with lead magnets
- `/careers, /partnerships, /patient-forms, /testimonials`
- `/privacy, /terms, /accessibility`

---

# SEO AND AI OPTIMIZATION (2026-Ready)

## Metadata Coverage
- All 42 pages have unique title and description
- OpenGraph tags on all pages
- Canonical URLs set
- Geo tags on all location pages

## AI-Specific Tags (V18 Enhanced)

### Content Declaration
```html
ai-content-declaration: human-authored
ai-training-opt-out: false
ai-generated: false
content-authenticity: verified-human-authored
last-human-review: 2025-12
```

### LLM Context (Multi-Platform)
```html
llm-context: [Full practice description]
llm-summary: [Condensed membership info]
llm-key-facts: [Quick reference facts]
```

### Platform-Specific Optimization
```html
perplexity-context: [Perplexity AI optimized]
perplexity-summary: [Concise summary]
google-ai-context: [Google AI/Gemini optimized]
chatgpt-context: [OpenAI optimized]
```

### Voice Search
```html
voice-search-answer: [Natural language answer]
speakable-summary: [Voice assistant summary]
voice-query-match: [Target voice queries]
```

### Entity Tags (Knowledge Graphs)
```html
entity-type: MedicalBusiness
entity-name: Sankofa Family Medicine
entity-founder: Dr. Yaw Nkrumah, MD
entity-industry: Healthcare, Direct Primary Care, Telemedicine
```

### Featured Snippet Optimization
```html
snippet-answer-what: [What is SFM answer]
snippet-answer-who: [Who founded answer]
snippet-answer-where: [Service area answer]
snippet-answer-cost: [Pricing answer]
snippet-answer-how: [How to join answer]
```

## Structured Data (JSON-LD)
- MedicalBusiness (primary)
- Physician (Dr. Nkrumah)
- FAQPage (common questions)
- OfferCatalog (membership tiers)
- WebSite with SearchAction
- Speakable specification

---

# BRAND VOICE COMPLIANCE

**Required Tone**: Quiet authority, clinical calm, no hype

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

# DESIGN SYSTEM

## Typography

### Display (Headlines)
```css
font-family: 'Cormorant Garamond', Georgia, serif;
font-weight: 500;
letter-spacing: -0.03em;
line-height: 1.1;
```

### Body Text
```css
font-family: 'Cormorant Garamond', Georgia, serif;
font-weight: 400;
letter-spacing: 0.01em;
line-height: 1.8;
font-size: 1.0625rem;
```

### UI Elements (Forms, Buttons)
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
font-weight: 500;
```

## Shadows
```css
--shadow-sm: 0 2px 4px rgba(5, 28, 59, 0.06);
--shadow-md: 0 4px 12px rgba(5, 28, 59, 0.08);
--shadow-lg: 0 8px 30px rgba(5, 28, 59, 0.12);
--shadow-xl: 0 20px 50px rgba(5, 28, 59, 0.16);
--shadow-gold: 0 10px 40px rgba(188, 152, 51, 0.30);
--shadow-gold-lg: 0 20px 60px rgba(188, 152, 51, 0.40);
```

## Easing Functions
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-luxury: cubic-bezier(0.19, 1, 0.22, 1);
```

---

# COMPONENTS

## Navigation
- Fixed header with scroll-aware transparency
- Desktop mega-menu dropdowns with descriptions
- Mobile slide-out panel with grouped links
- Contact info in top bar
- Theme toggle (light/dark)
- Primary CTA button always visible

## Footer
- Newsletter CTA section
- Brand column with trust badges
- 4-column link structure
- Social links (LinkedIn)
- Contact information
- Legal links and copyright

## Interactive Elements
- ScrollReveal animations on viewport entry
- Back to top button
- Cookie consent banner
- Exit intent popup (optional)
- Mobile sticky CTA bar

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
8. Test mobile responsiveness
9. Verify accessibility (keyboard nav, screen readers)
10. Test dark mode functionality

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
- ✓ 2026 AI metadata implemented (enhanced)
- ✓ Voice search optimization added
- ✓ Featured snippet answers configured

---

# FILE STRUCTURE

```
sfm-v18/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system
│   ├── about/
│   ├── blog/
│   ├── careers/
│   ├── compare/
│   ├── contact/
│   ├── faq/
│   ├── founder/
│   ├── locations/
│   ├── partnerships/
│   ├── patient-forms/
│   ├── policies/
│   ├── privacy/
│   ├── resources/
│   ├── sankofa-os/
│   ├── services/
│   ├── terms/
│   └── testimonials/
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ScrollReveal.tsx
│   ├── TrustStrip.tsx
│   ├── CareJourney.tsx
│   ├── MemberStories.tsx
│   ├── BackToTop.tsx
│   ├── CookieConsent.tsx
│   ├── ExitIntentPopup.tsx
│   ├── MobileCTA.tsx
│   ├── ScrollProgress.tsx
│   ├── SocialShare.tsx
│   ├── SpotsCounter.tsx
│   ├── Breadcrumbs.tsx
│   ├── TableOfContents.tsx
│   └── ThemeProvider.tsx
├── lib/
│   ├── analytics.ts
│   ├── services.ts
│   └── states.ts
├── public/
│   ├── images/
│   ├── documents/
│   ├── guides/
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── manifest.json
│   └── robots.txt
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── postcss.config.js
```

---

# NEXT STEPS FOR FUTURE DEVELOPMENT

## Recommended Enhancements
1. Integrate direct booking system
2. Add patient portal link
3. Implement A/B testing for CTAs
4. Add more blog content for SEO
5. Create video testimonials section
6. Implement chat widget integration

## South Carolina Expansion (2026)
1. Activate `/locations/south-carolina` pages
2. Add city-specific pages
3. Update metadata for SC keywords
4. Add SC-specific regulatory compliance

---

*Document generated for AI handoff. Site ready for production deployment.*

**Version**: 18.0.0
**Date**: December 2025
**Status**: Production Ready
