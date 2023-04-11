import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../Background/Background";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CardHeader from "../CardHeader";
import AppButton from "../AppButton";
import useControl from "../../helpers/hooks/useControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../../contexts/UserContext";

const B_EX_2_INFO = () => {
  const { data } = useContext(UserContext);
  const navigate = useNavigate();

  const { page, prev, next, move, start, end } = useControl(3);

  return (
    <>
      <section className="main-view">
        <Background clase="E1" />
        <section
          className={`content ex-content section-b ex-2-info_page ex-2-info_page-${page}`}
          onTouchStart={start}
          onTouchMove={end}
          onTouchEnd={move}
        >
          {page === 1 && (
            <>
              <CardHeader index="2" additionalClass={"numbers ex"} />
              <div className="separador"></div>
              <h2 className="title_exercise">
                Relajación muscular progresiva de Jacobson
              </h2>
              <div className="exercise-description">
                <p>
                  Se trata de una técnica de relajación que incluye control de
                  la respiración y la tensión de los músculos. Con los ojos
                  cerrados y una postura cómoda, se procede a mantener una
                  respiración profunda y regular. Posteriormente se procede a
                  realizar un recorrido por el conjunto de grupos musculares del
                  cuerpo.
                </p>
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <h2 className="title_exercise">Ejercicio:</h2>
              <div className="exercise-description">
                <p>
                  Cada grupo muscular será tensado en periodos de entre tres y
                  diez segundos para posteriormente descansar entre diez y
                  treinta (se recomienda que el periodo de relajación sea el
                  triple que el de tensión), haciéndose series de tres
                  repeticiones.
                </p>
              </div>

              <div className="exercise-description">
                <p>
                  El proceso de relajación muscular{" "}
                  <strong>
                    {" "}
                    empezará por los extremos más distales del cuerpo
                  </strong>
                  , es decir las extremidades más alejadas del centro del
                  cuerpo, hasta llegar a la cabeza. Así, se empezará la rutina
                  de tensión-relajación por los pies, para continuar por las
                  piernas, glúteos, manos, brazos, espalda, pecho cuello,
                  mandíbula y cabeza.
                </p>
              </div>

          
            </>
          )}
          {page === 3 && (
            <>
              <h2 className="title_exercise">
              Ejercicio:
              </h2>
              <section className="exercise-description">
                <p>
                Has de realizarlo con cierta precaución, dado que es común la presencia de pequeños calambres, mareos, hormigueos o hiperventilación (en caso de tenerlos se recomienda cesar el ejercicio), más resulta una técnica de gran utilidad incluso en la práctica clínica
                </p>
              </section>            
            </>
          )}
          {page === 4 && (
            <>
              <h2 className="title_exercise">Comprende</h2>
              <section className="exercise-description">
                <p>
                  Tratar de controlar lo incontrolable es malgastar tus fuerzas.
                  Eso mismo hace que seas negligente cuando tomas decisiones
                  sobre aquello que sí está en tu órbita de control. Debes tomar
                  acción por aquellas cosas que sabes que debes atender con
                  prioridad. La ansiedad muchas veces deriva por querer
                  controlar aquello que no está bajo tu órbita de control. Si
                  esto sucede puede que te frustres de más y tiendas a
                  deprimirte.
                </p>
              </section>
              <h2 className="title_exercise">
                Practica la serenidad y el desapego
              </h2>
              <section className="exercise-description">
                <p>
                  Cuando sientas apego por un objeto, recuerda que no es eterno.
                  Lo mismo pasa con las personas; recuerda que son mortales.
                  Nada de lo que amas es realmente tuyo, lo has recibido por un
                  momento y no para siempre.
                </p>
              </section>
            </>
          )}
          <section className="controles">
            <span className={page === 1 ? "hidden" : ""} onClick={prev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <section className="indicator">
              <div
                className={page === 1 ? "active-page" : "inactive-page"}
              ></div>
              <div
                className={page === 2 ? "active-page" : "inactive-page"}
              ></div>
              <div
                className={page === 3 ? "active-page" : "inactive-page"}
              ></div>
              <div
              ></div>
            </section>
            <span className={page === 3 ? "hidden" : ""} onClick={next}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </section>
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
                data.usuario.status ? "unlocked" : "locked"
              }`}
              accion={() => {
                if(data.usuario.status) navigate("/seccionB/ex2");
              }}
              texto="INICIAR"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default B_EX_2_INFO;
