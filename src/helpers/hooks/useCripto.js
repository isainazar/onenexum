import CryptoJS from "crypto-js";

const useCripto = () => {
  const set = (data, item) => {
    const datosEncriptados = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "one-nexum-cripto"
    ).toString();
    localStorage.setItem(item, datosEncriptados);
  };
  const decode = (item) => {
    const datosEncriptados = localStorage.getItem(item);
    const bytes = CryptoJS.AES.decrypt(datosEncriptados, "one-nexum-cripto");
    const datosDesencriptados = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return datosDesencriptados;
  };

  return {
    set,
    decode,
  };
};

export default useCripto;
