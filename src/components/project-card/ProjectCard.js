import React from "react";
import "./project-card.scss";
import { BiChevronRight } from "react-icons/bi";

const ProjectCard = ({ title, image, description, url }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`project-img ${isHovered && "project-img-hovered"}`}
        src={image}
        alt="#"
      />
      <div
        className={`project-card-text-box ${
          isHovered && "project-card-text-box-hovered"
        }`}
      >
        <div>
          {" "}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <a
        className={`btn-primary btn-link ${isHovered && "btn-link-hovered"}`}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        view website{" "}
        <span>
          <BiChevronRight size="1.2rem" />
        </span>
      </a>
    </article>
  );
};

export default ProjectCard;
