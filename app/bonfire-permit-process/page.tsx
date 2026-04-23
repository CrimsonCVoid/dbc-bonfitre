import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactSection } from "@/components/contact-section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bonfire Permit Process — Walton County & 30A",
  description:
    "How bonfire permits work on 30A and Walton County beaches. Timing, second-choice beaches, special event permits, and what is included in our booking.",
  alternates: { canonical: "/bonfire-permit-process" },
};

const STEPS = [
  {
    title: "1. Reserve your date",
    body: "Book online or reach out by phone. Reservations secure your place in line once county permits are released.",
  },
  {
    title: "2. Pick your beaches",
    body: "Select a first- and second-choice beach access from our permitted locations across South Walton. Each beach has a limited daily permit count.",
  },
  {
    title: "3. We submit the permit",
    body: "Walton County typically releases standard permits about two weeks before your date. We handle the submission, fees, and all paperwork.",
  },
  {
    title: "4. Confirmation & logistics",
    body: "Once your permit is confirmed, we send final details — beach, arrival time, parking notes, and what to bring. You simply show up.",
  },
  {
    title: "5. Setup, fire & cleanup",
    body: "Our team arrives early to set up your seating, tiki torches, fire, and any add-ons. A dedicated attendant stays on-site. We clean up every spark once your evening ends.",
  },
];

const FAQ_PERMITS = [
  {
    q: "Are bonfires allowed in Destin city limits?",
    a: "No. Destin (Okaloosa County) does not allow beach bonfires. All permitted bonfires are held on nearby Walton County beaches — Miramar Beach is the closest to Destin.",
  },
  {
    q: "How far in advance are permits issued?",
    a: "Standard permits are typically issued by the county about two weeks before your booked date. That is why we confirm availability closer to your date, not at booking.",
  },
  {
    q: "Why do you ask for a second-choice beach?",
    a: "Each permitted beach has a capped daily permit count. A second choice gives us flexibility to secure your date if the first beach is already full.",
  },
  {
    q: "What is a special event permit?",
    a: "A special event permit may be required for larger gatherings or events with additional elements such as catering, lighting, or expanded setups. We will advise if it applies and guide you through the process.",
  },
];

export default function PermitPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bonfire Permit Process",
        item: `${SITE.domain}/bonfire-permit-process`,
      },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_PERMITS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="Bonfire Permit Process"
        subtitle="Permits on 30A are issued by Walton County and capped daily. We manage the entire process so your group can focus on the fun."
      />

      <section className="bg-[var(--color-sand-50)] py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">The Short Version</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Five steps from booking to bonfire
            </h2>
            <p className="mt-5 text-ink-800/80">
              Every beach bonfire along 30A requires a Walton County permit.
              We handle submission, fees, timing, and logistics — and if a
              first-choice beach fills, we shift to your second choice without
              missing a beat.
            </p>
          </div>
          <ol className="space-y-6">
            {STEPS.map((step) => (
              <li key={step.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-900/5">
                <h3 className="text-lg font-semibold text-[var(--color-ember-600)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-800/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--color-sand-100)] py-20 sm:py-28">
        <div className="container-x mx-auto max-w-3xl">
          <p className="eyebrow text-center">Permit FAQ</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Common permit questions
          </h2>
          <div className="mt-12 divide-y divide-ink-900/10 rounded-3xl bg-white">
            {FAQ_PERMITS.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-base font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg className="h-5 w-5 flex-none text-[var(--color-ember-600)] transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-800/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
