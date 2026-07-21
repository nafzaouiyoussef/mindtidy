import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WhatsInside from "@/components/WhatsInside";
import Testimonials from "@/components/Testimonials";
import Bundle from "@/components/Bundle";
import FAQ from "@/components/FAQ";
import { FAQ_ITEMS } from "@/lib/faq";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, PRODUCT, PAYHIP_URL } from "@/lib/config";

/** Product + FAQ structured data for rich search results. */
function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: PRODUCT.name,
      description:
        "A calm, 10-page printable planner designed for ADHD adults. Brain dump, three daily must-dos, energy check-ins, and gentle habit tracking. Instant digital download for print or iPad.",
      brand: { "@type": "Brand", name: SITE_NAME },
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        price: PRODUCT.price.toFixed(2),
        priceCurrency: PRODUCT.currency,
        availability: "https://schema.org/InStock",
        url: PAYHIP_URL,
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

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <WhatsInside />
        <Testimonials />
        <Bundle />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
