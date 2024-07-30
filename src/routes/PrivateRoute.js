import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  //   const token = localStorage.getItem("auth_token");
  const token = "eewerwerwe";
  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
