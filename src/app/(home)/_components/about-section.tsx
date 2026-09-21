import { Compass, Eye } from "lucide-react";
import { LiveIllustration } from "./live-illustration";
import { company } from "@/content/site-data";
import "./about-section.css";

export function AboutSection() {
  const sentences = company.description.split(/(?<=\.)\s+/);
  return (
    <section
      id="about"
      className="about-section mx-auto w-full max-w-[1432px] px-[1rem] py-16 sm:px-6 md:py-20"
    >
      <div data-reveal className="about-heading">
        <p className="about-eyebrow">About Shivantra</p>
        <h2>
          Technology with purpose.
          <br />
          People at the center.
        </h2>
      </div>
      <div className="about-story">
        <div data-reveal className="about-art-panel" data-art-surface>
          <span className="about-eyebrow">Ideas become possibilities</span>
          <LiveIllustration scene={11} />
          <div className="about-experience">
            <span>10+</span>
            <p>
              Years of experience.
              <br />A partnership built to last.
            </p>
          </div>
        </div>
        <div data-reveal className="about-copy">
          <h3>{company.name}</h3>
          <p>{sentences.slice(0, 2).join(" ")}</p>
          <p>{sentences.slice(2).join(" ")}</p>
          <div className="about-values">
            {company.values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </div>
      <div data-stagger className="about-principles">
        {[
          { title: "Our vision", body: company.vision, Icon: Eye },
          { title: "Our mission", body: company.mission, Icon: Compass },
        ].map(({ title, body, Icon }) => {
          return (
            <article key={title}>
              <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
