# GitHub Copilot Instructions for Sankofa Family Medicine

## Authority
This file instructs all AI-assisted tools on behavior when suggesting code, copy, or documentation.

The authoritative source is: /compliance/WEBSITE_COPY_GUARDRAILS.md

All suggestions must comply. If uncertain, omit rather than infer.

## Core Rules for AI Suggestions

### Prohibited Actions
- DO NOT suggest insurance billing language
- DO NOT suggest "24/7", "instant", "immediate", "real-time" access claims  
- DO NOT suggest "guaranteed", "best", "optimal", "proven results"
- DO NOT suggest DPC or "Direct Primary Care" framing
- DO NOT suggest "unlimited visits" language
- DO NOT suggest in-person care or physical office language
- DO NOT suggest pricing in public-facing code
- DO NOT weaken disclaimers

### Required Patterns
- Always use "when clinically appropriate"
- Always use "may" not "will" for discretionary services
- Always frame precision/genetics as "physician-led interpretation"
- Always limit scope to "Washington State"
- Always frame as "concierge in structure"

### Canonical Practice Description (Use Verbatim)
"Sankofa Family Medicine is a virtual-only, physician-led concierge precision medicine primary care practice, founded in 2025, operating from Spokane, Washington and serving patients statewide in Washington through telehealth."

### Required Disclaimers (Use Verbatim)
- "does not establish a physician-patient relationship"
- "does not provide emergency care"  
- "when clinically appropriate"
- "subject to physician judgment"

### On Ambiguity
If uncertain:
1. Flag in comment
2. Do NOT generate questionable content
3. Refer to /compliance/WEBSITE_COPY_GUARDRAILS.md
