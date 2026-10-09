const links = [
  { href: "#about", label: "About" },
  { href: "#packages", label: "Pricing" },
  { href: "#testimonials", label: "Kind words" },
  { href: "#recent-work", label: "Recent work" },
];

const Header = () => (
  <header className="header">
    <a className="header__brand" href="#top">
      Jonny Fussell
    </a>
    <nav className="header__nav" aria-label="Main">
      {links.map((l) => (
        <a key={l.href} href={l.href}>
          {l.label}
        </a>
      ))}
    </nav>
    <a className="button button--small" href="#inquire">
      Inquire
    </a>
  </header>
);

export default Header;
