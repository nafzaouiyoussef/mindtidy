import fs from "node:fs";
import path from "node:path";
import Reveal from "./Reveal";
import LeaveReview from "./LeaveReview";

/**
 * NOTE: These are placeholder reviews for layout/design purposes.
 * Replace with real customer reviews before launch — publishing
 * fabricated reviews as genuine can violate consumer-protection law
 * (e.g. FTC rules) and platform policies.
 *
 * `photo` files live in public/images/reviews/. A photo only renders
 * if the file actually exists, so missing files never break the page.
 */
const REVIEWS = [
  {
    name: "Sarah M.",
    role: "Freelance designer",
    stars: 5,
    text: "I've abandoned every planner I've ever bought — usually by week two. The three must-dos thing is the first system that doesn't make me feel like I'm failing at planning itself.",
    photo: "review-calendar.jpg",
    photoAlt: "The MindTidy monthly calendar page open on a laptop screen",
  },
  {
    name: "James T.",
    role: "Diagnosed at 34",
    stars: 5,
    text: "The brain dump page alone is worth it. I didn't realize how much energy I was spending just holding things in my head until I had somewhere to put them.",
  },
  {
    name: "Priya K.",
    role: "Grad student",
    stars: 5,
    text: "Using it on my iPad with GoodNotes. The energy check-in changed how I schedule — I stopped planning deep work for 3 p.m. when I'm basically a houseplant.",
    photo: "review-ipad.jpg",
    photoAlt: "The MindTidy planner cover open in a note-taking app on an iPad",
  },
  {
    name: "Dan R.",
    role: "Software engineer",
    stars: 4,
    text: "Skeptical at first because printables usually feel flimsy. This one is genuinely thought through — the 'waiting on' list quieted a whole category of background anxiety.",
  },
  {
    name: "Emily W.",
    role: "Mom of two",
    stars: 5,
    text: "No streaks, no guilt, no wall of tiny boxes. I missed four days last week, picked it back up Monday, and the page just… let me. That's new.",
    photo: "review-vision-board.jpg",
    photoAlt: "A filled-in MindTidy vision board page with photos, goals, and quotes",
  },
  {
    name: "Leo B.",
    role: "Small business owner",
    stars: 5,
    text: "The Sunday Reset is now the only routine I've kept for more than a month. Ten minutes and my week stops feeling like an ambush.",
  },
];

const REVIEW_PHOTO_DIR = path.join(process.cwd(), "public", "images", "reviews");

function photoExists(file?: string): file is string {
  return !!file && fs.existsSync(path.join(REVIEW_PHOTO_DIR, file));
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
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

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-terracotta-dark">
            Reviews
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            From brains like yours
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal
              as="li"
              key={review.name}
              delay={(i % 3) * 100}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              {photoExists(review.photo) && (
                <img
                  src={`/images/reviews/${review.photo}`}
                  alt={review.photoAlt ?? ""}
                  loading="lazy"
                  className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
                />
              )}
              <Stars count={review.stars} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-light">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-lighter font-heading text-sm font-bold text-sage-darker" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-slate">{review.name}</p>
                  <p className="text-xs text-slate-muted">{review.role}</p>
                </div>
              </footer>
            </Reveal>
          ))}
        </ul>

        {/* Local-only "leave a review" — saved in the visitor's own browser. */}
        <LeaveReview />
      </div>
    </section>
  );
}
