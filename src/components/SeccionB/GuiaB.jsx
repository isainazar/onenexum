import React, { useEffect, useRef, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

const GuiaB = () => {
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
         <Background clase="guia" play={true}   estado={play}
          setEstado={setPlay}/>
     
          {play && (
            
            <section className="info-video" ref={videoRef}>
              <img src="../assets/quit-btn.svg" onClick={()=>{setPlay(false)}}/>
              <video
                src="../assets/section-b-vid.mp4"
                autoPlay
                playsInline
              ></video>
            </section>
          )}
      

      <section className={`content guia-content guia-content_b`}>
        <>
          <CardHeader index="B" titulo="GUÍA SIMPLE" />

          <div className="separador"></div>
          <p className="explain">
            En esta sección, vamos a hablar de cómo tus pensamientos y tu
            entorno pueden crear y/o potenciar estados depresivos y ansiosos. Te
            daremos información y tips muy novedosos que pueden ser claves a la
            hora de tu transformación. Te aseguramos que luego de recibirla,
            podrás ver tu vida desde una nueva perspectiva.{" "}
            <strong>
              ¡Te será más simple el día a día y podrás lograr lo que te
              propongas!
            </strong>
          </p>
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
                navigate("/seccionB/mapa");
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

export default GuiaB;
