import axios from 'axios';
import CryptoJS from "crypto-js";


const url = "http://192.168.0.96:3000"; //   endpoint backend(local o remoto)

const getToken = () => {
  return {
    headers: {
      Authorization: localStorage.token,
    },
  };
};

const encrypt = (data, item) => {
  const datosEncriptados = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    "one-nexum-cripto"
  ).toString();
  localStorage.setItem(item, datosEncriptados);
};

const decrypt = (item) => {
  const datosEncriptados = localStorage.getItem(item);
  const bytes = CryptoJS.AES.decrypt(datosEncriptados, "one-nexum-cripto");
  const datosDesencriptados = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return datosDesencriptados;
}; 

const goPayment = async () => {

  if (localStorage.url) {
    window.location.href = localStorage.url;
  } else {
    
    await axios
      .post(`${url}/api/stripe`, { id_user: localStorage.UID }, getToken())
      .then((res) => {
      encrypt(res.data.id, "idPayment")
      localStorage.setItem("url", res.data.url);
     // localStorage.setItem("idPayment", res.data.id)
      window.location.href = res.data.url;
      })
      .catch((err) => console.log(err));
  }
};

const checkModal = (signError) =>{
 return signError.error? "no-scroll" : ""
}

const capitalize= (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatTime(time) {
  const minutes =
    Math.floor(time / 60) < 10
      ? `0${Math.floor(time / 60)}`
      : Math.floor(time / 60);
  const seconds =
    Math.floor(time % 60) < 10
      ? `0${Math.floor(time % 60)}`
      : Math.floor(time % 60);
  return `${minutes}:${seconds}`;
}

export { url, getToken , goPayment, checkModal,capitalize, formatTime,decrypt};
