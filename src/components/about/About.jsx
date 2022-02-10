import React from "react";

const About = () => {
  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I'm <span>Jonny</span>
              </h3>
              <p>I'm a photographer based out of Kelowna, BC.</p>
              <p>
                I was born in Ontario but grew up in the Lower
                Mainland/Okanagan. I love Kelowna, the amazing
                wineries/breweries we have here and of course the weather, minus
                the fire and smoke season! I am a father of one amazing son
                Henry and I have a beautiful wife Kristina. We have an old dog
                Thor, who is literally the grumpiest dog on the planet but I
                love him! We also have 2 cats; Lola (who needs a diet) and Lucy.
                Needless to say, it's a very busy household!
              </p>
              <p>
                <br></br>
                I’m definitely more on the goofy side. I have a great sense of
                humour and I love making people laugh. I love kids and meeting
                new people. I find it very easy to make people comfortable in
                front of my camera!
              </p>
              <p>
                <br></br>I love to photograph weddings! From getting ready, to
                the first dance. The whole event is such an amazing experience
                to be apart of! I love doing engagement shoots, family sessions,
                and everything else in between! I really enjoying getting
                creative by incorporating new and exciting techniques, and any
                ideas you or I may have to capture your special moments!
              </p>
              <br></br>
              <p>
                I would love to chat with you if your interested in booking with
                me! Let's make it happen!
              </p>
          
            </div>
           
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/about/2.jpeg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/about/2.jpeg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>
    </div>
    // /ABOUT
  );
};

export default About;
