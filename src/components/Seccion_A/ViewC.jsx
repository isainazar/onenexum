import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AppButton from "../AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";

const ViewC = () => {
  const navigate = useNavigate();
  const { data } = useContext(UserContext);

  const checkBonus = () => {
    if (
      !data.usuario.section_a.exercise_1_completed ||
      !data.usuario.section_a.exercise_2_completed ||
      !data.usuario.section_a.exercise_3_completed
    ) {
      return "locked";
    }
  };
  const validateBonusBegin = () => {
    if (
      data.usuario.section_a.exercise_1_completed &&
      data.usuario.section_a.exercise_2_completed &&
      data.usuario.section_a.exercise_3_completed
    ) {
      navigate("/seccionA/bonus");
    }
  };
  return (
    <>
      {!data.usuario.status && (
        <section className="read-unpaid">
          <img src="../../assets/premium-bonus.svg" alt="diamond" />
          <p>
            Para acceder al Bonus Track deberás suscribirte a
            <span
              onClick={() => {
                navigate("/payment");
              }}
            >
              {" "}
              One Nexum Premium.
            </span>
          </p>
        </section>
      )}
      <div className="separador_big sep"></div>
      <section className="indice">
        <section className="item item-c">
          <span className="letters-index">1</span>
          <section className="item-title just ">Meditación</section>
          <span
            className="see see-bonus"
            onClick={() => {
              navigate("/seccionA/bonus_info");
            }}
          >
            Ver más
          </span>
          {!data.usuario.section_a.exercise_1_completed && (
            <section className="info-locked ">
              <FontAwesomeIcon icon={faLock} className="locked bonus-color " />
              <p>
                Para acceder a esta función, deberás completar los ejercicios de
                la guía simple A y el formulario de “Espacio Personal”.
              </p>
            </section>
          )}
        </section>
        <div className="separador_big"></div>
        <section className="item item-c">
          <span className="letters-index">2</span>
          <section className="item-title just unlocked">
            Test de personalidad
          </section>
          <span
            className="see see-bonus"
            onClick={() => {
              navigate("/user/test_info");
            }}
          >
            Ver más
          </span>
        </section>
      </section>
      <section className="buttons-cont">
        <AppButton
          clase={`primary-action ${checkBonus()} bonus-color-bg`}
          texto="INICIAR"
          accion={validateBonusBegin}
        />
      </section>
    </>
  );
};

export default ViewC;
