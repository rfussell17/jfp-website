import Header from "./components/Header";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const intro = (
  <div className="faq__intro">
    <p className="section__lead">
      The things couples ask most before booking: what's included, how the day works, and what
      happens after the wedding.
    </p>
    <p className="faq__contact">
      Can't find your answer? <a href="/#inquire">Get in touch</a> and I'll get back to you.
    </p>
  </div>
);

const FaqPage = () => (
  <>
    <Header />
    <main>
      <section className="section faq-section faq-page">
        <div className="container">
          <FAQ page intro={intro} />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default FaqPage;
