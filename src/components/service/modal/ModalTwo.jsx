import React from "react";

const ModalTwo = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/5.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Family & Newborn Shoots</h3>

        <div className="in_list">
          <ul>
            <li>
              <p>1 hour session with myself</p>
            </li>
            <li>
              <p>Minimum 20 edited photos to be delivered by online gallery</p>
            </li>
            <li>
              <p><strong>$300</strong></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalTwo;
