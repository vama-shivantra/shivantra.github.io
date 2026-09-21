import type { Metadata } from "next";
import "./page.css";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import {
  Button,
  Section,
  Container,
  Tag,
  PageTitle,
  SectionTitle,
  Description,
} from "@/components/Typography";
import { basePath, siteUrl } from "@/lib/basePath";

const pageUrl = `${siteUrl}/website-portfolio`;
const homeUtmUrl = `${siteUrl}/?utm_source=shivantra&utm_medium=referral&utm_campaign=website_portfolio`;

export const metadata: Metadata = {
  title: "Website Portfolio | Shivantra",
  description:
    "Explore live websites Shivantra has designed and developed for clients across India, France and Canada — from business and corporate sites to landing pages.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Portfolio | Shivantra",
    description: "Explore live websites Shivantra has designed and developed for clients across India, France and Canada.",
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

type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  description: string;
  countryCode: "IN" | "CA" | "FR";
  countryName: string;
};

const projects: Project[] = [
  { slug: "sams-grill", name: "Sams Grill", url: "https://greenthera.shivantra.com/samsgrill.ca", domain: "samsgrill.ca", description: "A fresh, homemade burger restaurant site built around a bold menu presentation and an easy online ordering path.", countryCode: "CA", countryName: "Canada" },
  { slug: "les-bienheureux", name: "Les Bienheureux", url: "https://greenthera.shivantra.com/lesbienheureux.com", domain: "lesbienheureux.com", description: "A multilingual spirits brand site with an age-verification gate and a refined, premium product presentation.", countryCode: "FR", countryName: "France" },
  { slug: "solaris-360", name: "Solaris 360", url: "https://greenthera.shivantra.com/solaris360.com/", domain: "solaris360.com", description: "A solar energy company site showcasing rooftop installations, live performance stats and consultation booking.", countryCode: "IN", countryName: "India" },
  { slug: "dr-prashant-kariya", name: "Dr Prashant Kariya", url: "https://drprashantkariya.com/", domain: "drprashantkariya.com", description: "A pediatric care practice site presenting the doctor's credentials, outcomes and an easy appointment path.", countryCode: "IN", countryName: "India" },
  { slug: "best-career-counselling", name: "Best Career Counselling", url: "https://bestcareercounselling.com/", domain: "bestcareercounselling.com", description: "A career counselling service helping students and parents choose the right academic stream with confidence.", countryCode: "IN", countryName: "India" },
  { slug: "maa-yashoda", name: "Maa Yashoda", url: "https://greenthera.shivantra.com/maayashoda.com/", domain: "maayashoda.com", description: "A maternal and child care centre site guiding families through their care journey with clarity and trust.", countryCode: "IN", countryName: "India" },
  { slug: "blanco", name: "Blanco", url: "https://greenthera.shivantra.com/blanco.com/", domain: "blanco.com", description: "A dental clinic website built around appointment booking and a calm, reassuring patient experience.", countryCode: "IN", countryName: "India" },
  { slug: "trboalgo", name: "TrboAlgo", url: "https://greenthera.shivantra.com/trboalgo.com", domain: "trboalgo.com", description: "An algorithmic trading platform site presenting live market data through a clean, focused interface.", countryCode: "CA", countryName: "Canada" },
  { slug: "domaine-morisseau", name: "Domaine Morisseau", url: "https://greenthera.shivantra.com/domainemorisseau.com/", domain: "domainemorisseau.com", description: "An artisan winery site showcasing the estate's wines with an elegant, story-led presentation.", countryCode: "FR", countryName: "France" },
  { slug: "frenchkiss-suncare", name: "Frenchkiss Suncare", url: "https://greenthera.shivantra.com/frenchkiss-suncare.com/", domain: "frenchkiss-suncare.com", description: "A suncare brand site built around clean product storytelling and a smooth online shopping experience.", countryCode: "FR", countryName: "France" },
  { slug: "ashva-finserv", name: "Ashva Finserv", url: "https://ashvafinserv.com/", domain: "ashvafinserv.com", description: "A financial planning firm site guiding families toward long-term financial confidence and clarity.", countryCode: "IN", countryName: "India" },
  { slug: "excreatio", name: "Excreatio", url: "https://greenthera.shivantra.com/excreatio.com/", domain: "excreatio.com", description: "A sustainability-focused company site presenting nature-driven solutions with a clean, editorial design.", countryCode: "FR", countryName: "France" },
  { slug: "winke", name: "Winke", url: "https://greenthera.shivantra.com/winke.fr/", domain: "winke.fr", description: "A marketplace platform connecting winegrowers with verified service providers across France.", countryCode: "FR", countryName: "France" },
  { slug: "heart-first", name: "Heart First", url: "https://greenthera.shivantra.com/heartfirstsurat.com/", domain: "heartfirstsurat.com", description: "An interventional cardiologist's practice site presenting credentials, outcomes and patient resources.", countryCode: "IN", countryName: "India" },
  { slug: "hermit-trust", name: "Hermit Trust", url: "https://hermittrust.com/", domain: "hermittrust.com", description: "A charitable trust site sharing its values, activities and the ways supporters can get involved.", countryCode: "IN", countryName: "India" },
  { slug: "albae", name: "Albae", url: "https://shivantra-albae.vercel.app/", domain: "shivantra-albae.vercel.app", description: "An algae-based vegan nutrition brand site built around product storytelling, certifications and online shopping.", countryCode: "IN", countryName: "India" },
  { slug: "dr-desai-eye-hospital", name: "Dr Desai Eye Hospital", url: "https://shivantra-drdesaieyehospital.vercel.app/", domain: "shivantra-drdesaieyehospital.vercel.app", description: "An eye hospital and laser centre site presenting specialities, outcomes and an easy appointment path.", countryCode: "IN", countryName: "India" },
  { slug: "atmatex", name: "Atmatex", url: "https://shivantra-atmatex.vercel.app/", domain: "shivantra-atmatex.vercel.app", description: "A heritage textile manufacturer site showcasing woven fabrics, silk and zari craftsmanship since 1956.", countryCode: "IN", countryName: "India" },
];

function FlagIcon({ countryCode }: { countryCode: Project["countryCode"] }) {
  const common = {
    width: 20,
    height: 14,
    viewBox: "0 0 24 16",
    className: "portfolio-flag-icon",
    role: "img" as const,
    "aria-hidden": true,
  };

  if (countryCode === "IN") {
    const center = { x: 12, y: 8 };
    const spokes = [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
      const rad = (deg * Math.PI) / 180;
      const ox = center.x + 2.1 * Math.cos(rad);
      const oy = center.y + 2.1 * Math.sin(rad);
      const ix = center.x + 0.5 * Math.cos(rad);
      const iy = center.y + 0.5 * Math.sin(rad);
      return { ox, oy, ix, iy };
    });
    return (
      <svg {...common}>
        <rect width="24" height="16" fill="#F0F0F0" />
        <rect width="24" height="5.33" fill="#FF9933" />
        <rect y="10.67" width="24" height="5.33" fill="#138808" />
        <circle cx={center.x} cy={center.y} r="2.1" fill="none" stroke="#000080" strokeWidth="0.35" />
        {spokes.map((s, i) => (
          <line key={i} x1={s.ix} y1={s.iy} x2={s.ox} y2={s.oy} stroke="#000080" strokeWidth="0.3" />
        ))}
        <circle cx={center.x} cy={center.y} r="0.4" fill="#000080" />
      </svg>
    );
  }

  if (countryCode === "CA") {
    return (
      <svg {...common}>
        <rect width="24" height="16" fill="#FFFFFF" />
        <rect width="6" height="16" fill="#D52B1E" />
        <rect x="18" width="6" height="16" fill="#D52B1E" />
        <path
          d="M12,2.2 L13.3,4.3 L16,3.6 L14.6,5.6 L17.6,6.6 L15.3,7.3 L17,9.6 L14.7,9.3 L15.6,12 L12.8,11 L12,14 L11.2,11 L8.4,12 L9.3,9.3 L7,9.6 L8.7,7.3 L6.4,6.6 L9.4,5.6 L8,3.6 L10.7,4.3 Z"
          fill="#D52B1E"
          stroke="#D52B1E"
          strokeWidth="0.3"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect width="24" height="16" fill="#ED2939" />
      <rect width="16" height="16" fill="#FFFFFF" />
      <rect width="8" height="16" fill="#002395" />
    </svg>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Website Portfolio",
      url: pageUrl,
      description:
        "Live websites designed and developed by Shivantra Solutions Private Limited for clients across India, France and Canada.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Website Portfolio", item: pageUrl },
      ],
    },
  ],
};

export default function Portfolio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap portfolio-page">
        <AnnouncementBar />
        <Nav />
        <main id="main-content">
          <Section className="portfolio-hero" id="portfolio-hero">
            <Container>
              <div className="row">
                <div className="col-lg-8">
                  <Tag marginBottom>Our Work</Tag>
                  <PageTitle>Website Portfolio</PageTitle>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="portfolio-grid">
            <Container>
              <div className="row g-4 portfolio-grid">
                {projects.map((project, index) => (
                  <div className="col-12 col-md-6" key={project.slug}>
                    <div
                      className="portfolio-card"
                      data-aos="fade-up"
                      data-aos-delay={String((index % 2) * 100)}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-card-media"
                        aria-label={`Visit ${project.name}`}
                      >
                        <img
                          src={`${basePath}/assets/images/portfolio/${project.slug}.webp`}
                          alt={`${project.name} website screenshot`}
                          loading="lazy"
                        />
                        <span className="portfolio-card-overlay" aria-hidden="true">
                          <span className="portfolio-card-overlay-icon">
                            <i className="bi bi-arrow-up-right"></i>
                          </span>
                        </span>
                      </a>
                      <div className="portfolio-card-content">
                        <span className="portfolio-card-flag">
                          <FlagIcon countryCode={project.countryCode} />
                          {project.countryName}
                        </span>
                        <div className="portfolio-card-title">{project.name}</div>
                        <p className="portfolio-card-description">{project.description}</p>
                        <Button
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-white-outline portfolio-card-link"
                        >
                          Visit Website
                          <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="portfolio-about">
            <Container>
              <div className="portfolio-about" data-aos="fade-up" data-aos-delay="100">
                <Tag marginBottom>About Shivantra</Tag>
                <Description>
                  <b>Shivantra</b> is a software consultancy and
                  development organisation, delivering customised software development and
                  integrations of existing systems. Our passion for technology drives us to
                  continuously learn and grow, staying ahead of the curve in an ever-changing
                  digital landscape. With over a decade of experience, we know the technique
                  when it comes to building things.
                </Description>
                <div className="vision-label">
                  <i className="bi bi-bullseye" aria-hidden="true"></i>
                  Mission Statement
                </div>
                <Description>
                  Offering world class technology solutions for complex business requirements
                  and challenges, empowering organizations &amp; individuals across all
                  industries to stay ahead with the digital era.
                </Description>
                <div className="vision-label">
                  <i className="bi bi-stars" aria-hidden="true"></i>
                  Vision Statement
                </div>
                <Description className="mb-0">
                  An ecosystem that eases human efforts, saving time and energy with the help
                  of technologies, allowing them to focus on what truly matters and unlock
                  their full potential.
                </Description>
                <Button href={homeUtmUrl} className="btn-white-outline read-more-btn">
                  Read More
                  <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                </Button>
              </div>
            </Container>
          </Section>

          <Section id="portfolio-cta">
            <Container>
              <div className="portfolio-cta-banner" data-aos="fade-up" data-aos-delay="100">
                <SectionTitle>Want a website like this for your business?</SectionTitle>
                <Description className="mb-0 text-white-50">
                  Tell us about your project and we will help you plan the right approach.
                </Description>
                <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4">
                  <Button href={`${basePath}/#contact`} className="btn-light">
                    Discuss Your Website
                  </Button>
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
