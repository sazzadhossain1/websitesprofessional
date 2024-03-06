import React from "react";
import "./HomeSignUp.css";
import { Link } from "react-router-dom";
const HomeSignUp = () => {
  return (
    <div className="login_parent_div">
      <div className="login_cart_div">
        <div className="login_inner_div">
          <h1 className="sign_In_heading">Sign Up</h1>
          <div>
            <div>
              <input
                className="login_input"
                type="name"
                placeholder="User Name"
              />
            </div>
            <div>
              <input className="login_input" type="email" placeholder="Email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSignUp;
