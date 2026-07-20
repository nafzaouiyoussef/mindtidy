/**
 * ─────────────────────────────────────────────────────────────
 *  MindTidy site configuration
 *  Every price, product name, and checkout link on the site
 *  reads from this one file.
 * ─────────────────────────────────────────────────────────────
 */

// Complete Bundle checkout (live)
export const PAYHIP_URL_BUNDLE = "https://payhip.com/b/g1mcR";

// TODO: replace with the planner-only Payhip checkout link when it exists.
// Until then it points at the bundle checkout so the button always works.
export const PAYHIP_URL_PLANNER = "https://payhip.com/b/g1mcR";

// Kept for backwards compatibility — the main CTA everywhere is the bundle.
export const PAYHIP_URL = PAYHIP_URL_BUNDLE;

export const SITE_URL = "https://mindtidy.com";
export const SITE_NAME = "MindTidy";
export const CONTACT_EMAIL = "hello@mindtidy.com";

export const PRODUCT = {
  name: "MindTidy ADHD Planner + Sticker Bundle",
  shortName: "the MindTidy bundle",
  currency: "USD",
};

/** Two-tier pricing for the upsell section. TODO: set real prices. */
export const TIERS = {
  planner: {
    label: "Planner Only",
    price: 7,
    description: "The 21-page undated ADHD planner PDF (US Letter + A4).",
    url: PAYHIP_URL_PLANNER,
  },
  bundle: {
    label: "Complete Bundle",
    price: 9,
    // What the pieces would cost separately (planner $7 + sticker system $7).
    // Drives the strikethrough + savings badge; keep it honest.
    compareAt: 14,
    description:
      "21-page planner + 63 digital stickers + GoodNotes sticker book + installation guide.",
    url: PAYHIP_URL_BUNDLE,
  },
};
