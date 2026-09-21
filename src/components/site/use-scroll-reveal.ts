"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Content is visible by default. Animate each item only when it actually enters
 * the viewport, rather than hiding a whole, potentially multi-screen grid.
 * IntersectionObserver also survives font/layout changes and restored scroll. */
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {}, root);
      const seen = new WeakSet<Element>();
      const reveal = (el: HTMLElement) =>
        ctx.add(() => {
          gsap.fromTo(
            el,
            { y: 20, opacity: 0.15 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power3.out",
              overwrite: "auto",
              clearProps: "opacity,transform",
            }
          );
        });
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || seen.has(entry.target)) return;
            seen.add(entry.target);
            observer.unobserve(entry.target);
            reveal(entry.target as HTMLElement);
          });
        },
        { threshold: 0, rootMargin: "0px 0px -24px 0px" }
      );
      const targets = new Set<HTMLElement>(root.querySelectorAll("[data-reveal]"));
      root.querySelectorAll("[data-stagger]").forEach((group) => {
        Array.from(group.children).forEach((child) => targets.add(child as HTMLElement));
      });
      targets.forEach((el) => observer.observe(el));
      return () => {
        observer.disconnect();
        ctx.revert();
      };
    });
    return () => mm.revert();
  }, [rootRef]);
}
