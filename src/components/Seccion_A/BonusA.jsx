import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

const BonusA = () => {
  const navigate = useNavigate();

  const [view, setView] = useState(false);
  const handleView = () => {
    setView(true);
  };
  return (
    <section className="main-view">
      <Background clase="bonus-a" />
      <section className={`content ${view && "expanded"}`}>
        <CardHeader
          titulo="BONUS TRACK - MEDITACIÓN"
          clase="justify-center bonus-color"
        />
        <div
          className={`exercise-description ${
            !view && "exercise-description_fade"
          }`}
        >
          <h2 className="title_ex_inner">
            El Mindfulness es la focalización de la atención en el momento
            presente, es un método para conseguir la atención plena.
          </h2>
        </div>
        <span
          className={`see ${view && "none"} ex-2 bonus-color `}
          onClick={handleView}
        >
          Ver Más
        </span>
        {view && (
          <section className="bonus-explain">
            <p>
              De ser posible, practícalo por la mañana justo después de
              despertarte o antes de acostarte al finalizar la jornada.
            </p>
            <p>
              Usa siempre ropa cómoda y colócate también en una postura cómoda,
              concéntrate en como mantener una postura recta para no
              obstaculizar el aire.
            </p>
            <p>
              Deja que aparezcan libremente los pensamientos y emociones que
              vayan surgiendo, simplemente percibiéndolos.
            </p>
          </section>
        )}
        <h3 className="exercise-indicator bonus-color">
          CUANDO ESTÉS LISTO/A HAZ CLICK EN EL BOTÓN <span>PLAY</span>
        </h3>
        <AppButton
          clase="app-back"
          icono={faArrowLeft}
          accion={() => {
            navigate(-1);
          }}
        />
      </section>
    </section>
  );
};

export default BonusA;
