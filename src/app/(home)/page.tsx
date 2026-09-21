"use client";

import { useRef } from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { contact, hero } from "@/content/site-data";
import { Hero } from "./_components/hero";
import { RecognitionRow } from "./_components/recognition-row";
import { Services } from "./_components/services";
import { AboutSection } from "./_components/about-section";
import { WhyShivantra } from "./_components/why-shivantra";
import { ProcessPipeline } from "./_components/process-pipeline";
import { TechStack } from "./_components/tech-stack";
import { FaqAccordion } from "./_components/faq-accordion";
import { Footer } from "@/components/site/footer";
import { ContactForm } from "./_components/contact-form";
import { useScrollReveal } from "@/components/site/use-scroll-reveal";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <>
      <div ref={rootRef}>
        <main id="main-content">
          <Hero />
          <RecognitionRow />
          <Services />
          <AboutSection />
          <WhyShivantra />
          <ProcessPipeline />
          <TechStack />
          <FaqAccordion />

          <section id="contact" className="mx-auto w-full max-w-[1432px] px-[1rem] py-16 sm:px-6">
            <div
              data-reveal
              className="grid gap-10 rounded-[40px] border-[1px] border-[#cecac8] p-6 sm:p-10 lg:grid-cols-2 lg:p-16"
            >
              <div>
                <p className="text-[12px] uppercase tracking-[-0.033em] text-[#797776]">Contact</p>
                <h2 className="mt-[0.75rem] max-w-lg font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
                  Let&apos;s build something.
                </h2>
                <p className="mt-[0.75rem] max-w-md text-[16px] leading-[1.6] text-[#4e4d4d]">
                  Reach out and let&apos;s talk about your next project.
                </p>
                <a
                  href={
                    hero.secondaryCta.href.startsWith("#")
                      ? `#${hero.secondaryCta.href.slice(1)}`
                      : hero.secondaryCta.href
                  }
                  className="simple-button mt-8 inline-flex items-center gap-[0.5rem] rounded-full bg-[#2b59d1] px-8 py-[1rem] text-[14px] uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
                >
                  {hero.secondaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <div
                  data-stagger
                  className="mt-10 grid gap-[1rem] border-t border-[#cecac8] pt-8 grid-cols-1"
                >
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-[0.75rem] rounded-full border-[1px] border-[#cecac8] px-[1.25rem] py-3.5 text-[14px] text-[#242424] transition-colors hover:border-[#242424]"
                  >
                    <Phone className="h-4 w-4 text-[#2b59d1]" /> {contact.phone}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-[0.75rem] rounded-full border-[1px] border-[#cecac8] px-[1.25rem] py-3.5 text-[14px] text-[#242424] transition-colors hover:border-[#242424]"
                  >
                    <Mail className="h-4 w-4 text-[#2b59d1]" /> {contact.email}
                  </a>
                  <a
                    href={contact.whatsappHref}
                    className="flex items-center gap-[0.75rem] rounded-full border-[1px] border-[#cecac8] px-[1.25rem] py-3.5 text-[14px] text-[#242424] transition-colors hover:border-[#242424]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#2b59d1]" /> WhatsApp
                  </a>
                </div>
                <div className="mt-6 flex items-start gap-[0.75rem] text-[14px] text-[#4e4d4d]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2b59d1]" />
                  <span>{contact.address}</span>
                </div>
              </div>

              <ContactForm />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
