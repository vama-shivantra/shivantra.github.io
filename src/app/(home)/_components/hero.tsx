"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { hero } from "@/content/site-data";
import { PipelineDiagram } from "./pipeline-diagram";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const washRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".hero-word", { yPercent: 110, opacity: 0, stagger: 0.035, duration: 0.8 })
          .from(".hero-support", { y: 15, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.5");

        if (washRef.current) {
          gsap.to(washRef.current, {
            x: 40,
            y: 20,
            scale: 1.08,
            duration: 7,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        }
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  const words = hero.headline.split(" ");

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative overflow-hidden px-[1rem] pt-8 pb-16 sm:px-6 md:pt-12 md:pb-24"
    >
      <div
        ref={washRef}
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 opacity-70 blur-[70px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,148,115,0.8), rgba(160,181,235,0.8) 55%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1432px] flex-col items-center text-center">
        <span className="hero-support inline-flex items-center rounded-full border-[1px] border-[#cecac8] bg-[#f6f3f1] px-[1.25rem] py-[0.5rem] text-[12px] uppercase tracking-[-0.033em] text-[#4e4d4d]">
          {hero.eyebrow}
        </span>

        <h1 aria-label={hero.headline} className="mt-8 max-w-4xl font-[family-name:var(--font-serif)] text-[clamp(2.5rem,7vw,5rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
          {words.map((word, i) => (
            <span
              key={i}
              className="mr-[0.28em] inline-block overflow-hidden align-top last:mr-[0rem]"
            >
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>

        <p className="hero-support mt-6 max-w-xl text-[20px] leading-[1.6] tracking-[-0.02em] text-[#4e4d4d]">
          {hero.body}
        </p>

        <div className="hero-support mt-10 flex flex-wrap items-center justify-center gap-[1rem]">
          <a
            href={hero.primaryCta.href}
            className="simple-button inline-flex items-center gap-[0.5rem] rounded-full bg-[#2b59d1] px-8 py-[1rem] text-[14px] uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
          >
            {hero.primaryCta.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="simple-button inline-flex items-center gap-[0.5rem] rounded-full border-[1px] border-[#242424] px-8 py-[1rem] text-[14px] uppercase tracking-[-0.02em] text-[#242424] transition-colors hover:bg-[#242424] hover:text-[#f6f3f1]"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="hero-support relative mt-12 md:mt-16">
        <PipelineDiagram />
      </div>
    </section>
  );
}
