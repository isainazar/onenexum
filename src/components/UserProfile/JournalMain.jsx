import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import SectionButton from "./SectionButton";
import Background from "../Background/Background";
import JournalDate from "./JournalDate";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const JournalMain = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate("/user/main");
    }
  };

  return (
    <section className="main-view ">
      <Background clase="journal-bg" />

      <section className="content content-journal">
        <JournalDate />
        <SectionButton
          texto="Mis notas"
          img="../assets/notes-icon.svg"
          accion={() => {
            navigate("/user/journal_notes");
          }}
        />
        <SectionButton
          texto="Preguntas"
          img="../assets/questions-icon.svg"
          accion={() => {
            navigate("/user/journal_questions");
          }}
        />
        <SectionButton
          texto="¿Cómo tomar
          decisiones?"
          img="../assets/decisions-icon.svg"
          accion={() => {
            navigate("/user/journal_decisions");
          }}
        />
        <section className="buttons-cont">
          <AppButton clase="app-back" icono={faArrowLeft}  accion={()=>{navigate(-1)}}/>
        </section>
      </section>
    </section>
  );
};

export default JournalMain;
