"use client";

import { useState } from "react";
import { m } from "framer-motion";

const faqs = [
  {
    q: "What makes this different from other browsers?",
    a: "It reimagines the browser from the ground up. With Spaces, Split View, and Easels, it adapts to your workflow instead of the other way around.",
  },
  {
    q: "Is it available on macOS and Windows?",
    a: "Yes. It's available on macOS, Windows, and iOS. An Android version is coming soon.",
  },
  {
    q: "Can I import my bookmarks from other browsers?",
    a: "Absolutely. It supports importing bookmarks, passwords, and history from Chrome, Safari, Firefox, and Edge.",
  },
  {
    q: "Is it free to use?",
    a: "Yes, it's completely free. No subscription, no ads, no tracking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-[768px] mx-auto px-4">
        <h2 className="font-heading text-[64px] font-700 text-blue text-center leading-[1.2]">
          Frequently asked
        </h2>
        <p className="font-body text-sm text-muted-foreground text-center mt-4">
          Everything you need to know.
        </p>
        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-[8px] overflow-hidden transition-shadow duration-150 hover:shadow-raised"
            >
              <button
                className="w-full flex items-center justify-between px-4 py-4 text-left font-heading text-base font-700 text-blue transition-colors duration-150 hover:text-primary"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <svg
                  className={`w-4 h-4 shrink-0 ml-4 transition-transform duration-150 ${openIndex === i ? "rotate-180" : ""}`}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <m.div
                initial={false}
                animate={{
                  maxHeight: openIndex === i ? 1000 : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 font-body text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </m.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
