import Reveal from "./Reveal";
import { TIERS } from "@/lib/config";

const PLANNER_FEATURES = [
  "21-page undated ADHD planner PDF",
  "US Letter + A4 print sizes",
  "Reprint forever, start any day",
];

const BUNDLE_FEATURES = [
  "Everything in Planner Only",
  "63 digital stickers (transparent PNGs)",
  "6-page GoodNotes sticker book",
  "2-page installation guide (GoodNotes 6/5, Notability + more)",
];

function Check({ className = "text-teal" }: { className?: string }) {
  return (
    <svg className={`h-5 w-5 shrink-0 ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const savings = TIERS.bundle.compareAt - TIERS.bundle.price;
  return (
    <section id="pricing" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-lavender-dark">
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Pick your <em className="text-teal">calm</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            One-time purchase either way. No subscription, no upsell emails —
            you own the files forever.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
          {/* Planner only */}
          <Reveal className="flex">
            <div className="flex w-full flex-col rounded-2xl border border-ink/10 bg-white p-8 shadow-soft">
              <h3 className="font-heading text-xl font-bold text-ink">
                {TIERS.planner.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {TIERS.planner.description}
              </p>
              <p className="mt-6 font-heading text-5xl font-bold text-ink">
                ${TIERS.planner.price}
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {PLANNER_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Check />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={TIERS.planner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-8 w-full"
              >
                Get the planner
              </a>
            </div>
          </Reveal>

          {/* Bundle */}
          <Reveal delay={120} className="flex">
            <div className="relative flex w-full flex-col rounded-2xl bg-teal p-8 shadow-lift">
              <p className="tag absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-coral text-white">
                ★ Most popular · Save ${savings}
              </p>
              <h3 className="font-heading text-xl font-bold text-white">
                {TIERS.bundle.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mint">
                {TIERS.bundle.description}
              </p>
              <p className="mt-6 flex items-baseline gap-3">
                <span className="text-lg text-mint line-through" aria-label={`Value $${TIERS.bundle.compareAt} if bought separately`}>
                  ${TIERS.bundle.compareAt}
                </span>
                <span className="font-heading text-5xl font-bold text-white">
                  ${TIERS.bundle.price}
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {BUNDLE_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-mint">
                    <Check className="text-sand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={TIERS.bundle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                Get the bundle — ${TIERS.bundle.price}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
