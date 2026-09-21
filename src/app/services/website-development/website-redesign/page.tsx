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

const pageUrl = `${siteUrl}/services/website-development/website-redesign`;

export const metadata: Metadata = {
  title: "Website Redesign Services | Shivantra",
  description:
    "Website redesign for businesses that need better structure, UX, performance, CMS and mobile experience, with careful planning for content, URLs and migration.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Redesign Services | Shivantra",
    description:
      "Modernize your website across structure, design, CMS, performance and technology with a migration plan that accounts for existing content and URLs.",
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
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Redesign", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Redesign",
      serviceType: "Website Redesign",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website redesign for businesses that need better structure, UX, performance, CMS and mobile experience, with careful planning for content, URLs and migration.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-development/website-redesign"}`,
      })),
    },
  ],
};

const triggers = [
  {
    icon: "bi-arrow-repeat",
    title: "The website no longer represents the business",
    description: "Services, positioning, team or brand have changed while the website stayed the same.",
  },
  {
    icon: "bi-signpost-split",
    title: "Visitors struggle to find information",
    description: "Navigation, page hierarchy or content has accumulated without a clear structure.",
  },
  {
    icon: "bi-phone",
    title: "The mobile experience is weak",
    description: "The site technically shrinks to a phone but is difficult to read, navigate or use.",
  },
  {
    icon: "bi-pencil-square",
    title: "Your team cannot manage content efficiently",
    description: "Routine updates require developers, workarounds or risky page-builder editing.",
  },
  {
    icon: "bi-speedometer2",
    title: "Performance has deteriorated",
    description: "Large media, scripts, plugins and legacy implementation can create increasingly heavy pages.",
  },
  {
    icon: "bi-cpu",
    title: "The technology has become a constraint",
    description: "The platform or codebase may make ordinary improvements unnecessarily difficult.",
  },
  {
    icon: "bi-signpost-2",
    title: "Lead paths are unclear",
    description: "Forms, calls to action or service journeys may not reflect how customers actually buy.",
  },
  {
    icon: "bi-arrow-left-right",
    title: "You need to migrate or replatform",
    description: "A new CMS or technical architecture may make sense because of changing editorial or technical requirements.",
  },
];

const protectedAssets = [
  "useful content",
  "indexed URLs",
  "backlinks",
  "search visibility",
  "analytics history",
  "metadata",
  "documents",
  "forms",
  "integrations",
  "tracking",
  "established user journeys",
];

const auditAreas = [
  {
    icon: "bi-file-text",
    title: "Content",
    description: "Which pages are current, duplicated, outdated or genuinely useful?",
  },
  {
    icon: "bi-graph-up",
    title: "Search visibility",
    description: "Which pages receive organic traffic or have external links?",
  },
  {
    icon: "bi-link-45deg",
    title: "URLs",
    description: "Which addresses should stay, which should change and what needs redirecting?",
  },
  {
    icon: "bi-bar-chart",
    title: "Analytics",
    description: "Which journeys and pages are actually used?",
  },
  {
    icon: "bi-bullseye",
    title: "Conversions",
    description: "Where do enquiries or important actions originate?",
  },
  {
    icon: "bi-cpu",
    title: "Technology",
    description: "What is making the site difficult to change or maintain?",
  },
  {
    icon: "bi-layout-text-window",
    title: "CMS",
    description: "Can editors manage content safely and efficiently?",
  },
  {
    icon: "bi-plug",
    title: "Integrations",
    description: "Which forms, analytics, APIs or other systems must continue working?",
  },
];

const improvements = [
  {
    icon: "bi-diagram-3",
    title: "Information architecture",
    description: "Reorganize navigation, service hierarchy and page relationships.",
  },
  {
    icon: "bi-file-richtext",
    title: "Content experience",
    description: "Make important information easier to understand and scan.",
  },
  {
    icon: "bi-palette",
    title: "Visual design",
    description: "Bring the website into alignment with the current brand and level of the business.",
  },
  {
    icon: "bi-phone",
    title: "Responsive experience",
    description: "Design layouts and interactions deliberately for smaller screens.",
  },
  {
    icon: "bi-layout-text-window",
    title: "CMS",
    description: "Improve how content is modeled, edited and published.",
  },
  {
    icon: "bi-speedometer2",
    title: "Performance",
    description: "Reduce unnecessary page weight and address technical bottlenecks.",
  },
  {
    icon: "bi-universal-access",
    title: "Accessibility",
    description: "Improve semantic structure, keyboard interaction, forms, contrast and related fundamentals.",
  },
  {
    icon: "bi-search",
    title: "Technical SEO foundations",
    description: "Review titles, metadata, crawlability, canonical handling, sitemaps and internal linking.",
  },
  {
    icon: "bi-plug",
    title: "Integrations",
    description: "Reconnect or improve CRM, analytics, marketing, forms and APIs.",
  },
];

const migrationItems = [
  "old-to-new URL mapping",
  "server-side permanent redirects",
  "updated internal links",
  "canonical URLs",
  "updated sitemaps",
  "metadata",
  "structured-data review",
  "Search Console checks",
  "post-launch crawl review",
];

const riskReductionItems = [
  "correct redirects",
  "clear URL mapping",
  "preserved or improved content",
  "updated internal links",
  "valid canonicals",
  "sitemaps",
  "crawl checks",
  "post-launch monitoring",
];

const decisionOptions = [
  {
    label: "Refresh",
    title: "Best when the foundation is sound",
    description: "Best when the structure and technology are fundamentally sound but the interface or content needs improvement.",
  },
  {
    label: "Rebuild",
    title: "Best when the structure needs to change",
    description: "Best when the existing implementation has become difficult to maintain or the new structure requires substantial changes.",
  },
  {
    label: "Replatform",
    title: "Best when the platform is the limitation",
    description: "Best when the current CMS or architecture is the main limitation.",
  },
];

const decisionFactors = [
  "current platform",
  "editing needs",
  "technical debt",
  "content",
  "integrations",
  "future requirements",
  "migration risk",
];

const processSteps = [
  { title: "Audit the current website", description: "Review content, structure, UX, technology, performance and important URLs." },
  { title: "Decide what stays and what changes", description: "Identify content and functionality to retain, improve, consolidate or remove." },
  { title: "Restructure", description: "Define the new sitemap, navigation, page purpose and user journeys." },
  { title: "Redesign", description: "Create the visual and responsive experience around the approved structure." },
  { title: "Rebuild", description: "Implement the new frontend, CMS, integrations and technical foundations." },
  { title: "Migrate", description: "Move approved content and prepare redirects where URLs change." },
  { title: "Test", description: "Review forms, links, redirects, content, responsive behaviour, analytics, metadata, accessibility fundamentals and performance." },
  { title: "Launch and monitor", description: "Deploy the site, submit/update sitemaps where relevant and monitor the new implementation for issues." },
];

const faqs = [
  {
    id: "redesign-seo",
    question: "Will redesigning our website hurt SEO?",
    answer:
      "Any significant site change can affect search performance, especially if URLs, content or internal links change. A structured migration reduces avoidable risk, but it is not responsible to guarantee that rankings will never fluctuate.",
    open: true,
  },
  {
    id: "redesign-urls",
    question: "Do we need to change all our URLs?",
    answer: "No. Existing URLs should only change when there is a useful reason. Preserving stable, meaningful URLs can simplify migration.",
    open: false,
  },
  {
    id: "redesign-cms-keep",
    question: "Can you redesign without changing our CMS?",
    answer: "Yes, if the current CMS is still appropriate. We assess whether the problem is design, structure, implementation or the platform itself.",
    open: false,
  },
  {
    id: "redesign-cms-migrate",
    question: "Can you migrate us to another CMS?",
    answer: "Yes. CMS migration can be part of the redesign when replatforming is justified.",
    open: false,
  },
  {
    id: "redesign-old-pages",
    question: "What happens to old pages we no longer need?",
    answer:
      "They should be reviewed individually. Some may be redirected to relevant replacements, some may be consolidated and some may correctly return a 404/410 if there is no replacement.",
    open: false,
  },
  {
    id: "redesign-preserve-content",
    question: "Can you preserve our existing content?",
    answer: "Yes. Content can be retained, rewritten, consolidated or removed based on the agreed content audit.",
    open: false,
  },
  {
    id: "redesign-dated-look",
    question: "Should we redesign if our website only looks dated?",
    answer:
      "Not necessarily. If the website performs well and remains easy to use, a visual refresh may be enough. We prefer solving the actual problem rather than prescribing a full rebuild automatically.",
    open: false,
  },
  {
    id: "redesign-support",
    question: "Do you provide support after launch?",
    answer: "Yes. Post-launch support can include issue resolution, monitoring, content updates, improvements and ongoing maintenance.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Business Website Development", href: "/services/website-development/business-websites" },
  { label: "Corporate Website Development", href: "/services/website-development/corporate-websites" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
  { label: "Website Performance", href: "/services/website-performance" },
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

function PlaceholderVisual({
  icon,
  caption,
  cues,
}: {
  icon: string;
  caption: string;
  cues: string[];
}) {
  return (
    <figure className="placeholder-visual m-0" data-aos="fade-up" data-aos-delay="200">
      <div className="placeholder-icon">
        <i className={`bi ${icon}`} aria-hidden="true"></i>
      </div>
      <figcaption>
        <Description className="mb-0">{caption}</Description>
        <div className="cue-list">
          {cues.map((cue) => (
            <span key={cue}>{cue}</span>
          ))}
        </div>
      </figcaption>
    </figure>
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

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
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

export default function WebsiteRedesign() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap website-redesign-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Website Redesign
                  </Tag>
                  <PageTitle>Redesign the Website Without Throwing Away What Already Works</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A website can become outdated long before the business behind it does. Shivantra
                    redesigns websites across structure, content experience, design, CMS,
                    performance and technology while accounting for the pages, URLs and systems
                    your existing website may already depend on.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/website-audit`} className="btn-primary">
                      Request a Website Review
                    </Button>
                    <Button href={`${basePath}/contact/?service=website-redesign`} className="btn-white-outline">
                      Discuss Your Redesign
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-arrow-repeat"
                    caption="Website moving through a structured redesign and migration process"
                    cues={["Structure", "Content", "Performance", "CMS", "Migration"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="reason">
            <Container>
              <SectionHeader tag="A redesign should solve a reason" title="A new look is not enough" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Businesses usually start thinking about a redesign because something has changed.
                  The company may have grown, the services may be different or the brand may have
                  evolved. The website may be difficult to update, slow on mobile or increasingly
                  dependent on old technology, and customers may struggle to understand what the
                  company actually offers.
                </Description>
              </SectionHeader>
              <Description aos="fade-up" delay={150}>
                A redesign should identify those problems first.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={200}>
                Otherwise, it is easy to produce a newer-looking website that carries the same
                structural problems into a new interface.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="when-to-redesign">
            <Container>
              <SectionHeader tag="Common reasons to redesign" title="When a redesign makes sense" />
              <div className="row g-4">
                {triggers.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="two-projects">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                  <SectionHeader tag="Two projects" title="A responsible redesign is really two projects" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      The visible project is the new website. The less visible project is
                      protecting and migrating the value the existing website has already
                      accumulated. That may include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={protectedAssets} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    Changing all of those carelessly can create problems even when the new visual
                    design is excellent.
                  </Description>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="track-diagram w-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-signpost-split" aria-hidden="true"></i>
                    </div>
                    <div className="track-columns">
                      <div className="track-col">
                        <span className="track-label">Track A: Experience</span>
                        <ul className="track-items">
                          <li>Structure</li>
                          <li>UX</li>
                          <li>Design</li>
                          <li>CMS</li>
                          <li>Performance</li>
                        </ul>
                      </div>
                      <div className="track-col">
                        <span className="track-label">Track B: Migration</span>
                        <ul className="track-items">
                          <li>Content</li>
                          <li>URLs</li>
                          <li>Redirects</li>
                          <li>Metadata</li>
                          <li>Analytics</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Launch</span>
                    <Description className="mb-0 mt-3">
                      Website redesign combining experience improvements and migration planning
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="before-we-redesign">
            <Container>
              <SectionHeader tag="Before we redesign" title="We first understand what already exists" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  An existing website provides evidence. Before changing it, we may review:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {auditAreas.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
              <Description className="mt-4 mb-0" aos="fade-up" delay={100}>
                This creates a stronger basis for deciding what to keep, improve, consolidate or
                remove.
              </Description>
            </Container>
          </Section>

          <Section id="improvements">
            <Container>
              <SectionHeader tag="What we can improve" title="Website redesign can address more than appearance" />
              <div className="row g-4">
                {improvements.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="migration">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Migration" title="URL changes need a plan" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      If a redesign changes page URLs, search engines and users need a clear route
                      from the old location to the new one. Where appropriate, we prepare:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={migrationItems} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Not every URL needs to change. Keeping useful URLs stable can often simplify
                    the migration.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    If pages are consolidated, redirects should lead to the most relevant
                    replacement rather than sending everything to the homepage.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="search-expectations">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader
                    tag="Search expectations"
                    title='A redesign can be planned carefully, but search performance should not be "guaranteed"'
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Search engines need time to recrawl and process significant site changes.
                      Even a well-managed migration can experience temporary movement while new
                      URLs and signals are processed. Our role is to reduce avoidable risk
                      through:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={riskReductionItems} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    We do not sell redesigns with promises that no ranking will ever move.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="decision">
            <Container>
              <SectionHeader tag="Refresh, rebuild or replatform?" title="Not every website needs the same level of change" colClass="col-lg-9" />
              <div className="row g-4 mb-4">
                {decisionOptions.map((option, index) => (
                  <div className="col-md-4" key={option.label} data-aos="fade-up" data-aos-delay={String(index * 100)}>
                    <div className="decision-card">
                      <span className="decision-label">{option.label}</span>
                      <CardTitle className="fs-6 mb-2">{option.title}</CardTitle>
                      <Description className="mb-0">{option.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description aos="fade-up" delay={100} className="fw-semibold mb-0">
                The correct choice depends on:
              </Description>
              <ChecklistList items={decisionFactors} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                A redesign engagement should begin by determining which level of change is
                justified.
              </Description>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="Our website redesign process" />
              <div className="row g-4">
                {processSteps.map((step, index) => (
                  <div className="col-md-6 col-lg-3" key={step.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <div className="process-card h-100">
                      <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                      <CardTitle className="fs-6 mb-2">{step.title}</CardTitle>
                      <Description className="mb-0">{step.description}</Description>
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
                  <div className="accordion custom-accordion" id="website-redesign-faq-accordion">
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
                  <SectionTitle>Before replacing the website, understand what is worth keeping</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Send us your current website. We can review where the real issues are and
                    whether the right answer is a refresh, rebuild or replatform.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/website-audit`} className="btn-primary">
                      Request a Website Review
                    </Button>
                    <Button href={`${basePath}/contact/?service=website-redesign`} className="btn-white-outline">
                      Discuss Your Redesign
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
