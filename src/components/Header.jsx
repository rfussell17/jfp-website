const links = [
  { hash: "about", label: "About" },
  { hash: "packages", label: "Pricing" },
  { hash: "testimonials", label: "Kind words" },
  { hash: "recent-work", label: "Recent work" },
];

// home: this is the one-page home site; elsewhere links go back to it.
const Header = ({ home = false, onInquire }) => {
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
        <a href="/faq" aria-current={home ? undefined : "page"}>
          FAQ
        </a>
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
