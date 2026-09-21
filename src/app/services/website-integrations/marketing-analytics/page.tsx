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

const pageUrl = `${siteUrl}/services/website-integrations/marketing-analytics`;

export const metadata: Metadata = {
  title: "Marketing & Analytics Integration Services | Shivantra",
  description:
    "Website analytics and marketing integration for GA4, advertising conversions, campaign tracking, tag management, CRM attribution and meaningful business events.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Marketing & Analytics Integration | Shivantra",
    description: "Analytics, advertising conversion tracking and campaign attribution implemented around meaningful website events.",
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
  { label: "Marketing & Analytics Integration", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Marketing & Analytics Integration",
      serviceType: "Marketing & Analytics Integration",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website analytics and marketing integration for GA4, advertising conversions, campaign tracking, tag management, CRM attribution and meaningful business events.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-integrations/marketing-analytics"}`,
      })),
    },
  ],
};

const measurementQuestions = [
  "Which campaigns generate leads?",
  "Which landing pages lead to bookings?",
  "Which service pages contribute to enquiries?",
  "Which leads become qualified opportunities?",
  "Which purchases came from advertising?",
  "Where do visitors drop out of a process?",
];

const measurementPlanRows = [
  { action: "Enquiry submitted", event: "generate_lead", parameters: "service, form, page" },
  { action: "Registration", event: "sign_up", parameters: "method, campaign" },
  { action: "Purchase", event: "purchase", parameters: "value, currency, transaction" },
  { action: "Booking", event: "custom/recommended as appropriate", parameters: "service, location" },
  { action: "File download", event: "event", parameters: "file type, resource" },
  { action: "CTA click", event: "only if useful", parameters: "CTA type, page" },
];

const meaningfulEvents = [
  "enquiry submission",
  "quotation request",
  "booking",
  "purchase",
  "registration",
  "demo request",
  "phone click",
  "WhatsApp click",
  "document download",
  "account creation",
  "application submission",
  "qualified-lead status",
  "completed sale",
];

const ga4Implementation = [
  "base GA4 configuration",
  "recommended events",
  "custom events where justified",
  "parameters",
  "conversions/key events",
  "cross-domain considerations",
  "referral exclusions where appropriate",
  "ecommerce measurement where relevant",
  "debugging and validation",
];

const tagManagerHelps = ["analytics", "ad conversion tags", "remarketing", "consent-related behavior", "selected third-party scripts"];
const tagManagerRisks = ["duplicate tags", "performance issues", "inconsistent triggers", "privacy problems"];
const tagStructureItems = ["containers", "triggers", "variables", "naming conventions", "environments", "publishing process"];

const adPlatforms = ["Google Ads", "Meta", "LinkedIn", "other supported advertising platforms"];
const conversionEventOptions = ["purchase", "qualified lead", "booking", "registration", "meaningful form submission"];

const attributionContext = ["UTM source", "UTM medium", "UTM campaign", "UTM content", "landing page", "referrer", "advertising click identifiers where appropriate"];
const attributionDestinations = ["measured in analytics", "preserved in the website", "attached to the CRM lead"];

const enhancedMeasurementRequirements = [
  "the business has a valid basis for collecting the data",
  "consent requirements are handled appropriately",
  "platform policies are followed",
  "data is normalized/hashed or transmitted according to the provider's supported implementation",
];

const serverSideBenefits = ["data routing", "first-party endpoints", "event transformation", "platform integrations", "certain browser limitations"];
const serverSideCosts = ["infrastructure", "maintenance", "debugging responsibility", "privacy/governance requirements"];

const consentCoordination = ["consent management platform", "cookie categories", "tag triggers", "Google Consent Mode", "advertising platform settings", "privacy policy", "data retention"];

const processSteps = [
  { title: "Define business objectives", description: "Identify the questions and actions that matter." },
  { title: "Audit existing tracking", description: "Find duplicate, missing or inconsistent tags/events." },
  { title: "Create measurement plan", description: "Define events, parameters and conversion actions." },
  { title: "Implement", description: "Add data-layer, analytics, tags or API integrations." },
  { title: "Test", description: "Use platform debugging tools and real test journeys." },
  { title: "Document", description: "Record event names, parameters and where each event is sent." },
  { title: "Monitor", description: "Check tracking after releases and campaign changes." },
];

const faqs = [
  {
    id: "ma-ga4-setup",
    question: "Can you set up Google Analytics 4?",
    answer: "Yes. We can implement or clean up GA4 event tracking and conversion measurement.",
    open: true,
  },
  {
    id: "ma-gtm-needed",
    question: "Do we need Google Tag Manager?",
    answer: "Not always. Tag Manager is useful when it improves governance and flexibility, but some tracking is better implemented directly in application code.",
    open: false,
  },
  {
    id: "ma-whatsapp-phone",
    question: "Can you track WhatsApp or phone clicks?",
    answer: "Yes, when those interactions are meaningful business actions.",
    open: false,
  },
  {
    id: "ma-campaign-source",
    question: "Can you connect form leads to campaign source?",
    answer: "Yes. UTM and relevant attribution data can be preserved and sent with the lead.",
    open: false,
  },
  {
    id: "ma-crm-to-ads",
    question: "Can CRM sales outcomes be sent back to Google Ads?",
    answer: "Yes, where the required identifiers/data are captured and Google Ads implementation and customer-data policies are satisfied.",
    open: false,
  },
  {
    id: "ma-enhanced-conversions",
    question: "What are enhanced conversions?",
    answer: "Enhanced conversions are Google Ads measurement features that use first-party customer data, handled according to Google's supported implementation, to improve conversion matching.",
    open: false,
  },
  {
    id: "ma-consent",
    question: "Do you provide cookie consent implementation?",
    answer: "We can implement the technical behavior of a consent solution. Legal configuration and policy wording should be reviewed according to the organization's jurisdiction and advisers.",
    open: false,
  },
  {
    id: "ma-track-everything",
    question: "Should we track every button click?",
    answer: "Usually no. Tracking should answer real business questions rather than create unnecessary event volume.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "CRM Integration", href: "/services/website-integrations/crm" },
  { label: "Forms & Lead Automation", href: "/services/website-integrations/lead-automation" },
  { label: "Landing Page Development", href: "/services/website-development/landing-pages" },
  { label: "Website Performance", href: "/services/website-performance" },
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

function ChecklistList({ items, tight, avoid }: { items: string[]; tight?: boolean; avoid?: boolean }) {
  return (
    <ul className={`checklist${tight ? " checklist--tight" : ""}${avoid ? " checklist--avoid" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <i className={`bi ${avoid ? "bi-x-circle-fill" : "bi-check-circle-fill"}`} aria-hidden="true"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MarketingAnalyticsIntegration() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap marketing-analytics-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Marketing & Analytics Integration
                  </Tag>
                  <PageTitle>Measure the Website Actions That Matter to the Business</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Analytics becomes useful when it answers a business question. Which campaigns
                    produce enquiries? Which landing pages generate bookings? Which form
                    submissions become qualified opportunities? Shivantra implements website
                    analytics and marketing integrations around meaningful events, campaign data
                    and conversion workflows rather than simply installing tracking tags.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=marketing-analytics-integration`} className="btn-primary">
                      Discuss Your Tracking Setup
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-graph-up" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Campaign</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Website</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Meaningful Event</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Analytics + Ads + CRM</span>
                    <div className="flow-branches">
                      <span className="flow-step">Lead</span>
                      <span className="flow-step">Booking</span>
                      <span className="flow-step">Purchase</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Website events connected to analytics, advertising and CRM measurement
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="start-question">
            <Container>
              <SectionHeader tag="Start with the question" title="Measurement should begin before implementation" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Before creating tags or events, define what the business wants to understand.
                  Examples:
                </Description>
              </SectionHeader>
              <ChecklistList items={measurementQuestions} tight />
              <Description className="mt-4" aos="fade-up" delay={150}>
                Those questions determine what needs to be measured.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={200}>
                Without that step, analytics implementations often become collections of events
                nobody uses.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="measurement-plan">
            <Container>
              <SectionHeader tag="Measurement plan" title="Define events and parameters deliberately" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A measurement plan can specify:
                </Description>
              </SectionHeader>
              <div className="plan-table-wrap" data-aos="fade-up" data-aos-delay="100">
                <table className="plan-table">
                  <thead>
                    <tr>
                      <th scope="col">Business action</th>
                      <th scope="col">Event</th>
                      <th scope="col">Useful parameters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {measurementPlanRows.map((row) => (
                      <tr key={row.action}>
                        <th scope="row">{row.action}</th>
                        <td><code>{row.event}</code></td>
                        <td>{row.parameters}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Description className="mt-5" aos="fade-up" delay={150}>
                Where Google Analytics provides a recommended event that fits the action, using
                the recommended naming and parameters can provide more consistent reporting and
                future compatibility.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={200}>
                Custom events should be used when the business action does not fit an appropriate
                recommended event.
              </Description>
            </Container>
          </Section>

          <Section id="what-measured">
            <Container>
              <SectionHeader tag="What can be measured" title="Focus on actions with business meaning" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Depending on the website, useful events may include:
                </Description>
              </SectionHeader>
              <ChecklistList items={meaningfulEvents} tight />
              <Description className="mt-4" aos="fade-up" delay={150}>
                Not every click needs to become a conversion.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={200}>
                Too many conversion actions can make reporting harder rather than more useful.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="ga4">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="GA4 implementation" title="Build GA4 around a clear event model" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Implementation may include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={ga4Implementation} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Event naming should remain consistent across the website.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Avoid creating several different names for the same business action unless
                    there is a specific reporting reason.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="tag-management">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Tag management" title="Tag management should reduce chaos, not create it" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A tag manager can help teams deploy and manage:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={tagManagerHelps} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    But uncontrolled tag-manager access can also create:
                  </Description>
                  <ChecklistList items={tagManagerRisks} tight avoid />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={200}>
                    We can structure:
                  </Description>
                  <ChecklistList items={tagStructureItems} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={250}>
                    Where code changes are more appropriate than tag-manager workarounds, we use
                    code.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="ad-conversions">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Advertising conversion tracking" title="Connect ad platforms to the actions you actually value" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Conversion tracking can be implemented for platforms such as:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={adPlatforms} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    The correct conversion event might be:
                  </Description>
                  <ChecklistList items={conversionEventOptions} tight />
                  <Description className="mt-4" aos="fade-up" delay={200}>
                    For lead-generation businesses, the final valuable outcome may happen days or
                    weeks after the form.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={250}>
                    In those cases, CRM/offline outcome integration can produce a more useful
                    measurement loop than optimizing only for form submissions.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="attribution">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Campaign attribution" title="Preserve campaign data beyond the analytics session" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Useful campaign context can include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={attributionContext} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    This information can be:
                  </Description>
                  <ChecklistList items={attributionDestinations} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    The objective is to make campaign data useful beyond a dashboard.
                  </Description>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-7 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="250">
                    <span className="flow-step">Campaign</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Landing Page</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">UTM / Source Data</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Form Submission</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">CRM</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Qualified / Won</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="enhanced-measurement">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="First-party and enhanced measurement" title="Modern conversion measurement increasingly depends on first-party data" tight colClass="col-12">
                    <Description aos="fade-up" delay={100}>
                      Advertising platforms are expanding methods that use first-party customer
                      data to improve conversion measurement.
                    </Description>
                    <Description aos="fade-up" delay={150}>
                      Google Ads enhanced conversions can use user-provided first-party
                      information such as email or phone, processed according to Google&apos;s
                      implementation and customer-data requirements, to improve conversion
                      matching.
                    </Description>
                    <Description className="mb-0" aos="fade-up" delay={200}>
                      Google unified its enhanced-conversions setup for web and leads in 2026,
                      supporting website tags, Data Manager and API-based approaches under one
                      setting.
                    </Description>
                  </SectionHeader>
                  <Description aos="fade-up" delay={250} className="fw-semibold mb-2">
                    These features should only be implemented when:
                  </Description>
                  <ChecklistList items={enhancedMeasurementRequirements} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={300}>
                    Do not treat enhanced measurement as permission to collect unnecessary
                    personal data.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="server-side">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Server-side and API-based measurement" title="More complex tracking architecture should solve a real measurement problem" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Server-side tagging or conversion APIs can provide more control over:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={serverSideBenefits} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    They also create:
                  </Description>
                  <ChecklistList items={serverSideCosts} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    We recommend more complex measurement architecture only when the business case
                    justifies it.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="consent">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Consent and privacy" title="Tracking architecture must respect the user's choices" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Depending on jurisdiction and implementation, analytics and advertising tags
                      may require consent handling. A tracking project may need to coordinate
                      with:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={consentCoordination} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    Shivantra can implement the technical behavior, but legal requirements and
                    lawful-basis decisions should be reviewed with the organization&apos;s
                    privacy/legal advisers where necessary.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we approach analytics and marketing integration" />
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
                  <div className="accordion custom-accordion" id="marketing-analytics-faq-accordion">
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
                  <SectionTitle>Make your analytics reflect how the business actually measures success</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    Tell us which actions matter from campaign click through to sales outcome.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={150}>
                    We can build the measurement flow around those events.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=marketing-analytics-integration`} className="btn-primary">
                      Discuss Your Tracking Setup
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
