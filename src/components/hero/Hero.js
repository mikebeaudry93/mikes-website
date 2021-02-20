import React from "react";
import "./hero.scss";
import { BsFileCode } from "react-icons/bs";
import { GiPencilBrush } from "react-icons/gi";
import { scroller } from "react-scroll";

const Hero = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 3000,
      delay: 100,
      smooth: true,
      offset: -200,
    });
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="sub-title-box">
          <h3>FRONT END DEVELOPER</h3>
          <div className="hero-line"></div>
        </div>
        <h1>
          michael<span>Beaudry</span>
        </h1>
        <button
          className="btn-primary btn-hero"
          onClick={() => scrollToElement("projects")}
        >
          projects
        </button>
      </div>
    </div>
  );
};

// <div className="icon-box">
//           <GiPencilBrush size="2.5rem" />
//           <BsFileCode size="2.8rem" />
//         </div>

export default Hero;
