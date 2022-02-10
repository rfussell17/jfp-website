import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
   
      desc: `Jonny did an amazing job with our wedding photos! We were on a time crunch and asked him 3 weeks before the date if he could shoot our wedding over the holidays. He gave us a whole day away from his wife and newborn on boxing day which was nothing short of amazing. The photos were spectacular, even though we had a winter wedding in low light and -25 weather. He even stayed outside all day so his lenses wouldn't fog up and he would be ready at a moments notice. If you are looking for a wedding photographer, Jonny is your guy!`,
      name: "Jamie and Kassie",
      designation: "Wedding Shoot",
      delayAnimation: "200",
    },
    {
 
      desc: `We hired Jonny for our wedding in August and gave him complete creative control, and he genuinely blew us away. He made two people who hate having their picture taken feel completely comfortable, and captured some really special candid photos of us, our family and friends will cherish for the rest of our lives. Jonny was an absolute blast to have with us on our wedding day, and fit right in with the celebration. He was full of great ideas and was so enthusiastic, and an excellent communicator. We couldn't be happier to have had Jonny capture our special day, and have recommended him to everyone we know. We will absolutely be using his services again in the future.`,
      name: "Foster and Devin",
      designation: "Wedding Shoot",
      delayAnimation: "100",
    },
    {
 
      desc: `We loved our family photos. Jon was great to work with and was so patient with our toddler. We look forward to having Jon capturing more family moments in the years to come`,
      name: "Rich and Rachel",
      designation: "Family Session",
      delayAnimation: "",
    },
    {
      img: "2",
      desc: `Jonny has done a few shoots for us now, maternity, newborn, and family, he never ceases to impress us. We will continue using him for anything that we want quality, well edited pictures of. Already booked him for our wedding. He's a lot of fun and creative! Highly recommend Jonny Fussell Photography!`,
      name: "Steve and Kayla",
      designation: "Maternity, Newborn, Family Sessions",
      delayAnimation: "100",
    },

  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                <div className="image">

                </div>
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}

              <div className="icon">
                <img className="svg" src="img/svg/quote.svg" alt="quote" />
              </div>
              {/* End right quote icon */}
            </div>

            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
