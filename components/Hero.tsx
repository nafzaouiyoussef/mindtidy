import Image from "next/image";
import BuyButton from "./BuyButton";
import Reveal from "./Reveal";
import { PRICE_LABEL } from "@/lib/config";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-sage-lighter opacity-60 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-terracotta-light opacity-30 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sage-lighter px-4 py-1.5 font-heading text-sm font-semibold text-sage-darker">
              <span className="h-2 w-2 rounded-full bg-terracotta" aria-hidden="true" />
              Built for brains with 47 tabs open
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-slate sm:text-5xl lg:text-[3.4rem]">
              Your brain has enough tabs open.{" "}
              <span className="text-sage-dark">Give every thought a home.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-light lg:mx-0">
              Made for ADHD adults — not another rigid system to abandon by
              Thursday. You get a{" "}
              <strong className="font-semibold text-slate">
                21-page undated ADHD planner
              </strong>{" "}
              plus{" "}
              <strong className="font-semibold text-slate">
                63 digital stickers, a GoodNotes sticker book, and an
                installation guide
              </strong>
              . Dump the chaos, pick three things, and actually start.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <BuyButton>
                Get the bundle — {PRICE_LABEL}
              </BuyButton>
              <a href="#inside" className="btn-secondary">
                See what&apos;s inside
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            {/* Compatibility badges */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {["GoodNotes", "Notability", "Print at home", "iPad & tablet"].map(
                (label) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cream-dark bg-white px-3 py-1.5 text-xs font-semibold text-slate-light"
                  >
                    <CheckIcon />
                    {label}
                  </li>
                )
              )}
            </ul>
          </Reveal>

          <Reveal delay={500}>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-muted lg:justify-start">
              <li className="flex items-center gap-1.5">
                <CheckIcon /> Instant download
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon /> Undated · reuse forever
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon /> 14-day guarantee
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[3rem] bg-sage-lighter blur-2xl" aria-hidden="true" />
            <Image
              src="/products/whats-inside-collage.png"
              alt="A collage of real pages from the MindTidy ADHD planner and its digital stickers"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 88vw, 460px"
              className="relative z-10 rotate-2 rounded-[2rem] shadow-lift transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-sage-dark" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
