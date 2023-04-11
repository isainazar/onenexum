import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";
import Accordion from "../UserProfile/Accordion";
const TrackProgress = () => {
  const { updateInfo } = useEspacioInfo();

  let location = useLocation();
  const [url, setUrl] = useState();
  const [o1, setO1] = useState("");
  const [o2, setO2] = useState("");
  const [o3, setO3] = useState("");
  const [o4, setO4] = useState("");

  const navigate = useNavigate();

  const resetFields = () => {
    setO1("");
    setO2("");
    setO3("");
    setO4("");
  };

  const sendData = () => {
    const user = localStorage.UID;
    let datos, destino;
    if (url === 1) {
      datos = {
        user,
        valoracion_exercise_1: [o1, o2, o3, o4],
      };
      destino = "/seccionA/mapa";
    }
    if (url === 2) {
      datos = {
        user,
        valoracion_exercise_2: [o1, o2, o3, o4],
      };
      destino = "/seccionA/mapa";
    }
    if (url === 3) {
      datos = {
        user,
        valoracion_exercise_3: [o1, o2, o3, o4],
      };
      destino = "/seccionA/completed";
    }

    updateInfo("user/put-valoracion-a", datos, destino);
  };
  useEffect(() => {
    if (location.pathname === "/seccionA/track_calma") {
      setUrl(1);
    } else if (location.pathname === "/seccionA/track_478") {
      setUrl(2);
    } else if (location.pathname === "/seccionA/track_abd") {
      setUrl(3);
    }
    resetFields();
  }, [location]);

  return (
    <section className="main-view">
      <Background
        clase={`${
          (url === 1 && "E1") || (url === 2 && "E2") || (url === 3 && "E3")
        }`}
      />
      <section className="content track">
        <CardHeader
          titulo={` ${
            (url === 1 && "CALMA INSTANTÁNEA") ||
            (url === 2 && "TÉCNICA 4-7-8") ||
            (url === 3 && "RESPIRACIÓN ABDOMINAL")
          }`}
          clase="justify-center"
        />
        <section>
          <p>
            En la escala del 1 al 10 marca qué tan positivo fue el ejercicio
            para ti. 1 será el nivel más bajo y 10 el nivel más alto.
          </p>
        </section>
        <section className="opciones">
          <Accordion
            title="¿Qué tan positivo fue el ejercicio para ti?"
            radio={true}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            state={o1}
            setState={setO1}
            nombre="opcion1"
            clase="track"
          />
          <Accordion
            title="¿Cuánto mejor te sentiste al terminar el ejercicio en relación a como lo empezaste?"
            radio={true}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            state={o2}
            setState={setO2}
            nombre="opcion2"
            clase="track"
          />
          <Accordion
            title="¿Cuánto recomendarías este ejercicio?"
            radio={true}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            state={o3}
            setState={setO3}
            nombre="opcion3"
            clase="track"
          />
          <Accordion
            title="¿Qué tan probable es que vuelvas a repetir
            el ejercicio?"
            radio={true}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            state={o4}
            setState={setO4}
            nombre="opcion1"
            clase="track"
          />
        </section>
      
        <section className="buttons-cont">
          <AppButton
            clase="app-back"
            icono={faArrowLeft}
            accion={() => {
              navigate(-1);
            }}
          />
          {url === 1 && (
            <AppButton
              clase="primary-action"
              texto="SIGUIENTE"
              accion={sendData}
            />
          )}
          {url === 2 && (
            <AppButton
              clase="primary-action"
              texto="SIGUIENTE"
              accion={sendData}
            />
          )}
          {url === 3 && (
            <AppButton
              clase="primary-action"
              texto="FINALIZAR"
              accion={sendData}
            />
          )}
        </section>
      </section>
    </section>
  );
};

export default TrackProgress;
