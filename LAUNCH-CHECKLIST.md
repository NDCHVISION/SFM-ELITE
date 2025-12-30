# SANKOFA FAMILY MEDICINE
## Launch Execution Checklist
### 14-Day Sprint to First Patient

---

## CURRENT STATUS TRACKER

| Category | Status | Action |
|----------|--------|--------|
| Documentation | ✅ 100% (63+ docs) | Done |
| Legal/Corporate | ✅ Complete | Done |
| Website | ✅ V9 Final Ready | Deploy today |
| DEA Registration | ⬜ Not started | START TODAY |
| HIPAA BAA (Email) | ⬜ Not accepted | 10 minutes |
| EMR | ⏳ Demos scheduled | Select this weekend |
| Labs | ⬜ Not credentialed | Call this weekend |
| Billing (Stripe) | ⬜ Not setup | Setup tomorrow |
| MA Hire | ⬜ Not posted | Post today |
| Social Media | ⏳ Profiles exist | Content needed |
| Paid Ads | ⬜ Not started | Launch Dec 30 |

---

## PHASE 1: TODAY (Foundation Day)

### Hour 1: DEA Registration (CRITICAL)

**Why First:** Cannot prescribe controlled substances without it. 4-6 week processing.

- [ ] Navigate to: https://deadiversion.usdoj.gov/online_forms_apps.html
- [ ] Click "New Application"
- [ ] Select "Practitioner" application type
- [ ] Complete DEA Form 224:
  - [ ] Personal information
  - [ ] Medical license number (WA)
  - [ ] Practice address: 522 W. Riverside Ave, Spokane, WA 99201
  - [ ] Drug schedules: Select II, IIN, III, IIIN, IV, V
  - [ ] Business activity: Practitioner
- [ ] Pay fee: **$888** (3-year registration)
- [ ] Save confirmation number: ________________
- [ ] Save receipt/confirmation email
- [ ] Note expected completion date: ________________ (4-6 weeks)

**Note:** You CAN prescribe non-controlled medications immediately. DEA only needed for Schedule II-V.

---

### Hour 2: Email Security + Website Launch

#### HIPAA BAA Acceptance (10 min)
- [ ] Go to: **admin.google.com**
- [ ] Click: Account > Account settings
- [ ] Click: Legal and compliance
- [ ] Find: Business Associate Amendment
- [ ] Click: **Review and Accept**
- [ ] Screenshot confirmation
- [ ] Save to compliance folder

#### Website Deployment (20 min)
- [ ] Open terminal/command line
- [ ] Navigate to V9 Final folder
- [ ] Run: `npm install`
- [ ] Run: `npm run build`
- [ ] Run: `vercel --prod` (or push to GitHub if connected)
- [ ] Wait for deployment (2-3 min)
- [ ] Note deployment URL: ________________

#### Post-Deployment Verification (15 min)
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits (Formspree)
- [ ] Waitlist form submits
- [ ] Mobile responsive (check on phone)
- [ ] Images loading
- [ ] Favicon showing
- [ ] SSL certificate active (https://)
- [ ] Dark mode toggle works

#### Analytics Verification (5 min)
- [ ] Open Google Analytics (analytics.google.com)
- [ ] Go to Real-time report
- [ ] Open website in another tab
- [ ] Confirm your visit appears
- [ ] GA Property ID: G-V9M27XXYYB ✓

---

### Hour 3: Lead Capture Automation (n8n)

#### Step 1: Create CRM (Google Sheet)
- [ ] Go to: sheets.google.com
- [ ] Create new spreadsheet: **"SFM Lead Tracker"**
- [ ] Rename Sheet1 to: "Leads"
- [ ] Add headers in Row 1:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Message | Source | Status | Next Action | Notes |

- [ ] Add data validation for Status column (G):
  - New
  - Contacted
  - Discovery Scheduled
  - Discovery Completed
  - Enrolled
  - Not Interested
  - Future Follow-up
- [ ] Format as table
- [ ] Share with your email (edit access)
- [ ] Copy Sheet ID from URL: ________________

#### Step 2: Build n8n Workflow
- [ ] Open n8n dashboard
- [ ] Click: "Add Workflow"
- [ ] Name: "SFM Lead Capture"

**Node 1: Webhook**
- [ ] Add node: Webhook
- [ ] HTTP Method: POST
- [ ] Path: `/formspree-lead`
- [ ] Authentication: None
- [ ] Click: "Listen for Test Event" (keep open)
- [ ] Copy Production URL: ________________

**Node 2: Set Fields**
- [ ] Add node: Set
- [ ] Connect from Webhook
- [ ] Add field mappings for timestamp, name, email, phone, message, source, status

**Node 3: Google Sheets**
- [ ] Add node: Google Sheets
- [ ] Connect from Set
- [ ] Operation: Append Row
- [ ] Connect Google account (OAuth)
- [ ] Document: SFM Lead Tracker
- [ ] Sheet: Leads

**Node 4: Email Notification**
- [ ] Add node: Send Email (or Gmail)
- [ ] Connect from Google Sheets
- [ ] To: your email
- [ ] Subject: `New SFM Lead: [name]`

#### Step 3: Connect Formspree
- [ ] Go to: formspree.io/forms/manrdjgv
- [ ] Click: Settings
- [ ] Click: Plugins > Webhooks
- [ ] Add URL: [your n8n webhook URL]
- [ ] Save

#### Step 4: Test
- [ ] Go to your live website
- [ ] Fill out contact form with test data
- [ ] Submit
- [ ] Verify:
  - [ ] Google Sheet has new row
  - [ ] Email notification received
  - [ ] All fields populated correctly
- [ ] Delete test row from sheet

#### Step 5: Activate
- [ ] In n8n, toggle workflow: **Active**
- [ ] Save workflow

---

### Hour 4: Job Posting + Social Media Setup

#### MA Job Posting (20 min)

**Indeed.com**
- [ ] Go to: indeed.com/hire
- [ ] Create job posting:
  - Title: Virtual Medical Assistant - Remote (Part-Time)
  - Company: Sankofa Family Medicine
  - Location: Remote (must be US-based)
  - Job Type: Part-time (15-25 hours/week)
  - Pay: $18-25/hour (based on experience)
- [ ] Post job
- [ ] Note job ID: ________________

#### Social Media Content Prep (40 min)
- [ ] LinkedIn Company Page: linkedin.com/company/109183000/
- [ ] Schedule 3 launch announcement posts
- [ ] Prepare "We're Live" graphic
- [ ] Draft founding member announcement

---

## PHASE 2: THIS WEEKEND

### Saturday: EMR + Billing

#### EMR Selection
- [ ] Complete scheduled demos
- [ ] Evaluate based on:
  - [ ] Telemedicine integration
  - [ ] E-prescribing (including controlled)
  - [ ] Patient portal
  - [ ] Lab integration
  - [ ] Pricing
- [ ] Make final selection: ________________
- [ ] Sign contract
- [ ] Begin onboarding

#### Stripe Setup
- [ ] Go to: dashboard.stripe.com
- [ ] Complete business verification
- [ ] Add bank account for payouts
- [ ] Create products:
  - [ ] Continuity Care - $149/month
  - [ ] Precision Care - $249/month
  - [ ] Legacy Health - $449/month
  - [ ] Founding Member - $249/month (Tier 3 benefits)
- [ ] Set up subscription billing
- [ ] Test checkout flow
- [ ] Note API keys: ________________

### Sunday: Labs + Content

#### Lab Partnerships
- [ ] Quest Diagnostics: 1-866-697-8378
  - [ ] Request provider credentialing packet
  - [ ] Complete application
  - [ ] Note account number: ________________
- [ ] Labcorp: 1-800-845-6167
  - [ ] Request provider credentialing packet
  - [ ] Complete application
  - [ ] Note account number: ________________

#### Social Media Content Creation
- [ ] Create 12+ posts for first 2 weeks:
  - [ ] 4 educational posts
  - [ ] 4 practice introduction posts
  - [ ] 2 founding member offer posts
  - [ ] 2 Dr. Nkrumah personal posts
- [ ] Schedule in SocialBee or Buffer
- [ ] Prepare launch day content

---

## PHASE 3: MONDAY (LAUNCH DAY)

### Morning (8-10 AM)

#### Final Checks
- [ ] Website live and working
- [ ] Forms submitting to CRM
- [ ] Phone forwarding active
- [ ] Email autoresponders set
- [ ] Calendar booking enabled

#### Launch Sequence
- [ ] Post announcement on LinkedIn
- [ ] Send email to personal network
- [ ] Activate Google Ads campaign
- [ ] Activate Meta Ads campaign
- [ ] Monitor lead tracker

### Afternoon (12-5 PM)

#### Respond to Leads
- [ ] Check CRM every 2 hours
- [ ] Send welcome emails within 2 hours of submission
- [ ] Schedule discovery calls
- [ ] Update lead statuses

---

## PHASE 4: WEEK 1

### Daily Tasks
- [ ] Check and respond to all leads (2-hour max response)
- [ ] Monitor ad performance
- [ ] Post 1x on LinkedIn
- [ ] Review analytics

### By End of Week 1
- [ ] 5+ discovery calls scheduled
- [ ] 1+ patient enrolled (target)
- [ ] Ad campaigns optimized
- [ ] Email sequence built and active

---

## PHASE 5: WEEKS 2-4

### Week 2 Goals
- [ ] 10+ discovery calls completed
- [ ] 3+ patients enrolled
- [ ] MA interviewed and hired
- [ ] Referral program launched

### Week 3 Goals
- [ ] 5+ patients enrolled
- [ ] First patient visits completed
- [ ] Testimonial requests sent
- [ ] Employer outreach started

### Week 4 Goals
- [ ] 8+ patients enrolled
- [ ] Monthly recurring revenue: $2,000+
- [ ] Systems running smoothly
- [ ] Planning Month 2

---

## KEY CONTACTS AND RESOURCES

### Vendors

| Vendor | Contact | Account # | Notes |
|--------|---------|-----------|-------|
| Vercel | - | - | Website hosting |
| Formspree | manrdjgv | - | Contact forms |
| Google Analytics | G-V9M27XXYYB | - | Analytics |
| Google Ads | - | - | Paid search |
| Meta Ads | - | - | Paid social |
| Stripe | - | - | Payments |
| SocialBee | (NDCH) | - | Social scheduling |
| n8n | (server) | - | Automation |
| EMR | - | - | TBD |
| Quest | 1-866-697-8378 | - | Labs |
| Labcorp | 1-800-845-6167 | - | Labs |

### Important Links

| Resource | URL |
|----------|-----|
| Website | sankofafamilymedicine.com |
| LinkedIn Company | linkedin.com/company/109183000/ |
| DEA Application | deadiversion.usdoj.gov |
| Google Workspace Admin | admin.google.com |
| Stripe Dashboard | dashboard.stripe.com |
| Google Ads | ads.google.com |
| Meta Business | business.facebook.com |
| Google Analytics | analytics.google.com |
| Google Business Profile | business.google.com |

---

## REVENUE TARGETS

| Milestone | Patients | Monthly Revenue |
|-----------|----------|-----------------|
| Month 1 | 8 | $2,000 |
| Month 3 | 25 | $6,250 |
| Month 6 | 50 | $12,500 |
| Month 12 | 100 | $25,000 |
| Month 24 | 200 | $52,000 |

**Goal:** First paying patient by January 8, 2025
**Target:** 200 patients by December 31, 2026

---

## PERSONAL REMINDERS

### Urgent
- [ ] **FILE LAST YEAR'S TAXES**
- [ ] **GET ACCESS TO USAA SPENDING**

### This Week
- [ ] DEA Registration (TODAY)
- [ ] Update business address
- [ ] Add SFM to accounting software
- [ ] Confirm legal docs signed

### This Month
- [ ] Review malpractice quotes
- [ ] SC credentialing progress
- [ ] Plan OR/TX licensing (Q2)

---

## EXECUTION STARTS NOW

### Today's 4-Hour Sprint

| Hour | Task | Deliverable |
|------|------|-------------|
| 1 | DEA Registration | Application submitted |
| 2 | HIPAA BAA + Website | Site live |
| 3 | n8n Automation | Lead capture working |
| 4 | Jobs + Social | MA posted, profiles ready |

### This Weekend
- EMR selected and signed
- Stripe fully configured
- 12+ posts created
- Email sequence built
- Labs contacted

### Monday, December 30
**LAUNCH DAY**
- Ads live
- Announcement published
- Outreach sent
- Phone on
- Ready for leads

---

**First patient by January 8.**

**200 patients by December 31, 2026.**

**This is the plan. Execute.**
