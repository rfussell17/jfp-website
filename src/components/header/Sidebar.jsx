import React, { useState, useEffect } from "react";

const sidebarContent = [
  { icon: "home", itemName: "Home", itemRoute: "#home" },
  { icon: "human", itemName: "About", itemRoute: "#about" },
  { icon: "service", itemName: "Service", itemRoute: "#service" },
  { icon: "portfolio", itemName: "Portfolio", itemRoute: "#portfolio" },
  { icon: "testimonial", itemName: "Testimonials", itemRoute: "#testimonials" },
  { icon: "contact", itemName: "Contact", itemRoute: "#contact" },
];

const sectionIds = sidebarContent.map((val) => val.itemRoute.slice(1));

const useScrollSpy = (ids) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 1;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);

  return activeId;
};

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const activeId = useScrollSpy(sectionIds);
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
            <ul className="anchor_nav">
              {sidebarContent.map((val, i) => (
                <li key={i}>
                  <div className="list_inner">
                    <a
                      href={val.itemRoute}
                      className={activeId === val.itemRoute.slice(1) ? "active" : ""}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
