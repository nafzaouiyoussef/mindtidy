import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import { PRICE_LABEL } from "@/lib/config";

const DELIVERABLES = [
  {
    emoji: "📓",
    title: "The ADHD-Friendly Planner",
    body: "21-page PDF · US Letter · undated. Print it, or use it in GoodNotes / Notability.",
  },
  {
    emoji: "🎨",
    title: "63 digital stickers",
    body: "Transparent PNGs — drag them straight onto any page.",
  },
  {
    emoji: "📔",
    title: "GoodNotes Sticker Book",
    body: "6-page PDF, ready to lasso, copy and decorate.",
  },
  {
    emoji: "🧭",
    title: "Installation Guide",
    body: "Step-by-step for GoodNotes 6, GoodNotes 5 & Notability.",
  },
  {
    emoji: "⚡",
    title: "Delivered instantly via Whop",
    body: "Download link on screen and by email the moment you check out.",
  },
  {
    emoji: "♾️",
    title: "Lifetime access",
    body: "Re-download anytime, reprint forever. It's yours to keep.",
  },
];

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-sage-dark" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ExactlyWhatYouGet() {
  return (
    <section id="whats-included" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-sage-dark">
            Exactly what you get
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            Four files. One tidy download.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-light">
            No fluff, no “access portal,” no waiting. Here&apos;s everything
            that lands in your inbox.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 rounded-4xl border border-cream-dark bg-white p-6 shadow-soft sm:p-10">
          <ul className="grid gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((item) => (
              <li key={item.title} className="flex gap-4">
                <Check />
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-base font-bold text-slate">
                    <span aria-hidden="true">{item.emoji}</span>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-light">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <BuyButton>Get the bundle — {PRICE_LABEL}</BuyButton>
        </Reveal>
      </div>
    </section>
  );
}
