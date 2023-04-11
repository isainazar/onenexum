import axios from "axios";
import { actionTypes } from "../../types/actionTypes";
import { authTypes } from "../../types/authTypes";
import { url } from "../general";
const useUserUpdate = ({ UserDispatch }) => {
  const getUser = async () => {
    if (localStorage.UID) {
      await axios
        .get(`${url}/api/user/usuario/${localStorage.UID}`)
        .then((res) => {
          UserDispatch({ type: actionTypes.initialValue, payload: res.data });
        })
        .catch((err) => {
          localStorage.removeItem("userLogged");
        });
    }
  };
  return {
    getUser,
  };
};

export default useUserUpdate;
