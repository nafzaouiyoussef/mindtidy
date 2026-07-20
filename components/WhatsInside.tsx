import Image from "next/image";
import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import { TIERS } from "@/lib/config";

const PLANNER_PAGES = [
  { emoji: "🎯", label: "Daily Big 3", detail: "with tiny-first-step lines" },
  { emoji: "⏰", label: "Time Blocks", detail: "with hyperfocus alarms" },
  { emoji: "🔪", label: "Shrink-the-Task", detail: "breakdown sheet" },
  { emoji: "🍩", label: "Dopamine Menu", detail: "pre-planned pick-me-ups" },
  { emoji: "🧰", label: "“Can't Get Started?” toolkit", detail: "6 tactics" },
  { emoji: "🌱", label: "Habit Builder", detail: "shame-free, no streaks" },
  { emoji: "🔄", label: "10-Minute Weekly Reset", detail: "gentle ritual" },
  { emoji: "🌙", label: "Monthly Reflection", detail: "look back kindly" },
  { emoji: "🏆", label: "Reward Bank", detail: "earn your treats" },
  { emoji: "🧠", label: "Brain Dump", detail: "unload the swirl" },
  { emoji: "⏳", label: "Waiting On", detail: "park the loose ends" },
  { emoji: "💡", label: "Idea Parking Lot", detail: "for the 2 a.m. ideas" },
  { emoji: "🗓️", label: "Someday / Maybe", detail: "guilt-free backlog" },
  { emoji: "📝", label: "Notes", detail: "free space" },
];

const STICKER_ITEMS = [
  "Action labels",
  "Kind-words quotes",
  "Checkboxes in 4 colors",
  "Priority numbers",
  "Energy batteries",
  "Mood faces",
  "Focus timers",
  "Washi tape",
  "Day tabs",
  "Flags",
  "Speech bubbles",
];

export default function WhatsInside() {
  return (
    <section id="inside" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-teal">
            What&apos;s inside
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything you need. <em className="text-coral">Nothing</em> that
            becomes homework.
          </h2>
        </Reveal>

        {/* ── Part 1: The Planner ─────────────────────────────── */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <Image
                src="/products/planner-daily-page.png"
                alt="The Daily Big 3 page from the MindTidy ADHD planner"
                width={800}
                height={1035}
                className="rotate-[-2deg] rounded-2xl shadow-lift"
              />
              <Image
                src="/products/planner-dopamine-menu.png"
                alt="The Dopamine Menu page from the MindTidy ADHD planner"
                width={800}
                height={1035}
                className="absolute -bottom-8 -right-6 w-2/3 rotate-3 rounded-2xl shadow-lift sm:-right-10"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal>
              <p className="tag bg-mint text-teal">Part 1 · The Planner</p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-3xl">
                21 undated pages, every one on purpose
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Undated — start any day, skip any week, reprint forever. US
                Letter and A4 included.
              </p>
            </Reveal>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {PLANNER_PAGES.map((page, i) => (
                <Reveal
                  as="li"
                  key={page.label}
                  delay={(i % 2) * 80}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft"
                >
                  <span className="text-xl" aria-hidden="true">{page.emoji}</span>
                  <span className="text-sm">
                    <strong className="font-semibold text-ink">{page.label}</strong>{" "}
                    <span className="text-ink-muted">— {page.detail}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Part 2: The Sticker System ──────────────────────── */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-5">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <Reveal>
              <p className="tag bg-lilac text-lavender-dark">
                Part 2 · The Sticker System
              </p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-3xl">
                63 digital stickers that do the writing for you
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Transparent PNGs that work in any app, plus a{" "}
                <strong className="font-semibold text-ink">
                  6-page GoodNotes sticker book
                </strong>{" "}
                and a{" "}
                <strong className="font-semibold text-ink">
                  2-page installation guide
                </strong>{" "}
                covering GoodNotes 6/5, Notability and other PDF annotators.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-7 flex flex-wrap gap-2">
                {STICKER_ITEMS.map((item, i) => (
                  <li
                    key={item}
                    className={`tag ${
                      ["bg-blush text-coral-dark", "bg-mint text-teal", "bg-sand text-mustard-dark", "bg-lilac text-lavender-dark"][i % 4]
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100} className="order-1 lg:order-2 lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <Image
                src="/products/sticker-grid.png"
                alt="Grid of the 63 MindTidy digital stickers: checkboxes, energy batteries, mood faces, washi tape and more"
                width={1200}
                height={900}
                className="rotate-2 rounded-2xl shadow-lift"
              />
              <Image
                src="/products/sticker-book-cover.png"
                alt="Cover of the MindTidy GoodNotes sticker book"
                width={800}
                height={1035}
                className="absolute -bottom-8 -left-6 w-1/2 rotate-[-4deg] rounded-2xl shadow-lift sm:-left-10"
              />
            </div>
          </Reveal>
        </div>

        {/* ── In-use shot + CTA ───────────────────────────────── */}
        <Reveal className="mt-24 overflow-hidden rounded-4xl bg-mint">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                Paper person? iPad person? <em className="text-teal">Both?</em>
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Print the pages you need at home, or import the whole planner
                into GoodNotes or Notability and drop stickers straight from
                the sticker book. The installation guide covers it step by
                step.
              </p>
              <div className="mt-6">
                <BuyButton>Get everything — ${TIERS.bundle.price}</BuyButton>
              </div>
            </div>
            <Image
              src="/products/ipad-goodnotes.png"
              alt="The MindTidy planner open in GoodNotes on an iPad with digital stickers applied"
              width={1200}
              height={900}
              className="rounded-2xl shadow-lift"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
