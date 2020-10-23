import React from "react";
import "./about.scss";
import TechSkills from "../tech-skills/TechSkills";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Hi, I'm Mike. Nice to meet you!</h2>
        <p>
          I began my journey as a Developer once I graduated from BrainStation
          in 2019. Since then, I've been building and designing full-stack
          applications to further my skills and progress myself in the field I'm
          truly passionate about. I enjoy building projects from the ground up
          and love using React to do it. I'm charasmatic, hardworking, and have
          a natural curiosity for learning how things work. I look to forward to
          helping progress the world through innovative technology.{" "}
        </p>
      </div>
      <TechSkills />
    </section>
  );
};

export default About;
