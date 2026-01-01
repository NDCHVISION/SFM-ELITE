# SANKOFA FAMILY MEDICINE V26 MASTER IMPLEMENTATION PLAN

**Version:** 26.0.0  
**Date:** December 31, 2025  
**Status:** Pre-Implementation  
**Classification:** Internal Development Document

---

## EXECUTIVE SUMMARY

This document consolidates two critical updates for the Sankofa Family Medicine website:

1. **Atlas Clinical Integration** — Migrating all clinical functions to Atlas.md, removing Calendly, intake forms, and PHI collection from the website
2. **Conversion Optimization** — Addressing 16 identified issues from the professional website audit to maximize patient acquisition

**Total Estimated Implementation Time:** 6-8 hours  
**Priority:** CRITICAL — Launch blocking

---

## PART 1: ATLAS CLINICAL SYSTEM INTEGRATION

### 1.1 Core Principle

> **Atlas is the only clinical system. The website is marketing and education only.**

| Function | Location | Notes |
|----------|----------|-------|
| Patient signup | Atlas | Single entry point |
| Demographics & history | Atlas | All PHI |
| Secure messaging | Atlas | Default communication |
| Scheduling (audio/video) | Atlas | If clinically needed |
| Visits & documentation | Atlas | All clinical records |
| Membership billing | Atlas | Payment processing |
| Marketing & education | Website | No PHI |
| Practice positioning | Website | Brand building |
| Lead nurturing content | Website | Guides, blog, FAQs |

### 1.2 Single Clinical Entry Point

```
https://sankofafamilymedicine.atlas.md/hub/login
```

**ALL patient-facing clinical CTAs must link to this URL.**

### 1.3 Required Removals

#### 1.3.1 Calendly (COMPLETE REMOVAL)

**Files to modify:**

| File | Lines | Action |
|------|-------|--------|
| `app/page.tsx` | 177-185, 671-680 | Replace Calendly links |
| `app/services/page.tsx` | 583-590 | Replace Calendly links |
| `app/contact/page.tsx` | 92-101, 183-191 | Replace Calendly links |
| `components/Navigation.tsx` | 423-435, 498-508 | Replace Calendly links |
| `components/ExitIntentPopup.tsx` | All Calendly refs | Replace or remove |
| `components/MobileCTA.tsx` | All Calendly refs | Replace |

**Search pattern for complete removal:**
```bash
grep -r "calendly" --include="*.tsx" --include="*.ts"
grep -r "15-minute" --include="*.tsx" --include="*.ts"
grep -r "fit-call" --include="*.tsx" --include="*.ts"
```

#### 1.3.2 Language Removal (All instances)

Remove or replace ALL occurrences of:

| Current Text | Replacement |
|--------------|-------------|
| "Book a 15-Minute Fit Call" | "Become a Patient" |
| "Schedule Your Fit Call" | "Become a Patient" |
| "Alignment call" | REMOVE |
| "Consultation call" | REMOVE |
| "We will contact you" | REMOVE |
| "This is a brief, non-clinical call to ensure alignment before enrollment" | REMOVE |
| "Founding members begin with a brief fit call" | "Founding members begin enrollment through our patient portal" |

#### 1.3.3 Intake Forms & PDFs (Website Removal)

**Files to evaluate:**

| File/Path | Action |
|-----------|--------|
| `app/patient-forms/page.tsx` | Redirect to Atlas or convert to informational |
| `public/documents/*.pdf` | Keep for reference, remove intake-specific |
| Formspree intake endpoints | Remove PHI collection forms |

**Keep these (non-PHI):**
- Emergency resources
- Privacy policy documents
- General information guides

**Remove/Redirect these:**
- Patient intake forms
- Health history questionnaires
- Consent forms (move to Atlas)

### 1.4 CTA Hierarchy (New Standard)

#### PRIMARY CTA (Mandatory across site)

```tsx
// STANDARD PRIMARY CTA COMPONENT
<a 
  href="https://sankofafamilymedicine.atlas.md/hub/login"
  className="btn-primary"
  aria-label="Become a patient at Sankofa Family Medicine"
>
  <span>Become a Patient</span>
  <ArrowRight className="w-4 h-4" aria-hidden="true" />
</a>
```

**Placement requirements:**
- Homepage hero (above fold)
- Navigation bar (desktop + mobile)
- Footer
- Services/Membership page (each tier)
- All page-level CTAs
- Exit intent popup
- Mobile sticky CTA

#### SECONDARY CTAs (Allowed)

These may remain on website, must NOT collect PHI:

| CTA Text | Allowed Link Destinations |
|----------|---------------------------|
| "Learn More" | Internal pages only |
| "How It Works" | `/about` |
| "Is This Right for Me?" | `/resources/primary-care-guide` |
| "Read the Guide" | `/resources/primary-care-guide` |
| "Explore Services" | `/services` |
| "View Membership Options" | `/services` |
| "Contact Us" | `/contact` (email/phone only, no intake) |

### 1.5 Contact Page Transformation

**Current state:** Collects name, email, interest, message via Formspree  
**New state:** Informational contact only

```tsx
// NEW CONTACT PAGE STRUCTURE
// Remove: Formspree form with interest selector
// Keep: Email, phone, service area info
// Add: Clear path to Atlas for becoming a patient

<section>
  <h2>Ready to Become a Patient?</h2>
  <p>Begin your enrollment through our secure patient portal.</p>
  <a href="https://sankofafamilymedicine.atlas.md/hub/login">
    Become a Patient
  </a>
</section>

<section>
  <h2>General Inquiries</h2>
  <p>For non-clinical questions about our practice:</p>
  <a href="mailto:info@sankofafamilymedicine.com">info@sankofafamilymedicine.com</a>
  <a href="tel:+14252857390">+1 (425) 285-7390</a>
</section>
```

### 1.6 Communication Model Update

**Remove all implications of:**
- Direct phone calls for appointments
- Off-platform messaging
- Callback requests

**Standard messaging:**
> "Once enrolled, communicate with Dr. Nkrumah through secure messaging in your patient portal. Video or phone visits are scheduled within Atlas when clinically appropriate."

---

## PART 2: CONVERSION OPTIMIZATION FIXES

### 2.1 Critical Issues (Conversion Killers)

#### Issue #1: CTA Clarity
**Problem:** "Fit Call" language is confusing  
**Solution:** Already addressed in Atlas integration — "Become a Patient"  
**Status:** Resolved by Part 1

#### Issue #2: No Pricing Above Fold
**Problem:** Users scroll extensively before seeing "$149/month"

**Implementation:**
```tsx
// app/page.tsx — Add after location badge (line ~136)
<div className="opacity-0 animate-fade-in animation-delay-300 inline-flex items-center gap-2 px-4 py-2.5 bg-sfm-gold/15 backdrop-blur-sm border border-sfm-gold/30 rounded-full ml-3">
  <span className="text-sfm-gold text-sm font-medium">Memberships from</span>
  <span className="text-white font-display text-lg">$149<span className="text-white/60 text-sm">/mo</span></span>
</div>
```

#### Issue #3: Fake Social Proof
**Problem:** Placeholder avatars with "Professionals are joining" destroys trust

**Implementation:**
```tsx
// app/page.tsx — Lines 710-717 DELETE and REPLACE with:
<div className="mt-8 text-center">
  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
    <span className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
      <span className="text-emerald-300 text-sm font-medium">Accepting founding members</span>
    </span>
    <span className="w-px h-4 bg-white/20" />
    <span className="text-white/50 text-sm">Washington State</span>
  </div>
</div>
```

#### Issue #4: Lead Capture Missing Urgency
**Problem:** Email forms have no compelling reason to act now

**Implementation:**
```tsx
// app/page.tsx — Homepage assessment section, add before form:
<div className="flex items-center justify-center gap-2 mb-6 text-sfm-navy dark:text-white">
  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
  <span className="text-sm font-medium">Limited founding member enrollment open</span>
</div>
```

### 2.2 Major Issues (Conversion Friction)

#### Issue #5: Mobile Navigation CTA Buried
**Problem:** CTA appears after 12+ nav links

**Implementation in `components/Navigation.tsx`:**
```tsx
// Mobile menu — Move CTA to TOP of nav list (line ~497)
// Restructure mobile nav order:
// 1. Primary CTA (Become a Patient)
// 2. Core pages (max 6)
// 3. Expandable "More" section
```

#### Issue #6: Hero Image Cognitive Dissonance
**Problem:** Empty room image for virtual practice

**Implementation:**
```tsx
// app/page.tsx — Line 237
// CHANGE FROM:
src="/images/sankofa-interior.png"

// CHANGE TO:
src="/images/dr-nkrumah-desk.png"

// Update alt text:
alt="Dr. Yaw Nkrumah providing virtual care — the heart of patient-centered telehealth"
```

#### Issue #7: Services Page Tier Hierarchy
**Problem:** "Popular" badge on wrong tier for conversion funnel

**Implementation:**
```tsx
// app/services/page.tsx — Line 55-57
// REMOVE popular: true from Precision Care
// ADD foundingOffer: true to all tiers
// Let user choose based on needs, not artificial popularity
```

#### Issue #8: Sitemap Link to XML
**Problem:** Users see raw XML

**Implementation:**
```tsx
// components/Footer.tsx — Line 50
// CHANGE FROM:
{ label: 'Sitemap', href: '/sitemap.xml' }

// CHANGE TO:
{ label: 'All Pages', href: '/site-map' }
// OR simply remove from footer
```

### 2.3 Moderate Issues (UX Friction)

#### Issue #9: Non-Functional Checklist
**Problem:** Checkboxes do nothing

**Implementation:**
```tsx
// app/page.tsx — Self-assessment section
// Add state tracking:
const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false])
const noCount = checkedItems.filter(item => !item).length

// Add dynamic response:
{noCount >= 3 && (
  <div className="mt-6 p-4 bg-sfm-gold/10 border border-sfm-gold/30 rounded-xl">
    <p className="text-sfm-navy font-medium">
      Based on your responses, you may benefit from a different approach to primary care.
    </p>
  </div>
)}
```

#### Issue #10: Sparse Blog Section
**Problem:** Only 2 articles shown

**Implementation options:**
1. Add third article immediately
2. Or hide blog section until 5+ articles exist
3. Or show "Coming Soon" for third slot

#### Issue #11: Dual Email Confusion
**Problem:** `info@` vs `appointments@` unclear

**Implementation:**
```tsx
// Consolidate to single email or clarify:
// Primary: info@sankofafamilymedicine.com (all inquiries)
// Remove: appointments@ references (Atlas handles this now)
```

#### Issue #12: Excessive Animation Delays
**Problem:** Content hidden for 900ms

**Implementation:**
```css
/* globals.css — Reduce all animation delays */
/* Maximum delay: 400ms */
.animation-delay-200 { animation-delay: 100ms; }
.animation-delay-400 { animation-delay: 200ms; }
.animation-delay-600 { animation-delay: 300ms; }
.animation-delay-800 { animation-delay: 400ms; }
/* Remove: animation-delay-900 and higher */
```

### 2.4 Minor Issues (Polish)

#### Issue #13: Color Token Inconsistency
**Problem:** `#05436e46` appears to have alpha suffix error

**Implementation:**
```css
/* Verify all color tokens match specification */
--sfm-azure: #05436e;
--sfm-azure-alpha: rgba(5, 67, 110, 0.27); /* If alpha needed */
```

#### Issue #14: Redundant Tagline
**Problem:** "Medicine That Remembers" appears 6+ times on homepage

**Implementation:**
Reduce to 3 strategic placements:
1. Hero headline
2. Philosophy section
3. Final CTA

#### Issue #15: Missing Service Area Visual
**Problem:** No map showing Washington State coverage

**Implementation:**
Already have WashingtonMap component — ensure it's visible on homepage or add to About page prominently.

#### Issue #16: Duplicate LinkedIn Icons
**Problem:** Two identical icons confusing

**Implementation:**
```tsx
// components/Footer.tsx — Consolidate to single LinkedIn with dropdown or label
<div className="flex items-center gap-2">
  <a href="https://www.linkedin.com/company/109183000/" title="Follow Sankofa Family Medicine">
    <Linkedin />
  </a>
  <span className="text-xs text-white/40">|</span>
  <a href="https://www.linkedin.com/in/yawnkrumahmd/" title="Connect with Dr. Nkrumah">
    <span className="text-xs text-white/50">Dr. Nkrumah</span>
  </a>
</div>
```

---

## PART 3: FILE-BY-FILE IMPLEMENTATION CHECKLIST

### 3.1 Critical Files (Must Update)

| File | Atlas Changes | Conversion Fixes | Priority |
|------|---------------|------------------|----------|
| `app/page.tsx` | Remove Calendly (2 locations), Update CTAs | Pricing badge, Social proof, Checklist, Hero image | P0 |
| `app/services/page.tsx` | Remove Calendly, Update all tier CTAs | Remove misleading "popular" badge | P0 |
| `app/contact/page.tsx` | Remove intake form, Update to informational | Consolidate emails | P0 |
| `components/Navigation.tsx` | Update nav CTA to Atlas | Mobile CTA prominence | P0 |
| `components/Footer.tsx` | Update footer CTA | LinkedIn consolidation, Sitemap link | P1 |
| `components/MobileCTA.tsx` | Update to Atlas link | Ensure visibility | P1 |
| `components/ExitIntentPopup.tsx` | Remove Calendly | Update messaging | P1 |

### 3.2 Secondary Files (Should Update)

| File | Changes Required |
|------|------------------|
| `app/founder/page.tsx` | Update CTA to Atlas |
| `app/about/page.tsx` | Update CTA to Atlas |
| `app/faq/page.tsx` | Update CTA, Add Atlas FAQ |
| `app/compare/page.tsx` | Update CTA to Atlas |
| `app/sankofa-os/page.tsx` | Update CTA to Atlas |
| `app/partnerships/page.tsx` | Update CTA to Atlas |
| `app/locations/washington/page.tsx` | Update CTA to Atlas |
| `app/locations/washington/[city]/page.tsx` | Update all city page CTAs |
| `app/resources/primary-care-guide/page.tsx` | Update CTA, Keep as lead nurture |
| `app/blog/*.tsx` | Update CTAs in blog posts |

### 3.3 Files to Potentially Remove/Archive

| File | Reason | Action |
|------|--------|--------|
| `app/patient-forms/page.tsx` | PHI collection moves to Atlas | Convert to informational or redirect |
| `public/documents/telehealth-informed-consent.pdf` | Consent in Atlas | Archive, don't link |
| Any Formspree intake endpoints | PHI collection | Remove from code |

---

## PART 4: UPDATED COMPONENT SPECIFICATIONS

### 4.1 Primary CTA Button Component

```tsx
// components/PrimaryCTA.tsx (NEW FILE)
'use client'

import { ArrowRight } from 'lucide-react'

interface PrimaryCTAProps {
  variant?: 'default' | 'hero' | 'nav' | 'footer' | 'mobile'
  className?: string
}

const ATLAS_URL = 'https://sankofafamilymedicine.atlas.md/hub/login'

export default function PrimaryCTA({ variant = 'default', className = '' }: PrimaryCTAProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300'
  
  const variants = {
    default: 'px-8 py-4 bg-gradient-to-r from-sfm-gold to-sfm-gold-light text-sfm-navy shadow-lg shadow-sfm-gold/25 hover:shadow-xl hover:shadow-sfm-gold/40 hover:scale-[1.02]',
    hero: 'px-10 py-5 bg-gradient-to-r from-sfm-gold via-sfm-gold-light to-sfm-gold bg-[length:200%_100%] text-sfm-navy text-lg shadow-xl shadow-sfm-gold/30 hover:bg-[position:100%_0] hover:scale-[1.02]',
    nav: 'px-6 py-3 bg-gradient-to-r from-sfm-gold to-sfm-gold-light text-sfm-navy text-sm shadow-lg shadow-sfm-gold/25 hover:shadow-xl',
    footer: 'px-8 py-4 bg-sfm-gold text-sfm-navy hover:bg-sfm-gold-light',
    mobile: 'w-full py-4 bg-gradient-to-r from-sfm-gold to-sfm-gold-light text-sfm-navy text-center',
  }

  return (
    <a
      href={ATLAS_URL}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label="Become a patient at Sankofa Family Medicine"
    >
      <span>Become a Patient</span>
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </a>
  )
}
```

### 4.2 Updated Trust Indicators

```tsx
// components/TrustStrip.tsx — Update content
const trustItems = [
  { icon: Shield, label: 'HIPAA Compliant', detail: 'Secure patient portal' },
  { icon: Award, label: 'Board Certified', detail: 'Family Medicine' },
  { icon: GraduationCap, label: 'MUSC Graduate', detail: 'Published Researcher' },
  { icon: MapPin, label: 'Washington State', detail: 'Virtual statewide' },
]
```

### 4.3 Updated FAQ Content

Add to FAQ page:

```tsx
const newFAQs = [
  {
    q: 'How do I become a patient?',
    a: 'Click "Become a Patient" to access our secure patient portal. You will complete enrollment, provide your health history, and select your membership tier entirely within the portal. No phone calls or external forms required.',
  },
  {
    q: 'How do I communicate with Dr. Nkrumah?',
    a: 'All patient communication happens through secure messaging in your patient portal. This keeps your health information private and creates a complete record of our conversations. Video or phone visits are scheduled within the portal when clinically appropriate.',
  },
  {
    q: 'What is the patient portal?',
    a: 'Atlas is our HIPAA-compliant patient portal where you manage your entire healthcare relationship: enrollment, messaging, scheduling, visit documentation, and billing. It is the single secure hub for your care.',
  },
]
```

---

## PART 5: SEO & AI METADATA UPDATES

### 5.1 Updated Structured Data

```tsx
// app/layout.tsx — Update structuredData
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine',
  description: 'Virtual-first direct primary care practice serving Washington State. Medicine That Remembers.',
  url: 'https://sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: {
    '@type': 'State',
    name: 'Washington',
    addressCountry: 'US'
  },
  priceRange: '$149-$449/month',
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
  isAcceptingNewPatients: true,
  availableService: {
    '@type': 'MedicalProcedure',
    name: 'Virtual Primary Care',
    procedureType: 'Telemedicine'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sankofafamilymedicine.atlas.md/hub/login',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
    },
    result: {
      '@type': 'Reservation',
      name: 'Patient Enrollment'
    }
  },
  founder: {
    '@type': 'Physician',
    name: 'Dr. Yaw Nkrumah',
    honorificSuffix: 'MD',
    medicalSpecialty: 'FamilyMedicine',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Medical University of South Carolina'
    }
  }
}
```

### 5.2 Updated AI Metadata

```tsx
// app/layout.tsx — Update other metadata
other: {
  // ... existing fields ...
  
  // Updated for Atlas integration
  'llm-context': 'Sankofa Family Medicine is a virtual-first Direct Primary Care (DPC) practice founded by Dr. Yaw Nkrumah, MD. Patient enrollment, messaging, scheduling, and all clinical functions are handled through the Atlas patient portal. The website provides information about the practice but does not collect patient health information. To become a patient, visit the Atlas portal at sankofafamilymedicine.atlas.md.',
  
  'voice-search-answer': 'Sankofa Family Medicine is a virtual primary care practice serving Washington State. To become a patient, visit their website and click Become a Patient to access the secure enrollment portal. Membership starts at $149 per month.',
  
  // Action-oriented metadata
  'patient-enrollment-url': 'https://sankofafamilymedicine.atlas.md/hub/login',
  'enrollment-method': 'Online patient portal',
  'appointment-booking': 'Through patient portal only',
}
```

---

## PART 6: IMPLEMENTATION SEQUENCE

### Phase 1: Atlas Integration (Hours 1-3)
**Goal:** Remove all Calendly and external clinical functions

1. [ ] Create `components/PrimaryCTA.tsx` component
2. [ ] Update `app/page.tsx` — Replace all Calendly links
3. [ ] Update `components/Navigation.tsx` — Replace nav CTA
4. [ ] Update `app/services/page.tsx` — Replace tier CTAs
5. [ ] Update `app/contact/page.tsx` — Remove intake form
6. [ ] Update `components/MobileCTA.tsx` — Replace link
7. [ ] Update `components/ExitIntentPopup.tsx` — Replace or remove
8. [ ] Update `components/Footer.tsx` — Replace footer CTA
9. [ ] Global search for remaining Calendly/fit-call references

### Phase 2: Conversion Fixes (Hours 3-5)
**Goal:** Address critical and major conversion issues

1. [ ] Add pricing badge to homepage hero
2. [ ] Replace fake social proof with real trust indicators
3. [ ] Update hero image to dr-nkrumah-desk.png
4. [ ] Make self-assessment checklist functional
5. [ ] Reduce animation delays
6. [ ] Fix mobile CTA prominence

### Phase 3: Polish & Secondary Pages (Hours 5-7)
**Goal:** Update all secondary pages and polish

1. [ ] Update all location pages with Atlas CTA
2. [ ] Update blog posts with Atlas CTA
3. [ ] Update FAQ content with Atlas-specific questions
4. [ ] Consolidate email addresses
5. [ ] Fix LinkedIn footer display
6. [ ] Remove or fix sitemap link

### Phase 4: Testing & Validation (Hours 7-8)
**Goal:** Ensure nothing is broken

1. [ ] Test all CTA links point to Atlas
2. [ ] Verify no Calendly references remain
3. [ ] Test mobile navigation and CTA
4. [ ] Verify forms don't collect PHI
5. [ ] Run Lighthouse audit
6. [ ] Test all internal links
7. [ ] Validate structured data

---

## PART 7: POST-IMPLEMENTATION VERIFICATION

### 7.1 Automated Checks

```bash
# Verify no Calendly references
grep -r "calendly" --include="*.tsx" --include="*.ts" --include="*.css"
# Expected: 0 results

# Verify no "fit call" language
grep -ri "fit call" --include="*.tsx" --include="*.ts"
# Expected: 0 results

# Verify Atlas URL present
grep -r "atlas.md" --include="*.tsx" --include="*.ts"
# Expected: Multiple results in CTA components

# Verify no Formspree intake forms
grep -r "formspree" --include="*.tsx" --include="*.ts"
# Expected: Only in non-PHI contexts (newsletter, general contact)
```

### 7.2 Manual Verification Checklist

| Page | Atlas CTA Present | No Calendly | No PHI Collection |
|------|-------------------|-------------|-------------------|
| Homepage | [ ] | [ ] | [ ] |
| Services | [ ] | [ ] | [ ] |
| Contact | [ ] | [ ] | [ ] |
| About | [ ] | [ ] | [ ] |
| Founder | [ ] | [ ] | [ ] |
| FAQ | [ ] | [ ] | [ ] |
| Blog (each) | [ ] | [ ] | [ ] |
| Locations (each) | [ ] | [ ] | [ ] |
| Navigation | [ ] | [ ] | [ ] |
| Footer | [ ] | [ ] | [ ] |
| Mobile CTA | [ ] | [ ] | [ ] |
| Exit Popup | [ ] | [ ] | [ ] |

### 7.3 Performance Validation

| Metric | Target | Current | Post-V26 |
|--------|--------|---------|----------|
| Lighthouse Performance | >90 | TBD | TBD |
| Lighthouse Accessibility | >95 | TBD | TBD |
| LCP (Largest Contentful Paint) | <2.5s | TBD | TBD |
| CLS (Cumulative Layout Shift) | <0.1 | TBD | TBD |
| FID (First Input Delay) | <100ms | TBD | TBD |

---

## PART 8: HANDOFF DOCUMENTATION

### 8.1 For Next AI Session

**Critical Context:**
- Atlas is the ONLY clinical system
- Website is marketing/education ONLY
- All "Become a Patient" CTAs link to: `https://sankofafamilymedicine.atlas.md/hub/login`
- No PHI collection on website
- No Calendly, no intake forms, no "fit calls"

**Constants:**
```typescript
const ATLAS_PORTAL_URL = 'https://sankofafamilymedicine.atlas.md/hub/login'
const PRIMARY_CTA_TEXT = 'Become a Patient'
const PRACTICE_PHONE = '+1 (425) 285-7390'
const PRACTICE_EMAIL = 'info@sankofafamilymedicine.com'
```

**Brand Rules (Unchanged):**
- No em dashes
- Font: Cormorant Garamond
- Colors: Azure #05436e, Gold #bc9833, Navy #051c3b
- Voice: Quiet authority, clinical calm, no urgency theater

### 8.2 For Dr. Nkrumah

**What Changed:**
1. All patient enrollment now goes through Atlas portal
2. Removed Calendly scheduling links
3. Removed "fit call" language
4. Website no longer collects patient health information
5. Primary CTA is now "Become a Patient" linking to Atlas

**What You Need to Ensure in Atlas:**
- Patient signup workflow is complete
- Demographics collection is ready
- Secure messaging is enabled
- Membership billing is configured
- Welcome sequence is in place

**Website Still Handles:**
- Practice information and positioning
- Services and pricing explanation
- Educational content (blog, guides)
- General contact inquiries (non-clinical)
- Lead nurturing through content

---

## APPENDIX A: COMPLETE CTA REPLACEMENT MAP

| Current CTA Text | New CTA Text | Link Destination |
|------------------|--------------|------------------|
| Book a 15-Minute Fit Call | Become a Patient | Atlas portal |
| Schedule Your Fit Call | Become a Patient | Atlas portal |
| Book a Visit | Become a Patient | Atlas portal |
| Schedule an Appointment | Become a Patient | Atlas portal |
| Get Started | Become a Patient | Atlas portal |
| New Patient Intake | Become a Patient | Atlas portal |
| Request Care | Become a Patient | Atlas portal |
| Join as a Founding Member | Become a Patient | Atlas portal |
| Start Your Journey | Become a Patient | Atlas portal |
| Book Your Consultation | Become a Patient | Atlas portal |

**Secondary CTAs (Keep as-is, internal links only):**
- Learn More → Internal pages
- How It Works → /about
- View Membership Options → /services
- Read the Guide → /resources/primary-care-guide
- Explore Services → /services
- Contact Us → /contact

---

## APPENDIX B: REMOVED CONTENT ARCHIVE

The following content is being removed. Archive for reference:

```tsx
// ARCHIVED: Calendly Fit Call CTA (previously in multiple files)
<a 
  href="https://calendly.com/nkrumah-ndchvision/15-minute-fit-call"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Book a 15-Minute Fit Call
</a>

// ARCHIVED: Fit Call Clarification Text
<p className="text-white/40 text-xs mt-3">
  This is a brief, non-clinical call to ensure alignment before enrollment.
</p>

// ARCHIVED: Fake Social Proof
<div className="mt-8 flex items-center justify-center gap-2 text-white/30 text-xs">
  <span className="flex -space-x-2">
    <span className="w-6 h-6 rounded-full bg-white/20 border border-white/30" />
    <span className="w-6 h-6 rounded-full bg-white/15 border border-white/30" />
    <span className="w-6 h-6 rounded-full bg-white/10 border border-white/30" />
  </span>
  <span>Professionals across Washington are joining</span>
</div>
```

---

**Document Version:** 1.0  
**Created:** December 31, 2025  
**Author:** Claude (AI Assistant)  
**For:** Dr. Yaw Nkrumah, Sankofa Family Medicine  
**Classification:** Internal Development Document

---

*End of V26 Master Implementation Plan*
