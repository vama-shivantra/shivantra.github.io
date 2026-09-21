"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LiveIllustration } from "./live-illustration";
import "./faq-accordion.css";
import { faq } from "@/content/site-data";

export function FaqAccordion() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="faq-section mx-auto w-full max-w-[1432px] px-[1rem] py-16 sm:px-6 md:py-20"
    >
      <div data-reveal className="faq-intro">
        <p className="text-[12px] uppercase tracking-[-0.033em] text-[#797776]">FAQ</p>
        <h2 className="mt-[0.75rem] font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
          Common questions
        </h2>
        <p className="faq-intro-copy">A little clarity before we build something great together.</p>
        <div className="faq-art" data-art-surface>
          <LiveIllustration scene={15} />
        </div>
        <a className="faq-contact" href="#contact">
          Have another question? Let&apos;s talk.
        </a>
      </div>

      <div data-stagger className="faq-questions">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="border-b border-[#cecac8]">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-[1rem] py-6 sm:py-8 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-[family-name:var(--font-serif)] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#242424] transition-colors duration-300 group-hover:text-[#2b59d1]">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-[#242424] transition-colors duration-300 group-hover:text-[#2b59d1]" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-xl pb-8 text-[16px] leading-[1.6] text-[#4e4d4d]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
