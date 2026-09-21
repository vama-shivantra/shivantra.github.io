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

const pageUrl = `${siteUrl}/services/technical-seo`;

export const metadata: Metadata = {
  title: "Technical SEO Services | Shivantra",
  description:
    "Technical SEO services for crawlability, indexing, canonicals, redirects, sitemaps, JavaScript rendering, structured data and website architecture.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Technical SEO Services | Shivantra",
    description:
      "Development-led technical SEO across crawling, indexing, URLs, canonicals, sitemaps, JavaScript, redirects and structured data.",
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
  { label: "Technical SEO", href: null },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Technical SEO",
      serviceType: "Technical SEO",
      provider: {
        "@type": "Organization",
        name: "Shivantra Solutions Private Limited",
        url: siteUrl,
      },
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "Technical SEO services for crawlability, indexing, canonicals, redirects, sitemaps, JavaScript rendering, structured data and website architecture.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbTrail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${siteUrl}${crumb.href ?? "/services/technical-seo"}`,
      })),
    },
  ],
};

const foundationBenefits = [
  "important pages are discoverable",
  "crawlers can access them",
  "URLs behave consistently",
  "duplicate pages are handled deliberately",
  "JavaScript content can be processed",
  "redirects point to relevant destinations",
  "metadata is implemented correctly",
  "structured data reflects visible content",
];

const technicalProblems = [
  { icon: "bi-link-45deg", title: "Important pages are not linked", description: "If a page exists only behind a search box or JavaScript interaction, discovery can become unreliable." },
  { icon: "bi-robot", title: "Robots rules are misunderstood", description: "robots.txt controls crawler access. It is not a reliable mechanism for keeping a public URL out of search results." },
  { icon: "bi-eye-slash", title: "noindex appears accidentally", description: "Staging or template settings can unintentionally prevent important pages from being indexed." },
  { icon: "bi-files", title: "Duplicate URLs compete for canonical selection", description: "Parameters, alternate paths or CMS behavior can create several URLs for substantially the same content." },
  { icon: "bi-signpost-split", title: "Redirects are incorrect", description: "Long redirect chains, loops or irrelevant destinations waste crawl effort and create poor user experiences." },
  { icon: "bi-filetype-js", title: "JavaScript hides important content or links", description: "Core content and crawlable navigation should not depend on fragile interaction patterns." },
  { icon: "bi-exclamation-triangle", title: "Status codes do not match reality", description: "A missing page that returns 200 OK sends a different signal from a proper 404." },
];

const scopeAreas = [
  { icon: "bi-search", title: "Crawlability", description: "We review:", items: ["robots.txt", "Blocked resources", "Crawlable links", "Status codes", "Server errors", "Orphaned pages", "Navigation"] },
  { icon: "bi-list-check", title: "Indexing", description: "We review:", items: ["noindex", "Indexed/not-indexed patterns", "Duplicate pages", "Canonical selection", "Search Console signals where access is available"] },
  { icon: "bi-link", title: "URL architecture", description: "We look for:", items: ["Duplicate URL paths", "Parameter issues", "Inconsistent trailing slash behavior", "HTTP/HTTPS duplication", "www/non-www inconsistencies", "Unnecessary URL variants"] },
  { icon: "bi-diagram-3", title: "Internal linking", description: "Important pages should have crawlable links from other discoverable pages. Anchor text should help users and search engines understand the destination.", items: [] as string[] },
  { icon: "bi-bookmark-check", title: "Canonicals", description: "Canonical tags should reinforce the intended primary URL rather than conflict with redirects, sitemap entries or internal links.", items: [] },
  { icon: "bi-arrow-left-right", title: "Redirects", description: "We review:", items: ["Permanent redirects", "Temporary redirects", "Chains", "Loops", "Old URLs", "Migration mappings"] },
  { icon: "bi-map", title: "Sitemaps", description: "Sitemaps should contain canonical URLs that the site actually wants indexed.", items: [] },
  { icon: "bi-code-slash", title: "JavaScript rendering", description: "We investigate whether:", items: ["Content exists in rendered HTML", "Links are crawlable", "Routing creates stable URLs", "Client errors prevent content", "Resources needed for rendering are accessible"] },
  { icon: "bi-braces", title: "Structured data", description: "Markup should:", items: ["Match visible content", "Use relevant supported types", "Validate technically", "Avoid invented or misleading information"] },
  { icon: "bi-globe", title: "International SEO", description: "Where applicable:", items: ["Language/country URLs", "hreflang", "Canonicals", "Sitemap relationships"] },
  { icon: "bi-speedometer2", title: "Performance", description: "Performance is not synonymous with Technical SEO, but severe performance and rendering issues can affect users and search systems.", items: [] },
];

const crawlVsIndexExamples = [
  "a URL blocked in robots.txt may still be known from external links",
  "a crawlable page can contain noindex",
  "a sitemap can help discovery but does not guarantee indexing",
];

const jsSeoNeeds = ["unique URLs", "crawlable links", "accessible resources", "rendered content", "meaningful metadata", "correct status behavior"];

const jsSeoIssues = [
  "client-only content failing to render",
  "route states without URLs",
  "navigation using non-link elements",
  "API failures producing empty content",
  "metadata set too late or inconsistently",
  "server returning success for missing pages",
];

const canonicalSignals = ["redirects", "rel=\"canonical\"", "sitemap inclusion", "internal-link consistency", "HTTPS preference"];

const sitemapReviewItems = ["canonical URLs", "invalid or redirected entries", "noindex pages", "outdated URLs", "sitemap splitting for large sites", "sitemap index files", "multilingual relationships where relevant"];

const migrationItems = ["old-to-new URL mapping", "permanent server-side redirects", "updated internal links", "updated canonicals", "sitemap changes", "post-launch crawl validation"];

const structuredDataTypes = ["Organization", "BreadcrumbList", "Article", "Product", "LocalBusiness", "Service-related entities where suitable", "Other supported types relevant to the site"];

const cmsGeneratedUrls = ["tag archives", "author archives", "filtered URLs", "attachment pages", "preview URLs", "duplicate paths", "query parameters", "thin taxonomy pages"];

const cmsUrlDecisions = ["be indexed", "be crawled", "be canonicalized", "be redirected", "remain internal-only"];

const processSteps = [
  { title: "Crawl the website", description: "Build a technical view of URLs, links, status codes, metadata and canonical signals." },
  { title: "Compare with search-engine evidence", description: "Use available Search Console/index information to understand real indexing behavior." },
  { title: "Diagnose root causes", description: "Separate symptoms from implementation problems." },
  { title: "Prioritize", description: "Group issues by severity, scale and likely impact." },
  { title: "Implement", description: "Fix code, CMS configuration, server rules, templates or routing." },
  { title: "Validate", description: "Re-crawl and test important URLs." },
  { title: "Monitor", description: "For major changes or migrations, monitor Search Console, crawl errors and important pages after deployment." },
];

const engagementScope = [
  "technical site crawl",
  "indexation analysis",
  "robots.txt review",
  "noindex review",
  "sitemap review",
  "canonical audit",
  "redirect audit",
  "HTTP status review",
  "internal linking",
  "URL architecture",
  "JavaScript rendering",
  "structured data",
  "metadata implementation",
  "hreflang",
  "pagination/infinite-scroll review",
  "migration support",
  "Search Console diagnostics",
  "developer implementation",
];

const faqs = [
  {
    id: "seo-guarantee-rankings",
    question: "Does Technical SEO guarantee higher rankings?",
    answer: "No. Technical SEO can remove obstacles and improve how a website is crawled and understood, but rankings also depend on relevance, content quality, competition, authority and many other signals.",
    open: true,
  },
  {
    id: "seo-sitemap-required",
    question: "Is a sitemap required for Google to index a website?",
    answer: "No. Search engines can discover URLs through links. A sitemap helps discovery and communicates important URLs, especially for larger or changing sites, but it does not guarantee indexing.",
    open: false,
  },
  {
    id: "seo-robots-txt",
    question: "Does robots.txt stop pages appearing in Google?",
    answer: "Not reliably. robots.txt controls crawling, not indexing. A blocked URL can still be discovered from links. Use the appropriate indexing control when the objective is exclusion from search.",
    open: false,
  },
  {
    id: "seo-js-index",
    question: "Can Google index JavaScript websites?",
    answer: "Yes, Google can render JavaScript. However, routing, links, server responses, resource access and rendering errors can still create search problems.",
    open: false,
  },
  {
    id: "seo-canonical-tag",
    question: "What is a canonical tag?",
    answer: "A canonical tag indicates the preferred URL among duplicate or highly similar pages. It is one signal used in canonicalization and should align with redirects, internal links and sitemap strategy.",
    open: false,
  },
  {
    id: "seo-fix-directly",
    question: "Can you fix technical SEO issues directly?",
    answer: "Yes. Shivantra can implement code and configuration changes rather than only producing an audit.",
    open: false,
  },
  {
    id: "seo-fix-everything",
    question: "Should every technical issue be fixed?",
    answer: "No. Issues should be prioritized by whether they affect important URLs or create meaningful crawl, indexing or user problems.",
    open: false,
  },
  {
    id: "seo-agencies",
    question: "Do you work with SEO agencies?",
    answer: "Yes. We can act as the development partner responsible for implementing technical recommendations.",
    open: false,
  },
];

const relatedServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Redesign", href: "/services/website-development/website-redesign" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "CMS Migration", href: "/services/cms-development/cms-migration" },
  { label: "Website Performance", href: "/services/website-performance" },
  { label: "Website Accessibility", href: "/services/website-accessibility" },
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

function ScopeCard({ item, delay }: { item: (typeof scopeAreas)[number]; delay: string }) {
  return (
    <div className="scope-card-wrap" data-aos="fade-up" data-aos-delay={delay}>
      <div className="scope-card">
        <span className="icon-badge">
          <i className={`bi ${item.icon}`} aria-hidden="true"></i>
        </span>
        <CardTitle className="fs-6 mb-2">{item.title}</CardTitle>
        <Description className={item.items.length ? "" : "mb-0"}>{item.description}</Description>
        {item.items.length > 0 && <ChecklistList items={item.items} tight />}
        {item.title === "Performance" && (
          <Button href="/services/website-performance" className="btn-white-outline mt-3">
            Explore Website Performance Optimization
            <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
          </Button>
        )}
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
function estimateCardHeight(item: (typeof scopeAreas)[number]) {
  const base = 170;
  const descriptionLines = Math.ceil(item.description.length / 42);
  const ctaHeight = item.title === "Performance" ? 60 : 0;
  return base + descriptionLines * 26 + item.items.length * 34 + ctaHeight;
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

const scopeColumns = distributeIntoColumns(scopeAreas, estimateCardHeight, 2);

export default function TechnicalSeo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap technical-seo-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section>
            <Container>
              <BreadcrumbNav />
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <Tag hero marginBottom>
                    Technical SEO
                  </Tag>
                  <PageTitle>Make It Easier for Search Engines to Find and Understand Your Website</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A page cannot perform in search if the systems behind the website make it
                    difficult to discover, crawl, render or index correctly. Shivantra provides
                    development-led Technical SEO across site architecture, crawlability, index
                    controls, redirects, canonicals, sitemaps, JavaScript rendering, structured
                    data and technical implementation.
                  </Description>
                  <div className="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                    <Button href={`${basePath}/website-audit?focus=technical-seo`} className="btn-primary">
                      Request a Technical SEO Review
                    </Button>
                    <Button href="#technical-seo-scope" className="btn-white-outline">
                      See What We Review
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="placeholder-icon">
                      <i className="bi bi-robot" aria-hidden="true"></i>
                    </div>
                    <span className="flow-step">Home</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Categories / Services</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Detail Pages</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Indexed Pages</span>
                    <div className="flow-branches">
                      <span className="flow-step">Links</span>
                      <span className="flow-step">Status</span>
                      <span className="flow-step">Canonical</span>
                      <span className="flow-step">Index</span>
                      <span className="flow-step">Structured Data</span>
                    </div>
                    <Description className="mb-0 mt-3">
                      Search crawler discovering and processing a structured website
                    </Description>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="foundation">
            <Container>
              <SectionHeader tag="Technical SEO is the foundation, not the whole strategy" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100} className="mb-0">
                  A technically sound website gives search engines a clearer path to your
                  content. It can help ensure that:
                </Description>
              </SectionHeader>
              <ChecklistList items={foundationBenefits} tight />
              <Description className="mt-4" aos="fade-up" delay={150}>
                But technical SEO does not replace useful content or demand. Fixing a sitemap will
                not make an irrelevant page rank.
              </Description>
              <Description className="mb-0" aos="fade-up" delay={200}>
                Our role is to remove technical obstacles so strong content has a reliable
                foundation.
              </Description>
            </Container>
          </Section>

          <Section className="section-muted" id="problems">
            <Container>
              <SectionHeader tag="How technical problems block search visibility" title="Small implementation details can change what search engines see" />
              <div className="row g-4">
                {technicalProblems.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                    <InfoCard {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="technical-seo-scope">
            <Container>
              <SectionHeader tag="Scope" title="What we review" colClass="col-lg-9" />
              <div className="scope-grid d-none d-md-flex">
                {scopeColumns.map((column, columnIndex) => (
                  <div className="scope-col" key={columnIndex}>
                    {column.map((item) => (
                      <ScopeCard key={item.title} item={item} delay={String(columnIndex * 100)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="scope-grid d-flex d-md-none">
                <div className="scope-col">
                  {scopeAreas.map((item, index) => (
                    <ScopeCard key={item.title} item={item} delay={String((index % 2) * 100)} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="crawl-vs-index">
            <Container>
              <SectionHeader tag="Crawling and indexing" title="Crawling and indexing are different problems" tight colClass="col-lg-9">
                <Description aos="fade-up" delay={100}>
                  Crawling is about whether a search engine can request and process a URL.
                  Indexing is about whether the page is eligible and selected to appear in the
                  search index.
                </Description>
                <Description className="mb-0" aos="fade-up" delay={150}>
                  Those are not the same thing. For example:
                </Description>
              </SectionHeader>
              <ChecklistList items={crawlVsIndexExamples} tight />
              <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                Technical SEO work begins by identifying which stage is failing instead of
                applying the same fix to every issue.
              </Description>
            </Container>
          </Section>

          <Section id="internal-linking">
            <Container>
              <div className="row g-4 align-items-center">
                <div className="col-lg-7">
                  <SectionHeader tag="Internal links and discovery" title="Important pages should not be hidden behind interface logic" tight colClass="col-12">
                    <Description aos="fade-up" delay={100}>
                      Search engines use links to discover pages and understand relationships. We
                      ensure important navigation uses real crawlable links with resolvable URLs.
                    </Description>
                    <Description className="mb-0" aos="fade-up" delay={150}>
                      For JavaScript applications, clickable UI elements should not replace proper
                      link semantics where the user is navigating to another URL.
                    </Description>
                  </SectionHeader>
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    Internal linking should also reflect hierarchy. This helps both visitors and
                    crawlers understand how content relates.
                  </Description>
                </div>
                <div className="col-lg-5 mt-5 mt-lg-0">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="200">
                    <span className="flow-step">Website Development</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Business Website Development</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Relevant Case Study</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="js-seo">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="JavaScript SEO" title="JavaScript is indexable. Poor JavaScript architecture can still create problems." tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Google renders JavaScript, but JavaScript sites still need:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={jsSeoNeeds} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Potential issues can include:
                  </Description>
                  <ChecklistList items={jsSeoIssues} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    With React and Next.js projects, we can investigate both frontend rendering
                    and server behavior rather than treating the site as static HTML.
                  </Description>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-8 mx-auto">
                  <div className="flow-card" data-aos="fade-up" data-aos-delay="250">
                    <span className="flow-step">Request URL</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Server Response</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">HTML + Resources</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Render JavaScript</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Content / Links / Metadata</span>
                    <div className="flow-arrow"><i className="bi bi-arrow-down" aria-hidden="true"></i></div>
                    <span className="flow-step">Indexing</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="canonicalization">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Canonicalization" title="Give consistent signals about the preferred URL" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Websites can expose the same or very similar content through multiple URLs.
                      Canonical signals may include:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={canonicalSignals} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    These signals should agree. A canonical tag should not be treated as a way to
                    hide every duplicate created by poor architecture.
                  </Description>
                  <Description className="mb-0" aos="fade-up" delay={200}>
                    Where possible, unnecessary duplicates should be prevented at the source.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="sitemaps">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Sitemaps" title="A sitemap is a discovery aid, not an indexing guarantee" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      An XML sitemap should generally list the URLs the website considers
                      canonical and eligible for search. We review:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={sitemapReviewItems} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    The sitemap should reinforce the site architecture instead of contradicting
                    it.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="redirects">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Redirects and migrations" title="Site changes need controlled URL handling" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Redesigns and migrations frequently create technical SEO problems because
                      old URLs disappear without a clear replacement. We can prepare and
                      implement:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={migrationItems} tight />
                  <Description className="mt-4" aos="fade-up" delay={150}>
                    Redirects should point to the closest relevant replacement. Sending hundreds
                    of unrelated URLs to the homepage is not a sound migration plan.
                  </Description>
                  <Button href="/services/website-development/website-redesign" className="btn-white-outline mt-2">
                    Explore Website Redesign
                    <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="structured-data">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Structured data" title="Structured data should describe the content that actually exists" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Structured data can help search engines interpret eligible content and
                      enable certain search features. We can implement or review schema for
                      appropriate content such as:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={structuredDataTypes} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={150}>
                    We do not add markup for reviews, ratings, products or facts that do not exist
                    visibly and legitimately on the page.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section id="cms-seo">
            <Container>
              <div className="row">
                <div className="col-lg-9">
                  <SectionHeader tag="Technical SEO for CMS websites" title="CMS convenience can create technical duplication" tight colClass="col-12">
                    <Description aos="fade-up" delay={100} className="mb-0">
                      Content-management systems can unintentionally generate:
                    </Description>
                  </SectionHeader>
                  <ChecklistList items={cmsGeneratedUrls} tight />
                  <Description className="mt-4 mb-2" aos="fade-up" delay={150}>
                    Not all of these are harmful. The task is to decide which URLs should:
                  </Description>
                  <ChecklistList items={cmsUrlDecisions} tight />
                  <Description className="mt-4 mb-0" aos="fade-up" delay={200}>
                    We configure the solution around the actual content model rather than applying
                    blanket rules without understanding the site.
                  </Description>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="process">
            <Container>
              <SectionHeader tag="Process" title="Our Technical SEO process" />
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

          <Section id="scope-list">
            <Container>
              <SectionHeader tag="What an engagement can include" title="Technical SEO scope" tight colClass="col-lg-9" />
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
                  <div className="accordion custom-accordion" id="technical-seo-faq-accordion">
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
                  <SectionTitle>Find the technical obstacles before creating more content around them</SectionTitle>
                  <Description className="mb-0" aos="fade-up" delay={100}>
                    If important pages are not being discovered, rendered or indexed as expected,
                    we can trace the problem through the website architecture and implementation.
                  </Description>
                  <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <Button href={`${basePath}/website-audit?focus=technical-seo`} className="btn-primary">
                      Request a Technical SEO Review
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
