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

const pageUrl = `${siteUrl}/services/website-development/custom-websites`;

export const metadata: Metadata = {
  title: "Custom Website Development Services | Shivantra",
  description:
    "Custom website development for businesses that need workflows, integrations, portals, calculators, dynamic content or functionality beyond a standard website.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Custom Website Development | Shivantra",
    description:
      "Custom website functionality, integrations and digital experiences designed around real business requirements.",
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
  { label: "Custom Website Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Custom Website Development",
      serviceType: "Custom Website Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Custom website development for businesses that need workflows, integrations, portals, calculators, dynamic content or functionality beyond a standard website.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-development/custom-websites"}`,
      })),
    },
  ],
};

const triggers = [
  "configure a product",
  "calculate an estimate",
  "search a directory",
  "check eligibility",
  "submit structured data",
  "access account-specific information",
  "upload documents",
  "follow a multi-step process",
  "retrieve live data",
  "interact with another system",
];

const capabilities = [
  {
    icon: "bi-calculator",
    title: "Calculators and estimators",
    description: "Turn business rules into a guided online experience.",
    items: ["Quotation estimators", "Loan or finance calculations", "Savings estimates", "Capacity or sizing tools", "Service-cost calculations"],
  },
  {
    icon: "bi-sliders",
    title: "Product selectors and configurators",
    description: "Help visitors narrow complex options based on their requirements. Useful for manufacturing, equipment, technical products and configurable services.",
    items: [],
  },
  {
    icon: "bi-search",
    title: "Searchable directories",
    description: "Create structured listings with search, filters and categories.",
    items: ["Professionals", "Branches", "Partners", "Products", "Resources", "Properties", "Members"],
  },
  {
    icon: "bi-shield-lock",
    title: "Portals and secure areas",
    description: "Give selected users access to information or actions that should not be public.",
    items: ["Customer resources", "Dealer information", "Document access", "Order/status information", "Partner updates"],
  },
  {
    icon: "bi-list-check",
    title: "Multi-step forms and workflows",
    description: "Replace long generic forms with structured journeys. A workflow can:",
    items: ["Ask relevant questions", "Validate inputs", "Branch based on answers", "Upload files", "Save information", "Route submissions", "Trigger follow-up actions"],
  },
  {
    icon: "bi-magic",
    title: "Dynamic and personalized content",
    description: "Display information based on:",
    items: ["Location", "Selections", "Account", "Data source", "URL parameters", "Campaign", "Product attributes"],
  },
  {
    icon: "bi-speedometer2",
    title: "Dashboards and data views",
    description: "Present selected operational or customer information directly within the website experience.",
    items: [],
  },
  {
    icon: "bi-cloud-arrow-down",
    title: "API-driven experiences",
    description: "Use data from external services or your own systems instead of maintaining duplicate information manually.",
    items: [],
  },
];

const alternativesToCustom = [
  "Configuring an existing CMS",
  "Integrating a third-party service",
  "Embedding a specialist platform",
  "Connecting an API",
  "Extending an existing system",
];

const integrationSystems = [
  "CRM",
  "ERP",
  "Payment providers",
  "Identity providers",
  "Email services",
  "Storage",
  "Analytics",
  "Maps",
  "Custom databases",
  "External APIs",
  "Internal applications",
];

const cmsContentTypes = ["Services", "Resources", "Articles", "FAQs", "Landing pages", "Team information", "Product content"];

const architectureLayers = [
  { icon: "bi-window", title: "Frontend", description: "The interface visitors use." },
  { icon: "bi-layout-text-window", title: "CMS", description: "For structured editorial content where business users need control." },
  { icon: "bi-hdd-stack", title: "Backend", description: "For business rules, secure processing, integrations or custom logic." },
  { icon: "bi-database", title: "Database", description: "For application data that should not live inside page content." },
  { icon: "bi-key", title: "Authentication", description: "For account areas, portals or protected experiences." },
  { icon: "bi-plug", title: "APIs", description: "For communication between the website and other services." },
  { icon: "bi-server", title: "Infrastructure", description: "Hosting, storage, delivery, monitoring and deployment." },
];

const processSteps = [
  { title: "Understand the requirement", description: "We identify the business problem, users, desired outcome and existing systems." },
  { title: "Model the workflow", description: "We document what should happen from the user's first action through the underlying business process." },
  { title: "Define the architecture", description: "We decide what belongs in the CMS, frontend, backend, database or external systems." },
  { title: "Design the experience", description: "We make complex functionality understandable to the person using it." },
  { title: "Develop in reusable components", description: "We build the required functionality with maintainability in mind." },
  { title: "Integrate systems", description: "APIs, CRM, ERP, authentication, email, payments or other services are connected where required." },
  { title: "Test real scenarios", description: "We test successful paths, validation errors, edge cases, permissions and integration failures relevant to the scope." },
  { title: "Launch and support", description: "We deploy the solution and provide agreed documentation, monitoring and ongoing support." },
];

const useCases = [
  { icon: "bi-calculator", title: "B2B quotation workflow", description: "A visitor answers a series of questions, receives an indicative result and sends structured information directly to sales." },
  { icon: "bi-people", title: "Dealer or partner portal", description: "Approved users access documents, updates, product information or account-specific resources." },
  { icon: "bi-funnel", title: "Product finder", description: "Customers filter technical products by attributes instead of navigating dozens of categories manually." },
  { icon: "bi-clipboard-check", title: "Service eligibility checker", description: "A visitor enters information and the website determines which service or next step is relevant." },
  { icon: "bi-file-earmark-arrow-up", title: "Customer document workflow", description: "Customers securely submit information and files into a defined internal process." },
  { icon: "bi-geo-alt", title: "Location or provider directory", description: "Visitors search structured records by category, geography or attributes." },
];

const maintainabilityItems = [
  "Documented environment configuration",
  "Reusable components",
  "Separation of content and logic",
  "Version control",
  "Testing",
  "Deployment workflow",
  "Logging and monitoring",
  "Controlled access",
  "Dependency management",
];

const faqs = [
  {
    id: "custom-vs-webapp",
    question: "What is the difference between a custom website and a web application?",
    answer:
      "The boundary can overlap. A custom website usually combines public or marketing content with specific interactive functionality. A web application is often primarily an authenticated or task-oriented software product. We define the architecture based on what users need to do rather than the label.",
    open: true,
  },
  {
    id: "custom-every-feature",
    question: "Do we need custom development for every unique feature?",
    answer:
      "No. We first check whether the requirement can be met reliably through configuration, an existing service or an integration. Custom development is used where it provides a clear advantage.",
    open: false,
  },
  {
    id: "custom-cms",
    question: "Can a custom website still use a CMS?",
    answer: "Yes. Editorial content can be managed through a CMS while application logic remains in the frontend or backend.",
    open: false,
  },
  {
    id: "custom-erp-crm",
    question: "Can you integrate our existing ERP or CRM?",
    answer: "Yes, where the system provides a suitable API or integration method. We assess the data and workflow requirements before estimating the work.",
    open: false,
  },
  {
    id: "custom-login",
    question: "Can users log in?",
    answer: "Yes. Authentication and role-based access can be included where required.",
    open: false,
  },
  {
    id: "custom-portal",
    question: "Can you build a customer or dealer portal?",
    answer: "Yes. Portal scope can include login, documents, structured content, forms, account data and system integrations depending on requirements.",
    open: false,
  },
  {
    id: "custom-pricing",
    question: "How is a custom website priced?",
    answer: "Pricing depends more on workflows, integrations, data and functionality than page count. We scope the business rules and technical requirements before preparing an estimate.",
    open: false,
  },
  {
    id: "custom-support",
    question: "Do you support the website after launch?",
    answer: "Yes. Ongoing support can include monitoring, fixes, enhancements, dependency updates and new functionality depending on the agreement.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Business Website Development", href: "/services/website-development/business-websites" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "API Integration", href: "/services/website-integrations/api" },
  { label: "CRM Integration", href: "/services/website-integrations/crm" },
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

function CapabilityCard({ capability, delay }: { capability: (typeof capabilities)[number]; delay: string }) {
  return (
    <div className="capability-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="capability-card">
        <span className="icon-badge">
          <i className={`bi ${capability.icon}`} aria-hidden="true"></i>
        </span>
        <CardTitle className="fs-5 mb-2">{capability.title}</CardTitle>
        <Description className={capability.items.length ? "" : "mb-0"}>{capability.description}</Description>
        {capability.items.length > 0 && <ChecklistList items={capability.items} tight />}
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
function estimateCardHeight(capability: (typeof capabilities)[number]) {
  const base = 190;
  const descriptionLines = Math.ceil(capability.description.length / 42);
  return base + descriptionLines * 26 + capability.items.length * 34;
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

const capabilityColumns = distributeIntoColumns(capabilities, estimateCardHeight, 2);

export default function CustomWebsiteDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap custom-website-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Custom Website Development
                  </Tag>
                  <PageTitle>Custom Websites Built Around How Your Business Needs to Work</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Some website requirements cannot be solved well with a template, page builder
                    or standard contact form. Shivantra develops custom websites that combine
                    content with the functionality your business actually needs, from calculators
                    and directories to portals, workflows, integrations and data-driven
                    experiences.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=custom-website-development`} className="btn-primary">
                      Discuss Your Requirement
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-diagram-3"
                    caption="Custom website connected to workflow, API, database and business systems"
                    cues={["Calculator", "Portal", "Workflow", "API", "Database", "CRM"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="when-not-enough">
            <Container>
              <SectionHeader tag="When standard features are not enough" title="A website can be part content, part business tool" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A standard website is often the right answer when the goal is to publish
                  information and generate enquiries. But sometimes the website also needs to
                  perform a job. A visitor may need to:
                </Description>
              </SectionHeader>
              <ChecklistList items={triggers} />
              <Description className="mt-4" aos="fade-up" delay={100}>
                Those requirements change the project. The work is no longer only about designing
                pages. It involves user flows, business rules, data, integrations, validation,
                security and maintainability.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={150}>
                That is where custom website development becomes useful.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="capabilities">
            <Container>
              <SectionHeader tag="What we can build" title="Custom functionality shaped around the requirement" />
              <div className="capability-grid d-none d-md-flex">
                {capabilityColumns.map((column, columnIndex) => (
                  <div className="capability-col" key={columnIndex}>
                    {column.map((capability) => (
                      <CapabilityCard key={capability.title} capability={capability} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="capability-grid d-flex d-md-none">
                <div className="capability-col">
                  {capabilities.map((capability, index) => (
                    <CapabilityCard key={capability.title} capability={capability} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section id="build-vs-integrate">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader
                    tag="We do not recommend custom development simply because we can"
                    title="Start with the requirement, then choose the simplest sound solution"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Custom code creates flexibility, but it also creates something that needs to
                      be maintained. So the first question should not be:
                    </Description>
                  </SectionHeader>
                  <div className="quote-block" data-aos="fade-up" data-aos-delay="150">
                    <p className="mb-0">&ldquo;Can we build this ourselves?&rdquo;</p>
                  </div>
                  <Description aos="fade-up" delay={150}>
                    It should be:
                  </Description>
                  <div className="quote-block" data-aos="fade-up" data-aos-delay="200">
                    <p className="mb-0">&ldquo;What is the most appropriate way to meet the requirement?&rdquo;</p>
                  </div>
                  <Description aos="fade-up" delay={200} className="fw-semibold mb-2">
                    Sometimes that is:
                  </Description>
                  <ChecklistList items={alternativesToCustom} />
                  <Description className="mt-4" aos="fade-up" delay={250}>
                    Other times, custom development is the cleanest option. We evaluate the
                    trade-offs before deciding.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={300}>
                    That approach keeps the project focused on the business problem instead of
                    turning custom engineering into the goal.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="integration-architecture">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                  <SectionHeader
                    tag="Integration architecture"
                    title="Your custom website can work with the systems behind your business"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Custom website functionality often depends on data that already exists
                      elsewhere. Shivantra can connect the website with systems such as:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationSystems} tight />
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="flow-card w-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-2" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Frontend</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">API / Backend</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Database</span>
                    <div className="flow-branches">
                      <span className="flow-step">CRM</span>
                      <span className="flow-step">ERP</span>
                      <span className="flow-step">External APIs</span>
                      <span className="flow-step">Internal Apps</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Custom website architecture connecting frontend, backend, database, CRM,
                      ERP and external APIs
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="cms-coexist">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader
                    tag="CMS and custom functionality can coexist"
                    title="Your content team should not need to edit application logic"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A custom website does not mean everything needs to be hard-coded. Public
                      content such as:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={cmsContentTypes} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    can still be managed through a CMS. Custom functionality can then operate
                    alongside that editorial content.
                  </Description>
                  <Description aos="fade-up" delay={200}>
                    This separation allows business teams to manage routine content while keeping
                    application logic controlled and testable.
                  </Description>
                  <Button href="/services/cms-development" className="btn-white-outline mt-2">
                    Explore CMS Development
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="architecture">
            <Container>
              <SectionHeader tag="Architecture" title="Technology decisions follow the requirement" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A custom website may involve several technical layers.
                </Description>
              </SectionHeader>
              <div className="row g-4 mb-4">
                {architectureLayers.map((layer, index) => (
                  <div className="col-md-6 col-lg-4" key={layer.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="info-card">
                      <span className="icon-badge">
                        <i className={`bi ${layer.icon}`} aria-hidden="true"></i>
                      </span>
                      <CardTitle className="fs-6 mb-2">{layer.title}</CardTitle>
                      <Description className="mb-0">{layer.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mb-0" aos="fade-up" delay={100}>
                We choose these pieces according to the project&apos;s actual needs rather than
                applying the same architecture to every website.
              </Description>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we approach custom website development" />
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

          <Section className="section-muted" id="use-cases">
            <Container>
              <SectionHeader tag="Practical use cases" title="Where custom website development can make sense" />
              <div className="row g-4 mb-4">
                {useCases.map((useCase, index) => (
                  <div className="col-md-6 col-lg-4" key={useCase.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="usecase-card">
                      <span className="icon-badge">
                        <i className={`bi ${useCase.icon}`} aria-hidden="true"></i>
                      </span>
                      <CardTitle className="fs-6 mb-2">{useCase.title}</CardTitle>
                      <Description className="mb-0">{useCase.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mb-0" aos="fade-up" delay={100}>
                These are examples, not fixed packages. The actual solution should follow the
                business requirement.
              </Description>
            </Container>
          </Section>

          <Section id="maintainability">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Maintainability" title="Custom should not mean fragile" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Custom functionality should remain understandable after launch. Depending on
                      scope, maintainability can include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={maintainabilityItems} />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    The objective is not to engineer unnecessary complexity.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    It is to make the parts that are genuinely custom easier to operate and
                    evolve.
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
                  <div className="accordion custom-accordion" id="custom-website-faq-accordion">
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
                  <SectionTitle>If your website needs to do something specific, start with the workflow</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Tell us what the user needs to do, what should happen behind the scenes and
                    which systems are involved. We will help you determine whether the right
                    solution is configuration, integration or custom development.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=custom-website-development`} className="btn-primary">
                      Discuss Your Custom Website
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
