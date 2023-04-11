import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import expresiones from "../../helpers/expresiones";
import AppButton from "../AppButton";
import Background from "../Background/Background";

const JournalDecisionsSecond = () => {
  const [pregunta, setPregunta] = useState("");
  const [current, setCurrent] = useState(Number(0));
  const [answer, setAnswers] = useState({ ans1: "", ans2: "", ans3: "" });
  const [answerView, setAnswerView] = useState(false);
  const preguntas = [
    "¿Cuáles son las consecuencias de esta decisión en 10 minutos?",
    "¿Cuáles son las consecuencias de esta decisión en 10 meses?",
    "¿Cuáles son las consecuencias de esta decisión en 10 años?",
  ];
  const navigate = useNavigate();
  const setForm = (e) => {
    setPregunta(e.target.value);
  };

  const validate = (e) => {
    if (expresiones.nombre.test(e.target.value)) {
    } else {
      console.log("no");
    }
  };
  const handleAnswers = (e) => {
    if (current === 0) {
      setAnswers({ ...answer, ans1: e.target.value });
    }
    if (current === 1) {
      setAnswers({ ...answer, ans2: e.target.value });
    }
    if (current === 2) {
      setAnswers({ ...answer, ans3: e.target.value });
    }
  };
  const handleNext = () => {
    if (current < 3) {
      setCurrent(Number(current + 1));
    }else{
      navigate('/user/journal')
    }

  };
  const handlePrev = () => {
    if (current > 0) {
      setCurrent(Number(current - 1));
    } else {
      setCurrent(0);
      setAnswerView(false);
    }
  };
  const getValue = () => {
    if (current === 0) {
      console.log(answer.ans1);
      return answer.ans1;
    }
    if (current === 1) {
      console.log(answer.ans2);
      return answer.ans2;
    }
    if (current === 2) {
      console.log(answer.ans3);
      return answer.ans3;
    }
  };

  const handleClick = (e) => {
    setCurrent(Number(e.target.id));
    setAnswerView(true);
  };
  return (
    <section className="main-view">
      <Background clase="bg-decisions" />
      <section className="content decisions">
        <h2 className="title">¿Cómo tomar decisiones?</h2>
        {!answerView && (
          <>
            <p className="explain decisions_p">
              Anota a continuación esa situación que te paraliza:
            </p>
            <section className="opciones opciones_journal">
              <textarea
                placeholder="Escribe aquí"
                value={pregunta}
                onChange={setForm}
                onKeyUp={validate}
              ></textarea>
            </section>
            <p className="explain decisions-p p__footer">
              A continuación responde estas 3 preguntas:
            </p>
            <section className="questions">
              {preguntas.map((el, index) => {
                return (
                  <section className="question" key={index}>
                    <p className="decision-question">{el}</p>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      onClick={handleClick}
                      id={index}
                    />
                  </section>
                );
              })}
            </section>
            <section className="buttons-cont">
              <AppButton
                clase="app-back"
                icono={faArrowLeft}
                accion={() => {
                  navigate(-1);
                }}
              />
            </section>
          </>
        )}
        {answerView && (
          <>
            {current < 3 && (
              <>
                <h2 className="numbers">{Number(current + 1)}</h2>
                <p className="explain decisions-p">{preguntas[current]}</p>

                <section className="opciones opciones_journal">
                  <textarea
                    placeholder="Escribe aquí"
                    value={getValue()}
                    onChange={handleAnswers}
                    onKeyUp={validate}
                  ></textarea>
                </section>
              </>
            )}

            {current === 3 && (
              <>
                <h2 className="title_medium">
                  ¡Muy bien! Ahora tienes a disposición respuestas concretas
                  para profundizar cualquier toma de decisión.
                </h2>
              </>
            )}

            <section className="buttons-cont">
              <AppButton
                clase="app-back"
                icono={faArrowLeft}
                accion={handlePrev}
              />
              <AppButton
                clase="primary-action"
                texto={
                  current < 2
                    ? ["SIGUIENTE", <br></br>, "PREGUNTA"]
                    : "FINALIZAR"
                }
                accion={handleNext}
              />
            </section>
          </>
        )}
      </section>
    </section>
  );
};

export default JournalDecisionsSecond;
