"use client";

import { useState } from "react";
import { FAQ } from "@/lib/site";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Frequently Asked</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions about beach bonfires on 30A
          </h2>
          <p className="mt-6 max-w-md text-ink-800/75">
            Everything you need to know about permits, pricing, locations, and
            how our all-inclusive experience works along Florida&apos;s Emerald
            Coast.
          </p>
        </div>

        <div className="divide-y divide-ink-900/10 rounded-3xl bg-[var(--color-sand-50)] p-2">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 rounded-2xl px-5 py-5 text-left transition hover:bg-white"
                >
                  <span className="text-base font-semibold text-ink-900 sm:text-lg">
                    {item.q}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-none text-[var(--color-ember-600)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-[15px] leading-relaxed text-ink-800/80">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
