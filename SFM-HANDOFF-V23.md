# Sankofa Family Medicine Website Handoff V23

## Version Summary
**Date:** December 29, 2025  
**Version:** V23  
**Status:** Production-Ready, Audit Complete

---

## Changes Made in V23

### 1. Legal Language Updates
Replaced all instances of "locked for life" with safer legal language:
- **New Standard Phrase:** "protected while your membership remains active"
- **Files Updated:** 17 files across the codebase
- **Rationale:** Previous "locked for life" phrasing could create false advertising exposure

### 2. Tier Naming Standardization
Standardized all tier references for consistency:
- **Old:** "Tier 3 benefits at Tier 2 pricing"
- **New:** "Legacy Health benefits at Precision Care pricing"
- **Files Updated:** Navigation, FAQ, Contact, Services, Compare, Locations pages
- **Note:** Some instructional instances (e.g., "Tier 2 Precision Care: $249/month") retained for SEO and clarity

### 3. Audit Results
**Verified Working:**
- All Formspree endpoints functional
- All internal links verified
- All images exist and render correctly
- No em dashes found in codebase
- Build passes with zero errors

---

## Brand Specifications

### Colors
```css
/* Primary */
Azure: #05436e (main brand color)
White: #FFFFFF
Gold: #bc9833 (accent, CTAs)

/* Secondary */
Deep Navy: #051c3b
Black: #070705
```

### Typography
- **Font Family:** Cormorant Garamond
- **Usage:** All headings and body text
- **No em dashes (—):** Use semicolons, commas, or periods instead

### Brand Voice
- Quiet authority
- Clinical calm
- Ethical clarity
- Human restraint
- No hype, urgency theater, or startup language

---

## Key Technical Details

### Formspree Endpoints
| Purpose | Endpoint ID | URL |
|---------|-------------|-----|
| Contact/Waitlist | `manrdjgv` | https://formspree.io/f/manrdjgv |
| Blog Subscription | `xjgbllpe` | https://formspree.io/f/xjgbllpe |
| Primary Care Guide | `xjgbllpe` | https://formspree.io/f/xjgbllpe |

### Membership Tiers
| Tier | Name | Monthly | Annual | Description |
|------|------|---------|--------|-------------|
| 1 | Continuity Care | $149 | $134 | Essential virtual primary care |
| 2 | Precision Care | $249 | $224 | Adds genetic testing, AI insights |
| 3 | Legacy Health | $449 | $404 | Concierge-level, direct cell access |

### Founding Member Offer
- **Standard Language:** "First 30 members receive Legacy Health benefits at Precision Care pricing ($249/month), protected while your membership remains active"
- **Key Points:**
  - Legacy Health (Tier 3) benefits
  - Precision Care (Tier 2) pricing
  - Rate protection while membership active
  - Limited to 30 spots

---

## File Structure

```
sfm-v22/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with SEO
│   ├── globals.css           # Global styles
│   ├── about/
│   ├── blog/
│   ├── careers/
│   ├── compare/
│   ├── contact/
│   ├── emergency/
│   ├── faq/
│   ├── founder/
│   ├── locations/
│   │   ├── washington/       # Active state
│   │   ├── south-carolina/   # Coming 2026
│   │   └── expansion/        # Request form
│   ├── patient-forms/
│   ├── policies/
│   ├── privacy/
│   ├── resources/
│   ├── sankofa-os/
│   ├── services/
│   ├── terms/
│   └── testimonials/
├── components/
│   ├── Navigation.tsx        # Main nav with dropdowns
│   ├── Footer.tsx            # Site footer
│   ├── CareJourney.tsx
│   ├── ExitIntentPopup.tsx
│   ├── ScrollReveal.tsx
│   └── ...
├── lib/
│   ├── analytics.ts
│   ├── services.ts
│   └── states.ts
├── public/
│   ├── images/
│   ├── documents/
│   ├── downloads/
│   └── guides/
└── ...config files
```

---

## SEO and AI Metadata

### Implemented Features
- JSON-LD structured data on all pages
- AI-friendly metadata (llm-summary, llm-key-facts)
- Voice search optimization
- Featured snippet answers
- OpenGraph and Twitter cards
- Canonical URLs
- Robots meta tags

### Key Meta Tags
```typescript
// Example from homepage
other: {
  'ai-content-declaration': 'human-authored',
  'medical-specialty': 'Primary Care, Family Medicine',
  'service-area': 'Washington State, USA',
  'practice-type': 'Direct Primary Care',
  'accepting-patients': 'true',
  'price-range': '$149-$449/month',
  'llm-summary': '...',
  'voice-search-answer': '...',
}
```

---

## Contact Information

- **Phone:** +1 (425) 285-7390
- **Email:** info@sankofafamilymedicine.com
- **Appointments:** appointments@sankofafamilymedicine.com
- **Service Area:** Washington State (virtual)
- **Expansion:** South Carolina (2026)

---

## Critical Rules

1. **No Em Dashes:** Search for — and replace with appropriate punctuation
2. **Tier Naming:** Always use "Legacy Health" and "Precision Care" not "Tier 3" and "Tier 2"
3. **Rate Protection:** Never say "locked for life" - use "protected while membership remains active"
4. **No Urgency Theater:** Avoid artificial scarcity language
5. **Consistent CTAs:** Primary action is "Join Waitlist" everywhere

---

## Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

---

## Known Good State

- **Last Build:** December 29, 2025
- **Node Version:** 18+
- **Next.js Version:** 14.2.35
- **Build Status:** Passing (43 static pages)
- **TypeScript:** No errors
- **All Links:** Verified
- **All Images:** Verified

---

## Next Steps for Future Development

1. Deploy to Vercel/production
2. Implement Google Analytics 4
3. Set up Stripe payment integration
4. Add professional photography when available
5. Create favicon and social sharing assets
6. Implement n8n workflow automation

---

*Document generated: December 29, 2025*
*For questions about this codebase, reference the memory and prior conversation history.*
