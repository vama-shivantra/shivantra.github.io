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

const pageUrl = `${siteUrl}/services/cms-development/headless-cms`;

export const metadata: Metadata = {
  title: "Headless CMS Development Services | Shivantra",
  description:
    "Headless CMS development for structured content, modern frontend frameworks, APIs, multilingual websites and content reused across digital channels.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Headless CMS Development | Shivantra",
    description:
      "Headless CMS architecture for structured content, independent frontends, APIs and multi-channel publishing.",
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
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Headless CMS Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Headless CMS Development",
      serviceType: "Headless CMS Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Headless CMS development for structured content, modern frontend frameworks, APIs, multilingual websites and content reused across digital channels.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/cms-development/headless-cms"}`,
      })),
    },
  ],
};

const cmsFocusAreas = ["content", "structure", "editing", "workflow", "APIs"];

const fitCriteria = [
  {
    icon: "bi-code-slash",
    title: "You need a modern custom frontend",
    description: "The website may be built with a framework such as Next.js or another frontend technology that should evolve independently from the CMS.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Content needs to be reused",
    description: "The same service, product, article or location content may appear on a website, app, portal or another channel.",
  },
  {
    icon: "bi-diagram-3",
    title: "Your content is highly structured",
    description: "Relationships between products, services, markets, people or resources benefit from being modeled as data.",
  },
  {
    icon: "bi-people",
    title: "Several teams or markets publish content",
    description: "A structured CMS can support reusable content, localization and roles depending on platform capabilities.",
  },
  {
    icon: "bi-plug",
    title: "The website integrates with other systems",
    description: "A headless architecture can sit alongside commerce, CRM, product systems, APIs or custom applications.",
  },
  {
    icon: "bi-person-workspace",
    title: "Frontend and content teams need independent workflows",
    description: "Editors can manage content while developers deploy frontend changes separately.",
  },
];

const notForEveryone = [
  "a small brochure website",
  "a site with very simple editorial needs",
  "a team that expects unrestricted visual page-building",
  "a project without development resources for the frontend",
  "a website where a mature traditional CMS already fits well",
];

const reusableContentTypes = ["people", "services", "products", "industries", "categories", "resources", "events", "FAQs"];

const editorExperienceItems = [
  "clear content types",
  "field validation",
  "media management",
  "references",
  "previews",
  "drafts",
  "roles",
  "scheduling or releases where platform support exists",
  "localization",
];

const frontendCapabilities = ["component-based interfaces", "custom interactions", "modern rendering approaches", "responsive performance", "application-style functionality"];

const publishingCoordination = ["cache invalidation", "webhooks", "frontend regeneration", "search indexing", "downstream systems"];

const integrationTargets = ["frontend website", "mobile app", "portal", "ecommerce platform", "CRM", "DAM", "translation service", "search", "analytics", "automation", "internal APIs"];

const legacyContentIssues = ["presentation markup", "page-builder structures", "duplicated fields", "old shortcodes", "embedded styling"];

const migrationSteps = ["inventory", "content mapping", "content-model design", "transformation", "media migration", "metadata", "URL mapping", "redirects", "validation"];

const processSteps = [
  { title: "Understand the content and channels", description: "Define editors, content types, frontends and integrations." },
  { title: "Model the content", description: "Design reusable schemas, references and localization." },
  { title: "Evaluate the platform", description: "Compare CMS capabilities, pricing, permissions, APIs and workflow needs." },
  { title: "Design frontend architecture", description: "Define rendering, preview, deployment and integration approach." },
  { title: "Configure the CMS", description: "Implement schemas, fields, validation, roles and editorial structure." },
  { title: "Build the frontend integration", description: "Consume content through the appropriate APIs." },
  { title: "Configure preview, webhooks and workflows", description: "Connect content updates to the delivery process." },
  { title: "Migrate, test and launch", description: "Import content, validate output, test editorial flows and deploy." },
];

const faqs = [
  {
    id: "headless-vs-wordpress",
    question: "Is headless CMS better than WordPress?",
    answer:
      "Not universally. They solve overlapping but different needs. A traditional CMS can be simpler for many business websites. Headless is useful when frontend independence, structured content or multiple delivery channels justify it.",
    open: true,
  },
  {
    id: "headless-performance",
    question: "Does headless CMS improve performance automatically?",
    answer: "No. It gives developers flexibility to build a performant frontend, but real performance still depends on architecture, code, media, hosting and third-party scripts.",
    open: false,
  },
  {
    id: "headless-marketers-edit",
    question: "Can marketers edit pages in a headless CMS?",
    answer:
      "Yes, but the editing experience depends on how the CMS and frontend components are implemented. Some platforms provide visual or structured editing tools, while others are more schema-driven.",
    open: false,
  },
  {
    id: "headless-nextjs",
    question: "Can we use Next.js?",
    answer: "Yes. Next.js is a common frontend choice for headless projects, though the technology should still follow the project requirements.",
    open: false,
  },
  {
    id: "headless-multi-site",
    question: "Can one CMS power multiple websites?",
    answer: "Yes, if the content model, permissions and delivery architecture are designed for it.",
    open: false,
  },
  {
    id: "headless-migrate",
    question: "Can you migrate from a traditional CMS to headless?",
    answer: "Yes. The work normally involves remodeling and transforming content rather than simply copying database tables.",
    open: false,
  },
  {
    id: "headless-multilingual",
    question: "Can headless support multiple languages?",
    answer: "Yes. Localization can be modeled in different ways depending on CMS capabilities and editorial workflow.",
    open: false,
  },
  {
    id: "headless-recommend",
    question: "Which headless CMS do you recommend?",
    answer: "We recommend a platform after evaluating content structure, workflow, permissions, integration needs, hosting preferences and budget.",
    open: false,
  },
];

const relatedServices = [
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "CMS Consulting", href: "/services/cms-development/cms-consulting" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
  { label: "Custom CMS Development", href: "/services/cms-development/custom-cms" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Integrations", href: "/services/website-integrations" },
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

function ChecklistList({ items, tight, avoid }: { items: string[]; tight?: boolean; avoid?: boolean }) {
  return (
    <ul className={`checklist${tight ? " checklist--tight" : ""}${avoid ? " checklist--avoid" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <i className={`bi ${avoid ? "bi-x-circle-fill" : "bi-check-circle-fill"}`} aria-hidden="true"></i>
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

export default function HeadlessCmsDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap headless-cms-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Headless CMS Development
                  </Tag>
                  <PageTitle>Manage Content Once. Deliver It Where It Needs to Go.</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A headless CMS separates content management from the website or application
                    that presents the content. That separation can give teams more flexibility
                    when content needs to support modern frontends, multiple websites, apps,
                    portals or other digital channels. Shivantra designs and implements headless
                    CMS architectures around the content model, editorial workflow and frontend
                    requirements of the project.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=headless-cms-development`} className="btn-primary">
                      Discuss Headless CMS
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-hdd-network" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Structured CMS</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">API</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">Website</span>
                      <span className="flow-step">App</span>
                      <span className="flow-step">Portal</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Headless CMS delivering structured content by API to a website, app and
                      portal
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="what-is-headless">
            <Container>
              <SectionHeader
                tag="What does headless CMS actually mean?"
                title="The CMS manages content. The frontend manages presentation."
                tight
                colClass="col-lg-9"
              >
                <Description aos="fade-up" delay={100} className="mb-0">
                  In a traditional CMS, the content-management layer and website presentation are
                  usually closely connected. In a headless architecture, the CMS focuses
                  primarily on:
                </Description>
              </SectionHeader>
              <ChecklistList items={cmsFocusAreas} tight />
              <Description className="mt-4" aos="fade-up" delay={150}>
                The website or application is developed separately. The frontend requests content
                through APIs and decides how to present it.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={200}>
                This makes it possible for the same structured content to be reused in more than
                one digital experience.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="when-makes-sense">
            <Container>
              <SectionHeader tag="When headless makes sense" title="Use headless when the separation creates a real advantage" />
              <div className="row g-4">
                {fitCriteria.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="when-unnecessary">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="When headless may be unnecessary" title="More architecture is not automatically better architecture" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A headless CMS may introduce unnecessary complexity for:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={notForEveryone} tight avoid />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    The decision should be based on operating needs, not on whether the
                    architecture sounds more modern.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="structured-content">
            <Container>
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <SectionHeader tag="Structured content" title="Build content as reusable information, not copied page fragments" tight colClass="col-12">
                    <Description aos="fade-up" delay={100}>
                      Headless CMS platforms are strongest when content is modeled deliberately.
                    </Description>
                    <Description className="mb-0" aos="fade-up" delay={150}>
                      For example, instead of embedding an office address separately into ten
                      pages, a location can be a structured record referenced wherever needed.
                      The same principle can apply to:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={reusableContentTypes} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    This reduces duplication and makes content more usable by APIs.
                  </Description>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Service</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">Related Industry</span>
                      <span className="flow-step">Related Case Study</span>
                      <span className="flow-step">Expert</span>
                      <span className="flow-step">CTA</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Each referenced record remains independently editable
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="editor-experience">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Editor experience" title="Headless should not mean developer-only" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      The public frontend may be custom-developed, but the editorial environment
                      should remain understandable to content teams. A good implementation can
                      include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={editorExperienceItems} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    Exact capabilities vary by CMS and pricing plan, so they should be evaluated
                    before platform selection.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="frontend">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Frontend development" title="Give the frontend freedom without giving up editorial control" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      With a headless CMS, developers can create the frontend independently from
                      the content system. This can support:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={frontendCapabilities} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    For Shivantra projects, the frontend architecture may use technologies such as
                    React or Next.js where appropriate.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The CMS remains responsible for content. The frontend remains responsible for
                    the experience.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="preview-publishing">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Preview and publishing" title="Editors should be able to see what they are preparing" tight colClass="col-12">
                    <Description aos="fade-up" delay={100}>
                      Preview requires deliberate implementation in a headless architecture
                      because the CMS and frontend are separated.
                    </Description>
                    <Description className="mb-0" aos="fade-up" delay={150}>
                      Where required, we can configure preview flows so editors can review draft
                      content in the context of the website before publication. Publishing
                      behavior may also need to coordinate:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={publishingCoordination} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    These details should be part of architecture planning rather than treated as
                    launch-day fixes.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="integrations">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Integrations" title="APIs are part of the architecture from the beginning" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A headless CMS may interact with:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationTargets} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Content ownership should be defined carefully. For example, product price may
                    belong to commerce while product marketing copy belongs to the CMS.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Duplicating the same source-of-truth information across systems should be
                    avoided where practical.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="architecture">
            <Container>
              <SectionHeader tag="Architecture" title="A typical headless CMS architecture" colClass="col-lg-9" />
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Editors</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Headless CMS</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Frontend Application</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">CDN / Hosting</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Visitors</span>
                    <div className="flow-branch">CMS ↔ DAM</div>
                    <div className="flow-branch">CMS ↔ Translation</div>
                    <div className="flow-branch">Frontend ↔ Commerce/API</div>
                    <div className="flow-branch">CMS → Webhooks</div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="migration">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Migration to headless" title="Moving to headless is a content-modeling project, not just a data import" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Legacy CMS content often contains:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={legacyContentIssues} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    A headless migration is an opportunity to separate meaningful content from
                    presentation. The process can include:
                  </Description>
                  <ChecklistList items={migrationSteps} tight />
                  <Button href="/services/cms-development/cms-migration" className="btn-white-outline mt-4">
                    Explore CMS Migration
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we approach headless CMS development" />
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
                  <div className="accordion custom-accordion" id="headless-cms-faq-accordion">
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
                  <SectionTitle>Considering headless CMS? Start with the reason for separating content from the frontend.</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can help determine whether headless architecture is justified and design
                    the content model, frontend and integration approach around your actual
                    requirements.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=headless-cms-development`} className="btn-primary">
                      Discuss Headless CMS
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
