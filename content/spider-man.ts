/**
 * Content for the Mini Spider-Man Crochet Keychain landing page
 * (/spider-man). All copy and structured data lives here so the page
 * component stays declarative.
 */

/** ⚠️ Trademark note — worth telling the shop owner once:
 *  "Spider-Man" is a Marvel trademark. Advertising a licensed-character
 *  pattern on Meta risks ad rejection, ad-account suspension, or takedowns
 *  from Whop. If any of that fires, switching to a neutral name here
 *  (e.g. "Little Web-Slinging Hero") makes it go away without a rebuild. */
export const SPIDER = {
  name: "Mini Spider-Man Crochet Keychain",
  tagline: "Stitch a tiny hero for your car mirror or bag.",
  subheadline:
    "A 12-page beginner-friendly crochet pattern for a mini amigurumi keychain with a hand-crocheted web. Instant PDF download.",
  price: 4.99,
  compareAt: 9,
  currency: "USD",
  // Ad-friendly URL — short enough to type, memorable in a Facebook post.
  path: "/spider-man",
  checkoutPath: "/spider-man/checkout",
};

/** "At a glance" chips shown under the hero. */
export const AT_A_GLANCE = [
  { label: "12-page PDF", detail: "print or on-device" },
  { label: "US crochet terms", detail: "abbreviations page included" },
  { label: "2.0 mm hook", detail: "4-ply cotton yarn" },
  { label: "4 eye styles", detail: "pick your favorite look" },
  { label: "Advanced beginner", detail: "if you know sc, dc, inc, dec" },
  { label: "Approx. finished size", detail: "~7 cm / 3 in tall" },
];

/**
 * Two preview pages shown on the landing page.
 *
 * Deliberately kept to TWO so buyers see the design quality without
 * being able to reconstruct the pattern from screenshots. We pick pages
 * that prove the pattern is thorough (materials + assembly walk-through)
 * without leaking the actual round-by-round instructions.
 *
 * Pages we specifically DON'T show: 04 (head/body pattern),
 * 05 (arms/legs), 06 (eye style formulas), 07-09 (web embroidery steps),
 * 10 (white web pattern). Those are the paid content.
 */
export const GALLERY = [
  {
    src: "/spider-man/page-02.jpg",
    caption: "Materials & abbreviations",
    hint: "Everything you'll need, spelled out.",
  },
  {
    src: "/spider-man/page-11.jpg",
    caption: "Assembly walk-through",
    hint: "How the finished piece comes together.",
  },
];

/** Deliverables list — mirrors the ADHD "Exactly what you get". */
export const DELIVERABLES = [
  {
    emoji: "📄",
    title: "12-page PDF pattern",
    body: "Fully illustrated with step-by-step photos and US crochet terms — print it or read on your phone / iPad.",
  },
  {
    emoji: "🧵",
    title: "Every piece, round by round",
    body: "Head, body, arms, legs, and a crocheted white web. Nothing left for you to guess.",
  },
  {
    emoji: "👀",
    title: "Four different eye styles",
    body: "Crocheted teardrops, rounded shapes, or a simple felt cutout — mix them for red, black, or pink alternates.",
  },
  {
    emoji: "🕸️",
    title: "Web embroidery walk-through",
    body: "Three parts, twenty-plus process photos — the mask webbing is the star, and this is how you get it right.",
  },
  {
    emoji: "⚡",
    title: "Delivered instantly via Whop",
    body: "Download link on-screen and by email the moment your payment is confirmed.",
  },
  {
    emoji: "♾️",
    title: "Lifetime access",
    body: "Re-download anytime, keep it forever. Any pattern updates are free.",
  },
];

/** FAQ specific to a crochet-pattern buyer. */
export const FAQ_ITEMS = [
  {
    q: "What skill level is this?",
    a: "Advanced beginner. If you're comfortable with magic ring, single crochet, increases and decreases, you can make this. The web embroidery is walked through with photos, so you don't need prior tapestry-needle experience.",
  },
  {
    q: "What yarn and hook do I need?",
    a: "4-ply cotton yarn in red, blue, white and black (plus optional grey for the alternate colorway) and a 2.0 mm hook. You'll also want a tapestry / yarn needle, stitch markers, fiberfill stuffing, and a small retractable keychain clasp. A full materials list is on page 2 of the PDF.",
  },
  {
    q: "Are the terms US or UK crochet?",
    a: "US terms throughout. The first content page is a full abbreviations key (MR, sc, dc, inc, dec, sl st, etc.) so you can keep it handy while you work.",
  },
  {
    q: "How big is the finished piece?",
    a: "About 7 cm / 3 inches tall — a mini amigurumi designed as a keychain or a hanging decoration for a car mirror or bag. The overall hanging length depends on how long you chain the suspension strand at the end.",
  },
  {
    q: "How is the PDF delivered?",
    a: "Checkout is handled by Whop. The moment your payment goes through, you get a download link on-screen and by email. No shipping — everything is digital.",
  },
  {
    q: "What's your refund policy?",
    a: "14 days, no questions asked. If the pattern isn't right for you, email us and we'll refund you in full — you can even keep the file. Full details on the Refund Policy page.",
  },
];
