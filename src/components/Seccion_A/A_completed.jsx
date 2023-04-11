import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

const A_Completed = () => {
  const navigate = useNavigate();

  return (
    <section className="main-view">
      <Background clase="section-completed" />
      <section className="content completed-section">
        <CardHeader titulo="¡Muy Bien!" clase="justify-center bigger-text" />
        <img src="../assets/completed-img.gif" className="price" />
        <h2 className="title_big">Recuerda</h2>
        <h2 className="title_ex_inner">
        “Somos eso que hacemos repetidamente. Ten en cuenta que nuestros hábitos definen en gran parte lo que somos”
        </h2>
        <div className="separador_big"></div>
        <p className="completed-info">
        Has completado todos los ejercicios de la sección A. Presiona en <span>Finalizar</span> para redirigirte a la sección “Espacio personal”
        </p>
        <section className="buttons-cont">
        <AppButton
          clase="app-back"
          icono={faHome}
          accion={() => {
            navigate("/home");
          }}
        />
        <AppButton
          clase="primary-action"
          texto="FINALIZAR"
          accion={() => {
            navigate("/user/know_more");
          }}
        />

        </section>
      </section>
    </section>
  );
};

export default A_Completed;
