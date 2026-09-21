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

const pageUrl = `${siteUrl}/services/cms-development/custom-cms`;

export const metadata: Metadata = {
  title: "Custom CMS Development Services | Shivantra",
  description:
    "Custom CMS development for businesses with specialized content workflows, permissions, data models and integrations that do not fit a standard CMS.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Custom CMS Development | Shivantra",
    description:
      "Custom content management systems for specialized workflows, roles, structured content and system integrations.",
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
  { label: "Custom CMS Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Custom CMS Development",
      serviceType: "Custom CMS Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Custom CMS development for businesses with specialized content workflows, permissions, data models and integrations that do not fit a standard CMS.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/cms-development/custom-cms"}`,
      })),
    },
  ],
};

const constraintTriggers = [
  {
    icon: "bi-signpost-split",
    title: "Specialized workflows",
    description: "Content may move through several business-specific stages before it can be published.",
  },
  {
    icon: "bi-person-badge",
    title: "Granular permissions",
    description: "Access may depend on region, department, account, content type or another business rule.",
  },
  {
    icon: "bi-diagram-3",
    title: "Complex content relationships",
    description: "Content may be connected to operational data, customers, products, locations or records that do not fit a normal page/post model.",
  },
  {
    icon: "bi-building",
    title: "Multi-tenant publishing",
    description: "Different organizations or branches may manage their own content within one platform.",
  },
  {
    icon: "bi-layout-text-window",
    title: "Domain-specific editor experience",
    description: "Editors may need forms, terminology, validations and actions designed around the industry rather than generic CMS fields.",
  },
  {
    icon: "bi-plug",
    title: "Deep system integration",
    description: "The content-management interface may need to read or update ERP, CRM, databases or internal systems.",
  },
];

const buildOptions = [
  {
    label: "Configure",
    title: "Configure an existing CMS",
    description: "Best when the content and workflow fit standard capabilities with sensible configuration.",
  },
  {
    label: "Extend",
    title: "Extend a headless or traditional CMS",
    description: "Best when the core platform works but needs custom schemas, workflows, UI extensions or integrations.",
  },
  {
    label: "Build",
    title: "Build a custom CMS",
    description: "Best when editorial operations are deeply tied to proprietary business rules or the CMS is part of a broader internal platform.",
  },
];

const decisionFactors = ["implementation cost", "operating cost", "maintenance", "vendor dependence", "internal capability", "security", "future requirements", "editor experience"];

const contentModelFields = ["validation", "references", "taxonomies", "versions", "ownership", "status", "localization", "permissions"];

const workflowStates = ["draft", "internal review", "legal or compliance review", "market review", "approved", "scheduled", "published", "archived"];

const workflowTriggers = ["notifications", "tasks", "webhooks", "downstream updates"];

const editorExperienceItems = [
  "business terminology",
  "conditional fields",
  "guided forms",
  "validation",
  "inline reference selection",
  "calculated fields",
  "bulk actions",
  "custom dashboards",
  "role-specific navigation",
  "previews",
  "content status",
];

const integrationTargets = ["ERP", "CRM", "product databases", "digital asset systems", "authentication", "translation services", "internal APIs", "external APIs", "marketing systems", "publishing endpoints"];

const securityItems = [
  "who can log in",
  "what each role can view",
  "what each role can edit",
  "what each role can publish",
  "which data is restricted",
  "how administrative actions are audited where required",
];

const architectureLayers = [
  "web-based admin interface",
  "backend/API",
  "database",
  "authentication",
  "file storage",
  "search",
  "workflow engine",
  "notification service",
  "frontend website or portal",
  "integration layer",
];

const processSteps = [
  { title: "Map the editorial workflow", description: "Understand how content moves through the organization today." },
  { title: "Define content and data", description: "Identify content types, relationships, ownership and validations." },
  { title: "Compare existing platforms", description: "Confirm whether custom development is genuinely justified." },
  { title: "Define architecture and permissions", description: "Design technical layers, roles and security boundaries." },
  { title: "Prototype the editor experience", description: "Validate how common editorial tasks should work." },
  { title: "Build and integrate", description: "Develop the required content, workflow and integration capabilities." },
  { title: "Migrate existing data", description: "Transform and import legacy content where applicable." },
  { title: "Test with real editors", description: "Validate the system against actual publishing scenarios before rollout." },
];

const useCases = [
  {
    icon: "bi-diagram-2",
    title: "Multi-branch publishing",
    description: "Each branch manages local information while corporate teams control shared content.",
  },
  {
    icon: "bi-box-seam",
    title: "Product information publishing",
    description: "Marketing content is combined with product data owned by another system.",
  },
  {
    icon: "bi-shield-check",
    title: "Regulated content workflow",
    description: "Content requires defined review or approval before publication.",
  },
  {
    icon: "bi-people",
    title: "Partner content platform",
    description: "Different partner organizations maintain their own approved content.",
  },
  {
    icon: "bi-building",
    title: "Internal publishing portal",
    description: "Teams manage structured content that feeds several business applications.",
  },
  {
    icon: "bi-journal-text",
    title: "Industry directory",
    description: "Editors manage complex records, relationships, verification status and publication rules.",
  },
];

const faqs = [
  {
    id: "custom-cms-vs-wordpress",
    question: "Should we build a custom CMS instead of using WordPress or a headless CMS?",
    answer:
      "Only if there is a clear requirement that existing platforms do not handle well enough. We compare configuration, extension and custom development before recommending an approach.",
    open: true,
  },
  {
    id: "custom-cms-expensive",
    question: "Is a custom CMS more expensive?",
    answer: "It usually requires more initial engineering and ongoing ownership than using an established platform. The business benefit should justify that cost.",
    open: false,
  },
  {
    id: "custom-cms-existing",
    question: "Can you customize an existing CMS instead?",
    answer: "Yes. In many cases this is preferable to building everything from scratch.",
    open: false,
  },
  {
    id: "custom-cms-roles",
    question: "Can a custom CMS have roles and approvals?",
    answer: "Yes. Permissions and workflow can be designed around the organization's requirements.",
    open: false,
  },
  {
    id: "custom-cms-multisite",
    question: "Can it manage multiple websites?",
    answer: "Yes, if multi-site management is part of the architecture.",
    open: false,
  },
  {
    id: "custom-cms-databases",
    question: "Can it connect to existing databases?",
    answer: "Yes, subject to data ownership, security and available integration methods.",
    open: false,
  },
  {
    id: "custom-cms-migrate",
    question: "Can you migrate our old CMS data?",
    answer: "Yes. Migration needs to be scoped based on source formats, content quality and transformation requirements.",
    open: false,
  },
  {
    id: "custom-cms-maintain",
    question: "Who maintains the CMS after launch?",
    answer: "Shivantra can provide ongoing support, or the system can be documented for an internal technical team depending on the engagement.",
    open: false,
  },
];

const relatedServices = [
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Headless CMS Development", href: "/services/cms-development/headless-cms" },
  { label: "CMS Consulting", href: "/services/cms-development/cms-consulting" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "Custom Website Development", href: "/services/website-development/custom-websites" },
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

export default function CustomCmsDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap custom-cms-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Custom CMS Development
                  </Tag>
                  <PageTitle>A CMS Designed Around the Way Your Team Actually Publishes</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Sometimes the problem is not that a CMS lacks features. It is that the
                    platform expects your team to work in a way that does not match the business.
                    Shivantra develops custom content-management solutions for specialized
                    workflows, permissions, data relationships and integrations where a standard
                    CMS configuration would create more friction than it removes.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=custom-cms-development`} className="btn-primary">
                      Discuss Your CMS Workflow
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-kanban"
                    caption="Custom content management workspace with structured fields and publishing workflow"
                    cues={["Draft", "Review", "Approved", "Published"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="constraint">
            <Container>
              <SectionHeader tag="When a standard CMS becomes a constraint" title="Custom CMS development should solve a real limitation" colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  A mature CMS can handle many website requirements.
                </Description>
                <Description className="mb-0" aos="fade-up" delay={150}>
                  Custom development is usually justified only when the way your organization
                  manages content is itself unusually specific. Examples include:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {constraintTriggers.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="build-vs-customize">
            <Container>
              <SectionHeader tag="Build, customize or integrate?" title="Custom software is one option, not the default answer" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Before building a custom CMS, we compare three approaches.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {buildOptions.map((option, index) => (
                  <div className="col-md-4" key={option.label} data-aos="fade-up" data-aos-delay={String(index * 100)}>
                    <div className="decision-card">
                      <span className="decision-label">{option.label}</span>
                      <CardTitle className="fs-6 mb-2">{option.title}</CardTitle>
                      <Description className="mb-0">{option.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description aos="fade-up" delay={100} className="fw-semibold mb-2 mt-5">
                The correct decision considers:
              </Description>
              <ChecklistList items={decisionFactors} tight />
            </Container>
          </Section>

          <Section id="content-model">
            <Container>
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <SectionHeader tag="Content model" title="Model the information before building the interface" tight colClass="col-12">
                    <Description aos="fade-up" delay={100}>
                      A custom CMS should not start with screens.
                    </Description>
                    <Description className="mb-0" aos="fade-up" delay={150}>
                      It should start with the data and relationships the team needs to manage.
                    </Description>
                  </SectionHeader>
                  <Description aos="fade-up" delay={200} className="fw-semibold mb-2">
                    The final model may include:
                  </Description>
                  <ChecklistList items={contentModelFields} tight />
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Product</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">Category</span>
                      <span className="flow-step">Technical Attributes</span>
                      <span className="flow-step">Documents</span>
                      <span className="flow-step">Regions</span>
                      <span className="flow-step">Related Services</span>
                      <span className="flow-step">Visibility Rules</span>
                      <span className="flow-step">Publication Status</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Custom CMS content model showing related business content entities
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="workflow">
            <Container>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <SectionHeader tag="Workflow" title="Make the publishing process visible in the system" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      If content moves through a defined process, that process can be represented
                      in the CMS. A workflow might include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={workflowStates} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Transitions can be restricted according to roles. Where appropriate, the
                    system may also trigger:
                  </Description>
                  <ChecklistList items={workflowTriggers} tight />
                </div>
                <div className="col-lg-5 mt-5 mt-lg-0">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-signpost-split" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Draft</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Review</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Approved</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Scheduled</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Published</span>
                    <div className="flow-branch">Review can also lead back to: Changes Requested</div>
                    <Description className="mb-0 mt-3">
                      Custom CMS workflow from draft through review and publication
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
                  <SectionHeader tag="Editor experience" title="Give editors an interface that speaks their language" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A custom CMS can replace generic controls with a domain-specific interface.
                      That can include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={editorExperienceItems} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    The goal is not to make the CMS visually elaborate.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    It is to reduce mistakes and make the common task easier.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="integrations">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Integrations" title="Content management can sit inside a larger business process" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Content may already exist in another system. Or information managed in the
                      CMS may need to trigger or update something elsewhere. A custom CMS can
                      connect with:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationTargets} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    For example, product specifications might remain owned by the ERP while
                    marketing descriptions are managed in the CMS.
                  </Description>
                  <Description aos="fade-up" delay={200}>
                    The implementation should make ownership clear rather than duplicating all
                    information into one database.
                  </Description>
                  <Button href="/services/website-integrations" className="btn-white-outline mt-2">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="security">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Security and permissions" title="Access should follow responsibility" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Custom CMS projects should define:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={securityItems} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Technical implementation should use least-privilege access and enforce
                    permissions on the server side for protected operations.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Do not rely only on hiding buttons in the interface.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="architecture">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Architecture" title="Build only the custom layers you actually need" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A custom CMS might include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={architectureLayers} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Not every project needs all of these.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The architecture should remain proportional to the problem.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we approach custom CMS development" />
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
              <SectionHeader tag="Example use cases" title="Where a custom CMS can make sense" />
              <div className="row g-4">
                {useCases.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <InfoCard {...item} />
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
                  <div className="accordion custom-accordion" id="custom-cms-faq-accordion">
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
                  <SectionTitle>If your publishing workflow is unique, show us how it works today</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can map the process and determine whether you need a custom CMS, a
                    customized platform or simply a better implementation of an existing one.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=custom-cms-development`} className="btn-primary">
                      Discuss Your CMS Workflow
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
