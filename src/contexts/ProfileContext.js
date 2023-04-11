import { createContext, useReducer } from "react";
import { perfil } from "../helpers/perfil";
import { ProfileReducer } from "../reducers/ProfileReducer";

const ProfileContext = createContext();
const initial = {profile:perfil}

const ProfileProvider = ({children}) =>{
  const [data,dispatch] = useReducer(ProfileReducer, initial);
  
  return(
    <ProfileContext.Provider value={{data,dispatch}}>
      {children}
    </ProfileContext.Provider>
  );
}

export {ProfileProvider};
export default ProfileContext;