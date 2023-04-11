import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../AppButton";
import Accordion from "./Accordion";
import ProfileIcon from "./ProfileIcon";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "../../helpers/general";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";

const Interest = () => {
  const navigate = useNavigate();
  const [opt1, setOpt1] = useState([]);
  const [opt2, setOpt2] = useState();
  const [opt3, setOpt3] = useState();
  const [opt4, setOpt4] = useState([]);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);
  const { getInfo, sendInfo, updateInfo } = useEspacioInfo();

  const handleMusic = (e) => {
    if (e.target.checked) {
      setOpt1([...opt1, e.target.value]);
    } else {
      let temp = opt1.filter((gen) => gen != e.target.value);
      setOpt1(temp);
    }
  };
  const handleArte = (e) => {
    if (e.target.checked) {
      setOpt4([...opt4, e.target.value]);
    } else {
      let temp = opt4.filter((gen) => gen != e.target.value);
      setOpt4(temp);
    }
  };

  const actualizar = async () => {
    let datos = await getInfo("espacios/getGei", localStorage.UID);

    if (datos.opt1 && datos.opt2) {
      setOpt1(datos.opt1);
      setOpt2(capitalize(datos.opt2));
      setOpt3(capitalize(datos.opt3));
      setOpt4(datos.opt4);
      setAlreadyCompleted(true);
    }
  };

  const sendData = () => {
    const info = {
      opt1: opt1,
      opt2: opt2,
      opt3: opt3,
      opt4: opt4,
      user: localStorage.UID,
    };
    if (alreadyCompleted) {
      updateInfo("espacios/putGei/", info, "/user/main");
    }
    sendInfo("espacios/postGei/", info, "/user/main");
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
        imagen="../assets/gustos.svg"
        texto="Gustos e intereses"
        alt="corazon"
      />
      <section className="opciones">
        <Accordion
          title="¿Géneros de música que te gusten?"
          check={true}
          options={[
            "Rock",
            "Pop",
            "Clásico",
            "Funk",
            "Metal",
            "Jazz",
            "Bachata",
            "Reggae",
          ]}
          state={opt1}
          setState={handleMusic}
        />

        <Accordion
          title="¿Te gusta el arte o el diseño?"
          radio={true}
          options={["Si", "No", "Algo"]}
          state={opt2}
          setState={setOpt2}
          nombre="arte"
        />
        <Accordion
          title="¿Suele apreciar el gusto artístico?"
          radio={true}
          options={["Si", "No", "Algo"]}
          state={opt3}
          setState={setOpt3}
          nombre="gusto"
        />

        <Accordion
          title="¿Con qué arte te sientes mas identificado?"
          check={true}
          options={[
            "Abstracto",
            "Visual",
            "Actual",
            "Neo clásico",
            "Clásico",
            "Digital",
            "Culinario",
            "Pop",
          ]}
          state={opt4}
          setState={handleArte}
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

export default Interest;
