import Reveal from "./Reveal";
import BrandSvg from "./BrandSvg";

const PROBLEMS = [
  {
    title: "They assume you'll remember to use them",
    body: "Generic planners rely on the exact skills ADHD makes hard: remembering, sequencing, and sticking to routines. Miss two days and the guilt makes you avoid it entirely.",
  },
  {
    title: "They're overwhelming by design",
    body: "Hourly grids, habit matrices, five colors of ink. For a brain that struggles to filter, a “full-featured” page isn't helpful — it's noise you have to fight through before you can start.",
  },
  {
    title: "They treat every day like it's the same",
    body: "Your energy and focus aren't flat lines. A rigid template that expects the same output every day is a template you'll abandon the first time real life happens.",
  },
];

const SOLUTIONS = [
  {
    title: "Brain dump first, plan second",
    body: "Every page starts by getting the swirl out of your head. Once it's on paper, your working memory is free to actually do things instead of holding things.",
  },
  {
    title: "Three must-dos. That's it.",
    body: "Not twenty tasks — three. Small enough to start, real enough to matter. Finishing your list becomes the norm, and momentum does the rest.",
  },
  {
    title: "Built around your energy",
    body: "A quick energy check-in helps you match tasks to how you actually feel today. Low-energy day? The planner bends. No shame, no broken streaks.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="why" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-terracotta-dark">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            You&apos;ve bought planners before. They&apos;re in a drawer now.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-light">
            That&apos;s not a discipline problem. Those planners were built for
            a different kind of brain.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Problems */}
          <Reveal className="rounded-4xl bg-white p-8 shadow-soft sm:p-10">
            <h3 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold text-slate">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-dark text-xl" aria-hidden="true">
                ✕
              </span>
              Why generic planners fail
            </h3>
            <ul className="space-y-6">
              {PROBLEMS.map((item) => (
                <li key={item.title}>
                  <h4 className="font-heading font-semibold text-slate">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-light">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Solutions */}
          <Reveal delay={150} className="rounded-4xl bg-sage p-8 shadow-soft sm:p-10">
            <h3 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/25 text-white" aria-hidden="true">
                <svg className="h-5 w-5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              How MindTidy is different
            </h3>
            <ul className="space-y-6">
              {SOLUTIONS.map((item) => (
                <li key={item.title}>
                  <h4 className="font-heading font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-sage-lighter">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100} className="mx-auto mt-14 max-w-3xl">
          <BrandSvg
            name="features"
            label="Calm your mind: every page designed around how ADHD brains actually work — brain dump first, only 3 priorities, a done list that celebrates progress, time anchors for time blindness, focus sprint pages with built-in breaks, and undated pages so you can skip days guilt-free."
            className="overflow-hidden rounded-4xl shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
}
