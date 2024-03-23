import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = ({ apiInfo }) => {
  const apiData = apiInfo.data;
  console.log(apiData);

  return (
    <div className="heroSection_parent_div">
      {/* <img className="heroPhoto" src={heroPhoto} alt="" /> */}
      <div className="attract_div">
        {/* <h1 className="attract_h1">
          Attract New Customers <br /> and Grow Your Business
        </h1> */}
        <h1 className="attract_h1">{apiData.banner_title}</h1>

        {/* <h1 className="unlock_h1">Digital Marketing Consultant</h1> */}
        <h1 className="unlock_h1">{apiData.banner_sub_title}</h1>
        <Link to="/contact">
          <button className="contact_us_btn">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
