import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import Background from "../Background/Background";

const JournalDecisions = () => {
const navigate = useNavigate();
  return (
    <section className="main-view">
      <Background clase="bg-decisions" />
      <section className="content decisions">
        <h2 className="title">¿Cómo tomar decisiones?</h2>
        <p className="explain decisions_p">
          Sabemos que muchas veces tomar decisiones no es algo fácil. La
          incapacidad de tomarlas, muchas veces tiene que ver con una baja
          autoestima. 
        </p>
        <p className="explain decisions_p">
          ¡No te preocupes! Estamos para ayudarte a trascender esa barrera a
          través de una técnica muy simple. Ten en cuenta además que tomar una
          buena decisión, en ocasiones implica atravesar sensaciones
          desagradables y emociones adversas.
        </p>
        <p className="explain decisions_p">La técnica de la que hablamos fue formulada por Suzy Welch, escritora y periodista, dice haber hallado una receta basada en solo tres preguntas que le ha permitido salir siempre airosa de una toma de decisión difícil.</p>
        <p className="explain decisions_p">
        Lo que se pretende es emplear una estrategia mental que permita distanciar las emociones que se adueñan de nosotros en el corto plazo. Nos ayuda a decidir si vale la pena soportar esa agonía a corto plazo, en contra de nuestras metas más profundas y relevantes a largo plazo.
        </p>

        <h3>¡Puedes probarla a continuación!</h3>
        <section className="buttons-cont">
            <AppButton clase="app-back" icono={faArrowLeft} accion={()=>{navigate(-1)}}/>
            <AppButton clase="primary-action" texto="COMENZAR" accion={()=>{navigate("/user/journal_decisions&q")}}/>
        </section>
      </section>
    </section>
  );
};

export default JournalDecisions;
