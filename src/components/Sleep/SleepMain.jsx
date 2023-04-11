import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import useControl from "../../helpers/hooks/useControl";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";

const SleepMain = () => {
  const { data } = useContext(UserContext);
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const handleView = () => {
    setView(true);
  };
  
  const checkPay = () => {
    if (data.usuario.status) navigate("/sleep_player");
  };
  const { page, prev, next, move, start, end } = useControl(3);
  return (
    <section className="main-view sleep-view">
      <section className="top">
        <img src="../../assets/sueno-premium.svg" />
        <h2 className="head-title">Sueño</h2>
        <h1>Frecuencias</h1>
        <section
          className="main-info"
          onTouchStart={start}
          onTouchMove={end}
          onTouchEnd={move}
        >
          {page === 1 && (
            <p>
              Un buen descanso siempre es merecido para asegurar un alto
              rendimiento al otro día. Si sientes que tu situación de conciliar
              el sueño no mejora y sientes que el problema se acentúa es
              importante que acudas a un profesional de la salud mental para
              descartar cualquier problema médico subyacente.
            </p>
          )}
          {page === 2 && (
            <p>
              Suele ser de gran utilidad recurrir al uso de onda delta para
              conciliar el sueño, te servirá si eres de los que tienen
              inconvenientes a la hora de dormirse como también  si eres de los
              que se levantan ante la mínima percepción de sonido. 
            </p>
          )}
          {page === 3 && (
            <p>
              A continuación te dejaremos tres categorías de frecuencias para
              que puedas explorar aquellas que son de mayor utilidad para ti, te
              daremos distintas opciones para que puedas medir su eficiencia y
              cuál se adapta mejor a tu situación.
            </p>
          )}
        </section>

        <section className="controles">
          <span className={page === 1 ? "hidden" : ""} onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <section className="indicator">
            <div className={page === 1 ? "active-page" : "inactive-page"}></div>
            <div className={page === 2 ? "active-page" : "inactive-page"}></div>
            <div className={page === 3 ? "active-page" : "inactive-page"}></div>
          </section>
          <span className={page === 3 ? "hidden" : ""} onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </section>
      </section>
      <section className="bottom">
        <h2 className="categorias">Categorías</h2>
        <section className="profile-icons">
          <section className="conjunto" onClick={()=>{navigate("/sleep/category_1")}}>
            <div className="profile-icon progresiva"></div>
            <p>Relajación progresiva</p>
          </section>
          <section className="conjunto" onClick={()=>{navigate("/sleep/category_2")}}>
            <div className="profile-icon mixta"></div>
            <p>
              Sonidos de relajación
              <br /> mixta
            </p>
          </section>
          <section className="conjunto" onClick={()=>{navigate("/sleep/category_3")}}>
            <div className="profile-icon asmr"></div>
            <p>ASMR</p>
          </section>
        </section>
        <section className="boton">
        <AppButton clase="app-back" icono={faArrowLeft} accion={()=>{navigate("/user/main")}}/>
        </section>
      </section>
    </section>
  );
};

export default SleepMain;
