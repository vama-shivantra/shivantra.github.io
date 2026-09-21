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

const pageUrl = `${siteUrl}/services/website-development/business-websites`;

export const metadata: Metadata = {
  title: "Business Website Development Services | Shivantra",
  description:
    "Business website development for companies that need a professional, fast and easy-to-manage website built around their services, audience and goals.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Business Website Development | Shivantra",
    description:
      "Professional business websites structured around your services, audience, content and the actions you want customers to take.",
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
  { label: "Business Website Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Business Website Development",
      serviceType: "Business Website Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Business website development for companies that need a professional, fast and easy-to-manage website built around their services, audience and goals.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-development/business-websites"}`,
      })),
    },
  ],
};

const jobsToDo = [
  {
    icon: "bi-chat-square-text",
    title: "Explain your business clearly",
    description:
      "Visitors should be able to understand your services, products or capabilities without decoding internal terminology.",
  },
  {
    icon: "bi-shield-check",
    title: "Build confidence",
    description:
      "Clear company information, genuine work, people, capabilities, certifications, locations and contact details can all contribute to trust.",
  },
  {
    icon: "bi-signpost-split",
    title: "Guide people toward the next step",
    description:
      "Calls to action should follow the visitor journey rather than being added randomly across every section.",
  },
  {
    icon: "bi-phone",
    title: "Work properly on every screen",
    description:
      "Content, navigation, forms and calls to action should remain clear and usable across devices.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Stay easy to update",
    description:
      "Where your team needs regular control, we structure the content management experience so routine updates do not require a developer.",
  },
  {
    icon: "bi-search",
    title: "Give search engines a clear technical foundation",
    description:
      "Semantic structure, descriptive metadata, clean URLs, crawlable navigation, sitemaps and performance-conscious development.",
  },
];

const websiteTypes = [
  {
    icon: "bi-building",
    title: "Company websites",
    description: "Clear, professional websites for businesses that need to establish or improve their online presence.",
    items: ["Company overview", "Services", "Industries", "Locations", "Team", "Contact", "Case studies", "Insights"],
  },
  {
    icon: "bi-grid-1x2",
    title: "Service-led websites",
    description:
      "For businesses where customers primarily search, compare and enquire based on individual services. We structure services so each important offering has enough information to stand on its own.",
    items: [],
  },
  {
    icon: "bi-briefcase",
    title: "B2B websites",
    description: "For companies where the buying process is longer and visitors need more context before contacting sales.",
    items: ["Capabilities", "Sectors", "Technical information", "Cases", "Downloadable material", "Sales system integration"],
  },
  {
    icon: "bi-geo-alt",
    title: "Multi-location websites",
    description:
      "For organizations with multiple offices, branches, clinics, stores or service areas. Visitors can find the relevant team, service or contact path without duplicating the entire website.",
    items: [],
  },
  {
    icon: "bi-collection",
    title: "Catalogue and information websites",
    description:
      "For businesses that need to present products, equipment, solutions or structured information without necessarily operating full ecommerce.",
    items: [],
  },
  {
    icon: "bi-bullseye",
    title: "Lead-generation websites",
    description:
      "For businesses where the website is a key enquiry channel. Forms, calls to action, tracking and CRM connections can be designed around the actual lead process.",
    items: [],
  },
];

const includeCategories = [
  {
    title: "Core business content",
    items: ["Homepage", "About / company information", "Services or solutions", "Industries served", "Locations", "Team profiles", "Contact information"],
  },
  {
    title: "Credibility content",
    items: ["Case studies", "Client work", "Certifications", "Partnerships", "Testimonials where genuine", "Process", "Company history", "FAQs"],
  },
  {
    title: "Content management",
    items: ["CMS", "Reusable sections", "Team editing", "Image / media management", "Article or insight publishing", "Structured service content"],
  },
  {
    title: "Lead generation",
    items: ["Enquiry forms", "Quotation forms", "Consultation requests", "Call and WhatsApp actions", "Lead routing", "Thank-you flows"],
  },
  {
    title: "Search and analytics foundations",
    items: ["Metadata", "Sitemap", "Semantic page structure", "Analytics", "Conversion tracking", "Search Console setup", "Redirect handling"],
  },
  {
    title: "Integrations",
    items: ["CRM", "Email platforms", "Analytics", "ERP", "Booking", "Maps", "APIs", "Custom applications"],
  },
];

const architectureItems = [
  "Sitemap",
  "Primary navigation",
  "Service hierarchy",
  "Content types",
  "User journeys",
  "Page purpose",
  "Calls to action",
  "CMS requirements",
  "Integration requirements",
];

const cmsConsiderations = [
  "Which content should be editable",
  "Which fields should be structured",
  "Who should have access",
  "Which layouts should remain protected",
  "How reusable content should work",
  "How editors will preview and publish updates",
];

const integrationOutcomes = [
  "Create a lead in your CRM",
  "Capture campaign source",
  "Notify the appropriate salesperson",
  "Send an acknowledgement",
  "Start a follow-up workflow",
  "Create data in another business application",
];

const processSteps = [
  { title: "Understand the business", description: "We learn what your company offers, who the website is for, what visitors need to understand and what actions matter." },
  { title: "Plan the structure", description: "We define pages, navigation, content hierarchy, calls to action and CMS requirements." },
  { title: "Design the experience", description: "We create layouts around your brand and content, with responsive behaviour considered from the beginning." },
  { title: "Develop the website", description: "We build the approved experience, implement the CMS and connect required forms, analytics and integrations." },
  { title: "Review and test", description: "We test the site across relevant devices and browsers and review content, forms, links, metadata, performance and accessibility fundamentals." },
  { title: "Launch and hand over", description: "We deploy the website, complete launch checks and provide the agreed CMS handover or ongoing support." },
];

const audienceFit = [
  "your company needs a credible professional website",
  "your existing site no longer represents the business",
  "your services are difficult to understand online",
  "the site is hard for your team to update",
  "mobile experience is poor",
  "enquiries are handled through disconnected forms or inboxes",
  "you are still relying mainly on social profiles or directories",
  "you want a solid foundation before investing more heavily in campaigns or SEO",
];

const faqs = [
  {
    id: "biz-page-count",
    question: "How many pages does a business website need?",
    answer:
      "There is no ideal page count. A small company with three focused services may need far fewer pages than a manufacturer with multiple product groups, industries and locations. We determine page requirements from the information visitors need and the search or customer journeys the website needs to support.",
    open: true,
  },
  {
    id: "biz-content",
    question: "Can you write the website content?",
    answer:
      "Content support can be included depending on the engagement. We can help structure the information, identify missing content and prepare or refine website copy where agreed. Subject-matter accuracy should be reviewed by the client.",
    open: false,
  },
  {
    id: "biz-team-edit",
    question: "Can our team edit the website after launch?",
    answer: "Yes, where content management is part of the scope. We define which content your team needs to manage and configure the CMS accordingly.",
    open: false,
  },
  {
    id: "biz-redesign",
    question: "Can you redesign our existing business website?",
    answer: "Yes. Existing content, URLs, analytics and search performance should be reviewed before deciding what to retain, improve, consolidate or replace.",
    open: false,
  },
  {
    id: "biz-responsive",
    question: "Will the website be mobile responsive?",
    answer: "Yes. Responsive behaviour is part of the design and development process, not a separate add-on.",
    open: false,
  },
  {
    id: "biz-seo",
    question: "Do you provide SEO?",
    answer:
      "We build the technical and structural foundations that support search visibility. Broader SEO work such as keyword strategy, ongoing content, authority building and continuous optimization may be scoped separately.",
    open: false,
  },
  {
    id: "biz-crm",
    question: "Can the website connect to our CRM?",
    answer:
      "Yes, where the CRM provides a suitable integration method. We can connect forms and workflows to CRM, ERP, email, analytics and other systems depending on project requirements.",
    open: false,
  },
  {
    id: "biz-maintenance",
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Ongoing support can cover updates, fixes, monitoring, content assistance, enhancements and technical maintenance depending on the support arrangement.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Custom Website Development", href: "/services/website-development/custom-websites" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
  { label: "Small Business Websites", href: "/solutions/small-business-websites" },
  { label: "B2B Websites", href: "/solutions/b2b-websites" },
  { label: "Professional Services Websites", href: "/solutions/professional-services-websites" },
  { label: "Manufacturing Websites", href: "/solutions/manufacturing-websites" },
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

function TypeCard({ type, delay }: { type: (typeof websiteTypes)[number]; delay: string }) {
  return (
    <div className="type-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="type-card">
        <span className="icon-badge d-inline-flex align-items-center justify-content-center mb-3">
          <i className={`bi ${type.icon}`} aria-hidden="true" style={{ fontSize: 22, color: "var(--bs-primary)" }}></i>
        </span>
        <CardTitle className="fs-5 mb-2">{type.title}</CardTitle>
        <Description className={type.items.length ? "" : "mb-0"}>{type.description}</Description>
        {type.items.length > 0 && <ChecklistList items={type.items} tight />}
      </div>
    </div>
  );
}

// True per-item masonry (à la Pinterest) needs measured render heights, which
// a static server-rendered page doesn't have. Estimating each card's height
// from its actual content (description length + list items) and greedily
// placing each card into whichever column is currently shortest gets the
// same result deterministically at build time, with no client-side layout
// pass or reflow.
function estimateCardHeight(type: (typeof websiteTypes)[number]) {
  const base = 190;
  const descriptionLines = Math.ceil(type.description.length / 42);
  return base + descriptionLines * 26 + type.items.length * 34;
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

const websiteTypeColumns = distributeIntoColumns(websiteTypes, estimateCardHeight, 2);

export default function BusinessWebsiteDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap business-website-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Business Website Development
                  </Tag>
                  <PageTitle>Business Websites That Make Your Company Easier to Understand</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A professional website should help a potential customer understand your
                    business without making them work for the information. Shivantra designs and
                    develops business websites around your services, audience and goals, giving
                    your company a clear, credible and manageable online presence.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=business-website-development`} className="btn-primary">
                      Discuss Your Website
                    </Button>
                    <Button href="#what-your-website-can-include" className="btn-white-outline">
                      See What a Business Website Can Include
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-window"
                    caption="Structured business website with services, company information and enquiry path"
                    cues={["Navigation", "Services", "Company info", "Enquiry CTA", "Trust content"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="context">
            <Container>
              <SectionHeader tag="Why this matters" colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  A customer may hear your company name from a referral, see it in an
                  advertisement, find you on Google or receive it from a colleague. One of the
                  first things they are likely to do is look for your website. What they find
                  should make the next step easier.
                </Description>
                <Description aos="fade-up" delay={150}>
                  A useful business website should explain what your company does, who it serves,
                  what makes the offering relevant and how someone can contact or engage with you.
                  It should also reflect the business as it exists today, not the version of it
                  from five years ago.
                </Description>
                <Description aos="fade-up" delay={200} className="mb-0">
                  That is why we treat business website development as an information and
                  business problem first, and a design problem second.
                </Description>
              </SectionHeader>
            </Container>
          </Section>

          <Section className="section-muted" id="jobs-to-do">
            <Container>
              <SectionHeader tag="What a business website needs to do" title="A good business website has a job to do" />
              <div className="row g-4">
                {jobsToDo.map((job, index) => (
                  <InfoCard key={job.title} {...job} delay={String((index % 3) * 100)} />
                ))}
              </div>
            </Container>
          </Section>

          <Section id="what-we-build">
            <Container>
              <SectionHeader tag="What we build" title="Business websites for different requirements" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Not every company needs the same website.
                </Description>
              </SectionHeader>
              {/* Desktop/tablet: masonry-balanced columns so a long card in one
                  column doesn't leave a gap next to a short one. */}
              <div className="type-grid d-none d-md-flex">
                {websiteTypeColumns.map((column, columnIndex) => (
                  <div className="type-col" key={columnIndex}>
                    {column.map((type) => (
                      <TypeCard key={type.title} type={type} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              {/* Mobile: a single natural-order column instead of the
                  column-balanced order above. */}
              <div className="type-grid d-flex d-md-none">
                <div className="type-col">
                  {websiteTypes.map((type, index) => (
                    <TypeCard key={type.title} type={type} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="architecture">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                  <SectionHeader tag="Website structure" title="The structure matters before the visual design" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A website can look polished and still be difficult to use. Before designing
                      pages, we define what information belongs on the site and how it should be
                      organized. This can include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={architectureItems} />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    The objective is simple: visitors should not have to understand your internal
                    business structure before they can find what they need.
                  </Description>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="flow-card w-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Home</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">About</span>
                      <span className="flow-step">Services</span>
                      <span className="flow-step">Industries</span>
                      <span className="flow-step">Work</span>
                      <span className="flow-step">Insights</span>
                      <span className="flow-step">Contact</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Example information architecture for a business website
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="what-your-website-can-include">
            <Container>
              <SectionHeader tag="What your website can include" title="What your business website can include" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  The scope should match what your business actually needs.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {includeCategories.map((category, index) => (
                  <div className="col-md-6 col-lg-4" key={category.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="include-card">
                      <CardTitle className="fs-6 mb-3">{category.title}</CardTitle>
                      <ChecklistList items={category.items} tight />
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-4 mb-0" aos="fade-up" delay={100}>
                When the audience requires it, the site can also be designed with multiple
                languages and localized content in mind from the beginning.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="cms">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-7">
                  <SectionHeader
                    tag="CMS"
                    title="Keep your website current without depending on a developer for every edit"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Business websites change. You may introduce a new service, change a phone
                      number, add a team member, publish an article or update a capability. Where
                      regular editing is expected, we implement a CMS that gives your team
                      appropriate control over content.
                    </Description>
                  </SectionHeader>
                  <Description aos="fade-up" delay={150} className="fw-semibold mb-2">
                    We think about:
                  </Description>
                  <ChecklistList items={cmsConsiderations} />
                  <Description className="mt-4" aos="fade-up" delay={200}>
                    The goal is not to give every user unlimited page-builder control. It is to
                    make common changes easy while keeping the website consistent.
                  </Description>
                  <Button href="/services/cms-development" className="btn-white-outline mt-2">
                    Explore CMS Development
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="flow-card w-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-layout-text-window" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Content Editor</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">Structured Fields</span>
                      <span className="flow-step">Editor Access</span>
                      <span className="flow-step">Reusable Sections</span>
                      <span className="flow-step">Preview &amp; Publish</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Structured, editable content without unlimited page-builder control
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="integrations">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                  <SectionHeader
                    tag="Connected when needed"
                    title="A simple website can still connect with the rest of your business"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A contact form does not have to end in a shared email inbox. Depending on your
                      process, a website enquiry can:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationOutcomes} />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Shivantra&apos;s software-development background allows us to handle these
                    requirements when they add real value.
                  </Description>
                  <Button href="/services/website-integrations" className="btn-white-outline mt-2">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="flow-card w-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-signpost-split" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Visitor</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Website Form</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">CRM</span>
                    <div className="flow-branches">
                      <span className="flow-step">Assign Salesperson</span>
                      <span className="flow-step">Email Confirmation</span>
                      <span className="flow-step">Follow-up Workflow</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      A website enquiry can route straight into your CRM and follow-up process
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Process" title="How we build a business website" />
              <div className="row g-4">
                {processSteps.map((step, index) => (
                  <div className="col-md-6 col-lg-4" key={step.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
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

          <Section id="audience-fit">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Who this is for" title="Is this the right type of website for your business?" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="fw-semibold mb-0">
                      Business Website Development is a strong fit when:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={audienceFit} />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    If your requirement involves substantial custom workflows, account areas,
                    calculators, data or application-like functionality, our{" "}
                    <strong>Custom Website Development</strong> service may be a better fit.
                  </Description>
                  <Button href="/services/website-development/custom-websites" className="btn-white-outline mt-2">
                    Explore Custom Website Development
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
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
                  <div className="accordion custom-accordion" id="business-website-faq-accordion">
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
                  <SectionTitle>Give your business a website that reflects where it is today</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Whether you are replacing an outdated site or creating a professional web
                    presence for the first time, we can help you define what the website needs
                    before deciding how it should look.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=business-website-development`} className="btn-primary">
                      Discuss Your Business Website
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
