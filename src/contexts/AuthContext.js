import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { AuthReducer } from "../reducers/AuthReducer";
import { authTypes } from "../types/authTypes";
import { url } from "../helpers/general";


const AuthContext = createContext();

const init = () => {
  return (
    JSON.parse(localStorage.getItem("userLogged")) || { userLogged: false }
  );
};

const AuthProvider = ({ children }) => {

  const [logged, dispatch] = useReducer(AuthReducer, {}, init);

  const removeUser = () => {
    dispatch({ type: authTypes.logout });
    localStorage.removeItem("token");
  };

  
  useEffect(() => {
    localStorage.setItem("userLogged", JSON.stringify(logged));
    const validado = async () => {
      let tokenValid = false;
      
      await axios
        .post(`${url}/api/verify`, {
          token: localStorage.token,
        })
        .then((res) => {
          tokenValid = res.data;
        })
        .catch((err) => {
          removeUser();
          console.log(err.response.data.message);
        });
      return tokenValid;
    };

    if (logged.userLogged) {
      validado();
    }
  }, [logged]);

  return (
    <AuthContext.Provider value={{ logged, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
