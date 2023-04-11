import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AppButton from "../AppButton";

const ViewA = () => {
  const navigate = useNavigate();
  const { data } = useContext(UserContext);

  return (
    <>
     <div className="separador_big"></div>
      <section className="indice">
        <section className="item item-a">
          <span className="numbers">1</span>{" "}
          <p className="item-title">
            ¿Por qué es tan importante hablar de problemas de salud mental?
          </p>
        </section>
        <section className="item-a item">
          <span className="numbers">2</span>{" "}
          <p className="item-title">Lo que no se habla se hace síntoma</p>
        </section>
        <section className="item-a item">
          <span className="numbers">3</span>{" "}
          <p className="item-title">Señales para buscar ayuda psicológica</p>
        </section>
        <section className="item item-a">
          <span className="numbers">4</span>{" "}
          <p className="item-title">
            ¿Cuál es la diferencia entre la ansiedad y la depresión?
          </p>
        </section>
        <section className="item item-a">
          <span className="numbers">5</span>{" "}
          <p className="item-title">¿Cómo puede ser la ansiedad positiva? </p>
        </section>
      </section>
      {!data.usuario.status && (
        <section className="read-unpaid">
          <img src="../../assets/audio-locked.svg" alt="diamond" />
          <p>
            La función Audiolibro está disponible únicamente en el
            <span onClick={()=>{navigate('/payment')}}> One Nexum Premium.</span>
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
            navigate("/seccionA/content");
          }}
        />
      </section>
    </>
  );
};

export default ViewA;
