import React from "react";
import "./HomeSignUp.css";
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

          <button className="login_btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSignUp;
