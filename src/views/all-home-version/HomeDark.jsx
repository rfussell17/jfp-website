import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonials from "../../components/testimonials/Testimonials";
import Address from "../../components/Address";

const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light edina_tm_mainpart">
      <Sidebar />
      <Hero />
      <About />

      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>
              Booking slots for <strong>2024-2025</strong> are now open - Check
              out the many services and packages I provide, and do not hesitate
              to reach out for more information!
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>Some highlights of my journey so far</p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}

      <div className="edina_tm_testimonials" id="testimonials">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Some of the amazing people I've had the pleasure of working with
            </p>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            <ul>
              <Testimonials />
            </ul>
          </div>
        </div>
      </div>

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Order canvas prints of my landscape photos from my gallery on
              Instagram - It's constantly updating - and contact me for sizing
              and prices.
              <br></br>
              <br></br>
              Reach out for any questions or booking inquiries.
              <br></br>
              Let's work together soon!
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
        </div>
      </div>

      {/* /CONTACT */}
    </div>
  );
};

export default HomeDark;
