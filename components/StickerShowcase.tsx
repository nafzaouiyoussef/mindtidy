import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import { PRICE_LABEL } from "@/lib/config";

/**
 * New bundle section: a visual showcase of the 63-piece sticker system.
 * Uses plain <img> for the placeholder PNGs (matching the review-photo
 * pattern in Testimonials). Drop real art into public/products/ later —
 * the filenames are stable: sticker-grid.png, sticker-book-cover.png,
 * planner-daily-page.png.
 */
export default function StickerShowcase() {
  return (
    <section id="stickers" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-terracotta-dark">
            The sticker system
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            63 stickers that do the writing for you
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-light">
            Transparent PNGs you can drag straight onto any page. On a stuck
            day, tapping a sticker is a whole lot easier than finding the
            words.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div className="overflow-hidden rounded-4xl border border-cream-dark bg-cream shadow-soft">
            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
              {/* Primary preview: the full sticker grid */}
              <img
                src="/products/sticker-grid.png"
                alt="Preview grid of the 63 MindTidy digital stickers: action labels, checkboxes, energy batteries, mood faces, focus timers, washi tape and day tabs"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full rounded-3xl shadow-soft"
              />

              {/* Supporting: sticker book cover + in-app shot */}
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <img
                    src="/products/sticker-book-cover.png"
                    alt="Cover of the 6-page MindTidy GoodNotes sticker book"
                    width={800}
                    height={1035}
                    loading="lazy"
                    className="w-full rounded-3xl shadow-soft"
                  />
                  <img
                    src="/products/planner-daily-page.png"
                    alt="The Daily “Today” page from the MindTidy ADHD planner — Big 3, time anchors and an energy check, ready for stickers"
                    width={1200}
                    height={1553}
                    loading="lazy"
                    className="w-full self-start rounded-3xl shadow-soft"
                  />
                </div>
                <ul className="space-y-2.5">
                  {[
                    "63 transparent PNG stickers in every color",
                    "6-page GoodNotes sticker book — drag & drop",
                    "Installation guide for GoodNotes & Notability",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-white">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8.5l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-muted">
                  Paper person? The stickers are a digital bonus — the planner
                  prints beautifully without them.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <BuyButton>Get the bundle — {PRICE_LABEL}</BuyButton>
        </Reveal>
      </div>
    </section>
  );
}
