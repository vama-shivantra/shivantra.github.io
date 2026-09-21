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

const pageUrl = `${siteUrl}/solutions/ecommerce-websites`;

export const metadata: Metadata = {
  title: "Ecommerce & DTC Websites | Shivantra",
  description:
    "Ecommerce and DTC website development for product discovery, mobile shopping, checkout, analytics, CRM, fulfillment integrations and content.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Ecommerce & DTC Websites | Shivantra",
    description: "Ecommerce and DTC website development for product discovery, mobile shopping, checkout, analytics, CRM, fulfillment integrations and content.",
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
  { label: "Solutions", href: null },
  { label: "Ecommerce & DTC Websites", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Ecommerce & DTC Websites",
      serviceType: "Website Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Ecommerce and DTC website development for product discovery, mobile shopping, checkout, analytics, CRM, fulfillment integrations and content.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail
        .filter((crumb) => crumb.label !== "Solutions")
        .map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.label,
          item: `${siteUrl}${crumb.href ?? "/solutions/ecommerce-websites"}`,
        })),
    },
  ],
};

const balanceFactors = ["clear information", "credibility", "useful navigation", "mobile usability", "appropriate calls to action", "operational integration where it adds value"];

const commonProblems = [
  "Mobile shoppers dominate traffic",
  "Product discovery happens across social and AI-assisted channels",
  "Customers need trust around delivery/returns",
  "Catalogue data is inconsistent",
  "Marketing attribution and fulfillment are disconnected",
  "Site performance affects browsing and checkout",
];

const capabilities = [
  "Catalogue architecture",
  "Product detail pages",
  "Mobile commerce",
  "Search/filtering",
  "Checkout integration",
  "Reviews/UGC where genuine",
  "Analytics",
  "CRM/email",
  "Inventory/fulfillment integration",
  "Returns/shipping information",
  "Social campaign landing pages",
];

const contentTypes = [
  "Primary value proposition",
  "Key services/products/programs",
  "Audience or use-case information",
  "Proof and trust content",
  "People/locations where relevant",
  "Resources or FAQs",
  "Conversion/contact path",
  "Structured content that the team needs to update regularly",
];

const cmsContentTypes = ["Services/products", "Team", "Locations", "Resources", "Offers", "FAQs", "Documents", "Availability/status", "Campaign pages"];

const integrationCategories = ["CRM", "ERP", "Booking", "Analytics", "Marketing", "Payments", "Inventory", "APIs", "Email", "Custom business software"];

const qualityRequirements = ["Responsive layout", "Readable typography", "Usable forms", "Clear navigation", "Optimized media", "Semantic HTML", "Keyboard-accessible interactions", "Strong performance fundamentals"];

const processSteps = [
  { title: "Understand", description: "Define audience, business goals, content and operational requirements." },
  { title: "Structure", description: "Plan sitemap, content types and journeys." },
  { title: "Design", description: "Create a clear responsive interface around the content." },
  { title: "Develop", description: "Build reusable components and CMS structure." },
  { title: "Integrate", description: "Connect required business systems." },
  { title: "Test", description: "Review mobile, forms, content, accessibility fundamentals and performance." },
  { title: "Launch", description: "Deploy and validate the production experience." },
  { title: "Improve", description: "Use real usage and business feedback for future iteration." },
];

const faqs = [
  {
    id: "ecomm-from-scratch",
    question: "Do you build ecommerce from scratch?",
    answer: "We first evaluate established commerce platforms and APIs. Custom commerce is justified only when standard platforms cannot meet important requirements.",
    open: true,
  },
  {
    id: "ecomm-inventory-erp",
    question: "Can the store connect to inventory or ERP?",
    answer: "Yes, where the systems provide suitable APIs or integration methods.",
    open: false,
  },
  {
    id: "ecomm-social-commerce",
    question: "Can you support social-commerce campaigns?",
    answer: "Yes. Campaign-specific landing pages, attribution and product journeys can connect social discovery with the ecommerce site.",
    open: false,
  },
  {
    id: "ecomm-mobile-performance",
    question: "Is mobile performance important for ecommerce?",
    answer: "Yes. Current 2026 retail data shows mobile represents the majority of ecommerce traffic and orders in major markets, making mobile experience a core requirement.",
    open: false,
  },
];

const relatedServices = [
  { label: "Marketing & Analytics Integration", href: "/services/website-integrations/marketing-analytics" },
  { label: "Website Performance", href: "/services/website-performance" },
  { label: "API Integration", href: "/services/website-integrations/api" },
  { label: "Landing Page Development", href: "/services/website-development/landing-pages" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
];

function BreadcrumbNav() {
  return (
    <nav className="breadcrumb-nav mb-4" aria-label="Breadcrumb">
      <ol className="breadcrumb mb-0 d-flex">
        {breadcrumbTrail.map((crumb, index) => (
          <li key={crumb.label} className="breadcrumb-item d-flex align-items-center">
            {crumb.href ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : index === breadcrumbTrail.length - 1 ? (
              <span className="current" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <span className="breadcrumb-plain">{crumb.label}</span>
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

export default function EcommerceWebsites() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap ecommerce-websites-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Ecommerce & DTC Websites
                  </Tag>
                  <PageTitle>Ecommerce Websites Built Around Product Discovery and Buying</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A strong website for this market has to reflect how people actually discover,
                    evaluate and act. Shivantra plans the website around the information users
                    need, the actions the business needs them to take and the systems that may
                    need to work behind the interface.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?solution=ecommerce-websites`} className="btn-primary">
                      Discuss Your Ecommerce Website
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-bag-check"
                    caption="Discovery from social/search into product page, checkout and fulfillment"
                    cues={["Discovery", "Product", "Checkout", "Fulfillment"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="why-different">
            <Container>
              <SectionHeader tag="Why This Website Type Is Different" title="The website should match the way this audience makes decisions" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  Different industries create different questions. A good solution page should
                  not assume that the same homepage, five service cards and contact form are
                  enough for every business.
                </Description>
                <Description className="mb-0" aos="fade-up" delay={150}>
                  For this audience, the website needs to balance:
                </Description>
              </SectionHeader>
              <ChecklistList items={balanceFactors} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                The architecture should follow the real buying or user journey rather than an
                agency template.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="problems">
            <Container>
              <SectionHeader tag="Common Problems" title="Problems we typically design around" tight colClass="col-lg-9" />
              <ChecklistList items={commonProblems} />
              <Description className="mt-4 mb-0" aos="fade-up" delay={100}>
                These are not automatic assumptions for every client. Discovery should confirm
                which ones actually apply.
              </Description>
            </Container>
          </Section>

          <Section id="capabilities">
            <Container>
              <SectionHeader tag="What the Website Can Include" title="Capabilities shaped around the domain" tight colClass="col-lg-9" />
              <ChecklistList items={capabilities} />
              <Description className="mt-4 mb-0" aos="fade-up" delay={100}>
                The final scope should include only what supports a real user or operational
                requirement.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="content-architecture">
            <Container>
              <SectionHeader tag="Recommended Content Architecture" tight colClass="col-lg-9" />
              <ChecklistList items={contentTypes} />
              <div className="row mt-5">
                <div className="col-lg-7 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Discovery</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Relevant Information</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Proof / Detail</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Primary Action</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Business Workflow</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="content-management">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Content Management" title="Give the business control over the information that changes" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      The CMS should reflect what this organization needs to update regularly.
                      That may include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={cmsContentTypes} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Avoid unrestricted page-builder editing when structured fields and reusable
                    components will produce more consistent content.
                  </Description>
                  <Button href="/services/cms-development" className="btn-white-outline mt-2">
                    Explore CMS Development
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="integrations">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Integrations" title="Connect the website only where integration improves the process" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Potential integration categories include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationCategories} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    The project should define which system owns each important piece of data
                    before building synchronization.
                  </Description>
                  <Button href="/services/website-integrations" className="btn-white-outline mt-2">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="quality">
            <Container>
              <SectionHeader tag="Mobile, Performance and Accessibility" title="Design for the way this audience actually uses the website" tight colClass="col-lg-9" />
              <ChecklistList items={qualityRequirements} />
              <Description className="mt-4 mb-0" aos="fade-up" delay={100}>
                Where the domain serves a broad or higher-risk public audience, accessibility
                requirements should be defined explicitly.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Shivantra Project Approach" title="How we approach the project" />
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
                  <div className="accordion custom-accordion" id="ecommerce-websites-faq-accordion">
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
                  <SectionTitle>Build the website around the way your customers actually decide</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can map the content, user journey and system requirements before choosing
                    the implementation.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?solution=ecommerce-websites`} className="btn-primary">
                      Discuss Your Ecommerce Website
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
