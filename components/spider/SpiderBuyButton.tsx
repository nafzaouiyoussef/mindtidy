"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { PRODUCT } from "@/lib/config";
import { SPIDER } from "@/content/spider-man";
import { trackMetaEvent } from "@/lib/meta-pixel";

/**
 * Every buy CTA on the Spider-Man page renders through this component so
 * (a) the destination lives in one place (SPIDER.checkoutPath), and (b)
 * every click fires a Meta Pixel InitiateCheckout with THIS product's
 * value/currency — not the ADHD bundle's.
 *
 * Falls back to a big "punchy red" primary style — see globals.css.
 */
export default function SpiderBuyButton({
  children = `Get the pattern — $${SPIDER.price}`,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    trackMetaEvent("InitiateCheckout", {
      content_name: SPIDER.name,
      content_type: "product",
      content_ids: ["spider-man-crochet"],
      value: SPIDER.price,
      currency: PRODUCT.currency, // same USD as the store
      num_items: 1,
    });
  };

  return (
    <Link
      href={SPIDER.checkoutPath}
      onClick={handleClick}
      className={`btn-spider ${className}`}
    >
      {children}
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8h10m0 0L9 4m4 4l-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
