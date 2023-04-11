import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faPlay } from '@fortawesome/free-solid-svg-icons'
import AppButton from "../AppButton";


const Landing = () => {
  const navigate = useNavigate();

  const goQuiz = () => {
    if(localStorage.url){
      localStorage.removeItem('url');}
      
    const cookie = getCookieConsentValue();
    if (cookie) {
      navigate("/quiz");
    } else {
      alert("Debes aceptar las cookies para continuar");
    }
  };

  const [modal, setModal] = useState(false);
  const openVideo = () => {
    setModal(true);
  };
  const closeVideo = () => {
    setModal(false);
  };

  return (
    <>
      <Header clase="landing" />
      {modal && (
        <section className="video-modal">
          <button className="quit" onClick={closeVideo}>
          <FontAwesomeIcon icon={faXmark} />
          </button>
          <video
            id="mainVideo"
            src="../../assets/intro-video.mp4"
            controls
            playsInline
            autoPlay
            width="100%"
          ></video>
        </section>
      )}

      <main className="main-landing">
        <section className="video-cont fade-in">
          <img id="mainVideo" src="../../assets/poster-new.png"></img>
          <button className="play heart-beat" onClick={openVideo}>
          <FontAwesomeIcon icon={faPlay} />

          </button>
        </section>
        
        <section className="welcome ">
          <h2 className="title_mayus fade-in delay-1">¡HOLA!</h2>
          <h1 className="title_big fade-in delay-2">Bienvenidos a One Nexum</h1>
          <h3 className="title_small fade-in delay-3">
            Comienza ahora tu viaje de transformación.{" "}
          </h3>
        </section>

       {/*  <button className="begin fade-in" onClick={goQuiz}>
          COMENZAR
        </button> */}
        <AppButton texto='COMENZAR' clase="fade-in primary-action" accion={goQuiz}/>

        <p className="fade-in">
          ¿Ya tienes una cuenta? &nbsp;
          <span
            className="subtitle-message_general"
            onClick={() => navigate("/login")}
          >
            Inicia sesión
          </span>
        </p>
      </main>
    </>
  );
};

export default Landing;
