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
    { skill: "HTML", img: html },
    { skill: "CSS", img: css },
    { skill: "JavaScript", img: javascript },
    { skill: "Node.js", img: node },
    { skill: "ReactJS", img: react },
    { skill: "SASS", img: sass },
    { skill: "Redux", img: redux },
  ]);
  return (
    <div className="tech-skills">
      <h5 className="tech-skills-title">Tech Skills:</h5>
      <div className="skills-list">
        {icons.map((item, i) => {
          return (
            <div>
              <h4>{item.skill}</h4>
              <img
                key={i}
                className="developer-icons"
                src={item.img}
                alt="developer icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechSkills;
