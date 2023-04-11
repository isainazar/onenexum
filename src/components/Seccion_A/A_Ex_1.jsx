import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../Background/Background";
import CardHeader from "../CardHeader";
import {
  faArrowLeft,
  faRotateRight,
 
} from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
import CompletedExercise from "../CompletedExercise";

import UserContext from "../../contexts/UserContext";
import { completeExA } from "../../helpers/exercises_actions";
import Video from "../VideoPlayer/Video";
import useVideo from "../../helpers/hooks/useVideo";

const A_EX_1 = () => {
  const [steps, setSteps] = useState(0);
  const [animation, setAnimation] = useState(false);
  const { data, UserDispatch } = useContext(UserContext);

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

  const navigate = useNavigate();
  const closeVideo = () => {
    setPlay(false);
    setAnimation(false);
    setSteps(2);
  };

  const retake = () => {
    setComplete(false);
    setSteps(0);
  };

  useEffect(() => {
    initVideo();
  }, [play]);

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

        <Video
          url="https://res.cloudinary.com/dt3ggg7t5/video/upload/v1678804881/samples/cld-sample-video.mp4"
          play={play}
          complete={complete}
          closeVideo={closeVideo}
          videoRef={videoRef}
          timeLeft={timeLeft}
          current={current}
          clasePadre="video-modal_ex_1"
          claseVid="video-1"
        />

        <section
          className={`content ejercicios-content ${
            steps === 1 ? "ejercicios-content_ani" : ""
          } ${steps === 2 ? "ex-1a-fin" : ""}`}
        >
          <CardHeader
            titulo="RESPIRACIÓN DE CALMA INSTANTÁNEA"
            clase="justify-center"
          />
          {steps === 0 && (
            <>
              <h2 className="title_ex_inner">
                Haga respiraciones en sincronicidad con lo que verás a
                continuación. Inhale y exhale al ritmo del gráfico que aparecerá
                en pantalla.
              </h2>
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
              <h2 className="title_ex_inner">
                Inhale y exhale al ritmo del gráfico que estás viendo en
                pantalla.
              </h2>
              {/*  <section className="circle">
                <div className="outer"></div>
                <div className={`inner ${animation && "expand"}`}></div>
              </section> */}
            </>
          )}
          {steps === 2 && (
            <>
              <CompletedExercise />
              <section className="buttons-cont">
                <AppButton
                  clase="app-back"
                  icono={faRotateRight}
                  accion={retake}
                />
                <AppButton
                  clase="primary-action"
                  accion={() => {
                    completeExA(data, UserDispatch, navigate, 1);
                  }}
                  texto="SIGUIENTE"
                />
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default A_EX_1;
