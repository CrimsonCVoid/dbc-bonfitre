import { ContactForm } from "./contact-form";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-[var(--color-gulf-700)] py-24 text-white sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-[var(--color-ember-400)]">Contact Us</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Learn more about booking a private bonfire
          </h2>
          <p className="mt-6 max-w-md text-sand-100/90">
            Tell us about your group and preferred dates. We will get back to
            you with availability, recommended beaches, and anything else you
            need to make your bonfire night unforgettable.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--color-ember-500)]/20 text-[var(--color-ember-400)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <div>
                <dt className="font-semibold uppercase tracking-wider text-sand-100/70 text-xs">Phone</dt>
                <dd className="mt-1 text-lg">
                  <a href={SITE.phoneHref} className="hover:text-[var(--color-ember-400)]">{SITE.phone}</a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--color-ember-500)]/20 text-[var(--color-ember-400)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <div>
                <dt className="font-semibold uppercase tracking-wider text-sand-100/70 text-xs">Email</dt>
                <dd className="mt-1">
                  <a href={SITE.emailHref} className="hover:text-[var(--color-ember-400)]">{SITE.email}</a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--color-ember-500)]/20 text-[var(--color-ember-400)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              <div>
                <dt className="font-semibold uppercase tracking-wider text-sand-100/70 text-xs">Hours</dt>
                <dd className="mt-1">Monday – Friday · 9:00 AM – 6:00 PM</dd>
              </div>
            </div>
          </dl>

          <a href={SITE.booking} target="_blank" rel="noreferrer" className="btn-primary mt-10">
            Book Your Bonfire Online
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
