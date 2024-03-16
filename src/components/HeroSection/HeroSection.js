import React from "react";
import "./HeroSection.css";
import heroPhoto from "../../accts/hero_photo/heroPhoto.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="heroSection_parent_div">
      {/* <img className="heroPhoto" src={heroPhoto} alt="" /> */}
      <div className="attract_div">
        <h1 className="attract_h1">
          Attract New Customers and Grow Your Business
        </h1>
        {/* <h1 className="unlock_h1">
          Unlock Your Online Potential with <br /> Websites and Powerful
          Marketing Solutions
        </h1> */}
        <h1 className="unlock_h1">Digital Marketing Consultant</h1>
        <Link to="/contact">
          <button className="contact_us_btn">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
