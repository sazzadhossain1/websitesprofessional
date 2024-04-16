import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import projectsPhotoOne from "../../accts/projects_photo/projectsPhotoOne.png";
import projectsPhotoTwo from "../../accts/projects_photo/projectsPhotoTwo.png";
import projectsPhotoThree from "../../accts/projects_photo/projectsPhotoThree.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

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

  useEffect(() => {
    fetch("https://admin.websitesprofessional.com/api/home/project")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [projects, setProjects] = useState(null);

  if (!projects || !Array.isArray(projects.data)) {
    return <div>Loading...</div>;
  }

  const rootUrl = "https://admin.websitesprofessional.com/";
  // console.log(projects);
  return (
    <div className="projects_parent_div">
      <h1 className="Projects_heading">Projects</h1>

      <div className="projects_photo_grid_div">
        {projects.data.map((project) => (
          <div key={project.id}>
            <Link target="_blank" to={project.url}>
              <img
                className="projects_photo"
                src={rootUrl + project.image}
                alt=""
              />
            </Link>
          </div>
        ))}
        {/* <Link target="_blank" to="https://www.deonafrierson.com/">
          <img className="projects_photo" src={projectsPhotoOne} alt="" />
        </Link>
        <Link target="_blank" to="https://www.procureagency.com/">
          <img className="projects_photo" src={projectsPhotoTwo} alt="" />
        </Link>
        <Link onClick={showModal}>
          <img className="projects_photo" src={projectsPhotoThree} alt="" />
        </Link> */}
      </div>
    </div>
  );
};

export default Projects;
