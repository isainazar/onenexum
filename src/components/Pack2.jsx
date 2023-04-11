import React, { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillCheckCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "./Landing/Header";

const Pack2 = () => {
  const navigate = useNavigate();
  const [pack1, setPack1] = useState(true);
  const [pack2, setPack2] = useState(false);
  const [pack3, setPack3] = useState(false);
  const [pack4, setPack4] = useState(false);
  const [pack5, setPack5] = useState(false);

  const handlePackForward = (e) => {
    if (pack1) {
      setPack1(false);
      setPack2(true);
    }
    if (pack2) {
      setPack2(false);
      setPack3(true);
    }
    if (pack3) {
      setPack3(false);
      setPack4(true);
    }
    if (pack4) {
      setPack4(false);
      setPack5(true);
    }
  };
  const handlePackBack = (e) => {
    if (pack2) {
      setPack1(true);
      setPack2(false);
    }
    if (pack3) {
      setPack2(true);
      setPack3(false);
    }
    if (pack4) {
      setPack3(true);
      setPack4(false);
    }
    if (pack5) {
      setPack4(true);
      setPack5(false);
    }
  };
  return (
    <div>
      {pack1 && (
        <>
          <h1>
            <span>A</span> RESPIRACION DE CALMA INSTANTANEA
          </h1>
          <h4>
            Haga réspiracion en sincronizidad con lo que veras a continuación
          </h4>
          <p>Cuando estés listo haz click en el botón "play"</p>
          <video
            src="../../assets/intro-video.mp4"
            muted
            controls
            poster="../../assets/poster.png"
          ></video>
          <div class="container">
            <div class="skill progress5"></div>
          </div>
          <button onClick={handlePackForward}>
            <AiOutlineArrowRight />
          </button>
        </>
      )}
      {pack2 && (
        <>
          <h1>
            <span>B</span>TECNICA 4-7-8
          </h1>
          <h4>
            La tecnica de respiración 4-7-8 tambíen conocida como "respiración
            relajante", consiste en inspirar, retener la respiración y exhalar.
          </h4>
          <video
            src="../../assets/intro-video.mp4"
            muted
            controls
            poster="../../assets/poster.png"
          ></video>
          <div class="container">
            <div class="skill progress6"></div>
          </div>
          <button onClick={handlePackBack}>
            <AiOutlineArrowLeft />
          </button>
          <button onClick={handlePackForward}>
            <AiOutlineArrowRight />
          </button>
        </>
      )}
      {pack3 && (
        <>
          <h1>
            <span>C</span>RESPIRACIÓN ABDOMINAL
          </h1>
          <p>
            Tambíen conocida como respiración diafragmatíca. Se trata de
            utilizar el músculo difragmatíco para controlar el aire.
          </p>
          <h2>EJERCICIO:</h2>
          <ul>
            <li>Coloca una mano en tu pecho y otra en la barriga</li>
            <li>
              Inhala profundamente por la nariz, asegurándote que el diafragma
              baja (hinchando la barriga)
            </li>
            <li>Procura que sea la barriga la que se mueva, no el pecho.</li>
            <li>
              El objetivo es realizar 6 a 10 respiraciones lentas por minutos.
            </li>
          </ul>
          <video
            src="../../assets/intro-video.mp4"
            muted
            controls
            poster="../../assets/poster.png"
          ></video>
          <div class="container">
            <div class="skill progress7"></div>
          </div>
          <button onClick={handlePackBack}>
            <AiOutlineArrowLeft />
          </button>
          <button onClick={handlePackForward}>
            <AiOutlineArrowRight />
          </button>
        </>
      )}
      {pack4 && (
        <>
          <h1>
            <span>D</span>RESPIRACIÓN ENERGIZANTE
          </h1>
          <p>También llamada en yoga, "Respiración del Cráneo Brillante".</p>
          <h2>EJERCICIO:</h2>
          <p>
            Se trata de realizar una inhalación larga y lenta, expandiendo el
            diafragma, para a continuación exhalar de forma rápida contrayendo
            el diafragma. Todo por la nariz. Inhalar lento y profundo y exhalar
            rápido y fuerte. Repetir unas 10 veces.
          </p>
          <video
            src="../../assets/intro-video.mp4"
            muted
            controls
            poster="../../assets/poster.png"
          ></video>
          <div class="container">
            <div class="skill progress8"></div>
          </div>
          <button onClick={handlePackBack}>
            <AiOutlineArrowLeft />
          </button>
          <button onClick={handlePackForward}>
            <AiOutlineArrowRight />
          </button>
        </>
      )}
      {pack5 && (
        <>
          <Header />
          <h1>¡MUY BIEN 4-4!</h1>
          <p>
            <span>¡EXELENTE!</span> HAS COMPLETADO TODOS LOS EJERCICIOS DE LA
            SECCION A. A CONTINUACIÓN TE DEJAREMOS UN RECUADRO PARA QUE PUEDAS
            RELLENAR TUS AVANCES Y MONITOREAR TU PROGRESO
          </p>
          <button onClick={handlePackBack}>
            <AiOutlineArrowLeft />
          </button>
          <button onClick={() => navigate("/pack/3")}>CONTINUAR</button>
        </>
      )}
    </div>
  );
};

export default Pack2;
