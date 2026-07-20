import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyDifferent from "@/components/WhyDifferent";
import WhatsInside from "@/components/WhatsInside";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { FAQ_ITEMS } from "@/content/faq";
import {
  SITE_URL,
  SITE_NAME,
  PRODUCT,
  TIERS,
  PAYHIP_URL_BUNDLE,
} from "@/lib/config";

/** Product + FAQ structured data for rich search results. */
function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: PRODUCT.name,
      description:
        "ADHD planner printable + digital stickers bundle: a 21-page undated ADHD planner (US Letter + A4) with Daily Big 3, time blocks, Shrink-the-Task sheets and a Dopamine Menu, plus 63 transparent-PNG digital stickers, a 6-page GoodNotes sticker book and a 2-page installation guide for GoodNotes, Notability and other PDF annotators. Instant digital download.",
      brand: { "@type": "Brand", name: SITE_NAME },
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        price: TIERS.bundle.price.toFixed(2),
        priceCurrency: PRODUCT.currency,
        availability: "https://schema.org/InStock",
        url: PAYHIP_URL_BUNDLE,
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
        <WhyDifferent />
        <WhatsInside />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
