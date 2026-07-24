import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import BrandSvg from "./BrandSvg";
import { OFFER, PRICE_LABEL } from "@/lib/config";

function Check({ className = "text-sage-light" }: { className?: string }) {
  return (
    <svg className={`h-5 w-5 shrink-0 ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Bundle() {
  return (
    <section id="pricing" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-sage-dark">
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            Everything, in one download
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-light">
            One bundle, one price. No subscription, no upsell emails — you own
            the files forever.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div className="overflow-hidden rounded-4xl bg-slate shadow-lift">
            <div className="grid lg:grid-cols-5">
              {/* Left: what's included */}
              <div className="p-8 sm:p-12 lg:col-span-3">
                <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {OFFER.label}
                </h3>
                <p className="mt-3 leading-relaxed text-sage-light">
                  {OFFER.blurb}
                </p>

                <ul className="mt-8 space-y-3">
                  {OFFER.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-white"
                    >
                      <Check />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: price + CTA */}
              <div className="flex flex-col justify-center gap-6 bg-white/5 p-8 sm:p-12 lg:col-span-2">
                <BrandSvg
                  name="focus-kit"
                  label="The MindTidy bundle: the planner surrounded by its companion pages — one instant download."
                  className="overflow-hidden rounded-3xl"
                />

                <div className="text-center">
                  <p className="font-heading text-sm font-semibold text-sage-light">
                    {OFFER.label}
                  </p>
                  <p className="mt-3 flex items-baseline justify-center gap-3">
                    {OFFER.compareAt !== null && (
                      <span
                        className="text-lg text-sage-light line-through"
                        aria-label={`Regular price $${OFFER.compareAt}`}
                      >
                        ${OFFER.compareAt}
                      </span>
                    )}
                    <span className="font-heading text-6xl font-bold text-white">
                      {PRICE_LABEL}
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-sage-light">
                    One-time purchase · instant download
                  </p>
                </div>

                <BuyButton href={OFFER.url} className="w-full">
                  Get the bundle — {PRICE_LABEL}
                </BuyButton>

                <p className="text-center text-xs text-sage-light">
                  Instant download · 14-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
