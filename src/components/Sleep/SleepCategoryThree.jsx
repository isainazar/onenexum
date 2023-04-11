import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";

const SleepCategoryThree = () => {
  const navigate = useNavigate();
  return (
    <section className="main-view sleep-view categories">
      <section className="top">
      <img src="../../../assets/sueno-premium.svg" alt="play button" />
        <h1>ASMR</h1>
        <p>
          Esto quiere decir "Respuesta Sensorial Meridiana Autónoma". Lo que
          hace es producir sonidos tanto espontáneos como creados
          intencionadamente con el fin de generar sensaciones. Tiene tendencia a
          provocar una respuesta emocional que se traduce en el placer y en la
          relajación de la persona que lo está escuchando.
        </p>
      </section>
      <section className="bottom">
        <section className="slide">
          <section className="frequency-box">
            <section className="inner-box" onClick={()=>{navigate('/sleep/player/c1')}} >
              <img src="../../../assets/play-btn.svg" alt="play button" />
            </section>
            <p>ASMR</p>
          </section>
        
        </section>
      </section>
      <section className="additional-info">
        <img src="https://res.cloudinary.com/dt3ggg7t5/image/upload/v1679337622/logo-sin-texto_guvju1.svg" />
        <p>
          Para muchos, ha demostrado ser muy útil antes de irte a dormir o para
          reducir el estrés. Los sonidos lentos que son como suspiros ayudan a
          conciliar el sueño
        </p>
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

export default SleepCategoryThree;
