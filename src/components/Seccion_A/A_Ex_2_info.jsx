import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AppButton from "../AppButton";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { goExA } from "../../helpers/exercises_actions";
const A_EX_2_INFO = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const {data, UserDispatch} = useContext(UserContext);
  const handleView = () => {
    setView(true);
  };
  const validateCompleted = () =>{
    if(data.usuario.section_a.exercise1_completed){
      goExA(data,UserDispatch,navigate,2);
    }
  }
  return (
    <>
      <section className="main-view">
        <Background clase="E2" />
        <section className="content ex-content">
          <CardHeader index="2" additionalClass={"numbers ex"} />
          <div className="separador"></div>
          <h2 className="title_exercise">RESPIRACIÓN  RELAJANTE</h2>
          <div
            className={`exercise-description ${
              !view && "exercise-description_fade"
            }`}
          >
            <p>
              La técnica de respiración relajante, también conocida como respiración
              4-7-8, consiste en inspirar durante 4 segundos, retener la
              respiración durante 7 segundos y exhalar durante 8 segundos. Este
              patrón de respiración tiene como objetivo reducir la ansiedad o
              ayudar a las personas a dormir.
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
            <AppButton clase={`primary-action ${!data.usuario.section_a.exercise1_completed? 'locked':""} `} 
            accion={validateCompleted}
            texto="INICIAR" />
          </section>
        </section>
      </section>
    </>
  );
};

export default A_EX_2_INFO;
