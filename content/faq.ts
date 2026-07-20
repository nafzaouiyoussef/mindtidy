import { CONTACT_EMAIL } from "@/lib/config";

/** Edit FAQ questions/answers here — the accordion and the FAQPage
 *  JSON-LD schema both read from this list. */
export const FAQ_ITEMS = [
  {
    q: "Is it dated?",
    a: "No — the planner is completely undated. There are no pre-printed dates to fall behind on: skip a day, a week, or a month and pick it back up with zero wasted pages. Print the pages you need, as often as you need them, forever.",
  },
  {
    q: "Do I need an iPad?",
    a: "No. The planner is a print-at-home PDF in US Letter and A4 — a home printer is all you need. The digital stickers and GoodNotes sticker book are a bonus for tablet users; if you're paper-only, you lose nothing from the core planner.",
  },
  {
    q: "Which apps does it work with?",
    a: "GoodNotes (5 and 6), Notability, and any PDF annotation app (Xodo, Flexcil, Noteshelf, Samsung Notes and more). The included installation guide walks you through importing the planner and stickers into each app step by step.",
  },
  {
    q: "What exactly do I get?",
    a: "Four downloads: (1) the 21-page undated ADHD planner PDF in US Letter and A4, (2) 63 digital stickers as transparent PNGs, (3) a 6-page GoodNotes sticker book, and (4) a 2-page installation guide covering GoodNotes 6/5, Notability and other apps.",
  },
  {
    q: "What's your refund policy for digital goods?",
    a: `Since files can't be "returned," we keep it simple: if the planner doesn't fit the way your brain works, email us within 14 days of purchase and we'll refund you in full — no forms, no interrogation. Details are on our Refund Policy page, or email ${CONTACT_EMAIL}.`,
  },
  {
    q: "How is it delivered?",
    a: "Checkout is handled securely by Payhip. The moment your payment goes through, you get an instant download link on-screen and by email — most people are printing their first page within five minutes of buying.",
  },
];
