import Image from "next/image";
import Reveal from "./Reveal";
import BuyButton from "./BuyButton";
import { PRODUCT, PRICE_LABEL } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="scroll-mt-24 px-5 pb-24 pt-4 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14 flex justify-center">
          <Image
            src="/products/page-02.png"
            alt="The welcome page from the MindTidy ADHD planner"
            width={1275}
            height={1650}
            loading="lazy"
            sizes="(max-width: 640px) 240px, 300px"
            className="w-60 rounded-3xl border border-cream-dark shadow-soft sm:w-72"
          />
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-4xl bg-sage px-8 py-14 text-center shadow-lift sm:px-14 sm:py-20">
          {/* decorative circles */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />

          <h2 className="relative font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Today could feel manageable.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-sage-lighter">
            Not perfect. Not optimized. Just… manageable. Download the{" "}
            {PRODUCT.shortName}, dump your brain onto the page, and pick your
            three things for tomorrow.
          </p>

          <div className="relative mt-9">
            <BuyButton className="!bg-white !text-sage-darker hover:!bg-cream">
              Get the bundle — {PRICE_LABEL}
            </BuyButton>
          </div>

          <div className="relative mx-auto mt-9 flex max-w-md items-center gap-4 rounded-2xl bg-white/10 p-4 text-left backdrop-blur-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl" aria-hidden="true">
              🛡️
            </span>
            <p className="text-sm leading-relaxed text-white">
              <strong className="font-heading">Try it for 14 days.</strong>{" "}
              If it doesn&apos;t work for your brain, email us for a full
              refund — and keep the files.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
