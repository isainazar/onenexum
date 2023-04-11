import React, { useEffect, useState } from "react";
import { favList } from "../../helpers/favList";
import useFavoritos from "../../helpers/hooks/useFavoritos";

const TitleOne = () => {
 
  const { checkFav, checkFavTrue, favsTrue, postFav } = useFavoritos();
  useEffect(() => {
    checkFav();
  }, []);
  return (
    <>
      <p>
        No busques hacer lo que todos hacen, aprende a ser tú mismo/a. Ser
        auténtico/a ayudará a reducir tu ansiedad y probabilidades de depresión.
        Piensa en mentes extraordinarias como Einstein quien en una oportunidad
        dijo:
      </p>
      <section className="fav-tool">
      <img
          src="../../../assets/favbutton.svg"
          className={`fav_button ${
            favsTrue.current ? checkFavTrue(favList[1].favId) : ""
          }`}
          onClick={() => {
            postFav(favList[1].favId, favList[1].url);
          }}
        />
        <img src={favList[1].url} alt="Albert Einstein" />
      </section>
      <p>
        Piensa en Edison o en Elon Musk, quien está revolucionando el mundo.
        Esas ideas, en su momento cuando fueron planteadas, eran consideradas
        irracionales, y hoy en día están generando un gran impacto. Lánzate a la
        incertidumbre y convierte tu ansiedad en algo positivo, alinéala a tus
        valores y busca esos lugares donde tus virtudes sean recompensadas y no
        castigadas, Concéntrate en quien realmente eres y en lo que te llena, no
        busques un complemento falso en amistades tóxicas, en cumplir los sueños
        de los demás, en el qué dirán o en obsesionarte con las redes sociales
        donde lo que se ve es pura falsedad. Esa falsedad justamente genera una
        especie de dopamina que tu cerebro recibe al ver “likes de Instagram”,
        “retweets de Twitter” o “mensajes de WhatsApp”. ¿Realmente crees que eso
        es lo que necesitas? Debes buscar conexiones más reales y significativas
        con los demás y por sobre todo contigo mismo.
      </p>
      <p>
        Siguiendo el concepto que se viene tratando, es importante que sepas que
        uno de los peores hábitos que puedes tener es compararte con los demás.
        Es algo muy destructivo.
      </p>
      <p>
        Este hábito fomenta la ansiedad negativa y la depresión. ¿Qué sucede
        cuando te comparas? Lo que logra la comparación es que exageres tus
        inseguridades. Esto es lo que pasa con las redes sociales también;
        empiezas a actuar y sentir en base a vidas ajenas, que muchas veces
        reflejan una falsa realidad con propósitos vacíos.
      </p>
      <p>
        ¿Cuántas personas muestran tener una vida “envidiable y perfecta” y en
        la vida real lo que sienten es una miseria profunda? Busca conexiones
        significativas y amigos que te admiren y se alegren por tus logros y
        viceversa. Procura enriquecer tus fortalezas en vez de permitir que las
        fortalezas del otro te intimiden y paralicen. Es importante que
        comiences a vivir de una manera más auténtica y te abras a vivir nuevas
        experiencias, logrando trascender la incertidumbre o el miedo al
        arrepentimiento. Ten en cuenta lo que dijo Anthony Hopkins, reconocido
        actor, productor, director y compositor a nivel mundial, en una
        entrevista cuando le preguntaron si se arrepentía de algo en su vida.
        Respondió:
      </p>
      <p>
        “No, no tengo tiempo para el arrepentimiento, hay que continuar nuestro
        camino aceptándonos por quien realmente somos y no pensar en aquello que
        debemos ser. Me he aceptado a mí mismo como soy y no me identifico con
        el pensamiento de lo que debería ser, eso es una mentira. Soy un
        pecador, he hecho cosas buenas y cosas malas y me he perdonado a mí
        mismo y seguí transitando mi camino”.
      </p>
      <p>
        En la vida siempre encontrarás personas que intenten imponerte un camino
        diciendo lo que deberías hacer o cómo deberías pensar. Si tienes el
        poder de ser tú mismo, de ser auténtico, lo utilizarás no para dominar a
        los demás, sino para impedir que otros te dominen y te digan por dónde
        ir. No le dediques tiempo a las bajas energías, a sentirte culpable y a
        vivir la vida de los demás. Eso crea ansiedad y depresión.
      </p>
      <section>
        <img src="../../../assets/comparacion.svg" alt="Lápices de colores" />
      </section>
    </>
  );
};

export default TitleOne;
