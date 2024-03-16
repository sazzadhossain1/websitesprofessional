import React from "react";
import "./HomeSignUp.css";
import { Link } from "react-router-dom";
const HomeSignUp = () => {
  return (
    <div className="homeSignUp_parent_div">
      <div className="homeSignUp_cart_div">
        <div className="homeSignUp_inner_div">
          <h1 className="sign_In_heading">Sign Up</h1>
          <div>
            <div>
              <input
                className="homeSignUp_input"
                type="name"
                placeholder="User Name"
              />
            </div>
            <div>
              <input
                className="homeSignUp_input"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSignUp;
