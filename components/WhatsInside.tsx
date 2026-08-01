import Image from "next/image";
import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import { PRODUCT, PRICE_LABEL } from "@/lib/config";

/** Real planner pages shown in the swipeable gallery. */
const GALLERY = [
  { src: "/products/page-05.png", caption: "Daily page — only 3 priorities" },
  { src: "/products/page-11.png", caption: "Dopamine Menu" },
  { src: "/products/page-07.png", caption: "Shrink the Task" },
  { src: "/products/page-10.png", caption: "Shame-free Habit Builder" },
  { src: "/products/page-12.png", caption: "For the days you can't start" },
  { src: "/products/page-08.png", caption: "Weekly overview" },
];

const PLANNER_PAGES = [
  {
    emoji: "🎯",
    title: "Daily Big 3",
    body: "Three priorities, never twenty — each with a tiny-first-step line so starting stops being the hard part.",
  },
  {
    emoji: "⏱️",
    title: "Time Blocks",
    body: "A visual day map with hyperfocus alarms, so time feels concrete instead of slipping away.",
  },
  {
    emoji: "🔪",
    title: "Shrink-the-Task",
    body: "A breakdown sheet that chops a scary project into steps small enough to actually begin.",
  },
  {
    emoji: "🍩",
    title: "Dopamine Menu",
    body: "Pre-planned pick-me-ups for stuck days, so “take a break” becomes an actual plan.",
  },
  {
    emoji: "🧰",
    title: "“Can't Get Started?” toolkit",
    body: "Six go-to tactics for the 2 p.m. wall — written by someone who's been stuck there too.",
  },
  {
    emoji: "🌱",
    title: "Shame-free Habit Builder",
    body: "Track habits with no streaks to break. Missed a day? The page doesn't care. Just pick it back up.",
  },
  {
    emoji: "🔄",
    title: "10-Minute Weekly Reset",
    body: "A short weekly ritual to empty your head, review the week, and set up the next one — gently.",
  },
  {
    emoji: "🌙",
    title: "Monthly Reflection",
    body: "Look back kindly once a month: what worked, what didn't, and what to carry forward.",
  },
  {
    emoji: "🏆",
    title: "Reward Bank",
    body: "Bank the treats you're working toward, so your brain has a reason to finish the boring thing.",
  },
  {
    emoji: "🧠",
    title: "Brain Dump",
    body: "Unlimited overflow space for the 3 a.m. thoughts and the “don't forget!” list.",
  },
  {
    emoji: "⏳",
    title: "Waiting On",
    body: "Park the loose ends you're waiting on, so your brain stops re-reminding you at the worst times.",
  },
  {
    emoji: "💡",
    title: "Idea Parking Lot",
    body: "A safe home for every shiny idea — captured now, so you can get back to the task at hand.",
  },
];

const STICKER_TYPES = [
  "Action labels",
  "Kind-words quotes",
  "Checkboxes",
  "Priority numbers",
  "Energy batteries",
  "Mood faces",
  "Focus timers",
  "Washi tape",
  "Day tabs",
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
            Two parts. One calm system.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-light">
            The {PRODUCT.name} pairs a 21-page undated planner with a 63-piece
            digital sticker system — designed with lots of white space, because
            white space is where your brain gets to breathe.
          </p>
        </Reveal>

        {/* ── Swipeable gallery of real pages ─────────────────── */}
        <Reveal delay={100} className="mt-12">
          <ul
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Real pages from the planner"
          >
            {GALLERY.map((page, i) => (
              <li
                key={page.src}
                className="w-56 shrink-0 snap-center sm:w-64"
              >
                <div className="overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-soft">
                  <Image
                    src={page.src}
                    alt={`${page.caption} — an actual page from the MindTidy ADHD planner`}
                    width={1275}
                    height={1650}
                    loading={i === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 224px, 256px"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 px-1 text-center text-sm font-medium text-slate">
                  {page.caption}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm italic text-slate-muted">
            Actual pages from the planner — what you see is exactly what you
            download.
          </p>
        </Reveal>

        {/* ── Part 1: The Planner ─────────────────────────────── */}
        <Reveal className="mt-16 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-lighter px-4 py-1.5 font-heading text-sm font-semibold text-sage-darker">
            Part 1 · The Planner
          </span>
          <p className="text-sm font-medium text-slate-light">
            21 pages · undated — start any day, reprint forever
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANNER_PAGES.map((feature, i) => (
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

        {/* ── Part 2: The Sticker System ──────────────────────── */}
        <Reveal className="mt-16 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-terracotta-light px-4 py-1.5 font-heading text-sm font-semibold text-terracotta-dark">
            Part 2 · The Sticker System
          </span>
          <p className="text-sm font-medium text-slate-light">
            63 transparent PNGs + GoodNotes sticker book + installation guide
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-8 max-w-3xl rounded-3xl border border-cream-dark bg-cream p-8 text-center">
          <p className="text-sm leading-relaxed text-slate-light">
            Drag-and-drop stickers that do the writing for you:
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {STICKER_TYPES.map((type) => (
              <li
                key={type}
                className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-light shadow-soft"
              >
                {type}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-slate-light">
            Plus a <strong className="font-semibold text-slate">6-page
            GoodNotes sticker book</strong> and a{" "}
            <strong className="font-semibold text-slate">2-page
            installation guide</strong> for GoodNotes and Notability. Peek at
            the full grid{" "}
            <a href="#stickers" className="font-semibold text-sage-darker underline decoration-sage-light underline-offset-2 hover:text-sage-dark">
              just below
            </a>
            .
          </p>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <BuyButton>
            Get the bundle — {PRICE_LABEL}
          </BuyButton>
        </Reveal>
      </div>
    </section>
  );
}
