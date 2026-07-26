/**
 * ─────────────────────────────────────────────────────────────
 *  MindTidy site configuration
 *  Swap the Payhip links and prices below when your pages are live.
 * ─────────────────────────────────────────────────────────────
 */

// Complete Bundle checkout (live)
export const PAYHIP_URL_BUNDLE = "https://payhip.com/b/g1mcR";

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

/** Resolved checkout destination, honouring CHECKOUT_MODE. */
export const CHECKOUT_URL =
  CHECKOUT_MODE === "whop" ? "/checkout" : PAYHIP_URL_BUNDLE;

/** Where buyers land after a successful purchase. */
export const THANK_YOU_PATH = "/thank-you";

// ── Whop embedded checkout (/checkout) ───────────────────────
export const WHOP_PLAN_ID = "plan_Mzpg2A0lB2xQe";

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

// Canonical origin — the www host you gave. Whatever you deploy MUST
// redirect the apex (mindtidy.shop) to this www host (or change this to the
// apex and redirect the other way) so there's exactly one canonical URL.
export const SITE_URL = "https://www.mindtidy.shop";
export const SITE_NAME = "MindTidy";

// TODO: set up email at the new domain (most registrars offer free
// forwarding for hello@mindtidy.shop → your inbox), or swap in whatever
// address you actually read. Shown on the site and in support copy.
export const CONTACT_EMAIL = "hello@mindtidy.shop";

export const PRODUCT = {
  name: "MindTidy ADHD Planner + Sticker Bundle",
  shortName: "the MindTidy bundle",
  price: 12.99,
  currency: "USD",
};

/**
 * Display price, always with cents (e.g. "$12.99").
 * Every CTA renders this so a price like 13 can't show up as "$13".
 */
export const PRICE_LABEL = `$${PRODUCT.price.toFixed(2)}`;

/**
 * The single product on sale: the complete bundle.
 * (The planner is not sold separately.)
 */
export const OFFER = {
  label: "The Complete Bundle",
  price: PRODUCT.price,
  /**
   * Optional "was" price for a strikethrough + savings badge.
   *
   * Left null on purpose: with nothing sold separately any higher number
   * would be an invented reference price, which is deceptive (and against
   * FTC pricing guidance). Only set this if the bundle is genuinely sold
   * at that price normally — e.g. a real launch discount.
   */
  compareAt: null as number | null,
  blurb:
    "Planner and sticker system together — the whole calm-brain kit, in one instant download.",
  url: CHECKOUT_URL,
  features: [
    "21-page undated ADHD planner PDF (US Letter + A4)",
    "63 digital stickers (transparent PNGs)",
    "6-page GoodNotes sticker book",
    "Installation guide (GoodNotes + Notability)",
    "Print at home or use on iPad",
    "Reprint forever · start any day",
  ],
};
