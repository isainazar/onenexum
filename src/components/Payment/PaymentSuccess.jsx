import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { decrypt, getToken, url } from "../../helpers/general";
import { actionTypes } from "../../types/actionTypes";
import AppButton from "../AppButton";

const PaymentSuccess = () => {
  const { data, UserDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const goHome = async () => {
    const user = {
      id_user: localStorage.UID,
    };
    if (localStorage.processed === "true") {
      await axios
        .put(`${url}/api/user/processed`, user, getToken())
        .then((res) => {
          UserDispatch({ type: actionTypes.initialValue, payload: data });
          localStorage.removeItem("processed");
          localStorage.removeItem("idPayment"); 
          navigate("/home")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const goBeneficios = () => {
    navigate("/payment/premium");
  };

  const updatePayment = async () => {
    const datos = {
      id_user: localStorage.UID,
      idPayment: decrypt("idPayment"),
      
    };
    await axios
      .post(`${url}/api/stripe/check`, datos)
      .then((res) => {
        localStorage.setItem("processed", res.data.payment_status);
      })
      .catch((err) => {
        window.location.href = localStorage.url;
      });
  };

  useEffect(() => {
    if (!localStorage.idPayment) {
      navigate("/payment");
    }
    updatePayment();
  }, []);

  return (
    <section className="main-payment main-payment__success">
      <section></section>

      <img src="../../assets/payment-check.svg" />

      <section className="info-text">
        <h2>¡PAGO EXITOSO!</h2>
        <p>
          Su suscripción al plan premium de One Nexum ha sido exitosa. Ahora
          podrás aprovechar todas las funciones y contenidos que tenemos para
          ofrecerte.
        </p>
        <p onClick={goBeneficios}>
          <span>Ver beneficios</span>
        </p>
      </section>
      <AppButton
        texto="FINALIZAR"
        clase="primary-action primary-action__stripe"
        accion={goHome}
      />
    </section>
  );
};

export default PaymentSuccess;
