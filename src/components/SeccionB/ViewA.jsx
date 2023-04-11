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
          La comparación destruye la <br></br> personalidad.
          </p>
        </section>
        <section className="item-a item">
          <span className="numbers">2</span>{" "}
          <p className="item-title">Cambia el foco.</p>
        </section>
        <section className="item-a item">
          <span className="numbers">3</span>{" "}
          <p className="item-title">Aprende a eliminar la culpa.</p>
        </section>
        <section className="item item-a">
          <span className="numbers">4</span>{" "}
          <p className="item-title">
          Los 4 pilares de la mañana.
          </p>
        </section>
        <section className="item item-a">
          <span className="numbers">5</span>{" "}
          <p className="item-title">¿Cómo influye la alimentación en el ánimo? </p>
        </section>
        <section className="item item-a">
          <span className="numbers">6</span>{" "}
          <p className="item-title">¿Cómo hackear tus hormonas de felicidad? </p>
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
            navigate("/seccionB/guia");
          }}
          icono={faArrowLeft}
        />
        <AppButton
          clase="primary-action"
          texto="INICIAR"
          accion={() => {
            navigate("/seccionB/content");
          }}
        />
      </section>
    </>
  );
};

export default ViewA;
