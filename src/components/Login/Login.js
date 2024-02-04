import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_parent_div">
      <div className="login_cart_div">
        <div className="login_inner_div">
          <h1 className="sign_In_heading">Sign In</h1>
          <div>
            <div>
              <input className="login_input" type="email" placeholder="Email" />
            </div>
            <div>
              <input
                className="login_input"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="login_btn">Log In</button>
          <br />
          <Link className="forgot">Forgot Password</Link>
        </div>
        <p className="dont_have">Don't have account?</p>
        <Link className="sign_up" to="/signUp">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
