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

const pageUrl = `${siteUrl}/services/website-integrations/api`;

export const metadata: Metadata = {
  title: "Website API Integration Services | Shivantra",
  description:
    "API integration services for websites and web applications, including REST APIs, webhooks, authentication, data mapping, error handling and third-party systems.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "API Integration Services | Shivantra",
    description: "Secure website API integrations across third-party services, internal systems, webhooks and custom backend workflows.",
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
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "API Integration", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "API Integration",
      serviceType: "API Integration",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "API integration services for websites and web applications, including REST APIs, webhooks, authentication, data mapping, error handling and third-party systems.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-integrations/api"}`,
      })),
    },
  ],
};

const apiCapabilities = [
  { title: "Read data", description: "Examples:", items: ["Products", "Availability", "Pricing", "Locations", "Account information", "Shipment status"] },
  { title: "Send data", description: "Examples:", items: ["Leads", "Registrations", "Orders", "Payments", "Documents"] },
  { title: "Trigger actions", description: "Examples:", items: ["Create booking", "Send message", "Create CRM record", "Generate document", "Start workflow"] },
  { title: "Receive events", description: "Webhooks can notify the website or backend when something changes elsewhere.", items: [] as string[] },
];

const useCases = [
  { icon: "bi-diagram-3", title: "CRM and ERP", description: "Read or update customer, lead, product or operational data." },
  { icon: "bi-credit-card", title: "Payments", description: "Create payment sessions and respond to payment events." },
  { icon: "bi-calendar-check", title: "Booking", description: "Show availability and create appointments." },
  { icon: "bi-geo-alt", title: "Maps and location", description: "Use mapping, geocoding or location APIs." },
  { icon: "bi-truck", title: "Logistics", description: "Track shipment or delivery information." },
  { icon: "bi-box-seam", title: "Product/catalogue", description: "Display structured product information from an external source." },
  { icon: "bi-shield-lock", title: "Authentication", description: "Use an identity provider for login or SSO." },
  { icon: "bi-chat-dots", title: "Communication", description: "Send email, SMS, WhatsApp or notifications through supported providers." },
  { icon: "bi-window", title: "Custom applications", description: "Connect the public website with an internal or proprietary system." },
];

const requestFlowSteps = [
  "Website collects or requests data",
  "Backend validates it",
  "Credentials are attached securely",
  "API request is sent",
  "Response is checked",
  "Data is transformed",
  "The website or internal system is updated",
  "Errors are logged",
];

const integrationTypes = [
  { label: "REST", title: "REST API", description: "A common HTTP-based approach for reading and writing resources." },
  { label: "GraphQL", title: "GraphQL", description: "Useful where supported and where the client needs flexible access to a graph of structured data." },
  { label: "Webhook", title: "Webhooks", description: "Useful when another platform needs to notify the website/backend that an event has happened." },
  { label: "Server-to-server", title: "Server-to-server integration", description: "Useful for sensitive operations that should not expose credentials in the browser." },
  { label: "Scheduled sync", title: "Scheduled synchronization", description: "Useful when information can update periodically rather than in real time." },
];

const authMechanisms = ["API keys", "bearer tokens", "OAuth 2.x", "signed requests", "service accounts", "custom token schemes"];

const websiteFields = ["firstName", "lastName", "phone"];
const crmApiFields = ["given_name", "family_name", "mobile_number"];

const mappingTasks = ["rename fields", "combine fields", "normalize formats", "convert dates", "map enums", "translate identifiers", "remove unsupported values"];

const reliabilityFactors = [
  { icon: "bi-stopwatch", title: "Timeouts", description: "Do not make visitors wait indefinitely for an external service." },
  { icon: "bi-arrow-repeat", title: "Retries", description: "Temporary failures may justify retrying, but repeated retries must be controlled." },
  { icon: "bi-fingerprint", title: "Idempotency", description: "A repeated payment or order request should not create duplicate transactions." },
  { icon: "bi-speedometer2", title: "Rate limits", description: "APIs often limit request frequency." },
  { icon: "bi-hdd-stack", title: "Caching", description: "Read-heavy data may not need to be fetched for every page view." },
  { icon: "bi-stack", title: "Queues", description: "Business-critical or slow work may be moved into background processing where architecture supports it." },
  { icon: "bi-shield-check", title: "Fallbacks", description: "For non-critical integrations, the website may need a graceful fallback when a service is unavailable." },
];

const securityConsiderations = [
  "input validation",
  "server-side credentials",
  "HTTPS",
  "least-privilege scopes",
  "secure token storage",
  "file validation",
  "webhook signature verification where supported",
  "replay protection where relevant",
  "logging without exposing secrets",
  "endpoint rate limiting",
  "dependency updates",
];

const processSteps = [
  { title: "Define the use case", description: "What data or action is required and why?" },
  { title: "Review API documentation", description: "Check endpoints, authentication, limits, webhooks, sandbox and errors." },
  { title: "Define data mapping", description: "Map fields and ownership." },
  { title: "Design the integration layer", description: "Choose browser, server, middleware or asynchronous architecture." },
  { title: "Implement", description: "Build the connection and business logic." },
  { title: "Handle failures", description: "Add validation, timeouts, retries or fallbacks as required." },
  { title: "Test", description: "Use sandbox/test environments where available." },
  { title: "Monitor", description: "Log important failures and maintain dependencies." },
];

const faqs = [
  {
    id: "api-any",
    question: "Can you integrate any API?",
    answer: "If the API is documented, accessible and supports the required operation, integration is usually possible. Feasibility depends on authentication, limits and provider restrictions.",
    open: true,
  },
  {
    id: "api-build-vs-consume",
    question: "Do you build APIs as well as consume them?",
    answer: "Yes. Shivantra can also develop custom backend APIs for websites and business applications.",
    open: false,
  },
  {
    id: "api-browser-call",
    question: "Can an API be called directly from the browser?",
    answer: "Sometimes, but sensitive credentials and many business operations should remain server-side. Architecture depends on the provider and use case.",
    open: false,
  },
  {
    id: "api-webhook",
    question: "What is a webhook?",
    answer: "A webhook is an HTTP callback sent by one system when an event occurs, such as a payment completing or a form submission being created.",
    open: false,
  },
  {
    id: "api-duplicates",
    question: "How do you prevent duplicate actions?",
    answer: "Where supported, idempotency keys or application-level duplicate checks can ensure repeated requests do not create duplicate records.",
    open: false,
  },
  {
    id: "api-legacy",
    question: "Can you integrate a legacy internal system?",
    answer: "Possibly. If the system has an API, database layer or another safe integration interface, we can assess options.",
    open: false,
  },
  {
    id: "api-down",
    question: "What happens if the API is down?",
    answer: "The integration can use appropriate error handling, retry, queue or fallback behavior depending on how critical the workflow is.",
    open: false,
  },
  {
    id: "api-maintenance",
    question: "Do you provide maintenance?",
    answer: "Yes. API integrations often need maintenance when providers change versions, authentication or field structures.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "CRM Integration", href: "/services/website-integrations/crm" },
  { label: "Forms & Lead Automation", href: "/services/website-integrations/lead-automation" },
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

function MasonryCard({ title, description, items, delay }: { title: string; description: string; items: string[]; delay: string }) {
  return (
    <div className="masonry-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="masonry-card">
        <CardTitle className="fs-6 mb-2">{title}</CardTitle>
        <Description className={items.length ? "" : "mb-0"}>{description}</Description>
        {items.length > 0 && <ChecklistList items={items} tight />}
      </div>
    </div>
  );
}

function estimateCardHeight(item: (typeof apiCapabilities)[number]) {
  const base = 130;
  const descriptionLines = Math.ceil(item.description.length / 42);
  return base + descriptionLines * 26 + item.items.length * 34;
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

const capabilityColumns = distributeIntoColumns(apiCapabilities, estimateCardHeight, 2);

export default function ApiIntegration() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap api-integration-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    API Integration
                  </Tag>
                  <PageTitle>Connect Your Website With the Data and Services It Needs</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Modern websites rarely operate alone. They may need product data from an ERP,
                    appointments from a booking platform, payments from a payment provider or
                    customer information from another application. Shivantra integrates websites
                    and web applications with third-party and internal APIs so data and actions
                    can move between systems reliably.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=api-integration`} className="btn-primary">
                      Discuss Your API Integration
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-arrow-left-right" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Website</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down-up" aria-hidden="true"></i></div>
                    <span className="flow-step">API Layer</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down-up" aria-hidden="true"></i></div>
                    <span className="flow-step">External / Internal System</span>
                    <div className="flow-branches">
                      <span className="flow-step">Auth</span>
                      <span className="flow-step">Validation</span>
                      <span className="flow-step">Logging</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Website exchanging data with external systems through an API integration
                      layer
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="what-it-does">
            <Container>
              <SectionHeader tag="What an API integration can do" title="APIs let the website use capabilities that live somewhere else" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  An integration may allow a website to:
                </Description>
              </SectionHeader>
              <div className="masonry-grid d-none d-md-flex">
                {capabilityColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((item) => (
                      <MasonryCard key={item.title} {...item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {apiCapabilities.map((item, index) => (
                    <MasonryCard key={item.title} {...item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="use-cases">
            <Container>
              <SectionHeader tag="Common use cases" title="API integration across business systems" colClass="col-lg-9" />
              <div className="row g-4">
                {useCases.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="request-response">
            <Container>
              <SectionHeader tag="Request and response" title="The successful API call is only one part of the integration" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A typical flow includes:
                </Description>
              </SectionHeader>
              <ol className="numbered-list">
                {requestFlowSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="row mt-5">
                <div className="col-lg-7 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">User Action</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Website</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Backend Validation</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">API Request</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">External System</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Response</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Transform</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">User / Database / Workflow</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="types">
            <Container>
              <SectionHeader tag="Integration types" title="Choose the pattern that fits the workflow" colClass="col-lg-9" />
              <div className="row g-4">
                {integrationTypes.map((type, index) => (
                  <div className="col-md-6 col-lg-4" key={type.label} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="decision-card h-100">
                      <CardTitle className="fs-6 mb-2">{type.title}</CardTitle>
                      <Description className="mb-0">{type.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="authentication">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Authentication" title="Credentials belong on the server" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      APIs can use several authentication mechanisms:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={authMechanisms} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Implementation should follow the provider&apos;s supported method. Sensitive
                    credentials should not be embedded in public frontend code.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Where user authorization is involved, token storage and refresh behavior
                    should be designed carefully.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="data-mapping">
            <Container>
              <SectionHeader tag="Data mapping" title="Two systems rarely describe the same data in exactly the same way" colClass="col-lg-9" />
              <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                  <div className="mapping-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="mapping-columns">
                      <div className="mapping-col">
                        <span className="mapping-label">Website</span>
                        <ul>
                          {websiteFields.map((field) => (
                            <li key={field}>{field}</li>
                          ))}
                        </ul>
                      </div>
                      <i className="bi bi-arrow-right mapping-arrow" aria-hidden="true"></i>
                      <div className="mapping-col">
                        <span className="mapping-label">CRM API</span>
                        <ul>
                          {crmApiFields.map((field) => (
                            <li key={field}>{field}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Description aos="fade-up" delay={150} className="fw-semibold mb-2">
                The integration layer may need to:
              </Description>
              <ChecklistList items={mappingTasks} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                Good mapping avoids silently corrupting or losing data.
              </Description>
            </Container>
          </Section>

          <Section id="reliability">
            <Container>
              <SectionHeader tag="Reliability" title="External systems fail sometimes. The integration should expect that." colClass="col-lg-9" />
              <div className="row g-4">
                {reliabilityFactors.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="security">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Security" title="Treat every integration boundary as a trust boundary" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Implementation should consider:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={securityConsiderations} tight />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we implement API integrations" />
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
                  <div className="accordion custom-accordion" id="api-integration-faq-accordion">
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
                  <SectionTitle>Show us the systems that need to talk to each other</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can review the APIs, map the data and design an integration that fits the
                    workflow and reliability requirements.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=api-integration`} className="btn-primary">
                      Discuss Your API Integration
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
