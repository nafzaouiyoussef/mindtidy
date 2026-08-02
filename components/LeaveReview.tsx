"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mindtidy:my-review:v1";

type LocalReview = {
  initials: string;
  stars: number;
  text: string;
  createdAt: string;
};

function loadReview(): LocalReview | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.text === "string" &&
      typeof parsed.stars === "number"
    ) {
      return parsed as LocalReview;
    }
  } catch {
    /* ignore corrupt storage */
  }
  return null;
}

/** Small star row for both the display card and the star picker. */
function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-terracotta" : "text-cream-dark"}`}
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

export default function LeaveReview() {
  const [mounted, setMounted] = useState(false);
  const [review, setReview] = useState<LocalReview | null>(null);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState(5);

  // Hydrate from localStorage after mount so SSR + client match.
  useEffect(() => {
    setMounted(true);
    setReview(loadReview());
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    const trimmedName = name.trim();
    if (trimmedText.length < 20) return;

    // Turn a name into initials — no full names or emails stored.
    const initials =
      trimmedName
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join(".") + "." || "You";

    const next: LocalReview = {
      initials,
      stars,
      text: trimmedText.slice(0, 500),
      createdAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setReview(next);
    setName("");
    setText("");
    setStars(5);
  };

  const remove = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setReview(null);
  };

  // Avoid a client/server mismatch flash while hydrating.
  if (!mounted) return null;

  return (
    <div className="mx-auto mt-14 max-w-2xl">
      {review ? (
        <section
          aria-label="Your saved review"
          className="rounded-3xl border-2 border-dashed border-sage-light bg-white p-7 shadow-soft"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-sage-dark">
            Your review · saved on this device only
          </p>
          <Stars count={review.stars} />
          <blockquote className="mt-4 text-sm leading-relaxed text-slate-light">
            &ldquo;{review.text}&rdquo;
          </blockquote>
          <footer className="mt-5 flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-lighter font-heading text-sm font-bold text-sage-darker"
              aria-hidden="true"
            >
              {review.initials}
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-slate">
                {review.initials}
              </p>
              <p className="text-xs text-slate-muted">
                Only visible on this browser · not published
              </p>
            </div>
          </footer>
          <button
            type="button"
            onClick={remove}
            className="mt-5 text-xs font-semibold text-slate-muted underline underline-offset-2 hover:text-slate"
          >
            Delete my review
          </button>
        </section>
      ) : (
        <section
          aria-label="Leave a review"
          className="rounded-3xl border border-cream-dark bg-cream p-7 shadow-soft"
        >
          <h3 className="font-heading text-xl font-bold text-slate">
            Share your experience
          </h3>

          <form onSubmit={submit} className="mt-5 space-y-4">
            <fieldset>
              <legend className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-muted">
                Rating
              </legend>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setStars(n)}
                    aria-label={`${n} star${n === 1 ? "" : "s"}`}
                    aria-pressed={stars >= n}
                    className="rounded-md p-1 transition-transform hover:scale-110"
                  >
                    <svg
                      className={`h-6 w-6 ${stars >= n ? "text-terracotta" : "text-cream-dark"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10 1.5l2.47 5.28 5.53.72-4.06 3.95.96 5.55L10 14.3 5.1 17l.96-5.55L2 7.5l5.53-.72L10 1.5z" />
                    </svg>
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="review-name"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-muted"
              >
                Name <span className="font-normal">(optional — initials only)</span>
              </label>
              <input
                id="review-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
                placeholder="e.g. Sam Rivera"
                className="w-full rounded-xl border border-cream-dark bg-white px-4 py-2.5 font-body text-sm text-slate outline-none transition focus:border-sage-light focus:ring-2 focus:ring-sage-lighter"
              />
            </div>

            <div>
              <label
                htmlFor="review-text"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-muted"
              >
                Your review
              </label>
              <textarea
                id="review-text"
                required
                minLength={20}
                maxLength={500}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                placeholder="What worked for your brain? What would you tell someone thinking about it?"
                className="w-full resize-none rounded-xl border border-cream-dark bg-white px-4 py-2.5 font-body text-sm text-slate outline-none transition focus:border-sage-light focus:ring-2 focus:ring-sage-lighter"
              />
              <p className="mt-1 text-right text-xs text-slate-muted">
                {text.trim().length}/500
              </p>
            </div>

            <button
              type="submit"
              disabled={text.trim().length < 20}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-terracotta disabled:hover:shadow-soft"
            >
              Save my review
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
