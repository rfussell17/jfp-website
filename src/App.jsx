import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Inquire from "./components/Inquire";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Packages />
      <Testimonials />
      <Gallery />
      <section className="section faq-section">
        <div className="container">
          <FAQ />
        </div>
      </section>
      <section className="section inquire-section">
        <div className="container">
          <Inquire />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default App;
