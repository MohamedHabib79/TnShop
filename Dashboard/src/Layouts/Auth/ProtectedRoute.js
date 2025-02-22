import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./Contexts/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
