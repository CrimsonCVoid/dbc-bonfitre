import Image from "next/image";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 py-24 text-white sm:py-32">
      <Image
        src="/images/home-banner-2208w.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-ink-900/60" aria-hidden="true" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[var(--color-ember-400)]">Guest Stories</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            What our guests say
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex gap-0.5 text-[var(--color-ember-400)]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-sand-100">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sand-200/70">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
