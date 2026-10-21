import { useEffect, useState } from "react";
import { testimonials } from "../data/site";

// Must match the grid breakpoints in styles.css (.testimonials__grid).
const useColumns = () => {
  const [columns, setColumns] = useState(null); // null until the browser measures
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1200px)");
    const medium = window.matchMedia("(min-width: 720px)");
    const update = () => setColumns(wide.matches ? 3 : medium.matches ? 2 : 1);
    update();
    wide.addEventListener("change", update);
    medium.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      medium.removeEventListener("change", update);
    };
  }, []);
  return columns;
};

const Quote = ({ name, kind, quote, hidden }) => {
  const [open, setOpen] = useState(false);
  const long = quote.length > 260;
  return (
    <figure className="quote" hidden={hidden}>
      <blockquote className={long && !open ? "quote__text is-clamped" : "quote__text"}>
        <p>{quote}</p>
      </blockquote>
      {long && (
        <button className="quote__toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Show less" : "Read more"}
        </button>
      )}
      <figcaption>
        <strong>{name}</strong>
        <span>{kind}</span>
      </figcaption>
    </figure>
  );
};

const Testimonials = ({ page = false }) => {
  const columns = useColumns();
  // Only show whole rows so the last row is never a lone card. The few left
  // over stay in the page, hidden, and appear when the screen size changes.
  const visible = columns ? Math.floor(testimonials.length / columns) * columns : testimonials.length;
  return (
    <section className={`section testimonials${page ? " testimonials--page" : ""}`} id="testimonials">
      <div className="container">
        {page ? (
          <h1 className="section__title">Kind words</h1>
        ) : (
          <h2 className="section__title">Kind words</h2>
        )}
        {page && (
          <p className="section__lead testimonials__lead">
            Notes from couples and families I've had the pleasure of photographing.
          </p>
        )}
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Quote key={t.name} {...t} hidden={i >= visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
