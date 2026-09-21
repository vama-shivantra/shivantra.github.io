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

const pageUrl = `${siteUrl}/services/website-development`;

export const metadata: Metadata = {
  title: "Website Development Services | Shivantra",
  description:
    "Website development for businesses that need a fast, reliable and easy-to-manage website. Strategy, design, development, CMS, integrations and support.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Development Services | Shivantra",
    description:
      "We design and develop websites around your business, audience and workflows, from company websites and landing pages to custom functionality and integrations.",
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
  { label: "Website Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Development",
      serviceType: "Website Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website development services covering strategy, design, development, CMS, integrations and ongoing support.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-development"}`,
      })),
    },
  ],
};

const services = [
  {
    icon: "bi-building",
    title: "Business Website Development",
    description:
      "Professional websites for businesses that need a clear and credible online presence. We structure your services, company information, capabilities and calls to action so prospective customers can quickly understand who you are, what you offer and how to reach you.",
    cta: "Explore Business Websites",
    href: "/services/website-development/business-websites",
  },
  {
    icon: "bi-sliders",
    title: "Custom Website Development",
    description:
      "For requirements that go beyond a standard company website. We build websites with custom functionality, data, workflows, calculators, directories, forms, integrations and other features designed around how your business needs to operate.",
    cta: "Explore Custom Websites",
    href: "/services/website-development/custom-websites",
  },
  {
    icon: "bi-diagram-3",
    title: "Corporate Website Development",
    description:
      "Structured websites for established and growing organizations with larger content, branding and operational requirements. From multiple services and departments to locations, languages, integrations and content-management requirements, we build a foundation that can evolve with the organization.",
    cta: "Explore Corporate Websites",
    href: "/services/website-development/corporate-websites",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Website Redesign",
    description:
      "For businesses with an existing website that needs meaningful improvement. We redesign structure, content experience, design, CMS, performance and technology while accounting for the pages, URLs and systems the existing website already depends on.",
    cta: "Explore Website Redesign",
    href: "/services/website-development/website-redesign",
  },
  {
    icon: "bi-bullseye",
    title: "Landing Page Development",
    description:
      "Focused pages for advertising campaigns, services, launches and lead-generation initiatives. We align the page with the campaign message and create a clear journey from the visitor's first click to the action you want them to take.",
    cta: "Explore Landing Pages",
    href: "/services/website-development/landing-pages",
  },
];

const builtForUsers = [
  {
    icon: "bi-signpost-split",
    title: "Clear to navigate",
    description:
      "Visitors should be able to understand where they are, where to go next and how to find important information without learning how your website works.",
  },
  {
    icon: "bi-phone",
    title: "Responsive by design",
    description:
      "Layouts, typography, navigation and interactions are considered across screen sizes as part of development, not treated as a desktop design adjusted at the end.",
  },
  {
    icon: "bi-layout-text-window",
    title: "Easy to manage",
    description:
      "Your team should not need a developer every time a paragraph, image, service or page needs updating. We structure the CMS around the people who will actually maintain it.",
  },
  {
    icon: "bi-search",
    title: "Search-ready from the foundation",
    description:
      "Page structure, semantic markup, metadata, crawlability, URLs, internal linking, responsive implementation and performance are part of the technical foundation.",
  },
  {
    icon: "bi-universal-access",
    title: "Designed with accessibility in mind",
    description:
      "We consider semantic structure, keyboard interaction, readable content, forms, contrast, focus states and other accessibility fundamentals throughout.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Ready to evolve",
    description:
      "Businesses change. We build reusable structures and components so the website can continue evolving rather than requiring a rebuild every time something changes.",
  },
];

const integrationSystems = [
  "CRM platforms",
  "ERP systems",
  "Email and marketing platforms",
  "Analytics and tracking tools",
  "Booking systems",
  "Payment providers",
  "Customer or partner portals",
  "Third-party APIs",
  "Custom business applications",
];

const processSteps = [
  {
    title: "Understand",
    description:
      "We begin with the business rather than the design: what the website needs to accomplish, who will use it, what actions visitors should be able to take, who will maintain it and whether it needs to work with existing systems.",
  },
  {
    title: "Structure",
    description:
      "We organize the website around the information visitors need and the journeys they are likely to take: sitemap, page hierarchy, navigation, content requirements, CMS structure and integration requirements.",
  },
  {
    title: "Design",
    description:
      "We create the visual experience around your brand and content. The design establishes hierarchy, makes information easier to consume and guides visitors toward relevant actions, with responsive behaviour considered from the beginning.",
  },
  {
    title: "Develop",
    description:
      "We turn the approved experience into a production website: frontend development, CMS implementation, custom functionality, integrations, forms, analytics and structured content as the project requires.",
  },
  {
    title: "Test",
    description:
      "Before launch we review responsive behaviour, browsers and devices, links, forms, CMS functionality, integrations, content, metadata, accessibility fundamentals, performance, analytics and redirects.",
  },
  {
    title: "Launch and support",
    description:
      "We prepare the production environment, complete launch checks and make the website available. Where relevant, we also provide CMS handover, documentation and ongoing maintenance.",
  },
];

const scopeGroups = [
  {
    title: "Strategy & Structure",
    items: ["Requirements discovery", "Sitemap planning", "Information architecture", "User journeys", "Content planning"],
  },
  {
    title: "UI & Responsive Design",
    items: ["Page layouts", "Design system", "Reusable components", "Responsive behaviour", "Interaction design"],
  },
  {
    title: "Development",
    items: ["Frontend development", "CMS implementation", "Reusable page components", "Custom functionality", "Forms"],
  },
  {
    title: "Integrations",
    items: ["CRM connection", "APIs", "Analytics", "Marketing platforms", "Third-party services"],
  },
  {
    title: "Technical Foundations",
    items: ["Semantic HTML", "Metadata", "Sitemap setup", "Redirects", "Responsive implementation", "Performance optimization", "Accessibility fundamentals"],
  },
  {
    title: "Launch & Handover",
    items: ["Pre-launch QA", "Production deployment", "CMS training where required", "Documentation", "Post-launch support"],
  },
];

const solutions = [
  {
    icon: "bi-shop",
    title: "Small and growing businesses",
    description: "For businesses that need to establish or improve a professional online presence without unnecessary complexity.",
    cta: "Websites for Small Businesses",
    href: "/solutions/small-business-websites",
  },
  {
    icon: "bi-briefcase",
    title: "B2B businesses",
    description: "For companies where the website needs to explain capabilities clearly, support longer buying journeys and generate qualified enquiries.",
    cta: "B2B Websites",
    href: "/solutions/b2b-websites",
  },
  {
    icon: "bi-person-badge",
    title: "Professional services",
    description: "For consultants, practices and service organizations where credibility, expertise and clear service information matter.",
    cta: "Professional Services Websites",
    href: "/solutions/professional-services-websites",
  },
  {
    icon: "bi-rocket-takeoff",
    title: "Startups",
    description: "For businesses that need to explain a new product or service clearly and evolve their website as the company changes.",
    cta: "Startup Websites",
    href: "/solutions/startup-websites",
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Manufacturing companies",
    description: "For manufacturers that need to present products, capabilities, industries, technical information and enquiry paths clearly.",
    cta: "Manufacturing Websites",
    href: "/solutions/manufacturing-websites",
  },
  {
    icon: "bi-heart-pulse",
    title: "Healthcare organizations and professionals",
    description: "For healthcare websites where clear information, accessibility, trust and an easy path to contact or appointments are especially important.",
    cta: "Healthcare Websites",
    href: "/solutions/healthcare-websites",
  },
];

const faqs = [
  {
    id: "webdev-types",
    question: "What type of websites does Shivantra develop?",
    answer:
      "We develop business websites, corporate websites, custom websites and campaign landing pages. We also handle CMS development, website integrations, performance work and ongoing maintenance where required. The appropriate approach depends on the purpose and complexity of the website.",
    open: true,
  },
  {
    id: "webdev-redesign",
    question: "Can you redesign our existing website?",
    answer:
      "Yes. A redesign can range from improving the visual experience to restructuring the content, changing the CMS, rebuilding the frontend, improving performance or migrating the website to a different technology. We first assess what is worth keeping and what needs to change rather than assuming everything must be rebuilt.",
    open: false,
  },
  {
    id: "webdev-self-edit",
    question: "Will we be able to update the website ourselves?",
    answer:
      "If your team needs to manage content regularly, we can implement an appropriate content-management system and structure it around those editing requirements, so common updates do not require development work while protecting the parts that should stay controlled.",
    open: false,
  },
  {
    id: "webdev-design",
    question: "Do you provide website design as well as development?",
    answer:
      "Yes. A complete project can include requirements, sitemap and information architecture, UI design, responsive design, development, CMS implementation, testing and launch. If you already have designs or work with another design team, we can also handle development separately.",
    open: false,
  },
  {
    id: "webdev-seo",
    question: "Do you make websites SEO-friendly?",
    answer:
      "We build the technical foundations that help search engines discover and understand a website: semantic page structure, metadata support, crawlable navigation, clean URLs, internal links, sitemaps, redirects, responsive development and performance considerations. Search performance also depends on content, competition, authority and ongoing SEO work, so website development alone should not be treated as a guarantee of rankings.",
    open: false,
  },
  {
    id: "webdev-timeline",
    question: "How long does a website take to develop?",
    answer:
      "The timeline depends on the size of the website, content readiness, design requirements, CMS, integrations, custom functionality and the review process. A focused business website and a large corporate website should not have the same project plan. We define the expected phases and timeline after understanding the scope.",
    open: false,
  },
  {
    id: "webdev-cost",
    question: "How much does website development cost?",
    answer:
      "Website cost depends on what has to be designed and built. Page count alone is not a reliable measure - two websites with the same number of pages can have very different requirements for design, CMS functionality, content structures, integrations and custom development. We scope the project around the actual requirements before proposing the cost.",
    open: false,
  },
  {
    id: "webdev-crm",
    question: "Can you connect the website with our CRM or other business software?",
    answer:
      "Yes. We can integrate websites with CRMs, ERP systems, email platforms, analytics tools, payment providers, third-party services and custom applications where APIs or other suitable integration methods are available. Integration requirements are defined separately because they vary significantly between systems and workflows.",
    open: false,
  },
  {
    id: "webdev-support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. Website maintenance and support can cover technical updates, fixes, monitoring, content assistance, new pages, performance improvements and ongoing development depending on the support arrangement.",
    open: false,
  },
];

const relatedServices = [
  { label: "Business Website Development", href: "/services/website-development/business-websites" },
  { label: "Custom Website Development", href: "/services/website-development/custom-websites" },
  { label: "Corporate Website Development", href: "/services/website-development/corporate-websites" },
  { label: "Landing Page Development", href: "/services/website-development/landing-pages" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "Website Maintenance & Support", href: "/services/website-maintenance" },
  { label: "Small Business Websites", href: "/solutions/small-business-websites" },
  { label: "B2B Websites", href: "/solutions/b2b-websites" },
  { label: "Professional Services Websites", href: "/solutions/professional-services-websites" },
  { label: "Startup Websites", href: "/solutions/startup-websites" },
  { label: "Manufacturing Websites", href: "/solutions/manufacturing-websites" },
  { label: "Healthcare Websites", href: "/solutions/healthcare-websites" },
  { label: "Ecommerce & DTC Websites", href: "/solutions/ecommerce-websites" },
  { label: "Dropshipping Product Websites", href: "/solutions/dropshipping-websites" },
  { label: "Social Commerce & Creator-Led Brand Websites", href: "/solutions/social-commerce-websites" },
  { label: "SaaS & Software Product Websites", href: "/solutions/saas-websites" },
  { label: "Real Estate Websites", href: "/solutions/real-estate-websites" },
  { label: "Restaurant & Food Brand Websites", href: "/solutions/restaurant-websites" },
  { label: "Education & Coaching Websites", href: "/solutions/education-coaching-websites" },
  { label: "Local Service Business Websites", href: "/solutions/local-service-business-websites" },
  { label: "Hospitality Websites", href: "/solutions/hospitality-websites" },
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

export default function WebsiteDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap webdev-pillar-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Website Development
                  </Tag>
                  <PageTitle>Website Development Built Around Your Business</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Your website should make it easy for people to understand your business, find
                    what they need and take the next step. Shivantra designs and develops websites
                    around your audience, content and business requirements, from focused business
                    websites and landing pages to corporate websites, custom functionality and
                    connected digital experiences.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=website-development`} className="btn-primary">
                      Discuss Your Website
                    </Button>
                    <Button href="#website-development-services" className="btn-white-outline">
                      Explore Services
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-window"
                    caption="Website connected with content, analytics and business systems"
                    cues={["CRM", "Analytics", "CMS", "API", "ERP"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="introduction">
            <Container>
              <SectionHeader tag="Introduction" title="A website should do more than look good" colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  A good website brings together clear information, thoughtful design and reliable
                  technology. It should represent your business accurately, work well across
                  devices, give visitors a clear path through your content and make routine
                  updates manageable for your team.
                </Description>
                <Description aos="fade-up" delay={150}>
                  And when the requirement goes beyond pages and forms, the website should be able
                  to connect with the systems your business already uses.
                </Description>
                <Description aos="fade-up" delay={200} className="mb-0">
                  That is how we approach website development at Shivantra. We start with what
                  the website needs to accomplish, then determine the structure, experience and
                  technology needed to support it.
                </Description>
              </SectionHeader>
            </Container>
          </Section>

          <Section className="section-muted" id="website-development-services">
            <Container>
              <SectionHeader tag="Website Development Services" title="Website Development Services" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Different websites solve different problems. We do not approach every project
                  with the same template or technology.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {services.map((service, index) => (
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

          <Section id="built-for-users">
            <Container>
              <SectionHeader tag="Built for real users" title="Built for the people who use it" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  The success of a website is not determined by how impressive it looks in a
                  presentation. It is determined by what happens when real people use it.
                </Description>
              </SectionHeader>
              <div className="row g-4 mb-4">
                {builtForUsers.map((item, index) => (
                  <InfoCard key={item.title} {...item} delay={String((index % 3) * 100)} />
                ))}
              </div>
              <PlaceholderVisual
                icon="bi-phone"
                caption="Responsive website layout across desktop, tablet and mobile"
                cues={["Desktop", "Tablet", "Mobile"]}
              />
            </Container>
          </Section>

          <Section className="section-muted" id="integrations">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                  <SectionHeader
                    tag="Website Integrations"
                    title="Your website does not have to be an isolated system"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A website often sits at the beginning of a larger business process. Someone
                      submits an enquiry. Then what? The information may need to reach your CRM,
                      notify a salesperson, trigger an email, create a record in another
                      application, feed an analytics platform or start an internal workflow.
                    </Description>
                  </SectionHeader>
                  <Description aos="fade-up" delay={150}>
                    Shivantra is a software consultancy and development company, so we can look
                    beyond the website itself when the project requires it. We can connect
                    websites with systems such as:
                  </Description>
                  <ChecklistList items={integrationSystems} tight />
                  <Description className="mt-4" aos="fade-up" delay={200}>
                    The goal is not to add integrations for the sake of complexity. It is to avoid
                    creating another disconnected tool that your team has to manage manually.
                  </Description>
                  <Button href="/services/website-integrations" className="btn-white-outline mt-2">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="flow-card flow-card--lg w-100" data-aos="fade-up" data-aos-delay="200">
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
                      <span className="flow-step">APIs</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      A website enquiry can flow directly into the systems your business already
                      uses
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we approach website development" />
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
              <Description className="mt-4 mb-2" aos="fade-up" delay={100}>
                Where relevant, we also provide CMS handover, documentation and ongoing website
                maintenance so your team knows what happens after launch.
              </Description>
              <Button href="/services/website-maintenance" className="btn-white-outline">
                Explore Website Maintenance &amp; Support
                <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
              </Button>
            </Container>
          </Section>

          <Section className="section-muted" id="technology">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-7">
                  <SectionHeader tag="Technology" title="Technology should fit the requirement" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      There is no single platform that is right for every website. A straightforward
                      business website has very different requirements from a multilingual corporate
                      website, a content-heavy publication or a website with custom business
                      functionality. Depending on the project, we can work with modern frontend
                      frameworks, traditional or headless content-management systems, APIs and
                      custom backend services.
                    </Description>
                  </SectionHeader>
                  <div className="quote-block" data-aos="fade-up" data-aos-delay="150">
                    <p className="mb-0">&ldquo;What does the business need the website to do, who needs to manage it and what will it need to become later?&rdquo;</p>
                  </div>
                  <Description aos="fade-up" delay={200}>
                    Once those questions are clear, the technology decision becomes much easier.
                  </Description>
                  <Button href="/services/cms-development" className="btn-white-outline mt-2">
                    Explore CMS Development
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="flow-card w-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Website</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <div className="flow-branches">
                      <span className="flow-step">CMS</span>
                      <span className="flow-step">Headless CMS</span>
                      <span className="flow-step">Custom Frontend</span>
                      <span className="flow-step">API</span>
                      <span className="flow-step">Backend</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Website architecture options based on business requirements
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="project-scope">
            <Container>
              <SectionHeader tag="Project scope" title="What your website project can include" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  The exact scope depends on your requirements, but a website-development
                  engagement may include:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {scopeGroups.map((group, index) => (
                  <div className="col-md-6 col-lg-4" key={group.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="include-card">
                      <CardTitle className="fs-6 mb-3">{group.title}</CardTitle>
                      <ChecklistList items={group.items} tight />
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-4 mb-0" aos="fade-up" delay={100}>
                Nothing should be included simply because it appears on a standard agency
                checklist. The scope should reflect what your website actually requires.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="solutions">
            <Container>
              <SectionHeader tag="Solutions" title="Websites for different stages of business" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  We work with organizations whose website needs can be very different.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {solutions.map((solution, index) => (
                  <div className="col-md-6 col-lg-4" key={solution.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="solution-card">
                      <span className="icon-badge">
                        <i className={`bi ${solution.icon}`} aria-hidden="true"></i>
                      </span>
                      <CardTitle className="fs-6 mb-2">{solution.title}</CardTitle>
                      <Description>{solution.description}</Description>
                      <Link href={solution.href} className="fw-semibold text-decoration-none">
                        {solution.cta}
                        <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                      </Link>
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
                  <div className="accordion custom-accordion" id="webdev-pillar-faq-accordion">
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
                  <SectionTitle>Have a website project in mind?</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Whether you are building your first serious business website, replacing one
                    that no longer works for you or planning something with more complex
                    functionality, the best place to start is with the requirement. Tell us what
                    you are trying to achieve and we will help you determine what the website
                    actually needs.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=website-development`} className="btn-primary">
                      Discuss Your Website
                    </Button>
                    <Button href={`${basePath}/website-audit/`} className="btn-white-outline">
                      Request a Website Audit
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
