import type { Metadata } from "next";
import Link from "next/link";
import "./page.css";
import "@/components/FAQ.css";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { FAQItem } from "@/components/FAQListing";
import {
  Button,
  Section,
  Container,
  Tag,
  PageTitle,
  SectionHeader,
  SectionTitle,
  CardTitle,
  Description,
} from "@/components/Typography";
import { basePath, siteUrl } from "@/lib/basePath";

const pageUrl = `${siteUrl}/services/website-performance`;

export const metadata: Metadata = {
  title: "Website Performance Optimization Services | Shivantra",
  description:
    "Website performance optimization for faster loading, better responsiveness and stronger Core Web Vitals across frontend, media, JavaScript, hosting and third-party scripts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Performance Optimization | Shivantra",
    description:
      "Engineering-led website performance optimization across Core Web Vitals, frontend code, media, scripts, rendering and infrastructure.",
    url: pageUrl,
    siteName: "Shivantra - Software Consultancy & Development",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/images/og.png`,
        secureUrl: `${siteUrl}/assets/images/og.png`,
        type: "image/png",
        width: 1920,
        height: 1080,
        alt: "Image of Shivantra",
      },
    ],
  },
};

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Website Performance Optimization", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Performance Optimization",
      serviceType: "Website Performance Optimization",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website performance optimization for faster loading, better responsiveness and stronger Core Web Vitals across frontend, media, JavaScript, hosting and third-party scripts.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-performance"}`,
      })),
    },
  ],
};

const realUserFactors = ["different phones and computers", "different network speeds", "different browsers", "different cached resources", "different interaction patterns"];

const coreWebVitals = [
  {
    icon: "bi-hourglass-split",
    name: "LCP",
    fullName: "Largest Contentful Paint",
    description: "Measures loading performance by tracking when the largest meaningful content element in the viewport becomes visible.",
    target: "2.5 seconds or less",
    causes: ["Slow server response", "Large hero images", "Render-blocking resources", "Client-side rendering delays", "Unnecessary request chains"],
  },
  {
    icon: "bi-cursor",
    name: "INP",
    fullName: "Interaction to Next Paint",
    description: "Measures how responsive a page is when users interact with it.",
    target: "200 milliseconds or less",
    causes: ["Large JavaScript tasks", "Heavy hydration", "Expensive event handlers", "Repeated rendering work", "Too much work on the main thread"],
  },
  {
    icon: "bi-arrows-move",
    name: "CLS",
    fullName: "Cumulative Layout Shift",
    description: "Measures unexpected visual movement.",
    target: "0.1 or less",
    causes: ["Images without dimensions", "Late-loading embeds", "Injected banners", "Fonts changing layout", "Content inserted above existing content"],
  },
];

const slowCauses = [
  { icon: "bi-images", title: "Oversized media", description: "Large images and video can dominate page weight and delay important content." },
  { icon: "bi-filetype-js", title: "Too much JavaScript", description: "Modern sites can send large bundles or execute more client-side code than the page needs." },
  { icon: "bi-code-slash", title: "Third-party scripts", description: "Analytics, advertising, chat, tracking and embedded tools can compete with the website for browser resources." },
  { icon: "bi-fonts", title: "Fonts", description: "Poor font loading can delay text or create visual shifts." },
  { icon: "bi-diagram-3", title: "Rendering architecture", description: "The way a page is generated and delivered can change when useful content becomes available." },
  { icon: "bi-plug", title: "CMS and plugins", description: "Poorly configured plugins, page builders or generated markup can add unnecessary code and requests." },
  { icon: "bi-hdd-network", title: "Backend or API latency", description: "A fast frontend cannot hide every slow server or API response." },
  { icon: "bi-arrow-repeat", title: "Missing caching strategy", description: "Repeatedly generating or transferring unchanged resources creates avoidable work." },
];

const optimizationAreas = [
  { icon: "bi-window", title: "Frontend delivery", items: ["HTML", "CSS", "JavaScript", "Request waterfalls", "Rendering order", "Code splitting", "Critical resources"] },
  { icon: "bi-images", title: "Images and media", items: ["Dimensions", "Compression", "Responsive image delivery", "Modern formats where appropriate", "Lazy loading", "Preload decisions", "Video behavior"] },
  { icon: "bi-filetype-js", title: "JavaScript", items: ["Bundle size", "Unused code", "Long tasks", "Hydration", "Component rendering", "Interaction handlers", "Third-party libraries"] },
  { icon: "bi-fonts", title: "Fonts", items: ["Font file size", "Number of variants", "Preload strategy", "Fallback behavior", "Layout impact"] },
  { icon: "bi-code-slash", title: "Third-party scripts", items: ["Analytics", "Tag managers", "Ad scripts", "Chat widgets", "Embeds", "Social widgets"] },
  { icon: "bi-cloud-arrow-down", title: "Caching and delivery", items: ["Browser caching", "CDN", "Compression", "Static asset delivery", "Server caching", "Revalidation strategy"] },
  { icon: "bi-hdd-network", title: "Backend and APIs", items: ["Query performance", "API response time", "Unnecessary round trips", "Payload size", "Caching"] },
];

const diagnosticSteps = [
  { title: "Establish a baseline", description: "Measure important templates and user journeys." },
  { title: "Compare field and lab evidence", description: "Where real-user data exists, compare it with diagnostic testing rather than treating them as interchangeable." },
  { title: "Identify bottlenecks", description: "Determine which resources, tasks or systems are responsible for the largest delays." },
  { title: "Prioritize by impact", description: "A large hero image that affects most visits may matter more than a minor optimization deep in the page." },
  { title: "Implement targeted changes", description: "Fix the bottlenecks that are actually contributing to poor experience." },
  { title: "Validate", description: "Re-test the affected pages and compare the result." },
  { title: "Monitor", description: "Performance can regress as content, campaigns and scripts change, so important sites may benefit from ongoing monitoring." },
];

const labData = { title: "Lab testing", description: "Runs a controlled test using defined device and network conditions. It is useful for:", items: ["Debugging", "Repeatable comparison", "Identifying technical opportunities"] };
const fieldData = { title: "Field data", description: "Reflects real visits collected from users. It can capture:", items: ["Real devices", "Real networks", "Real interactions", "Real page usage"] };

const jsIssues = ["unnecessarily large client bundles", "excessive hydration", "rendering too much on the client", "duplicate requests", "heavy component trees", "poorly managed state", "large third-party packages"];

const scriptTypes = ["analytics", "advertising pixels", "A/B testing", "chat", "heatmaps", "consent tools", "social embeds"];

const scriptQuestions = ["what loads", "when it loads", "whether it blocks important work", "whether duplicate tools exist", "whether scripts can be delayed or conditionally loaded"];

const regressionCauses = ["oversized editorial images", "new third-party scripts", "additional fonts", "heavy embeds", "unreviewed components"];

const sustainablePractices = ["image rules", "component guidelines", "script governance", "performance budgets", "monitoring", "periodic review"];

const scopeCategories = [
  { title: "Measurement", items: ["PageSpeed/Lighthouse diagnostics", "Core Web Vitals review", "Browser performance profiling", "Request waterfall review", "Real-user data review where available"] },
  { title: "Frontend", items: ["JavaScript optimization", "CSS/HTML review", "Rendering strategy", "Code splitting", "Interaction responsiveness"] },
  { title: "Assets", items: ["Images", "Fonts", "Video", "Embeds"] },
  { title: "Infrastructure", items: ["Caching", "CDN", "Compression", "Hosting/server review where applicable"] },
  { title: "Third-party", items: ["Tag/script inventory", "Loading strategy", "Duplicate tracking review"] },
  { title: "Validation", items: ["Before/after technical measurement", "Regression checks", "Implementation recommendations"] },
];

const faqs = [
  {
    id: "perf-100-score",
    question: "Can you guarantee a 100 PageSpeed score?",
    answer: "No. A perfect synthetic score is not the objective and may not be realistic or useful for every website. We focus on meaningful bottlenecks and real-user experience.",
    open: true,
  },
  {
    id: "perf-ranking-factor",
    question: "Are Core Web Vitals a ranking factor?",
    answer: "Google uses Core Web Vitals as part of its page experience systems, but strong scores do not guarantee rankings. Search performance depends on many signals, especially useful and relevant content.",
    open: false,
  },
  {
    id: "perf-mobile-worse",
    question: "Why is mobile performance worse than desktop?",
    answer: "Mobile devices often have less processing power and may use slower or less stable networks. Heavy JavaScript and media can therefore have a larger effect.",
    open: false,
  },
  {
    id: "perf-wordpress",
    question: "Can you optimize a WordPress website?",
    answer: "Yes. The work may involve theme output, plugins, images, fonts, caching, database/server behavior and third-party scripts.",
    open: false,
  },
  {
    id: "perf-nextjs",
    question: "Can you optimize Next.js or React websites?",
    answer: "Yes. We can review bundle size, rendering strategy, hydration, component behavior, data fetching and asset delivery.",
    open: false,
  },
  {
    id: "perf-how-fast",
    question: "How quickly will performance improve?",
    answer: "It depends on the bottleneck. Some issues can be fixed with targeted changes; others require architectural or third-party decisions.",
    open: false,
  },
  {
    id: "perf-hosting",
    question: "Does changing hosting fix website speed?",
    answer: "Sometimes server response is a meaningful problem, but hosting is only one layer. Moving servers will not solve large JavaScript bundles, oversized images or heavy third-party scripts.",
    open: false,
  },
  {
    id: "perf-monitoring",
    question: "Do you provide ongoing performance monitoring?",
    answer: "Ongoing review can be included where performance is commercially important or the site changes frequently.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "Technical SEO", href: "/services/technical-seo" },
  { label: "Website Accessibility", href: "/services/website-accessibility" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
];

function BreadcrumbNav() {
  return (
    <nav className="breadcrumb-nav mb-4" aria-label="Breadcrumb">
      <ol className="breadcrumb mb-0 d-flex">
        {breadcrumbTrail.map((crumb) => (
          <li key={crumb.label} className="breadcrumb-item d-flex align-items-center">
            {crumb.href ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : (
              <span className="current" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ChecklistList({ items, tight }: { items: string[]; tight?: boolean }) {
  return (
    <ul className={`checklist${tight ? " checklist--tight" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="info-card">
      <span className="icon-badge">
        <i className={`bi ${icon}`} aria-hidden="true"></i>
      </span>
      <CardTitle className="fs-6 mb-2">{title}</CardTitle>
      <Description className="mb-0">{description}</Description>
    </div>
  );
}

export default function WebsitePerformance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap website-performance-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Website Performance Optimization
                  </Tag>
                  <PageTitle>Make Your Website Feel Faster, More Responsive and More Stable</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Website performance affects what a visitor experiences before they have time
                    to judge the design or content. Slow loading, delayed interactions and
                    shifting layouts create friction that can be especially noticeable on mobile
                    devices and slower networks. Shivantra diagnoses and improves website
                    performance across frontend code, images, JavaScript, third-party scripts,
                    rendering, caching and infrastructure.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/website-audit?focus=performance`} className="btn-primary">
                      Request a Performance Review
                    </Button>
                    <Button href="#what-we-optimize" className="btn-white-outline">
                      See What We Optimize
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-speedometer" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Load</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Respond</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Stay Stable</span>
                    <Description className="mb-0 mt-3">
                      Website loading quickly, responding to interaction and maintaining visual
                      stability
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="more-than-score">
            <Container>
              <SectionHeader tag="Performance is more than a score" title="A benchmark is useful. The user's experience matters more." tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  Performance tools are valuable because they help expose technical problems. But
                  a single lab score does not represent every visitor.
                </Description>
                <Description className="mb-0" aos="fade-up" delay={150}>
                  Real users arrive with:
                </Description>
              </SectionHeader>
              <ChecklistList items={realUserFactors} tight />
              <Description className="mt-4" aos="fade-up" delay={200}>
                That is why we look at both diagnostic testing and, where available, real-user
                data.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={250}>
                The objective is not to optimize a screenshot of a report. It is to improve the
                experience behind the report.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="core-web-vitals">
            <Container>
              <SectionHeader tag="Core Web Vitals" title="Measure the parts of performance users can actually feel" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Core Web Vitals focus on three areas of user experience.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {coreWebVitals.map((metric, index) => (
                  <div className="col-md-6 col-lg-4" key={metric.name} data-aos="fade-up" data-aos-delay={String(index * 100)}>
                    <div className="metric-card">
                      <span className="metric-name">{metric.name}</span>
                      <CardTitle className="fs-6 mb-2">{metric.fullName}</CardTitle>
                      <Description className="mb-0">{metric.description}</Description>
                      <span className="metric-target">Good: {metric.target}</span>
                      <Description className="fw-semibold mb-2">Typical causes can include:</Description>
                      <ChecklistList items={metric.causes} tight />
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="what-slow">
            <Container>
              <SectionHeader tag="What can make a website slow" title="Performance problems usually come from several layers" />
              <div className="row g-4">
                {slowCauses.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="what-we-optimize">
            <Container>
              <SectionHeader tag="What we optimize" title="Performance optimization across the stack" colClass="col-lg-9" />
              <div className="row g-4">
                {optimizationAreas.map((area, index) => (
                  <div className="col-md-6 col-lg-4" key={area.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="include-card">
                      <span className="icon-badge">
                        <i className={`bi ${area.icon}`} aria-hidden="true"></i>
                      </span>
                      <CardTitle className="fs-6 mb-3">{area.title}</CardTitle>
                      <ChecklistList items={area.items} tight />
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                Across third-party scripts, the goal is not to remove every service. It is to
                understand its cost and load it appropriately.
              </Description>
            </Container>
          </Section>

          <Section id="diagnose">
            <Container>
              <SectionHeader tag="How we diagnose performance" title="Start with evidence before changing code" />
              <div className="row g-4">
                {diagnosticSteps.map((step, index) => (
                  <div className="col-md-6 col-lg-3" key={step.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <div className="process-card h-100">
                      <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                      <CardTitle className="fs-6 mb-2">{step.title}</CardTitle>
                      <Description className="mb-0">{step.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row mt-5">
                <div className="col-lg-8 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Measure</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Diagnose</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Prioritize</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Optimize</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Validate</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Monitor</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="lab-vs-field">
            <Container>
              <SectionHeader tag="Lab data and field data" title="Why two performance reports can show different results" colClass="col-lg-9" />
              <div className="row g-4">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="include-card h-100">
                    <CardTitle className="fs-6 mb-2">{labData.title}</CardTitle>
                    <Description>{labData.description}</Description>
                    <ChecklistList items={labData.items} tight />
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="include-card h-100">
                    <CardTitle className="fs-6 mb-2">{fieldData.title}</CardTitle>
                    <Description>{fieldData.description}</Description>
                    <ChecklistList items={fieldData.items} tight />
                  </div>
                </div>
              </div>
              <Description className="mt-5" aos="fade-up" delay={100}>
                These two perspectives answer different questions. A page may perform well in a
                controlled lab run but still have poor real-user responsiveness because of device
                mix or interaction behavior.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={150}>
                We use the available evidence according to the question being investigated.
              </Description>
            </Container>
          </Section>

          <Section id="js-apps">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="JavaScript applications" title="Modern frontend frameworks still need performance discipline" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      React and Next.js can deliver excellent experiences, but architecture still
                      matters. Performance issues can appear through:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={jsIssues} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Optimization may involve moving work away from the client, reducing bundle
                    scope, changing loading behavior or simplifying interactions.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The objective is not to minimize JavaScript at any cost. It is to send and
                    execute only what the user experience actually needs.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="third-party">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Third-party scripts" title="Every marketing script has a technical cost" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Modern websites often accumulate:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={scriptTypes} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Each may be legitimate. Together, they can create meaningful performance
                    overhead. We can help identify:
                  </Description>
                  <ChecklistList items={scriptQuestions} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    Performance optimization should include the marketing stack, not pretend the
                    site&apos;s own code is the only thing running in the browser.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="sustainable">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Sustainable performance" title="Performance should survive future content changes" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A site can be fast at launch and slow six months later. Common regressions
                      include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={regressionCauses} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Sustainable performance can include:
                  </Description>
                  <ChecklistList items={sustainablePractices} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    The goal is to make good performance easier to preserve.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="scope">
            <Container>
              <SectionHeader tag="What an engagement can include" title="Website performance optimization scope" colClass="col-lg-9" />
              <div className="row g-4">
                {scopeCategories.map((category, index) => (
                  <div className="col-md-6 col-lg-4" key={category.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="include-card">
                      <CardTitle className="fs-6 mb-3">{category.title}</CardTitle>
                      <ChecklistList items={category.items} tight />
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section className="faq__v2" id="faq">
            <Container>
              <SectionHeader
                tag="FAQ"
                title="Frequently Asked Questions"
                colClass="col-md-6 col-lg-7 mx-auto text-center"
                tight
              />
              <div className="row">
                <div className="col-md-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
                  <div className="accordion custom-accordion" id="website-performance-faq-accordion">
                    {faqs.map((faq) => (
                      <FAQItem key={faq.id} {...faq} />
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="related-services section-muted" id="related-services">
            <Container>
              <SectionTitle>Related services</SectionTitle>
              <ul>
                {relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href}>
                      <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </Section>

          <Section id="cta">
            <Container>
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <SectionTitle>Find out what is actually slowing the website down</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Performance optimization works best when changes are based on evidence rather
                    than a checklist.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={150}>
                    We can review the site, identify the main bottlenecks and prioritize
                    improvements by likely impact.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/website-audit?focus=performance`} className="btn-primary">
                      Request a Performance Review
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Footer />
        </main>
      </div>
    </>
  );
}
