import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactGA from "react-ga4";

import QuizBackground from "../QuizBackground/QuizBackground";
import ProgressBar from "../QuizBackground/ProgressBar";
import expresiones from "../../helpers/expresiones";
import Input from "../Inputs/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faRotateRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";

const Quiz= () => {
  const navigate = useNavigate();

  const [quizInit, setQuizInit] = useState(true);
  const [quizView, setQuizView] = useState(false);
  const [bg, setBg] = useState(0);
  const [quizResult, setQuizResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [emptyName, setEmptyName] = useState(false);

  const [nombre, setNombre] = useState({ campo: "", valido: null });

  const [userType, setUserType] = useState(0); // 0 no necesita pack, 1 (entre 2 y 3 true), 2(>4 true)

  const [animation, setAnimation] = useState(false);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let numeros = "0123456789,.`/?;:][{}|=+-_><~()*&^%$#@!";

  const tieneNumeros = (texto) => {
    for (let i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) !== -1) {
        return 1;
      }
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.campo.length < 3 || nombre.valido === "false") {
      setEmptyName(true);
    } else {
      setAnimation(true);
      setNombre({...nombre, campo: handleNombre(nombre.campo)});
      setQuizInit(false);

      setTimeout(() => {
        setAnimation(false);
        setQuizView(true);
      }, 100);
      setBg((prev) => prev + 1);
      localStorage.setItem("nombre", nombre.campo);
      ReactGA.event("started_quiz");
      window.scrollTo(0, 0);
    }
  };

  const handleNombre = (nombre) => {
    return capitalize(nombre.toLowerCase());
  };

  const handleRetake = () => {
    setQuizResult(false);
    setQuizCompleted(false);
    setUserType(0);
    setQuestionPage(0);
    setBg(1);
    setQuizView(true);
    setAnswers({
      answer0: null,
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      answer5: null,
      answer6: null,
    });
  };

  const toSignUp = () => {
    localStorage.setItem("user_type", userType);
    navigate("/signUp");
  };

  const toSuggest = () => {
    localStorage.setItem("user_type", userType);
    navigate("/suggest");
  };

  const questions = {
    q0: {
      texto: `Cuéntanos ${nombre.campo}, ¿por momentos te sientes tenso y nervioso?`,
      subtitle: `Seleccione "Si" o "No" a continuación`,
      respuesta1: "Si",
      respuesta2: "No",
    },
    q1: {
      texto: "¿Cómo luce tu estado de ánimo?",
      subtitle: "Seleccione cualquiera de las opciones a continuación",
      respuesta1: "Cambiante y difícil de explicar",
      respuesta2: "Estable",
    },
    q2: {
      texto: "Analiza si las siguientes situaciones se están manifestando",
      subtitle: "Seleccione cualquiera de las opciones a continuación",
      respuesta1: "Te cuesta tomar decisiones",
      respuesta2: "Ninguna",
      respuesta3: "No disfrutas de actividades que antes si",
      respuesta4: "Ambas",
    },
    q3: {
      texto: "¿Piensas constantemente en el futuro sin vivir el presente?",
      subtitle: `Seleccione "Si" o "No" a continuación`,

      respuesta1: "Si",
      respuesta2: "No",
    },
    q4: {
      texto: "¿Te sientes con frecuencia sin esperanza?",
      subtitle: `Seleccione "Si" o "No" a continuación`,

      respuesta1: "Si",
      respuesta2: "No",
    },
    q5: {
      texto: "¡Ya casi terminamos! ¿Cómo te sueles sentir? ",
      subtitle: "Seleccione cualquiera de las opciones a continuación",

      respuesta1: "Con pensamientos caóticos y difíciles de explicar",
      respuesta2: "En calma y sin preocupaciones",
    },
    q6: {
      texto: `¡Por último ${nombre.campo}! ¿A veces te sientes sin rumbo y con gran frustración? `,
      subtitle: `Seleccione "Si" o "No" a continuación`,

      respuesta1: "Si",
      respuesta2: "No",
    },
  };

  const questionsQuantity = Object.keys(questions).length;
  const [questionPage, setQuestionPage] = useState(0);

  const [answers, setAnswers] = useState({
    answer0: null,
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    answer5: null,
    answer6: null,
  });

  const userSet = (cont) => {
    if (cont > 3) {
      setUserType(2);
    } else if (cont > 1) {
      setUserType(1);
    }
  };

  const validar = () => {
    let cont = 0;
    Object.values(answers).forEach((value) =>
      value === "true" ? cont++ : null
    );
    userSet(cont);
  };

  const validarPage = () => {
    if (questionPage < questionsQuantity) {
      if (questionPage !== questionsQuantity - 1) {
        setTimeout(() => {
          setAnimation(false);
          setQuestionPage((prev) => prev + 1);
        }, 400);
      } else if (questionPage === questionsQuantity - 1) {
        setQuestionPage(questionsQuantity - 1);
        ReactGA.event("finished_quiz");
        setAnimation(false);
        setQuizCompleted(true);
      }
    }
  };
  const handleSelect = (e) => {
    setAnimation(true);
    setBg((prev) => prev + 1);

    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
    validarPage();
  };

  const handleReturn = () => {
    setBg((prev) => prev - 1);
    setQuestionPage((prev) => prev - 1);
  };

  const handleReturnToName = () => {
    setQuizInit(true);
    setQuizView(false);
    setNombre({ campo: "", valido: null });
    localStorage.removeItem("nombre");

    setAnswers({
      answer0: null,
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      answer5: null,
      answer6: null,
    });
    setBg((prev) => prev - 1);
  };

  useEffect(() => {
    if (quizCompleted) {
      setQuizView(false);
      validar();
      if (answers.answer2 === "true2" || answers.answer2 === "true3")
        setAnswers({
          ...answers,
          answer2: "true",
        });
      localStorage.setItem("quiz", JSON.stringify(answers));
      setQuizResult(true);
    }
  }, [answers, quizCompleted]);

  return (
    <>
      {!quizResult && (
        <>
          <QuizBackground
            page={bg}
            clase={`${!animation ? "focus-in faster" : "fade-out"}`}
          />

          <ProgressBar
            questions={questions}
            page={questionPage}
            quiz={quizView}
          />
        </>
      )}

      <section
        className={` ${quizResult ? "quiz_result" : "quiz_main"} ${
          userType === 4 ? "multi" : ""
        } ${!animation ? "slide-up delay-1" : "slide-down"} ${
          quizView ? "quiz_respuestas" : ""
        }`}
      >
        {/* PANTALLA INICIAL */}
        {quizInit && (
          <>
            <section className="welcome ">
              <h2 className="title_big-name_title">Hola ¿Cuál es tu nombre?</h2>
              <h3 className="title_small">
                Ingrese su nombre o apodo a continuación
              </h3>
            </section>
            <form onSubmit={handleSubmit}>
              <div className="input-group fade-in">
                {/*  <input
                  type="text"
                  name="cliente"
                  placeholder="Carlos"
                  onChange={handleNombre}
                  autoComplete="off"
                /> */}
                <Input
                  estado={nombre}
                  setEstado={setNombre}
                  type="text"
                  label="Carlos"
                  name="name"
                  expresionRegular={expresiones.nombre}
                  leyendaError="Debes ingresar tu nombre, no se admiten caracteres especiales ni espacios en blanco"
                  oneWord={true}
                />
              </div>
              <section className="buttons-cont">
                <AppButton
                  clase="app-back quiz-button"
                  type="button"
                  icono={faHome}
                  accion={() => {
                    navigate("/landing");
                  }}
                />
                <AppButton
                  type="submit"
                  clase="app-back quiz-button"
                  icono={faArrowRight}
                />
          
              </section>
              {/*  <button type="submit" className="quiz-continue">
                <FontAwesomeIcon icon={faArrowRight} />
              </button> */}
            </form>
            {emptyName && (
              <p className="subtitle-message_error">
                Debes ingresar un nombre válido para continuar
              </p>
            )}
          </>
        )}
        {/* PANTALLA DE PREGUNTAS */}

        {quizView && (
          <>
            <section className="welcome">
              <h1 className="title_big-name_title ">
                {questions[`q${questionPage}`].texto}
              </h1>

              <h3 className="title_small">
                {questions[`q${questionPage}`].subtitle}
              </h3>
            </section>
            <section className="respuestas-cont ">
              <div>
                <input
                  type="radio"
                  name={Object.keys(answers)[`${questionPage}`]}
                  value="true"
                  onClick={handleSelect}
                  readOnly
                  checked={Object.values(answers)[`${questionPage}`] === "true"}
                />
                <label className="radio-label">
                  {questions[`q${questionPage}`].respuesta1}
                </label>
              </div>

              {questionPage === 2 && (
                <>
                  <div>
                    <input
                      type="radio"
                      name={Object.keys(answers)[`${questionPage}`]}
                      value="true2"
                      readOnly
                      onClick={handleSelect}
                      checked={
                        Object.values(answers)[`${questionPage}`] === "true2"
                      }
                    />
                    <label className="radio-label">
                      {questions[`q${questionPage}`].respuesta3}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name={Object.keys(answers)[`${questionPage}`]}
                      value="true3"
                      readOnly
                      onClick={handleSelect}
                      checked={
                        Object.values(answers)[`${questionPage}`] === "true3"
                      }
                    />
                    <label className="radio-label">
                      {questions[`q${questionPage}`].respuesta4}
                    </label>
                  </div>
                </>
              )}

              <div>
                <input
                  type="radio"
                  name={Object.keys(answers)[`${questionPage}`]}
                  value="false"
                  readOnly
                  onClick={handleSelect}
                  checked={
                    Object.values(answers)[`${questionPage}`] === "false"
                  }
                />
                <label className="radio-label">
                  {questions[`q${questionPage}`].respuesta2}
                </label>
              </div>
            </section>
            <section className="return">
              {questionPage === 0 && (

                <AppButton clase="app-back" icono={faArrowLeft} accion={handleReturnToName}/>
              
              )}
              {questionPage > 0 && (
                 <AppButton clase="app-back" icono={faArrowLeft} accion={handleReturn}/>
               /*  <button
                  className="quiz-continue prev-question"
                  onClick={handleReturn}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button> */
              )}
            </section>
          </>
        )}
        {/* PANTALLA DE RESULTADOS */}
        {quizResult && (
          <>
            {userType === 0 && (
              <>
                <img
                  src={`../../assets/quizresult-${userType}.jpg`}
                  alt="Imagen motivadora"
                  className="fade-in"
                />
                <section className="welcome">
                  <h2 className="title_big-name_title fade-in">
                    Vemos que no estás experimentando típicos escenarios de
                    ansiedad y/o depresión {nombre.campo}.{" "}
                  </h2>
                  <p className="title_small result fade-in delay-2">
                    Es probable que tu limitación no esté ligada a un caso de
                    ansiedad o depresión. A continuación tendrás otras opciones
                    que pueden relacionarse con tu caso.
                  </p>
                </section>
              </>
            )}

            {userType === 1 && (
              <>
                <img
                  src={`../../assets/quizresult-${userType}.jpg`}
                  alt="Imagen motivadora"
                  className="fade-in"
                />
                <section className="welcome">
                  <h2 className="title_big-name_title fade-in">
                    ¡Donde va el foco, fluye la energía!
                  </h2>
                  <p className="title_small result fade-in delay-2">
                    {nombre.campo}, es probable que se estén formando estados de
                    ansiedad y/o depresión, es recomendable actuar para evitar
                    que pierdas tu energía vital. ¡No dejes para mañana lo que
                    puedes hacer ahora!
                  </p>
                </section>
              </>
            )}
            {userType === 2 && (
              <>
                <img
                  src={`../../assets/quizresult-${userType}.jpg`}
                  alt="Imagen motivadora"
                  className="fade-in"
                />
                <section className="welcome">
                  <h2 className="title_big-name_title fade-in ">
                    ¡Las emociones no siempre son fáciles de manejar!
                  </h2>
                  <p className="title_small result fade-in delay-2">
                    {nombre.campo}, hemos detectado que el escenario de
                    ansiedad/depresión es altamente probable que se esté
                    manifestando. Aceptar que tienes un problema es el primer
                    paso para su solución.
                  </p>
                </section>
              </>
            )}

            <>
              <p
                className={`subtitle-message_general m-result fade-in ${
                  userType === 0 ? "hidden" : null
                }`}
              >
                ¡No te preocupes, te acompañaremos en todo el proceso!
              </p>

              {userType !== 0 ? (
                <AppButton clase="primary-action fade-in" texto={["¡QUIERO",<br key="2"/> ,"EMPEZAR!"]} accion={toSignUp}/>
               
              ) : (
                <AppButton clase="primary-action fade-in" texto="CONTINUAR" accion={toSuggest}/>

              /*   <button onClick={toSuggest} className="begin fade-in">
                  CONTINUAR
                </button> */
              )}
              <AppButton clase="retake fade-in" accion={handleRetake} icono={faRotateRight} texto={` REHACER QUIZ`}/>
            
            </>
          </>
        )}
      </section>
    </>
  );
};

export default Quiz;
