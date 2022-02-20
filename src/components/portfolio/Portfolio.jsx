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

          {/* <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/6.jpg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li> */}
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/3bb.jpeg"
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
                    src="img/portfolio/3cc.jpeg"
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
                    src="img/portfolio/3dd.jpeg"
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
                    src="img/portfolio/3ee.jpeg"
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
                    src="img/portfolio/1aa.jpeg"
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
                    src="img/portfolio/1bb.jpeg"
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
                    src="img/portfolio/1cc.jpeg"
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
                    src="img/portfolio/1dd.jpeg"
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
                    src="img/portfolio/1ee.jpeg"
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
                    src="img/portfolio/2aa.jpeg"
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
                    src="img/portfolio/2bb.jpeg"
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
                    src="img/portfolio/2cc.jpeg"
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
                    src="img/portfolio/4aa.jpeg"
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
                    src="img/portfolio/4bb.jpeg"
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
                    src="img/portfolio/4cc.jpeg"
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
                    src="img/portfolio/4dd.jpeg"
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
                    src="img/portfolio/5aa.jpeg"
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
                    src="img/portfolio/5bb.jpeg"
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
                    src="img/portfolio/6aa.jpeg"
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
                    src="img/portfolio/6bb.jpeg"
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
                    src="img/portfolio/6cc.jpeg"
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
                    src="img/portfolio/6dd.jpeg"
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
                    src="img/portfolio/7bb.jpeg"
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
                    src="img/portfolio/7cc.jpeg"
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
                    src="img/portfolio/7dd.jpeg"
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
