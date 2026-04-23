import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { ContactSection } from "@/components/contact-section";
import { PACKAGES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beach Bonfire Packages & Pricing on 30A",
  description:
    "Compare our four all-inclusive beach bonfire packages on 30A. Includes permit, setup, seating, tiki torches, s’mores, and cleanup for groups of 6 to 29 guests.",
  alternates: { canonical: "/bonfire-packages" },
};

export default function PackagesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Beach Bonfire Packages",
        item: `${SITE.domain}/bonfire-packages`,
      },
    ],
  };

  const offersLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PACKAGES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: `${p.tagline}. ${p.groupSize}. ${p.duration}.`,
        image: `${SITE.domain}${p.image}`,
        brand: { "@type": "Brand", name: SITE.name },
        offers: {
          "@type": "Offer",
          price: p.price.toString(),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE.domain}/bonfire-packages#${p.slug}`,
        },
      },
    })),
  };

  return (
    <>
      <PageHeader
        eyebrow="All-Inclusive Packages"
        title="Beach Bonfire Packages on 30A"
        subtitle="Four fully hosted packages for every group size — from quiet couples' nights to large family celebrations. Permit, setup, and cleanup always included."
      />

      <section className="bg-[var(--color-sand-50)] py-20 sm:py-28">
        <div className="container-x space-y-24">
          {PACKAGES.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]"
            >
              <div
                className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl ${
                  i % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={p.image}
                  alt={`${p.name} beach bonfire package`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                {p.popular && (
                  <div className="absolute left-6 top-6 rounded-full bg-[var(--color-ember-500)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg">
                    Most Popular
                  </div>
                )}
              </div>
              <div>
                <p className="eyebrow">Package {i + 1} of {PACKAGES.length}</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {p.name}
                </h2>
                <p className="mt-3 text-lg text-ink-800/80">{p.tagline}</p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <span className="text-5xl font-bold text-[var(--color-ember-600)]">${p.price}</span>
                  <span className="text-sm uppercase tracking-wider text-ink-800/70">
                    {p.groupSize} · {p.duration}
                  </span>
                </div>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {p.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-ink-800/90">
                      <svg className="mt-0.5 h-4 w-4 flex-none text-[var(--color-ember-500)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={SITE.booking} target="_blank" rel="noreferrer" className="btn-primary mt-10">
                  Book {p.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersLd) }}
      />
    </>
  );
}
