import {
  Code2,
  Globe,
  Smartphone,
  Layers,
  Database,
  Rocket,
  PenTool,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/content/site-data";
import { LiveIllustration } from "./live-illustration";

const icons: LucideIcon[] = [
  Code2,
  Globe,
  Smartphone,
  Layers,
  Database,
  Rocket,
  PenTool,
  TrendingUp,
  Users,
];

const accents = [
  { tint: "#cfdaf5", glow: "#a0b5eb", palette: ["#2b59d1", "#a0b5eb", "#cfdaf5"] },
  { tint: "#fbe3da", glow: "#ff9473", palette: ["#ff9473", "#f37a0a", "#fbe3da"] },
  { tint: "#e4f9ee", glow: "#a7fccd", palette: ["#a7fccd", "#2b59d1", "#e4f9ee"] },
  { tint: "#f8f0d4", glow: "#ecda98", palette: ["#ecda98", "#ff9473", "#f8f0d4"] },
];

export function Services() {
  const [first, ...rest] = services;
  const FirstIcon = icons[0];

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-[1432px] px-[1rem] py-16 sm:px-6 md:py-20"
    >
      <div data-reveal className="mb-12">
        <p className="text-[12px] uppercase tracking-[-0.033em] text-[#797776]">What we do</p>
        <h2 className="mt-[0.75rem] font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
          Services built around your business
        </h2>
      </div>

      <div data-stagger className="grid gap-[1.25rem] md:grid-cols-2 lg:grid-cols-3">
        <article
          className="service-card service-card-feature group relative flex flex-col overflow-hidden rounded-[40px] bg-[#cfdaf5] p-6 sm:p-10 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1.5 lg:col-span-2 lg:row-span-1"
          style={{ minHeight: "260px" }}
        >
          <div
            className="svc-blob-pulse pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-[50px] transition-transform duration-500 group-hover:scale-110"
            style={{
              background: "radial-gradient(closest-side, #ff9473, #a0b5eb 60%, transparent 80%)",
            }}
          />
          <div
            className="svc-blob-drift pointer-events-none absolute -right-24 bottom-[-40px] h-44 w-44 rounded-full opacity-70 blur-[45px]"
            style={{ background: "radial-gradient(closest-side, #a7fccd, transparent 75%)" }}
          />
          <span className="service-num relative font-[family-name:var(--font-serif)] text-[14px] text-[#4e4d4d]/70">
            01
          </span>
          <span className="relative mt-[0.75rem] flex h-12 w-12 items-center justify-center rounded-full border-[1px] border-[#242424]/15 bg-[#f6f3f1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <FirstIcon className="h-5 w-5 text-[#242424]" />
          </span>
          <h3 className="relative mt-6 max-w-sm font-[family-name:var(--font-serif)] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#242424]">
            {first.title}
          </h3>
          <p className="relative mt-[0.75rem] max-w-sm text-[16px] leading-[1.6] text-[#4e4d4d]">
            {first.description}
          </p>
          <div className="v19-feature-live">
            <LiveIllustration scene={0} />
          </div>
        </article>

        {rest.map((service, i) => {
          const Icon = icons[i + 1];
          const accent = accents[i % accents.length];

          return (
            <article
              key={service.title}
              className="service-card group relative flex flex-col overflow-hidden rounded-[40px] border-[1px] border-[#cecac8] p-6 sm:p-10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:border-[#2b59d1] hover:shadow-[0_16px_36px_rgba(36,36,36,0.08)]"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: `radial-gradient(closest-side, ${accent.glow}, transparent 75%)`,
                }}
              />
              <span className="service-num relative font-[family-name:var(--font-serif)] text-[14px] text-[#4e4d4d]/70">
                0{i + 2}
              </span>
              <span
                className="relative mt-[0.75rem] flex h-12 w-12 items-center justify-center rounded-full border-[1px] border-[#242424]/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: accent.tint }}
              >
                <Icon className="h-5 w-5 text-[#242424]" />
              </span>
              <h3 className="relative mt-6 font-[family-name:var(--font-serif)] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#242424]">
                {service.title}
              </h3>
              <p className="relative mt-[0.75rem] text-[16px] leading-[1.6] text-[#4e4d4d]">
                {service.description}
              </p>
              <div className="v19-service-live">
                <LiveIllustration scene={i + 1} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
