import React from "react";
import OfferItem from "../SignUp/OfferItem";

import { offerItemsPremium } from "../../helpers/offerItemsPremium";
import AppButton from "../AppButton";
import { useNavigate } from "react-router-dom";
const PaymentInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="payment-info">
      <section className="info-page offer">
        {offerItemsPremium.map((item) => {
          return (
            <OfferItem
              clase="dark"
              key={item.key}
              img={item.url}
              texto={item.texto}
            />
          );
        })}
        <AppButton
          clase="primary-action"
          texto="FINALIZAR"
          accion={() => {
            navigate("/home");
          }}
        />
      </section>
    </section>
  );
};

export default PaymentInfo;
