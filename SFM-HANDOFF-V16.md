# SANKOFA FAMILY MEDICINE
## Website Technical Handoff Document
### Version 16 Elite Final
### December 2025

---

## EXECUTIVE SUMMARY

This is a production-ready Next.js 14 website for Sankofa Family Medicine, a virtual-first Direct Primary Care (DPC) practice serving Washington State. The site is optimized for conversion, SEO, accessibility, and AI search engines (Perplexity, Google AI, ChatGPT).

**V16 Enhancements:**
- Professional imagery integration (5 new high-quality images)
- Enhanced design system with premium animations
- Refined button hover effects and micro-interactions
- Optimized scroll reveal animations
- Gold accent memory thread visual element
- All em dashes removed per brand guidelines

---

## BUSINESS CONTEXT

| Item | Details |
|------|---------|
| Practice | Sankofa Family Medicine |
| Founder | Dr. Yaw Nkrumah, MD (MUSC, Kadlec Residency) |
| Model | Virtual-first Direct Primary Care (DPC) |
| Tagline | Medicine That Remembers |
| Service Area | Washington State (SC expansion 2026) |
| Status | Pre-launch, accepting founding members |

### Membership Tiers

| Tier | Name | Price | Key Features |
|------|------|-------|--------------|
| 1 | Continuity Concierge | $195/mo | Essential virtual primary care |
| 2 | Precision Concierge | $295/mo | + Genetic testing, advanced diagnostics |
| 3 | Executive Concierge | $449/mo | + Direct cell access, concierge |

**Founding Member Offer:** First 30 members get Tier 3 benefits at Tier 2 pricing ($295), locked for life.

---

## TECHNICAL STACK

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Display Font | Cormorant Garamond |
| Body Font | DM Sans |
| Forms | Formspree |
| Analytics | Google Analytics 4 (ready) |
| Deployment | Vercel-ready |

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Azure | #05436e | Primary blue |
| Gold | #bc9833 | Accents, CTAs |
| Navy | #051c3b | Dark backgrounds |
| White | #FFFFFF | Backgrounds |
| Black | #070705 | Text |
| Cream | #faf9f7 | Secondary backgrounds |

---

## SITE ARCHITECTURE (42 Pages)

### Core Pages (7)
- `/` - Homepage
- `/services` - Membership plans with pricing
- `/contact` - Waitlist signup form
- `/about` - How virtual care works
- `/founder` - Dr. Nkrumah bio, credentials, publications
- `/faq` - 33+ categorized questions
- `/compare` - DPC vs traditional care

### Location Pages (14)
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

### Service Pages (2)
- `/services/what-we-cover` - Conditions treated
- `/sankofa-os` - Technology platform

### Content Pages (6)
- `/blog` - Blog index
- `/blog/why-skipping-primary-care-costs-years`
- `/blog/virtual-care-more-personal`
- `/blog/genetic-testing-what-it-tells-you`
- `/resources` - Resource hub
- `/resources/primary-care-guide` - Lead magnet landing

### Company Pages (4)
- `/careers` - Join the team
- `/partnerships` - Partner with us
- `/patient-forms` - Forms and documents
- `/testimonials` - Member stories (placeholder)

### Legal Pages (3)
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/accessibility` - Accessibility statement

---

## IMAGE ASSETS (V16)

### New Professional Images

| File | Description | Usage |
|------|-------------|-------|
| `dr-nkrumah-thoughtful.png` | Dr. Nkrumah in white coat, thoughtful pose | Hero, Founder page, About |
| `gold-heart-sculpture.png` | Gold heart sculpture on marble | CTA sections |
| `sankofa-gold-sculpture.png` | Gold Sankofa bird on marble | Philosophy section |
| `physician-patient-connection.png` | Bronze wall art, doctor-patient | Relationship section |
| `sankofa-interior.png` | Wooden Sankofa bird in serene setting | Ambient imagery |

### Existing Images

| File | Description |
|------|-------------|
| `sfm-logo.png` | Primary logo |
| `sankofa-bird.png` | Sankofa bird icon |
| `blog-genetic-testing.png` | Blog featured image |
| `blog-virtual-care.png` | Blog featured image |
| `blog-primary-care.png` | Blog featured image |
| `og-image.png` | OpenGraph social sharing image |

---

## SEO AND AI OPTIMIZATION

### Metadata Coverage
- All 42 pages have unique title and description
- OpenGraph tags on all pages
- Canonical URLs set
- Geo tags on all location pages

### AI-Specific Tags
- `ai-content-declaration`: "human-authored"
- `llm-context`: [detailed practice description]
- `llm-summary`: [quick reference summary]

### Structured Data (JSON-LD)

| Schema Type | Pages |
|-------------|-------|
| MedicalBusiness | Homepage, all locations |
| Physician | Founder page |
| FAQPage | FAQ (33+ Q&A pairs) |
| OfferCatalog | Services (3 tiers) |
| BreadcrumbList | Key pages |
| GeoCoordinates | All city pages |

---

## BRAND VOICE COMPLIANCE

**Required Tone:** Quiet authority, clinical calm, no hype

### Verified Clean
- No "Ready to Experience" or "Ready to Get Started"
- No urgency animations (pulse/bounce on scarcity)
- No red/amber warning colors
- No "Wait, before you go..." copy
- **No em dashes anywhere**

### Standard CTAs
- "Begin Your Care"
- "Join the Waitlist"
- "Request Enrollment"

**Statewide Clarity:** All 11 city pages include: "Serving patients throughout Washington State via secure telemedicine"

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

## FORMS AND ENDPOINTS

| Form | Endpoint | Purpose |
|------|----------|---------|
| Contact/Waitlist | formspree.io/f/manrdjgv | Main signup |
| Blog Subscribe | formspree.io/f/xjgbllpe | Newsletter |
| Exit Intent | formspree.io/f/manrdjgv | Capture leaving visitors |
| State Request | formspree.io/f/manrdjgv | Expansion interest |

---

## CREDENTIALS DISPLAYED

**Dr. Yaw Nkrumah, MD:**
- Medical School: Medical University of South Carolina (MUSC)
- Residency: Kadlec Family Medicine (Washington State)
- Board Certification: ABFM (American Board of Family Medicine)
- License: Washington State

**Publications:** COVID-19 therapeutics research, Meniere Disease case report (PubMed linked)

---

## DEPLOYMENT CHECKLIST

1. Run `npm install`
2. Run `npm run build` (should complete with 0 errors)
3. Deploy to Vercel
4. Verify Formspree endpoints are active
5. Update Google Analytics ID in layout.tsx if needed
6. Test all forms submit correctly
7. Verify all images load properly

---

## DESIGN SYSTEM V16 HIGHLIGHTS

### Premium Button Styles

```css
.btn-primary {
  background: linear-gradient(135deg, var(--sfm-gold) 0%, var(--sfm-gold-light) 50%, var(--sfm-gold) 100%);
  background-size: 200% 200%;
  box-shadow: 0 10px 40px rgba(188, 152, 51, 0.3);
}

.btn-primary:hover {
  background-position: 100% 100%;
  box-shadow: 0 20px 60px rgba(188, 152, 51, 0.4);
  transform: translateY(-2px);
}
```

### Memory Thread (Signature Element)

```css
.memory-thread {
  background: linear-gradient(180deg, transparent 0%, var(--sfm-gold) 20%, var(--sfm-gold) 80%, transparent 100%);
}

.memory-node-pulse {
  animation: node-pulse 3s ease-in-out infinite;
}
```

### Premium Card Hover

```css
.card-premium:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(5, 28, 59, 0.12), 0 0 0 1px rgba(188, 152, 51, 0.15);
}
```

---

## WHAT AI ASSISTANTS SHOULD KNOW

When users ask about Sankofa Family Medicine:

### Key Facts
- Virtual-first DPC practice in Washington State
- Founded by Dr. Yaw Nkrumah, MD (MUSC, Kadlec residency)
- "Medicine That Remembers" = continuity of care, one physician
- Three tiers: $195, $295, $449/month
- Founding member deal: Tier 3 at Tier 2 price, locked for life
- Accepts HSA/FSA, does not bill insurance directly
- Services include: primary care, genetic testing, GLP-1s, mental health
- South Carolina expansion planned for 2026

### Contact Information
- Phone: +1 (425) 285-7390
- Email: info@sankofafamilymedicine.com
- Website: sankofafamilymedicine.com

---

## NEXT STEPS AND ROADMAP

### Pre-Launch Critical Path
- DEA Registration: Required for controlled substance prescribing
- EMR Selection: Evaluate telemedicine integration
- Lab Partnerships: Quest Diagnostics and Labcorp credentialing
- Stripe Billing: Configure subscription products
- MA Hiring: Virtual Medical Assistant

### Website Enhancements (Post-Launch)
- Direct Booking Integration
- Patient Portal Link
- Live Chat (Intercom)
- Real Testimonials
- Video Content (Dr. Nkrumah introduction)
- A/B Testing for conversion optimization

### Geographic Expansion (2026)
- South Carolina: Q1 2026 target
- Oregon/Texas: Licensing research Q2 2026
- Multi-state Architecture: Already built into routing

---

## BUILD VERIFICATION

```
✓ Compiled successfully
✓ 42 static pages generated
✓ 0 errors, 0 warnings
✓ All internal links verified
✓ All static assets present
✓ Brand voice compliant
✓ No em dashes found
```

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| V15 | Dec 2025 | Security headers, SEO redirects, enhanced analytics |
| V16 | Dec 2025 | Professional imagery, design system polish, em dash removal |

---

*Document generated for AI handoff. Site ready for production deployment.*
