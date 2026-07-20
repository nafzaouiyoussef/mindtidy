import Image from "next/image";
import BuyButton from "./BuyButton";
import Reveal from "./Reveal";
import { TIERS } from "@/lib/config";

const COMPAT_BADGES = ["GoodNotes", "Notability", "Print at home", "iPad & tablet"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-mint opacity-70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-blush opacity-60 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="tag mb-5 bg-mint text-teal">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              Planner + sticker system in one download
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
              A planner built for how ADHD brains{" "}
              <em className="text-coral">actually</em> work.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
              Not another rigid system to abandon by Thursday. You get the{" "}
              <strong className="font-semibold text-ink">
                21-page undated planner + 63 digital stickers + GoodNotes
                sticker book + installation guide
              </strong>{" "}
              — dump the chaos, pick three things, and actually start.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <BuyButton>Get the bundle — ${TIERS.bundle.price}</BuyButton>
              <a href="#inside" className="btn-secondary">
                See what&apos;s inside
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {COMPAT_BADGES.map((badge) => (
                <li key={badge} className="tag border border-ink/10 bg-white text-ink-soft">
                  <CheckIcon />
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[3rem] bg-sand blur-2xl" aria-hidden="true" />
            <Image
              src="/products/hero-mockup.png"
              alt="The MindTidy ADHD planner and digital sticker bundle shown on a tablet and printed pages"
              width={1200}
              height={900}
              priority
              className="relative z-10 rotate-2 rounded-4xl shadow-lift transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-teal" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
