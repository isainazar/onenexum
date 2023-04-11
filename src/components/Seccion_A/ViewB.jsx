import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { actionTypes } from "../../types/actionTypes";
import AppButton from "../AppButton";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { goExA} from "../../helpers/exercises_actions";

const ViewB = () => {
  const navigate = useNavigate();
  const { UserDispatch, data } = useContext(UserContext);
  const check = () => {
    if (data.usuario.section_a.exercise1_completed && data.usuario.section_a.exercise2_completed && data.usuario.status) {
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
          <p className="item-title unlocked">
            Respiración de calma instantánea
          </p>
          <span
            className="see"
            onClick={() => {
              navigate("/seccionA/ex1_info");
            }}
          >
            Ver más
          </span>
          <AppButton
            clase="app-fwd"
            icono={faArrowRight}
            accion={() => {
              goExA(data, UserDispatch, navigate, 1);
            }}
          />
        </section>
        <section className="item-b item">
          <span className="numbers">2</span>
          <p
            className={`item-title  ${
              data.usuario.section_a.exercise1_completed ? "unlocked" : "locked"
            }`}
          >
            Respiración relajante
          </p>
          <span
            className="see"
            onClick={() => {
              navigate("/seccionA/ex2_info");
            }}
          >
            Ver más
          </span>
          <AppButton
            clase={`app-fwd ${
              !data.usuario.section_a.exercise1_completed && "locked"
            }`}
            icono={faArrowRight}
            accion={() => {
              if (data.usuario.section_a.exercise1_completed) {
               
                goExA(data,UserDispatch, navigate,2);
              }
            }}
          />
        </section>
        <section className="item-b item">
          <span className="numbers">3</span>
          <p className={`item-title  ${check()}`}>
            Respiración energética completa
          </p>
          <span
            className="see"
            onClick={() => {
              navigate("/seccionA/ex3_info");
            }}
          >
            Ver más
          </span>
          <AppButton
            clase={`app-fwd ${check()}`}
            icono={faArrowRight}
            accion={() => {
              if (
                data.usuario.section_a.exercise2_completed === true &&
                data.usuario.section_a.exercise1_completed === true &&
                data.usuario.status
              ) {
              
                goExA(data,UserDispatch, navigate,3);
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
            Para acceder al ejercicio 3 deberás suscribirte al{" "}
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
            navigate("/seccionA/guia");
          }}
          icono={faArrowLeft}
        />
        <AppButton
          clase="primary-action"
          texto="INICIAR"
          accion={() => {
            goExA(data, UserDispatch, navigate,1);
          }}
        />
      </section>
    </>
  );
};

export default ViewB;
