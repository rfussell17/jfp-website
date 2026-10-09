import { useState } from "react";
import { testimonials } from "../data/site";

const Quote = ({ name, kind, quote }) => {
  const [open, setOpen] = useState(false);
  const long = quote.length > 260;
  return (
    <figure className="quote">
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

const Testimonials = () => (
  <section className="section testimonials" id="testimonials">
    <div className="container">
      <h2 className="section__title">Kind words</h2>
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <Quote key={t.name} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
