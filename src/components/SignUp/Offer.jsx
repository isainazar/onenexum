import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { offerItems } from "../../helpers/offerItems";
import { offerItemsPremium } from "../../helpers/offerItemsPremium";
import AppButton from "../AppButton";
import Header from "../Landing/Header";
import OfferItem from "./OfferItem";

const Offer = () => {
  const mainRef = useRef();
  const navigate = useNavigate();
  const [premiumView, setPremiumView] = useState(false);
  const handleContinue = () => {
    navigate("/info");
  };
  const toggleView = () => {
    mainRef.current.scrollTo(0, 0);
    setPremiumView((prev) => !prev);
  };
  const checkView = () => {
    if (!premiumView) {
      return "offer-view offer-view_normal";
    } else {
      return "offer-view offer-view_premium";
    }
  };

  const checkHeader = () => {
    if (!premiumView) {
      return "header-info";
    } else {
      return "header-premium";
    }
  };

  useEffect(()=>{
    if(!localStorage.UID || !localStorage.nombre || !localStorage.quiz){
      navigate('/quiz')
    }
  },[])
  return (
    <section className={checkView()} ref={mainRef}>
      <Header
        clase={checkHeader()}
        accion={() => {
          setPremiumView(false);
        }}
      />
      <section className="info-page offer">
        {!premiumView && (
          <h1 className="title_big-name_title">
            ¿Qué tiene One Nexum preparado para ti?
          </h1>
        )}
        {premiumView && (
          <>
            <h1 className="title_big-name_title">One Nexum Premium</h1>
            <p>
              ¡Con One Nexum Premium puedes acceder a muchas mas funciones,
              ejercicios y contenido exclusivo para mejorar aún mas tu
              bienestar!
            </p>
          </>
        )}
        {!premiumView &&
          offerItems.map((item) => {
            return (
              <OfferItem key={item.key} img={item.url} texto={item.texto} />
            );
          })}
        {premiumView &&
          offerItemsPremium.map((item) => {
            return (
              <OfferItem key={item.key} img={item.url} texto={item.texto} />
            );
          })}
      </section>
      {!premiumView && (
        <section className="see-premium" onClick={toggleView}>
          <img src="../../assets/premium-bonus.svg" />
          <h3>VER PLAN PREMIUM</h3>
        </section>
      )}
      <section className="btn">
        {premiumView ? (
          <AppButton
            clase="primary-action primary-action_bonus"
            accion={handleContinue}
            texto="CONTINUAR"
          />
        ) : (
          <AppButton
            clase="primary-action"
            accion={handleContinue}
            texto="SIGUIENTE"
          />
        )}
      </section>
    </section>
  );
};

export default Offer;
