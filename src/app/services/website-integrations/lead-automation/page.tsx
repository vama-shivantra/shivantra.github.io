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

const pageUrl = `${siteUrl}/services/website-integrations/lead-automation`;

export const metadata: Metadata = {
  title: "Forms & Lead Automation Services | Shivantra",
  description:
    "Website form and lead automation for qualification, routing, CRM integration, confirmations, scheduling and follow-up workflows.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Forms & Lead Automation | Shivantra",
    description: "Design website forms around qualification, routing, CRM and follow-up instead of sending every enquiry to the same inbox.",
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
  { label: "Forms & Lead Automation", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Forms & Lead Automation",
      serviceType: "Forms & Lead Automation",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website form and lead automation for qualification, routing, CRM integration, confirmations, scheduling and follow-up workflows.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-integrations/lead-automation"}`,
      })),
    },
  ],
};

const realProcessSteps = ["qualify the enquiry", "assign it to the right person", "schedule a call", "collect documents", "create a CRM opportunity", "send a confirmation", "start follow-up"];

const formFieldGroups = [
  { title: "Contact", items: ["Name", "Email", "Phone"] },
  { title: "Requirement", items: ["Service", "Product", "Project type", "Message"] },
  { title: "Qualification", items: ["Location", "Budget", "Company size", "Timeline", "Eligibility criteria"] },
  { title: "Routing", items: ["Department", "Branch", "Territory", "Language"] },
  { title: "Scheduling", items: ["Preferred date/time", "Availability"] },
];

const simpleFormFit = ["the visitor already understands the service", "only a few details are needed", "sales can qualify later"];
const multiStepFit = ["the process requires several structured questions", "fields depend on earlier answers", "eligibility needs to be checked", "the user benefits from seeing one group of questions at a time"];

const qualificationDetermines = ["relevant service", "sales territory", "urgency", "eligibility", "account type", "project fit"];
const qualificationUsedFor = ["assign the lead", "choose the next page", "send an appropriate confirmation", "trigger a booking flow", "create structured CRM fields"];

const routingFactors = ["location", "service", "product", "language", "existing account owner", "branch", "territory", "lead type"];
const routingWorkflow = ["create the CRM record", "assign an owner", "notify the owner", "create a task", "copy the relevant shared team"];

const automationActions = [
  { icon: "bi-diagram-3", title: "CRM", description: "Create or update contact, lead or deal." },
  { icon: "bi-envelope-check", title: "Confirmation", description: "Send the visitor a confirmation or next-step email." },
  { icon: "bi-bell", title: "Internal notification", description: "Notify the appropriate team." },
  { icon: "bi-calendar-check", title: "Scheduling", description: "Send the visitor to a booking flow or create an appointment request." },
  { icon: "bi-check2-square", title: "Task", description: "Create a follow-up task." },
  { icon: "bi-file-earmark", title: "Document workflow", description: "Request or store supporting documents." },
  { icon: "bi-code-slash", title: "API/webhook", description: "Send the submission to another application." },
  { icon: "bi-graph-up", title: "Analytics", description: "Record the meaningful conversion event." },
];

const confirmationExplains = ["whether someone will call", "expected business process", "booking option", "documents needed", "next page", "downloadable material"];

const attributionData = ["UTM source", "UTM medium", "UTM campaign", "landing page", "referrer", "advertising identifiers where appropriate"];

const spamThreats = ["spam", "bots", "malformed input", "duplicate submissions", "oversized uploads", "malicious files", "injection attempts"];
const spamProtections = ["server-side validation", "rate limits", "honeypots", "CAPTCHA/challenge mechanisms where justified", "file restrictions", "spam scoring", "duplicate checks"];

const consentPractices = ["present the relevant choice clearly", "store consent evidence where necessary", "do not pre-select optional marketing consent where law/platform rules prohibit it"];

const processSteps = [
  { title: "Map the lead process", description: "Understand what happens from enquiry to follow-up." },
  { title: "Define the fields", description: "Collect only information that supports qualification, routing or next action." },
  { title: "Define rules", description: "Specify conditional questions, routing and validation." },
  { title: "Build the form", description: "Create accessible and responsive form interactions." },
  { title: "Connect systems", description: "Integrate CRM, email, booking, analytics or APIs." },
  { title: "Test edge cases", description: "Test validation, duplicates, spam, CRM failures, incorrect routing, email delivery and mobile usage." },
  { title: "Monitor", description: "For important lead flows, monitor failed submissions and integration errors." },
];

const useCases = [
  { icon: "bi-chat-dots", title: "Consultation request", description: "Form → CRM → owner assigned → confirmation → booking link." },
  { icon: "bi-file-earmark-text", title: "Quote request", description: "Multi-step form → qualification → CRM deal → sales notification." },
  { icon: "bi-geo-alt", title: "Multi-location business", description: "Location selected → lead routed to correct branch." },
  { icon: "bi-heart-pulse", title: "Healthcare or professional service", description: "Service selected → relevant questions → appointment request." },
  { icon: "bi-megaphone", title: "B2B campaign", description: "Landing page → form → campaign data → CRM → SDR task." },
  { icon: "bi-ui-checks", title: "Application workflow", description: "Eligibility questions → conditional path → document request → internal review." },
];

const faqs = [
  {
    id: "la-crm-connect",
    question: "Can you connect our forms to CRM?",
    answer: "Yes. CRM integration can create or update contacts, deals or leads depending on the platform.",
    open: true,
  },
  {
    id: "la-conditional",
    question: "Can forms show different questions based on previous answers?",
    answer: "Yes. Conditional logic can be used where it improves relevance.",
    open: false,
  },
  {
    id: "la-multistep",
    question: "Can you build multi-step forms?",
    answer: "Yes. Multi-step forms are useful for structured qualification or complex requests.",
    open: false,
  },
  {
    id: "la-routing",
    question: "Can leads be routed to different people?",
    answer: "Yes. Routing can be based on service, location, territory, language or other business rules.",
    open: false,
  },
  {
    id: "la-confirmation-emails",
    question: "Can you automate confirmation emails?",
    answer: "Yes, using the website, CRM, email platform or automation layer depending on the architecture.",
    open: false,
  },
  {
    id: "la-spam",
    question: "Can you prevent spam?",
    answer: "We can implement server-side validation and appropriate anti-abuse controls.",
    open: false,
  },
  {
    id: "la-campaign-source",
    question: "Can campaign source be stored with the lead?",
    answer: "Yes. UTM and related source information can be passed into CRM/analytics where appropriate.",
    open: false,
  },
  {
    id: "la-appointments",
    question: "Can the form book appointments?",
    answer: "Yes. The form can connect to a booking platform or route the user into a scheduling step.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "CRM Integration", href: "/services/website-integrations/crm" },
  { label: "Marketing & Analytics Integration", href: "/services/website-integrations/marketing-analytics" },
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

function MasonryCard({ title, items, delay }: { title: string; items: string[]; delay: string }) {
  return (
    <div className="masonry-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="masonry-card">
        <CardTitle className="fs-6 mb-3">{title}</CardTitle>
        <ChecklistList items={items} tight />
      </div>
    </div>
  );
}

function estimateCardHeight(item: (typeof formFieldGroups)[number]) {
  const base = 110;
  return base + item.items.length * 34;
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

const fieldGroupColumns = distributeIntoColumns(formFieldGroups, estimateCardHeight, 2);

export default function LeadAutomation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap lead-automation-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Forms & Lead Automation
                  </Tag>
                  <PageTitle>Turn Website Forms Into a Working Lead Process</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A form submission should not become another email someone has to copy into a
                    system. Shivantra designs forms around the information your team actually
                    needs and automates the steps that follow, from CRM creation and lead routing
                    to confirmations, notifications and scheduling.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=lead-automation`} className="btn-primary">
                      Discuss Your Lead Workflow
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-ui-checks-grid" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Visitor</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Smart Form</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Qualification</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">CRM</span>
                    <div className="flow-branches">
                      <span className="flow-step">Assign</span>
                      <span className="flow-step">Notify</span>
                      <span className="flow-step">Confirm</span>
                      <span className="flow-step">Follow Up</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Website form automating lead qualification, CRM creation and follow-up
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="form-purpose">
            <Container>
              <SectionHeader tag="A form should start the next step" title="The submission itself is not the business outcome" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  For many businesses, a website form is only the beginning.
                </Description>
                <Description className="mb-0" aos="fade-up" delay={150}>
                  The real process may be:
                </Description>
              </SectionHeader>
              <ChecklistList items={realProcessSteps} tight />
              <Description className="mt-4" aos="fade-up" delay={200}>
                If those steps happen manually, lead handling becomes slower and inconsistent as
                volume grows.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={250}>
                Automation can move structured information directly into the process.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="field-design">
            <Container>
              <SectionHeader tag="Design the form around what happens next" title="Ask for information because it has a purpose" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Every field should answer a question the business actually needs. Examples:
                </Description>
              </SectionHeader>
              <div className="masonry-grid d-none d-md-flex">
                {fieldGroupColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((group) => (
                      <MasonryCard key={group.title} {...group} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {formFieldGroups.map((group, index) => (
                    <MasonryCard key={group.title} {...group} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
              <Description className="mt-5" aos="fade-up" delay={100}>
                The goal is not to make every form as short as possible.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={150}>
                It is to avoid asking for information that nobody uses.
              </Description>
            </Container>
          </Section>

          <Section id="form-type">
            <Container>
              <SectionHeader tag="Simple form or multi-step flow?" title="Choose the experience around the complexity of the decision" colClass="col-lg-9" />
              <div className="row g-4">
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                  <div className="decision-card h-100">
                    <CardTitle className="fs-6 mb-2">Simple form</CardTitle>
                    <Description>Appropriate when:</Description>
                    <ChecklistList items={simpleFormFit} tight />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="decision-card h-100">
                    <CardTitle className="fs-6 mb-2">Multi-step form</CardTitle>
                    <Description>Useful when:</Description>
                    <ChecklistList items={multiStepFit} tight />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="flow-card h-100">
                    <span className="flow-step">Choose Service</span>
                    <div className="flow-branches">
                      <span className="flow-step">Website → Project Questions</span>
                      <span className="flow-step">ERP → Platform/Version Questions</span>
                      <span className="flow-step">Support → Issue/Category Questions</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Conditional lead form showing different questions based on user selection
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="qualification">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Lead qualification" title="Qualification should help route the lead, not interrogate the visitor" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Qualification can help determine:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={qualificationDetermines} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    This information can be used to:
                  </Description>
                  <ChecklistList items={qualificationUsedFor} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    Qualification rules should remain understandable and maintainable.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="routing">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Lead routing" title="Send the enquiry to the person who can actually act on it" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Routing can depend on:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={routingFactors} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Instead of all enquiries reaching the same inbox, the workflow can:
                  </Description>
                  <ChecklistList items={routingWorkflow} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    Where the CRM already has routing capability, it may be better to keep the
                    business logic there.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="automation-actions">
            <Container>
              <SectionHeader tag="Automation after submission" title="One form can trigger several coordinated actions" colClass="col-lg-9" />
              <div className="row g-4">
                {automationActions.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="confirmation">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Confirmation experience" title="Tell the visitor what happens next" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A successful submission should make the next step clear. Instead of:
                    </Description>
                  </SectionHeader>
                  <div className="avoid-quote" data-aos="fade-up" data-aos-delay="150">
                    &ldquo;Thank you. Your message has been sent.&rdquo;
                  </div>
                  <Description aos="fade-up" delay={200} className="fw-semibold mb-2">
                    Use the confirmation experience to explain:
                  </Description>
                  <ChecklistList items={confirmationExplains} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={250}>
                    Do not promise a response time the business cannot consistently meet.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="attribution">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Attribution" title="Keep campaign context attached to the lead" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Where marketing attribution matters, the form workflow can preserve:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={attributionData} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    That information can be passed into the CRM and analytics systems.
                  </Description>
                  <Button href="/services/website-integrations/marketing-analytics" className="btn-white-outline mt-2">
                    Explore Marketing &amp; Analytics Integration
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="spam">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Spam, abuse and validation" title="Automation should not automate bad data" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Forms need protection against:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={spamThreats} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Implementation may include:
                  </Description>
                  <ChecklistList items={spamProtections} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    The protection should be proportional to the risk and should avoid creating
                    unnecessary friction for real visitors.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="privacy">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Privacy" title="Collect only the data the process needs" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Lead forms should avoid collecting sensitive or excessive personal
                      information without a clear reason. Where consent is required:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={consentPractices} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    Operational enquiry processing and marketing subscription should be treated as
                    separate concepts where appropriate.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we build forms and lead automation" />
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
              <SectionHeader tag="Common use cases" title="Lead automation examples" colClass="col-lg-9" />
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
                  <div className="accordion custom-accordion" id="lead-automation-faq-accordion">
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
                  <SectionTitle>Show us what your team does after a form submission</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can turn those manual steps into a clearer lead workflow and connect the
                    systems that need to be involved.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=lead-automation`} className="btn-primary">
                      Discuss Your Lead Workflow
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
