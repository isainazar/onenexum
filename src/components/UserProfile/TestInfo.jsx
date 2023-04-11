import React from "react";
import { useNavigate } from "react-router-dom";
import useControl from "../../helpers/hooks/useControl";

import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

import {
  faHome,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestInfo = () => {
  const navigate = useNavigate();
  const { page, prev, next, move, start, end } = useControl(4);


  return (
    <section className="main-view">
      <Background clase="test-info" />
      <section
        className={`content test-content page ${
          page === 1 ? "page-1" : "page-2"
        }`}
      >
        <CardHeader titulo="TEST DE PERSONALIDAD" clase="justify-center" />
        <div className="exercise-description" onTouchStart={start} onTouchMove={end} onTouchEnd={move} >
          {page === 1 && (
            <>
              <p className="p-test-info fade-in faster">
                Conocer tu personalidad es parte de tu sabiduría, la cual está
                conformada por tus habilidades cognitivas y por tu capacidad
                para entenderte a ti mismo.{" "}
                <strong>
                  Entenderse a uno mismo es un pilar clave en la construcción
                  como individuo, te servirá como carta de presentación al
                  mundo, para que puedas relajarte y trascender el misterio de
                  no saber que hay en tu interior.
                </strong>{" "}
                Es una herramienta para entender a los demás, para predecir su
                comportamiento, entender cuáles son sus motivaciones y saber
                negociar. Es útil a la hora de entender porqué haces lo que
                haces y porque los demás actúan como actúan.Es una forma de
                aprender a escuchar y de integrarte eficientemente con el mundo,
                ya sea con tu familia y con círculos fuera de ella.{" "}
              </p>
            </>
          )}
          {page === 2 && (
            <p className="p-test-info fade-in faster">
              Pareciera que somos expertos en juzgar, etiquetar y desprestigiar
              a los demás en base al comportamiento que adoptan para con las
              personas a su alrededor. Puertas para afuera la personalidad ajena
              es simple, plana y descifrable.{" "}
              <strong>
                Sin embargo, ¿qué sucede cuando toca mirar hacia adentro? Cuando
                toca analizarnos a nosotros mismos, ¿Qué sentimos?
              </strong>{" "}
              De repente nos damos cuenta lo complejos que son los pensamientos
              y sentimientos que forjan nuestra identidad.
            </p>
          )}
          {page === 3 && (
            <p className="p-test-info fade-in faster">
              Existe la tendencia a exagerar positivamente nuestras valoraciones
              a la hora de analizarnos de cara al público, ignoramos los
              defectos, vicios y manías más notorias de nuestra personalidad
              para no “entorpecer” nuestra imagen. Por el otro lado, hay quienes
              tienden a crear una visión distorsionada y pesimista acerca de
              quién son y por ende se magnifican las emociones adversas que
              retroalimentan dichos pensamientos catastrofistas.
            </p>
          )}
          {page === 4 && (
            <>
              <p className="p-test-info fade-in faster">
                A continuación te brindamos la posibilidad de entender todo lo
                que te rodea y poner a prueba tus cualidades en mayor
                profundidad analizando los grandes rasgos que conforman tu
                personalidad única.
              </p>
              <p className="p-test-info fade-in faster">
                ¡Te será muy útil y tendrás los resultados al instante! 
              </p>
            </>
          )}
        </div>

        <section className="controles">
          <span className={page === 1 ? "hidden" : ""} onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <section className="indicator">
            <div className={page === 1 ? "active-page" : "inactive-page"}></div>
            <div className={page === 2 ? "active-page" : "inactive-page"}></div>
            <div className={page === 3 ? "active-page" : "inactive-page"}></div>
            <div className={page === 4 ? "active-page" : "inactive-page"}></div>
          </section>
          <span className={page === 4 ? "hidden" : ""} onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </section>
        <section className="buttons-cont">
          <AppButton
            clase={`app-back ${
              page === 4 ? "" : "app-back_no-margin"
            } fade-in faster`}
            accion={() => {
              navigate("/home");
            }}
            icono={faHome}
          />
          {page === 4 && (
            <AppButton
              clase="primary-action fade-in faster"
              texto="COMENZAR"
              accion={() => {
                navigate("/user/test_map");
              }}
            />
          )}
        </section>
      </section>
    </section>
  );
};

export default TestInfo;
