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

const pageUrl = `${siteUrl}/services/website-accessibility`;

export const metadata: Metadata = {
  title: "Website Accessibility Services | Shivantra",
  description:
    "Website accessibility auditing and remediation based on WCAG 2.2, including keyboard access, semantics, forms, focus, contrast, media and accessible interactions.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Accessibility Services | Shivantra",
    description:
      "Accessibility auditing and remediation across keyboard navigation, semantic HTML, forms, focus, contrast, media and interactive components.",
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
  { label: "Website Accessibility", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Accessibility",
      serviceType: "Website Accessibility",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website accessibility auditing and remediation based on WCAG 2.2, including keyboard access, semantics, forms, focus, contrast, media and accessible interactions.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-accessibility"}`,
      })),
    },
  ],
};

const wcagPrinciples = [
  {
    icon: "bi-eye",
    name: "Perceivable",
    description: "Users need alternatives or presentation options that allow them to perceive information.",
    items: ["Text alternatives for meaningful images", "Captions for relevant prerecorded media", "Sufficient contrast", "Content that can resize or reflow appropriately"],
  },
  {
    icon: "bi-cursor",
    name: "Operable",
    description: "Users need to navigate and use interactive elements.",
    items: ["Keyboard access", "Logical focus order", "Visible focus", "Avoiding keyboard traps", "Adequate target sizing where required", "Alternatives to dragging interactions"],
  },
  {
    icon: "bi-lightbulb",
    name: "Understandable",
    description: "Content and interaction should be predictable and clear.",
    items: ["Meaningful labels", "Clear error messages", "Consistent help", "Instructions for required input", "Reducing unnecessary repeated entry"],
  },
  {
    icon: "bi-shield-check",
    name: "Robust",
    description: "Code should expose correct semantics to browsers and assistive technologies.",
    items: ["Proper native HTML elements", "Accessible names", "Roles", "States", "Values", "Valid custom component behavior"],
  },
];

const commonBarriers = [
  { icon: "bi-keyboard", title: "Keyboard navigation", description: "Every interactive task should not require a mouse. We review:", items: ["Links", "Buttons", "Menus", "Dialogs", "Forms", "Custom widgets"] },
  { icon: "bi-square", title: "Focus visibility", description: "Keyboard users need to see where they are. Focus styles should be visible and should not be obscured by sticky headers, overlays or other content.", items: [] as string[] },
  { icon: "bi-code-slash", title: "Semantic structure", description: "Correct HTML improves both accessibility and maintainability. We review:", items: ["Headings", "Landmarks", "Lists", "Buttons", "Links", "Tables", "Form controls"] },
  { icon: "bi-image", title: "Images", description: "Meaningful images need appropriate text alternatives. Decorative images should not create unnecessary screen-reader noise.", items: [] },
  { icon: "bi-ui-checks", title: "Forms", description: "Forms need:", items: ["Labels", "Instructions", "Clear required states", "Understandable validation", "Associated error messages"] },
  { icon: "bi-palette", title: "Contrast", description: "Text and meaningful interface components need sufficient visual contrast according to the target WCAG criteria.", items: [] },
  { icon: "bi-menu-button-wide", title: "Interactive components", description: "Custom accordions, tabs, menus, dialogs and dropdowns need correct keyboard and assistive-technology behavior.", items: [] },
  { icon: "bi-hand-index", title: "Touch targets", description: "Small or tightly packed controls can be difficult for people with limited dexterity or mobile users.", items: [] },
  { icon: "bi-arrows-move", title: "Motion", description: "Animation and movement should not create unnecessary barriers and should account for reduced-motion preferences where applicable.", items: [] },
  { icon: "bi-camera-video", title: "Media", description: "Relevant audio/video may require captions, transcripts or other alternatives according to the content and conformance target.", items: [] },
];

const automatedDetectable = ["missing attributes", "certain contrast failures", "duplicate IDs", "some semantic problems"];

const manualQuestions = [
  "Is the alt text actually meaningful?",
  "Is the heading hierarchy logical?",
  "Does the focus order make sense?",
  "Can the modal be operated entirely by keyboard?",
  "Is an error message understandable?",
  "Does the interface still make sense at zoom?",
  "Does a custom widget expose the right state?",
];

const scopeAreas = [
  { title: "Structure and semantics", items: ["Heading hierarchy", "Landmarks", "Links", "Buttons", "Lists", "Tables", "ARIA use where necessary"] },
  { title: "Keyboard", items: ["Tab order", "Focus movement", "Keyboard traps", "Menus", "Dialogs", "Custom controls"] },
  { title: "Visual accessibility", items: ["Contrast", "Focus indication", "Text resizing", "Reflow", "Target size", "Spacing"] },
  { title: "Forms", items: ["Labels", "Instructions", "Errors", "Required fields", "Autocomplete where relevant", "Accessible authentication considerations"] },
  { title: "Images and media", items: ["Alternative text", "Decorative treatment", "Captions", "Transcripts where required"] },
  { title: "Dynamic interfaces", items: ["Accordions", "Tabs", "Modals", "Carousels", "Notifications", "Live regions where justified"] },
  { title: "Responsive behavior", items: ["Zoom", "Mobile layout", "Orientation", "Content reflow"] },
  { title: "Screen-reader semantics", items: ["Accessible names", "Roles", "Values", "States", "Relationships"] },
];

const remediationLayers = [
  { icon: "bi-code-slash", title: "Code", items: ["Replace clickable <div> elements with semantic controls", "Correct labels", "Manage dialog focus", "Expose component state", "Repair heading structure"] },
  { icon: "bi-palette", title: "Design", items: ["Improve contrast", "Strengthen focus styles", "Increase target size", "Adjust layouts for zoom/reflow", "Remove interactions that depend only on hover"] },
  { icon: "bi-file-text", title: "Content", items: ["Improve link text", "Rewrite instructions", "Add useful alt text", "Create captions", "Clarify errors"] },
];

const designSystemComponents = ["buttons", "forms", "navigation", "cards", "modals", "tabs", "accordions", "tables", "notifications"];

const formBarriers = ["placeholder-only labels", "unclear required fields", "errors shown only by color", "focus not moving to relevant errors", "inaccessible date pickers", "time-limited interactions", "authentication patterns that create unnecessary barriers"];

const conformanceScope = ["WCAG version", "target level", "pages/templates in scope", "testing methodology", "supported browsers/assistive technologies", "known exceptions", "remediation responsibilities", "reporting format"];

const editorAdditions = ["images", "headings", "links", "tables", "videos", "downloadable documents"];

const cmsAccessibilityHelp = ["exposing alt-text fields", "limiting heading misuse", "using controlled components", "providing guidance", "protecting key layout patterns"];

const processSteps = [
  { title: "Define scope and target", description: "Agree on the website areas, templates and accessibility target relevant to the engagement." },
  { title: "Automated assessment", description: "Use automated tooling to identify detectable issues efficiently." },
  { title: "Manual review", description: "Test navigation, semantics, forms, focus behavior, zoom, content and key interactions." },
  { title: "Prioritize", description: "Group findings by severity, frequency and user impact." },
  { title: "Remediate", description: "Update code, components, design or content as required." },
  { title: "Retest", description: "Verify fixes and check for regression." },
  { title: "Handover", description: "Provide agreed findings, guidance and ongoing recommendations." },
];

const engagementScope = [
  "automated accessibility audit",
  "manual accessibility review",
  "keyboard testing",
  "semantic HTML review",
  "form review",
  "contrast review",
  "focus review",
  "responsive zoom/reflow checks",
  "screen-reader-oriented semantic checks",
  "component remediation",
  "content recommendations",
  "design-system accessibility",
  "WCAG 2.2 mapping",
  "retesting",
  "developer guidance",
  "CMS editor guidance",
];

const faqs = [
  {
    id: "a11y-wcag22",
    question: "What is WCAG 2.2?",
    answer: "WCAG 2.2 is the current W3C Web Content Accessibility Guidelines Recommendation. It contains testable success criteria for making web content more accessible across a wide range of disabilities.",
    open: true,
  },
  {
    id: "a11y-wcag-aa",
    question: "What is WCAG AA?",
    answer: "WCAG has A, AA and AAA conformance levels. AA includes all Level A and Level AA success criteria. Many organizations use AA as their target, but the required level depends on applicable policy, law, procurement and organizational requirements.",
    open: false,
  },
  {
    id: "a11y-automated-proof",
    question: "Can an automated tool prove our website is accessible?",
    answer: "No. Automated tools can identify some issues, but many accessibility requirements need manual judgment and interaction testing.",
    open: false,
  },
  {
    id: "a11y-wcag22-aa-compliant",
    question: "Can you make our website WCAG 2.2 AA compliant?",
    answer: "We can audit and remediate toward a defined WCAG 2.2 AA scope. A formal conformance claim should only be made after the relevant pages have been tested against the required criteria and any known limitations are documented.",
    open: false,
  },
  {
    id: "a11y-screen-readers",
    question: "Do you test with screen readers?",
    answer: "Assistive-technology testing can be included where required by the engagement. The exact testing matrix should be defined in scope.",
    open: false,
  },
  {
    id: "a11y-seo",
    question: "Does accessibility help SEO?",
    answer: "There is overlap in good practices such as semantic structure, usable navigation and meaningful text alternatives, but accessibility and SEO are different disciplines and should not be treated as interchangeable.",
    open: false,
  },
  {
    id: "a11y-without-redesign",
    question: "Can you fix accessibility without redesigning the entire site?",
    answer: "Often yes. Many issues can be remediated in components, styles, markup and content. Some structural problems may require larger design changes.",
    open: false,
  },
  {
    id: "a11y-regress",
    question: "Can accessibility regress after launch?",
    answer: "Yes. New components, content, plugins and design changes can introduce new barriers. Ongoing governance and reusable accessible components help reduce regression.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "Website Performance", href: "/services/website-performance" },
  { label: "Technical SEO", href: "/services/technical-seo" },
  { label: "CMS Development", href: "/services/cms-development" },
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

function ChecklistList({ items, tight, columns }: { items: string[]; tight?: boolean; columns?: boolean }) {
  return (
    <ul className={`checklist${tight ? " checklist--tight" : ""}${columns ? " checklist--columns" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function BarrierCard({ item, delay }: { item: (typeof commonBarriers)[number]; delay: string }) {
  return (
    <div className="barrier-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="barrier-card">
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
function estimateCardHeight(item: (typeof commonBarriers)[number]) {
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

const barrierColumns = distributeIntoColumns(commonBarriers, estimateCardHeight, 2);

export default function WebsiteAccessibility() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap website-accessibility-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Website Accessibility
                  </Tag>
                  <PageTitle>Make Your Website Easier for More People to Use</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    People experience websites in different ways. Some navigate with a keyboard.
                    Some use screen readers. Some enlarge text. Some need stronger contrast,
                    captions or clearer forms. Others may face temporary or situational
                    limitations. Shivantra helps identify and remove accessibility barriers
                    through design, development and remediation guided by WCAG 2.2.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/website-audit?focus=accessibility`} className="btn-primary">
                      Request an Accessibility Review
                    </Button>
                    <Button href="#accessibility-scope" className="btn-white-outline">
                      See What We Review
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-universal-access" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Website</span>
                    <div className="flow-branches">
                      <span className="flow-step">Keyboard</span>
                      <span className="flow-step">Screen Reader</span>
                      <span className="flow-step">Zoom / Text Scaling</span>
                      <span className="flow-step">Touch</span>
                      <span className="flow-step">Captions</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Website designed for keyboard, screen reader, touch and enlarged-text use
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="barriers-intro">
            <Container>
              <SectionHeader tag="Accessibility is about barriers" title="The same website can be easy for one person and difficult for another" colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  A mouse-only interface may work perfectly for someone using a trackpad and fail
                  for someone navigating by keyboard.
                </Description>
                <Description aos="fade-up" delay={150}>
                  A light gray label may look elegant on one monitor and become unreadable for a
                  user with low vision.
                </Description>
                <Description aos="fade-up" delay={200}>
                  An icon-only button may be visually obvious but have no meaningful name for
                  assistive technology.
                </Description>
                <Description aos="fade-up" delay={250}>
                  Accessibility work looks for those barriers and improves the interface so more
                  people can use it successfully.
                </Description>
                <Description className="mb-0" aos="fade-up" delay={300}>
                  That usually makes the website more robust and understandable for everyone.
                </Description>
              </SectionHeader>
            </Container>
          </Section>

          <Section className="section-muted" id="wcag">
            <Container>
              <SectionHeader tag="WCAG 2.2" title="A practical framework for accessible web content" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  WCAG 2.2 provides testable success criteria under four principles.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {wcagPrinciples.map((principle, index) => (
                  <div className="col-md-6" key={principle.name} data-aos="fade-up" data-aos-delay={String((index % 2) * 100)}>
                    <div className="principle-card">
                      <span className="icon-badge">
                        <i className={`bi ${principle.icon}`} aria-hidden="true"></i>
                      </span>
                      <CardTitle className="fs-5 mb-2">{principle.name}</CardTitle>
                      <Description>{principle.description}</Description>
                      <Description className="fw-semibold mb-2">Examples include:</Description>
                      <ChecklistList items={principle.items} tight />
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="common-barriers">
            <Container>
              <SectionHeader tag="Common barriers" title="Accessibility issues often hide inside ordinary interface decisions" colClass="col-lg-9" />
              <div className="barrier-grid d-none d-md-flex">
                {barrierColumns.map((column, columnIndex) => (
                  <div className="barrier-col" key={columnIndex}>
                    {column.map((item) => (
                      <BarrierCard key={item.title} item={item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="barrier-grid d-flex d-md-none">
                <div className="barrier-col">
                  {commonBarriers.map((item, index) => (
                    <BarrierCard key={item.title} item={item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="automation">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Automation is useful, but incomplete" title="An accessibility scanner cannot use the website like a person" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Automated testing can detect some issues efficiently, such as:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={automatedDetectable} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    But many important questions require human judgment. For example:
                  </Description>
                  <ChecklistList items={manualQuestions} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    For meaningful accessibility work, automated tools should be combined with
                    manual testing and, where the project requires it, assistive-technology
                    testing.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="accessibility-scope">
            <Container>
              <SectionHeader tag="Scope" title="What we can review" colClass="col-lg-9" />
              <div className="row g-4">
                {scopeAreas.map((category, index) => (
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

          <Section className="section-muted" id="remediation">
            <Container>
              <SectionHeader tag="Remediation" title="Fix the cause, not only the scanner warning" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Accessibility remediation can involve several disciplines.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {remediationLayers.map((layer, index) => (
                  <div className="col-md-6 col-lg-4" key={layer.title} data-aos="fade-up" data-aos-delay={String(index * 100)}>
                    <div className="include-card">
                      <span className="icon-badge">
                        <i className={`bi ${layer.icon}`} aria-hidden="true"></i>
                      </span>
                      <CardTitle className="fs-6 mb-3">{layer.title}</CardTitle>
                      <ChecklistList items={layer.items} tight />
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-5" aos="fade-up" delay={100}>
                A technically correct component can still be confusing, and good content cannot
                compensate for a broken keyboard interaction.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={150}>
                Accessibility needs to be considered across the complete experience.
              </Description>
            </Container>
          </Section>

          <Section id="design-system">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Build accessibility into the design system" title="Reusable components can prevent the same issue from appearing on every page" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      For websites under active development, the best time to address
                      accessibility is before inaccessible patterns spread. We can review and
                      improve reusable components such as:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={designSystemComponents} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Once the component behaves correctly, many pages benefit at the same time.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    This is often more sustainable than fixing isolated pages repeatedly.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="accessible-forms">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Accessible forms" title="Forms deserve special attention" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Forms are often where visitors are asked to complete an important task.
                      Common barriers include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={formBarriers} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    We design and remediate forms so the required action and any error recovery
                    are understandable.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="conformance">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="WCAG 2.2 conformance projects" title="Define the target before claiming conformance" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      If a project requires a formal WCAG target, the engagement should specify:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={conformanceScope} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Automated scans alone are not sufficient to establish full WCAG conformance.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Shivantra should not display a conformance claim unless the required
                    evaluation has actually been completed and the claim remains accurate for the
                    version of the site being referenced.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="cms-accessibility">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="CMS and content accessibility" title="Developers are not the only people who can introduce accessibility issues" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      After launch, editors may add:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={editorAdditions} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    CMS configuration can make accessible publishing easier by:
                  </Description>
                  <ChecklistList items={cmsAccessibilityHelp} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    Editor training may also be useful where the team publishes frequently.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="process">
            <Container>
              <SectionHeader tag="Process" title="Our website accessibility process" />
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
              <div className="row mt-5">
                <div className="col-lg-8 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Scope</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Automated Review</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Manual Testing</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Remediation</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Retest</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Maintain</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="scope-list">
            <Container>
              <SectionHeader tag="What an engagement can include" title="Website accessibility scope" tight colClass="col-lg-9" />
              <ChecklistList items={engagementScope} columns />
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
                  <div className="accordion custom-accordion" id="website-accessibility-faq-accordion">
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
                  <SectionTitle>Find the barriers your visitors may already be encountering</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can review key templates and interactions, prioritize the issues that
                    matter most and help remediate them in the code and design system.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/website-audit?focus=accessibility`} className="btn-primary">
                      Request an Accessibility Review
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
