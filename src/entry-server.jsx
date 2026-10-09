import { renderToString } from "react-dom/server";
import App from "./App";
import { site, packages } from "./data/site";

export const render = () => renderToString(<App />);

export const structuredData = (siteUrl) =>
  `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Photographer",
    name: site.name,
    description: "Documentary wedding photographer in Kelowna, BC.",
    ...(siteUrl && { url: siteUrl, image: `${siteUrl}/og-image.jpg` }),
    telephone: site.phone,
    email: site.email,
    areaServed: "Kelowna, British Columbia, Canada",
    address: { "@type": "PostalAddress", addressLocality: "Kelowna", addressRegion: "BC", addressCountry: "CA" },
    sameAs: [site.instagram, site.facebook],
    priceRange: `${packages[0].price}-${packages[packages.length - 1].price}`,
  })}</script>`;
