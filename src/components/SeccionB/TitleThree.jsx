import React, { useEffect } from "react";
import { favList } from "../../helpers/favList";
import useFavoritos from "../../helpers/hooks/useFavoritos";

const TitleThree = () => {
  const { checkFav, checkFavTrue, favsTrue , postFav } = useFavoritos();
  useEffect(() => {
    checkFav();
  }, []);
  return (
    <>
      <p>
        La culpa es sin duda un gran generador de estados ansiosos y/o
        depresivos. En esta parte te proponemos revisar si consideras que tienes
        exigencias e imposiciones excesivas. Lo que perturba a uno mismo/a son
        aquellos “tengo que”, “debería” y esos “tendría que”. Todas estas
        exigencias que nos hacemos frecuentemente son la base de la culpa. Lo
        que logramos con ello es crear un estado limitante que nos aleja cada
        día más de la verdadera felicidad. Debes detectar cuáles son tus ideas
        irracionales para que puedas tener un pensamiento despejado y una vida
        despreocupada.
      </p>
      <p>
        La clave tiene como primer paso analizar los propios. Debes aprender a
        diferenciar qué pensamientos son saludables y apropiados para una
        ocasión determinada, de aquellos pensamientos que generan un estrés
        desmedido y ansiedad.
      </p>
      <section className="fav-tool">
        <img
          src="../../../assets/favbutton.svg"
          className={`fav_button ${
            favsTrue.current ? checkFavTrue(favList[2].favId) : ""
          }`}
          onClick={() => {
            postFav(favList[2].favId, favList[2].url);
          }}
        />
        <img src={favList[2].url} alt="tabla de explicacion" />
      </section>
      <p>
        Utiliza los ejemplos que te brindamos para aplicarlos a tu día a día de
        la manera más práctica posible. Analiza tus “debería” y “tengo que”;
        fíjate si te generan una gran molestia, culpa y ansiedad, y si son
        pensamientos irracionales. Cuando los detectes, haz la inversión que
        hemos hecho en el ejemplo, aplicada a tu caso por supuesto, para que ese
        pensamiento se convierta en racional y puedas eliminar instantáneamente
        tu malestar.
      </p>
      <p>
        <strong>¿Cómo notarás avances positivos?</strong>
      </p>
      <p>
        Los cambios positivos que vayas alcanzando te darán un mejor
        conocimiento de ti mismo y aprenderás a integrar tanto las cosas de ti
        mismo que te gustan como las que no.
      </p>
      <p>
        Generalmente las personas comienzan a sentir que el proceso avanza
        porque se sienten más seguras, confiadas consigo mismas y en sus
        relaciones.
      </p>
      <p>
        Cuando el abordaje psicoterapéutico no se centra exclusivamente en el
        síntoma, sino en sus causas, este cambio es tan profundo que de manera
        natural comenzarás a realizarlo e incluso te percates del cambio una vez
        que ya lo estás haciendo.
      </p>
      <p>
        Sin embargo, pese a lo bonito que puede ser el proceso de crecimiento y,
        sobre todo, los resultados alcanzados, también nos gustaria avisarte de
        su dureza en ocasiones. Así, el proceso terapéutico pasará por fases, de
        ilusión, de desilusión, de alegría, de tristeza, de calma, de ansiedad.
        Rara vez la terapia será un proceso lineal, incluso habrá ocasiones en
        las que para mejorar primero has de empeorar.
      </p>
      <p>
        Estos momentos son normales y necesarios en la terapia, incluso en
        muchas ocasiones son indicativos de que está avanzando por el camino
        adecuado, que está funcionando. Pero no por eso serán menos duros.
      </p>
      <p>
        El espacio de terapia es tu espacio y los resultados alcanzados son
        tuyos y para tu bienestar.
      </p>
    </>
  );
};

export default TitleThree;
