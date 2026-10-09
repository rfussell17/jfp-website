import { site } from "../data/site";

const Footer = () => (
  <footer className="footer">
    <p className="footer__links">
      <a href={site.instagram} target="_blank" rel="noreferrer">
        Instagram
      </a>
      <a href={site.facebook} target="_blank" rel="noreferrer">
        Facebook
      </a>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
    </p>
    <p className="footer__copy">
      &copy; {new Date().getFullYear()} Jonny Fussell Photography · Kelowna, BC
    </p>
  </footer>
);

export default Footer;
