import React from "react";
import "./project-card.scss";

import image1 from "../../assets/music-ss.png";

const ProjectCard = ({ title, image, description, url }) => {
  return (
    <article className="project-card">
      <img className="project-img" src={image} alt="#" />
    </article>
  );
};

export default ProjectCard;
