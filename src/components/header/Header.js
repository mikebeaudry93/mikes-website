import React from "react";
import "./header.scss";
import { scroller } from "react-scroll";

const Header = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 2500,
      delay: 50,
      smooth: true,
      offset: 80,
    });
  };
  return (
    <header className="navbar">
      <h3>
        michael <span>beaudry</span>
      </h3>
      <div>
        <button
          className="btn-primary"
          onClick={() => scrollToElement("contact")}
        >
          let's get in touch!
        </button>
      </div>
    </header>
  );
};

export default Header;
