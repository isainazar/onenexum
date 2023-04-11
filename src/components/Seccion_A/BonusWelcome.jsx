import React from "react";
import AppButton from "../AppButton";
import {
  faChevronLeft,
  faChevronRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const BonusWelcome = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const goPage = () => {
    if (page === 2) {
      navigate("/user/test_info");
    } else if (page === 1) {
      navigate("/seccionA/bonus");
    }
   
  };

  return (
    <section className="bonus-welcome">
      <img src="../assets/prize.gif" className="bonus-premio" alt="cheers" />
      <h2 className="title_ex_inner">¡Excelente!</h2>
      <div className="exercise-description">
        {page === 1 && (
          <>
            <p>
              Has completado con éxito las actividades propuestas anteriormente.
            </p>
            <p>
              A partir de ahora podrás acceder al contenido adicional{" "}
              <span className="bonus">“Bonus Track”</span>, el cual cuenta con
              artículos y actividades interactivas sobre la meditación.
            </p>
          </>
        )}
        {page === 2 && (
          <>
            <p>
              Has completado con éxito las actividades propuestas anteriormente.
            </p>
            <p>
              Ahora también puedes acceder al{" "}
              <span className="perso">Test de personalidad</span>, el cuál tiene
              como objetivo arrojarte contenido personalizado en base a tus
              intereses y preferencias.
            </p>
          </>
        )}
      </div>
      <section className="indicators">
        <span
          className={`bonus-link ${page === 1 ? "disabled" : ""}`}
          onClick={() => {
            setPage(1);
          }}
        >
          {page === 2 && <p>Bonus Track</p>}
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span
          className={`test-link ${page === 2 ? "disabled" : ""}`}
          onClick={() => {
            setPage(2);
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
          {page === 1 && <p>Test de personalidad</p>}
        </span>
      </section>
      <section className="buttons-cont">
        <AppButton
          clase="app-back"
          icono={faHouse}
          accion={() => {
            navigate("/seccionA/mapa");
          }}
        />
        <AppButton
          clase={`${
            (page === 1 && "primary-action primary-action_bonus") ||
            (page === 2 && "primary-action")
          }`}
          texto={
            (page === 2 && "IR AL TEST DE PERSONALIDAD") ||
            (page === 1 && "IR A BONUS TRACK")
          }
          accion={goPage}
        />
      </section>
    </section>
  );
};

export default BonusWelcome;
