import React from "react";
import Social from "../Social";

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "light",
  name: "",
  description: `I'm a freelance photographer living in beautiful British Columbia`,
};


const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img 
            className="hero-img-main"
            src={`img/hero/${heroContent.shapeImage}`}
            srcSet={`img/hero/${heroContent.heroImage}.png`}
            alt="Johnny Fussell Photography logo"
          />
        </div>
        <div className="extra">
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {heroContent.name}
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Social />
          </div>

        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
