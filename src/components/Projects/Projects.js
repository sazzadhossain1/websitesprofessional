import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import projectsPhotoOne from "../../accts/projects_photo/projectsPhotoOne.png";
import projectsPhotoTwo from "../../accts/projects_photo/projectsPhotoTwo.png";
import projectsPhotoThree from "../../accts/projects_photo/projectsPhotoThree.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  //  Show modal Start //
  const showModal = (e) => {
    const modal_div = document.getElementById("modal_div");
    modal_div.removeAttribute("hidden", "hidden");
  };
  //  Show modal End //
  // Modal close function //
  const closeModalFunction = () => {
    const modal_div = document.getElementById("modal_div");
    modal_div.setAttribute("hidden", "hidden");
  };
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
        <Link onClick={showModal}>
          <img className="projects_photo" src={projectsPhotoThree} alt="" />
        </Link>
      </div>

      {/* Modal start */}
      <div id="modal_div" className="projects_modal_div" hidden>
        <div className="projects_modal_photo_div">
          <button onClick={closeModalFunction}>
            <FontAwesomeIcon className="projects_x_mark" icon={faXmark} />
          </button>{" "}
          <img
            className="projects_modal_photo"
            src={projectsPhotoThree}
            alt=""
          />
        </div>
      </div>

      {/* Modal end */}
    </div>
  );
};

export default Projects;
