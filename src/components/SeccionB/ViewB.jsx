import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { actionTypes } from "../../types/actionTypes";
import AppButton from "../AppButton";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ViewB = () => {
  const navigate = useNavigate();
  const { UserDispatch, data } = useContext(UserContext);
  const check = () => {
    if (data.usuario.status) {
      return "unlocked";
    } else {
      return "locked";
    }
  };

  return (
    <>
      <div className="separador_big"></div>
      <section className="indice">
        <section className="item-b item">
          <span className="numbers">1</span>{" "}
          <p className="item-title unlocked">El ejercicio estoico. </p>
          <span
            className="see"
            onClick={() => {
              navigate("/seccionB/ex1_info");
            }}
          >
            Ver más
          </span>
          <AppButton
            clase={`app-fwd ${check()}`}
            icono={faArrowRight}
            accion={() => {
              if (data.usuario.status) {
                UserDispatch({
                  type: actionTypes.started,
                  payload: data,
                  section: 1,
                  ex: 1,
                });
                navigate("/seccionB/ex1_example");
              }
            }}
          />
        </section>
        <section className="item-b item">
          <span className="numbers">2</span>
          <p className="item-title unlocked">Relajación muscular absoluta.</p>
          <span
            className="see"
            onClick={() => {
              navigate("/seccionB/ex2_info");
            }}
          >
            Ver más
          </span>
          <AppButton
            clase={`app-fwd ${check()}`}
            icono={faArrowRight}
            accion={() => {
              if (data.usuario.status) {
                UserDispatch({
                  type: actionTypes.started,
                  payload: data,
                  section: 1,
                  ex: 2,
                });
                navigate("/seccionB/ex2");
              }
            }}
          />
        </section>
        <section className="item-b item">
          <span className="numbers">3</span>
          <p className="item-title unlocked">Técnica de reconexión.</p>
          <span
            className="see"
            onClick={() => {
              navigate("/seccionB/ex3_info");
            }}
          >
            Ver más
          </span>
          <AppButton
            clase={`app-fwd ${check()}`}
            icono={faArrowRight}
            accion={() => {
              if (data.usuario.status) {
                UserDispatch({
                  type: actionTypes.started,
                  payload: data,
                  section: 1,
                  ex: 3,
                });
                navigate("/seccionB/ex3");
              }
            }}
          />
        </section>
      </section>
      {!data.usuario.status && (
        <section className="read-unpaid">
          <img
            src="../../assets/premium-std.svg"
            className={check()}
            width="20px"
          />
          <p>
            Para acceder a los ejercicios de esta sección deberás suscribirte al{" "}
            <span
              onClick={() => {
                navigate("/payment");
              }}
            >
              One Nexum Premium.
            </span>{" "}
          </p>
        </section>
      )}
      <section className="buttons-cont">
        <AppButton
          clase="app-back"
          accion={() => {
            navigate("/seccionB/guia");
          }}
          icono={faArrowLeft}
        />
        <AppButton
          clase={`primary-action ${
            data.usuario.status ? "unlocked" : "locked"
          }`}
          texto="INICIAR"
          accion={() => {
            if (data.usuario.status) {
              UserDispatch({
                type: actionTypes.started,
                payload: data,
                section: 0,
                ex: 1,
              });
              navigate("/seccionB/ex1");
            }
          }}
        />
      </section>
    </>
  );
};

export default ViewB;
