import React from "react";
import "./HomeSignUp.css";
const HomeSignUp = () => {
  return (
    <div className="homeSignUp_parent_div">
      <div className="homeSignUp_grid_div">
        {/* <div className="homeSignUp_text_div">
          <h1 className="homeSignUP_In_heading">Sign Up</h1>
        </div> */}
        <div className="homeSignUp_cart_div">
          <div className="homeSignUp_inner_div">
            <h1 className="homeSignUP_In_heading_in_cart">Sign Up </h1>
            <div>
              <div>
                <input
                  className="homeSignUp_input"
                  type="name"
                  placeholder="Full Name"
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

            <button className="homeSignUp_btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSignUp;
