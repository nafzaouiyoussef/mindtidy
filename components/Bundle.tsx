import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import { OFFER, formatPrice } from "@/lib/config";

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
      <div className="mx-auto max-w-2xl">
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

        <Reveal delay={100} className="mt-12">
          <div className="relative overflow-hidden rounded-4xl bg-slate p-8 shadow-lift sm:p-12">
            <span className="inline-flex items-center rounded-full bg-terracotta px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-white">
              {OFFER.badge}
            </span>

            <h3 className="mt-5 font-heading text-2xl font-bold text-white">
              {OFFER.label}
            </h3>
            <p className="mt-2 leading-relaxed text-sage-light">
              {OFFER.blurb}
            </p>

            <p className="mt-6 flex items-baseline gap-3">
              <span
                className="text-2xl text-sage-light line-through"
                aria-label={`Regular price ${formatPrice(OFFER.compareAt)}`}
              >
                {formatPrice(OFFER.compareAt)}
              </span>
              <span className="font-heading text-6xl font-bold text-white">
                {formatPrice(OFFER.price)}
              </span>
              <span className="text-sm text-sage-light">one-time</span>
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {OFFER.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white">
                  <Check className="text-sage-light" />
                  {feature}
                </li>
              ))}
            </ul>

            <BuyButton href={OFFER.url} className="mt-9 w-full">
              Get the bundle — {formatPrice(OFFER.price)}
            </BuyButton>

            <p className="mt-4 text-center text-xs leading-relaxed text-sage-light">
              🔒 Secure checkout&nbsp;·&nbsp;⚡ Instant download&nbsp;·&nbsp;💛
              14-day money-back guarantee
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
