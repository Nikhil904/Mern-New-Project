import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const LoginFromGoogle = () => {
  const navigate = useNavigate();
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        let data = credentialResponse?.credential;
        const result = jwtDecode(data);
        localStorage.setItem("token", result.given_name);
        console.log(result, "checking data");
        navigate("/");
      }}
      onError={(err) => {
        console.log("Login Failed", err);
      }}
    />
  );
};

export default LoginFromGoogle;
