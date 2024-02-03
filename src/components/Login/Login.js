import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_parent_div">
      <div className="login_cart_div">
        <div className="login_inner_div">
          <h1>Sign In</h1>
          <div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <button>Login In</button>
          <Link>Forgot Password</Link>
        </div>
        <p>Don't have account</p>
        <Link to="/signUp">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
