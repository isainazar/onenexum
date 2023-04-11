import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../AppButton";
import Accordion from "./Accordion";
import ProfileIcon from "./ProfileIcon";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";
import { capitalize } from "../../helpers/general";

const Work = () => {
  const navigate = useNavigate();
  const [opt1, setOpt1] = useState();
  const [opt2, setOpt2] = useState();
  const [opt3, setOpt3] = useState();
  const [opt4, setOpt4] = useState();
  const [opt5, setOpt5] = useState();
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);

  const { getInfo, sendInfo, updateInfo } = useEspacioInfo();

  const actualizar = async () => {
    let datos = await getInfo("espacios/getTrabajo", localStorage.UID);

    if (datos.opt1 && datos.opt2) {
      setOpt1(capitalize(datos.opt1));
      setOpt2(capitalize(datos.opt2));
      setOpt3(capitalize(datos.opt3));
      setOpt4(capitalize(datos.opt4));
      setOpt5(capitalize(datos.opt5));
      setAlreadyCompleted(true);
    }
  };

  const sendData = () => {
    const info = {
      opt1: opt1,
      opt2: opt2,
      opt3: opt3,
      opt4: opt4,
      opt5: opt5,
      user: localStorage.UID,
    };
    if (alreadyCompleted) {
      updateInfo("espacios/puttrabajo/", info, "/user/main");
    }
    sendInfo("espacios/posttrabajo/", info, "/user/main");
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
        imagen="../assets/trabajo.svg"
        texto="Trabajo"
        alt="maletín"
      />
      <section className="opciones">
        <Accordion
          title="¿Trabajas, que rol cumples?"
          radio={true}
          options={["Si, empleado", "Si, empleador", "Si, autónomo", "No"]}
          state={opt1}
          setState={setOpt1}
          nombre="estado"
        />
        <Accordion
          title="¿Disfrutas de tu trabajo?"
          radio={true}
          options={["Si", "No", "Un poco"]}
          state={opt2}
          setState={setOpt2}
          nombre="amor"
        />
        <Accordion
          title="¿Cumples tus obligaciones antes 
          de volver a tu hogar?"
          radio={true}
          options={["Si", "No", "Algunas veces"]}
          state={opt3}
          setState={setOpt3}
          nombre="relacion"
        />
        <Accordion
          title="¿Compartes un buen ambiente laboral?"
          radio={true}
          options={["Si", "No", "En ocasiones"]}
          state={opt4}
          setState={setOpt4}
          nombre="aprecia"
        />
        <Accordion
          title="¿Priorizas el trabajo por sobre tu rutina
          de vida?"
          radio={true}
          options={["Si", "No", "En ocasiones"]}
          state={opt5}
          setState={setOpt5}
          nombre="prioriza"
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
        <AppButton clase="primary-action" accion={sendData} texto="FINALIZAR" />
      </section>
    </section>
  );
};

export default Work;
