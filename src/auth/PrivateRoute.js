import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const PrivateRoute = () => {
  const { authStatus, verifyingToken } = useContext(UserContext);

  useEffect(() => {
    verifyingToken();
  }, []);

  return authStatus ? <Outlet /> : <Navigate to="/login" replace />;
};
