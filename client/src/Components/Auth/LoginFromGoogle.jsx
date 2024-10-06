import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const LoginFromGoogle = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        let data = credentialResponse?.credential;
        const result = jwtDecode(data);
        console.log(result, "checking data");
      }}
      onError={(err) => {
        console.log("Login Failed", err);
      }}
    />
  );
};

export default LoginFromGoogle;
