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

const pageUrl = `${siteUrl}/services/cms-development/cms-migration`;

export const metadata: Metadata = {
  title: "CMS Migration Services | Shivantra",
  description:
    "CMS migration services covering content audit, re-modeling, data transformation, media, metadata, URL mapping, redirects, QA and platform reimplementation.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "CMS Migration Services | Shivantra",
    description:
      "Plan and execute CMS migrations across content, data, URLs, SEO, editorial workflow and technical architecture.",
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
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "CMS Migration", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "CMS Migration",
      serviceType: "CMS Migration",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "CMS migration services covering content audit, re-modeling, data transformation, media, metadata, URL mapping, redirects, QA and platform reimplementation.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/cms-development/cms-migration"}`,
      })),
    },
  ],
};

const migrationTriggers = [
  {
    icon: "bi-pencil-square",
    title: "Difficult editing",
    description: "Content teams rely on developers or fragile page-builder workarounds.",
  },
  {
    icon: "bi-clock-history",
    title: "Legacy technology",
    description: "The platform is hard to maintain, secure or extend.",
  },
  {
    icon: "bi-diagram-3",
    title: "Poor content structure",
    description: "Important information is duplicated or locked into page layouts.",
  },
  {
    icon: "bi-code-slash",
    title: "New frontend requirements",
    description: "The organization wants a modern or independent frontend architecture.",
  },
  {
    icon: "bi-share",
    title: "Multiple channels",
    description: "Content needs to be reused in websites, apps or portals.",
  },
  {
    icon: "bi-signpost-split",
    title: "Workflow needs",
    description: "Roles, approvals or localization have outgrown the current setup.",
  },
  {
    icon: "bi-collection",
    title: "Consolidation",
    description: "Several sites or systems need to be rationalized into a more manageable architecture.",
  },
];

const migrationWorkstreams = [
  { icon: "bi-file-text", title: "Content", description: "Pages, articles, services, products, people and other records." },
  { icon: "bi-diagram-3", title: "Structure", description: "Content types, relationships, taxonomies and reusable components." },
  { icon: "bi-images", title: "Media", description: "Images, PDFs, videos and other files." },
  { icon: "bi-tags", title: "Metadata", description: "Titles, descriptions, social metadata and structured fields." },
  { icon: "bi-link-45deg", title: "URLs", description: "Existing addresses and their replacement destinations." },
  { icon: "bi-link", title: "Internal links", description: "References within content need to point to the correct destination." },
  { icon: "bi-person-workspace", title: "Editorial workflow", description: "Roles, permissions, previews and approval processes may change." },
  { icon: "bi-plug", title: "Integrations", description: "Forms, CRM, search, analytics or other systems may need to be reconnected." },
];

const legacyContentIssues = ["obsolete pages", "duplicate articles", "unused media", "outdated services", "broken links", "inconsistent metadata", "content created for old campaigns"];

const auditDecisions = [
  { label: "Keep", title: "Still accurate and useful", description: "Content that remains correct and continues to serve its purpose." },
  { label: "Improve", title: "Valuable, but needs work", description: "Valuable, but needs rewriting or restructuring." },
  { label: "Consolidate", title: "Overlapping records", description: "Several overlapping records can become one stronger destination." },
  { label: "Retire", title: "No longer useful", description: "No longer useful and does not need a replacement." },
];

const mappingExamples = [
  "one rich-text page becomes service fields plus reusable FAQs",
  "embedded author text becomes a reference to a Person record",
  "manually typed location details become Location entities",
  "legacy categories map into a cleaner taxonomy",
];

const seoMigrationItems = [
  "URL inventory",
  "old-to-new mapping",
  "server-side permanent redirects",
  "internal-link updates",
  "canonical updates",
  "sitemap updates",
  "hreflang updates for multilingual sites",
  "metadata migration",
  "structured-data review",
  "Search Console monitoring",
];

const migrationMethods = [
  { label: "API", title: "API migration", description: "Useful when both source and target provide stable APIs." },
  { label: "Export/Import", title: "Export, transform and import", description: "Useful when the source can export structured data." },
  { label: "Scripts", title: "Migration scripts", description: "Useful for repeatable transformations and larger structured datasets." },
  { label: "Manual", title: "Controlled manual migration", description: "Appropriate for edge cases or small amounts of highly irregular content." },
  { label: "Hybrid", title: "Hybrid migration", description: "Often the most practical approach: automate repeatable records and manually handle exceptions." },
];

const pilotRisks = ["field-mapping problems", "missing relationships", "editor issues", "media problems", "unexpected formatting", "frontend gaps"];

const processSteps = [
  { title: "Inventory", description: "List content, URLs, media, integrations and metadata." },
  { title: "Design the target model", description: "Define how content should exist in the new CMS." },
  { title: "Map source to destination", description: "Create field mappings, transformations and URL relationships." },
  { title: "Run a pilot", description: "Migrate a representative content set and validate results." },
  { title: "Build transformation and migration logic", description: "Automate repeatable content movement." },
  { title: "Migrate content and media", description: "Import records and preserve required relationships." },
  { title: "Implement redirects and QA", description: "Test URLs, metadata, links, media and frontend output." },
  { title: "Launch and monitor", description: "Complete cutover and monitor crawl, traffic, errors and editorial operation." },
];

const migrationRisks = [
  { title: "Missing content", mitigation: "Inventory and migration counts." },
  { title: "Broken relationships", mitigation: "ID mapping and validation." },
  { title: "Lost media", mitigation: "Media inventory and post-import checks." },
  { title: "Broken internal links", mitigation: "Link transformation and crawl testing." },
  { title: "SEO disruption", mitigation: "URL mapping, redirects, metadata, sitemaps and monitoring." },
  { title: "Editor confusion", mitigation: "Training and workflow design." },
  { title: "Integration failure", mitigation: "Staging tests and dependency checks." },
  { title: "Character/formatting corruption", mitigation: "Transformation tests and representative samples." },
];

const faqs = [
  {
    id: "migration-any-cms",
    question: "Can you migrate from any CMS?",
    answer: "Most CMS migrations are possible if we can access the content through an API, database, export or other usable source. Feasibility depends on the source platform and data quality.",
    open: true,
  },
  {
    id: "migration-automatic",
    question: "Will all content be migrated automatically?",
    answer: "Not necessarily. Automation is useful for consistent structured data, but irregular legacy content may require transformation or manual handling.",
    open: false,
  },
  {
    id: "migration-seo",
    question: "Will CMS migration hurt SEO?",
    answer:
      "A migration can affect search performance, especially when URLs or content change. Careful mapping and redirects reduce avoidable risk, but temporary fluctuations can occur during significant moves.",
    open: false,
  },
  {
    id: "migration-same-urls",
    question: "Do we need to keep the same URLs?",
    answer: "Not always. Stable, useful URLs can often be preserved. When URLs change, relevant redirects should be planned.",
    open: false,
  },
  {
    id: "migration-cleanup",
    question: "Can we clean up content during migration?",
    answer: "Yes. Migration is often the right time to retire duplicates and restructure important content.",
    open: false,
  },
  {
    id: "migration-media",
    question: "Can you migrate media?",
    answer: "Yes, subject to access and source format. Media files and references should be included in the migration inventory.",
    open: false,
  },
  {
    id: "migration-before-launch",
    question: "Can migration happen before the new website launches?",
    answer: "Yes. Complex projects often use staging environments and repeatable migration scripts before final cutover.",
    open: false,
  },
  {
    id: "migration-training",
    question: "Do you train editors on the new CMS?",
    answer: "Editor enablement can be included in the migration engagement.",
    open: false,
  },
];

const relatedServices = [
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "CMS Consulting", href: "/services/cms-development/cms-consulting" },
  { label: "Headless CMS Development", href: "/services/cms-development/headless-cms" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "Technical SEO", href: "/services/technical-seo" },
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

export default function CmsMigration() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap cms-migration-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    CMS Migration
                  </Tag>
                  <PageTitle>Move Your Content Without Carrying Every Legacy Problem With It</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    Changing CMS should improve how your organization manages content, not simply
                    recreate the old platform inside a new one. Shivantra plans and executes CMS
                    migrations across content, structure, media, metadata, URLs, integrations and
                    editorial workflows so the new system starts with a cleaner foundation.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/contact/?service=cms-migration`} className="btn-primary">
                      Discuss Your CMS Migration
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-arrow-left-right" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Legacy CMS</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Audit + Transform + Map</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">New CMS</span>
                    <div className="flow-branches">
                      <span className="flow-step">Content</span>
                      <span className="flow-step">Media</span>
                      <span className="flow-step">Metadata</span>
                      <span className="flow-step">URLs</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      CMS migration transforming legacy content into a new structured content
                      system
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="why-migrate">
            <Container>
              <SectionHeader tag="Why organizations migrate CMS" title="The platform may no longer fit the organization" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Common triggers include:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {migrationTriggers.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                Migration should begin by identifying the reason for change, because that
                determines what should be different in the destination.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="more-than-copy">
            <Container>
              <SectionHeader tag="Migration is more than moving text" title="Several things move at the same time" colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A CMS migration can involve:
                </Description>
              </SectionHeader>
              <div className="row g-4">
                {migrationWorkstreams.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="content-audit">
            <Container>
              <SectionHeader tag="Content audit" title="Not everything in the old CMS deserves to be migrated" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  Legacy systems often contain:
                </Description>
              </SectionHeader>
              <ChecklistList items={legacyContentIssues} tight />
              <Description className="mt-4 mb-2 fw-semibold" aos="fade-up" delay={150}>
                Before migration, we classify content into decisions such as:
              </Description>
              <div className="row g-4 mt-1">
                {auditDecisions.map((option, index) => (
                  <div className="col-md-6 col-lg-3" key={option.label} data-aos="fade-up" data-aos-delay={String(index * 100)}>
                    <div className="decision-card h-100">
                      <span className="decision-label">{option.label}</span>
                      <CardTitle className="fs-6 mb-2">{option.title}</CardTitle>
                      <Description className="mb-0">{option.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                This reduces clutter in the new CMS and avoids paying to migrate content nobody
                needs.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="content-mapping">
            <Container>
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <SectionHeader tag="Content mapping" title="Map meaning, not just database fields" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      The source CMS and destination CMS rarely represent content in exactly the
                      same way. A migration may need to transform structure like this:
                    </Description>
                  </SectionHeader>
                  <Description aos="fade-up" delay={150} className="fw-semibold mb-2">
                    Examples:
                  </Description>
                  <ChecklistList items={mappingExamples} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    This transformation is one of the most important parts of a CMS migration.
                  </Description>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Old Page Builder Block</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Extract meaningful content</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">New structured fields</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="urls-seo">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="URLs and SEO" title="Preserve useful URL signals when the website structure changes" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      When URLs change, we prepare a mapping from old addresses to the most
                      relevant new destinations. Migration work can include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={seoMigrationItems} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Redirecting every retired URL to the homepage is not a good migration
                    strategy. Where no relevant replacement exists, a correct 404 or 410 may be
                    more appropriate.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Search engines need time to recrawl and reprocess significant URL changes, so
                    permanent server-side redirects should stay in place for the long term rather
                    than being removed once traffic looks stable.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="methods">
            <Container>
              <SectionHeader tag="Migration methods" title="Use the method that fits the source system and content volume" colClass="col-lg-9" />
              <div className="row g-4">
                {migrationMethods.map((method, index) => (
                  <div className="col-md-6 col-lg-4" key={method.label} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="decision-card h-100">
                      <span className="decision-label">{method.label}</span>
                      <CardTitle className="fs-6 mb-2">{method.title}</CardTitle>
                      <Description className="mb-0">{method.description}</Description>
                    </div>
                  </div>
                ))}
              </div>
              <Description className="mt-5 mb-0" aos="fade-up" delay={100}>
                Migration scripts should be testable and repeatable where possible so the process
                can be run against staging before final cutover.
              </Description>
            </Container>
          </Section>

          <Section id="pilot">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Pilot first" title="Test the model before migrating everything" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      For complex migrations, a pilot content set can reveal:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={pilotRisks} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    It is cheaper to discover those issues with a representative subset than after
                    the full import has been completed.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Process" title="Our CMS migration process" />
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

          <Section id="risks">
            <Container>
              <SectionHeader tag="Risks we plan for" title="Migration risk should be explicit" colClass="col-lg-9" />
              <div className="row g-4">
                {migrationRisks.map((risk, index) => (
                  <div className="col-md-6 col-lg-4" key={risk.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
                    <div className="risk-card">
                      <div className="risk-title">
                        <i className="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
                        <CardTitle className="fs-6 mb-0">{risk.title}</CardTitle>
                      </div>
                      <div className="mitigation">
                        <i className="bi bi-shield-check" aria-hidden="true"></i>
                        <Description className="mb-0">{risk.mitigation}</Description>
                      </div>
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
                  <div className="accordion custom-accordion" id="cms-migration-faq-accordion">
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
                  <SectionTitle>Before moving content, decide what the new CMS should improve</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    We can audit the existing content, define the target model and build a
                    migration plan that accounts for both editorial and technical requirements.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/contact/?service=cms-migration`} className="btn-primary">
                      Discuss Your CMS Migration
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
