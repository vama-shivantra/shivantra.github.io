"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Hammer, ShieldCheck, LifeBuoy, type LucideIcon } from "lucide-react";
import { processSteps } from "@/content/site-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const icons: LucideIcon[] = [Compass, Hammer, ShieldCheck, LifeBuoy];

export function ProcessPipeline() {
  const rowRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const row = rowRef.current;
    const path = pathRef.current;
    if (!row || !path) return;
    if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) return;

    const nodeCenters: number[] = [];

    const computeLine = () => {
      const rowRect = row.getBoundingClientRect();
      const nodes = nodeRefs.current.filter(Boolean) as HTMLDivElement[];
      nodeCenters.length = 0;
      nodes.forEach((node) => {
        const r = node.getBoundingClientRect();
        nodeCenters.push(r.left + r.width / 2 - rowRect.left);
      });
      const y = nodes[0]
        ? nodes[0].getBoundingClientRect().top +
          nodes[0].getBoundingClientRect().height / 2 -
          rowRect.top
        : 0;
      const first = nodeCenters[0] ?? 0;
      const last = nodeCenters[nodeCenters.length - 1] ?? 0;
      path.setAttribute("d", `M ${first},${y} L ${last},${y}`);
      const length = last - first;
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    };

    computeLine();
    window.addEventListener("resize", computeLine);

    const ctx = gsap.context(() => {
      const length = () => {
        const first = nodeCenters[0] ?? 0;
        const last = nodeCenters[nodeCenters.length - 1] ?? 0;
        return last - first;
      };

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: row,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 0.6,
          onUpdate: (self) => {
            const drawn = self.progress * length();
            const reached = nodeCenters.filter((c) => c - nodeCenters[0] <= drawn).length;
            setLitCount(reached);
          },
        },
      });
    }, row);

    return () => {
      window.removeEventListener("resize", computeLine);
      ctx.revert();
    };
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1432px] px-[1rem] py-16 sm:px-6 md:py-20">
      <div data-reveal className="mb-16">
        <p className="text-[12px] uppercase tracking-[-0.033em] text-[#797776]">Process</p>
        <h2 className="mt-[0.75rem] font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
          How we ship
        </h2>
      </div>

      <div ref={rowRef} className="relative hidden md:block">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[60px]"
          style={{ background: "radial-gradient(closest-side, #a0b5eb, transparent 75%)" }}
        />
        <svg className="absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 0 }}>
          <path ref={pathRef} fill="none" stroke="#cecac8" strokeWidth={1} />
        </svg>

        <div className="relative z-[1] flex items-center justify-between">
          {processSteps.map((item, i) => {
            const Icon = icons[i];
            const isLit = i < litCount;
            return (
              <div
                key={item.step}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="flex items-center gap-2.5 rounded-full border-[1px] bg-[#f6f3f1] px-[1.25rem] py-[0.75rem] text-[14px] uppercase tracking-[-0.02em] transition-colors duration-300"
                style={{
                  borderColor: isLit ? "#2b59d1" : "#cecac8",
                  color: isLit ? "#2b59d1" : "#242424",
                }}
              >
                <Icon className="h-[14px] w-[14px]" />
                Step {item.step}
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <div key={item.step}>
              <h3 className="font-[family-name:var(--font-serif)] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#242424]">
                {item.title}
              </h3>
              <p className="mt-[0.5rem] text-[16px] leading-[1.6] text-[#4e4d4d]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <MobileProcessList />
    </section>
  );
}

function MobileProcessList() {
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={listRef} className="flex flex-col gap-[0.75rem] md:hidden">
      {processSteps.map((item, i) => {
        const Icon = icons[i];
        return (
          <div
            key={item.step}
            data-row
            data-reveal
            className="flex items-start gap-[1rem] rounded-[40px] border-[1px] border-[#cecac8] p-8"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1px] border-[#cecac8]">
              <Icon className="h-[18px] w-[18px] text-[#2b59d1]" />
            </span>
            <div>
              <p className="text-[12px] uppercase tracking-[-0.033em] text-[#797776]">
                Step {item.step}
              </p>
              <h3 className="mt-[0.25rem] font-[family-name:var(--font-serif)] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#242424]">
                {item.title}
              </h3>
              <p className="mt-[0.5rem] text-[16px] leading-[1.6] text-[#4e4d4d]">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
