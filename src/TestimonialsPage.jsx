import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const TestimonialsPage = () => (
  <>
    <Header current="testimonials" />
    <main>
      <Testimonials page />
      <section className="section inquire-cta">
        <div className="container">
          <p className="testimonials__more">
            Ready to talk about your day? <a href="/#inquire">Get in touch</a>.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default TestimonialsPage;
