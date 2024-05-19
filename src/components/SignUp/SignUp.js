import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup_parent_div">
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
            <div>
              <input
                className="login_input"
                type="number"
                placeholder="Phone"
              />
            </div>
            <div>
              <input
                className="login_input"
                type="link"
                placeholder="Website Address (if any)"
              />
            </div>
            <div>
              <input
                className="login_input"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="login_btn">Sign Up</button>
          <br />
          <Link className="forgot">Forgot Password</Link>
        </div>
        <p className="dont_have">Don't have account?</p>
        <Link className="sign_up" to="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
