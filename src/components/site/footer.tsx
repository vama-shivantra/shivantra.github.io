"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { nav, social, footer, contact, company } from "@/content/site-data";
import { basePath } from "@/lib/basePath";
import { socialIcons } from "@/components/social-icons";
import { useScrollReveal } from "./use-scroll-reveal";
import "./site-chrome.css";

export function Footer() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollReveal(rootRef);
  return (
    <footer ref={rootRef} className="shiv-home site-footer">
      <div className="footer-inner">
        <div data-reveal className="footer-invitation">
          <div>
            <p className="footer-eyebrow">Your next chapter starts here</p>
            <h2>
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>
          </div>
          <a href="/#contact" className="footer-cta simple-button">
            Let&apos;s talk <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-columns">
          <div className="footer-brand">
            <Link href="/" aria-label="Shivantra home">
              <img
                src={`${basePath}/assets/images/logo-dark.svg`}
                width="180"
                height="66"
                alt="Shivantra"
                className="footer-logo"
              />
            </Link>
            <p>
              Software consultancy and development.
              <br />
              Turning complex challenges into meaningful solutions.
            </p>
            <div className="footer-socials">
              {social.map((item) => {
                const Icon = socialIcons[item.label] ?? ArrowUpRight;
                return (
                  <a key={item.label} href={item.href} aria-label={item.label}>
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              {nav.links.map((link) => (
                <Link key={link.label} href={`/${link.href}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div className="footer-links">
              {footer.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-contact">
            <h3>Say hello</h3>
            <div className="footer-links">
              <a href={`mailto:${contact.email}`}>
                <Mail size={15} aria-hidden="true" />
                {contact.email}
              </a>
              <a href={`tel:${contact.phone}`}>
                <Phone size={15} aria-hidden="true" />
                {contact.phone}
              </a>
              <p>
                <MapPin size={15} aria-hidden="true" />
                {contact.address}
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <span>{company.name}</span>
        </div>
      </div>
    </footer>
  );
}
