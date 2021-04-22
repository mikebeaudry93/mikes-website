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
      <div className="btn-box">
        <button
          className="btn-primary"
          onClick={() => scrollToElement("contact")}
        >
          let's get in touch!
        </button>
        <a
          className="btn-primary resume"
          href="https://drive.google.com/file/d/118wL_e3rSVKpaaon0Xokaj-6P6yMkqr6/view?usp=sharing"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume / CV
        </a>
      </div>
    </header>
  );
};

export default Header;
