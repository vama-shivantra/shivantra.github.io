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

const pageUrl = `${siteUrl}/services/cms-development`;

export const metadata: Metadata = {
  title: "CMS Development Services | Shivantra",
  description:
    "CMS development for businesses that need structured content, easier publishing, roles, workflows, integrations and a platform that fits how their team works.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "CMS Development Services | Shivantra",
    description:
      "Content management systems designed around how your team creates, manages, approves and publishes content.",
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
  { label: "CMS Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "CMS Development",
      serviceType: "CMS Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "CMS development for businesses that need structured content, easier publishing, roles, workflows, integrations and a platform that fits how their team works.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/cms-development"}`,
      })),
    },
  ],
};

const introQuestions = [
  "What types of content do we manage?",
  "Which information is reused?",
  "Which fields are required?",
  "Who can edit or publish?",
  "Do changes need approval?",
  "Are multiple languages involved?",
  "Does the same content appear in more than one place?",
  "Which other systems provide or consume the content?",
];

const goodCmsPrinciples = [
  {
    icon: "bi-diagram-3",
    title: "Organize content logically",
    description: "Services, locations, people, articles, products and other content should be modeled as meaningful types rather than buried in unstructured page layouts.",
  },
  {
    icon: "bi-pencil-square",
    title: "Make routine editing straightforward",
    description: "Editors should see fields and actions that make sense for the content they are responsible for.",
  },
  {
    icon: "bi-shield-check",
    title: "Protect consistency",
    description: "Reusable components, controlled fields and validation can help prevent accidental differences across pages.",
  },
  {
    icon: "bi-person-badge",
    title: "Support appropriate permissions",
    description: "Roles can separate activities such as drafting, editing, publishing and system administration, depending on the platform.",
  },
  {
    icon: "bi-signpost-split",
    title: "Support the publishing process",
    description: "Where teams need review or scheduling, the workflow should reflect that requirement rather than being managed through email and spreadsheets.",
  },
  {
    icon: "bi-plug",
    title: "Connect content with other systems",
    description: "A CMS can exchange content with websites, apps, portals, CRM, product systems or external APIs where needed.",
  },
];

const cmsServices = [
  {
    icon: "bi-sliders",
    title: "Custom CMS Development",
    description:
      "For organizations whose content, workflow or permissions do not fit well into an off-the-shelf editorial setup. We can build or deeply customize the content-management experience around specific business requirements.",
    cta: "Explore Custom CMS Development",
    href: "/services/cms-development/custom-cms",
  },
  {
    icon: "bi-hdd-network",
    title: "Headless CMS Development",
    description: "For projects where content needs to be separated from the presentation layer and delivered through APIs to one or more frontends.",
    cta: "Explore Headless CMS Development",
    href: "/services/cms-development/headless-cms",
  },
  {
    icon: "bi-arrow-left-right",
    title: "CMS Migration",
    description:
      "For businesses moving from a legacy or unsuitable platform to a new CMS. Migration can cover content inventory, re-modeling, transformation, URL handling, metadata, redirects and QA.",
    cta: "Explore CMS Migration",
    href: "/services/cms-development/cms-migration",
  },
  {
    icon: "bi-chat-square-dots",
    title: "CMS Consulting",
    description: "For teams that need help deciding what platform or architecture is appropriate before committing to implementation.",
    cta: "Explore CMS Consulting",
    href: "/services/cms-development/cms-consulting",
  },
];

const serviceFields = ["Title", "Short description", "Full description", "Icon or image", "Category", "Related industries", "Related case studies", "CTA", "SEO fields"];

const reusableContentTypes = ["Locations", "People", "Products", "FAQs", "Resources", "Testimonials", "Events", "Documents", "Categories"];

const editorialConsiderations = [
  "meaningful field labels",
  "clear grouping",
  "required-field validation",
  "sensible defaults",
  "media handling",
  "previews",
  "reusable references",
  "help text where useful",
  "protected layouts",
  "role-specific access",
];

const roleTypes = ["contributors", "editors", "reviewers", "publishers", "administrators", "developers"];

const workflowNeeds = ["review", "approval", "scheduled release", "locale-specific responsibilities", "restricted content areas"];

const architectureOptions = [
  {
    label: "Traditional CMS",
    title: "Content and presentation in one system",
    description: "A traditional CMS manages content and presentation in one system. It can be a practical choice for:",
    items: ["Straightforward business websites", "Smaller teams", "Projects where speed of implementation matters", "Sites that benefit from an established theme/plugin ecosystem"],
  },
  {
    label: "Headless CMS",
    title: "Structured content delivered through APIs",
    description: "A headless CMS manages structured content separately and exposes it through APIs. It can make sense when:",
    items: ["The frontend requires independent development", "Content is used across multiple channels", "The website is part of a larger application architecture", "Structured content and API delivery are important"],
  },
  {
    label: "Custom CMS",
    title: "Built around specific requirements",
    description: "A custom solution can be appropriate when:",
    items: ["Editorial workflow is highly specific", "Existing platforms introduce unnecessary constraints", "Content management is part of a larger internal application", "Permissions, data or business rules are unusually specialized"],
  },
];

const integrationTargets = ["CRM", "ERP", "DAM", "ecommerce", "product information", "marketing automation", "translation tools", "analytics", "internal APIs", "external services", "custom applications"];

const multilingualItems = ["global content", "market-specific content", "translations", "regional overrides", "shared assets", "separate permissions", "locale workflows", "shared components"];

const processSteps = [
  { title: "Understand the publishing environment", description: "We identify content types, editors, roles, workflows, channels and technical constraints." },
  { title: "Audit existing content", description: "For an existing site, we review what content exists and how it is currently structured." },
  { title: "Define the content model", description: "We determine which information should be structured, reusable or referenced." },
  { title: "Choose the architecture", description: "We compare traditional, headless, custom or hybrid approaches according to the requirement." },
  { title: "Configure and develop", description: "We implement schemas, fields, components, permissions and editorial interfaces." },
  { title: "Integrate", description: "We connect the CMS to websites, APIs or business systems where required." },
  { title: "Migrate and test", description: "Where migration is involved, content is transformed, imported and checked." },
  { title: "Train and launch", description: "We provide agreed editor guidance and launch the system with the production website or digital experience." },
];

const scopeCategories = [
  { title: "Discovery", items: ["Editorial interviews", "Existing-platform review", "Content inventory", "Workflow requirements", "Integration requirements"] },
  { title: "Content architecture", items: ["Content types", "Taxonomy", "Relationships", "Reusable content", "Localization model"] },
  { title: "CMS implementation", items: ["Schema/configuration", "Fields", "Validation", "Roles", "Previews", "Media", "Workflows"] },
  { title: "Frontend integration", items: ["Website", "App", "Portal", "API consumption"] },
  { title: "Migration", items: ["Export", "Transform", "Import", "Metadata", "Media", "URL mapping", "Redirects"] },
  { title: "Enablement", items: ["Editor guidance", "Documentation", "Handover", "Support"] },
];

const faqs = [
  {
    id: "cms-which",
    question: "Which CMS does Shivantra use?",
    answer:
      "We select the CMS according to the project. The right choice depends on editing requirements, content structure, workflow, integrations, architecture, budget and long-term maintenance.",
    open: true,
  },
  {
    id: "cms-headless-needed",
    question: "Do we need a headless CMS?",
    answer:
      "Not necessarily. Headless architecture is useful for certain requirements but can add complexity to a simple website. We recommend it when the benefits justify that complexity.",
    open: false,
  },
  {
    id: "cms-no-dev",
    question: "Can our team edit content without developers?",
    answer: "That is normally one of the main objectives of a CMS. We design the editing experience around the updates your team needs to make regularly.",
    open: false,
  },
  {
    id: "cms-permissions",
    question: "Can different users have different permissions?",
    answer: "Yes, depending on the CMS. Roles and permissions can be planned around editorial responsibilities.",
    open: false,
  },
  {
    id: "cms-migrate",
    question: "Can you migrate our existing CMS?",
    answer: "Yes. CMS migration can include content audit, transformation, import, URL mapping, redirects, metadata and QA.",
    open: false,
  },
  {
    id: "cms-multilingual",
    question: "Can a CMS support multiple languages?",
    answer: "Yes. The appropriate localization model depends on the platform, markets and editorial workflow.",
    open: false,
  },
  {
    id: "cms-app-portal",
    question: "Can the CMS feed a mobile app or portal?",
    answer: "A headless or API-capable CMS can supply structured content to different frontends where required.",
    open: false,
  },
  {
    id: "cms-crm-erp",
    question: "Can you integrate a CMS with our CRM or ERP?",
    answer: "Yes, where the relevant systems provide suitable integration methods.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Custom CMS Development", href: "/services/cms-development/custom-cms" },
  { label: "Headless CMS Development", href: "/services/cms-development/headless-cms" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
  { label: "CMS Consulting", href: "/services/cms-development/cms-consulting" },
  { label: "Website Integrations", href: "/services/website-integrations" },
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

export default function CmsDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap cms-pillar-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    CMS Development
                  </Tag>
                  <PageTitle>CMS Development Built Around Your Content and Your Team</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Managing website content should not require your team to work around the
                    technology. Shivantra designs and develops content management systems around
                    the way your organization creates, structures, reviews and publishes
                    information, from straightforward business websites to custom and headless
                    CMS architectures.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=cms-development`} className="btn-primary">
                      Discuss Your CMS Requirement
                    </Button>
                    <Button href="#cms-services" className="btn-white-outline">
                      Explore CMS Services
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-diagram-2"
                    caption="Structured content management system publishing content to a website and digital channels"
                    cues={["Content Fields", "Reusable Content", "Editor", "Website", "API"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="intro">
            <Container>
              <SectionHeader tag="Introduction" title="A CMS is not just an admin panel" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A CMS sits between the people who manage content and the digital experiences
                  where that content appears. If it is designed poorly, editors may rely on
                  workarounds, duplicate the same information in several places or accidentally
                  break page consistency. If it is designed well, the CMS makes the intended way
                  of working obvious.
                </Description>
              </SectionHeader>
              <Description aos="fade-up" delay={150} className="fw-semibold mb-2">
                The right implementation should answer practical questions such as:
              </Description>
              <ChecklistList items={introQuestions} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                We use those questions to shape the CMS rather than treating the platform&apos;s
                default editor as the project.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="good-cms">
            <Container>
              <SectionHeader tag="What a good CMS should do" title="Make content easier to manage without giving up structure" />
              <div className="row g-4">
                {goodCmsPrinciples.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="cms-services">
            <Container>
              <SectionHeader tag="CMS Services" title="CMS Development Services" colClass="col-lg-9" />
              <div className="row g-4">
                {cmsServices.map((service, index) => (
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

          <Section className="section-muted" id="content-modeling">
            <Container>
              <SectionHeader tag="Content modeling" title="Good content structure makes the CMS easier to use later" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A website page is usually made of smaller pieces of information. For example, a
                  service may have:
                </Description>
              </SectionHeader>
              <ChecklistList items={serviceFields} tight />
              <Description className="mt-4" aos="fade-up" delay={150}>
                Instead of asking editors to recreate that information manually wherever it
                appears, a structured CMS can define the service once and reuse it where
                appropriate. The same idea can apply to:
              </Description>
              <ChecklistList items={reusableContentTypes} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                Structured content also makes it easier to deliver information through APIs or
                reuse it across more than one interface.
              </Description>
              <div className="row mt-5">
                <div className="col-lg-7 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="250">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Service</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">Title</span>
                      <span className="flow-step">Summary</span>
                      <span className="flow-step">Content</span>
                      <span className="flow-step">Industry</span>
                      <span className="flow-step">Related Case Studies</span>
                      <span className="flow-step">CTA</span>
                      <span className="flow-step">SEO Fields</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      The same content feeds multiple page components
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="editorial-experience">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Editorial experience" title="The CMS should be designed for the person editing it" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A technically powerful CMS can still be frustrating if the editing
                      experience is poorly configured. We consider:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={editorialConsiderations} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    The objective is to reduce ambiguity for editors.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    A content team should understand how to make a routine update without needing
                    to know how the frontend was coded.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="roles-workflow">
            <Container>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <SectionHeader tag="Roles and workflows" title="Give people the access their responsibility requires" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Many CMS platforms support user roles and permissions. Depending on the
                      selected platform and plan, a publishing model may separate:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={roleTypes} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    For more complex organizations, workflow may also include:
                  </Description>
                  <ChecklistList items={workflowNeeds} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    We design these requirements before assigning permissions so access reflects
                    actual responsibilities rather than simply giving everyone administrator
                    rights.
                  </Description>
                </div>
                <div className="col-lg-5 mt-5 mt-lg-0">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-person-workspace" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Contributor</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Reviewer</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Publisher</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Live Content</span>
                    <div className="flow-branch">optional branch: Localization Review</div>
                    <Description className="mb-0 mt-3">
                      CMS editorial workflow from contributor through review to publication
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="architecture">
            <Container>
              <SectionHeader tag="Architecture" title="The right CMS architecture depends on the requirement" colClass="col-lg-9" />
              <div className="row g-4">
                {architectureOptions.map((option, index) => (
                  <div className="col-md-6 col-lg-4" key={option.label} data-aos="fade-up" data-aos-delay={String(index * 100)}>
                    <div className="decision-card h-100">
                      <span className="decision-label">{option.label}</span>
                      <CardTitle className="fs-6 mb-2">{option.title}</CardTitle>
                      <Description>{option.description}</Description>
                      <ChecklistList items={option.items} tight />
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-4" aos="fade-up" delay={100}>
                None of these approaches is universally better.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={150}>
                We select architecture around editorial needs, technical requirements, budget,
                team capability and expected lifespan.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="integrations">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Integrations" title="Your CMS does not have to operate in isolation" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Content may already exist in another system. Or information managed in the
                      CMS may need to trigger or update something elsewhere. Depending on the
                      project, integrations can connect the CMS with:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationTargets} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    The objective is to avoid unnecessary duplicate data entry and make ownership
                    of information clear.
                  </Description>
                  <Button href="/services/website-integrations" className="btn-white-outline mt-2">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="multilingual">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Multilingual and multi-site" title="Plan for markets and sites before content starts multiplying" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      When organizations manage several languages, brands or sites, content
                      governance becomes more important. The CMS architecture may need to define:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={multilingualItems} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    We plan these relationships so teams understand what is shared and what can
                    vary.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Process" title="How we approach CMS development" />
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

          <Section id="scope">
            <Container>
              <SectionHeader tag="What a CMS engagement can include" title="CMS project scope" colClass="col-lg-9" />
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
                  <div className="accordion custom-accordion" id="cms-development-faq-accordion">
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
                  <SectionTitle>Choose a CMS around how your content actually works</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Tell us what your team publishes, who manages it and where that content needs
                    to appear. We can help define the structure and select an implementation that
                    fits the requirement.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=cms-development`} className="btn-primary">
                      Discuss Your CMS Requirement
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
