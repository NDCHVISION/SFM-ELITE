# SFM V27 HANDOFF DOCUMENT
## Conversion Optimization Update
### December 31, 2025

---

## CHANGES SUMMARY

This version implements critical conversion optimization fixes identified in the website audit.

### Critical Fixes Implemented

1. **Unified CTAs Across All Pages**
   - All primary CTAs now point to Atlas Portal (`https://sankofafamilymedicine.atlas.md/hub/login`)
   - Button text standardized to "Become a Patient" or "Select This Plan"
   - Removed all Calendly "Book a 15-Minute Fit Call" references from main conversion paths

2. **Navigation Price Anchor**
   - Services dropdown now shows "From $149/month" instead of "Pricing and tiers"
   - Added "Founding Rates" badge to Membership Plans link
   - Badge support added to dropdown rendering

3. **Urgency Signals Added**
   - New founding member alert banner above pricing cards on services page
   - Green pulse indicators with "Founding Member Enrollment Open" messaging
   - Link to founding member benefits FAQ

4. **Footer CTA Repositioned**
   - Primary CTA moved to top of footer (above link columns)
   - Enhanced styling with glass-premium effect and gradient background
   - Added founding member messaging

5. **FAQ Schema Added**
   - New FAQPage schema on services page for rich snippets
   - 5 comprehensive FAQs with structured data markup
   - Complements existing MedicalBusiness and OfferCatalog schemas

6. **ExitIntentPopup Updated**
   - Now links to Atlas Portal instead of Calendly
   - Updated messaging to focus on enrollment

7. **Centralized Configuration**
   - Created `lib/config.ts` for single source of truth on URLs
   - All external URLs, contact info, and brand constants centralized
   - PrimaryCTA component now imports from config

---

## FILES CHANGED

### New Files
- `lib/config.ts` - Centralized configuration

### Modified Files
- `components/PrimaryCTA.tsx` - Now imports from config
- `components/Navigation.tsx` - Price anchor and badge support
- `components/Footer.tsx` - CTA repositioned to top
- `components/ExitIntentPopup.tsx` - Atlas Portal integration
- `app/services/page.tsx` - Unified CTAs, urgency banner
- `app/services/layout.tsx` - FAQ schema added
- `app/faq/layout.tsx` - Updated FAQ answer

### Bulk Updates (26 files)
- All Calendly URLs replaced with Atlas Portal URL
- "Book a 15-Minute Fit Call" text replaced with "Become a Patient"

---

## BRAND COMPLIANCE

✅ Zero em dashes (verified)
✅ Cormorant Garamond font maintained
✅ Color palette consistent (#05436e, #bc9833, #051c3b, #FFFFFF, #070705)
✅ Build compiles successfully (43 static pages)
✅ No breaking changes to existing functionality

---

## CONVERSION PATH (UNIFIED)

All primary CTAs now follow this path:

```
User clicks "Become a Patient" → Atlas Portal (https://sankofafamilymedicine.atlas.md/hub/login)
```

Secondary options:
- "Questions? Contact Us" → /contact page
- "Get Updates" → Email capture forms (Formspree)

---

## SEO IMPROVEMENTS

1. **FAQ Schema** - Rich snippets for pricing FAQs
2. **Price anchoring** - $149/month visible in navigation
3. **Consistent meta** - All pages maintain proper schema markup

---

## TESTING CHECKLIST

- [ ] Homepage CTAs → Atlas Portal
- [ ] Services page CTAs → Atlas Portal
- [ ] Navigation dropdown shows price
- [ ] Footer CTA at top
- [ ] Exit intent popup → Atlas Portal
- [ ] All blog article CTAs → Atlas Portal
- [ ] All location page CTAs → Atlas Portal
- [ ] Mobile navigation CTA → Atlas Portal
- [ ] Build compiles without errors
- [ ] No em dashes in output

---

## NEXT STEPS (RECOMMENDED)

1. **A/B Test** - Monitor conversion rates pre/post unified CTA
2. **Heatmap Analysis** - Track where users click on pricing page
3. **Form Analytics** - Verify Atlas Portal enrollment completion rates
4. **Schema Validation** - Test with Google Rich Results Test

---

## ROLLBACK INSTRUCTIONS

If needed, the Calendly URL is preserved in `lib/config.ts`:
```tsx
calendly: 'https://calendly.com/nkrumah-ndchvision/15-minute-fit-call',
```

To restore, update `ATLAS_PORTAL_URL` to import `calendly` instead of `atlas` from config.

---

*Version 27.0.0*
*Conversion Optimization Update*
*December 31, 2025*
