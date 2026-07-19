import { PAYHIP_URL } from "@/lib/config";
import type { ReactNode } from "react";

type BuyButtonProps = {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * Every purchase CTA on the site renders through this component,
 * so the checkout destination lives in exactly one place (lib/config.ts).
 */
export default function BuyButton({
  children = "Get the planner",
  href = PAYHIP_URL,
  variant = "primary",
  className = "",
}: BuyButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
