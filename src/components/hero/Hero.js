import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          designer.<span>developer</span>
        </h1>
        <button className="btn-primary btn-hero">projects</button>
      </div>
    </div>
  );
};

export default Hero;
