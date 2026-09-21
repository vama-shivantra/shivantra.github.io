"use client";

import { useRef } from "react";
import type { LegalSection } from "@/content/site-data";
import { Footer } from "@/components/site/footer";
import { useScrollReveal } from "@/components/site/use-scroll-reveal";

export function LegalPage({
  heading,
  updated,
  sections,
}: {
  heading: string;
  updated: string;
  sections: LegalSection[];
}) {
  const rootRef = useRef<HTMLElement>(null);
  useScrollReveal(rootRef);

  return (
    <>
      <main ref={rootRef}>
        <section className="mx-auto max-w-3xl px-[1rem] pb-20 pt-8 sm:px-6">
          <div data-reveal>
            <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
              {heading}
            </h1>
            <p className="mt-[0.75rem] text-[14px] text-[#797776]">{updated}</p>
          </div>
          <div data-stagger className="mt-12 space-y-4">
            {sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-[40px] border-[1px] border-[#cecac8] p-8 transition-colors duration-300 hover:border-[#2b59d1]"
              >
                <h2 className="font-[family-name:var(--font-serif)] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#242424]">
                  {section.heading}
                </h2>
                <p className="mt-[0.75rem] text-[16px] leading-[1.35] text-[#4e4d4d]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
