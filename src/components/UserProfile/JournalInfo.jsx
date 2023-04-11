import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

const JournalInfo = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const { data, dispatch } = useContext(UserContext);
  const handleView = () => {
    setView(true);
  };
  return (
    <section className="main-view">
      <Background clase="journal-info" />
      <section className="content journal-content">
        <CardHeader titulo="QUÉ ES EL DIARIO VIRTUAL" clase="justify-center" />
        <div
          className={`exercise-description ${
            !view && "exercise-description_fade"
          }`}
        >
          <p>
            El diario virtual es parte de tu espacio personal donde podrás
            realizar anotaciones periódicas de los hechos más trascendentes de
            tu vida.<br></br>
            <br></br>
            Dentro del diario, One Nexum te servirá de guía siempre que lo
            necesites, te proveemos de preguntas claves para que puedas expresar
            con mayor facilidad tus emociones y sentimientos y así contribuir a
            tu desarrollo personal.<br></br>
            <br></br>
            Recuerda que la escritura expresiva es un medio muy eficiente para
            reducir estados limitantes como estrés, ansiedad y depresión.
            Además, podrás acceder al historial de tus notas en el momento que
            tu quieras!
          </p>
        </div>
        <span className={`see ${view && "hidden"}`} onClick={handleView}>
          Ver Más
        </span>
        <section className="buttons-cont">
          <AppButton
            clase="app-back"
            accion={() => {
              navigate(-1);
            }}
            icono={faArrowLeft}
          />
          <AppButton
            clase={`primary-action ${
              !data.data.user.ejercicios[0].ejer_1.completed && "locked"
            } `}
            texto="COMENZAR"
          />
        </section>
      </section>
    </section>
  );
};

export default JournalInfo;
