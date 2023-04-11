import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../Background/Background";
import CardHeader from "../CardHeader";
import AppButton from "../AppButton";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const B_EX_1_EXAMPLE = () => {
  const [steps, setSteps] = useState(0);
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <section className="main-view">
        <Background
          clase="E1"
          completado={complete}
          setCompletado={setComplete}
          steps={steps}
          setSteps={setSteps}
        />

        <section
          className={`content ejercicios-content section-b ex-1 ex-1-page-${steps}`}
        >
          {steps === 0 && (
            <>
              <CardHeader titulo="EJERCICIO ESTOICO" clase="justify-center" />
              <section className="step-info">
                <h2 className="title_exercise">Paso</h2>
                <div className="indicador">
                  <h2 className="numbers">1</h2>
                </div>
              </section>
              <section className="exercise-description">
                <p>
                  Realiza tus propias anotaciones. Responder las siguientes
                  preguntas también es una guía para que practiques el desapego.
                  El desapego es la base del autocuidado; es la capacidad de
                  poder desengancharse, desvincularse y no aferrarse a algo que
                  genera cierta dependencia.
                </p>
              </section>
              <section className="box">
                <h2 className="title_exercise">
                  ¿Qué cosa que consideras muy relevante resolver depende de ti
                  y que no?
                </h2>
                <AppButton
                  clase="primary-action"
                  texto="¡Veamos un ejemplo!"
                  accion={() => {
                    setSteps(1);
                  }}
                />
              </section>
              <AppButton
                clase="app-back"
                icono={faArrowLeft}
                accion={() => {
                  navigate(-1);
                }}
              />
            </>
          )}
          {steps === 1 && (
            <>
              <h2 className="title_exercise">
                ¿Qué cosa que consideras muy relevante resolver depende de ti y
                que no?
              </h2>
              <section className="box box_ex">
                <div className="box-header first">
                  <h2 className="box-title">
                    {" "}
                    Situaciones que <strong>dependen</strong> de mi
                  </h2>
                </div>
                <p className="example">Ej: Siento baja autoestima</p>
                <div className="box-separador">
                  <div className="separador-inner"></div>
                </div>
                <div className="box-header second">
                  <h2 className="box-title ">
                    Situaciones que <strong>no dependen</strong> de mi
                  </h2>
                </div>
                <p className="example">
                  Ej: Siento que no le caigo bien a los demás
                </p>
              </section>
              <section className="exercise-description middle">
                <p>
                  <strong>¡Recuerda!</strong>
                </p>
              </section>
              <section className="exercise-description">
                <p>
                  Se conciso con las situaciones que deseas plantear. Mientras
                  más directo ataques el problema, más facilidad en encontrar
                  respuestas tendrás.
                </p>
              </section>
              <section className="buttons-cont">
                <AppButton clase="app-back" icono={faArrowLeft} />
                <AppButton
                  clase="primary-action"
                  texto="SIGUIENTE PASO"
                  accion={() => {
                    setSteps(2);
                  }}
                />
              </section>
            </>
          )}
          {steps === 2 && (
            <>
              <>
                <CardHeader titulo="EJERCICIO ESTOICO" clase="justify-center" />
                <section className="step-info">
                  <h2 className="title_exercise">Paso</h2>
                  <div className="indicador">
                    <h2 className="numbers">2</h2>
                  </div>
                </section>
                <h2 className="title_exercise">
                  Aquellas situaciones que están fuera de tu control dejalas de
                  lado, concéntrate en lo que verdaderamente importa
                </h2>
                <section className="exercise-description">
                  <p>
                    Ten en cuenta las situaciones en las que sí puedes hacer
                    algo. Escribe qué puedes cambiar de esa situación y qué
                    cosas quedan fuera de tu alcance. Examina tus propios
                    sentimientos y pensamientos, y analiza si eso es adecuado
                    para tal situación. Recuerda: Si quieres obtener nuevos
                    resultados y experimentar un cambio positivo tienes que
                    cambiar la forma de pensar, decir y hacer las cosas. Nada
                    cambiará si repites los mismos patrones una y otra vez
                  </p>
                </section>
                <section className="box">
                  <h2 className="title_exercise">
                    ¿Qué puedo resolver y qué no sobre esa situación?
                  </h2>
                  <AppButton
                    clase="primary-action"
                    texto="¡Veamos un ejemplo!"
                    accion={() => {
                      setSteps(3);
                    }}
                  />
                </section>
                <AppButton
                  clase="app-back"
                  icono={faArrowLeft}
                  accion={() => {
                    navigate(-1);
                  }}
                />
              </>
            </>
          )}
          {steps === 3 && (
            <>
              <h2 className="title_exercise">
                ¿Qué cosas puedo cambiar y qué queda fuera de mi alcance sobre
                esa situación?
              </h2>
              <section className="box box_ex">
                <div className="box-header first">
                  <h2 className="box-title">
                    {" "}
                    Lo que <strong>si puedo</strong> resolver
                  </h2>
                </div>
                <p className="example">
                  Ej: Cómo me percibo a mi mismo, como me trato y como me hablo.
                </p>
                <div className="box-separador">
                  <div className="separador-inner"></div>
                </div>
                <div className="box-header second">
                  <h2 className="box-title ">
                    Lo que <strong>no puedo</strong> resolver
                  </h2>
                </div>
                <p className="example">
                  Ej: No puedo hacer que los demás me adulen para incrementar mi
                  autoestima.
                </p>
              </section>
              <section className="exercise-description middle">
                <p>
                  <strong>¡Lo tienes!</strong>
                </p>
              </section>
              <section className="exercise-description">
                <p>
                  Ahora que sabes cómo funciona el ejercicio, te proponemos
                  plantear una situación propia y construir respuestas en base a
                  lo que te mostramos en el ejemplo.
                </p>
              </section>
              <section className="buttons-cont">
                <AppButton clase="app-back" icono={faArrowLeft} />
                <AppButton
                  clase="primary-action"
                  texto="INICIAR"
                  accion={() => {
                   navigate('/seccionB/ex1')
                  }}
                />
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default B_EX_1_EXAMPLE;
