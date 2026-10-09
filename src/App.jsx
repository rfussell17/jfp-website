import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
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
      <Inquire />
    </main>
    <Footer />
  </>
);

export default App;
