import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";

import ProjectCard from "../project-card/ProjectCard";
import ProjectData from "../../utils/ProjectData";
import Contact from "../contact/Contact";

const Projects = () => {
  const [projectList] = React.useState(ProjectData);
  return (
    <section className="projects">
      <div className="project-title-box">
        <h3>Portfolio</h3>
        <h1>Here's a few things I have worked on!</h1>
        <div className="project-line"></div>
      </div>

      <div className="project-list">
        {projectList.map((item, i) => {
          return <ProjectCard key={i} {...item} />;
        })}
      </div>
      <Element name="contact">
        <Contact />
      </Element>
      <Contact />
    </section>
  );
};

export default Projects;
