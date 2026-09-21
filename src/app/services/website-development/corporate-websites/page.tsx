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

const pageUrl = `${siteUrl}/services/website-development/corporate-websites`;

export const metadata: Metadata = {
  title: "Corporate Website Development Services | Shivantra",
  description:
    "Corporate website development for organizations that need scalable content, strong governance, multilingual capability, integrations and a maintainable CMS.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Corporate Website Development | Shivantra",
    description:
      "Scalable corporate websites designed around complex content, teams, markets, governance and integrations.",
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
  { label: "Corporate Website Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Corporate Website Development",
      serviceType: "Corporate Website Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Corporate website development for organizations that need scalable content, strong governance, multilingual capability, integrations and a maintainable CMS.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-development/corporate-websites"}`,
      })),
    },
  ],
};

const systemPillars = [
  "information architecture",
  "content model",
  "design system",
  "CMS roles",
  "publishing workflow",
  "integrations",
  "localization",
  "technical architecture",
];

const complexityAreas = [
  {
    icon: "bi-diagram-3",
    title: "Multiple services and business units",
    description:
      "Large organizations often need to explain several offerings without fragmenting the user experience. We organize services and business units into a clear hierarchy while preserving relevant cross-links.",
  },
  {
    icon: "bi-geo-alt",
    title: "Multiple locations",
    description: "Location information can be structured for countries, regions, offices, branches, plants or service areas.",
  },
  {
    icon: "bi-people",
    title: "Multiple audiences",
    description: "Customers, partners, candidates and other stakeholders should not all be forced through the same journey.",
  },
  {
    icon: "bi-person-workspace",
    title: "Multiple content teams",
    description: "Content roles and permissions can be designed around who creates, reviews and publishes information.",
  },
  {
    icon: "bi-translate",
    title: "Multiple languages",
    description: "Localization should be planned in the content model and workflow rather than added as an afterthought.",
  },
  {
    icon: "bi-plug",
    title: "Multiple systems",
    description: "Corporate websites may need to work with CRM, ERP, recruitment, analytics, identity, digital asset or other business systems.",
  },
];

const foundationLayers = [
  {
    icon: "bi-diagram-3",
    title: "Information architecture",
    description: "We define the hierarchy of pages, content types and navigation before the website becomes a collection of disconnected sections.",
    items: [],
  },
  {
    icon: "bi-boxes",
    title: "Content model",
    description: "We identify reusable content types such as:",
    items: ["Services", "Locations", "People", "Resources", "News", "Industries", "Documents", "Events", "Case studies"],
  },
  {
    icon: "bi-layout-text-window",
    title: "CMS architecture",
    description: "The content management system should reflect how the organization publishes.",
    items: [],
  },
  {
    icon: "bi-palette",
    title: "Design system",
    description: "Reusable components, typography, spacing and interaction patterns help maintain brand consistency across a large site.",
    items: [],
  },
  {
    icon: "bi-cpu",
    title: "Technical architecture",
    description: "Frontend, CMS, APIs, hosting and integrations are selected according to scale, editing needs and operational requirements.",
    items: [],
  },
];

const governanceItems = [
  "Contributor roles",
  "Editor roles",
  "Publisher roles",
  "Approval workflows",
  "Preview",
  "Scheduled publishing",
  "Reusable content",
  "Locked brand components",
  "Localized content",
  "Audit history where supported",
];

const localizationItems = [
  "Language",
  "Terminology",
  "Services",
  "Regulatory information",
  "Contact details",
  "Campaigns",
  "URLs",
  "Local teams",
  "Media",
  "Calls to action",
];

const designSystemRisks = [
  "New spacing",
  "New button styles",
  "New layouts",
  "Inconsistent typography",
  "Duplicated components",
];

const capabilityCategories = [
  {
    title: "Corporate information",
    items: ["Company profile", "Leadership", "History", "Governance", "Certifications", "ESG / sustainability", "Investor content"],
  },
  {
    title: "Commercial content",
    items: ["Services", "Products", "Solutions", "Industries", "Case studies", "Locations"],
  },
  {
    title: "Recruitment",
    items: ["Careers", "Culture", "Job feeds", "Recruitment system integration"],
  },
  {
    title: "Resource centers",
    items: ["News", "Insights", "Reports", "Documents", "Media", "Events"],
  },
  {
    title: "Digital services",
    items: ["Customer login", "Partner resources", "Forms", "Product selectors", "Quotation journeys"],
  },
  {
    title: "Integrations",
    items: ["CRM", "ERP", "ATS / recruitment", "DAM", "Analytics", "Marketing platforms", "External APIs"],
  },
];

const integrationTargets = [
  "CRM",
  "ERP",
  "Recruitment systems",
  "Marketing automation",
  "Analytics",
  "Identity systems",
  "Document platforms",
  "Internal APIs",
];

const migrationAssets = [
  "Indexed URLs",
  "Search traffic",
  "Backlinks",
  "Content",
  "Documents",
  "Metadata",
  "Analytics",
  "Integrations",
];

const processSteps = [
  { title: "Discovery and stakeholder alignment", description: "Understand business units, audiences, governance, markets and technical constraints." },
  { title: "Content and platform audit", description: "Review existing content, analytics, CMS, integrations and technical issues where applicable." },
  { title: "Information architecture", description: "Define the content hierarchy, navigation and page relationships." },
  { title: "Content model and CMS design", description: "Determine reusable content types, roles, workflows and localization." },
  { title: "UX and design system", description: "Design key journeys and reusable components." },
  { title: "Development and integrations", description: "Implement the website, CMS and required system connections." },
  { title: "Migration and QA", description: "Move approved content, implement redirects, test functionality and review important URLs." },
  { title: "Launch and governance handover", description: "Deploy, monitor and give internal teams the process and permissions needed to operate the site." },
];

const qualityConsiderations = [
  "Responsive performance",
  "Asset optimization",
  "Semantic markup",
  "Keyboard interaction",
  "Focus states",
  "Forms",
  "Content readability",
  "Maintainable components",
  "Third-party script impact",
];

const faqs = [
  {
    id: "corp-vs-business",
    question: "What makes a corporate website different from a normal business website?",
    answer:
      "Corporate websites usually have more content, stakeholders, markets, governance requirements, integrations and long-term publishing needs. The underlying architecture and CMS therefore become more important.",
    open: true,
  },
  {
    id: "corp-multilingual",
    question: "Can you build multilingual corporate websites?",
    answer:
      "Yes. We can design content models, URL structures and workflows for multilingual websites. Translation itself can be supplied by the client, a translation partner or an agreed process.",
    open: false,
  },
  {
    id: "corp-teams",
    question: "Can different teams manage different sections?",
    answer: "Yes, where the selected CMS supports the required permissions and workflow. Roles should be designed around actual editorial responsibilities.",
    open: false,
  },
  {
    id: "corp-migrate",
    question: "Can you migrate an existing corporate website?",
    answer: "Yes. Migration can include content audit, URL mapping, redirects, metadata, documents, structured content and post-launch checks.",
    open: false,
  },
  {
    id: "corp-brands",
    question: "Can the website support several brands?",
    answer:
      "Yes. Depending on requirements, this may be handled through shared design-system foundations, separate themes, multi-site architecture or separate properties.",
    open: false,
  },
  {
    id: "corp-crm",
    question: "Can you integrate recruitment or CRM systems?",
    answer: "Yes, when suitable APIs, feeds or integration mechanisms are available.",
    open: false,
  },
  {
    id: "corp-agency",
    question: "Can Shivantra work with an existing design or brand agency?",
    answer: "Yes. We can handle development and technical implementation from an approved design system or collaborate with the client's design partner.",
    open: false,
  },
  {
    id: "corp-support",
    question: "Do you provide ongoing support?",
    answer: "Yes. Corporate sites often benefit from a defined maintenance and enhancement process after launch.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Headless CMS", href: "/services/cms-development/headless-cms" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "Website Accessibility", href: "/services/website-accessibility" },
  { label: "Website Performance", href: "/services/website-performance" },
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

function InfoCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="info-card">
        <span className="icon-badge">
          <i className={`bi ${icon}`} aria-hidden="true"></i>
        </span>
        <CardTitle className="fs-6 mb-2">{title}</CardTitle>
        <Description className="mb-0">{description}</Description>
      </div>
    </div>
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

function FoundationCard({ layer, delay }: { layer: (typeof foundationLayers)[number]; delay: string }) {
  return (
    <div className="foundation-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="foundation-card">
        <span className="icon-badge">
          <i className={`bi ${layer.icon}`} aria-hidden="true"></i>
        </span>
        <CardTitle className="fs-5 mb-2">{layer.title}</CardTitle>
        <Description className={layer.items.length ? "" : "mb-0"}>{layer.description}</Description>
        {layer.items.length > 0 && <ChecklistList items={layer.items} tight />}
      </div>
    </div>
  );
}

// True per-item masonry (à la Pinterest) needs measured render heights,
// which a static server-rendered page doesn't have. Estimating each
// card's height from its actual content (description length + list
// items) and greedily placing each card into whichever column is
// currently shortest gets the same result deterministically at build
// time, with no client-side layout pass.
function estimateCardHeight(layer: (typeof foundationLayers)[number]) {
  const base = 190;
  const descriptionLines = Math.ceil(layer.description.length / 42);
  return base + descriptionLines * 26 + layer.items.length * 34;
}

function distributeIntoColumns<T>(items: T[], getHeight: (item: T) => number, columnCount: number) {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights = Array<number>(columnCount).fill(0);
  for (const item of items) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(item);
    heights[shortest] += getHeight(item);
  }
  return columns;
}

const foundationColumns = distributeIntoColumns(foundationLayers, estimateCardHeight, 2);

export default function CorporateWebsiteDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap corporate-website-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Corporate Website Development
                  </Tag>
                  <PageTitle>Corporate Websites Built for Scale, Structure and Change</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    As organizations grow, their websites usually become more complex too. More
                    services. More locations. More teams. More content. More stakeholders. More
                    systems. Shivantra designs and develops corporate websites with the structure,
                    content model and technical foundation needed to keep that complexity
                    manageable.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=corporate-website-development`} className="btn-primary">
                      Discuss Your Corporate Website
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-diagram-3"
                    caption="Corporate website architecture supporting business units, locations, languages and content"
                    cues={["Business Units", "Locations", "Languages", "Resources", "Careers", "News", "Integrations"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="system">
            <Container>
              <SectionHeader tag="A corporate website is a system, not just a collection of pages" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A corporate site may be used by customers, prospects, partners, employees,
                  candidates, investors, media and suppliers. Each group may need different
                  information.
                </Description>
              </SectionHeader>
              <Description aos="fade-up" delay={150}>
                At the same time, internal teams may need different levels of control over what
                gets created, reviewed and published. If the website is designed one page at a
                time, complexity accumulates quickly.
              </Description>
              <Description aos="fade-up" delay={200} className="fw-semibold mb-2">
                That is why we start with the system underneath the pages:
              </Description>
              <ChecklistList items={systemPillars} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={250}>
                This creates a website that can continue growing without becoming harder to
                manage with every new section.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="complexity">
            <Container>
              <SectionHeader tag="What corporate websites need to handle" title="Designed for organizational complexity" />
              <div className="row g-4">
                {complexityAreas.map((area, index) => (
                  <InfoCard key={area.title} {...area} delay={String((index % 3) * 100)} />
                ))}
              </div>
            </Container>
          </Section>

          <Section id="foundation">
            <Container>
              <SectionHeader tag="Foundation" title="The foundation matters more as the website grows" />
              <div className="foundation-grid d-none d-md-flex">
                {foundationColumns.map((column, columnIndex) => (
                  <div className="foundation-col" key={columnIndex}>
                    {column.map((layer) => (
                      <FoundationCard key={layer.title} layer={layer} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="foundation-grid d-flex d-md-none">
                <div className="foundation-col">
                  {foundationLayers.map((layer, index) => (
                    <FoundationCard key={layer.title} layer={layer} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="governance">
            <Container>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <SectionHeader tag="Governance" title="Give teams the right amount of control" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      The challenge is not simply making content editable. It is making the right
                      content editable by the right people in the right way. A corporate CMS may
                      need:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={governanceItems} />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    The exact model depends on the platform and organization.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The goal is to support content teams without allowing the website to lose
                    consistency over time.
                  </Description>
                </div>
                <div className="col-lg-5 mt-5 mt-lg-0">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-person-workspace" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Author</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Reviewer</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Publisher</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Website</span>
                    <div className="flow-branch">with locale review where required</div>
                    <Description className="mb-0 mt-3">
                      Content moves through defined roles before it reaches the live website
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="localization">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader
                    tag="Multilingual and multi-market websites"
                    title="Localization is more than translating page text"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      International websites may require differences in:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={localizationItems} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    A scalable setup should allow common content to remain consistent while
                    giving local teams enough flexibility for genuine market differences.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    We plan localization requirements alongside the content model, CMS and URL
                    strategy rather than treating translation as a final production task.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="design-system">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader
                    tag="Consistent design at scale"
                    title="A design system helps the website grow without becoming inconsistent"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Corporate websites often involve many page authors over several years.
                      Without reusable patterns, each new page can slowly introduce:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={designSystemRisks} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    We develop reusable page sections and visual rules so new content can be
                    created within a controlled system.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The aim is not to make every page look identical. It is to make the
                    experience feel like one organization.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="capabilities">
            <Container>
              <SectionHeader tag="Capabilities" title="A corporate website can bring many functions together" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Depending on scope, the website can include:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {capabilityCategories.map((category, index) => (
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

          <Section className="section-muted" id="integrations">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader
                    tag="Integrations"
                    title="Keep the corporate website connected to the organization behind it"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      The website does not need to duplicate data already managed in another
                      system. Where appropriate, integrations can allow the site to receive or
                      send data to:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationTargets} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    This reduces manual duplication and helps the website become part of the
                    wider digital environment.
                  </Description>
                  <Button href="/services/website-integrations" className="btn-white-outline mt-2">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="migration">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader
                    tag="Migration"
                    title="Replacing an existing corporate website requires a migration plan"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A redesign or replatform should account for what the current website has
                      already accumulated:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={migrationAssets} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Where URLs change, the project should include a clear mapping between old
                    and new locations and appropriate redirects.
                  </Description>
                  <Description aos="fade-up" delay={200}>
                    Content should be reviewed before migration rather than copied blindly.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={250}>
                    The objective is to improve the website without discarding useful information
                    or creating unnecessary disruption.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Process" title="Our approach to corporate website development" />
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

          <Section id="quality">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Quality requirements" title="Performance and accessibility are part of the foundation" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Large sites can accumulate heavy scripts, media and third-party tools over
                      time. We consider:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={qualityConsiderations} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Accessibility requirements should be defined explicitly for organizations
                    that need a particular conformance level.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    We do not make untested compliance claims.
                  </Description>
                </div>
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
                  <div className="accordion custom-accordion" id="corporate-website-faq-accordion">
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
                  <SectionTitle>Planning a corporate website that needs to work across teams, content and systems?</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Start by mapping the complexity before choosing the platform. We can help
                    define the architecture, CMS, migration and development approach around the
                    organization you actually need to support.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=corporate-website-development`} className="btn-primary">
                      Discuss Your Corporate Website
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
