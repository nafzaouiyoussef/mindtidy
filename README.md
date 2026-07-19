# MindTidy — ADHD Planner Landing Page

High-converting landing page for the **MindTidy Focus Kit — ADHD Edition** digital download. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## ⚙️ Before launch — the swap list

1. **Payhip links** — edit [`lib/config.ts`](lib/config.ts):
   - `PAYHIP_URL` is set to the live planner checkout (https://payhip.com/b/g1mcR, $9)
   - `PAYHIP_BUNDLE_URL` → still a placeholder; swap in your bundle's checkout link
   - Also set `SITE_URL` and `CONTACT_EMAIL` there. Every button/price on the site reads from this one file.
2. **Reviews** — the cards in `components/Testimonials.tsx` are placeholders for design purposes. Replace them with real customer reviews before launch (publishing fabricated reviews as genuine violates FTC rules and platform policies). Review photos go in `public/images/reviews/` as `review-calendar.jpg`, `review-ipad.jpg`, and `review-vision-board.jpg` — each renders automatically once the file exists.
3. **Images** — the brand marketing SVGs live in `public/images/` and are inlined by `components/BrandSvg.tsx` (so their text renders in the brand font). Replace a file there to update the visual site-wide.

## Structure

```
app/
  layout.tsx            # fonts (Quicksand + Inter), global SEO metadata, OG/Twitter tags
  page.tsx              # home page + JSON-LD (Product, FAQPage)
  opengraph-image.tsx   # auto-generated OG share image
  sitemap.ts, robots.ts # SEO
  icon.svg              # favicon (brand mark)
  privacy/ terms/ refunds/   # legal pages
components/
  Header, Hero, ProblemSolution, WhatsInside, Testimonials,
  Bundle, FAQ, FinalCTA, Footer, LegalPage,
  BuyButton (all CTAs route through this), Reveal (scroll animations),
  PlannerMockup, Logo
lib/config.ts           # ← the one file you edit
```

## Brand

Follows the MindTidy Brand Guide: Sage `#8FA98F`, Cream `#F7F3EC`, Slate `#3E4A45`, Terracotta `#D9A48F`; Quicksand headings / Inter body; warm no-shame voice; no medical claims.
