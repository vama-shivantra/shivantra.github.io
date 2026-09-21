"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { LiveIllustration } from "../_components/live-illustration";
import "./careers.css";
import { careers, contact } from "@/content/site-data";
import { Footer } from "@/components/site/footer";
import { useScrollReveal } from "@/components/site/use-scroll-reveal";

export default function CareersPage() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollReveal(rootRef);

  return (
    <>
      <main id="main-content" ref={rootRef} className="careers-page">
        <section className="careers-hero mx-auto w-full max-w-[1432px] px-[1rem] pb-12 pt-8 sm:px-6 md:pb-16 md:pt-12">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-[0.5rem] rounded-full border-[1px] border-[#cecac8] bg-[#f6f3f1] px-[1.25rem] py-[0.5rem] text-[12px] uppercase tracking-[-0.033em] text-[#4e4d4d]">
              <Sparkles className="h-3.5 w-3.5 text-[#2b59d1]" /> Careers
            </span>
            <h1 className="mt-8 font-[family-name:var(--font-serif)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
              {careers.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[20px] leading-[1.6] text-[#4e4d4d]">
              {careers.intro}
            </p>
            <a
              href={careers.applyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="simple-button mt-8 inline-flex items-center gap-[0.5rem] rounded-full bg-[#2b59d1] px-8 py-[1rem] text-[14px] uppercase tracking-[-0.02em] text-white transition hover:opacity-90"
            >
              Apply Now <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div data-reveal data-art-surface className="careers-hero-art">
            <LiveIllustration scene={14} />
            <div className="careers-art-caption">
              <span>Apply</span>
              <span>Connect</span>
              <span>Build your future</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1432px] px-[1rem] py-16 sm:px-6">
          <h2
            data-reveal
            className="text-center font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]"
          >
            {careers.rolesIntro}
          </h2>
          <div
            data-stagger
            className="careers-benefits mt-10 grid gap-[1.25rem] sm:grid-cols-2 lg:grid-cols-6"
          >
            {careers.benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="careers-benefit group flex flex-col rounded-[40px] border-[1px] border-[#cecac8] p-6 sm:p-8"
              >
                <span className="mb-6 text-[12px] text-[#797776]">0{index + 1}</span>
                <h3 className="font-[family-name:var(--font-serif)] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#242424]">
                  {benefit.title}
                </h3>
                <p className="mt-[0.75rem] text-[16px] leading-[1.6] text-[#4e4d4d]">
                  {benefit.description}
                </p>
                <div className="careers-benefit-art">
                  <LiveIllustration scene={[13, 11, 5, 8, 12][index]} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1432px] px-[1rem] pb-24 sm:px-6">
          <div data-reveal className="rounded-[40px] bg-[#cfdaf5] p-6 sm:p-10 text-center">
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
              Don&apos;t see an open role?
            </h2>
            <p className="mt-[0.5rem] text-[16px] text-[#4e4d4d]">
              Reach out anyway at{" "}
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
