/**
 * ─────────────────────────────────────────────────────────────
 *  MindTidy site configuration
 *  Swap the Payhip links and prices below when your pages are live.
 * ─────────────────────────────────────────────────────────────
 */

// Complete Bundle checkout (live)
export const PAYHIP_URL_BUNDLE = "https://payhip.com/b/g1mcR";

// TODO: replace with the planner-only checkout when it exists.
// Until then it points at the bundle checkout so the button always works.
export const PAYHIP_URL_PLANNER = "https://payhip.com/b/g1mcR";

// Back-compat aliases (used by the hero / final CTA "buy" buttons).
export const PAYHIP_URL = PAYHIP_URL_BUNDLE;
export const PAYHIP_BUNDLE_URL = PAYHIP_URL_BUNDLE;

export const SITE_URL = "https://mindtidy.com";
export const SITE_NAME = "MindTidy";
export const CONTACT_EMAIL = "hello@mindtidy.com";

export const PRODUCT = {
  name: "MindTidy ADHD Planner + Sticker Bundle",
  shortName: "the MindTidy bundle",
  price: 9,
  currency: "USD",
};

/**
 * Two-tier pricing for the upsell section.
 * TODO: set the real planner-only price. The bundle is the live $9 product.
 * `compareAt` is what the pieces cost separately (planner $7 + stickers $7)
 * and drives the strikethrough + savings badge — keep it honest.
 */
export const TIERS = {
  planner: {
    label: "Planner Only",
    price: 7,
    blurb: "The 21-page undated ADHD planner PDF (US Letter + A4).",
    url: PAYHIP_URL_PLANNER,
    features: [
      "21-page undated ADHD planner PDF",
      "US Letter + A4 print sizes",
      "Reprint forever · start any day",
    ],
  },
  bundle: {
    label: "Complete Bundle",
    price: 9,
    compareAt: 14,
    blurb:
      "The planner plus the full digital sticker system — the whole calm-brain kit.",
    url: PAYHIP_URL_BUNDLE,
    features: [
      "Everything in Planner Only",
      "63 digital stickers (transparent PNGs)",
      "6-page GoodNotes sticker book",
      "Installation guide (GoodNotes + Notability)",
    ],
  },
};
