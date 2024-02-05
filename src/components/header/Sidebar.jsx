import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

const sidebarContent = [
  { icon: "home", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  { icon: "human", itemName: "About", itemRoute: "#about", activeClass: "" },
  {
    icon: "service",
    itemName: "Service",
    itemRoute: "#service",
    activeClass: "",
  },
  {
    icon: "portfolio",
    itemName: "Portfolio",
    itemRoute: "#portfolio",
    activeClass: "",
  },
  {
    icon: "testimonial",
    itemName: "Testimonials",
    itemRoute: "#testimonials",
    activeClass: "",
  },
  {
    icon: "contact",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div
        className={click ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "service",
                "portfolio",
                "testimonials",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="svg custom"
                          src={`img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
