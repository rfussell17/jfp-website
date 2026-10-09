import { renderToString } from "react-dom/server";
import App from "./App";
import { site, packages, otherSessions, faqs } from "./data/site";

export const render = () => renderToString(<App />);

const amount = (price) => price.replace(/[^\d.]/g, "");

export const structuredData = (siteUrl) => {
  const business = {
    "@type": "Photographer",
    "@id": `${siteUrl}/#business`,
    name: site.name,
    description:
      "Documentary wedding photographer in Kelowna, BC. A second shooter and an engagement session are included in every wedding package.",
    ...(siteUrl && { url: siteUrl, image: `${siteUrl}/og-image.jpg` }),
    telephone: site.phone,
    email: site.email,
    founder: { "@type": "Person", name: "Jonny Fussell", jobTitle: "Wedding photographer" },
    address: { "@type": "PostalAddress", addressLocality: "Kelowna", addressRegion: "BC", addressCountry: "CA" },
    geo: { "@type": "GeoCoordinates", latitude: 49.888, longitude: -119.496 },
    areaServed: { "@type": "City", name: "Kelowna", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } },
    knowsAbout: ["Documentary wedding photography", "Engagement photography", "Family photography"],
    sameAs: [site.instagram, site.facebook],
    priceRange: `${packages[0].price}-${packages[packages.length - 1].price}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding packages and sessions",
      itemListElement: [
        ...packages.map((p) => ({
          "@type": "Offer",
          name: `${p.name} wedding package`,
          description: `${p.coverage} of coverage, ${p.photos} minimum, second shooter and complimentary engagement session included.`,
          price: amount(p.price),
          priceCurrency: "CAD",
          itemOffered: { "@type": "Service", name: `${p.name} wedding photography package`, serviceType: "Wedding photography" },
        })),
        ...otherSessions.map((s) => ({
          "@type": "Offer",
          name: s.name + (s.detail ? ` (${s.detail})` : ""),
          price: amount(s.price),
          priceCurrency: "CAD",
          itemOffered: { "@type": "Service", name: s.name, serviceType: "Photography session" },
        })),
      ],
    },
  };

  const webpage = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: site.name,
    inLanguage: "en-CA",
    ...(siteUrl && { url: siteUrl }),
    publisher: { "@id": `${siteUrl}/#business` },
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [business, webpage, faq],
  })}</script>`;
};

// Plain-text summary for AI crawlers (llms.txt convention).
export const llmsTxt = (siteUrl) => `# ${site.name}

> Documentary wedding photographer based in Kelowna, British Columbia, Canada. Real, unposed moments. Every wedding package includes a second shooter and a complimentary engagement session.

## Wedding packages (CAD)
${packages.map((p) => `- ${p.name}: ${p.price}, ${p.coverage} of coverage, ${p.photos} minimum`).join("\n")}

## Other sessions
${otherSessions.map((s) => `- ${s.name}${s.detail ? ` (${s.detail})` : ""}: ${s.price}`).join("\n")}

## Contact
- Website: ${siteUrl || "/"}
- Email: ${site.email}
- Phone: ${site.phone}
- Instagram: ${site.instagram}

## Frequently asked questions
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
