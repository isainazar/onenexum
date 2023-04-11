import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../general";

const useEspacioInfo = () => {
    const navigate= useNavigate();
  const getInfo = async (endpoint, userId) => {
    let datos;
    await axios
      .get(`${url}/api/${endpoint}/${userId}`)
      .then((res) => {
        datos = res.data.message;
      })
      .catch((err) => {
        datos = err;
      });
    return datos;
  };
  const sendInfo = async (endpoint, info,destino) => {
    let datos;
    await axios
      .post(`${url}/api/${endpoint}`,info)
      .then((res) => {
        navigate(destino)
      })
      .catch((err) => {
        datos=err
      });
    return datos;
  };
  const updateInfo = async (endpoint, info, destino) => {
    let data;
    await axios
      .put(`${url}/api/${endpoint}`, info)
      .then((res) => {
        navigate(destino)
      })
      .catch((err) => {
        data = err 
      });
      return data
  };
  return {
    getInfo,
    sendInfo,
    updateInfo
  };
};

export default useEspacioInfo;
