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

const pageUrl = `${siteUrl}/services/website-development/landing-pages`;

export const metadata: Metadata = {
  title: "Landing Page Development Services | Shivantra",
  description:
    "Landing page design and development for Google Ads, Meta Ads and lead-generation campaigns, with focused messaging, forms, analytics and integrations.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Landing Page Development | Shivantra",
    description:
      "Campaign-specific landing pages built around the audience, message, offer and conversion action.",
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
  { label: "Landing Page Development", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Landing Page Development",
      serviceType: "Landing Page Development",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Landing page design and development for Google Ads, Meta Ads and lead-generation campaigns, with focused messaging, forms, analytics and integrations.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-development/landing-pages"}`,
      })),
    },
  ],
};

const homepageTopics = ["the company", "several services", "products", "careers", "locations", "news", "resources"];

const messageTraits = [
  { label: "Audience", description: "Who is the campaign speaking to?" },
  { label: "Message", description: "What problem, service or opportunity brought them here?" },
  { label: "Offer", description: "What exactly are they being asked to consider?" },
  { label: "Evidence", description: "What information will help them trust the offer?" },
  { label: "Action", description: "What is the next useful step?" },
];

const landingPageTypes = [
  { icon: "bi-google", title: "Google Ads landing pages", description: "Pages aligned with specific search campaigns, services or keyword themes." },
  { icon: "bi-share", title: "Meta Ads landing pages", description: "Focused experiences that continue the creative and message someone saw in social advertising." },
  { icon: "bi-linkedin", title: "LinkedIn and B2B campaign pages", description: "Pages designed for specific business audiences, offers, reports, demos or consultations." },
  { icon: "bi-briefcase", title: "Service campaign pages", description: "Dedicated pages for an important service rather than sending campaign traffic to a general services page." },
  { icon: "bi-rocket-takeoff", title: "Product or offer launches", description: "Focused pages for a new service, product, program or limited campaign." },
  { icon: "bi-file-earmark-text", title: "Lead magnet pages", description: "Pages for reports, guides, assessments or downloadable resources." },
  { icon: "bi-camera-video", title: "Event and webinar pages", description: "Pages that explain the event, speakers, value and registration action." },
  { icon: "bi-geo-alt", title: "Location-specific campaigns", description: "Pages where service availability or messaging genuinely differs by location." },
];

const anatomyItems = [
  { icon: "bi-type-h1", title: "Clear headline", description: "Confirm what the visitor came for.", items: [] as string[] },
  { icon: "bi-chat-square-text", title: "Context", description: "Explain the problem, need or opportunity.", items: [] },
  { icon: "bi-star", title: "Relevant benefits", description: "Show what the offer means for the visitor rather than listing generic features.", items: [] },
  {
    icon: "bi-patch-check",
    title: "Evidence",
    description: "Use genuine credentials, work, process, testimonials, reviews, data or case studies, only where they actually exist and are appropriate:",
    items: ["Credentials", "Work", "Process", "Testimonials", "Reviews", "Data", "Case studies"],
  },
  { icon: "bi-gift", title: "Offer details", description: "Explain what the visitor receives or what will happen next.", items: [] },
  { icon: "bi-question-circle", title: "Objection handling", description: "Answer common concerns that may prevent action.", items: [] },
  {
    icon: "bi-cursor",
    title: "Focused call to action",
    description: "Use one primary conversion objective. The page can repeat that action where useful, but should not create multiple competing goals without a reason.",
    items: [],
  },
];

const formConsiderations = ["the sales process", "qualification needs", "service type", "campaign intent", "follow-up method"];

const conversionSteps = [
  "confirmation",
  "calendar booking",
  "payment",
  "document download",
  "WhatsApp conversation",
  "qualification message",
  "email sequence",
  "CRM assignment",
  "sales notification",
];

const measurementEvents = ["form submission", "call click", "WhatsApp click", "booking", "purchase", "download", "video engagement", "key CTA click"];

const integrationTargets = ["CRM", "email", "marketing automation", "appointment booking", "payment provider", "spreadsheet where justified", "internal API", "custom application"];

const performanceAvoid = ["oversized media", "unnecessary scripts", "layout shifts", "slow forms", "heavy decorative animation"];

const testingElements = ["headline", "offer framing", "proof", "form", "call to action", "page length", "campaign segment"];

const processSteps = [
  { title: "Understand the campaign", description: "Audience, traffic source, offer, objective and follow-up process." },
  { title: "Map the message", description: "Align the campaign promise with the landing-page headline, content and CTA." },
  { title: "Structure the page", description: "Define the order of information and conversion path." },
  { title: "Write and design", description: "Create focused copy and responsive visual design." },
  { title: "Develop", description: "Build the landing page and required form or interaction." },
  { title: "Integrate", description: "Connect analytics, CRM, booking, email or other systems as required." },
  { title: "Test", description: "Review mobile experience, forms, tracking, links, performance and confirmation flow." },
  { title: "Launch and measure", description: "Publish the page and validate that important events are being captured correctly." },
];

const faqs = [
  {
    id: "landing-vs-homepage",
    question: "Why should I not send ads to my homepage?",
    answer:
      "A homepage serves a broad audience. A campaign usually targets a specific intent. A dedicated page lets the message, offer and action stay aligned with that campaign.",
    open: true,
  },
  {
    id: "landing-separate-page-per-ad",
    question: "Do I need a separate page for every ad?",
    answer: "Not necessarily. Separate landing pages make sense when audience, intent, offer or message differs enough to justify a different experience.",
    open: false,
  },
  {
    id: "landing-existing-website",
    question: "Can you build landing pages inside our existing website?",
    answer: "Yes, if the current website and CMS allow the page to be built properly. If not, we can discuss an appropriate standalone or integrated implementation.",
    open: false,
  },
  {
    id: "landing-crm",
    question: "Can you connect leads to our CRM?",
    answer: "Yes, where the CRM provides a suitable integration method.",
    open: false,
  },
  {
    id: "landing-tracking",
    question: "Can you set up analytics and conversion tracking?",
    answer: "Tracking implementation can be included in scope. The exact setup depends on the advertising and analytics platforms being used.",
    open: false,
  },
  {
    id: "landing-guarantee",
    question: "Do you guarantee a conversion rate?",
    answer:
      "No. Conversion depends on the offer, traffic quality, audience, price, brand trust, competition and other factors beyond page design. We focus on creating a clear, measurable experience and improving it from evidence.",
    open: false,
  },
  {
    id: "landing-multiple-services",
    question: "Can you create multiple landing pages for different services?",
    answer: "Yes. Reusable components can make it practical to produce campaign-specific pages while maintaining brand consistency.",
    open: false,
  },
  {
    id: "landing-ab-test",
    question: "Can we A/B test pages?",
    answer: "Yes, where the chosen platform and campaign volume justify it. Testing should be based on a clear hypothesis rather than changing random elements.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Business Website Development", href: "/services/website-development/business-websites" },
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "CRM Integration", href: "/services/website-integrations/crm" },
  { label: "Marketing & Analytics Integration", href: "/services/website-integrations/marketing-analytics" },
  { label: "Forms & Lead Automation", href: "/services/website-integrations/lead-automation" },
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

function AnatomyCard({ item, delay }: { item: (typeof anatomyItems)[number]; delay: string }) {
  return (
    <div className="anatomy-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="anatomy-card">
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
function estimateCardHeight(item: (typeof anatomyItems)[number]) {
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

const anatomyColumns = distributeIntoColumns(anatomyItems, estimateCardHeight, 2);

export default function LandingPageDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap landing-page-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Landing Page Development
                  </Tag>
                  <PageTitle>Turn the Ad Click Into a Clear Next Step</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Someone clicked your campaign because a specific message, service or offer
                    caught their attention. The page they reach should continue that same
                    conversation. Shivantra designs and develops focused landing pages for
                    advertising, launches and lead-generation campaigns, with messaging, forms,
                    tracking and integrations built around the action you want visitors to take.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=landing-page-development`} className="btn-primary">
                      Discuss Your Landing Page
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <PlaceholderVisual
                    icon="bi-bullseye"
                    caption="Advertising campaign leading to a focused landing page and conversion action"
                    cues={["Campaign", "Landing Page", "Action"]}
                  />
                </div>
              </div>
            </Container>
          </Section>

          <Section id="why-dedicated">
            <Container>
              <SectionHeader
                tag="Why send a campaign to a dedicated page?"
                title="A campaign creates a specific expectation"
                tight
                colClass="col-lg-9"
              >
                <Description aos="fade-up" delay={100} className="mb-0">
                  A homepage has to serve many different visitors. It may explain:
                </Description>
              </SectionHeader>
              <ChecklistList items={homepageTopics} tight />
              <Description className="mt-4" aos="fade-up" delay={150}>
                A campaign is different. It usually makes one specific promise to one specific
                audience. If the person clicks an advertisement for a particular treatment, loan
                service, property, course, B2B offer or consultation, the destination should make
                that subject immediately clear.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={200}>
                A dedicated landing page allows the message, proof, form and call to action to
                stay focused on that campaign.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="message-continuity">
            <Container>
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-6">
                  <SectionHeader
                    tag="Message continuity"
                    title="The page should feel like the natural next step after the click"
                    tight
                    colClass="col-12"
                  >
                    <Description aos="fade-up" delay={100} className="mb-0">
                      The campaign and landing page should align on:
                    </Description>
                  </SectionHeader>
                  <div className="trait-list">
                    {messageTraits.map((trait) => (
                      <div className="trait-item" key={trait.label} data-aos="fade-up" data-aos-delay="150">
                        <strong>{trait.label}</strong>
                        <span>{trait.description}</span>
                      </div>
                    ))}
                  </div>
                  <Description className="mt-4" aos="fade-up" delay={200}>
                    When those elements drift apart, the visitor has to re-interpret what they
                    clicked.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={250}>
                    A landing page reduces that friction by keeping the journey coherent.
                  </Description>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="flow-card w-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-diagram-3" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Ad Message</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Landing Page Headline</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Relevant Benefits</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Evidence</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Primary Action</span>
                    <Description className="mb-0 mt-3">
                      Consistent message from campaign to landing page and call to action
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="what-we-build">
            <Container>
              <SectionHeader tag="What we build" title="Landing pages for focused campaigns" />
              <div className="row g-4">
                {landingPageTypes.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="anatomy">
            <Container>
              <SectionHeader tag="Anatomy" title="What a focused landing page may include" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  There is no universal landing-page formula, but the content should answer the
                  visitor&apos;s important questions in the order they need them.
                </Description>
              </SectionHeader>
              <div className="anatomy-grid d-none d-md-flex">
                {anatomyColumns.map((column, columnIndex) => (
                  <div className="anatomy-col" key={columnIndex}>
                    {column.map((item) => (
                      <AnatomyCard key={item.title} item={item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="anatomy-grid d-flex d-md-none">
                <div className="anatomy-col">
                  {anatomyItems.map((item, index) => (
                    <AnatomyCard key={item.title} item={item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section id="forms">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Forms" title="Ask for the information you actually need" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Long forms can create unnecessary friction. Extremely short forms can create
                      low-quality or incomplete leads. The right form depends on what happens
                      after submission. We design form fields around:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={formConsiderations} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    A simple enquiry may need only a few fields. A quotation or assessment may
                    justify a structured multi-step form.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The objective is not &ldquo;shorter at any cost.&rdquo; It is to collect
                    enough useful information without making the visitor do unnecessary work.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="conversion-flow">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Conversion flow" title="The experience after the form matters too" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A landing page journey should not end with a generic &ldquo;Thank
                      you.&rdquo; Depending on the campaign, the next step might be:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={conversionSteps} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    We can design the complete handoff so leads do not disappear between the
                    website and the team responsible for following up.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="measurement">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Measurement" title="Build the page so you can learn from the campaign" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A landing page should make meaningful actions measurable. Depending on the
                      marketing setup, tracking can include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={measurementEvents} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Campaign information such as UTM parameters can also be preserved where
                    relevant. When connected to a CRM, lead source data can follow the enquiry
                    into the sales process.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The goal is not to track every movement on the screen. It is to understand
                    whether the campaign is producing the actions the business cares about.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="integrations">
            <Container>
              <div className="row g-4 align-items-start">
                <div className="col-lg-6">
                  <SectionHeader tag="Integrations" title="Send campaign leads where your team actually works" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A form submission can connect to:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationTargets} tight />
                  <Button href="/services/website-integrations" className="btn-white-outline mt-4">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Ad</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Landing Page</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Form / Booking / Purchase</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">CRM</span>
                    <div className="flow-branches">
                      <span className="flow-step">Source Captured</span>
                      <span className="flow-step">Sales Assigned</span>
                      <span className="flow-step">Confirmation Sent</span>
                      <span className="flow-step">Follow-up Started</span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="performance">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Performance" title="Paid traffic should not arrive at an unnecessarily heavy page" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Landing pages often receive visitors who have just paid you with their
                      attention and, indirectly, your advertising budget. The experience should
                      therefore avoid:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={performanceAvoid} tight avoid />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    We build with responsive performance in mind and review third-party tracking
                    or marketing scripts as part of the overall page load.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="testing-iteration">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Testing and iteration" title="The first version is a hypothesis" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      A well-planned landing page is a strong starting point. It is not proof that
                      a specific headline, form length or section order will convert best for
                      every audience. Where traffic volume and campaign duration justify it, the
                      page can be prepared for future experimentation. That might involve testing:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={testingElements} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    We do not promise arbitrary percentage improvements before real campaign data
                    exists.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="How we develop a campaign landing page" />
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
                  <div className="accordion custom-accordion" id="landing-page-faq-accordion">
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
                  <SectionTitle>One campaign. One focused destination. One clear next step.</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    If you are paying to bring someone to your website, make sure the page
                    continues the message that earned the click.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=landing-page-development`} className="btn-primary">
                      Discuss Your Landing Page
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
