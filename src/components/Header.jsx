const links = [
  { hash: "about", label: "About" },
  { hash: "packages", label: "Pricing" },
  { hash: "recent-work", label: "Recent work" },
];

// Separate pages, in the order they show in the nav.
const pages = [
  { id: "testimonials", href: "/testimonials", label: "Kind words" },
  { id: "faq", href: "/faq", label: "FAQ" },
];

// home: this is the one-page home site; elsewhere links go back to it.
// current: which separate page this is, if any.
const Header = ({ home = false, current, onInquire }) => {
  const base = home ? "" : "/";
  return (
    <header className="header">
      <a className="header__brand" href={home ? "#top" : "/"}>
        Jonny Fussell
      </a>
      <nav className="header__nav" aria-label="Main">
        {links.map((l) => (
          <a key={l.hash} href={`${base}#${l.hash}`}>
            {l.label}
          </a>
        ))}
        {pages.map((p) => (
          <a key={p.id} href={p.href} aria-current={current === p.id ? "page" : undefined}>
            {p.label}
          </a>
        ))}
      </nav>
      <a
        className="button button--small"
        href={`${base}#inquire`}
        onClick={
          onInquire &&
          ((e) => {
            e.preventDefault();
            onInquire();
          })
        }
      >
        Inquire
      </a>
    </header>
  );
};

export default Header;
