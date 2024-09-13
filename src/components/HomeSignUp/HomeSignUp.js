import React, { useState } from "react";
import "./HomeSignUp.css";
import homeSignUpPhoto from "../../accts/homeSignUpPhoto/homeSignUpPhoto.png";

const HomeSignUp = () => {
  return (
    <div className="homeSignUp_parent_div">
      <div className="homeSignUp_grid_div">
        <div className="homeSignUp_text_div">
          <img src={homeSignUpPhoto} alt="" />
        </div>
        <div className="homeSignUp_cart_div">
          <div className="homeSignUp_inner_div">
            <h1 className="homeSignUP_In_heading_in_cart">Sign Up </h1>
            <form action="">
              <div>
                <div>
                  <input
                    for="MERGE1"
                    type="text"
                    placeholder="Full Name"
                    name="n"
                    className="homeSignUp_input"
                  />
                </div>
                <div>
                  <input
                    for="MERGE0"
                    type="email"
                    placeholder="Email"
                    name="id"
                    className="homeSignUp_input"
                  />
                </div>
              </div>
            </form>
            <button className="homeSignUp_btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSignUp;
// https://websitesprofessional.us18.list-manage.com/subscribe/post

//f02c1cdf572ef1792530cd77c
//6d1a066df7
