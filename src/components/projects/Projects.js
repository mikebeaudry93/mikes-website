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
      <h1>Projects</h1>
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
