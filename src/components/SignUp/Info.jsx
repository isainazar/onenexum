import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Check from "../Inputs/Check";
import axios from "axios";
import { url, getToken } from "../../helpers/general";
import Header from "../Landing/Header";
import Modal from "../Modal/Modal";
import AppButton from "../AppButton";
import { useNavigate } from "react-router-dom";
import { infoItems } from "../../helpers/infoItems";
import OfferItem from "./OfferItem";
import AuthContext from "../../contexts/AuthContext";
import { authTypes } from "../../types/authTypes";

const Info = () => {
  const [terms, setTerms] = useState({ terminos: null });
  const [signError, setSignError] = useState({ error: false, message: "" });

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleModalClose = () => {
    setSignError({ error: false, message: "" });
  };
  const sendTerms = async () => {
   
    await axios
      .put(
        `${url}/api/user/terminos`,
        { id_user: localStorage.UID },
        getToken()
      )
      .then((res) => {
        goSuccess()
      })
      .catch((err) => alert(err.response.data.message));
  };

  const goPayment = async () => {
    if (localStorage.url) {
      window.location.href = localStorage.url;
    } else {
      await axios
        .post(`${url}/api/stripe`, { id_user: localStorage.UID }, getToken())
        .then((res) => {
          localStorage.setItem("url", res.data.url);
          window.location.href = res.data.url;
        })
        .catch((err) => console.log(err));
    }
  };

 const goSuccess = ()=>{
  navigate('/account_created')
 }

  const handleContinue = () => {
    if (terms.terminos === null || terms.terminos === false) {
      window.scrollTo(0, 0);
      setSignError({
        error: true,
        message: "Debes aceptar los términos para poder continuar",
      });
    } else {
     
      sendTerms();
    
    }
  };
  useEffect(()=>{
    if(!localStorage.UID || !localStorage.nombre || !localStorage.quiz){
      navigate('/quiz')
    }
  },[])

  return (
    <section className={`offer-view offer-view_info ${signError.error? "no-scroll" : ""}`}>
      <Header clase="info-header-2" />
      <section className="info-page suggest">
        <section className="welcome">
          <h1 className="title_big-name_title">
            Esto es lo que hacen la ansiedad y depresión a tu vida según
            estudios científicos
          </h1>
        </section>

        <section className="center-info">
          {infoItems.map((item) => {
            return (
              <OfferItem key={item.key} img={item.url} texto={item.texto} />
            );
          })}
        </section>

        <Check
          type="checkbox"
          label={`He leído y acepto los términos y condiciones `}
          name="terminos"
          estado={terms}
          setEstado={setTerms}
        ></Check>
        <section className="btn">
          <AppButton
            clase="primary-action"
            accion={handleContinue}
            texto="SIGUIENTE"
          />
        </section>
      </section>

      {signError.error && (
        <Modal
          signError={signError}
          handleModalClose={handleModalClose}
          validation={{ status: false }}
          success={{ status: false }}
        /> //esto porque no se usa validacion en este modal
      )}
    </section>
  );
};

export default Info;
