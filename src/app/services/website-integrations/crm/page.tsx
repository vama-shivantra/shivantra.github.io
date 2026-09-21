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

const pageUrl = `${siteUrl}/services/website-integrations/crm`;

export const metadata: Metadata = {
  title: "Website CRM Integration Services | Shivantra",
  description:
    "Connect website forms and lead journeys directly with your CRM. Capture source data, create or update records, route leads and trigger follow-up workflows.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "CRM Integration for Websites | Shivantra",
    description: "Connect forms, campaign data and website lead journeys with your CRM and follow-up process.",
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
  { label: "CRM Integration", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "CRM Integration",
      serviceType: "CRM Integration",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Connect website forms and lead journeys directly with your CRM. Capture source data, create or update records, route leads and trigger follow-up workflows.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-integrations/crm"}`,
      })),
    },
  ],
};

const emailOnlyProblems = ["duplicate entry", "missing source data", "delayed follow-up", "unclear ownership", "inconsistent records", "limited reporting"];

const capturedData = [
  { title: "Contact information", description: "", items: ["Name", "Email", "Phone"] },
  { title: "Company information", description: "", items: ["Company", "Industry", "Team size", "Location"] },
  { title: "Enquiry context", description: "", items: ["Selected service", "Requested product", "Message", "Budget range", "Preferred time"] },
  { title: "Campaign context", description: "", items: ["UTM source", "UTM medium", "UTM campaign", "Landing page", "Referrer", "Advertising click identifiers where applicable"] },
  { title: "Consent information", description: "Where required by the implementation:", items: ["Consent status", "Consent text/version", "Timestamp"] },
  { title: "Qualification data", description: "Structured responses can help route or prioritize enquiries.", items: [] as string[] },
];

const leadWorkflowSteps = [
  "Receive the website submission",
  "Find an existing contact",
  "Create or update the record",
  "Create a lead/deal/opportunity",
  "Preserve campaign information",
  "Assign the lead",
  "Notify sales",
  "Send the visitor a confirmation",
  "Trigger follow-up tasks",
];

const submissionScenarios = ["several forms", "a new enquiry months later", "a different campaign form", "the same email with updated information"];

const dedupeKeys = ["email", "phone", "CRM identifier", "company/domain", "combination rules"];

const routingFactors = ["location", "service", "product", "account ownership", "language", "industry", "franchise", "territory"];

const routingLayers = ["by the website integration", "by CRM workflow", "by an automation platform"];

const attributionData = ["UTM values", "original landing page", "referrer", "advertising platform identifiers", "first/last-touch fields depending on the chosen attribution model"];

const closedLoopOutcomes = ["qualified", "meeting completed", "opportunity created", "deal won"];

const crmPatterns = [
  { icon: "bi-person-plus", title: "Basic form to CRM", description: "Create a contact and record the enquiry." },
  { icon: "bi-briefcase", title: "Contact + deal", description: "Create/update contact and create an opportunity." },
  { icon: "bi-ui-checks", title: "Lead qualification", description: "Store structured answers and assign based on rules." },
  { icon: "bi-building", title: "Account matching", description: "Associate the lead with an existing company/account." },
  { icon: "bi-calendar-check", title: "Booking integration", description: "Attach scheduled meetings to the CRM record." },
  { icon: "bi-file-earmark", title: "Document workflow", description: "Store file references or document metadata against the lead." },
  { icon: "bi-envelope-arrow-up", title: "CRM + marketing automation", description: "Create the sales record and start an appropriate nurture sequence." },
];

const processSteps = [
  { title: "Understand the sales process", description: "Define what happens after an enquiry today." },
  { title: "Review CRM objects", description: "Identify contacts, leads, deals, companies, custom objects and required fields." },
  { title: "Map website fields", description: "Define what data should be captured and where it belongs." },
  { title: "Define matching and routing", description: "Set deduplication and assignment rules." },
  { title: "Build the integration", description: "Use the CRM API, native connector, webhook or automation layer." },
  { title: "Test", description: "Test new leads, existing contacts, incomplete data, duplicate submissions, invalid values and CRM outages." },
  { title: "Validate reporting", description: "Confirm that source and relevant conversion data arrive correctly." },
];

const securityConsiderations = ["HTTPS", "server-side credentials", "required consent", "data minimization", "retention", "CRM permissions", "file-upload security", "masking sensitive logs", "platform-specific customer-data policies"];

const faqs = [
  {
    id: "crm-which-systems",
    question: "Which CRM systems can you integrate?",
    answer: "We can work with CRMs that provide suitable APIs, webhooks or supported integration methods. Examples may include HubSpot, Zoho, Salesforce, Axelor or custom CRM systems depending on the project.",
    open: true,
  },
  {
    id: "crm-existing-forms",
    question: "Can you integrate our existing forms?",
    answer: "Yes, if the existing website allows access to the form submission flow.",
    open: false,
  },
  {
    id: "crm-duplicates",
    question: "Can you prevent duplicate contacts?",
    answer: "Yes. Deduplication logic can be designed around the CRM's record model and identifiers.",
    open: false,
  },
  {
    id: "crm-utm",
    question: "Can you send UTM data into CRM?",
    answer: "Yes. UTM and other source fields can be preserved and mapped where appropriate.",
    open: false,
  },
  {
    id: "crm-auto-assign",
    question: "Can leads be automatically assigned?",
    answer: "Yes. Routing can be implemented in the CRM or integration layer based on business rules.",
    open: false,
  },
  {
    id: "crm-confirmation-emails",
    question: "Can the CRM trigger confirmation emails?",
    answer: "Yes, if the CRM or connected automation platform supports the required workflow.",
    open: false,
  },
  {
    id: "crm-google-ads",
    question: "Can CRM outcomes be sent back to Google Ads?",
    answer: "Where platform and policy requirements are met, offline lead outcomes can be imported to improve conversion measurement.",
    open: false,
  },
  {
    id: "crm-custom",
    question: "Do you support custom CRM integration?",
    answer: "Yes, provided the custom CRM has an API, database integration layer or another appropriate interface.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "Forms & Lead Automation", href: "/services/website-integrations/lead-automation" },
  { label: "Marketing & Analytics", href: "/services/website-integrations/marketing-analytics" },
  { label: "API Integration", href: "/services/website-integrations/api" },
  { label: "Landing Page Development", href: "/services/website-development/landing-pages" },
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
        {description && <Description className={items.length ? "" : "mb-0"}>{description}</Description>}
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
function estimateCardHeight(item: (typeof capturedData)[number]) {
  const base = 130;
  const descriptionLines = item.description ? Math.ceil(item.description.length / 42) : 0;
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

const capturedDataColumns = distributeIntoColumns(capturedData, estimateCardHeight, 2);

export default function CrmIntegration() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap crm-integration-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    CRM Integration
                  </Tag>
                  <PageTitle>Send Website Leads Into Your CRM With the Context Sales Needs</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A lead should not lose useful information the moment someone submits a form.
                    Shivantra connects website enquiries, bookings and lead journeys with CRM
                    systems so contacts can be created or updated with the information your sales
                    process actually needs.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=crm-integration`} className="btn-primary">
                      Discuss CRM Integration
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Website Form</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">CRM</span>
                    <div className="flow-branches">
                      <span className="flow-step">Contact</span>
                      <span className="flow-step">Company</span>
                      <span className="flow-step">Source</span>
                      <span className="flow-step">Service</span>
                      <span className="flow-step">Owner</span>
                    </div>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Follow-up</span>
                    <Description className="mb-0 mt-3">
                      Website lead flowing into CRM with source and ownership information
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="email-vs-crm">
            <Container>
              <SectionHeader tag="Email is a notification, not a lead-management system" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A website form that sends an email may be enough for a very small process. As
                  lead volume grows, email-only handling can create:
                </Description>
              </SectionHeader>
              <ChecklistList items={emailOnlyProblems} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                CRM integration moves the lead into the system where sales already works.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="what-captured">
            <Container>
              <SectionHeader tag="What can be captured" title="Preserve useful context from the website" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Depending on the form and CRM, a lead can include:
                </Description>
              </SectionHeader>
              <div className="masonry-grid d-none d-md-flex">
                {capturedDataColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((item) => (
                      <MasonryCard key={item.title} {...item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {capturedData.map((item, index) => (
                    <MasonryCard key={item.title} {...item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section id="lead-workflow">
            <Container>
              <SectionHeader tag="Lead workflow" title="The integration can do more than create a contact" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A CRM workflow might:
                </Description>
              </SectionHeader>
              <ol className="numbered-list">
                {leadWorkflowSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="row mt-5">
                <div className="col-lg-7 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Website</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Match Existing Contact?</span>
                    <div className="flow-branches">
                      <span className="flow-step">Yes → Update</span>
                      <span className="flow-step">No → Create</span>
                    </div>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Create Lead/Deal</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Assign Owner</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Notify + Follow Up</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="deduplication">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Deduplication" title="New form submission does not always mean new person" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A visitor may submit:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={submissionScenarios} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    The integration should define how records are matched. Possible keys include:
                  </Description>
                  <ChecklistList items={dedupeKeys} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    Deduplication logic should match the CRM model rather than blindly creating a
                    new contact every time.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="routing">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Lead routing" title="Route leads based on the information already collected" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Assignment can depend on:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={routingFactors} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Routing can be handled:
                  </Description>
                  <ChecklistList items={routingLayers} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    We choose the layer that keeps the logic easiest to maintain.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="attribution">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Campaign attribution" title="Keep campaign information attached to the lead" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      If a visitor arrives from a campaign and later submits a form, source
                      information can be preserved and sent to the CRM where appropriate. This can
                      include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={attributionData} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    The goal is to avoid a CRM full of leads whose source is simply &ldquo;Website.&rdquo;
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="closed-loop">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Closing the loop" title="The CRM can also send useful outcomes back to advertising and analytics systems" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      For businesses where the meaningful conversion happens after the website
                      form, lead quality may be more important than form-submission volume.
                      Examples:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={closedLoopOutcomes} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Where platform capabilities and privacy requirements allow, offline outcomes
                    can be sent back to advertising or analytics systems to improve measurement.
                  </Description>
                  <Description aos="fade-up" delay={200}>
                    Google&apos;s current enhanced-conversions model supports first-party lead data
                    and offline lead outcomes as part of conversion measurement, subject to its
                    customer-data policies and implementation requirements.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={250}>
                    Do not collect or send data without the required legal basis or consent.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="patterns">
            <Container>
              <SectionHeader tag="Common CRM integration patterns" title="CRM integrations can be simple or highly structured" colClass="col-lg-9" />
              <div className="row g-4">
                {crmPatterns.map((pattern, index) => (
                  <div className="col-md-6 col-lg-3" key={pattern.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...pattern} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we implement website CRM integration" />
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

          <Section className="section-muted" id="security">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Security & privacy" title="Lead data needs careful handling" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Implementation should consider:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={securityConsiderations} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Marketing consent and sales-enquiry processing may have different legal bases
                    depending on jurisdiction and implementation.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Do not combine them automatically without appropriate review.
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
                  <div className="accordion custom-accordion" id="crm-integration-faq-accordion">
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
                  <SectionTitle>Give sales the lead while the context is still fresh</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Tell us what happens between a website form and your sales team today.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={150}>
                    We can connect that journey to your CRM and reduce manual handoffs.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=crm-integration`} className="btn-primary">
                      Discuss CRM Integration
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
