import React from "react";
import "./tech-skills.scss";

// developer icons
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.svg";
import node from "../../assets/node-js.png";
import react from "../../assets/react.png";
import sass from "../../assets/sass.svg";
import redux from "../../assets/logo-redux.png";

const TechSkills = () => {
  const [icons] = React.useState([
    html,
    css,
    javascript,
    node,
    react,
    sass,
    redux,
  ]);
  return (
    <div className="tech-skills">
      <h2>Languages I speak:</h2>
      <div>
        {icons.map((item, i) => {
          return (
            <img
              key={i}
              className="developer-icons"
              src={item}
              alt="developer icon"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechSkills;
