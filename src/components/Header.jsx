import { useEffect, useState } from "react";

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
  // Phones: the nav folds into a menu opened by the burger button.
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const wide = window.matchMedia("(min-width: 760px)");
    const onResize = () => wide.matches && close();
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="header">
      <a className="header__brand" href={home ? "#top" : "/"}>
        Jonny Fussell
      </a>
      <nav id="site-nav" className={`header__nav${open ? " is-open" : ""}`} aria-label="Main">
        {links.map((l) => (
          <a key={l.hash} href={`${base}#${l.hash}`} onClick={close}>
            {l.label}
          </a>
        ))}
        {pages.map((p) => (
          <a key={p.id} href={p.href} aria-current={current === p.id ? "page" : undefined} onClick={close}>
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
            close();
            onInquire();
          })
        }
      >
        Inquire
      </a>
      <button
        className={`header__toggle${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Header;
