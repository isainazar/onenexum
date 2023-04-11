import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";

const SleepCaterogyOne = () => {
const navigate = useNavigate();
  return (
    <section className="main-view sleep-view categories">
      <section className="top">
        <img src="../../../assets/sueno-premium.svg" alt="play button" />
        <h1>
          Relajación
          <br /> progresiva
        </h1>
        
        <p>
          Este tipo de frecuencias fusiona ondas sonoras armónicas y calmas, su
          tonalidad es suave e ideal si eres de los que se inclinan a disfrutar
          más de sonidos puros sin interferencia alguna.
        </p>
      </section>
      <section className="bottom">
        <section className="slide">
          <section className="frequency-box" >
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/a1')}}>
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>Frecuencia 1</p>
          </section>
          <section className="frequency-box">
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/a2')}}>
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>Frecuencia 2</p>
          </section>
          <section className="frequency-box">
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/a3')}}>
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>Frecuencia 3</p>
          </section>
          <section className="frequency-box">
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/a4')}}>
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>Frecuencia 4</p>
          </section>
        </section>
      </section>
      
      <section className="boton">
        <AppButton clase="app-back" icono={faArrowLeft} accion={()=>{navigate('/sleep')}}/>
      </section>
    </section>
  );
};

export default SleepCaterogyOne;
