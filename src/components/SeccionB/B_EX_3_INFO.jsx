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

const B_EX_3_INFO = () => {
  const { data } = useContext(UserContext);
  const navigate = useNavigate();

  const { page, prev, next, move, start, end } = useControl(2);

  return (
    <>
      <section className="main-view">
        <Background clase="E1" />
        <section
          className={`content ex-content section-b ex-3-info_page ex-3-info_page-${page}`}
          onTouchStart={start}
          onTouchMove={end}
          onTouchEnd={move}
        >
          {page === 1 && (
            <>
              <CardHeader index="3" additionalClass={"numbers ex"} />
              <div className="separador"></div>
              <h2 className="title_exercise">
                Técnica de grounding o reconexión
              </h2>
              <div className="exercise-description">
                <p>
                  En cualquier momento del día que te sientas tenso, ansioso,
                  deprimido o molesto, deja lo que estés haciendo por un
                  segundo, y presta atención a este ejercicio que te será útil
                  para volver a un estado de equilibrio.
                </p>
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <h2 className="title_exercise">Ejercicio:</h2>
              <div className="exercise-description">
                <p>
                  La técnica consiste en “volver a la realidad”, "conectarse con
                  la tierra" o "aterrizar". En otras palabras, sirve para que
                  cuando te veas afectado por la hiperactivación puedas volver a
                  un estado de normalidad y estar en el presente. Es utilizada
                  para poder tener un control sobre el estado de ánimo y las
                  emociones y para poder reconectar con el mundo. Es también
                  ideal para combatir pensamientos obsesivos y rumiativos. En
                  los siguientes apartados te explicaremos qué beneficios tiene
                  y cómo se practica. 
                </p>
              </div>
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
              
              <div></div>
            </section>
            <span className={page === 2 ? "hidden" : ""} onClick={next}>
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
                if(data.usuario.status){
                  navigate("/seccionB/ex3");
                }
              }}
              texto="INICIAR"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default B_EX_3_INFO;
