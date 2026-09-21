"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { recognition } from "@/content/site-data";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence initial={false}>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="shiv-home relative z-50 overflow-hidden bg-black"
        >
          <div className="flex w-full items-center justify-center gap-[1rem] px-[1rem] py-2.5 text-center sm:px-6">
            <p className="text-[13px] text-[#f6f3f1] sm:text-sm">
              {recognition[0]} · {recognition[1]}
            </p>
            <a
              href="/#contact"
              className="hidden shrink-0 rounded-full border-[1px] border-white px-[1rem] py-[0.25rem] text-[11px] font-medium uppercase tracking-[-0.02em] text-white transition hover:border-[#2b59d1] hover:bg-[#2b59d1] sm:inline-block"
            >
              Get in touch
            </a>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss announcement"
              className="absolute right-4 flex h-6 w-6 shrink-0 items-center justify-center text-white/70 transition hover:text-white sm:right-6"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
