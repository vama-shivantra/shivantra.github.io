"use client";

import { useEffect, useLayoutEffect, useId, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Phone, X } from "lucide-react";
import { basePath } from "@/lib/basePath";
import "./site-chrome.css";
import { contact, nav, social } from "@/content/site-data";
import { socialIcons } from "@/components/social-icons";

export function Nav() {
  const menuId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const scrollPosition = window.scrollY;
    // Scrolling happens on <html> here (globals.css sets overflow-x on it,
    // making it the scrolling box), not <body> - locking body.style.overflow
    // alone doesn't stop it and the resulting reflow shifts window.scrollY,
    // so the position captured above is already stale by the time this
    // cleanup restores it. Lock the element that actually scrolls.
    const root = document.documentElement;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    document.body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousRootOverflow;
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus({ preventScroll: true });
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const controls = mobileMenuRef.current?.querySelectorAll<HTMLElement>("a[href], button");
        if (controls?.length) {
          const first = controls[0],
            last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus({ preventScroll: true });
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header className="site-header shiv-home">
      <nav
        aria-label="Main navigation"
        ref={navRef}
        className="shiv-home relative z-40 mx-auto grid w-full max-w-[1432px] grid-cols-2 items-center px-[1rem] py-[1.25rem] sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        <a
          href="/"
          className="nav-item flex items-center gap-[0.5rem] text-[18px] font-medium uppercase tracking-[-0.02em] text-[#242424]"
        >
          <img
            src={`${basePath}/assets/images/logo-dark.svg`}
            width="150"
            height="55"
            alt="Shivantra home"
            className="site-logo"
          />
        </a>

        <div className="hidden items-center gap-8 lg:col-start-2 lg:flex lg:justify-self-center">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={`/${link.href}`}
              className="nav-item text-[14px] uppercase tracking-[-0.02em] text-[#4e4d4d] transition-colors duration-200 hover:text-[#242424]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-[0.75rem] lg:col-start-3 lg:flex">
          <a
            href={nav.careersHref}
            className="nav-item rounded-full border-[1px] border-[#242424] px-[24px] py-[13px] text-[14px] uppercase tracking-[-0.02em] text-[#242424] transition-colors duration-200 hover:bg-[#242424] hover:text-[#f6f3f1]"
          >
            Careers
          </a>
          <a
            href="/#contact"
            className="nav-item simple-button inline-flex items-center gap-[0.5rem] rounded-full bg-[#2b59d1] px-[24px] py-[13px] text-[14px] uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
          >
            {nav.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          ref={toggleRef}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`relative z-50 menu-toggle flex h-11 w-11 flex-col items-center justify-center gap-[10px] justify-self-end transition-opacity duration-200 lg:hidden ${
            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <span
            className={`h-[2px] w-full bg-[#242424] transition-transform duration-300 ${
              isOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full bg-[#242424] transition-transform duration-300 ${
              isOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Backdrop scrim - a full-bleed panel would feel like a flat mode
            switch; a dimmed, blurred backdrop behind a proper off-canvas
            drawer reads as a deliberate layer stacked over the page. */}
        <div
          aria-hidden="true"
          onClick={() => {
            setIsOpen(false);
            toggleRef.current?.focus({ preventScroll: true });
          }}
          className={`fixed inset-0 z-30 bg-[#242424]/45 backdrop-blur-[2px] transition-opacity duration-400 ease-in-out lg:hidden ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <div
          ref={mobileMenuRef}
          id={menuId}
          inert={!isOpen}
          role="dialog"
          aria-modal={isOpen || undefined}
          aria-label="Mobile navigation"
          className={`fixed inset-y-0 right-0 z-40 flex w-full max-w-[400px] flex-col overflow-y-auto bg-[#f6f3f1] text-[#242424] shadow-[-30px_0_70px_-20px_rgba(36,36,36,0.35)] transition-transform duration-400 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60 blur-[90px]"
            style={{ background: "radial-gradient(closest-side, #a0b5eb, transparent 75%)" }}
          />

          <div className="relative flex items-center justify-between border-b border-[#cecac8] px-[1.75rem] py-[1.5rem]">
            <span className="flex items-center gap-[0.5rem] text-[14px] uppercase tracking-[-0.02em] text-[#242424]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b59d1]" />
              {nav.brand}
            </span>
            <button
              ref={closeRef}
              type="button"
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => {
                setIsOpen(false);
                toggleRef.current?.focus({ preventScroll: true });
              }}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="relative flex flex-col px-[1.75rem]">
            {nav.links.map((link, index) => (
              <a
                key={link.label}
                href={`/${link.href}`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${100 + index * 60}ms` : "0ms" }}
                className={`group flex items-center justify-between gap-[1rem] border-b border-[#cecac8] py-[1.35rem] transition-all duration-300 ease-out first:pt-[1.6rem] ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                <span className="font-[family-name:var(--font-serif)] text-2xl text-[#242424]">
                  {link.label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 -translate-x-1 text-[#242424]/30 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-[#2b59d1] group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div
            style={{ transitionDelay: isOpen ? `${100 + nav.links.length * 60}ms` : "0ms" }}
            className={`relative mt-[1.75rem] flex gap-[0.75rem] px-[1.75rem] transition-all duration-300 ease-out ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <a
              href={nav.careersHref}
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-full border-[1px] border-[#242424] py-[0.85rem] text-center text-sm uppercase tracking-[-0.02em] text-[#242424] transition-colors duration-200 hover:bg-[#242424] hover:text-[#f6f3f1]"
            >
              Careers
            </a>
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="simple-button flex-1 rounded-full bg-[#2b59d1] py-[0.85rem] text-center text-sm uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              {nav.cta}
            </a>
          </div>

          <div
            style={{ transitionDelay: isOpen ? `${160 + nav.links.length * 60}ms` : "0ms" }}
            className={`relative mt-auto flex flex-col gap-[1.1rem] border-t border-[#cecac8] px-[1.75rem] py-[1.5rem] transition-all duration-300 ease-out ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-[0.6rem] text-[13px] text-[#4e4d4d]">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-[0.6rem] transition-colors duration-200 hover:text-[#242424]"
              >
                <Phone className="h-3.5 w-3.5 text-[#2b59d1]" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-[0.6rem] transition-colors duration-200 hover:text-[#242424]"
              >
                <Mail className="h-3.5 w-3.5 text-[#2b59d1]" />
                {contact.email}
              </a>
            </div>
            <div className="flex gap-[0.6rem]">
              {social.map((item) => {
                const Icon = socialIcons[item.label];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cecac8] transition-colors duration-200 hover:border-[#242424]/40"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
