import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import UserContext from "../contexts/UserContext";
import useUserUpdate from "../helpers/hooks/useUserUpdate";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { UserDispatch } = useContext(UserContext);
  
  const { getUser } = useUserUpdate({UserDispatch});

  useEffect(() => {
     getUser(); 
  }, [location.pathname]);

  const { logged } = useContext(AuthContext);

  return logged.userLogged ? children : <Navigate to="/landing" />;
};

export default PrivateRouter;
