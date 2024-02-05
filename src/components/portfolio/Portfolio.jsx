import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  // Common settings for both sliders
  const commonSettings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
        },
      },
    ],
  };

  // Settings for the portrait slider
  const portraitSettings = {
    ...commonSettings,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  // Settings for the landscape slider, showing only 1 image at a time
  const landscapeSettings = {
    ...commonSettings,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Generate arrays for portrait and landscape images
  const portraitImages = Array.from(
    { length: 36 },
    (_, i) => `img/portfolio/portrait/${i + 1}.jpg`
  );
  const landscapeImages = Array.from(
    { length: 35 },
    (_, i) => `img/portfolio/landscape/${1 + i + 1}.jpg`
  );

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...portraitSettings}>
          {portraitImages.map((src, index) => (
            <li key={`portrait-${index}`}>
              <div className="list_inner">
                <div className="image">
                  <img src={src} alt="Portrait" />
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>

      <ul data-aos="fade-left" data-aos-duration="1200">
        <Slider {...landscapeSettings}>
          {landscapeImages.map((src, index) => (
            <li key={`landscape-${index}`}>
              <div className="list_inner">
                <div className="image">
                  <img src={src} alt="Landscape" />
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
