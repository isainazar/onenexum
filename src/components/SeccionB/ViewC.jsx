import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AppButton from "../AppButton";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { actionTypes } from "../../types/actionTypes";

const ViewC = () => {
  const navigate = useNavigate();
  const { data, UserDispatch } = useContext(UserContext);

  const checkBonus = () => {
    if (!data.usuario.status) {
      return "locked";
    }
  };
  const validateBonusBegin = () => {
    if (data.usuario.status) {
      navigate("/seccionB/bonus");
    }
  };
  return (
    <>
      <div className="separador_big sep"></div>
      <section className="indice">
        <section className="item item-b">
          <span className="numbers bonus-color">1</span>
          <section className="item-title just unlocked ">
         Claves para la<br></br> productividad
          </section>
          <span
            className="see see-bonus"
            onClick={() => {
              navigate("/seccionB/bonus_info");
            }}
          >
            
          </span>
          <AppButton
            clase={`app-fwd ${
              data.usuario.status ? "unlocked" : "locked"
            } bonus-color-bg`}
            icono={faArrowRight}
            accion={() => {
              if (data.usuario.status) {
                UserDispatch({
                  type: actionTypes.started,
                  payload: data,
                  section: 0,
                  ex: 1,
                });
                navigate("/seccionB/bonus");
              }
            }}
          />
        </section>
      {/*   <p className="bonus_subtitle">
          Pequeños hábitos que pueden resolver el 80% de tus problemas.
        </p> */}
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
