import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/** Shared shell for Privacy / Terms / Refund pages. */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <article className="prose-legal mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-muted">Last updated: {updated}</p>
          <div className="mt-10 space-y-8">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-slate">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-light [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
