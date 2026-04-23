import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Our refund, cancellation, and weather policy for beach bonfires on 30A and the Emerald Coast.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Refund Policy",
        item: `${SITE.domain}/refund-policy`,
      },
    ],
  };

  return (
    <>
      <PageHeader
        eyebrow="Policies"
        title="Refund &amp; Cancellation Policy"
        subtitle="How we handle cancellations, weather, permit denials, and rescheduling."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x mx-auto max-w-3xl space-y-8 text-[15px] leading-relaxed text-ink-800/85 sm:text-base">
          <div>
            <h2 className="text-2xl font-semibold text-ink-900">Standard cancellations</h2>
            <p className="mt-3">
              Cancellations made <strong>14 or more days</strong> before your
              scheduled bonfire are eligible for a full refund, minus any
              non-refundable vendor deposits for custom add-ons.
            </p>
            <p className="mt-3">
              Cancellations within <strong>7–13 days</strong> of your date are
              eligible for a 50% refund or a reschedule credit valid for 12
              months.
            </p>
            <p className="mt-3">
              Cancellations within <strong>6 days or less</strong> are
              non-refundable due to permit processing, vendor coordination, and
              staffing commitments. We will always do our best to reschedule.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink-900">Weather policy</h2>
            <p className="mt-3">
              Beach bonfires proceed in a wide range of weather. If Walton
              County closes beaches or issues a burn ban on your date, we will
              reschedule at no cost or issue a full refund. Forecasted weather
              alone is not grounds for cancellation with refund — we will work
              with you on timing whenever possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink-900">Permit denials</h2>
            <p className="mt-3">
              In the rare case that both your first- and second-choice beaches
              are unavailable on your booked date, we will either secure an
              alternate permitted beach or issue a full refund — your choice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink-900">Late arrivals</h2>
            <p className="mt-3">
              Fire time begins at the scheduled start time. Late arrivals do
              not extend the fire duration. If you need a longer fire, ask about
              upgrading to a longer package at booking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink-900">Questions?</h2>
            <p className="mt-3">
              Call or text us at{" "}
              <a href={SITE.phoneHref} className="font-semibold text-[var(--color-ember-600)] underline-offset-4 hover:underline">
                {SITE.phone}
              </a>{" "}
              or email{" "}
              <a href={SITE.emailHref} className="font-semibold text-[var(--color-ember-600)] underline-offset-4 hover:underline">
                {SITE.email}
              </a>
              . We are happy to walk through timing, permits, or rescheduling.
            </p>
          </div>
        </div>
      </section>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
