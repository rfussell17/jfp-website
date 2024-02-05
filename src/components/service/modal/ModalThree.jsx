import React from "react";

const ModalThree = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/3.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Engagement Photos</h3>

        <div className="in_list">
          <ul>
            <li>
              <p>1 hour session with myself</p>
            </li>
            <li>
              <p>Minimum 20 edited photos to be delivered by online gallery</p>
            </li>
            <li>
              <p>
                <strong>$300</strong> per standalone session <strong>OR</strong>{" "}
                free when combined with any wedding package
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalThree;
