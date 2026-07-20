"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { FAQ_ITEMS } from "@/content/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-lilac/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-lavender-dark">
            FAQ
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions? <em className="text-coral">Totally</em> fair.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  data-open={isOpen}
                  className="faq-item overflow-hidden rounded-2xl border border-ink/10 bg-white transition-colors data-[open=true]:border-lavender"
                >
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-body font-semibold text-ink transition-colors hover:text-teal"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      {item.q}
                      <svg
                        className="faq-chevron h-5 w-5 shrink-0 text-lavender"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>
                  <div id={`faq-panel-${i}`} className="faq-answer" role="region">
                    <div>
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
