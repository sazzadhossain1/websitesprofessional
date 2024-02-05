import React from "react";
import "./AccessDenied.css";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  return (
    <div className="access_denied_parent_div">
      <h1 className="access_denied_heading">Access Denied</h1>
      <small className="you_do_not_small_text">
        You do not have permission to access this page.
      </small>
      <br />
      <Link to="/home">
        <button className="go_back_btn bg-blue-600 hover:bg-blue-700">
          Go back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default AccessDenied;
