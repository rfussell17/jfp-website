import React from "react";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/JonnyFussell-Photography-110632244501700",
  },
  { iconName: <FiMail />, link: "mailto:jonnyfussell@gmail.com" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/jonny.fussell.photography",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
