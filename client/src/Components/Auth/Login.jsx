import React from "react";
import "../../GlobalCss.css";
import LoginFromGoogle from "./LoginFromGoogle";

const Login = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <h3 className="login_page_text">Login Page</h3>
      </div>
      <LoginFromGoogle />
    </div>
  );
};

export default Login;
