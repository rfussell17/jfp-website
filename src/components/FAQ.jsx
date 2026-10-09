import { faqs } from "../data/site";

const FAQ = () => (
  <section className="section faq" id="faq">
    <div className="container container--narrow">
      <h2 className="section__title">Questions</h2>
      <div className="faq__list">
        {faqs.map((item) => (
          <details className="faq__item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
