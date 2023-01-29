import { useContext, useEffect } from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { MyAccount } from "../components/MyAccount";

export const PrivateRoute = () => {
  const userCtx = useContext(UserContext);

  const { authStatus, verifyingToken } = userCtx;

  useEffect(() => {
    verifyingToken();
  }, []);

  return authStatus ? <MyAccount /> : <Navigate to='/login' replace />;
};
