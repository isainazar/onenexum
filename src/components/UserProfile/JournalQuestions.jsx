import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import ProfileIcon from "./ProfileIcon";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";
const JournalQuestions = () => {
  const questions = [
    "¿Qué sientes que te preocupa?",
    "¿Hay algo que te genere inseguridad? ¿Qué es?",
    "¿Te sientes usado/a o manipulado/a?",
    "¿Cuáles son las cosas que te cuesta expresar?",
    "¿Tienes sueños por cumplir?",
    "¿Con quién te cuesta más comunicarte? ¿Por qué?",
    "¿Qué cosa quisieras que no tienes? ¿Cómo crees que puedes conseguirla?",
    "Registro y lectura para retomar mas tarde",
  ];
  const { sendInfo } = useEspacioInfo();
  const navigate = useNavigate();
  const [hideGif, setHideGif] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [journal1, setJournal1] = useState("");
  const [journal2, setJournal2] = useState("");
  const [journal3, setJournal3] = useState("");
  const [journal4, setJournal4] = useState("");
  const [journal5, setJournal5] = useState("");
  const [journal6, setJournal6] = useState("");
  const [journal7, setJournal7] = useState("");
  const [journal8, setJournal8] = useState("");

  const nextQuestion = () => {
    setHideGif(false);
    if (currentQuestion <= questions.length - 2) {
      setCurrentQuestion(currentQuestion + 1);
    }else{
    sendData()}
  };

  const sendData = async ()=>{
    const datos = {
      journal1,journal2,journal3,journal4,journal4,journal6,journal7,journal8, user:localStorage.UID
    }
    await sendInfo("espacios/postDiario",datos, "/user/main");
  }

  const getWidth = () => {
    const lenght = questions.length;
    const currentLenght = ((currentQuestion + 1) * 100) / lenght;
    return currentLenght;
  };
  const setForm = (e) => {
    const page = currentQuestion + 1;
    if (page === 1) {
      setJournal1(e.target.value);
    }
    if (page === 2) {
      setJournal2(e.target.value);
    }
    if (page === 3) {
      setJournal3(e.target.value);
    }
    if (page === 4) {
      setJournal4(e.target.value);
    }
    if (page === 5) {
      setJournal5(e.target.value);
    }
    if (page === 6) {
      setJournal6(e.target.value);
    }
    if (page === 7) {
      setJournal7(e.target.value);
    }
    if (page === 8) {
      setJournal8(e.target.value);
    }
  };

  const getValue = () => {
    if (currentQuestion === 0) return journal1;
    if (currentQuestion === 1) return journal2;
    if (currentQuestion === 2) return journal3;
    if (currentQuestion === 3) return journal4;
    if (currentQuestion === 4) return journal5;
    if (currentQuestion === 5) return journal6;
    if (currentQuestion === 6) return journal7;
    if (currentQuestion === 7) return journal8;
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate(-1);
    }
  };
  return (
    <section className="user-secondary user-secondary_journal note-input">
      <ProfileIcon
        imagen="../assets/journal-header.svg"
        texto="Preguntas"
        alt="corazon"
        journal={true}
      />
      <div className="exercise-description sub">
        <p>{questions[`${currentQuestion}`]}</p>
      </div>
      <section className="opciones opciones_journal">
        <textarea
          placeholder="Escribe aquí"
          onFocus={() => {
            setHideGif(true);
          }}
          value={getValue()}
          onChange={setForm}
        ></textarea>
        {!hideGif && <img src="../assets/textarea.gif" />}
      </section>
      <section className="progress-bar">
        <section className="progress-bar-background"></section>
        <section
          className="progress"
          style={{ width: `${getWidth()}%` }}
        ></section>
      </section>

      <section className="buttons-cont">
        <AppButton clase="app-back" icono={faArrowLeft} accion={goBack} />
        <AppButton
          clase="primary-action"
          accion={nextQuestion}
          texto="SIGUIENTE"
        />
      </section>
    </section>
  );
};

export default JournalQuestions;
