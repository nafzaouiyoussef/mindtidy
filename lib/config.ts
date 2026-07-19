/**
 * ─────────────────────────────────────────────────────────────
 *  MindTidy site configuration
 *  Swap the Payhip links below when your checkout pages are live.
 * ─────────────────────────────────────────────────────────────
 */

export const PAYHIP_URL = "https://payhip.com/b/g1mcR";

// Currently the same checkout as the planner — swap when the bundle
// gets its own Payhip product.
export const PAYHIP_BUNDLE_URL = "https://payhip.com/b/g1mcR";

export const SITE_URL = "https://mindtidy.com";
export const SITE_NAME = "MindTidy";
export const CONTACT_EMAIL = "hello@mindtidy.com";

export const PRODUCT = {
  name: "MindTidy Focus Kit — ADHD Edition",
  shortName: "The Focus Kit",
  price: 9,
  compareAt: 19,
  currency: "USD",
};

// $9, same as the planner — one product, one price everywhere.
// compareAt keeps the bundle image's "SAVE 40%" badge honest ($9 = 40% off $15).
export const BUNDLE = {
  name: "MindTidy Complete Focus Kit",
  price: 9,
  compareAt: 15,
  currency: "USD",
};
