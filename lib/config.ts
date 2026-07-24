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

/**
 * ⚡ Which checkout every buy button on the site uses.
 *
 *   "whop"   → the embedded /checkout page (Whop)
 *   "payhip" → external Payhip links
 *
 * Flip this single value to switch the whole site either way.
 */
export const CHECKOUT_MODE: "whop" | "payhip" = "whop";

/** Resolved destinations, honouring CHECKOUT_MODE. */
export const CHECKOUT_URL =
  CHECKOUT_MODE === "whop" ? "/checkout" : PAYHIP_URL_BUNDLE;
export const CHECKOUT_URL_PLANNER =
  CHECKOUT_MODE === "whop" ? "/checkout" : PAYHIP_URL_PLANNER;

// ── Whop embedded checkout (/checkout) ───────────────────────
export const WHOP_PLAN_ID = "plan_4NxI8kuqbe6FS";

/**
 * Whop's sandbox is a SEPARATE environment with its own plans — the
 * production plan id above does not exist there (the embed 404s).
 *
 * To test with fake cards: create a plan in the Whop sandbox dashboard and
 * paste its id here. Sandbox then turns on automatically in `npm run dev`.
 * Leave empty and the dev checkout falls back to the real (production) form.
 */
export const WHOP_PLAN_ID_SANDBOX = "";

// Accepts any hex ("#D9A48F" = brand terracotta) or a Whop named
// palette value. Currently the blue from the Whop docs example.
export const WHOP_ACCENT_COLOR = "#3358d4";

/**
 * "sandbox" = test mode: no real money moves and you can pay with Stripe
 * test cards (e.g. 4242 4242 4242 4242, any future expiry, any CVC).
 *
 * Defaults to sandbox during `npm run dev` and production for a real build,
 * so test mode can't accidentally ship. Override with NEXT_PUBLIC_WHOP_ENV
 * (e.g. set it to "sandbox" on a staging deploy).
 */
export const WHOP_ENVIRONMENT: "production" | "sandbox" =
  process.env.NEXT_PUBLIC_WHOP_ENV === "sandbox"
    ? "sandbox"
    : process.env.NEXT_PUBLIC_WHOP_ENV === "production"
      ? "production"
      : process.env.NODE_ENV === "production"
        ? "production"
        : "sandbox";

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
    url: CHECKOUT_URL_PLANNER,
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
    url: CHECKOUT_URL,
    features: [
      "Everything in Planner Only",
      "63 digital stickers (transparent PNGs)",
      "6-page GoodNotes sticker book",
      "Installation guide (GoodNotes + Notability)",
    ],
  },
};
