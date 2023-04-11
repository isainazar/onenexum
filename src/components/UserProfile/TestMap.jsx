import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { actionTypes } from "../../types/actionTypes";
import AppButton from "../AppButton";
import Background from "../Background/Background";

const TestMap = () => {
  const navigate = useNavigate();
  const { data, UserDispatch } = useContext(UserContext);
  const [view, setView] = useState("a");
  const check = () => {
    if (!data.usuario.status) {
      return "locked";
    }else{
      return "unlocked";
    }
  };
  return (
    <section className="main-view">
      <Background clase="test-info" />
      <section className="content test-map">
        <h2 className="title_guia">TEST DE PERSONALIDAD</h2>
        <div className="separador"></div>
        <p className="explain">
          Desde aquí podrás ver las preguntas relacionadas a la conformación de
          la personalidad basada en rasgos y la significación de los resultados
          obtenidos.
        </p>
        <section className="map-nav">
          <AppButton
            clase={`inner-button ${view === "a" ? "active" : ""}`}
            texto="Preguntas"
            accion={() => {
              setView("a");
            }}
          />
          <AppButton
            clase={`inner-button ${view === "b" ? "active" : ""}`}
            texto="Resultados"
            accion={() => {
              setView("b");
            }}
          />
        </section>
        <div className="separador_big"></div>
        {view === "a" && (
          <section className="indice">
            <section className="item-b item">
              <span className="numbers">1</span>{" "}
              <p className="item-title unlocked">
                ¿Eres alguien extrovertido o introvertido?
              </p>
              <span
                className="see"
                onClick={() => {
                  navigate("/user/test_info/1");
                }}
              >
                Ver más
              </span>
              <AppButton
                clase="app-fwd"
                icono={faArrowRight}
                accion={() => {
                  UserDispatch({
                    type: actionTypes.started,
                    payload: data,
                    section: 0,
                    ex: 1,
                  });
                  navigate("/user/test/1");
                }}
              />
            </section>
            <section className="item-b item">
              <span className="numbers">2</span>
              <p className="item-title unlocked">
                ¿Eres conservador o de mentalidad abierta?
              </p>
              <span
                className="see"
                onClick={() => {
                  navigate("/user/test_info/2");
                }}
              >
                Ver más
              </span>
              <AppButton
                clase={`app-fwd `}
                icono={faArrowRight}
                accion={() => {
                  navigate("/user/test/2");
                }}
              />
            </section>
            <section className="item-b item">
              <span className="numbers">3</span>
              <p className={`item-title  ${check()}`}>
                ¿Eres una persona responsable?
              </p>
              <span
                className="see"
                onClick={() => {
                  navigate("/user/test_info/3");
                }}
              >
                Ver más
              </span>
              <AppButton
                clase={`app-fwd ${check()}`}
                icono={faArrowRight}
                accion={() => {
                  if (data.usuario.status) {
                    navigate("/user/test/3");
                  }
                }}
              />
            </section>
            <section className="item-b item">
              <span className="numbers">4</span>
              <p className={`item-title  ${check()}`}>
                ¿Cómo consideras tu nivel de estado emocional?
              </p>
              <span
                className="see"
                onClick={() => {
                  navigate("/user/test_info/4");
                }}
              >
                Ver más
              </span>
              <AppButton
                clase={`app-fwd ${check()}`}
                icono={faArrowRight}
                accion={() => {
                  if (data.usuario.status) {
                    navigate("/user/test/4");
                  }
                }}
              />
            </section>
            <section className="item-b item">
              <span className="numbers">5</span>
              <p className={`item-title  ${check()}`}>
                ¿Cómo consideras tu nivel de asertividad y conformismo?
              </p>
              <span
                className="see"
                onClick={() => {
                  navigate("/user/test_info/5");
                }}
              >
                Ver más
              </span>
              <AppButton
                clase={`app-fwd ${check()}`}
                icono={faArrowRight}
                accion={() => {
                  if (data.usuario.status) {
                    navigate("/user/test/5");
                  }
                }}
              />
            </section>
          </section>
        )}
        {view === "b" && (
          <>
            <p className="explain detailed">
              Cada pregunta contenida en una categoría arroja una suma o resta
              de puntos de acuerdo con la respuesta seleccionada. Estos puntos
              estan cuidadosamente asignados según el tipo de respuesta que
              puede ser variar entre Si, No y A veces.<br></br> Al finalizar el
              cuestionario el algoritmo arrojará el resultado más apropiado de
              acuerdo a lo respondido y dará una descripción de cada rasgo para
              entender su significado.
            </p>
          </>
        )}
        {!data.usuario.status && (
          <section className="read-unpaid">
            <img
              src="../../assets/premium-std.svg"
              className={check()}
              width="20px"
            />
            <p>
              Para acceder al test 3, 4 y 5 deberás suscribirte a{" "}
              <span
                onClick={() => {
                  navigate("/payment");
                }}
              >
                One Nexum Premium.
              </span>
            </p>
          </section>
        )}
        <section className="buttons-cont">
          <AppButton
            clase="app-back"
            accion={() => {
              navigate("/user/main");
            }}
            icono={faArrowLeft}
          />
         {view==="a" &&
          <AppButton
          clase="primary-action"
          texto="COMENZAR"
          accion={() => {
            navigate("/user/test/1");
          }}
        />}
         {view==="b" &&
          <AppButton
          clase="primary-action"
          texto="VER RESULTADOS"
          accion={() => {
            navigate("/user/test_result-all");
          }}
        />}
        </section>
      </section>
    </section>
  );
};

export default TestMap;
