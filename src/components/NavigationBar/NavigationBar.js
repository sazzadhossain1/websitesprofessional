import React, { useState } from "react";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faPhoneFlip,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import navigationLogo from "../../accts/navigationLogo.png";

const NavigationBar = () => {
  let [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  return (
    <div className="navigation_main_parent_div">
      {/* Navigaton Login Part Site */}

      <div className="navigation_second_parent_div">
        <div className="navigation_parent_div">
          <div className="navigation_email_div">
            {/* <div className="icon_div">
              <FontAwesomeIcon
                className="nav_envelope_icon"
                icon={faEnvelope}
              />
              <small>info@websitesprofessional.com</small>
            </div> */}

            <div className="icon_div">
              <FontAwesomeIcon className="nav_phone_icon" icon={faPhoneFlip} />
              <small>704-891-4329</small>
            </div>
          </div>

          <div className="navigation_login_signUp_div">
            <Link to="/login">
              <button className="nav_btn">
                <Link to="/login">Login</Link>
              </button>
            </Link>

            <Link to="/signUp">
              <button className="nav_btn">Sign up</button>
            </Link>
          </div>
        </div>
      </div>

      {/*  Navigation Menu Part Site*/}

      <div className="nav_menu_main_parent_div">
        <div className="nav_menu_parent_div">
          <img className="navigationLogo" src={navigationLogo} alt="" />
          <div onClick={handleClick} className="menu_icons">
            {state.clicked ? (
              <FontAwesomeIcon className="fa_bars" icon={faTimes} />
            ) : (
              <FontAwesomeIcon className="fa_bars" icon={faBars} />
            )}
          </div>
          <ul className={state.clicked ? "unOrderLink active" : "unOrderLink"}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/aboutMe">About Me</Link>
            </li>
            <li>
              <Link to="/blogPosts">Blog Posts</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="login" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="signUP" to="/signUp">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
