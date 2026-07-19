import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import BrandSvg from "./BrandSvg";
import { PAYHIP_BUNDLE_URL, PRODUCT, BUNDLE } from "@/lib/config";

const BUNDLE_INCLUDES = [
  `${PRODUCT.name} (everything above)`,
  "Project Splitter — turn scary projects into tiny starts",
  "Routine Builder — mornings and evenings on autopilot",
  "Gentle Habit Tracker — no streak-shaming",
  "Dopamine Menu — pre-planned pick-me-ups for stuck days",
  "Brain Dump mega-pack — 15 extra sheets",
];

export default function Bundle() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="overflow-hidden rounded-4xl bg-slate shadow-lift">
          <div className="grid lg:grid-cols-5">
            {/* Left: pitch */}
            <div className="p-8 sm:p-12 lg:col-span-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-white">
                Best value · Save ${BUNDLE.compareAt - BUNDLE.price}
              </p>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Want the whole calm-brain toolkit?
              </h2>
              <p className="mt-4 leading-relaxed text-sage-light">
                The Complete Focus Kit is the planner plus everything around
                it — six tools for the moments planners alone don&apos;t
                cover: projects too scary to start, routines that never
                stick, and days when your brain needs a menu, not a lecture.
                One instant download.
              </p>

              <ul className="mt-8 space-y-3">
                {BUNDLE_INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-white">
                    <svg className="h-5 w-5 shrink-0 text-sage-light" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: price card */}
            <div className="flex flex-col justify-center gap-6 bg-white/5 p-8 sm:p-12 lg:col-span-2">
              <BrandSvg
                name="focus-kit"
                label="The Complete Focus Kit: Today's Reset planner surrounded by the Project Splitter, Habit Tracker, Dopamine Menu, and Routine Builder tools — 6 tools, one instant download, save 40%."
                className="overflow-hidden rounded-3xl"
              />
              <div className="text-center">
                <p className="font-heading text-sm font-semibold text-sage-light">
                  {BUNDLE.name}
                </p>
                <p className="mt-3 flex items-baseline justify-center gap-3">
                  <span className="text-lg text-sage-light line-through" aria-label={`Original price $${BUNDLE.compareAt}`}>
                    ${BUNDLE.compareAt}
                  </span>
                  <span className="font-heading text-6xl font-bold text-white">
                    ${BUNDLE.price}
                  </span>
                </p>
                <p className="mt-2 text-xs text-sage-light">
                  One-time purchase · instant download
                </p>
              </div>
              <BuyButton href={PAYHIP_BUNDLE_URL} className="w-full">
                Get the bundle — ${BUNDLE.price}
              </BuyButton>
              <p className="text-center text-xs text-sage-light">
                Instant download · 14-day money-back guarantee
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
