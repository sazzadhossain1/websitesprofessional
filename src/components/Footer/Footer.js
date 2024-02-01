import React from "react";
import "./Footer.css";
import footerLogo from "../../accts/footerLogo/footerLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_grid_div">
        <div>
          <img src={footerLogo} alt="" />
          <p>
            Unlock Your Online Potential with Websites and Powerful Marketing
            Solutions
          </p>
        </div>
        <div>
          <Link>Packages</Link>
          <Link>Services</Link>
          <Link>Projects</Link>
        </div>
        <div>
          <Link>About Me</Link>
          <Link>Blog Posts</Link>
          <Link>Contacts</Link>
        </div>
        <div>
          <p>Contacts</p>
          <p>info@websitesprofessional.com</p>
          <p>704-891-4329</p>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
