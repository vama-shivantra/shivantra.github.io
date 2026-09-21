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

const pageUrl = `${siteUrl}/services/website-maintenance`;

export const metadata: Metadata = {
  title: "Website Maintenance & Support Services | Shivantra",
  description:
    "Website maintenance and support for updates, backups, monitoring, fixes, performance, content changes and ongoing technical improvements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Maintenance & Support | Shivantra",
    description: "Ongoing website maintenance, monitoring, technical support and improvements across CMS, frontend, integrations and hosting.",
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
  { label: "Website Maintenance & Support", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Maintenance & Support",
      serviceType: "Website Maintenance and Support",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Website maintenance and support for updates, backups, monitoring, fixes, performance, content changes and ongoing technical improvements.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/website-maintenance"}`,
      })),
    },
  ],
};

const websiteDependencies = ["A content-management system", "Frameworks and libraries", "Plugins", "Hosting", "Databases", "APIs", "Forms", "Analytics", "CRM integrations", "Third-party services"];

const changeScenarios = [
  "A browser update can expose an issue",
  "A plugin can introduce a compatibility problem",
  "An expired API key can break a form",
  "A new marketing script can slow the page down",
  "An editor can upload a 12 MB image",
];

const pillars = [
  { label: "Maintain", title: "Keep the existing website healthy", items: ["Software updates", "Dependency updates", "Backups", "Monitoring", "Compatibility checks", "Security hygiene", "Performance review"] },
  { label: "Support", title: "Help when something needs attention", items: ["Broken page", "Form problem", "CMS issue", "Layout bug", "Integration failure", "Content assistance", "Deployment issue"] },
  { label: "Improve", title: "Make controlled changes over time", items: ["New page", "New form", "Conversion improvement", "Performance fix", "Integration enhancement", "Reusable component", "Content structure improvement"] },
];

const maintenanceAreas = [
  { icon: "bi-layout-text-window", title: "CMS and platform", items: ["CMS core", "Plugins/modules", "Themes", "Platform settings", "Editor functionality"] },
  { icon: "bi-window", title: "Frontend", items: ["React", "Next.js", "JavaScript", "Styles", "Reusable components", "Responsive behavior"] },
  { icon: "bi-hdd-network", title: "Backend", items: ["APIs", "Services", "Databases", "Background processes", "Dependencies"] },
  { icon: "bi-ui-checks", title: "Forms", items: ["Validation", "Submission", "Email delivery", "CRM integration", "Spam protection"] },
  { icon: "bi-plug", title: "Integrations", items: ["CRM", "ERP", "Analytics", "Booking", "Payment", "Third-party APIs"] },
  { icon: "bi-server", title: "Hosting and deployment", items: ["Deployment", "Environment configuration", "SSL", "CDN", "Server configuration", "Domain-related technical issues"] },
  { icon: "bi-graph-up", title: "Analytics", items: ["Event tracking", "Conversion tracking", "Tag configuration", "Campaign-related website tracking"] },
];

const updateReasons = ["security", "compatibility", "bug fixes", "platform support"];

const updateProcessSteps = [
  { title: "Review", description: "Identify available updates and potential impact." },
  { title: "Backup", description: "Create or verify an appropriate restore point before material changes." },
  { title: "Update", description: "Apply changes in the appropriate environment." },
  { title: "Test", description: "Check important pages and workflows such as homepage, navigation, forms, login, checkout and integrations." },
  { title: "Validate", description: "Confirm that the website behaves correctly after the change." },
  { title: "Roll back if required", description: "If an update introduces a serious problem, restore or revert rather than leaving the site broken." },
];

const backupCoverage = ["Failed updates", "Accidental content changes", "Deployment errors", "Data loss", "Compromised files", "Infrastructure failure"];
const backupConsiderations = ["Frequency", "Retention", "Database", "Media/files", "Application configuration", "Storage location", "Access control", "Restore process"];

const monitoringAreas = [
  { icon: "bi-activity", title: "Uptime", description: "Is the website reachable?" },
  { icon: "bi-bug", title: "Application errors", description: "Are important server or application errors occurring?" },
  { icon: "bi-ui-checks", title: "Form workflows", description: "Are business-critical forms still working?" },
  { icon: "bi-plug", title: "Integrations", description: "Are APIs or connected systems failing?" },
  { icon: "bi-shield-lock", title: "SSL", description: "Is the certificate valid and renewing correctly?" },
  { icon: "bi-eye", title: "Security signals", description: "Are there signs that require investigation?" },
  { icon: "bi-speedometer2", title: "Performance", description: "Has performance materially regressed?" },
];

const securityPractices = ["Timely software updates", "Removing unused components", "Secure access control", "Credential management", "Limiting administrator access", "Backup", "Security headers", "Firewall/CDN configuration", "Malware or vulnerability monitoring where supported", "File permissions", "Dependency review"];
const customAppSecurity = ["Authentication", "API access", "Dependency vulnerabilities", "Secrets", "Rate limits", "Logging"];

const performanceCauses = ["Larger images", "New fonts", "Marketing tags", "Chat widgets", "Additional plugins", "Embeds", "New components", "Analytics tools"];
const performanceSupport = ["Core Web Vitals review", "Image optimization", "Script review", "Caching", "Frontend optimization", "Third-party script review"];

const smallChanges = ["Update text", "Replace media", "Add a team member", "Add a service", "Create a landing page", "Update navigation", "Add a new form field", "Publish a resource", "Fix a responsive issue", "Add a reusable section"];

const integrationFailureReasons = ["API authentication changes", "Tokens expire", "Fields change", "Endpoints are deprecated", "Rate limits change", "Another system changes its validation"];
const integrationSupportScope = ["Monitoring", "Error review", "Credential updates", "API changes", "Mapping changes", "Integration fixes"];

const supportProcessSteps = [
  { title: "Request", description: "The client reports an issue or change through the agreed support channel." },
  { title: "Triage", description: "Identify severity, scope, affected system and whether the request is maintenance, support or new development." },
  { title: "Diagnose", description: "Investigate the cause before applying a fix." },
  { title: "Resolve", description: "Implement the change in the appropriate environment." },
  { title: "Validate", description: "Test the affected page, workflow or system." },
  { title: "Record", description: "For significant changes, retain enough context to understand what was changed." },
];

const scopeBoundaries = [
  { title: "Typical maintenance", items: ["Software updates", "Dependency updates", "Monitoring", "Backups", "Bug fixes", "Minor compatibility fixes", "Routine content changes"] },
  { title: "Typical support", items: ["Investigate broken form", "CMS assistance", "Deployment issue", "Integration troubleshooting", "Content/editor help"] },
  { title: "Typical enhancement", items: ["New page", "New reusable component", "New tracking event", "Small integration extension"] },
  { title: "Usually a separate project", items: ["Complete redesign", "New portal", "Major CMS migration", "Large integration", "Ecommerce implementation", "Substantial new application functionality"] },
];

const supportedTech = [
  { title: "CMS Websites", items: ["WordPress", "Headless CMS", "Other supported content platforms"] },
  { title: "Modern Frontends", items: ["React", "Next.js", "JavaScript-based websites"] },
  { title: "Custom Websites", items: ["Custom frontend/backend applications", "Databases", "API-connected websites"] },
  { title: "Integrated Websites", items: ["CRM", "ERP", "Analytics", "Email", "Booking", "Payment", "Custom APIs"] },
];

const takeoverReview = ["Source-code access", "Hosting", "Domain/DNS", "CMS access", "Dependencies", "Plugins/modules", "Backup", "Deployment", "Integrations", "Analytics", "Known issues"];

const engagementScope = [
  { title: "Maintenance", items: ["CMS/platform updates", "Plugin/dependency updates", "Compatibility checks", "Backups", "Restore support"] },
  { title: "Monitoring", items: ["Uptime", "SSL", "Application errors", "Important integrations", "Critical forms"] },
  { title: "Security", items: ["Routine update hygiene", "Access review", "Vulnerability response where relevant", "Security configuration support"] },
  { title: "Performance", items: ["Periodic performance review", "Media optimization", "Caching review", "Regression fixes"] },
  { title: "Technical support", items: ["Troubleshooting", "Bug fixes", "CMS assistance", "Deployment support"] },
  { title: "Content support", items: ["Text changes", "Image updates", "Page updates", "Small new sections"] },
  { title: "Improvements", items: ["Minor enhancements", "New components", "Small integrations", "Tracking changes"] },
  { title: "Reporting", items: ["Updates completed", "Issues resolved", "Uptime summary", "Performance observations", "Recommendations"] },
];

const faqs = [
  {
    id: "maint-not-built-by-us",
    question: "Do you maintain websites that Shivantra did not build?",
    answer: "Yes, subject to an initial technical review. We need to understand the codebase, CMS, hosting, dependencies and existing issues before accepting ongoing responsibility.",
    open: true,
  },
  {
    id: "maint-what-included",
    question: "What is included in website maintenance?",
    answer: "The exact scope depends on the agreement. It can include updates, backups, monitoring, fixes, performance checks, content changes and technical support.",
    open: false,
  },
  {
    id: "maint-wordpress",
    question: "Do you provide WordPress maintenance?",
    answer: "Yes. WordPress maintenance can include core, theme and plugin updates, backup, monitoring, compatibility fixes and content support depending on the plan.",
    open: false,
  },
  {
    id: "maint-nextjs",
    question: "Can you maintain Next.js or React websites?",
    answer: "Yes. Support can cover frontend code, dependencies, deployment, APIs and integrations depending on the architecture.",
    open: false,
  },
  {
    id: "maint-hosting",
    question: "Do you provide hosting?",
    answer: "Hosting can be reviewed or managed depending on the project arrangement. Maintenance and hosting do not have to be the same service.",
    open: false,
  },
  {
    id: "maint-never-down",
    question: "Do you guarantee that the website will never go down?",
    answer: "No. No hosting or maintenance provider can responsibly guarantee that incidents will never happen. Monitoring, backups and support reduce risk and improve the ability to respond when issues occur.",
    open: false,
  },
  {
    id: "maint-backup-frequency",
    question: "How often should the website be backed up?",
    answer: "It depends on how frequently important data changes. A brochure website and a transaction-heavy website should not necessarily use the same backup frequency.",
    open: false,
  },
  {
    id: "maint-emergency",
    question: "Do you provide emergency support?",
    answer: "Emergency or out-of-hours support should be defined explicitly in the support agreement. It should not be assumed unless included.",
    open: false,
  },
  {
    id: "maint-new-pages",
    question: "Can maintenance include new pages?",
    answer: "Small content or page changes can be included depending on the plan. Larger features or redesign work are usually scoped separately.",
    open: false,
  },
  {
    id: "maint-integrations",
    question: "Can you maintain our integrations?",
    answer: "Yes. CRM, analytics, APIs, forms and other integrations can be supported where included in scope.",
    open: false,
  },
  {
    id: "maint-support-requests",
    question: "How do support requests work?",
    answer: "Support is handled through the agreed channel. Requests are triaged, diagnosed, resolved and validated according to the scope and support arrangement.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
  { label: "Website Performance Optimization", href: "/services/website-performance" },
  { label: "Technical SEO", href: "/services/technical-seo" },
  { label: "Website Accessibility", href: "/services/website-accessibility" },
  { label: "Website Integrations", href: "/services/website-integrations" },
  { label: "API Integration", href: "/services/website-integrations/api" },
  { label: "CRM Integration", href: "/services/website-integrations/crm" },
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

function MasonryCard({
  title,
  items,
  icon,
  delay,
}: {
  title: string;
  items: string[];
  icon?: string;
  delay: string;
}) {
  return (
    <div className="masonry-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="masonry-card">
        {icon && (
          <span className="icon-badge">
            <i className={`bi ${icon}`} aria-hidden="true"></i>
          </span>
        )}
        <CardTitle className="fs-6 mb-3">{title}</CardTitle>
        <ChecklistList items={items} tight />
      </div>
    </div>
  );
}

function estimateCardHeight(item: { items: string[] }) {
  const base = 110;
  return base + item.items.length * 34;
}

function distributeIntoColumns<T extends { items: string[] }>(items: T[], columnCount: number) {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights = Array<number>(columnCount).fill(0);
  for (const item of items) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(item);
    heights[shortest] += estimateCardHeight(item);
  }
  return columns;
}

const maintenanceAreaColumns = distributeIntoColumns(maintenanceAreas, 2);
const scopeBoundaryColumns = distributeIntoColumns(scopeBoundaries, 2);
const supportedTechColumns = distributeIntoColumns(supportedTech, 2);

export default function WebsiteMaintenance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap website-maintenance-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Website Maintenance & Support
                  </Tag>
                  <PageTitle>Keep Your Website Reliable After Launch</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A website does not become maintenance-free once it goes live. Software
                    changes. Content changes. Integrations change. New pages get added.
                    Third-party tools introduce updates. Performance can slowly decline. Shivantra
                    provides ongoing website maintenance and technical support to help keep your
                    website current, monitored and easier to operate over time.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=website-maintenance`} className="btn-primary">
                      Discuss Website Support
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-shield-check" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Website</span>
                    <div className="flow-branches">
                      <span className="flow-step">Backup</span>
                      <span className="flow-step">Monitoring</span>
                      <span className="flow-step">Update</span>
                      <span className="flow-step">Performance</span>
                      <span className="flow-step">Support</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Website monitored and maintained through backups, updates and performance
                      checks
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="launch-not-end">
            <Container>
              <SectionHeader tag="Launch Is Not the End" title="A website changes even when your business does nothing" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A website depends on more than the pages visitors see. Behind it may be:
                </Description>
              </SectionHeader>
              <ChecklistList items={websiteDependencies} tight />
              <Description className="mt-4" aos="fade-up" delay={150}>
                Any of those can change over time.
              </Description>
              <ChecklistList items={changeScenarios} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                Maintenance is the process of noticing and addressing those changes before they
                become larger operational problems.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="three-pillars">
            <Container>
              <SectionHeader tag="Three Pillars" title="Maintain. Support. Improve." colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Website maintenance works best when it is broader than a checklist of updates.
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {pillars.map((pillar, index) => (
                  <div className="col-md-4" key={pillar.label} data-aos="fade-up" data-aos-delay={String(index * 100)}>
                    <div className="decision-card h-100">
                      <span className="decision-label">{pillar.label}</span>
                      <CardTitle className="fs-6 mb-2">{pillar.title}</CardTitle>
                      <ChecklistList items={pillar.items} tight />
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                The exact mix depends on the website and support agreement.
              </Description>
            </Container>
          </Section>

          <Section id="what-we-maintain">
            <Container>
              <SectionHeader tag="What We Can Maintain" title="Website maintenance across more than the visible pages" colClass="col-lg-9" />
              <div className="masonry-grid d-none d-md-flex">
                {maintenanceAreaColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((area) => (
                      <MasonryCard key={area.title} {...area} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {maintenanceAreas.map((area, index) => (
                    <MasonryCard key={area.title} {...area} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="maintenance-system">
            <Container>
              <SectionHeader tag="Maintenance System" colClass="col-lg-9" />
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="100">
                    <span className="flow-step">Website</span>
                    <div className="flow-branches">
                      <span className="flow-step">Updates</span>
                      <span className="flow-step">Backups</span>
                      <span className="flow-step">Monitoring</span>
                      <span className="flow-step">Security</span>
                      <span className="flow-step">Performance</span>
                      <span className="flow-step">Forms</span>
                      <span className="flow-step">Integrations</span>
                    </div>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Maintain → Support → Improve</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="controlled-updates">
            <Container>
              <SectionHeader tag="Controlled Updates" title="Updating software should not mean clicking Update and hoping for the best" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Updates are important for:
                </Description>
              </SectionHeader>
              <ChecklistList items={updateReasons} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                But updates can also introduce incompatibilities. For websites where changes carry
                meaningful risk, the process should be controlled.
              </Description>
              <div className="row g-4 mt-1">
                {updateProcessSteps.map((step, index) => (
                  <div className="col-md-6 col-lg-4" key={step.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="process-card h-100">
                      <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                      <CardTitle className="fs-6 mb-2">{step.title}</CardTitle>
                      <Description className="mb-0">{step.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                The exact update process depends on the technology and hosting environment.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="backups">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Backups & Recovery" title="A backup only becomes useful when it can help you recover" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Backups provide an important recovery layer for:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={backupCoverage} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    A backup strategy may need to consider:
                  </Description>
                  <ChecklistList items={backupConsiderations} tight />
                  <Description className="mt-4" aos="fade-up" delay={200}>
                    For critical websites, recovery expectations should be defined explicitly. A
                    daily backup may be adequate for a brochure site.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={250}>
                    It may not be adequate for a website receiving important transactions
                    throughout the day. Backup frequency should follow the business requirement.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="monitoring">
            <Container>
              <SectionHeader tag="Monitoring" title="You should not have to wait for a customer to tell you the website is broken" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Monitoring can help surface issues earlier. Depending on the website and support
                  plan, monitoring may include:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {monitoringAreas.map((area, index) => (
                  <div className="col-md-6 col-lg-3" key={area.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...area} />
                  </div>
                ))}
              </div>
              <Description className="mt-5" aos="fade-up" delay={100}>
                Monitoring does not eliminate incidents.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={150}>
                It reduces the chance that important failures remain invisible.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="security">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Security Hygiene" title="Maintenance reduces avoidable security risk" tight colClass="col-12">
                    <Description aos="fade-up" delay={100}>
                      No provider can guarantee that a public website will never be attacked.
                    </Description>
                    <Description className="mb-0" aos="fade-up" delay={150}>
                      But routine maintenance can reduce common avoidable risks. Depending on
                      technology, this can include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={securityPractices} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={200}>
                    For custom applications, security work may also involve:
                  </Description>
                  <ChecklistList items={customAppSecurity} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={250}>
                    Security requirements should be proportional to the site&apos;s risk and data.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="performance">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Performance Maintenance" title="A website can become slower without anyone deliberately changing the code" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Performance often degrades gradually. Common causes include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={performanceCauses} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Ongoing performance support can include:
                  </Description>
                  <ChecklistList items={performanceSupport} tight />
                  <Description className="mt-4" aos="fade-up" delay={200}>
                    Performance maintenance is particularly useful for sites receiving regular
                    marketing changes.
                  </Description>
                  <Button href="/services/website-performance" className="btn-white-outline mt-2">
                    Explore Website Performance Optimization
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="content-changes">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Content and Small Changes" title="Not every website update needs a new project" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Ongoing support can provide a practical way to handle smaller changes such
                      as:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={smallChanges} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Whether this work is included within the maintenance plan or treated
                    separately should be defined clearly.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    The objective is to give the business a reliable path for routine changes
                    rather than accumulating a list of unresolved website issues.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="integrations-maintenance">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Integrations Need Maintenance Too" title="Connected websites depend on systems outside the website" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      An integration that works today can fail later because:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={integrationFailureReasons} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Where the website depends on important integrations, support can include:
                  </Description>
                  <ChecklistList items={integrationSupportScope} tight />
                  <Button href="/services/website-integrations" className="btn-white-outline mt-4">
                    Explore Website Integrations
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="support-works">
            <Container>
              <SectionHeader tag="How Support Works" title="A clear support process is part of the service" />
              <div className="row g-4">
                {supportProcessSteps.map((step, index) => (
                  <div className="col-md-6 col-lg-4" key={step.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="process-card h-100">
                      <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                      <CardTitle className="fs-6 mb-2">{step.title}</CardTitle>
                      <Description className="mb-0">{step.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                For recurring support agreements, response expectations and support channels
                should be defined commercially rather than implied by marketing copy.
              </Description>
            </Container>
          </Section>

          <Section id="scope-boundaries">
            <Container>
              <SectionHeader tag="Maintenance vs New Development" title="Define what belongs inside the support plan" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Clear boundaries prevent confusion.
                </Description>
              </SectionHeader>
              <div className="masonry-grid d-none d-md-flex">
                {scopeBoundaryColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((category) => (
                      <MasonryCard key={category.title} {...category} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {scopeBoundaries.map((category, index) => (
                    <MasonryCard key={category.title} {...category} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                The agreement should state how work outside maintenance scope is estimated and
                approved.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="supported-tech">
            <Container>
              <SectionHeader tag="Websites We Can Support" title="Support should match the technology behind the site" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Depending on project assessment, Shivantra can support websites built with
                  technologies such as:
                </Description>
              </SectionHeader>
              <div className="masonry-grid d-none d-md-flex">
                {supportedTechColumns.map((column, columnIndex) => (
                  <div className="masonry-col" key={columnIndex}>
                    {column.map((category) => (
                      <MasonryCard key={category.title} {...category} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="masonry-grid d-flex d-md-none">
                <div className="masonry-col">
                  {supportedTech.map((category, index) => (
                    <MasonryCard key={category.title} {...category} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                For a website built by another provider, we may first need a technical review
                before taking responsibility for ongoing maintenance.
              </Description>
            </Container>
          </Section>

          <Section id="takeover">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Taking Over an Existing Website" title="We can support websites we did not originally build" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Before taking over support, we may review:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={takeoverReview} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    This helps establish the current condition of the website before defining
                    ongoing responsibility.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    We should not promise to maintain an unknown system without first
                    understanding what is involved.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="engagement-scope">
            <Container>
              <SectionHeader tag="What an Engagement Can Include" title="Website maintenance and support scope" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Depending on the plan:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {engagementScope.map((category, index) => (
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
                  <div className="accordion custom-accordion" id="website-maintenance-faq-accordion">
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
                  <SectionTitle>Give your website a clear plan for what happens after launch</SectionTitle>
                  <Description aos="fade-up" delay={100}>
                    If your website is important to your business, maintenance should not depend
                    on remembering to check it when something breaks.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={150}>
                    We can review the website, identify what needs ongoing attention and define a
                    support approach around the technology and business requirements.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=website-maintenance`} className="btn-primary">
                      Discuss Website Support
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
