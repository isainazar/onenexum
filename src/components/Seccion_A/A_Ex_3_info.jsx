import React from "react";
import { useNavigate } from "react-router-dom";

import Background from "../Background/Background";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CardHeader from "../CardHeader";
import AppButton from "../AppButton";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { goExA } from "../../helpers/exercises_actions";
const A_EX_3_INFO = () => {
  const { data, UserDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const validateCompleted = () => {
    if (
      (data.usuario.section_a.exercise1_completed &&
        data.usuario.section_a.exercise2_completed) ||
      data.usuario.status
    ) {
      goExA(data, UserDispatch, navigate,3);
    }
  };
  const check = () => {
    if (data.usuario.section_a.exercise1_completed &&
      data.usuario.section_a.exercise2_completed &&
    data.usuario.status) {
      return "";
    } else {
      return "locked";
    }
  };
  return (
    <>
      <section className="main-view">
        <Background clase="E3" />
        <section className="content ex-content">
          <CardHeader index="3" additionalClass={"numbers ex"} premium={true} />
          <div className="separador separador-premium"></div>
          <h2 className="title_exercise">RESPIRACIÓN ENERGÉTICA COMPLETA</h2>
          <div className="exercise-description">
            <p>
              También conocida como respiración diafragmática, tiene como
              objetivo llenar los pulmones totalmente, por lo que aumenta la
              eficiencia de los mismos, reduce la frecuencia respiratoria y
              ayuda a la relajación.
            </p>
          </div>
          <section className="buttons-cont">
            <AppButton
              clase="app-back"
              accion={() => {
                navigate(-1);
              }}
              icono={faArrowLeft}
            />
            <AppButton
              clase={`primary-action ${check()}`}
              accion={validateCompleted}
              texto="INICIAR"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default A_EX_3_INFO;
