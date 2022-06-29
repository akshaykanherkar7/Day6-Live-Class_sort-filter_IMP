import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default RequiredAuth;
