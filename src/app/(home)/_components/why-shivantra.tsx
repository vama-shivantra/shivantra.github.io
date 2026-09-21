import { pillars } from "@/content/site-data";
import "./why-shivantra.css";
import { LiveIllustration } from "./live-illustration";

export function WhyShivantra() {
  return (
    <section className="mx-auto w-full max-w-[1432px] px-[1rem] py-16 sm:px-6 md:py-20">
      <div data-reveal className="mb-12">
        <p className="text-[12px] uppercase tracking-[-0.033em] text-[#797776]">Why Shivantra</p>
        <h2 className="mt-[0.75rem] font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-[#242424]">
          How Shivantra works
        </h2>
      </div>

      <div data-stagger className="why-grid">
        <article className="why-card why-card-tall">
          <span className="why-num">01</span>
          <h3>{pillars[0].title}</h3>
          <p>{pillars[0].description}</p>
          <div className="why-live-tall">
            <LiveIllustration scene={9} />
            <div className="why-live-labels">
              <span>Discover</span>
              <span>Design</span>
              <span>Deliver</span>
            </div>
          </div>
        </article>

        <article className="why-card">
          <div className="why-card-split">
            <div className="why-copy">
              <span className="why-num">02</span>
              <h3>{pillars[1].title}</h3>
              <p>{pillars[1].description}</p>
            </div>
            <div className="why-live-side">
              <LiveIllustration scene={10} />
            </div>
          </div>
        </article>

        <article className="why-card">
          <div className="why-card-split">
            <div className="why-copy">
              <span className="why-num">03</span>
              <h3>{pillars[2].title}</h3>
              <p>{pillars[2].description}</p>
            </div>
            <div className="why-live-side">
              <LiveIllustration scene={11} />
            </div>
          </div>
        </article>

        <article className="why-card why-card-wide">
          <div className="why-stack-wrap">
            <div className="why-copy">
              <span className="why-num">04</span>
              <h3>{pillars[3].title}</h3>
              <p>{pillars[3].description}</p>
              <ul className="why-outcome-list">
                <li>Fixed-Price</li>
                <li>Hourly / T&amp;M</li>
                <li>Staff Augmentation</li>
              </ul>
            </div>
            <div className="why-live-outcomes">
              <LiveIllustration scene={12} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
