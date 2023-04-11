import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

import {
  faArrowLeft,
  faRotateRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
import CompletedExercise from "../CompletedExercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { completeExA } from "../../helpers/exercises_actions";
import Video from "../VideoPlayer/Video";
import useVideo from "../../helpers/hooks/useVideo";
const A_EX_2 = () => {
  const [steps, setSteps] = useState(0);
  const [view, setView] = useState(false);
  const { data, UserDispatch } = useContext(UserContext);

  const handleView = () => {
    setView(true);
  };

  const navigate = useNavigate();

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


  const closeVideo = () => {
    setPlay(false);
    setSteps(2);
  };

  const retake = () => {
    setComplete(false);
    setSteps(0);
  };
  useEffect(() => {
    
    if (!data.usuario.section_a.exercise1_completed) {
      navigate("/seccionA/mapa");
    }
  }, [data]);
  useEffect(() => {
    initVideo();
  }, [play]);
  return (
    <>
      <section className="main-view">
      <Video
          url="../assets/4-7-8.mp4"
          play={play}
          complete={complete}
          closeVideo={closeVideo}
          videoRef={videoRef}
          timeLeft={timeLeft}
          current={current}
          clasePadre="video-modal_ex"
          claseVid="video-ex"
        />
      
        <Background
          clase="E2"
          play={complete ? false : true}
          estado={play}
          setEstado={setPlay}
          completado={complete}
          setCompletado={setComplete}
        />
        <section className="content ejercicios-content">
          <CardHeader titulo="RESPIRACIÓN  RELAJANTE" clase="justify-center" />
          {steps === 0 && (
            <>
              <div
                className={`exercise-description ${
                  !view && "exercise-description_fade"
                }`}
              >
                <h2 className="title_ex_inner">
                  La técnica de respiración relajante, también conocida como
                  “respiración 4-7-8, consiste en inspirar, retener la
                  respiración y exhalar. Este patrón de respiración tiene como
                  objetivo reducir la ansiedad y conciliar un mejor sueño.
                </h2>
              </div>
              <span
                className={`see ${view && "hidden"} ex-2`}
                onClick={handleView}
              >
                Ver Más
              </span>
              <h3 className="exercise-indicator">
                CUANDO ESTÉS LISTO/A HAZ CLICK EN EL BOTÓN <span>PLAY</span>
              </h3>
              <AppButton clase="app-back" icono={faArrowLeft} accion={()=>{navigate(-1)}} />

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
                   completeExA(data,UserDispatch,navigate,2) 
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

export default A_EX_2;
