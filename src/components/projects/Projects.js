import React from "react";
import "./projects.scss";

import ProjectCard from "../project-card/ProjectCard";

import quiz from "../../assets/quiz-screenshot.png";
import music from "../../assets/music-ss.png";
import app from "../../assets/app-ss.png";

import ProjectData from "../../utils/ProjectData";

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
    </section>
  );
};

export default Projects;
