import React, { useEffect, useState } from "react";
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
  const [footerDatas, setFooterDatas] = useState(null);
  // console.log(footerDatas);
  useEffect(() => {
    fetch("https://admin.websitesprofessional.com/api/setting")
      .then((res) => res.json())
      .then((data) => setFooterDatas(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const rootUrl = "https://admin.websitesprofessional.com";

  // Function to remove email and phone number using regular expressions
  const formatAddress = (address) => {
    if (!address) return "";
    // Regular expression to find email addresses
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    // Regular expression to find phone numbers, adjust the regex according to your specific format if needed
    const phoneRegex = /\b\d{3}-\d{3}-\d{4}\b/;
    // Remove email and phone number from the string
    let formattedAddress = address
      .replace(emailRegex, "")
      .replace(phoneRegex, "")
      .trim();
    // Assuming there might be extra spaces or commas left after removal
    formattedAddress = formattedAddress.replace(/,+\s*$/, "").trim();
    return formattedAddress;
  };

  // Function to remove "Digital Marketing Consultant" and "704-891-4329"
  const formatAddressTwo = (address) => {
    if (!address) return "";
    // Remove "Digital Marketing Consultant"
    let formattedAddress = address
      .replace("Digital Marketing Consultant", "")
      .trim();
    // Remove the specific phone number "704-891-4329"
    formattedAddress = formattedAddress.replace("704-891-4329", "").trim();
    // Further clean up, if necessary, e.g., removing extra spaces or commas
    formattedAddress = formattedAddress.replace(/,+\s*$/, "").trim();
    return formattedAddress;
  };

  // Function to remove "Digital Marketing Consultant" and "info@websitesprofessional.com"
  const formatAddressThree = (address) => {
    if (!address) return "";
    // Remove "Digital Marketing Consultant"
    let formattedAddress = address
      .replace("Digital Marketing Consultant", "")
      .trim();
    // Remove the specific phone number "704-891-4329"
    formattedAddress = formattedAddress
      .replace("info@websitesprofessional.com", "")
      .trim();
    // Further clean up, if necessary, e.g., removing extra spaces or commas
    formattedAddress = formattedAddress.replace(/,+\s*$/, "").trim();
    return formattedAddress;
  };
  return (
    <div className="footer_parent_div">
      <div className="footer_grid_div">
        <div className="footer_Digital_div">
          <img
            className="footer_logo"
            src={rootUrl + footerDatas?.data?.footer_logo}
            alt=""
          />
          <p className="footer_Digital">
            {formatAddress(footerDatas?.data?.address)}
          </p>
          <p className="footer_info_email">
            {/* info@websitesprofessional.com */}
            {formatAddressTwo(footerDatas?.data?.address)}
          </p>
          <p className="footer_number">
            {/* 973-883-1223 */}
            {formatAddressThree(footerDatas?.data?.address)}
          </p>
        </div>

        <div className="footer_Packages_div">
          <p className="footer_contact_header"> Site Map</p>
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
          <br />
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
          <br />
          <Link
            target="_blank"
            to="https://admin.websitesprofessional.com/login"
            className="footer_link"
          >
            Admin Login
          </Link>
        </div>
        {/* <div className="footer_aboutMe_div">
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
        </div> */}

        <div className="footer-contact_div">
          <p className="footer_contact_header">Social Media Handles</p>

          {/* <p className="footer_info_email">info@websitesprofessional.com</p>
          <p className="footer_number">704-891-4329</p> */}
          <div className="footer_icon_div">
            <Link
              target="_blank"
              to="https://www.facebook.com/people/Affordable-Website-Online-Marketing/100066757076765/"
            >
              <FontAwesomeIcon className="facebook_icon" icon={faFacebook} />
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
          Copyright © 2024 Website Professional ™ . All Rights Reserved.
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
