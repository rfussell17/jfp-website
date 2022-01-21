import React, { useState } from "react";

const About = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // function toggleModalOne() {
  //   setIsOpen(!isOpen);
  // }

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
                Hi, I'm <span>Johnny</span>
              </h3>
              <p>
I'm a lifestyle photographer based out of Kelowna, BC.
<br></br>
I’ve been passionate about photography for over 7 years, but this last year I decided I wanted to work towards doing this thing I love full time. 
<br></br>

<br></br>
I <strong>LOVE</strong> that you are always learning no matter how long you have been doing it!
<br></br>
I <strong>LOVE</strong> doing landscape/cityscape photography! It keeps me inspired to keep pushing my creative boundaries!
<br></br>
I <strong>LOVE</strong> the photography community! 
<br></br>
<br></br>
The support - both online, and in my city - has been amazing, and there are so many unbelievable creators that always keep me motivated to get out and take pictures and stand out! Not to mention so many talented photographers that I have the opportunity to surround myself with.

              </p>
            </div>
        
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

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

              {/* <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              > */}
                {/* <div className="info">
                  <h3>6+ Years</h3>
                  <span>Of Experiance</span>
                </div> */}
              {/* </div> */}
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}

      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
