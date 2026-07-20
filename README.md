# MindTidy — ADHD Planner + Sticker Bundle Landing Page

High-converting landing page for the **MindTidy ADHD Planner + Digital Stickers Bundle**. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## ⚙️ Before launch — the swap list

1. **Checkout links & prices** — edit [`lib/config.ts`](lib/config.ts):
   - `PAYHIP_URL_BUNDLE` is live (https://payhip.com/b/g1mcR)
   - `PAYHIP_URL_PLANNER` currently points at the bundle — swap in the planner-only checkout when it exists
   - `TIERS` holds both tier prices and the bundle's compare-at value (drives the savings badge)
2. **Product images** — replace the labeled placeholders in `public/products/` (keep the filenames):
   `hero-mockup.png` (1200×900) · `planner-daily-page.png` (800×1035) · `planner-dopamine-menu.png` (800×1035) · `sticker-grid.png` (1200×900) · `sticker-book-cover.png` (800×1035) · `ipad-goodnotes.png` (1200×900)
3. **Reviews** — edit [`content/reviews.ts`](content/reviews.ts). The current cards are placeholders for layout; replace with real customer reviews before launch (publishing fabricated reviews as genuine violates FTC rules).
4. **FAQ** — edit [`content/faq.ts`](content/faq.ts); the accordion and the FAQPage JSON-LD both read from it.

## Structure

```
app/
  layout.tsx            # fonts (Lora + Poppins), global SEO metadata, OG/Twitter tags
  page.tsx              # home page + JSON-LD (Product, FAQPage)
  opengraph-image.tsx   # auto-generated OG share image
  sitemap.ts, robots.ts # SEO
  icon.svg              # favicon (brand mark)
  privacy/ terms/ refunds/   # legal pages
components/
  Header, Hero, WhyDifferent, WhatsInside, Testimonials,
  Pricing (two-tier), FAQ, FinalCTA, Footer, LegalPage,
  BuyButton (main CTA → bundle checkout), Reveal (scroll animations), Logo
content/
  reviews.ts            # ← edit review cards here
  faq.ts                # ← edit FAQ here
lib/config.ts           # ← prices + checkout links
public/products/        # ← product images (replace placeholders)
```

## Brand

Cream `#FBF7F0` · ink `#33302B` · coral `#E4664B` · teal `#3E7C6F` · mustard `#DE9E33` · lavender `#8B7BB5`, with soft tints (blush/mint/sand/lilac). Lora headings (italic accents) + Poppins body. Rounded-2xl cards, pill buttons and tags.
