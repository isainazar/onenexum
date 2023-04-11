import axios from "axios";
import PackRoutes from "../PackRoutes/PackRoutes";
import { Navigate, Route, Routes } from "react-router-dom";
import { url } from "../../helpers/general";
function VerifyRoutes() {
  const validado = async () => {
    const token = false;
    await axios
      .post(`${url}/api/verify`, {
        token: localStorage.token,
      })
      .then((res) => {
        token = res.data;
        console.log(token);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    return token;
  };
  

  return <>
  {validado() ? <PackRoutes /> : <Navigate to="/login" />}</>
  ;
}

export default VerifyRoutes;
