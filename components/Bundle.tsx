import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import BrandSvg from "./BrandSvg";
import { TIERS } from "@/lib/config";

function Check({ className = "text-sage-dark" }: { className?: string }) {
  return (
    <svg className={`h-5 w-5 shrink-0 ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Bundle() {
  const { planner, bundle } = TIERS;
  const savings = bundle.compareAt - bundle.price;

  return (
    <section id="pricing" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-sage-dark">
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            Pick your calm
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-light">
            One-time purchase either way — no subscription, no upsell emails.
            You own the files forever.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* ── Planner Only ─────────────────────────────────── */}
          <Reveal className="flex">
            <div className="flex w-full flex-col rounded-4xl border border-cream-dark bg-white p-8 shadow-soft sm:p-10">
              <h3 className="font-heading text-xl font-bold text-slate">
                {planner.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-light">
                {planner.blurb}
              </p>
              <p className="mt-6 font-heading text-5xl font-bold text-slate">
                ${planner.price}
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {planner.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-light">
                    <Check />
                    {feature}
                  </li>
                ))}
              </ul>
              <BuyButton
                href={planner.url}
                variant="secondary"
                className="mt-8 w-full"
              >
                Get the planner — ${planner.price}
              </BuyButton>
            </div>
          </Reveal>

          {/* ── Complete Bundle (most popular) ───────────────── */}
          <Reveal delay={120} className="flex">
            <div className="relative flex w-full flex-col overflow-hidden rounded-4xl bg-slate p-8 shadow-lift sm:p-10">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-terracotta px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-white">
                ★ Most popular · Save ${savings}
              </p>

              {/* Existing bundle visual — kept in place */}
              <BrandSvg
                name="focus-kit"
                label="The Complete Focus Kit: Today's Reset planner surrounded by the Project Splitter, Habit Tracker, Dopamine Menu, and Routine Builder tools — one instant download."
                className="mt-6 overflow-hidden rounded-3xl bg-white/5"
              />

              <h3 className="mt-6 font-heading text-xl font-bold text-white">
                {bundle.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sage-light">
                {bundle.blurb}
              </p>
              <p className="mt-5 flex items-baseline gap-3">
                <span className="text-lg text-sage-light line-through" aria-label={`Value $${bundle.compareAt} if bought separately`}>
                  ${bundle.compareAt}
                </span>
                <span className="font-heading text-5xl font-bold text-white">
                  ${bundle.price}
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {bundle.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white">
                    <Check className="text-sage-light" />
                    {feature}
                  </li>
                ))}
              </ul>
              <BuyButton href={bundle.url} className="mt-8 w-full">
                Get the bundle — ${bundle.price}
              </BuyButton>
              <p className="mt-4 text-center text-xs text-sage-light">
                Instant download · 14-day money-back guarantee
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
