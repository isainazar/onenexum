import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../AppButton";
import Accordion from "./Accordion";
import ProfileIcon from "./ProfileIcon";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { capitalize, url } from "../../helpers/general";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";

const Life = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [opt1, setOpt1] = useState();
  const [opt2, setOpt2] = useState();
  const [opt3, setOpt3] = useState();
  const [opt4, setOpt4] = useState();
  const [opt5, setOpt5] = useState();
  const [opt6, setOpt6] = useState();
  const [opt7, setOpt7] = useState();
  const [opt8, setOpt8] = useState();
  const [opt9, setOpt9] = useState();
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);
  /*  const sendInfo = async () => {
    const info = {
      opt1: opt1,
      opt2: opt2,
      opt3: opt3,
      opt4: opt4,
      opt5: opt5,
      opt6: opt6,
      opt7: opt7,
      opt8: opt8,
      opt9: opt9,
      user: localStorage.UID,
    };
    await axios
      .post(`${url}/api/espacios/postVyR`, info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */
  const { getInfo, sendInfo, updateInfo } = useEspacioInfo();
  const sendData = () => {
    const info = {
      opt1: opt1,
      opt2: opt2,
      opt3: opt3,
      opt4: opt4,
      opt5: opt5,
      opt6: opt6,
      opt7: opt7,
      opt8: opt8,
      opt9: opt9,
      user: localStorage.UID,
    };
    if (alreadyCompleted) {
      updateInfo("espacios/putVyR/", info, "/user/main");
    }
    sendInfo("espacios/postVyR/", info, "/user/main");
  };
  const checkFwdAction = () => {
    if (page === 1) {
      setPage(2);
    } else {
      sendData();
    }
  };
  const checkBackAction = () => {
    if (page === 1) {
      navigate(-1);
    } else {
      setPage(1);
    }
  };

  const actualizar = async () => {
    let datos = await getInfo("espacios/getVyR", localStorage.UID);
    if (datos.opt1) {
      setOpt1(capitalize(datos.opt1));
      setOpt2(capitalize(datos.opt2));
      setOpt3(capitalize(datos.opt3));
      setOpt4(capitalize(datos.opt4));
      setOpt5(capitalize(datos.opt5));
      setOpt6(capitalize(datos.opt6));
      setOpt7(capitalize(datos.opt7));
      setOpt8(capitalize(datos.opt8));
      setOpt9(capitalize(datos.opt9));
      setAlreadyCompleted(true);
    }
  };
  useEffect(() => {
    actualizar();
  }, []);
  return (
    <section className="user-secondary">
      <h2 className="title_user">Tu espacio personal</h2>
      <div className="exercise-description">
        <p>Completa las casillas con la información requerida.</p>
      </div>
      <ProfileIcon
        imagen="../assets/vida.svg"
        texto="Vida personal y relaciones"
        alt="corazon"
      />
      <section className="indicator">
        <div className={page === 1 ? "active-page" : "inactive-page"}></div>
        <div className={page === 2 ? "active-page" : "inactive-page"}></div>
      </section>
      <section className="opciones">
        {page === 1 && (
          <>
            <Accordion
              title="Estado civil"
              radio={true}
              options={["Soltero/a", "Casado/a", "Viudo/a", "Divorciado/a"]}
              state={opt1}
              setState={setOpt1}
              nombre="estado"
            />
            <Accordion
              title="¿Tienes amantes o mas de una pareja?"
              radio={true}
              options={["Si", "No", "Es complicado"]}
              state={opt2}
              setState={setOpt2}
              nombre="amor"
            />
            <Accordion
              title="¿Como te relacionas con otras personas?"
              radio={true}
              options={["Bien", "Mal", "Depende la persona y contexto"]}
              state={opt3}
              setState={setOpt3}
              nombre="relacion"
            />
            <Accordion
              title="¿Que es lo que mas aprecias de las personas?"
              radio={true}
              options={["Su lealtad", "Su amistad", "Su disposición"]}
              state={opt4}
              setState={setOpt4}
              nombre="aprecia"
            />
          </>
        )}
        {page === 2 && (
          <>
            <Accordion
              title="¿Actualmente tienes una relación?"
              radio={true}
              options={["Si", "No", "Es complicado"]}
              state={opt5}
              setState={setOpt5}
              nombre="estado"
            />
            <Accordion
              title="¿Cómo describirías tu experiencia en  tu relación actual o una anterior?"
              radio={true}
              options={["Fue dolorosa", "Fue positiva", "Ambas", "Ninguna"]}
              state={opt6}
              setState={setOpt6}
              nombre="amor"
            />
            <Accordion
              title="¿Está en tus planes tener una relación?"
              radio={true}
              options={[
                "Actualmente estoy en una relación",
                "Si, está en mis planes",
                "Si, pero me cuesta conseguirlo",
                "No me interesa",
                "No estoy seguro de lo que quiero",
                "Otro",
              ]}
              state={opt7}
              setState={setOpt7}
              nombre="relacion"
            />
            <Accordion
              title="¿Cómo es tu relación con tu familia?"
              radio={true}
              options={[
                "Es sana y positiva",
                "Prefiero estar lejos de mi familia",
                "Otro",
              ]}
              state={opt8}
              setState={setOpt8}
              nombre="aprecia"
            />
            <Accordion
              title="¿Tienes amistades?"
              radio={true}
              options={["Si", "No", "Me cuesta hacer amistades"]}
              state={opt9}
              setState={setOpt9}
              nombre="aprecia"
            />
          </>
        )}
      </section>
      <section className="buttons-cont">
        <AppButton
          clase="app-back"
          icono={faArrowLeft}
          accion={checkBackAction}
        />
        <AppButton
          clase="primary-action"
          accion={checkFwdAction}
          texto={page === 1 ? "SIGUIENTE" : "FINALIZAR"}
        />
      </section>
    </section>
  );
};

export default Life;
