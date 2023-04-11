import React , { useContext }from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

const PublicRouter = ({children}) => {
  
  const {logged} = useContext(AuthContext);

  return !logged.userLogged? children : <Navigate to="/home" />
}

export default PublicRouter