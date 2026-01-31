# COPILOT SESSION PROMPT

## Purpose

This file contains the canonical prompt to paste into GitHub Copilot Chat at the start of each session when working in this repository. It ensures Copilot respects all compliance guardrails.

**Note:** GitHub Copilot also reads `.github/copilot-instructions.md` automatically for repository-wide instructions.

---

## Session Prompt (Copy and Paste)

```
In this repository, always comply with WEBSITE-GUARDRAILS.md, README.md, and the latest SFM AI handoff files.

Treat Sankofa Family Medicine as membership-based primary care first and foremost.

Use "precision-informed" or "precision medicine-informed" only as a modifier, never as the primary identity. Precision tools are supportive and discretionary, applied based on clinical judgment.

Keep language virtual-only, Washington-only, non-DPC, self-pay, and physician-led.

Do not infer insurance billing, in-person care, emergency coverage, automated decision-making, or mandatory precision services.

If a suggestion would conflict with guardrails, omit it and flag the issue instead of guessing.
```

---

## Usage Instructions

1. Open GitHub Copilot Chat in VS Code or GitHub.com
2. At the start of each new session or thread, paste the prompt above
3. Copilot will then apply the guardrails to all suggestions in that session
4. Re-paste at the start of each new session (prompts do not persist between sessions)

---

## Related Documents

- `.github/copilot-instructions.md` – Repository-wide Copilot instructions (auto-loaded)
- `WEBSITE-GUARDRAILS.md` – Full compliance guardrails (authoritative)
- `README.md` – Project overview and brand context
- `V30-ELITE-MASTER-HANDOFF.md` – Latest AI handoff document

---

## Notes

- This prompt is designed to be short enough to paste quickly but comprehensive enough to enforce all critical rules
- If guardrails are updated, update this prompt accordingly
- Do not modify the prompt without reviewing `WEBSITE-GUARDRAILS.md` first
