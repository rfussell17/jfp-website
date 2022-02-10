import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import Address from "../../components/Address";


const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light edina_tm_mainpart">
      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>
              Booking slots for <strong>2022</strong> are now open - Check out the many services and packages I provide, and do not hesitate to reach out for more information!
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
            <p>
              Some highlights of my journey so far
            </p>
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
      {/* End Testimonial */}
{/* 
      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <Blog />
        </div>
      </div> */}
      {/* End Blog */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              You can also order canvas prints of any of my landscape photos, check out my gallery on Instagram, and contact me for sizing and prices.
              Reach out to me for any questions or booking inquiries.
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
