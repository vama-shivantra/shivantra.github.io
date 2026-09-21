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

const pageUrl = `${siteUrl}/services/website-integrations`;

export const metadata: Metadata = {
  title: "Website Integration Services | Shivantra",
  description:
    "Website integration services for CRM, APIs, analytics, marketing platforms, forms and business workflows. Connect your website with the systems your team already uses.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Integration Services | Shivantra",
    description: "Connect your website with CRM, APIs, analytics, marketing platforms and business workflows.",
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
  { label: "Website Integrations", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Integrations",
      serviceType: "Website Integrations",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website integration services for CRM, APIs, analytics, marketing platforms, forms and business workflows. Connect your website with the systems your team already uses.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-integrations"}`,
      })),
    },
  ],
};

const brokenFlowSteps = [
  "Customer submits a form.",
  "Someone receives an email.",
  "Information is copied into a CRM.",
  "Campaign source is lost.",
  "Sales manually assigns the lead.",
  "Another person sends a confirmation.",
  "Reporting happens in a separate spreadsheet.",
];

const integrationServices = [
  {
    icon: "bi-diagram-3",
    title: "CRM Integration",
    description: "Send website leads and customer data directly into the CRM with useful context such as service, campaign, location or source.",
    cta: "Explore CRM Integration",
    href: "/services/website-integrations/crm",
  },
  {
    icon: "bi-code-slash",
    title: "API Integration",
    description: "Connect your website directly with third-party platforms, internal services or custom applications through APIs.",
    cta: "Explore API Integration",
    href: "/services/website-integrations/api",
  },
  {
    icon: "bi-graph-up",
    title: "Marketing & Analytics Integration",
    description: "Connect measurement, advertising and marketing tools so important website actions can be tracked consistently.",
    cta: "Explore Marketing & Analytics Integration",
    href: "/services/website-integrations/marketing-analytics",
  },
  {
    icon: "bi-ui-checks",
    title: "Forms & Lead Automation",
    description: "Turn form submissions into structured lead workflows rather than isolated emails.",
    cta: "Explore Forms & Lead Automation",
    href: "/services/website-integrations/lead-automation",
  },
];

const dataFlowQuestions = [
  { icon: "bi-box-arrow-in-right", title: "Source", description: "Where does the information originate?", items: ["Website form", "CRM", "ERP", "Payment provider", "CMS"] },
  { icon: "bi-box-arrow-right", title: "Destination", description: "Where should it go?", items: [] as string[] },
  { icon: "bi-bookmark-check", title: "Ownership", description: "Which system is the source of truth?", items: [] },
  { icon: "bi-arrow-left-right", title: "Mapping", description: "How does one system's field correspond to another?", items: [] },
  { icon: "bi-shield-check", title: "Validation", description: "What should happen if required data is missing or invalid?", items: [] },
  { icon: "bi-lightning", title: "Trigger", description: "Should the data move:", items: ["Immediately", "On a webhook", "On a scheduled sync", "After approval"] },
  { icon: "bi-exclamation-triangle", title: "Failure handling", description: "What happens if the destination system is unavailable?", items: [] },
];

const integrationPatterns = [
  { label: "Direct API", title: "Direct API integration", description: "The website communicates directly with another service. Useful when:", items: ["The API is stable", "The workflow is important", "Custom logic is required"] },
  { label: "Webhook", title: "Webhooks", description: "A system notifies another system when an event occurs. Useful for:", items: ["Form submissions", "Payment events", "Content changes", "Status updates"] },
  { label: "Middleware", title: "Middleware", description: "A dedicated backend or integration layer sits between systems. Useful when:", items: ["Transformation is complex", "Several systems are involved", "Credentials should remain server-side"] },
  { label: "Automation", title: "Automation platforms", description: "Tools such as workflow automation platforms can be appropriate for straightforward integrations and low-code operational workflows. They are useful when the business wants more control over simple changes without redeploying application code.", items: [] as string[] },
  { label: "Scheduled sync", title: "Scheduled synchronization", description: "Useful when real-time updates are unnecessary and data can be reconciled periodically.", items: [] },
];

const useCases = [
  { title: "CRM", description: "Create and update:", items: ["Contacts", "Leads", "Deals", "Activities", "Campaign information"] },
  { title: "ERP", description: "Send or receive:", items: ["Products", "Inventory", "Customer information", "Orders", "Business records"] },
  { title: "Email and marketing", description: "Trigger:", items: ["Confirmations", "Nurture flows", "Lists", "Campaign automation"] },
  { title: "Booking systems", description: "Create appointments or route users into scheduling flows.", items: [] as string[] },
  { title: "Payment providers", description: "Connect payment events with orders, registrations or internal workflows.", items: [] },
  { title: "Analytics and advertising", description: "Track meaningful actions and preserve campaign information.", items: [] },
  { title: "CMS", description: "Exchange structured content through APIs.", items: [] },
  { title: "Portals and custom applications", description: "Allow the public website to feed a customer, partner or internal system.", items: [] },
];

const securityConsiderations = [
  { icon: "bi-key", title: "Authentication", description: "Use the authentication method required by the target platform." },
  { icon: "bi-shield-lock", title: "Secret management", description: "API keys and credentials should remain in secure server-side configuration." },
  { icon: "bi-check2-square", title: "Validation", description: "Do not pass untrusted website input directly into downstream systems without validation." },
  { icon: "bi-arrow-repeat", title: "Retries", description: "Temporary failures may need a controlled retry strategy." },
  { icon: "bi-fingerprint", title: "Idempotency", description: "Repeated requests should not create duplicate records where that would be harmful." },
  { icon: "bi-journal-text", title: "Logging", description: "Important workflows should provide enough information to diagnose failures." },
  { icon: "bi-speedometer2", title: "Rate limits", description: "External APIs often limit request volume." },
  { icon: "bi-exclamation-triangle", title: "Error handling", description: "The user experience should not expose internal technical details when another system fails." },
];

const processSteps = [
  { title: "Understand the workflow", description: "Map what happens today and what should happen after integration." },
  { title: "Review the systems", description: "Check APIs, webhooks, credentials, limits and available integration methods." },
  { title: "Map the data", description: "Define source fields, destination fields and transformation rules." },
  { title: "Choose the architecture", description: "Decide whether the best approach is direct API, webhook, middleware, automation platform or scheduled sync." },
  { title: "Implement", description: "Build the integration and keep sensitive credentials server-side." },
  { title: "Test real scenarios", description: "Test valid data, invalid data, duplicates, unavailable APIs, retry behavior and confirmation flow." },
  { title: "Monitor", description: "For important workflows, add logging or alerting so failures do not remain invisible." },
];

const engagementScope = [
  "workflow discovery",
  "API review",
  "webhook setup",
  "data mapping",
  "backend integration",
  "CRM connection",
  "ERP connection",
  "analytics/tracking integration",
  "form automation",
  "email/notification integration",
  "authentication",
  "error handling",
  "logging",
  "testing",
  "documentation",
  "post-launch support",
];

const faqs = [
  {
    id: "int-any-platform",
    question: "Can you integrate our website with any platform?",
    answer: "If the platform provides a suitable API, webhook or other supported integration method, integration is usually possible. Feasibility depends on access, documentation and platform limitations.",
    open: true,
  },
  {
    id: "int-automation-or-code",
    question: "Do you use automation tools or custom code?",
    answer: "Both. Simple workflows may be better suited to an automation platform. More complex or business-critical workflows may justify custom integration code.",
    open: false,
  },
  {
    id: "int-erp",
    question: "Can you connect our website with our ERP?",
    answer: "Yes, subject to the ERP's integration capabilities and the data/workflow requirements.",
    open: false,
  },
  {
    id: "int-bidirectional",
    question: "Can data move in both directions?",
    answer: "Yes, where appropriate. Bidirectional synchronization requires clear ownership rules to avoid conflicts or loops.",
    open: false,
  },
  {
    id: "int-api-failure",
    question: "What happens when an external API fails?",
    answer: "Important integrations should include controlled error handling, logging and, where suitable, retry logic.",
    open: false,
  },
  {
    id: "int-existing-website",
    question: "Can you integrate an existing website?",
    answer: "Yes. The website does not need to have been built by Shivantra, provided the existing system allows the required changes.",
    open: false,
  },
  {
    id: "int-slow-down",
    question: "Will integrations slow down the website?",
    answer: "They can if implemented poorly. Where possible, non-critical integrations should avoid blocking the user interface and should use appropriate server-side or asynchronous patterns.",
    open: false,
  },
  {
    id: "int-support",
    question: "Do you provide support after launch?",
    answer: "Yes. Ongoing integration monitoring and maintenance can be included depending on the project.",
    open: false,
  },
];

const relatedServices = [
  { label: "CRM Integration", href: "/services/website-integrations/crm" },
  { label: "API Integration", href: "/services/website-integrations/api" },
  { label: "Marketing & Analytics", href: "/services/website-integrations/marketing-analytics" },
  { label: "Forms & Lead Automation", href: "/services/website-integrations/lead-automation" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Custom Website Development", href: "/services/website-development/custom-websites" },
  { label: "CMS Development", href: "/services/cms-development" },
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

function ChecklistList({ items, tight, columns }: { items: string[]; tight?: boolean; columns?: boolean }) {
  return (
    <ul className={`checklist${tight ? " checklist--tight" : ""}${columns ? " checklist--columns" : ""}`}>
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

function MasonryCard({
  title,
  description,
  items,
  icon,
  delay,
}: {
  title: string;
  description: string;
  items: string[];
  icon?: string;
  delay: string;
}) {
  return (
    <div className="masonry-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="masonry-card">
        {icon && (
          <span className="icon-badge">
            <i className={`bi ${icon}`} aria-hidden="true"></i>
          </span>
        )}
        <CardTitle className="fs-6 mb-2">{title}</CardTitle>
        <Description className={items.length ? "" : "mb-0"}>{description}</Description>
        {items.length > 0 && <ChecklistList items={items} tight />}
      </div>
    </div>
  );
}

// True per-item masonry (à la Pinterest) needs measured render heights,
// which a static server-rendered page doesn't have. Estimating each
// card's height from its content (description length + list items)
// and greedily placing each card into whichever column is currently
// shortest gets the same result deterministically at build time, with
// no client-side layout pass.
function estimateCardHeight(item: { description: string; items: string[] }) {
  const base = 170;
  const descriptionLines = Math.ceil(item.description.length / 42);
  return base + descriptionLines * 26 + item.items.length * 34;
}

function distributeIntoColumns<T extends { description: string; items: string[] }>(items: T[], columnCount: number) {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights = Array<number>(columnCount).fill(0);
  for (const item of items) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(item);
    heights[shortest] += estimateCardHeight(item);
  }
  return columns;
}

const dataFlowColumns = distributeIntoColumns(dataFlowQuestions, 2);
const useCaseColumns = distributeIntoColumns(useCases, 2);

export default function WebsiteIntegrations() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap integrations-pillar-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Website Integrations
                  </Tag>
                  <PageTitle>Connect Your Website With the Systems Behind Your Business</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A website often captures information that your team needs somewhere else. An
                    enquiry belongs in the CRM. A booking needs to reach a calendar. A payment may
                    need to create an order. Campaign data should follow the lead into the sales
                    process. Shivantra connects websites with business systems, APIs and workflows
                    so information can move where it is needed without relying on manual copying.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=website-integrations`} className="btn-primary">
                      Discuss Your Integration
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Website</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">CRM</span>
                      <span className="flow-step">ERP</span>
                      <span className="flow-step">Analytics</span>
                      <span className="flow-step">Marketing</span>
                      <span className="flow-step">API</span>
                      <span className="flow-step">Booking / Payments</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Website connected with CRM, ERP, analytics, marketing and APIs
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="first-step">
            <Container>
              <SectionHeader tag="The website is often only the first step" title="What happens after someone clicks Submit?" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A website can collect information successfully and still create operational
                  work. A common process looks like this:
                </Description>
              </SectionHeader>
              <ol className="numbered-list">
                {brokenFlowSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <Description className="mt-4" aos="fade-up" delay={150}>
                Integration turns those handoffs into a connected flow.
              </Description>
              <Description aos="fade-up" delay={200}>
                The objective is not automation for its own sake.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={250}>
                It is to remove repeated work, reduce missed information and make ownership
                clearer.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="integration-services">
            <Container>
              <SectionHeader tag="Integration Services" title="Website Integration Services" colClass="col-lg-9" />
              <div className="row g-4">
                {integrationServices.map((service, index) => (
                  <div className="col-md-6" key={service.title} data-aos="fade-up" data-aos-delay={String((index % 2) * 100)}>
                    <div className="service-card">
                      <span className="icon-badge">
                        <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                      </span>
                      <CardTitle className="fs-5 mb-2">{service.title}</CardTitle>
                      <Description>{service.description}</Description>
                      <Link href={service.href} className="fw-semibold text-decoration-none">
                        {service.cta}
                        <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="data-flow">
            <Container>
              <SectionHeader tag="A good integration starts with the data flow" title="Decide what information moves, where it belongs and who owns it" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Before connecting systems, we define:
                </Description>
              </SectionHeader>
              <div className="masonry-grid d-none d-md-flex">
                {dataFlowColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((item) => (
                      <MasonryCard key={item.title} {...item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {dataFlowQuestions.map((item, index) => (
                    <MasonryCard key={item.title} {...item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                These decisions make integrations easier to maintain than simply connecting two
                endpoints and hoping they continue working.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="patterns">
            <Container>
              <SectionHeader tag="Integration patterns" title="Different requirements need different integration patterns" colClass="col-lg-9" />
              <div className="row g-4">
                {integrationPatterns.map((pattern, index) => (
                  <div className="col-md-6 col-lg-4" key={pattern.label} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="decision-card h-100">
                      <span className="decision-label">{pattern.label}</span>
                      <CardTitle className="fs-6 mb-2">{pattern.title}</CardTitle>
                      <Description className={pattern.items.length ? "" : "mb-0"}>{pattern.description}</Description>
                      {pattern.items.length > 0 && <ChecklistList items={pattern.items} tight />}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="use-cases">
            <Container>
              <SectionHeader tag="Common integration use cases" title="What websites commonly connect to" colClass="col-lg-9" />
              <div className="masonry-grid d-none d-md-flex">
                {useCaseColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((item) => (
                      <MasonryCard key={item.title} {...item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {useCases.map((item, index) => (
                    <MasonryCard key={item.title} {...item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="security">
            <Container>
              <SectionHeader tag="Security and reliability" title="An integration should still work when something goes wrong" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Integrations need more than a successful test request. Depending on the
                  workflow, implementation should consider:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {securityConsiderations.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="architecture">
            <Container>
              <SectionHeader tag="Integration architecture" colClass="col-lg-9" />
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="100">
                    <span className="flow-step">Website</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Integration Layer</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">CRM</span>
                      <span className="flow-step">ERP</span>
                      <span className="flow-step">Analytics</span>
                      <span className="flow-step">API</span>
                    </div>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Automation</span>
                    <div className="flow-branch">Validation · Mapping · Logging</div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Our process" title="How we approach website integrations" />
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

          <Section id="scope-list">
            <Container>
              <SectionHeader tag="What an engagement can include" title="Website integration scope" tight colClass="col-lg-9" />
              <ChecklistList items={engagementScope} columns />
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
                  <div className="accordion custom-accordion" id="website-integrations-faq-accordion">
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
                  <SectionTitle>Stop making your team move data between systems manually</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Show us what happens after someone uses your website.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={150}>
                    We can help identify where integration can remove friction and connect the
                    website with the systems behind the process.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=website-integrations`} className="btn-primary">
                      Discuss Your Integration
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
