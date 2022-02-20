import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>

          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/3a.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/3b.jpeg"
                    data-tip
                    data-for="facebook"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          {/* End li */}


          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/3c.jpeg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/3d.jpeg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/3e.jpeg"
                    data-tip
                    data-for="web"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/1a.jpeg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/1b.jpeg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/1c.jpeg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/1d.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/1e.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/2a.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/2b.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/2c.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/4a.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/4b.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/4c.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/4d.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/5a.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/5b.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/6a.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/6b.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/6c.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/6d.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/7a.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/7b.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/7c.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/7d.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>


        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
