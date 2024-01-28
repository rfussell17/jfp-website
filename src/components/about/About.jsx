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
              <p>Hey there, I'm Jonny, your go-to photographer in Kelowna! Born in Ontario but raised in the Lower Mainland, I've fully embraced the quirks of BC living – wineries, breweries, and, well, the occasional weather drama.

In the chaos of our household, amidst hilarious shenanigans with my son Henry, I'm the guy who loves making people laugh in front of the camera. Kids, new faces, you name it – making everyone feel comfy is my superpower!

Weddings are my playground – from the pre-ceremony silliness to the first attempt at a coordinated dance. I love bringing creativity to the table, trying out new techniques to make your moments uniquely memorable.

Ready for a chat? Let's make capturing your special moments as fun as trying to convince a kid that bedtime is a good idea.
              </p>
          
            </div>
           
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/about/about.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/about/about.jpg"
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
