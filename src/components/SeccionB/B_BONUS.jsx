import React from "react";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
import { useNavigate } from "react-router-dom";
import useControl from "../../helpers/hooks/useControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const B_BONUS = () => {
  const navigate = useNavigate();
  const { page, prev, next, move, start, end } = useControl(6);

  return (
    <section className="main-view">
      <Background clase="bonus-b" />
      <section
        className={`content ex-content comp-b comp-b_${page}`}
        onTouchStart={start}
        onTouchMove={end}
        onTouchEnd={move}
      >
        {page === 1 && (
          <>
            <CardHeader icono={faStar} additionalClass={"numbers ex"} />
            <div className="separador bonus-color-bg"></div>
            <h2 className="title_exercise">Aumenta tu productividad</h2>
            <div className="exercise-description">
              <p>
                Consideramos que la falta de productividad y que la
                procrastinación son potenciadores de estados ansiosos y
                depresivos. A continuación te dejamos algunos ejemplos que te
                servirán de guía para aumentar tu productividad.
              </p>
            </div>
            <h2 className="title_exercise bonus-color">
              Añade tiempo libre a tus horarios.
            </h2>
            <img src="../assets/comp-img-1.svg" alt="Gráfico sobre el tiempo" />
            <section className="info-pill">
              <h3>Gestión del tiempo</h3>
            </section>
            <img src="../assets/comp-img-2.svg" alt="Gráfico sobre el tiempo" />
            <section className="info-pill">
              <h3>Gestión del tiempo</h3>
            </section>
          </>
        )}
        {page === 2 && (
          <>
            <h2 className="title_exercise bonus-color">
              No programes tu tiempo, sino tu energía.
            </h2>
            <img
              src="../assets/comp-img-3.svg"
              alt="cuadro de horario"
              className="horario"
            />
            <section className="img-footer">
              <p>No solo manejes tu tiempo</p>
              <p>Maneja tu energía también</p>
            </section>
            <div className="info-pill">
              <h3>Eres</h3>
            </div>
            <img
              src="../assets/comp-img-4.svg"
              alt="squares"
              className="squares"
            />
          </>
        )}
        {page === 3 && (
          <>
            <h2 className="title_exercise bonus-color">
              Pensar demasiado es autosabotaje a cámara lenta.
            </h2>
            <img
              src="../assets/comp-img-5.svg"
              alt="flechas"
              className="flechas"
            />
            <h2 className="title_exercise bonus-color smaller">
              La clave del progreso es tener el valor de empezar antes de estar
              preparado y confiar en uno mismo para ir descubriéndolo por el
              camino. El perfeccionismo frena el progreso, la procastinación lo
              mata.
            </h2>

            <img
              src="../assets/comp-img-6.svg"
              alt="ejemplo"
              className="lineas"
            />
          </>
        )}
        {page === 4 && (
          <>
            <h2 className="title_exercise bonus-color">
              Hasta que no abandones la idea de que la felicidad está en otra
              parte, nunca estará donde tú estás.
            </h2>
            <img src="../assets/comp-img-7.svg" alt="flujo" className="flujo" />
            <h2 className="title_exercise bonus-color medium">
              El verdadero fracaso no es fallar el tiro, el verdadero fracaso es
              no disparar nunca.
            </h2>

            <img
              src="../assets/comp-img-8.svg"
              alt="circulos"
              className="circulos"
            />
          </>
        )}
        {page === 5 && (
          <>
            <h2 className="title_exercise bonus-color">
              Si no preguntas, la respuesta será siempre no.
            </h2>
            <img
              src="../assets/comp-img-9.svg"
              alt="cruces"
              className="cruces"
            />
            <h2 className="title_exercise bonus-color smaller">
              El trabajo duro te proporciona una plataforma sostenible para el
              éxito, la longevidad y el conocimiento en el futuro. La suerte te
              da un momento. Apuesta por el trabajo duro
            </h2>

            <img src="../assets/comp-img.svg" alt="barras" className="barras" />
          </>
        )}
        {page === 6 && (
          <>
            <h2 className="title_exercise bonus-color">
            Para alcanzar grandes metas, empieza con una sola tarea.
            </h2>
            <img src="../assets/comp-img-11.webp"/>
          </>
        )}

        <section className="controles">
          <span className={page === 1 ? "hidden" : ""} onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <section className="indicator">
            <div className={page === 1 ? "active-page" : "inactive-page"}></div>
            <div className={page === 2 ? "active-page" : "inactive-page"}></div>
            <div className={page === 3 ? "active-page" : "inactive-page"}></div>
            <div className={page === 4 ? "active-page" : "inactive-page"}></div>
            <div className={page === 5 ? "active-page" : "inactive-page"}></div>
            <div className={page === 6 ? "active-page" : "inactive-page"}></div>
          </section>
          <span className={page === 6 ? "hidden" : ""} onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </section>

        <AppButton
          clase="app-back"
          accion={() => {
            navigate(-1);
          }}
          icono={faArrowLeft}
        />
      </section>
    </section>
  );
};

export default B_BONUS;
