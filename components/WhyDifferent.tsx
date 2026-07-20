import Reveal from "./Reveal";

const CARDS = [
  {
    emoji: "3️⃣",
    tint: "bg-blush",
    title: "Only 3 daily priorities, never 20",
    body: "The Daily Big 3 caps your list on purpose. Three things small enough to start and real enough to matter — finishing your list becomes the norm instead of the miracle.",
  },
  {
    emoji: "🐾",
    tint: "bg-mint",
    title: "Every task gets a “first tiny step” line",
    body: "“Write report” is unstartable. “Open the doc and type one bad sentence” isn't. Every task line comes with a tiny-first-step prompt, because starting is the whole battle.",
  },
  {
    emoji: "🌿",
    tint: "bg-lilac",
    title: "Gaps are expected: no dates, no streaks, no guilt",
    body: "The planner is undated and streak-free by design. Vanish for a week and nothing is wasted or 'ruined' — you just start a fresh page like nothing happened. Because nothing did.",
  },
];

export default function WhyDifferent() {
  return (
    <section id="why" className="scroll-mt-24 bg-blush/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-coral">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why this isn&apos;t another <em className="text-teal">pretty</em> planner
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            You&apos;ve bought planners before — they&apos;re in a drawer now.
            That&apos;s not a discipline problem. Those planners were built for
            a different kind of brain. This one makes three structural choices
            most planners won&apos;t:
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal
              as="li"
              key={card.title}
              delay={i * 120}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${card.tint}`}
                aria-hidden="true"
              >
                {card.emoji}
              </span>
              <h3 className="font-heading text-xl font-bold leading-snug text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {card.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
