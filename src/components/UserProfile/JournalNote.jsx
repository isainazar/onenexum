import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";
import { journalRegister } from "../../helpers/journal";
import AppButton from "../AppButton";
import ProfileIcon from "./ProfileIcon";

const JournalNote = () => {
  const navigate = useNavigate();
  const { getInfo } = useEspacioInfo();
  const [datos,setDatos] = useState();

  const goBack = () => {
    navigate(-1);
  };
  const qref = useRef(document.getElementById);
  const [view, setView] = useState({
    view: false,
    question: null,
    title: null,
  });
  const { id } = useParams();

  const viewData = (e) => {
    if (e.target.id === "0") {
      setView({
        view: true,
        question: datos.q1,
        title: questions[e.target.id],
      });
    }
    if (e.target.id === "1") {
      setView({
        view: true,
        question: datos.q2,
        title: questions[e.target.id],
      });
    }
    if (e.target.id === "2") {
      setView({
        view: true,
        question: datos.q3,
        title: questions[e.target.id],
      });
    }
    if (e.target.id === "3") {
      setView({
        view: true,
        question: datos.q4,
        title: questions[e.target.id],
      });
    }
    if (e.target.id === "4") {
      setView({
        view: true,
        question: datos.q5,
        title: questions[e.target.id],
      });
    }
    if (e.target.id === "5") {
      setView({
        view: true,
        question: datos.q6,
        title: questions[e.target.id],
      });
    }
    if (e.target.id === "6") {
      setView({
        view: true,
        question: datos.q7,
        title: questions[e.target.id],
      });
    }
    if (e.target.id === "7") {
      setView({
        view: true,
        question: datos.q8,
        title: questions[e.target.id],
      });
    }
  };

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
  const checkAction = () => {
    if (view.view) {
      setView({ view: false, question: null, title: null });
    } else {
      navigate(-1);
    }
  };

  const getData = async ()=>{
    const data = await getInfo('espacios/getNote',`${localStorage.UID}?idNote=${id}`);
    setDatos(data)
   /*  setDatos(data)
    setNotes(true) */
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="user-secondary user-secondary_journal">
      <ProfileIcon
        imagen="../../assets/notes-icon.svg"
        texto="Mis Notas"
        alt="diario personal"
        journal={true}
      />
      <div className="note-header">
        <p>Registro</p>
       {datos && <p className="note-date">{datos.date}</p>}
      </div>
      {!view.view && (
        <section className="questions-title">
          {questions.map((question) => {
            return (
              <div
                className="question-header"
                onClick={viewData}
                ref={qref}
                key={questions.indexOf(question)}
                id={questions.indexOf(question)}
              >
                <p>{question}</p>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            );
          })}
        </section>
      )}
      {view.view && (
        <>
          <h2 className="register-title">{view.title}</h2>
          <section className="opciones opciones_journal">
            <textarea
              readOnly
              className="no-edit"
              value={view.question}
            ></textarea>
          </section>
        </>
      )}
      <section className="buttons-cont buttons-cont_journal">
        <AppButton clase="app-back" icono={faArrowLeft} accion={checkAction} />
      </section>
    </section>
  );
};

export default JournalNote;
