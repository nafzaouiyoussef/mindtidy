/**
 * Edit review cards here. Initials only — no full names, no photos.
 *
 * NOTE: These are placeholder reviews for layout purposes. Replace them
 * with real customer reviews before launch — publishing fabricated
 * reviews as genuine violates FTC rules and platform policies.
 */
export type Review = {
  initials: string;
  meta: string;
  stars: number;
  text: string;
  accent: "blush" | "mint" | "sand" | "lilac";
};

export const REVIEWS: Review[] = [
  {
    initials: "S.M.",
    meta: "Verified buyer · printed at home",
    stars: 5,
    text: "The Daily Big 3 with the tiny-first-step line is the first thing that's ever gotten me past the staring-at-the-list phase. Three things. A first step for each. Done by noon some days, which has never happened.",
    accent: "blush",
  },
  {
    initials: "J.T.",
    meta: "Verified buyer · GoodNotes 6",
    stars: 5,
    text: "The sticker book installed in about two minutes with the guide. I use the energy batteries and the day tabs constantly — dragging a sticker is somehow so much easier than writing the same word for the hundredth time.",
    accent: "mint",
  },
  {
    initials: "P.K.",
    meta: "Verified buyer · iPad + print",
    stars: 5,
    text: "I print the weekly pages and keep the rest on my iPad. Undated was the right call — I disappeared for nine days, came back, and nothing was 'ruined.' No wasted pages, no guilt spiral.",
    accent: "sand",
  },
  {
    initials: "D.R.",
    meta: "Verified buyer",
    stars: 4,
    text: "The Shrink-the-Task sheet is doing the heavy lifting for me. Breaking a scary project into steps small enough to actually start is exactly the thing my brain refuses to do on its own.",
    accent: "lilac",
  },
  {
    initials: "E.W.",
    meta: "Verified buyer · Notability",
    stars: 5,
    text: "The Can't-Get-Started toolkit reads like it was written by someone who has actually been stuck at 2 p.m. with a full list and an empty tank. Tactic #3 alone was worth the price.",
    accent: "mint",
  },
  {
    initials: "L.B.",
    meta: "Verified buyer · printed at home",
    stars: 5,
    text: "The Dopamine Menu page turned 'I should take a break' into an actual plan. And the Reward Bank is sneaky-good — my brain will apparently do laundry for stickers and a fancy coffee.",
    accent: "blush",
  },
];
