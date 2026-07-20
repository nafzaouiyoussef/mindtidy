import Reveal from "./Reveal";
import { REVIEWS } from "@/content/reviews";

const ACCENT_CLASSES: Record<string, string> = {
  blush: "bg-blush text-coral-dark",
  mint: "bg-mint text-teal",
  sand: "bg-sand text-mustard-dark",
  lilac: "bg-lilac text-lavender-dark",
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-mustard" : "text-ink/10"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.28 5.53.72-4.06 3.95.96 5.55L10 14.3 5.1 17l.96-5.55L2 7.5l5.53-.72L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-sand/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-mustard-dark">
            Reviews
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From brains like <em className="text-coral">yours</em>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal
              as="li"
              key={review.initials + i}
              delay={(i % 3) * 100}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <Stars count={review.stars} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-body text-xs font-bold ${ACCENT_CLASSES[review.accent]}`}
                  aria-hidden="true"
                >
                  {review.initials}
                </span>
                <div>
                  <p className="font-body text-sm font-semibold text-ink">{review.initials}</p>
                  <p className="text-xs text-ink-muted">{review.meta}</p>
                </div>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
