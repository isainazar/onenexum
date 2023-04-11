import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CardHeader from "../CardHeader";
import AppButton from "../AppButton";
import UserContext from "../../contexts/UserContext";
import { actionTypes } from "../../types/actionTypes";
import { goExA } from "../../helpers/exercises_actions";
const A_EX_1_INFO = () => {
  const navigate = useNavigate();
  const { data, UserDispatch } = useContext(UserContext);
  return (
    <>
      <section className="main-view">
        <Background clase="E1" />
        <section className="content ex-content">
          <CardHeader index="1" additionalClass={"numbers ex"} />
          <div className="separador"></div>
          <h2 className="title_exercise">Respiración de calma instantánea</h2>
          <div className="exercise-description">
            <p>
              Mediante la reproducción de un video, podrás observar y replicar
              los movimientos respiratorios que comprenden la inhalación y
              exhalación de aire.
            </p>
          </div>
          <section className="buttons-cont">
            <AppButton
              clase="app-back"
              accion={() => {
                navigate('/seccionA/mapa');
              }}
              icono={faArrowLeft}
            />
            <AppButton
              clase="primary-action"
              accion={() => {  
               goExA(data, UserDispatch, navigate,1);
              }}
              texto="INICIAR"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default A_EX_1_INFO;
