import React from "react";
import { useState } from "react";
import { goPayment } from "../../helpers/general";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import AppButton from "../AppButton";
import useCripto from "../../helpers/hooks/useCripto";
const Payment = () => {
  const [paying, setPaying] = useState(false);

  const {set} = useCripto();
  const callPayment = () => {
    setPaying(true);
    setTimeout(goPayment(), 1000);
  };
  const navigate = useNavigate();

  return (
    <section className="main-payment">
      <h2 className="payment-title">Redirección de pago</h2>
      <section className="stripe-logo-container">
        <img src="../../assets/stripe-logo.svg" />
      </section>
      <section className="pay-info">
        {!paying && (
          <>
            <p>Para efectuar el pago oprime el botón continuar.</p>
            <p>
              Serás redirigido a la plataforma de pagos Stripe para continuar
              con el proceso.
            </p>
          </>
        )}
        {paying && (
          <>
            <p>Te estamos redireccionando hacia Stripe.</p>
            <p>
              Volverás a ser dirigido a esta pantalla cuando finalice y se
              confirme el proceso de pago.
            </p>
          </>
        )}
      </section>
      {!paying && (
        <section className="buttons-cont">
          <AppButton
            clase="app-back"
            icono={faArrowLeft}
            accion={() => {
              navigate(-1);
            }}
          />
          <AppButton
            clase="primary-action ml-5"
            texto="CONTINUAR"
            accion={callPayment}
          />
        </section>
      )}
      {paying && <img src="../../assets/waiting.gif" className="waiting" />}
      <section className="payment-footer">
        <p>
          Al continuar, autoriza a One Nexum a iniciar un pago desde su cuenta
          bancaria o cualquier otro método de pago disponible a través de
          Stripe. También acepta las <span>condiciones de usuario final</span> y
          la <span>política de privacidad</span> de One Nexum.
        </p>
      </section>
    </section>
  );
};

export default Payment;
