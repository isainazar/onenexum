import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

import {
  faArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
import CompletedExercise from "../CompletedExercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionTypes } from "../../types/actionTypes";
import UserContext from "../../contexts/UserContext";
import { completeExB } from "../../helpers/exercises_actions";

const B_EX_2 = () => {
  const [steps, setSteps] = useState(0);
  const [complete, setComplete] = useState(false);
  const [animation, setAnimation] = useState(false);

  const [play, setPlay] = useState(false);
  const navigate = useNavigate();
  const { data, UserDispatch } = useContext(UserContext);
  const closeVideo = () => {
    setPlay(false);
    setAnimation(false);
    setSteps(2);
  };

  const finish = () => {
    completeExB(data,UserDispatch,navigate,2)
  };

  const retake = () => {
    setComplete(false);
    setSteps(0);
  };
  const checkClass = () => {
    if (play) {
      return "ex-3_playing";
    }
    if (steps === 2) {
      return "ex-3_completed";
    }
    if (steps === 3) {
      return "ex-3_final";
    }
  };
  return (
    <>
      <section className="main-view">
        <Background
          clase="E1"
          play={complete ? false : true}
          estado={play}
          setEstado={setPlay}
          completado={complete}
          setCompletado={setComplete}
          steps={steps}
          setSteps={setSteps}
          setAnimation={setAnimation}
        />
        <section className="fondo-vid">
          {play && (
            <section className="video-modal video-modal_ex_1">
              {complete && (
                <button className="quit" onClick={closeVideo}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              )}
              <video
                className="video-1"
                src="../assets/ex2-b.mp4"
                playsInline
                autoPlay
              ></video>
            </section>
          )}
        </section>

        <section
          className={`content ejercicios-content section-b ex-3 ${checkClass()}`}
        >
          {steps === 0 && (
            <>
             
              <h3 className="exercise-indicator">
                CUANDO ESTÉS LISTO/A HAZ CLICK EN EL BOTÓN <span>PLAY</span>
              </h3>
              <AppButton
                clase="app-back"
                icono={faArrowLeft}
                accion={() => {
                  navigate(-1);
                }}
              />
            </>
          )}
          {steps === 1 && (
            <>
              <section className="info-paragraph">
                <img src="../assets/info-icon.svg  " />
                <h2 className="title_exercise">
                  Lo que estás logrando con esta técnica es tomar control de tus
                  sentidos, cuestión clave para regular de manera óptima tu
                  relación.
                </h2>
              </section>
              <section className="circle">
                <div className="outer"></div>
                <div className={`inner ${animation && "expand"}`}></div>
              </section>
            </>
          )}
          {steps === 2 && (
            <>
            <section className="info-paragraph">
                <img src="../assets/info-icon.svg  " />
              <h2 className="title_exercise">
                Lo que estás logrando con esta técnica es tomar control de tus
                sentidos, cuestión clave para regular de manera óptima tu
                relación.
              </h2>
              </section>
              <CompletedExercise />

              <AppButton
                clase="primary-action"
                accion={() => {
                  setSteps(3);
                }}
                texto="SIGUIENTE"
              />
            </>
          )}
          {steps === 3 && (
            <>
              <h2 className="title_exercise">Continua el ejercicio</h2>
              <ul>
                <li>
                  Ahora piensa en qué 4 cosas puedes tocar. El objetivo es que
                  puedas sentir la textura. Por ejemplo, puedes fijarte en el
                  tacto y textura de la camiseta que llevas puesta. Buscar tocar
                  algo frío y luego algo de mayor temperatura así puedes{" "}
                  <strong>conectarte aun mas a tus sentidos</strong>
                </li>
                <li>
                  A continuación <strong>analiza</strong> qué 2 cosas puedes
                  oler. Puedes enfocarte en el perfume que llevas puesto, en el
                  olor de tu pelo, etc. 
                </li>
                <li>
                  Finalmente y después de realizar lo anterior,{" "}
                  <strong>piensa</strong> en 1 cosa que puedas saborear. Puede
                  ser un caramelo que lleves en el bolsillo o incluso pensar en
                  el frescor que te ha dejado la pasta de dientes de por la
                  mañana o el aire que ingresa por tu boca al inhalar.
                </li>
              </ul>
              <section className="info-paragraph">
                <img src="../assets/info-icon.svg  " />
                <h2 className="title_exercise">
                  Esta es una forma muy útil para conectarte con tu presente
                  aquí y ahora, te servirá para sentir que tienes control sobre
                  tu entorno. Recuerda que puedes hacer este ejercicio cuando
                  sientas que sea necesario.
                </h2>
              </section>
              <section className="buttons-cont">
                <AppButton
                  clase="app-back"
                  icono={faArrowLeft}
                  accion={retake}
                />
                <AppButton
                  clase="primary-action"
                  texto="FINALIZAR"
                  accion={finish}
                />
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default B_EX_2;
