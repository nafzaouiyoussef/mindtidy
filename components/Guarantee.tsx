import Reveal from "./Reveal";

/** Short money-back guarantee callout, placed near the pricing + final CTA. */
export default function Guarantee() {
  return (
    <section className="px-5 pb-4 sm:px-8">
      <Reveal className="mx-auto flex max-w-3xl items-center gap-5 rounded-4xl border border-sage-light bg-sage-lighter/50 p-6 sm:p-8">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-3xl shadow-soft"
          aria-hidden="true"
        >
          🛡️
        </span>
        <p className="text-sm leading-relaxed text-slate sm:text-base">
          <strong className="font-heading font-bold">
            Try it for 14 days.
          </strong>{" "}
          If it doesn&apos;t work for your brain, email us for a full refund —
          and keep the files.
        </p>
      </Reveal>
    </section>
  );
}
