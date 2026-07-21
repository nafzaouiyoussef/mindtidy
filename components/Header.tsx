"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import BuyButton from "./BuyButton";

const NAV_LINKS = [
  { href: "#why", label: "Why it works" },
  { href: "#inside", label: "What's inside" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" aria-label="MindTidy home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold text-slate-light transition-colors hover:text-slate"
            >
              {link.label}
            </a>
          ))}
          <BuyButton className="!px-6 !py-2.5 !text-sm">Buy now</BuyButton>
        </nav>

        <button
          type="button"
          className="rounded-full p-2 text-slate transition-colors hover:bg-sage-lighter md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-96 shadow-soft" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-5 pt-2" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-heading font-semibold text-slate transition-colors hover:bg-sage-lighter"
            >
              {link.label}
            </a>
          ))}
          <div className="px-4 pt-2">
            <BuyButton className="w-full">Buy now</BuyButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
