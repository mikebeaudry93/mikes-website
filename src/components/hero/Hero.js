import React from "react";
import "./hero.scss";
import { scroller } from "react-scroll";

const Hero = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 2500,
      delay: 50,
      smooth: true,
      offset: 10,
    });
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="sub-title-box">
          <h3>FULL STACK DEVELOPER</h3>
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

export default Hero;
