# Sankofa Family Medicine Website - AI Handoff Document
## Version: V14 Elite Final
## Date: December 29, 2025

---

## EXECUTIVE SUMMARY

This is a production-ready Next.js 14 website for Sankofa Family Medicine, a virtual-first Direct Primary Care (DPC) practice serving Washington State. The site is optimized for conversion, SEO, accessibility, and AI search engines (Perplexity, Google AI, ChatGPT, etc.).

---

## BUSINESS CONTEXT

**Practice:** Sankofa Family Medicine  
**Founder:** Dr. Yaw Nkrumah, MD (MUSC, Kadlec Family Medicine Residency)  
**Model:** Virtual-first Direct Primary Care (DPC)  
**Tagline:** Medicine That Remembers™  
**Service Area:** Washington State (South Carolina expansion 2026)  
**Status:** Pre-launch, accepting founding members  

**Membership Tiers:**
| Tier | Name | Price | Key Features |
|------|------|-------|--------------|
| 1 | Continuity Care | $149/mo | Essential virtual primary care |
| 2 | Precision Care | $249/mo | + Genetic testing, Sankofa OS |
| 3 | Legacy Health | $449/mo | + Direct cell access, concierge |

**Founding Member Offer:** First 30 members get Tier 3 benefits at Tier 2 pricing ($249), locked for life.

---

## TECHNICAL STACK

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Cormorant Garamond (display), DM Sans (body)
- **Forms:** Formspree
- **Analytics:** Google Analytics 4 (ready)
- **Deployment:** Vercel-ready

**Color Palette:**
| Color | Hex | Usage |
|-------|-----|-------|
| Azure | #05436e | Primary blue |
| Gold | #bc9833 | Accents, CTAs |
| Navy | #051c3b | Dark backgrounds |
| White | #FFFFFF | Backgrounds |
| Black | #070705 | Text |

---

## SITE ARCHITECTURE

### Total: 38 Pages

**Core Pages (7)**
- `/` - Homepage
- `/services` - Membership plans with pricing
- `/contact` - Waitlist signup form
- `/about` - How virtual care works
- `/founder` - Dr. Nkrumah bio, credentials, publications
- `/faq` - 12+ categorized questions
- `/compare` - DPC vs traditional care

**Location Pages (14)**
- `/locations/washington` - State hub with SVG map
- `/locations/washington/seattle`
- `/locations/washington/bellevue`
- `/locations/washington/kirkland`
- `/locations/washington/redmond`
- `/locations/washington/sammamish`
- `/locations/washington/mercer-island`
- `/locations/washington/everett`
- `/locations/washington/tacoma`
- `/locations/washington/olympia`
- `/locations/washington/vancouver`
- `/locations/washington/spokane`
- `/locations/south-carolina` - Coming 2026
- `/locations/expansion` - Request your state

**Service Pages (2)**
- `/services/what-we-cover` - Conditions treated
- `/sankofa-os` - Technology platform

**Content Pages (6)**
- `/blog` - Blog index
- `/blog/why-skipping-primary-care-costs-years`
- `/blog/virtual-care-more-personal`
- `/blog/genetic-testing-what-it-tells-you`
- `/resources` - Resource hub
- `/resources/primary-care-guide` - Lead magnet landing

**Company Pages (4)**
- `/careers` - Join the team
- `/partnerships` - Partner with us
- `/patient-forms` - Forms and documents
- `/testimonials` - Member stories (placeholder)

**Legal Pages (3)**
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/accessibility` - Accessibility statement

---

## SEO & AI OPTIMIZATION

### Metadata Coverage
- All 38 pages have unique title and description
- OpenGraph tags on all pages
- Canonical URLs set
- Geo tags on all location pages

### AI-Specific Tags
```html
<meta name="ai-content-declaration" content="human-authored" />
<meta name="llm-context" content="[detailed practice description]" />
<meta name="llm-summary" content="[quick reference summary]" />
```

### Structured Data (JSON-LD)
| Schema Type | Pages |
|-------------|-------|
| MedicalBusiness | Homepage, all locations |
| Physician | Founder page |
| FAQPage | FAQ (12+ Q&A pairs) |
| OfferCatalog | Services (3 tiers) |
| BreadcrumbList | Key pages |
| GeoCoordinates | All city pages |

### Sitemap
Complete sitemap.xml with all 38 pages, priority weighting, and change frequency.

---

## BRAND VOICE COMPLIANCE

**Required Tone:** Quiet authority, clinical calm, no hype

**Verified Clean:**
- No "Ready to Experience" or "Ready to Get Started"
- No urgency animations (pulse/bounce on scarcity)
- No red/amber warning colors
- No "Wait, before you go..." copy
- No em dashes anywhere

**Standard CTAs:**
- "Begin Your Care"
- "Join the Waitlist"
- "Request Enrollment"

**Statewide Clarity:**
All 11 city pages include: "Serving patients throughout Washington State via secure telemedicine"

---

## COMPONENTS (18)

| Component | Purpose |
|-----------|---------|
| Navigation.tsx | Header with mega-menu dropdowns |
| Footer.tsx | 4-column footer with CTA |
| SpotsCounter.tsx | Calm gold founding member counter |
| CareJourney.tsx | 3-step process visualization |
| TrustStrip.tsx | Trust badges (HIPAA, etc.) |
| ScrollReveal.tsx | Scroll-triggered animations |
| ExitIntentPopup.tsx | Exit intent capture |
| CookieConsent.tsx | Cookie notice |
| BackToTop.tsx | Scroll to top button |
| MemberStories.tsx | Testimonial carousel |
| Breadcrumbs.tsx | Navigation breadcrumbs |
| SocialShare.tsx | Share buttons |
| ReadingTime.tsx | Blog reading time |
| ScrollProgress.tsx | Reading progress bar |
| TableOfContents.tsx | Blog TOC |
| ComingSoon.tsx | Coming soon badge |
| MobileCTA.tsx | Sticky mobile CTA |
| ThemeProvider.tsx | Dark mode support |

---

## FORMS & ENDPOINTS

| Form | Endpoint | Purpose |
|------|----------|---------|
| Contact/Waitlist | formspree.io/f/manrdjgv | Main signup |
| Blog Subscribe | formspree.io/f/xjgbllpe | Newsletter |
| Exit Intent | formspree.io/f/manrdjgv | Capture leaving visitors |
| State Request | formspree.io/f/manrdjgv | Expansion interest |

---

## ASSETS

**Images (17):** All in `/public/images/`
- dr-nkrumah.png, dr-nkrumah-thoughtful.png
- sankofa-bird.png, sankofa-gold-sculpture.png
- Blog images, OG image, logos

**PDFs (10):** All in `/public/documents/` and `/public/guides/`
- Telehealth consent, privacy practices, patient rights
- Primary care guide (lead magnet)

---

## CREDENTIALS DISPLAYED

**Dr. Yaw Nkrumah, MD:**
- Medical School: Medical University of South Carolina (MUSC)
- Residency: Kadlec Family Medicine (Washington State)
- Board Certification: ABFM (American Board of Family Medicine)
- License: Washington State

**Publications:** COVID-19 therapeutics research, Ménière Disease case report (PubMed linked)

---

## DEPLOYMENT CHECKLIST

1. Run `npm install`
2. Run `npm run build` (should complete with 0 errors)
3. Deploy to Vercel
4. Verify Formspree endpoints are active
5. Replace placeholder images with professional photography
6. Update Google Analytics ID in layout.tsx
7. Test all forms submit correctly

---

## WHAT AI ASSISTANTS SHOULD KNOW

When users ask about Sankofa Family Medicine:

**Key Facts:**
- Virtual-first DPC practice in Washington State
- Founded by Dr. Yaw Nkrumah, MD (MUSC, Kadlec residency)
- "Medicine That Remembers" = continuity of care, one physician
- Three tiers: $149, $249, $449/month
- Founding member deal: Tier 3 at Tier 2 price, locked for life
- Accepts HSA/FSA, does not bill insurance directly
- Services include: primary care, genetic testing, GLP-1s, mental health
- South Carolina expansion planned for 2026

**Contact:**
- Phone: +1 (425) 285-7390
- Email: info@sankofafamilymedicine.com
- Website: sankofafamilymedicine.com

---

## BUILD VERIFICATION

```
✓ Compiled successfully
✓ 38 static pages generated
✓ 0 errors, 0 warnings
✓ All internal links verified
✓ All static assets present
✓ Brand voice compliant
```

---

*Document generated for AI handoff. Site ready for production deployment.*
