import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  var settings = {
    dots: true,
    arrow: true,
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
          dots: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      desc: `Not only is Jonny such a wonderful human. He also has a very special gift as a photographer. We love working with him and this will be our second family shoot, which was definitely a treat. He's awesome with kids, makes the whole experience fun and seamless. And even when you doubt your photogenic abilities, he is able to catch every perfect momemt and turn it into something beautiful. We love working with you Jonny.`,
      name: "Stacy & Nico",
      designation: "Family Session",
      delayAnimation: "200",
    },
    {
      desc: `I can highly recommend booking Jonny for a wedding photoshoot. It was super nice with working Jonny, he went above and beyond and really made us feel comfortable. We went to a lot of different locations and the pictures exceeded our expectations. It was really hard to make a selection of pictures because we loved them all! 100% recommend!`,
      name: "Fleur & Brett",
      designation: "Engagement Shoot",
      delayAnimation: "200",
    },
    {
      desc: `Our family had an amazing photoshoot with Jonny Fussell Photography. Jonny captured these moments beautifully, and we are incredibly grateful. Thank you for the wonderful experience!`,
      name: "Dezarea & Alex",
      designation: "Family Session",
      delayAnimation: "200",
    },
    {
      desc: `I recently had the pleasure of working with Jonny for my engagement photoshoot. His creativity and attention to detail were evident in every shot. With his professionalism and dedication, the final photos exceeded our expectations. I highly recommend him for capturing special moments, as his talent and ability to create a comfortable atmosphere make him an exceptional choice for any photoshoot. Thank you for the amazing work!`,
      name: "Stephanie & Cameron",
      designation: "Engagement Shoot",
      delayAnimation: "200",
    },
    {
      desc: `My fiancé and I just had engagement photos done by Jonny, and we are absolutely over the MOON with our photos! You have to understand, we are NOT comfortable in front of a camera: we're incredibly awkward, never know what to do with our hands or how to stand, and that awkwardness can easily come through in photos. Jonny made the experience SO comfortable and had us laughing the whole time! His prompts were clear and fun, and still got gorgeous candid photos as well. He was able to somehow make us look pretty while still capturing who we are as a couple, and that's something.`,
      name: "Michelle & Daniel",
      designation: "Engagement Shoot",
      delayAnimation: "200",
    },
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
                <div className="image"></div>
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
