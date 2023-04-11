import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useControl from "../../helpers/hooks/useControl";
import useImgLoad from "../../helpers/hooks/useImgLoad";

const UserSpaceInfo = () => {
  
  const navigate = useNavigate();
  const { page, prev, next, move, start, end } = useControl(3);

const {imgLoaded} = useImgLoad();

  const goHome = () => {
    navigate("/home");
  };

  const goUser = () => {
    navigate("/user/main");
  };
 
  
  return (
    <section className="user-space-info no-scroll">
      <section
        className="imagenes"   
        onTouchStart={start}
        onTouchMove={end}
        onTouchEnd={move}
      >
        {page === 1 && (
          imgLoaded? <img
            src="../../assets/espacio-info-3.svg" 
            alt="userspace"
            className="fade-in faster"
            width="90%"
          />:
          <div className="loading">
            <span className="loader"></span>
          </div>

        )}
        {page === 2 && (
          <img
            src="../../assets/espacio-info-2.svg"
            alt="userspace"
            className="fade-in faster"
            width="90%"
          />
        )}
        {page === 3 && (
          <img
            src="../../assets/espacio-info-1.svg"
            alt="userspace"
            className="fade-in faster"
            width="90%"
          />
        )}
      </section>
      <section className="controles">
        <span className={page === 1 ? "hidden" : ""} onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <section className="indicator">
          <div className={page === 1 ? "active-page" : "inactive-page"}></div>
          <div className={page === 2 ? "active-page" : "inactive-page"}></div>
          <div className={page === 3 ? "active-page" : "inactive-page"}></div>
        </section>
        <span className={page === 3 ? "hidden" : ""} onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </section>

      <section className="space-title-container">
        <h1 className="space-title  fade-in faster">Tu espacio personal</h1>
      </section>
      <section className="space-info-container">
        {page === 1 && (
          <p className="fade-in faster">
            Tu espacio personal es el lugar donde podrás complementar tu
            información y detallar más quien eres. Esto incluye un{" "}
            <strong>bonus especial</strong> al que podrás acceder una vez
            finalizado el pack. Además te regalamos un{" "}
            <strong>
              test<br></br> de personalidad.
            </strong>
          </p>
        )}
        {page === 2 && (
          <p className="fade-in faster">
            Es el espacio ideal para optimizar tu regulación emocional, por lo
            que mientras más completes tu perfil, más contenido exclusivo y
            personalizado podremos preparar para tí en búsqueda del mejor
            bienestar emocional posible.
          </p>
        )}
        {page === 3 && (
          <p className="fade-in faster">
            Como complemento, tendrás acceso a un diario virtual con asistencia
            guiada al que podrás acceder cuando y donde quieras.
          </p>
        )}
      </section>
      <section className="buttons-cont">
        {(page === 1 || page === 2) && (
          <AppButton
            clase="app-back fade-in faster"
            icono={faArrowLeft}
            accion={goHome}
          />
        )}
        {page === 3 && (
          <AppButton
            clase="primary-action fade-in faster"
            texto="COMENZAR"
            accion={goUser}
          />
        )}
      </section>
    </section>
  );
};

export default UserSpaceInfo;
