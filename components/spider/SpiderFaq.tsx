"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQ_ITEMS } from "@/content/spider-man";

export default function SpiderFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="spider-faq" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-spider-blue">
            FAQ
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            Everything you might ask
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  data-open={isOpen}
                  className="faq-item overflow-hidden rounded-2xl border border-cream-dark bg-cream transition-colors data-[open=true]:border-spider-red/40"
                >
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading font-semibold text-slate transition-colors hover:text-spider-red"
                      aria-expanded={isOpen}
                      aria-controls={`spider-faq-panel-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      {item.q}
                      <svg
                        className="faq-chevron h-5 w-5 shrink-0 text-spider-red"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>
                  <div id={`spider-faq-panel-${i}`} className="faq-answer" role="region">
                    <div>
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-light">
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
