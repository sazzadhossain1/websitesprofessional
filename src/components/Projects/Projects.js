import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import projectsPhotoOne from "../../accts/projects_photo/projectsPhotoOne.png";
import projectsPhotoTwo from "../../accts/projects_photo/projectsPhotoTwo.png";
import projectsPhotoThree from "../../accts/projects_photo/projectsPhotoThree.png";

const Projects = () => {
  return (
    <div className="projects_parent_div">
      <h1 className="Projects_heading">Projects</h1>

      <div className="projects_photo_grid_div">
        <Link target="_blank" to="https://www.deonafrierson.com/">
          <img className="projects_photo" src={projectsPhotoOne} alt="" />
        </Link>
        <Link target="_blank" to="https://www.procureagency.com/">
          <img className="projects_photo" src={projectsPhotoTwo} alt="" />
        </Link>
        <Link>
          <img className="projects_photo" src={projectsPhotoThree} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
