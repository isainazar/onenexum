import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserContext from "../../contexts/UserContext";

import Background from "../Background/Background";
import ViewA from "./ViewA";
import ViewB from "./ViewB";
import ViewC from "./ViewC";

const MapaB = () => {
  const [page, setPage] = useState();
  const { data } = useContext(UserContext);
  const handlePageA = () => {
    setPage("a");
    localStorage.setItem("viewb", "a");
  };
  const handlePageB = () => {
    setPage("b");
    localStorage.setItem("viewb", "b");
  };
  const handlePageC = () => {
    setPage("c");
    localStorage.setItem("viewb", "c");
  };

  const checkClass = () => {
    if (page === "a" && !data.usuario.status) {
      return "mapa-content_unpaid mapa-content_unpaid__a-b";
    }
     else if (page === "b" && !data.usuario.status) {
      return "mapa-content_unpaid mapa-content_unpaid__b";
    } else if (page === "c" && !data.usuario.status) {
      return "mapa-content_unpaid bonus-content__c";
    }
    return "";
  };

  useEffect(() => {
    if (localStorage.viewb) {
      setPage(localStorage.viewb);
    } else {
      setPage("a");
    }
  }, []);

  return (
    <section className="main-view">
      <Background />

      <section
        className={`content mapa-content mapa-content__a-b ${checkClass()} ${
          page === "c" ? "bonus-content bonus-content-b-locked" : ""
        }`}
      >
        <>
          <h2 className="title_guia">Mapa Sección B</h2>
          <div className={`separador ${page==="c"? "separador_bonus" : ""}`}></div>
          <section className="map-header">
            <p className="explain">
              {page === "a" &&
                " A continuación te ofreceremos una vista simplificada del contenido y ejercicios de la guía. Desde aquí podrás navegar hacia distintas categorías y desbloquear contenido con tu progreso."}

              {page === "b" &&
                "Te presentamos nuestra sección de ejercicios. Desde aquí podrás navegar desde el ejercicio 1 y desbloquear contenido con tu progreso. "}
              {page === "c" &&
                "Una enumeración de distintos hábitos para que puedas incluirlos en tu día a día y mejorar tu calidad de vida."}
            </p>
          </section>
          <section className="map-nav">
            <button
              className={`inner-button ${page === "a" && "active"}`}
              onClick={handlePageA}
            >
              Audio y lectura
            </button>
            <button
              className={`inner-button ${page === "b" && "active"}`}
              onClick={handlePageB}
            >
              Ejercicios
            </button>
            <button
              className={`inner-button ${page === "c" && "active bonus"}`}
              onClick={handlePageC}
            >
              Bonus Track
            </button>
          </section>

          {page === "a" && <ViewA />}
          {page === "b" && <ViewB />}
          {page === "c" && <ViewC />}
        </>
      </section>
    </section>
  );
};

export default MapaB;
