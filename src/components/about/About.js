import React from "react";
import "./about.scss";
import TechSkills from "../tech-skills/TechSkills";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Hi, I'm Mike. Nice to meet you!</h2>
        <p>
          Western University Marketing graduate and Web Development graduate
          from BrainStation, Toronto, Ontario. Currently working as a Web
          Design/Developer Team and Project Leader. My role here includes
          digital marketing in addition to web design/development. See my resume
          at the top of the page for more details. In my spare time, I enjoy
          building and designing web applications with an emphasis on writing
          clean code. My notable tech skills include React, HTML, SASS,
          JavaScript, Node, and Express. I also have experience building
          websites and applications with Wordpress, Wix and the MERN stack. I'm
          charasmatic, hardworking, and have a natural curiosity for learning
          how things work. I look to forward to helping progress the world
          through innovative technology.
        </p>
        <TechSkills />
      </div>
    </section>
  );
};

export default About;
