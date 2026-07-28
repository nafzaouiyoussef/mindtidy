"use client";

import { CHECKOUT_URL, PRODUCT } from "@/lib/config";
import { trackMetaEvent } from "@/lib/meta-pixel";
import type { ReactNode } from "react";

type BuyButtonProps = {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * Every purchase CTA on the site renders through this component, so the
 * checkout destination lives in exactly one place (CHECKOUT_MODE in
 * lib/config.ts — "whop" uses the internal /checkout page, "payhip" uses
 * external Payhip links).
 */
export default function BuyButton({
  children = "Get the planner",
  href = CHECKOUT_URL,
  variant = "primary",
  className = "",
}: BuyButtonProps) {
  // Only external links open in a new tab; the internal /checkout page
  // should navigate in place.
  const isExternal = /^https?:\/\//.test(href);

  // A buy button always opens checkout → fire Meta Pixel InitiateCheckout.
  const handleClick = () => {
    trackMetaEvent("InitiateCheckout", {
      content_name: PRODUCT.name,
      content_type: "product",
      value: PRODUCT.price,
      currency: PRODUCT.currency,
      num_items: 1,
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      {children}
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8h10m0 0L9 4m4 4l-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
