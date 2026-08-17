import type { Metadata } from "next";
import Image from "next/image";
import SpiderShell from "@/components/spider/SpiderShell";
import SpiderBuyButton from "@/components/spider/SpiderBuyButton";
import Reveal from "@/components/Reveal";
import MetaViewContent from "@/components/MetaViewContent";
import {
  SPIDER,
  AT_A_GLANCE,
  GALLERY,
  DELIVERABLES,
  FAQ_ITEMS,
} from "@/content/spider-man";
import SpiderFaq from "@/components/spider/SpiderFaq";
import { PRODUCT, SITE_URL, SITE_NAME } from "@/lib/config";

const priceLabel = `$${SPIDER.price.toFixed(2)}`;
const compareLabel = `$${SPIDER.compareAt}`;

export const metadata: Metadata = {
  title: `${SPIDER.name} — PDF Crochet Pattern`,
  description: SPIDER.subheadline,
  alternates: { canonical: SPIDER.path },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${SPIDER.path}`,
    siteName: SITE_NAME,
    title: `${SPIDER.name} — PDF Crochet Pattern`,
    description: SPIDER.subheadline,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SPIDER.name} — PDF Crochet Pattern`,
    description: SPIDER.subheadline,
  },
};

function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: SPIDER.name,
      description: SPIDER.subheadline,
      brand: { "@type": "Brand", name: SITE_NAME },
      url: `${SITE_URL}${SPIDER.path}`,
      image: `${SITE_URL}/spider-man/page-01.jpg`,
      offers: {
        "@type": "Offer",
        price: SPIDER.price.toFixed(2),
        priceCurrency: PRODUCT.currency,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}${SPIDER.checkoutPath}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function Check({ className = "text-spider-red" }: { className?: string }) {
  return (
    <svg className={`h-5 w-5 shrink-0 ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SpiderManPage() {
  return (
    <SpiderShell>
      <StructuredData />
      <MetaViewContent targetId="spider-pricing" />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="spider-hero" className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute -top-24 right-[-15%] h-96 w-96 rounded-full bg-spider-red-tint opacity-70 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-[-15%] h-72 w-72 rounded-full bg-spider-blue-tint opacity-60 blur-3xl" aria-hidden="true" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-spider-red-tint px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-spider-red-dark">
                <span className="h-2 w-2 rounded-full bg-spider-red" aria-hidden="true" />
                Amigurumi pattern · US terms
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-slate sm:text-5xl lg:text-[3.2rem]">
                {SPIDER.name.split("Spider-Man").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-spider-red">Spider-Man</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-light lg:mx-0">
                {SPIDER.tagline} A <strong className="font-semibold text-slate">12-page beginner-friendly PDF pattern</strong> for a mini amigurumi with a hand-crocheted web. Perfect on a car mirror or a bag charm.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <SpiderBuyButton>
                  Get the pattern — {priceLabel}
                </SpiderBuyButton>
                <p className="flex items-baseline gap-2 text-sm text-slate-muted">
                  <span className="line-through">{compareLabel}</span>
                  <span className="rounded-full bg-spider-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Launch price
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-muted lg:justify-start">
                <li className="flex items-center gap-1.5"><Check /> Instant PDF</li>
                <li className="flex items-center gap-1.5"><Check /> Step-by-step photos</li>
                <li className="flex items-center gap-1.5"><Check /> 14-day guarantee</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-6">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[3rem] bg-spider-red-tint blur-2xl" aria-hidden="true" />
              <Image
                src="/spider-man/page-01.jpg"
                alt="Cover of the Mini Spider-Man Crochet Keychain PDF pattern — a red-and-blue amigurumi keychain hanging with a crocheted white web"
                width={1075}
                height={1521}
                priority
                sizes="(max-width: 1024px) 88vw, 460px"
                className="relative z-10 rotate-1 rounded-3xl border border-cream-dark shadow-lift transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── At a glance ─────────────────────────────────────── */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-spider-red">
              At a glance
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate sm:text-3xl">
              What&apos;s in the pattern
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AT_A_GLANCE.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                delay={(i % 3) * 80}
                className="flex items-start gap-3 rounded-2xl border border-cream-dark bg-cream p-5"
              >
                <Check />
                <div>
                  <p className="font-heading font-bold text-slate">{item.label}</p>
                  <p className="text-sm text-slate-light">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Gallery: real pages ─────────────────────────────── */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-spider-blue">
              Inside the PDF
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
              Every step, every photo.
            </h2>
            <p className="mt-3 text-slate-light">
              Actual pages from the pattern — swipe through to see exactly
              what you get.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <ul
              className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Real pages from the pattern"
            >
              {GALLERY.map((page, i) => (
                <li key={page.src} className="w-56 shrink-0 snap-center sm:w-64">
                  <div className="overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-soft">
                    <Image
                      src={page.src}
                      alt={`${page.caption} — actual page from the ${SPIDER.name} pattern`}
                      width={1075}
                      height={1521}
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
              12 pages total — this is a preview of 7. What you see is exactly
              what you download.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Deliverables ────────────────────────────────────── */}
      <section className="bg-cream-dark px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-spider-red">
              Exactly what you get
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
              One PDF. Zero missing pieces.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10 rounded-4xl border border-cream-dark bg-white p-6 shadow-soft sm:p-10">
            <ul className="grid gap-6 sm:grid-cols-2">
              {DELIVERABLES.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <Check />
                  <div>
                    <h3 className="flex items-center gap-2 font-heading text-base font-bold text-slate">
                      <span aria-hidden="true">{item.emoji}</span>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-light">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10 text-center">
            <SpiderBuyButton>Get the pattern — {priceLabel}</SpiderBuyButton>
          </Reveal>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section id="spider-pricing" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-spider-red">
              Pricing
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
              Instant download
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <div className="relative overflow-hidden rounded-4xl bg-spider-blue p-8 shadow-lift sm:p-12">
              <span className="inline-flex items-center rounded-full bg-spider-red px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-white">
                Launch price
              </span>

              <h3 className="mt-5 font-heading text-2xl font-bold text-white">
                {SPIDER.name}
              </h3>
              <p className="mt-2 leading-relaxed text-spider-blue-tint">
                12-page PDF pattern · US crochet terms · lifetime access.
              </p>

              <p className="mt-6 flex items-baseline gap-3">
                <span className="text-2xl text-spider-blue-tint line-through">
                  {compareLabel}
                </span>
                <span className="font-heading text-6xl font-bold text-white">
                  {priceLabel}
                </span>
                <span className="text-sm text-spider-blue-tint">one-time</span>
              </p>

              <SpiderBuyButton className="mt-8 w-full">
                Get the pattern — {priceLabel}
              </SpiderBuyButton>

              <p className="mt-4 text-center text-xs leading-relaxed text-spider-blue-tint">
                🔒 Secure checkout&nbsp;·&nbsp;⚡ Instant PDF&nbsp;·&nbsp;💛
                14-day money-back guarantee
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Guarantee ───────────────────────────────────────── */}
      <section className="px-5 pb-4 sm:px-8">
        <Reveal className="mx-auto flex max-w-3xl items-center gap-5 rounded-4xl border border-spider-red/25 bg-spider-red-tint/50 p-6 sm:p-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-3xl shadow-soft" aria-hidden="true">
            🛡️
          </span>
          <p className="text-sm leading-relaxed text-slate sm:text-base">
            <strong className="font-heading font-bold">Try it for 14 days.</strong>{" "}
            If the pattern isn&apos;t a fit, email us for a full refund — and
            keep the PDF.
          </p>
        </Reveal>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <SpiderFaq />

      {/* ── Final CTA ───────────────────────────────────────── */}
      <section className="px-5 pb-24 pt-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal className="relative overflow-hidden rounded-4xl bg-spider-blue px-8 py-14 text-center shadow-lift sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />

            <h2 className="relative font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to stitch?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-spider-blue-tint">
              Grab the PDF, cast on today, and have a tiny hero swinging from
              your rear-view mirror by the weekend.
            </p>
            <div className="relative mt-8">
              <SpiderBuyButton className="!bg-white !text-spider-red hover:!bg-cream hover:!text-spider-red-dark">
                Get the pattern — {priceLabel}
              </SpiderBuyButton>
            </div>
          </Reveal>
        </div>
      </section>
    </SpiderShell>
  );
}
