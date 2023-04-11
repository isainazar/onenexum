import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

const GuiaA = () => {
  const navigate = useNavigate();
  const [play, setPlay] = useState(false);

  const videoRef = useRef();
  const stopScrolling = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (play) {
       videoRef.current.addEventListener("touchmove", stopScrolling, {
        passive: false,
      });
    }
    if (!play) {
      videoRef.current?.removeEventListener("touchmove", stopScrolling, {
        passive: false,
      });
    }
  }, [play]);

  return (
    <section className="main-view">
      <Background clase="guia" play={true} estado={play} setEstado={setPlay} />

      {play && (
        <section className="info-video no-scroll" ref={videoRef}>
          <img
            src="../assets/quit-btn.svg"
            onClick={() => {
              setPlay(false);
            }}
          />
          <video src="../assets/welcome-vid.mp4" autoPlay playsInline></video>
        </section>
      )}

      <section className={`content guia-content`}>
        <>
          <CardHeader index="A" titulo="GUÍA SIMPLE" />

          <h2 className="title_guia">
            Obtén resultados que perdurarán toda la vida.
            <br /> Tu transformación empieza aquí.
          </h2>
          <div className="separador"></div>
          <section>
            <p className="explain">
              Una de las claves reside en controlar tu mente, controlar lo que
              piensas, analizar lo que tu entorno te comunica y transmutar ese
              estado mental negativo en una energía positiva que te potencie y
              te transforme hacia lo que quieres ser.
            </p>
          </section>
          <section className="buttons-cont">
            <AppButton
              clase="app-back"
              accion={() => {
                navigate("/home");
              }}
              icono={faArrowLeft}
            />
            <AppButton
              clase="primary-action "
              accion={() => {
                navigate("/seccionA/mapa");
              }}
              texto="CONTINUAR"
            />
          </section>

          <hr />
        </>
      </section>
    </section>
  );
};

export default GuiaA;
