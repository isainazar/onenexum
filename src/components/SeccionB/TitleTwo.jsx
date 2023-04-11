import React, { useEffect } from "react";
import { favList } from "../../helpers/favList";
import useFavoritos from "../../helpers/hooks/useFavoritos";

const TitleTwo = () => {
  const { checkFav, checkFavTrue, favsTrue, postFav } = useFavoritos();
  useEffect(() => {
    checkFav();
  }, []);
  return (
    <>
      <p>
        Intenta dejar de darle vueltas al mismo tema una y otra vez y piensa en
        cosas diferentes. Desvía la atención. Inténtalo y verás cómo lo
        consigues.
      </p>
      <section className="info-section">
        <img
          src="https://res.cloudinary.com/dt3ggg7t5/image/upload/v1679337622/logo-sin-texto_guvju1.svg"
          alt="logo one nexum"
        />
        <p className="highlight-paragraph">
          “Donde va el foco, fluye la energía. Es por eso que siempre debemos
          enfocarnos en lo que deseamos ver, en lugar de preocuparnos por lo que
          no queremos ver”
        </p>
      </section>
      <p className="highlight-paragraph">¿Cómo lo llevo a la práctica?</p>
      <br />
      <p>
        No hables del mismo tema constantemente. A veces las cosas tienen la
        importancia que nosotros le damos, ni más, ni menos. Haz una lista de
        los temas que más abordas y que sientes que traen ansiedad, tristeza,
        desesperanza u otro sentimiento negativo a tu vida. Si puedes, anota el
        tiempo que le dedicas a esos temas, pensándolos o hablándolos con otras
        personas, o simplemente escríbelos siguiendo el orden de importancia que
        le has dado hasta ese momento. Enseguida escribe un tema o pensamiento
        que sea opuesto o alternativo y tenlo presente para usarlo siempre que
        lo necesites.
      </p>
      <br />
      <p className="highlight-paragraph italic">Ejemplo:</p>
      <br />
      <p>
        <em>
          ¿Estás de nuevo centrándote en lo que te provoca ansiedad? ¡Para!
          Prueba a desviar la atención y llevar tus pensamientos hacia otros
          focos más distendidos y positivos.
        </em>
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
        <img src={favList[1].url} alt="tabla de ejemplo" />
      </section>
    </>
  );
};

export default TitleTwo;
