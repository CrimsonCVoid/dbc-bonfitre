import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { WelcomeSection } from "@/components/welcome-section";
import { PackagesSection } from "@/components/packages-section";
import { BacheloretteCta } from "@/components/bachelorette-cta";
import { Testimonials } from "@/components/testimonials";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceAreas } from "@/components/service-areas";
import { Gallery } from "@/components/gallery";
import { ContactSection } from "@/components/contact-section";
import { FAQ, PACKAGES, SERVICE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beach Bonfires Near Destin & 30A | Private, All-Inclusive Setup",
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Beach Bonfire Experience",
    provider: { "@id": `${SITE.domain}/#business` },
    areaServed: SERVICE_AREAS.map((a) => ({ "@type": "Place", name: a.name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beach Bonfire Packages",
      itemListElement: PACKAGES.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.toString(),
        priceCurrency: "USD",
        description: `${p.tagline}. ${p.groupSize}. ${p.duration}.`,
        availability: "https://schema.org/InStock",
        url: `${SITE.domain}/bonfire-packages#${p.slug}`,
      })),
    },
  };

  return (
    <>
      <Hero />
      <WelcomeSection />
      <PackagesSection />
      <BacheloretteCta />
      <Testimonials />
      <FaqAccordion />
      <ServiceAreas />
      <Gallery />
      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
