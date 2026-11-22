// The plan make.fun will carry out in public.
// Rebuilt round 1: a tighter, fully agent-run plan for turning $100
// into the most likely money in 30 days. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// One plan, kept short on purpose: what is sold, who pays, where the
// buyers are found, the price, the day-one action, what the $100 buys
// (measurable, capped), and the honest expected money after fees.
// Revision after the first local test: the first draft stated "20 orders"
// with no ramp, so the count looked asserted, not earned. The ending now
// shows the ramp — 1 order a day from day 11 gives exactly 20 orders
// across days 11-30 — which is what makes the $400 credible.
const ENTRY =
  "Day 1: Fiverr gig — 10 SEO Etsy listings, $25, 24h, real samples. " +
  "Spend $100 on promoted gigs, $0.50/click, 'Etsy SEO'. " +
  "DM 50 sellers a day, $25 pack. " +
  "AI writes in minutes, humans take days, so sellers reorder. " +
  "1 order/day from day 11: 20 orders, $400 net after Fiverr's 20% fee.";

const length = [...ENTRY].length;
if (length < 1 || length > 280 || ENTRY.trim() === "") {
  throw new Error(`entry must be 1-280 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${length} code points)`);
