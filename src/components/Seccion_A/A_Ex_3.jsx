import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

import { faArrowLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
import CompletedExercise from "../CompletedExercise";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { completeExA } from "../../helpers/exercises_actions";
import Video from "../VideoPlayer/Video";
import useVideo from "../../helpers/hooks/useVideo";

const A_EX_3 = () => {
  const [steps, setSteps] = useState(0);
  const [view, setView] = useState(false);

  const videoRef = useRef(null);

  const {
    play,
    setPlay,
    complete,
    setComplete,
    current,
    timeLeft,
    initVideo,
  } = useVideo(videoRef, setSteps);

  const handleView = () => {
    setView(true);
  };
  const handleSteps = () => {
    setSteps(steps + 1);
  };
  const closeVideo = () => {
    setPlay(false);
    setSteps(2);
  };
  const navigate = useNavigate();
  const { data, UserDispatch } = useContext(UserContext);

  useEffect(() => {
    if (
      (!data.usuario.section_a.exercise1_completed &&
        !data.usuario.section_a.exercise2_completed) ||
      !data.usuario.status
    ) {
      navigate("/seccionA/mapa");
    }
  }, [data.usuario.status]);
  useEffect(() => {
    initVideo();
  }, [play]);

  return (
    <>
      <section className="main-view">
      <Video
          url="https://res.cloudinary.com/dt3ggg7t5/video/upload/v1678902957/ex-3a_d25zfx.mp4"
          play={play}
          complete={complete}
          closeVideo={closeVideo}
          videoRef={videoRef}
          timeLeft={timeLeft}
          current={current}
          clasePadre="video-modal_ex_1"
          claseVid="video-1"
        />
        <Background clase="E3"
         play={complete ? false : true}
         estado={play}
         setEstado={setPlay}
         completado={complete}
         setCompletado={setComplete} />
        <section
          className={`content ejercicios-content ${steps === 1 && "ex3p2"}`}
        >
          <CardHeader
            titulo="RESPIRACIÓN ENERGÉTICA COMPLETA"
            clase="justify-center"
          />
          {steps === 0 && (
            <>
              <div
                className={`exercise-description ${
                  !view && "exercise-description_fade"
                }`}
              >
                <h2 className="title_ex_inner">
                  También conocida como respiración diafragmática. Se trata de
                  utilizar el músculo diafragmático para controlar el aire.
                </h2>
              </div>
              <span
                className={`see ${view && "hidden"} ex-2`}
                onClick={handleView}
              >
                Ver Más
              </span>
              <section className="buttons-cont">
                <AppButton
                  clase="app-back"
                  icono={faArrowLeft}
                  accion={() => {
                    navigate("/seccionA/mapa");
                  }}
                />
                <AppButton
                  clase="primary-action"
                  texto="SIGUIENTE"
                  accion={handleSteps}
                />
              </section>
            </>
          )}
          {steps === 1 && (
            <>
              <section>
                <h2 className="title_ex_inner">El ejercicio:</h2>
                <section className="ordered-instructions">
                  <p>1. Coloca una mano en tu pecho y otra en la barriga</p>
                  <p>
                    2. Inhala profundamente por la nariz, asegurandote que el
                    diafragma baje (hinchando la barriga).
                  </p>
                  <p>
                    3. Procura que sea la barriga la que se mueve, no el pecho.
                  </p>
                </section>
              </section>
              <h3 className="exercise-indicator">
                El objetivo es realizar de 6 a 10 respiraciones lentas por
                minuto.
              </h3>
              <AppButton
                clase="primary-action"
                texto="INICIAR"
                accion={handleSteps}
              />
            </>
          )}
          {steps === 2 && (
            <>
              <CompletedExercise />
              <section className="buttons-cont">
                <AppButton
                  clase="app-back"
                  icono={faRotateRight}
                  accion={() => {
                    navigate(-1);
                  }}
                />
                <AppButton
                  clase="primary-action"
                  accion={() => {
                    completeExA(data, UserDispatch, navigate,3);
                  }}
                  texto="FINALIZAR"
                />
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default A_EX_3;
