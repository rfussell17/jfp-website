import React from "react";

const ModalFour = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/service/3.jpeg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/3.jpeg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Portrait Session</h3>

        <div className="in_list">
          <ul>
            <li>
              <p>1 hour portrait session with myself</p>
            </li>
            <li>
              <p>2 outfits</p>
            </li>
            <li>
              <p>15 edited photos</p>
            </li>
            <li>
              <p>
                <strong>$325</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalFour;
