import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import BrandSvg from "./BrandSvg";
import { PRODUCT } from "@/lib/config";

const FEATURES = [
  {
    emoji: "🧠",
    title: "Daily Reset page",
    body: "Brain dump, three must-dos, and an energy check — one calm page that takes two minutes to fill in.",
  },
  {
    emoji: "📝",
    title: "Brain Dump sheets",
    body: "Unlimited overflow space for the 3 a.m. thoughts, the “don't forget!” list, and everything in between.",
  },
  {
    emoji: "⏱️",
    title: "Time-blindness time blocker",
    body: "A visual day map that makes time feel concrete — see where your hours actually go, without hourly-grid overwhelm.",
  },
  {
    emoji: "🍅",
    title: "Focus sprint tracker",
    body: "Simple sprint-and-break checkboxes for body-doubling with yourself. Start with just 10 minutes.",
  },
  {
    emoji: "🌱",
    title: "Gentle habit tracker",
    body: "Track up to five habits with no streak-shaming. Missed a day? The page doesn't care. Just pick it back up.",
  },
  {
    emoji: "📥",
    title: "Weekly Sunday Reset",
    body: "A 10-minute weekly ritual page to empty your head, review the week, and set up the next one — gently.",
  },
  {
    emoji: "💭",
    title: "“Waiting on” + “Someday” lists",
    body: "Park the ideas and loose ends somewhere safe, so your brain stops re-reminding you at the worst times.",
  },
  {
    emoji: "📱",
    title: "Print & iPad versions",
    body: "US Letter and A4 PDFs, plus a hyperlinked digital version for GoodNotes, Notability, and other PDF annotators.",
  },
];

export default function WhatsInside() {
  return (
    <section id="inside" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-sage-dark">
            What&apos;s inside
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            10 pages. Zero clutter. Everything on purpose.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-light">
            The {PRODUCT.name} includes every page below — designed with lots
            of white space, because white space is where your brain gets to
            breathe.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
          <BrandSvg
            name="whats-inside"
            label="What's inside: Brain Dump, Daily Reset, Focus Sprint, and Weekly Reset pages, plus Someday and Waiting-On lists."
            className="overflow-hidden rounded-4xl shadow-soft"
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal
              as="li"
              key={feature.title}
              delay={(i % 4) * 90}
              className="group rounded-3xl border border-cream-dark bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage-light hover:shadow-lift"
            >
              <span
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                {feature.emoji}
              </span>
              <h3 className="font-heading text-lg font-bold text-slate">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-light">
                {feature.body}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <BuyButton>
            Get all 10 pages — ${PRODUCT.price}
          </BuyButton>
        </Reveal>
      </div>
    </section>
  );
}
