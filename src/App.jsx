import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Inquire from "./components/Inquire";
import Footer from "./components/Footer";

const App = () => {
  // The contact form appears once the gallery has run out of photos, or as
  // soon as someone jumps to it.
  const [done, setDone] = useState(false);
  const jumping = useRef(false);

  const scrollToInquire = () => {
    // Wait two frames so the full gallery has laid out before measuring.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => document.getElementById("inquire")?.scrollIntoView())
    );
  };
  const jump = () => {
    if (done) return scrollToInquire();
    jumping.current = true;
    setDone(true);
  };

  useEffect(() => {
    if (window.location.hash === "#inquire") jump();
  }, []);

  useEffect(() => {
    if (done && jumping.current) {
      jumping.current = false;
      scrollToInquire();
    }
  }, [done]);

  return (
    <>
      <Header home onInquire={jump} />
      <main>
        <Hero />
        <About />
        <Packages />
        <Testimonials />
        <Gallery done={done} onDone={() => setDone(true)} />
        <section className={`section inquire-section${done ? "" : " inquire-section--waiting"}`}>
          <div className="container">
            <Inquire />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
