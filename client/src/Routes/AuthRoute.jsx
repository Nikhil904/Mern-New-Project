import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AuthRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
   return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default AuthRoute;
