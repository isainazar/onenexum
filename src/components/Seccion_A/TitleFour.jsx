import React, { useEffect, useRef, useState } from "react";
import { favList } from "../../helpers/favList";
import useFavoritos from "../../helpers/hooks/useFavoritos";

const TitleFour = () => {
 
  const {checkFav, checkFavTrue,favsTrue , postFav} = useFavoritos();
  useEffect(() => {
    checkFav();
  }, []);

  return (
    <>
      <p>
        En los últimos años se ha hablado continuamente sobre el impacto de la
        vida moderna, las redes sociales y, más recientemente, la pandemia del
        Covid-19 en la salud mental de la población. Pero este fenómeno no es
        nuevo.
      </p>
      <p>
        Tanto la ansiedad como la depresión son formas de reaccionar ante
        eventos, externos o internos. Si ese evento lo interpretamos como una
        amenaza, se disparará nuestro sistema de alerta o ansiedad, mientras
        que, si lo percibimos como una pérdida o fallo, es probable que se
        active el sistema de conservación de energía que dará lugar a la
        depresión.
      </p>
      <p>
        En términos generales, la ansiedad es una emoción que aparece cuando te
        sientes amenazado por un peligro, que puede ser tanto externo (algo que
        no está bajo nuestro control) como interno (cosas que sí están bajo
        nuestro control). El miedo es el sentimiento prevalente. En el caso de
        la depresión, el sentimiento preponderante es la tristeza.
      </p>
      <p>
        Sin embargo, es absolutamente normal sentir ansiedad en ciertos momentos
        puntuales, importantes para nuestra vida: minutos antes de un examen,
        cuando llega del día de tu boda, ante la llegada de un bebé, en una
        entrevista de trabajo, cuando hay que tomar una decisión inesperada,
        antes de hablar en público o tras una ruptura sentimental. Aquí la
        ansiedad cumple su función adaptativa: nos hace estar alerta,
        ayudándonos a ser más productivos; nos permite prepararnos para hacer
        frente a la situación. En estos casos, pasa sin más y no es un motivo de
        preocupación.
      </p>
      <p>
        En el caso de la depresión, como ya hemos dicho, la tristeza es su marca
        indeleble. Pero no hay que confundir la tristeza pasajera o puntual
        frente a un evento. Todos nos hemos sentido, alguna vez, tristes por la
        pérdida de un ser querido, un despido o una ruptura sentimental, pero si
        estos sentimientos no son pasajeros ni disminuyen con el tiempo, pueden
        derivar en un problema más grave que debe tratarse cuanto antes.
      </p>
      <p>
        Estas son las características más comunes que experimenta una persona
        cuando sufre un trastorno de ansiedad. Puedes ir seleccionando aquellos
        ítems que identifiques como síntomas que has tenido o tienes en el
        presente.
      </p>
      <ul>
        <li>Tensión, nerviosismo y/o agitación</li>
        <li>Hiperventilación</li>
        <li>Sensación constante de peligro inminente</li>
        <li>Sensación de pánico</li>
        <li>Cansancio o debilitamiento</li>
        <li>Sudoración</li>
        <li>Temblores</li>
        <li>Problemas gastrointestinales</li>
        <li>Problemas de concentración</li>
        <li>Dificultad para conciliar el sueño</li>
        <li>Evitar situaciones que puedan generarle ansiedad</li>
        <li>Rumiar pensamientos</li>
      </ul>
      <p>
        Es importante destacar que para un diagnóstico del Trastorno de Ansiedad
        Generalizada (TAG), los síntomas anteriormente nombrados se tienen que
        haber dado durante al menos un periodo de 6 meses, durante todos los
        días. La diferencia entre las preocupaciones de las personas con o sin
        este trastorno no está en la preocupación en sí, sino en la intensidad,
        frecuencia y duración de la misma, y en la incapacidad de controlar esas
        emociones y pensamientos.
      </p>
      <p>
        Para hablar de depresión, y por ende de enfermedad, hace falta que estos
        sentimientos se presenten de forma regular o continua durante un período
        superior a dos semanas, y que causen un malestar importante en una o
        varias áreas de la vida cotidiana (dificultad o imposibilidad de
        levantarse, de ir a trabajar, salir a hacer las compras).
      </p>
      <p>
        Ahora vamos a conocer los síntomas que puede experimentar una persona
        con depresión. Igualmente puedes anotar aquellos que sientes presentes
        en tu vida actualmente:
      </p>
      <ul>
        <li>Pérdida de interés o desgana en realizar cualquier actividad</li>
        <li>
          Sueño excesivo o, por lo contrario, dificultad para conciliar el sueño
        </li>
        <li>Cansancio</li>
        <li>Estado de ánimo bajo o irritable</li>
        <li>Excesivo o poco apetito</li>
        <li>Pérdida o aumento de peso</li>
        <li>Sentir abandono o desesperanza</li>
        <li>Sentimientos de culpabilidad</li>
        <li>Sentir odio hacia ti mismo</li>
        <li>Pensamientos recurrentes suicidas o en relación con la muerte</li>
      </ul>
      <p>
        Ahora, podemos ver en la siguiente tabla las formas que hay de
        diferenciar una de otra:
      </p>
      <section className="fav-tool">
        <img
          src="../../../assets/favbutton.svg"
          className={`fav_button ${
            favsTrue.current ? checkFavTrue(favList[0].favId) : ""
          }`}
          onClick={() => {
            postFav(favList[0].favId, favList[0].url);
          }}
        />
        <img src={favList[0].url} alt="tabla ansiedad vs depresión" />
      </section>
    </>
  );
};

export default TitleFour;
