import {
  Braces,
  Atom,
  Smartphone,
  Server,
  Coffee,
  Leaf,
  Webhook,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { techStack } from "@/content/site-data";
import "./tech-stack.css";
import { LiveIllustration } from "./live-illustration";

const icons: Record<string, LucideIcon> = {
  JavaScript: Braces,
  React: Atom,
  "React Native": Smartphone,
  "Node.js": Server,
  Java: Coffee,
  Spring: Leaf,
  "REST APIs": Webhook,
};

export function TechStack() {
  return (
    <section className="mx-auto w-full max-w-[1432px] px-[1rem] py-16 sm:px-6 md:py-20">
      <div data-reveal className="tech-card">
        <div className="tech-copy">
          <p>Technology</p>
          <h2>Built with tools you already trust</h2>
          <p>
            Modern, well-supported stacks with real APIs, SDKs, and documentation — no proprietary
            lock-in, no vendor tricks.
          </p>
          <a href="#services">
            Explore Our Services
            <ArrowRight size={14} />
          </a>
          <div className="tech-stat-row">
            <span>{techStack.length} core technologies</span>
            <span className="tech-stat-dot" />
            <span>Actively maintained</span>
          </div>
        </div>

        <div className="tech-live-system">
          <LiveIllustration scene={13} />
          <div className="tech-live-labels">
            {techStack.map((tech) => {
              const Icon = icons[tech] ?? Braces;
              return (
                <div key={tech}>
                  <Icon size={16} />
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
