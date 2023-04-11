import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";

const SleepCategoryTwo = () => {
  const navigate = useNavigate();
  return (
    <section className="main-view sleep-view categories">
      <section className="top">
      <img src="../../../assets/sueno-premium.svg" alt="play button" />
        <h1>
          Sonidos de
          <br/>relajación mixta
        </h1>
        <p>
          Este tipo de frecuencias combina distintos sonidos relajantes junto
          con vocales e instrumentos selectivos que al ser fusionados pueden
          generarte un estado profundo de calma y te ayudará a eliminar los
          estados limitantes que sientas a la hora de dormir.
        </p>
      </section>
      <section className="bottom">
        <section className="slide">
          <section className="frequency-box">
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/b1')}}>
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>Frecuencia 1</p>
          </section>
          <section className="frequency-box">
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/b2')}}>
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>Frecuencia 2</p>
          </section>
          <section className="frequency-box">
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/b3')}}>
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>Frecuencia 3</p>
          </section>
        </section>
      </section>

      <section className="boton">
        <AppButton
          clase="app-back"
          icono={faArrowLeft}
          accion={() => {
            navigate("/sleep");
          }}
        />
      </section>
    </section>
  );
};

export default SleepCategoryTwo;
