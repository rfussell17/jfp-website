import { faqs } from "../data/site";

// intro: optional text shown under the title (the questions page uses it).
const FAQ = ({ intro, page = false }) => {
  const Title = page ? "h1" : "h2";
  return (
    <div className="faq" id="faq">
      <Title className="section__title">Questions</Title>
      {intro}
      <div className="faq__list">
        {faqs.map((item) => (
          <details className="faq__item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
