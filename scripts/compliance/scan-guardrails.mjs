// scripts/compliance/scan-guardrails.mjs
import fs from "node:fs";
import path from "node:path";

const REQUIRED_PATH = path.resolve(process.cwd(), "compliance/guardrails.public.md");

if (!fs.existsSync(REQUIRED_PATH)) {
  console.error(`[FAIL] Missing required file: compliance/guardrails.public.md`);
  process.exit(1);
}

const content = fs.readFileSync(REQUIRED_PATH, "utf8").trim();
if (!content.startsWith("# SANKOFA FAMILY MEDICINE")) {
  console.error("[FAIL] guardrails.public.md does not appear to contain the canonical guardrails header.");
  process.exit(1);
}

console.log("[PASS] guardrails.public.md present and has canonical header.");
process.exit(0);
