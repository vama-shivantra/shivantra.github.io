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

const pageUrl = `${siteUrl}/services/cms-development/cms-consulting`;

export const metadata: Metadata = {
  title: "CMS Consulting & Platform Selection | Shivantra",
  description:
    "CMS consulting for platform selection, content architecture, workflows, integrations and migration planning. Choose a CMS around your real requirements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "CMS Consulting & Platform Selection | Shivantra",
    description:
      "Independent CMS consulting for platform selection, content architecture, workflows, integrations and migration planning.",
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
  { label: "CMS Consulting", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "CMS Consulting",
      serviceType: "CMS Consulting",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "CMS consulting for platform selection, content architecture, workflows, integrations and migration planning. Choose a CMS around your real requirements.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/cms-development/cms-consulting"}`,
      })),
    },
  ],
};

const unansweredQuestions = [
  "Who edits content?",
  "How many people publish?",
  "What needs approval?",
  "Is content reused?",
  "How many languages exist?",
  "Does the frontend need to be independent?",
  "Which systems provide data?",
  "What does the internal technical team want to own?",
  "How difficult will migration be?",
  "What will the platform cost to operate over several years?",
];

const evaluationCriteria = [
  { icon: "bi-diagram-3", title: "Content structure", description: "What content types exist and how are they related?" },
  { icon: "bi-pencil-square", title: "Editorial experience", description: "What do editors create every day and how technical are they?" },
  { icon: "bi-person-badge", title: "Roles and permissions", description: "Who can draft, review, publish or administer?" },
  { icon: "bi-signpost-split", title: "Workflow", description: "Does content need approval, scheduling, release management or localization?" },
  { icon: "bi-code-slash", title: "Frontend requirements", description: "Is the website tightly coupled to the CMS, or should the frontend be independently developed?" },
  { icon: "bi-translate", title: "Localization", description: "How many languages or markets need to be managed?" },
  { icon: "bi-plug", title: "Integrations", description: "Does the CMS need to connect with CRM, ERP, DAM, commerce, search or internal APIs?" },
  { icon: "bi-speedometer2", title: "Performance and delivery", description: "How will content reach end users and what infrastructure is involved?" },
  { icon: "bi-shield-lock", title: "Security and operating model", description: "Who maintains the platform, updates software and manages access?" },
  { icon: "bi-arrow-left-right", title: "Migration", description: "How much existing content, metadata, media and URL history needs to move?" },
  { icon: "bi-cash-coin", title: "Cost", description: "Licensing is only one part of cost. Development, hosting, maintenance, migration and internal time also matter." },
];

const comparisonRows = [
  { label: "Editorial ease", traditional: "Familiar, page-oriented editing", headless: "Structured fields, less visual", custom: "Built around the specific workflow" },
  { label: "Structured content", traditional: "Often page-oriented", headless: "Strong by design", custom: "Defined entirely by the build" },
  { label: "Frontend flexibility", traditional: "Coupled to the CMS theme", headless: "Independent frontend by design", custom: "Independent frontend by design" },
  { label: "Workflow", traditional: "Basic to moderate, plugin-dependent", headless: "Varies by platform and plan", custom: "Built to the exact requirement" },
  { label: "Integrations", traditional: "Plugin ecosystem", headless: "API-first", custom: "Built as needed" },
  { label: "Localization", traditional: "Varies by platform and plugins", headless: "Often strong, platform-dependent", custom: "Built to requirement" },
  { label: "Maintenance", traditional: "Core and plugin updates", headless: "CMS vendor plus frontend code", custom: "Full internal or vendor ownership" },
  { label: "Cost model", traditional: "Licensing/hosting, lower dev cost", headless: "Platform fee plus frontend development", custom: "Development-heavy, ongoing ownership" },
  { label: "Internal skill requirement", traditional: "Low to moderate", headless: "Frontend development capability needed", custom: "Ongoing engineering capability needed" },
];

const traditionalFit = ["the website is the primary channel", "editors need familiar page-oriented workflows", "the project benefits from an established ecosystem", "architecture should remain relatively simple"];

const headlessFit = ["structured content is important", "several frontends consume content", "a custom React/Next.js experience is required", "APIs and integrations are central", "teams need to reuse content across channels"];

const customFit = ["workflow is proprietary", "permissions are unusually granular", "content is deeply linked to operational data", "the CMS is part of an internal software platform"];

const hybridSystems = ["CMS for marketing content", "ERP for product data", "CRM for customer records", "DAM for media", "ecommerce platform for transactions"];

const deliverables = [
  {
    icon: "bi-clipboard-data",
    title: "Current-state assessment",
    description: "Depending on scope, this can cover:",
    items: ["Existing CMS", "Pain points", "Content", "Integrations", "Publishing workflow", "Technical constraints"],
  },
  {
    icon: "bi-list-check",
    title: "Requirements definition",
    description: "Turning needs into evaluation criteria across:",
    items: ["Content types", "Users", "Permissions", "Localization", "Preview", "Workflows", "Integrations", "Performance", "Hosting"],
  },
  {
    icon: "bi-signpost-2",
    title: "Architecture options",
    description: "Comparison of viable approaches.",
    items: [] as string[],
  },
  {
    icon: "bi-list-stars",
    title: "CMS shortlist",
    description: "A small set of platforms that meet the most important requirements.",
    items: [],
  },
  {
    icon: "bi-check2-square",
    title: "Proof or technical validation",
    description: "Where a critical requirement needs verification before selection.",
    items: [],
  },
  {
    icon: "bi-file-text",
    title: "Recommendation",
    description: "Documented rationale, trade-offs and assumptions.",
    items: [],
  },
  {
    icon: "bi-arrow-left-right",
    title: "Migration approach",
    description: "High-level content, URL and integration migration plan.",
    items: [],
  },
  {
    icon: "bi-map",
    title: "Implementation roadmap",
    description: "Suggested phases, dependencies and next steps.",
    items: [],
  },
];

const costRisks = ["extensive custom development", "frequent manual maintenance", "specialist hosting", "many paid extensions", "difficult upgrades", "inefficient editorial workflows"];

const costFactors = ["licensing", "implementation", "hosting", "maintenance", "upgrades", "developer requirements", "migration", "content-team effort"];

const processSteps = [
  { title: "Discovery", description: "Understand business goals, team, current pain points and planned digital experience." },
  { title: "Current-state audit", description: "Review the existing platform, content, integrations and workflows where applicable." },
  { title: "Requirements", description: "Turn needs into evaluation criteria." },
  { title: "Architecture options", description: "Compare traditional, headless, custom and hybrid approaches." },
  { title: "Validate critical assumptions", description: "Test APIs, editorial workflows or platform capabilities where necessary." },
  { title: "Recommendation", description: "Document the preferred approach with relevant trade-offs." },
  { title: "Roadmap", description: "Define migration and implementation steps." },
];

const faqs = [
  {
    id: "consulting-recommend",
    question: "Can you recommend a specific CMS?",
    answer: "Yes, after understanding the requirements. We do not start with a predetermined winner.",
    open: true,
  },
  {
    id: "consulting-own-platforms",
    question: "Do you only recommend platforms Shivantra develops?",
    answer: "The objective is to recommend a viable architecture for the client. Implementation capability and ecosystem fit are part of the evaluation, but not the only criteria.",
    open: false,
  },
  {
    id: "consulting-wordpress-headless",
    question: "Can you compare WordPress and headless CMS?",
    answer: "Yes. We compare them against specific requirements rather than making a generic winner/loser list.",
    open: false,
  },
  {
    id: "consulting-review-current",
    question: "Can you review our current CMS?",
    answer: "Yes. A current-state audit can identify whether the real issue is the platform, configuration, content model, workflow or implementation.",
    open: false,
  },
  {
    id: "consulting-need-replace",
    question: "Do we need to replace our CMS?",
    answer: "Not always. Sometimes restructuring or improving the existing implementation is more sensible than migration.",
    open: false,
  },
  {
    id: "consulting-procurement",
    question: "Can you help with procurement or vendor demos?",
    answer: "We can help define evaluation criteria and assess whether demonstrations actually address the important requirements.",
    open: false,
  },
  {
    id: "consulting-implementation",
    question: "Can consulting continue into implementation?",
    answer: "Yes. The architecture and recommendation can become the basis for CMS implementation or migration.",
    open: false,
  },
  {
    id: "consulting-timeline",
    question: "How long does CMS selection take?",
    answer: "It depends on organizational complexity, number of stakeholders, platform options and whether prototypes or technical validations are required.",
    open: false,
  },
];

const relatedServices = [
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Headless CMS Development", href: "/services/cms-development/headless-cms" },
  { label: "Custom CMS Development", href: "/services/cms-development/custom-cms" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
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

function DeliverableCard({ item, delay }: { item: (typeof deliverables)[number]; delay: string }) {
  return (
    <div className="deliverable-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="deliverable-card">
        <span className="icon-badge">
          <i className={`bi ${item.icon}`} aria-hidden="true"></i>
        </span>
        <CardTitle className="fs-6 mb-2">{item.title}</CardTitle>
        <Description className={item.items.length ? "" : "mb-0"}>{item.description}</Description>
        {item.items.length > 0 && <ChecklistList items={item.items} tight />}
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
function estimateCardHeight(item: (typeof deliverables)[number]) {
  const base = 170;
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

const deliverableColumns = distributeIntoColumns(deliverables, estimateCardHeight, 2);

export default function CmsConsulting() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap cms-consulting-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    CMS Consulting
                  </Tag>
                  <PageTitle>Choose the CMS After You Understand the Requirement</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    WordPress, headless CMS, custom CMS, SaaS platform, open source. The number of
                    options makes it easy to start by comparing software before defining what the
                    organization actually needs. Shivantra provides CMS consulting around content,
                    editorial workflow, architecture, integrations and migration so the technology
                    decision follows the requirement rather than leading it.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=cms-consulting`} className="btn-primary">
                      Discuss Your CMS Decision
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-signpost-2" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Requirements</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Evaluation</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Architecture</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">CMS Options</span>
                    <div className="flow-branches">
                      <span className="flow-step">Content</span>
                      <span className="flow-step">Editors</span>
                      <span className="flow-step">Workflow</span>
                      <span className="flow-step">Integrations</span>
                      <span className="flow-step">Budget</span>
                      <span className="flow-step">Frontend</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      CMS selection process based on content, workflow, integrations and technical
                      requirements
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="wrong-place">
            <Container>
              <SectionHeader tag="CMS selection often starts in the wrong place" title="A feature comparison cannot tell you how your team needs to work" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  Platforms publish long feature lists.
                </Description>
                <Description className="mb-0" aos="fade-up" delay={150}>
                  Those lists can be useful, but they do not answer questions such as:
                </Description>
              </SectionHeader>
              <ChecklistList items={unansweredQuestions} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                A CMS can be powerful and still be wrong for your organization.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="what-we-evaluate">
            <Container>
              <SectionHeader tag="What we evaluate" title="CMS evaluation criteria" />
              <div className="row g-4">
                {evaluationCriteria.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="decision-matrix">
            <Container>
              <SectionHeader tag="Decision matrix" title="We compare architecture, not just brands" colClass="col-lg-9" />
              <div className="comparison-table-wrap" data-aos="fade-up" data-aos-delay="100">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th scope="col">Criteria</th>
                      <th scope="col">Traditional CMS</th>
                      <th scope="col">Headless CMS</th>
                      <th scope="col">Custom CMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>{row.traditional}</td>
                        <td>{row.headless}</td>
                        <td>{row.custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="traditional-cms">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Traditional CMS" title="Traditional CMS can be the practical choice" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A traditional CMS can work well when:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={traditionalFit} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    The platform still needs careful implementation. Plugin-heavy or unrestricted
                    page-builder setups can create their own maintenance problems.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="headless-cms">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Headless CMS" title="Headless CMS is useful when content and frontend need independence" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Headless architecture can make sense when:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={headlessFit} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    It also creates more responsibility for frontend development, preview and
                    delivery architecture.
                  </Description>
                  <Button href="/services/cms-development/headless-cms" className="btn-white-outline mt-2">
                    Explore Headless CMS Development
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="custom-cms">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Custom CMS" title="Custom CMS is justified by custom operations, not by preference" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A custom CMS may be appropriate when:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={customFit} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    It also creates long-term ownership responsibilities.
                  </Description>
                  <Button href="/services/cms-development/custom-cms" className="btn-white-outline mt-2">
                    Explore Custom CMS Development
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="hybrid">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Hybrid architecture" title="Sometimes the right answer is a combination" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A business may use:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={hybridSystems} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Trying to move all information into the CMS can create duplication. A better
                    architecture may define which system owns each type of data and connect them
                    through APIs.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    CMS consulting should therefore consider the whole information environment
                    rather than evaluating the CMS in isolation.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="deliverables">
            <Container>
              <SectionHeader tag="Consulting deliverables" title="What a CMS consulting engagement can produce" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Depending on scope, deliverables may include:
                </Description>
              </SectionHeader>
              <div className="deliverable-grid d-none d-md-flex">
                {deliverableColumns.map((column, columnIndex) => (
                  <div className="deliverable-col" key={columnIndex}>
                    {column.map((item) => (
                      <DeliverableCard key={item.title} item={item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="deliverable-grid d-flex d-md-none">
                <div className="deliverable-col">
                  {deliverables.map((item, index) => (
                    <DeliverableCard key={item.title} item={item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section id="tco">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Total cost of ownership" title="Platform license is only one line in the cost" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A lower license price can still produce a more expensive system if it
                      requires:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={costRisks} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Likewise, a higher platform subscription can sometimes reduce infrastructure
                    or maintenance effort. We consider:
                  </Description>
                  <ChecklistList items={costFactors} tight />
                  <div className="quote-block" data-aos="fade-up" data-aos-delay="200">
                    <p className="mb-2">&ldquo;Which CMS costs less today?&rdquo;</p>
                    <p className="mb-0">is the wrong question. The relevant one is: &ldquo;Which approach makes sense to operate for the expected life of the platform?&rdquo;</p>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Process" title="Our CMS consulting process" />
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
                  <div className="accordion custom-accordion" id="cms-consulting-faq-accordion">
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
                  <SectionTitle>Before committing to a CMS, define what it needs to solve</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can help turn editorial and technical needs into a clear platform decision
                    and implementation roadmap.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=cms-consulting`} className="btn-primary">
                      Discuss Your CMS Decision
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
