import React, { useEffect, useState } from "react";
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
  const [navData, setNavData] = useState(null);
  // console.log(navData?.data?.address);

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  // console.log(footerDatas);
  useEffect(() => {
    fetch("https://admin.websitesprofessional.com/api/setting")
      .then((res) => res.json())
      .then((data) => setNavData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to remove "Digital Marketing Consultant" and "704-891-4329"
  const formatAddressTwo = (address) => {
    if (!address) return "";
    // Remove "Digital Marketing Consultant"
    let formattedAddress = address
      .replace("Digital Marketing Consultant", "")
      .trim();
    // Remove the specific phone number "704-891-4329"
    formattedAddress = formattedAddress.replace("973-883-1223", "").trim();
    // Further clean up, if necessary, e.g., removing extra spaces or commas
    formattedAddress = formattedAddress.replace(/,+\s*$/, "").trim();
    return formattedAddress;
  };

  // Function to remove "Digital Marketing Consultant" and "704-891-4329"
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
    <div className="navigation_main_parent_div">
      {/* Navigaton Login Part Site */}

      <div className="navigation_second_parent_div">
        <div className="navigation_parent_div">
          <div className="navigation_email_div">
            <div className="icon_div">
              <FontAwesomeIcon
                className="nav_envelope_icon"
                icon={faEnvelope}
              />
              <small>
                {/* info@websitesprofessional.com */}
                {formatAddressTwo(navData?.data?.address)}
              </small>
            </div>

            <div className="icon_div">
              <FontAwesomeIcon className="nav_phone_icon" icon={faPhoneFlip} />
              <small>
                {/* 973-883-1223 */}
                {formatAddressThree(navData?.data?.address)}
              </small>
            </div>
          </div>

          <div className="navigation_login_signUp_div">
            {/* <Link to="/login">
              <button className="nav_btn">
                <Link to="/login">Login</Link>
              </button>
            </Link> */}

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
            {/* <li>
              <Link className="login" to="/login">
                Login
              </Link>
            </li> */}
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
