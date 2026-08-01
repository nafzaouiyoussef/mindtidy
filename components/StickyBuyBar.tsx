"use client";

import { useEffect, useState } from "react";
import BuyButton from "./BuyButton";
import { PRICE_LABEL } from "@/lib/config";

/**
 * Slim sticky buy bar for mobile. Appears once the hero has scrolled out of
 * view, so ~90% mobile-ad traffic always has a reachable CTA. Hidden on
 * desktop (md+), where the header CTA stays visible.
 */
export default function StickyBuyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" }, // account for the fixed header
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-cream-dark bg-cream/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="leading-tight">
          <p className="font-heading text-lg font-bold text-slate">
            {PRICE_LABEL}
          </p>
          <p className="text-xs text-slate-muted">The Complete Bundle</p>
        </div>
        <BuyButton className="!px-6 !py-3">Get the bundle</BuyButton>
      </div>
    </div>
  );
}
