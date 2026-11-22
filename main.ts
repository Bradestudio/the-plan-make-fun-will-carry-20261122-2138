// Entry for make.fun bounty "the-plan-make-fun-will-carry-20261122-2138".
// Writes one plan (277 Unicode code points, UTF-8) to /output/entry.txt.
// No network, no dependencies, Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Day 1: Fiverr gig — 10 SEO product descriptions for Etsy sellers, $25, 24h delivery, samples from real shops. " +
  "Spend $100 on gig promotion; email 200 sellers offering one free listing. " +
  "AI writes in minutes, humans take days, so buyers reorder. " +
  "Likely 20 orders = $500 by day 30.";

const codePoints = [...plan].length;
if (codePoints < 1 || codePoints > 280 || plan.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);
