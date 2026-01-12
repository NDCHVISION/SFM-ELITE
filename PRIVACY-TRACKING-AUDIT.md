# Privacy & Tracking Audit Report
## Sankofa Family Medicine Website

**Audit Date:** January 2026  
**Auditor:** Automated Compliance Review  
**Website:** sankofafamilymedicine.com

---

## Executive Summary

This audit identifies all tracking scripts, analytics tools, and data collection mechanisms present on the Sankofa Family Medicine website. The audit also evaluates the cookie consent implementation and Privacy Policy compliance.

---

## 1. Detected Tracking Scripts & Analytics Tools

### 1.1 Google Analytics 4 (GA4)

| Property | Value |
|----------|-------|
| **Status** | Configured but script not loaded |
| **Measurement ID** | G-V9M27XXYYB |
| **Purpose** | Website analytics, user behavior tracking, conversion optimization |
| **Data Collected** | Page views, events, user engagement, device info, referral sources |

**File Locations:**
- CSP Headers: `next.config.js` (lines 64, 68)
- Analytics Functions: `lib/analytics.ts`
- Consent Integration: `components/CookieConsent.tsx`

**Current Implementation Notes:**
- Content Security Policy (CSP) headers allow Google Analytics domains
- Analytics utility functions exist (`lib/analytics.ts`) but GA4 script tag is not present
- Cookie consent banner references `gtag` but script must be added for full implementation

### 1.2 Formspree (Form Handling)

| Property | Value |
|----------|-------|
| **Status** | Active |
| **Purpose** | Form submission handling (no advertising/analytics) |
| **Data Collected** | Name, email, message content, form metadata |

**Endpoints:**
| Form | Endpoint ID | URL |
|------|-------------|-----|
| Contact Form | manrdjgv | https://formspree.io/f/manrdjgv |
| Expansion Request | manrdjgv | https://formspree.io/f/manrdjgv |
| State Waitlist | manrdjgv | https://formspree.io/f/manrdjgv |
| Blog Subscription | xjgbllpe | https://formspree.io/f/xjgbllpe |
| Primary Care Guide | xjgbllpe | https://formspree.io/f/xjgbllpe |
| Exit Intent Popup | manrdjgv | https://formspree.io/f/manrdjgv |

**File Locations:**
- `app/contact/page.tsx`
- `app/locations/request/page.tsx`
- `app/locations/expansion/page.tsx`
- `app/locations/south-carolina/page.tsx`
- `app/blog/page.tsx`
- `app/resources/primary-care-guide/page.tsx`
- `components/ExitIntentPopup.tsx`
- `lib/config.ts`

### 1.3 Vercel (Hosting Platform)

| Property | Value |
|----------|-------|
| **Status** | Active (Hosting) |
| **Purpose** | Website hosting and deployment |
| **Analytics** | May be enabled via Vercel dashboard (not in codebase) |

**Note:** Vercel may collect basic server-side analytics. Check Vercel dashboard for settings.

---

## 2. Local Storage & Cookies

### 2.1 First-Party Storage (localStorage)

| Key | Purpose | Category |
|-----|---------|----------|
| `sfm-cookie-consent` | User's cookie consent choice ('all' or 'essential') | Essential |
| `sfm-cookie-consent-date` | Timestamp when consent was given | Essential |
| `sfm-theme` | User's theme preference (dark/light mode) | Essential |
| `sfm-state-preference` | User's preferred state for emergency resources | Essential |

**File Locations:**
- `components/CookieConsent.tsx` (consent storage)
- `components/ThemeProvider.tsx` (theme storage)
- `app/emergency/page.tsx` (state preference)

### 2.2 Third-Party Cookies

| Service | Cookie Types | Category |
|---------|--------------|----------|
| Google Analytics | `_ga`, `_ga_*`, `_gid` | Analytics (when implemented) |
| Formspree | Session cookies | Functional |

---

## 3. Cookie Consent Banner Analysis

### 3.1 Current Implementation

**Location:** `components/CookieConsent.tsx`  
**Loaded in:** `app/layout.tsx`

**Features:**
- ✅ Appears on first visit (1.5 second delay)
- ✅ Two clear choices: "Accept All" and "Essential Only"
- ✅ Links to Privacy Policy
- ✅ Close button defaults to "Essential Only" (privacy-friendly)
- ✅ Stores consent in localStorage with timestamp
- ✅ Integrates with GA4 consent mode (when GA4 is fully implemented)

**Banner Text:**
> "We use cookies to improve your experience and analyze site traffic. By clicking 'Accept All', you consent to our use of cookies. Read our Privacy Policy to learn more."

### 3.2 Compliance Assessment

| Requirement | Status | Notes |
|-------------|--------|-------|
| Loads before non-essential cookies | ✅ Compliant | GA4 script not loaded by default |
| Clear opt-in/opt-out options | ✅ Compliant | Accept All / Essential Only buttons |
| Link to Privacy Policy | ✅ Compliant | Links to /privacy |
| Records consent choice | ✅ Compliant | localStorage with timestamp |
| Allows withdrawal of consent | ⚠️ Partial | No UI to change preference after initial choice |

### 3.3 Recommendations

1. **Add Consent Management Link:** Add a "Cookie Settings" link in footer to allow users to change their consent choice
2. **Implement GA4 Script Loading:** The GA4 script should be conditionally loaded based on consent
3. **Consider Consent Mode V2:** Google's enhanced consent mode for better compliance

---

## 4. Privacy Policy Analysis

### 4.1 Current Content Review (`app/privacy/page.tsx`)

| Required Disclosure | Present | Notes |
|---------------------|---------|-------|
| What information is collected | ✅ Yes | Personal info and automatic data listed |
| How information is used | ✅ Yes | General purposes listed |
| Data protection measures | ✅ Yes | Technical and administrative safeguards |
| HIPAA compliance | ✅ Yes | Comprehensive section |
| User rights | ✅ Yes | Access, correction, deletion, opt-out |
| Contact information | ✅ Yes | Email and phone provided |
| **Specific tracking tools** | ❌ No | Missing |
| **Google Analytics disclosure** | ❌ No | Missing |
| **Formspree disclosure** | ❌ No | Missing |
| **Vercel hosting disclosure** | ❌ No | Missing |
| **Cookie consent process** | ❌ No | Missing |
| **How to withdraw consent** | ❌ No | Missing |
| **Links to vendor privacy policies** | ❌ No | Missing |

### 4.2 Required Additions

The Privacy Policy needs a new section titled "Website Analytics and Tracking" that includes:
- Description of Google Analytics usage
- Description of Formspree for form handling
- Description of Vercel for hosting
- Explanation of cookie consent process
- Instructions for withdrawing consent
- Links to third-party privacy policies

---

## 5. Recommended Privacy Policy Section

### Draft Text for "Website Analytics and Cookies" Section

The following text should be added to the Privacy Policy page:

---

**Website Analytics and Tracking**

To improve our website and understand how visitors use our services, we use the following technologies:

**Google Analytics 4**

We use Google Analytics 4 (GA4), a web analytics service provided by Google LLC. GA4 uses cookies and similar technologies to collect information about website usage, including:
- Pages visited and time spent on each page
- How you arrived at our website (referral source)
- Your general geographic location (country/city level)
- Device type, browser, and operating system
- Interactions with website features

This information helps us understand how visitors use our website so we can improve your experience. **We do not use this data for advertising purposes.** Google Analytics data is used solely for website performance analysis and user experience optimization.

Google may transfer and store this data on servers in the United States. For more information about how Google handles this data, please see [Google's Privacy Policy](https://policies.google.com/privacy) and [Google Analytics Terms of Service](https://marketingplatform.google.com/about/analytics/terms/us/).

**Form Handling (Formspree)**

Contact forms and subscription forms on our website are processed by Formspree, a form handling service. When you submit a form, Formspree securely transmits your submission (name, email, and message) to us. Formspree does not use your information for marketing purposes. For more information, see [Formspree's Privacy Policy](https://formspree.io/legal/privacy-policy/).

**Hosting (Vercel)**

Our website is hosted on Vercel's platform. Vercel may collect basic server logs including IP addresses for security and performance purposes. For more information, see [Vercel's Privacy Policy](https://vercel.com/legal/privacy-policy).

**Your Cookie Choices**

When you first visit our website, a cookie consent banner appears allowing you to choose:
- **Accept All:** Enables analytics cookies in addition to essential cookies
- **Essential Only:** Only cookies required for basic website functionality

You can change your cookie preferences at any time by clicking "Cookie Settings" in the footer of any page, or by clearing your browser's cookies and revisiting our website.

**How to Withdraw Consent**

You may withdraw your consent to analytics tracking at any time by:
1. Clicking "Cookie Settings" in the website footer
2. Clearing cookies in your browser settings
3. Installing browser extensions that block analytics tracking
4. Contacting us at info@sankofafamilymedicine.com

---

## 6. Technical Recommendations

### 6.1 High Priority

1. **Implement GA4 Script with Consent Mode**
   - Add GA4 script tag to layout with consent mode default to 'denied'
   - Update CookieConsent component to properly initialize and update consent

2. **Add Cookie Settings Footer Link**
   - Allow users to change their cookie preferences after initial choice

3. **Update Privacy Policy**
   - Add the "Website Analytics and Cookies" section above

### 6.2 Medium Priority

4. **Add Cookie Details Modal**
   - Provide detailed information about each cookie category

5. **Implement Data Retention Policy**
   - Document how long analytics data is retained

### 6.3 Low Priority

6. **Consider CCPA Compliance**
   - For California users, consider "Do Not Sell" requirements

7. **Add Privacy Settings Page**
   - Dedicated page for privacy controls and preferences

---

## 7. Compliance Summary

| Standard | Status | Notes |
|----------|--------|-------|
| U.S. Privacy Standards | ⚠️ Mostly Compliant | Minor updates needed |
| GDPR (Optional for U.S.) | ⚠️ Partial | Cookie consent present; policy updates needed |
| HIPAA | ✅ Compliant | No PHI collected on website |
| CCPA | ⚠️ Partial | No "Do Not Sell" option (may not be required) |

---

## 8. File Reference Summary

| File | Tracking-Related Content |
|------|-------------------------|
| `next.config.js` | CSP headers for GA and Formspree |
| `lib/analytics.ts` | GA4 event tracking utility functions |
| `lib/config.ts` | Formspree endpoint configuration |
| `components/CookieConsent.tsx` | Cookie consent banner |
| `components/ThemeProvider.tsx` | Theme preference storage |
| `app/privacy/page.tsx` | Privacy Policy page |
| `app/layout.tsx` | Root layout with CookieConsent |

---

**End of Audit Report**

*This audit should be reviewed periodically and updated whenever tracking technologies or data collection practices change.*
