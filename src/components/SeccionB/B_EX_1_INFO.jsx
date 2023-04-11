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

const B_EX_1_INFO = () => {
  const { data } = useContext(UserContext);
  const navigate = useNavigate();

  const { page, prev, next, move, start, end } = useControl(5);

  return (
    <>
      <section className="main-view">
        <Background clase="E1" />
        <section
          className={`content ex-content section-b ex-1-info_page ex-1-info_page-${page}`}
          onTouchStart={start}
          onTouchMove={end}
          onTouchEnd={move}
        >
          {page === 1 && (
            <>
              <CardHeader index="1" additionalClass={"numbers ex"} />
              <div className="separador"></div>
              <h2 className="title_exercise">
                El ejercicio estoico. ¿Cómo lidiar con nuestras emociones?
              </h2>
              <div className="exercise-description">
                <p>
                  Las emociones destructivas son el resultado de errores en
                  nuestra manera de ver el mundo. Son muchas veces estas
                  emociones las que nos generan estados ansiosos y/o depresivos.
                  Los estoicos también tenían una visión particular de las
                  emociones, llamadas pasiones, que se dividían en tres
                  categorías: emociones buenas, malas e indiferentes.
                  Propusieron que debemos centrarnos en las emociones malas o
                  poco saludables, aprendiendo a lidiar con ellas.
                </p>
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <h2 className="title_exercise marked">
                "No somos perturbados por las cosas, sino por nuestras opiniones
                sobre ellas".  Epitecto
              </h2>
              <div className="exercise-description">
                <p>
                  Tu bienestar no depende de algo externo, ni de algo material,
                  ni de alguien. Los hechos generan emociones, pero ¿por qué a
                  cada persona le puede generar una emoción distinta?
                </p>
              </div>
              <h2 className="title_exercise">¿Qué depende de nosotros?</h2>
              <div className="exercise-description">
                <p>
                  Analiza cuidadosamente el siguiente gráfico y trata de
                  incorporar la información que contiene:
                </p>
              </div>

              <img src="../assets/ex-1-img-1.svg" alt="grafico informativo" />
            </>
          )}
          {page === 3 && (
            <>
              <h2 className="title_exercise marked">
                “Ten la serenidad para aceptar lo que no puedes cambiar, el
                valor para aceptar lo que sí puedes cambiar y la sabiduría para
                distinguir la diferencia.”
              </h2>
              <section className="exercise-description">
                <p>
                  Existe un texto budista que exclama: “Si la adversidad tiene
                  remedio, ¿de qué nos sirve la desesperación? Y si nada puede
                  hacerse, ¿qué ganamos con la desesperación?
                </p>
              </section>
              <section className="info-paragraph">
                <img src="../assets/info-icon.svg  " />
                <h2 className="title_exercise">
                  Aprende a diferenciar cuándo debes ocuparte y cuándo debes
                  preocuparte
                </h2>
              </section>
              <img src="../assets/ex-1-img-2.svg" alt="circulos" />
              <h2 className="title_exercise marked">
                “Cuando veo una persona con ansiedad me pregunto que desea.
                Quien no desea algo fuera de su control no siente ansiedad. El
                cantante se siente tranquilo cuando canta para sí mismo, pero
                siente ansiedad si desea agradar al público, porque eso no está
                bajo su control”<br></br> -Epicteto-
              </h2>
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
              <h2 className="title_exercise marked">Lo que debes perseguir</h2>
              <section className="exercise-description">
                <p>¿En qué se basa la conciencia limpia?</p>
                <p><strong>Desapego y autocuidado</strong></p>
              </section>
              <img src="../assets/ex-1-img-3.svg" alt="piramide" />
            </>
          )}
          {page === 5 && (
            <>
              <h2 className="title_exercise">
                Practica la serenidad y el desapego
              </h2>
              <h2 className="title_exercise marked_var">
                Lo que debes evitar
              </h2>
              <section className="exercise-description">
                <p>¿En qué se basa la culpa?</p>
                <p><strong>Inseguridad , apego e infelicidad</strong></p>
              </section>
              <img src="../assets/ex-1-img-4.svg" alt="piramide" />
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
                className={page === 4 ? "active-page" : "inactive-page"}
              ></div>
              <div
                className={page === 5 ? "active-page" : "inactive-page"}
              ></div>
            </section>
            <span className={page === 5 ? "hidden" : ""} onClick={next}>
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
                if (data.usuario.status) {
                  navigate("/seccionB/ex1_example");
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

export default B_EX_1_INFO;
