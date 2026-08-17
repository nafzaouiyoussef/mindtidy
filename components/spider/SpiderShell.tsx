import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "@/components/Logo";
import { SPIDER } from "@/content/spider-man";
import { CONTACT_EMAIL } from "@/lib/config";

/**
 * Minimal shell for the Spider-Man product pages.
 *
 * Deliberately NO nav links (Why it works / Reviews / FAQ / etc.) — this
 * is a Facebook-ad landing page, so we don't give buyers escape routes.
 * Just the logo and a footer with policies + contact.
 */
export default function SpiderShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cream-dark bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href={SPIDER.path} aria-label="MindTidy home">
            <Logo />
          </Link>
          <span className="hidden text-xs font-semibold uppercase tracking-wider text-slate-muted sm:inline">
            Crochet pattern shop
          </span>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-cream-dark bg-cream-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center text-xs text-slate-muted sm:flex-row sm:justify-between sm:px-8 sm:text-left">
          <p>
            © {new Date().getFullYear()} MindTidy · Made with love, one loop
            at a time.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate">
              {CONTACT_EMAIL}
            </a>
            <Link href="/refunds" className="hover:text-slate">Refunds</Link>
            <Link href="/terms" className="hover:text-slate">Terms</Link>
            <Link href="/privacy" className="hover:text-slate">Privacy</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
