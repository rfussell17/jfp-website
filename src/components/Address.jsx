import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/phone.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Phone</h3>
            <ul>
              <li>
                <a href="Tel: +778-363-0381">+778-363-0381</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/email.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="mailto:jonnyfussell@gmail.com">
                  jonnyfussell@gmail.com
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/instagram-brands.svg" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Instagram</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/jonny.fussell.photography">
                  jonny.fussell.photography
                </a>
              </li>
            </ul>
          </div>
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
