import { createContext, useEffect, useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";
import useUserUpdate from "../helpers/hooks/useUserUpdate";

import CryptoJS from "crypto-js";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const initial = () => {
    if (localStorage.ud) {
      const datosEncriptados = localStorage.getItem("ud");
      const bytes = CryptoJS.AES.decrypt(datosEncriptados, "one-nexum-cripto");
      const datosDesencriptados = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      console.log(datosDesencriptados)
      return datosDesencriptados;
    }
  };
  const [data, UserDispatch] = useReducer(UserReducer, {}, initial);
  
  const {getUser }= useUserUpdate({UserDispatch});
  
  useEffect(() => {
    if (localStorage.UID) {
      getUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ data, UserDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
