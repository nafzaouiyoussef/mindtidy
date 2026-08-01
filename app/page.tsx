import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WhatsInside from "@/components/WhatsInside";
import StickerShowcase from "@/components/StickerShowcase";
import ExactlyWhatYouGet from "@/components/ExactlyWhatYouGet";
import Testimonials from "@/components/Testimonials";
import Bundle from "@/components/Bundle";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import { FAQ_ITEMS } from "@/lib/faq";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MetaViewContent from "@/components/MetaViewContent";
import StickyBuyBar from "@/components/StickyBuyBar";
import { SITE_URL, SITE_NAME, PRODUCT, CHECKOUT_URL } from "@/lib/config";

/** Product + FAQ structured data for rich search results. */
function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: PRODUCT.name,
      description:
        "An ADHD planner printable + digital stickers bundle: a 21-page undated ADHD planner (US Letter + A4) with Daily Big 3, Time Blocks, Shrink-the-Task, a Dopamine Menu and a shame-free Habit Builder, plus 63 transparent-PNG digital stickers, a 6-page GoodNotes sticker book and an installation guide for GoodNotes and Notability. Instant digital download — print at home or use on iPad.",
      brand: { "@type": "Brand", name: SITE_NAME },
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        price: PRODUCT.price.toFixed(2),
        priceCurrency: PRODUCT.currency,
        availability: "https://schema.org/InStock",
        // Buyers/search engines land on our own checkout, not a raw
        // provider link. Relative CHECKOUT_URL is resolved against SITE_URL.
        url: CHECKOUT_URL.startsWith("http")
          ? CHECKOUT_URL
          : `${SITE_URL}${CHECKOUT_URL}`,
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
      {/* Fires Meta Pixel ViewContent when the pricing section is seen. */}
      <MetaViewContent targetId="pricing" />
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <WhatsInside />
        <StickerShowcase />
        <ExactlyWhatYouGet />
        <Testimonials />
        <Bundle />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBuyBar />
    </>
  );
}
