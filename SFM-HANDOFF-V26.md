# SFM WEBSITE V26 HANDOFF DOCUMENT

**Version:** 26.0.0  
**Date:** December 31, 2025  
**Status:** Implementation Complete (Core Files)  
**Purpose:** AI Session Continuity

---

## CRITICAL CONTEXT FOR NEXT AI SESSION

### The One Rule That Governs Everything

> **Atlas is the only clinical system. The website is marketing and education only.**

If you remember nothing else, remember this. All patient-related actions (enrollment, messaging, scheduling, visits, billing) happen through Atlas. The website explains the practice but never collects PHI or schedules appointments.

---

## CONSTANTS (Do Not Change Without Authorization)

```typescript
// Patient Portal URL - THE ONLY clinical action endpoint
const ATLAS_PORTAL_URL = 'https://sankofafamilymedicine.atlas.md/hub/login'

// Primary CTA Text - MANDATORY across entire site
const PRIMARY_CTA_TEXT = 'Become a Patient'

// Practice Contact (for general inquiries only)
const PRACTICE_PHONE = '+1 (425) 285-7390'
const PRACTICE_EMAIL = 'info@sankofafamilymedicine.com'

// Brand Colors (immutable)
const COLORS = {
  azure: '#05436e',      // Primary
  white: '#FFFFFF',      // Primary  
  gold: '#bc9833',       // Accent
  navy: '#051c3b',       // Alternate
  black: '#070705',      // Alternate
}

// Typography (immutable)
const FONT = 'Cormorant Garamond'
```

---

## WHAT WAS CHANGED IN V26

### 1. Atlas Integration (Structural)

| Change | Before | After |
|--------|--------|-------|
| Primary CTA | "Book a 15-Minute Fit Call" → Calendly | "Become a Patient" → Atlas |
| Navigation CTA | Calendly link | Atlas portal link |
| Footer CTA | Calendly link | Atlas portal link |
| Mobile CTA | Calendly link | Atlas portal link |
| Contact Page | Intake form with PHI | Informational only |

### 2. Conversion Fixes (UX)

| Issue | Fix Applied |
|-------|-------------|
| No pricing above fold | Added pricing badge to hero |
| Fake social proof | Replaced with real trust indicators |
| Wrong hero image | Changed to dr-nkrumah-desk.png |
| Non-functional checklist | Made interactive with state |
| Sparse blog section | Added third article slot |

### 3. Removed Items

- All Calendly references
- "Fit call" / "Alignment call" language
- Intake form on contact page
- Fake avatar social proof
- Excessive animation delays

---

## FILES CREATED/MODIFIED IN V26

### New Files

| File | Purpose |
|------|---------|
| `components/PrimaryCTA.tsx` | Centralized CTA component with Atlas URL |
| `app/home-page-client.tsx` | Homepage client component with all fixes |
| `SFM-V26-MASTER-PLAN.md` | Complete implementation documentation |

### Modified Files

| File | Changes |
|------|---------|
| `app/page.tsx` | Uses new client component, updated metadata |
| `components/Navigation.tsx` | Atlas CTA, removed Calendly |
| `components/Footer.tsx` | Atlas CTA, fixed LinkedIn, removed sitemap.xml link |
| `components/MobileCTA.tsx` | Atlas CTA |

### Files Still Needing Updates

These files still have Calendly references that need updating:

| File | Priority |
|------|----------|
| `app/services/page.tsx` | P0 |
| `app/contact/page.tsx` | P0 |
| `app/founder/page.tsx` | P1 |
| `app/about/page.tsx` | P1 |
| `app/faq/page.tsx` | P1 |
| `app/compare/page.tsx` | P1 |
| `components/ExitIntentPopup.tsx` | P1 |
| All location pages | P2 |
| All blog posts | P2 |

---

## BRAND RULES (Unchanged)

1. **No em dashes** - Use commas, periods, or semicolons instead
2. **Font: Cormorant Garamond** - Display and body text
3. **Voice: Quiet authority** - No urgency theater, no marketing hype
4. **Trademark usage** - "Medicine That Remembers™" with proper ™ symbol
5. **Color compliance** - Exact hex values only, no variations

---

## COMMUNICATION MODEL

### Website Communication (Allowed)
- General practice information
- Email for non-clinical inquiries: info@sankofafamilymedicine.com
- Phone for general questions: +1 (425) 285-7390

### Clinical Communication (Atlas Only)
- All patient messaging through portal
- Video/phone visits scheduled in Atlas
- No off-platform clinical communication implied

**Standard messaging to use:**
> "Once enrolled, communicate with Dr. Nkrumah through secure messaging in your patient portal. Video or phone visits are scheduled within Atlas when clinically appropriate."

---

## CTA REPLACEMENT REFERENCE

When updating any file, use this mapping:

| If You See | Replace With |
|------------|--------------|
| `Book a 15-Minute Fit Call` | `Become a Patient` |
| `Schedule Your Fit Call` | `Become a Patient` |
| `Book a Visit` | `Become a Patient` |
| `Schedule an Appointment` | `Become a Patient` |
| `Get Started` | `Become a Patient` |
| `calendly.com/...` | `{ATLAS_PORTAL_URL}` |
| `target="_blank"` on CTAs | Remove (Atlas opens in same tab) |

---

## TESTING CHECKLIST

Before deploying V26, verify:

```bash
# No Calendly references remain
grep -r "calendly" --include="*.tsx" --include="*.ts"
# Expected: 0 results

# No "fit call" language
grep -ri "fit call" --include="*.tsx" --include="*.ts"
# Expected: 0 results

# Atlas URL is present
grep -r "atlas.md" --include="*.tsx" --include="*.ts"
# Expected: Multiple results

# PrimaryCTA component used
grep -r "PrimaryCTA" --include="*.tsx"
# Expected: Multiple imports
```

---

## STRUCTURED DATA CHANGES

The homepage schema now includes:

```json
{
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://sankofafamilymedicine.atlas.md/hub/login",
      "actionPlatform": ["DesktopWebPlatform", "MobileWebPlatform"]
    },
    "result": {
      "@type": "Reservation",
      "name": "Patient Enrollment"
    }
  }
}
```

---

## AI METADATA CHANGES

New metadata fields added:

```tsx
'patient-enrollment-url': 'https://sankofafamilymedicine.atlas.md/hub/login',
'enrollment-method': 'Online patient portal',
'appointment-booking': 'Through patient portal only',
```

Updated LLM context:
> "Patient enrollment, messaging, scheduling, and all clinical functions are handled through the Atlas patient portal. The website provides information about the practice but does not collect patient health information."

---

## NEXT STEPS FOR IMPLEMENTATION

### Immediate (P0)
1. Update `app/services/page.tsx` with Atlas CTAs
2. Update `app/contact/page.tsx` to remove intake form
3. Update `components/ExitIntentPopup.tsx` or remove entirely

### Short-term (P1)
4. Update all "About" section pages
5. Update FAQ with Atlas-specific questions
6. Test all navigation paths

### Medium-term (P2)
7. Update all location pages
8. Update all blog post CTAs
9. Full accessibility audit
10. Performance testing

---

## FOR DR. NKRUMAH

### What Changed
- Website no longer schedules appointments or collects health information
- All "Book a Fit Call" buttons now say "Become a Patient" and go to Atlas
- Contact form simplified to general inquiries only

### What You Need Ready in Atlas
- [ ] Patient signup workflow configured
- [ ] Demographics collection enabled
- [ ] Secure messaging active
- [ ] Membership tier billing set up
- [ ] Welcome sequence for new patients

### Website Still Handles
- Practice information and positioning
- Educational content (blog, guides, FAQs)
- General contact inquiries
- Lead nurturing through content downloads

---

## DOCUMENT VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 26.0.0 | 2025-12-31 | Initial Atlas integration, conversion fixes |

---

*End of V26 Handoff Document*

**Next AI Session:** Start by reviewing this document and the `SFM-V26-MASTER-PLAN.md` file for complete context.
