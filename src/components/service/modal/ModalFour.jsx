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
        <h3>Elopement Packages</h3>

        <div className="in_list">
          <ul>
            <li>
              <p>Starting at <strong>$2000</strong> + hotel and gas expenses</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ModalFour;
