import { Award } from "lucide-react";
import { recognition } from "@/content/site-data";

export function RecognitionRow() {
  return (
    <div
      data-stagger
      className="mx-auto flex w-full max-w-[1432px] flex-wrap items-center justify-center gap-[1rem] px-[1rem] pb-16 sm:px-6"
    >
      {recognition.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2.5 rounded-full border-[1px] border-[#cecac8] bg-[#f6f3f1] px-[1.25rem] py-[0.75rem] text-[14px] uppercase tracking-[-0.02em] text-[#242424] transition-colors duration-300 hover:border-[#2b59d1]"
        >
          <Award className="h-[14px] w-[14px] text-[#2b59d1]" />
          {item}
        </span>
      ))}
    </div>
  );
}
