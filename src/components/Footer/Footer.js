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
        <div className="footer_unlock_div">
          <img src={footerLogo} alt="" />
          <p className="footer_Unlock">
            Unlock Your Online Potential with Websites and Powerful Marketing
            Solutions
          </p>
        </div>
        <div className="footer_Packages_div">
          <Link to="/accessDenied" className="footer_link">
            Packages
          </Link>
          <br />
          <Link to="/footerService" className="footer_link">
            Services
          </Link>
          <br />
          <Link to="/projects" className="footer_link">
            Projects
          </Link>
        </div>
        <div className="footer_aboutMe_div">
          <Link to="/aboutMe" className="footer_link">
            About Me
          </Link>
          <br />
          <Link to="/blogPosts" className="footer_link">
            Blog Posts
          </Link>
          <br />
          <Link to="/contact" className="footer_link">
            Contacts
          </Link>
        </div>
        <div className="footer-contact_div">
          <p className="footer_contact_header">Contacts</p>
          <p className="footer_info_email">info@websitesprofessional.com</p>
          <p className="footer_number">704-891-4329</p>
          <div className="footer_icon_div">
            <Link
              target="_blank"
              to="https://www.facebook.com/people/Affordable-Website-Online-Marketing/100066757076765/"
            >
              <FontAwesomeIcon className="footer_icon" icon={faFacebook} />
            </Link>

            <Link to="/accessDenied">
              <FontAwesomeIcon className="footer_icon" icon={faInstagram} />
            </Link>

            <Link target="_blank" to="https://github.com/Cristiane11">
              <FontAwesomeIcon className="footer_icon" icon={faGithub} />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/seoservicescharlotte/"
            >
              <FontAwesomeIcon className="footer_icon" icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer_blank_div"></div>
      <div className="footer_flex_div">
        <div className="copyright_div">
          Copyright © 2023 Website Professional ™ . All Rights Reserved.
        </div>
        <div className="terms_of_service_div">
          <Link to="/termsOfService" className="terms_text">
            Terms of Service
          </Link>
          <Link to="/privacyPolicy" className="privacy_text">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
