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
        <div className="icon-box">
          <GiPencilBrush size="2.5rem" />
          <BsFileCode size="2.8rem" />
        </div>
        <h1>
          designer.<span>developer</span>
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
