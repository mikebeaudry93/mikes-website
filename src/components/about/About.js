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
          from BrainStation, Toronto, Ontario. Currently, working as a Web
          Design/Developer team leader. My role as a project leader includes
          digital marketing in addition to web design/development. In my spare
          time, I enjoy building and designing web applications with an emphasis
          on writing clean code with React, HTML, SCSS, JavaScript, Node, and
          Express. I also have experience building websites with Wordpress and
          Wix. I'm charasmatic, hardworking, and have a natural curiosity for
          learning how things work. I look to forward to helping progress the
          world through innovative technology.

        </p>
        <TechSkills />
      </div>
    </section>
  );
};

export default About;
