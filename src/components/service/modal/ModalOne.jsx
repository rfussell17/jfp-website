import React from "react";

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/service/1.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/6.jpeg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Wedding Packages</h3>
        <p>
          All wedding packages offer an engagement session free of charge. A deposit of $500 is required to book weddings.
        </p>

        <h3>Bronze Package</h3>

        <div className="in_list">
          <ul>
            <li>
              <p>4 hour wedding day coverage with myself + associate photographer</p>
            </li>
            <li>
              <p>Minimum 300 photos delivered by online gallery</p>
            </li>
            <li>
              <p><strong>$2000</strong></p>
            </li>
          </ul>
        </div>

        <h3>Silver Package</h3>

        <div className="in_list">
          <ul>
            <li>
              <p>6 hour wedding day coverage with myself + associate photographer</p>
            </li>
            <li>
              <p>Minimum 500 photos delivered by online gallery</p>
            </li>
            <li>
              <p><strong>$2750</strong></p>
            </li>
          </ul>
        </div>

        <h3>Gold Package</h3>

        <div className="in_list">
          <ul>
            <li>
              <p>8 hour wedding day coverage with myself + associate photographer</p>
            </li>
            <li>
              <p>Minimum 500 photos delivered by online gallery</p>
            </li>
            <li>
              <p><strong>$4000</strong></p>
            </li>
          </ul>
        </div>


        {/* End list */}
        <p>
         <strong>Please contact me for bookings and any other questions</strong> 
        </p>
      </div>
    </div>
  );
};

export default ModalOne;
