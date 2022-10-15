import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return !logged ? children : <Navigate to="/balance" />;
};

export default PublicRoute;
