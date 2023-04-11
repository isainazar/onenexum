import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../Background/Background";
import CardHeader from "../CardHeader";
import AppButton from "../AppButton";

import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import { completeExB } from "../../helpers/exercises_actions";
import UserContext from "../../contexts/UserContext";
const B_EX_1 = () => {
  const [steps, setSteps] = useState(0);
  const [complete, setComplete] = useState(false);
  const [expand, setExpand] = useState({ a: false, b: false });
  const [input, setInput] = useState({
    depende: "",
    no_depende: "",
    resuelve: "",
    no_resuelve: "",
  });
  const { data, UserDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [signError, setSignError] = useState({
    error: false,
    message: "Debes completar las respuestas para poder avanzar",
  });

  const handleModalClose = () => {
    setSignError({ ...signError, error: false });
  };

  const fill = (e) => {
    if (e.target.id === "1") {
      setInput({ ...input, depende: e.target.value });
    }
    if (e.target.id === "2") {
      setInput({ ...input, no_depende: e.target.value });
    }
    if (e.target.id === "3") {
      setInput({ ...input, resuelve: e.target.value });
    }
    if (e.target.id === "4") {
      setInput({ ...input, no_resuelve: e.target.value });
    }
  };

  const finish = async () => {
    await completeExB(data, UserDispatch, navigate, 1,true);
    setSteps(3);
  };

  return (
    <>
      <section className={`main-view ${steps === 3 ? "estoico" : ""}`}>
        {steps !== 3 && (
          <>
            <Background
              clase="E1"
              completado={complete}
              setCompletado={setComplete}
              steps={steps}
              setSteps={setSteps}
            />
            <section
              className={`content ejercicios-content section-b ex-1 ex-1-${steps}`}
            >
              {steps === 0 && (
                <>
                  <h2 className="title_exercise marked">Ejercicio estoico</h2>
                  <section className="step-info">
                    <h2 className="title_exercise">Paso</h2>
                    <div className="indicador">
                      <h2 className="numbers">1</h2>
                    </div>
                  </section>

                  <section className="box box_ex box_ex-expanded">
                    <div className="box-header first">
                      <h2 className="box-title">
                        {" "}
                        Situaciones que <strong>dependen</strong> de mi
                      </h2>
                    </div>
                    <textarea value={input.depende} onChange={fill} id="1" />
                    <div className="box-separador">
                      <div className="separador-inner"></div>
                    </div>
                    <div className="box-header second">
                      <h2 className="box-title ">
                        Situaciones que <strong>no dependen</strong> de mi
                      </h2>
                    </div>
                    <textarea value={input.no_depende} onChange={fill} id="2" />
                  </section>
                  <section className="buttons-cont">
                    <AppButton
                      clase="app-back"
                      icono={faArrowLeft}
                      accion={() => {
                        navigate(-1);
                      }}
                    />
                    <AppButton
                      clase="primary-action"
                      texto="SIGUIENTE PASO"
                      accion={() => {
                        if (input.depende === "" || input.no_depende === "") {
                          setSignError({ ...signError, error: true });
                        } else {
                          setSteps(1);
                        }
                      }}
                    />
                  </section>
                  {signError.error && (
                    <Modal
                      signError={signError}
                      success={{ status: false }}
                      handleModalClose={handleModalClose}
                      quizMissing={false}
                      validation={{ status: false }}
                    />
                  )}
                </>
              )}
              {steps === 1 && (
                <>
                  <h2 className="title_exercise marked">Ejercicio estoico</h2>
                  <section className="step-info">
                    <h2 className="title_exercise">Paso</h2>
                    <div className="indicador">
                      <h2 className="numbers">2</h2>
                    </div>
                  </section>

                  <section className="box box_ex box_ex-expanded">
                    <div className="box-header first">
                      <h2 className="box-title">
                        {" "}
                        Lo que <strong>si puedo</strong> resolver
                      </h2>
                    </div>
                    <textarea value={input.resuelve} onChange={fill} id="3" />
                    <div className="box-separador">
                      <div className="separador-inner"></div>
                    </div>
                    <div className="box-header second">
                      <h2 className="box-title ">
                        Lo que <strong>no puedo</strong> resolver
                      </h2>
                    </div>
                    <textarea
                      value={input.no_resuelve}
                      onChange={fill}
                      id="4"
                    />
                  </section>
                  <section className="buttons-cont">
                    <AppButton
                      clase="app-back"
                      icono={faArrowLeft}
                      accion={() => {
                        setSteps(0);
                      }}
                    />
                    <AppButton
                      clase="primary-action"
                      texto="CONTINUAR"
                      accion={() => {
                        if (input.resuelve === "" || input.no_resuelve === "") {
                          setSignError({ ...signError, error: true });
                        } else {
                          setSteps(2);
                        }
                      }}
                    />
                  </section>
                  {signError.error && (
                    <Modal
                      signError={signError}
                      success={{ status: false }}
                      handleModalClose={handleModalClose}
                      quizMissing={false}
                      validation={{ status: false }}
                    />
                  )}
                </>
              )}
              {steps === 2 && (
                <>
                  <h2 className="title_exercise marked">Ejercicio estoico</h2>
                  <h2 className="title_exercise">La situación</h2>
                  <section
                    className={`box box_ex ${
                      expand.a ? "box_ex-expanded" : "box_ex-collapsed"
                    }`}
                  >
                    <div className="box-header first">
                      <h2 className="box-title">
                        {" "}
                        Situaciones que <strong>dependen</strong> de mi
                      </h2>
                    </div>
                    <textarea
                      value={input.depende}
                      className="read_only"
                      readOnly
                    />
                    <div className="box-separador">
                      <div className="separador-inner"></div>
                    </div>
                    <div className="box-header second">
                      <h2 className="box-title ">
                        Situaciones que<strong> no dependen</strong> de mi
                      </h2>
                    </div>
                    <textarea
                      value={input.no_depende}
                      className="read_only"
                      readOnly
                    />
                    <img
                      src="../assets/box-btn.svg"
                      alt="boton"
                      className={expand.a ? "rotar" : ""}
                      onClick={() => {
                        setExpand({ ...expand, a: !expand.a });
                      }}
                    />
                  </section>
                  <h2 className="title_exercise">La resolución</h2>
                  <section
                    className={`box box_ex ${
                      expand.b ? "box_ex-expanded" : "box_ex-collapsed"
                    }`}
                  >
                    <div className="box-header first">
                      <h2 className="box-title">
                        {" "}
                        Lo que <strong>si puedo</strong> resolver
                      </h2>
                    </div>
                    <textarea
                      value={input.resuelve}
                      className="read_only"
                      readOnly
                    />
                    <div className="box-separador">
                      <div className="separador-inner"></div>
                    </div>
                    <div className="box-header second">
                      <h2 className="box-title ">
                        Lo que <strong>no puedo</strong> resolver
                      </h2>
                    </div>
                    <textarea
                      value={input.no_resuelve}
                      className="read_only"
                      readOnly
                    />
                    <img
                      src="../assets/box-btn.svg"
                      alt="boton"
                      className={expand.b ? "rotar" : ""}
                      onClick={() => {
                        setExpand({ ...expand, b: !expand.b });
                      }}
                    />
                  </section>
                  <section className="exercise-description">
                    <p>
                      <strong>Recuerda:</strong> Puedes realizar este ejercicio
                      las veces que quieras, plantea nuevas situaciones y
                      propone posibles soluciones a las cosas que puedas cambiar
                      tu mismo.
                    </p>
                  </section>
                  <section className="buttons-cont">
                    <AppButton
                      clase="app-back"
                      icono={faArrowLeft}
                      accion={() => {
                        setSteps(1);
                      }}
                    />
                    <AppButton
                      clase="primary-action"
                      texto="FINALIZAR"
                      accion={finish}
                    />
                  </section>
                </>
              )}
            </section>
          </>
        )}
        {steps === 3 && (
          <>
            <img src="../../assets/success.gif" alt="check mark" />
            <h2 className="title_exercise marked">¡Completado!</h2>
            <h3 className="title_exercise">
              ¡Muy bien! En este caso has detectado como puedes llevar a la
              práctica aquello que si puedes resolver y depende de ti: En este
              caso:
            </h3>

            <section className="result result-1">
              <span>{input.resuelve}</span>
            </section>
            <p className="exercise-description">
              Recuerda llevarlo a cabo cada vez que irrumpa en tu mente una
              situación negativa y hayas detectado que parte de esa situación
              depende de ti resolver.
            </p>
            <h3 className="title_exercise left">Has detectado a su vez que:</h3>
            <section className="result result-2">
              <span>{input.no_resuelve}</span>
            </section>
            <p className="exercise-description">
              Es algo que no puedes resolver ya que no depende de ti. En este
              caso, deja eso de lado para poder conservar tus energías en
              aquello que vale la pena y tiene solución.
            </p>
            <section className="buttons-cont">
              <AppButton
                icono={faHome}
                clase="app-back"
                accion={() => {
                  navigate("/seccionB/mapa");
                }}
              />
              <AppButton
                clase="primary-action"
                texto={["SIGUIENTE", <br></br>, "EJERCICIO"]}
                accion={() => {
                  navigate("/seccionB/mapa");
                }}
              />
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default B_EX_1;
