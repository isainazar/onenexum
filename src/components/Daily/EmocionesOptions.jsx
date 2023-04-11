import React from "react";
import { useRef } from "react";
import {
  emocionesNegativas,
  emocionesPositivas,
} from "../../helpers/emociones";

const EmocionesOptions = ({ primary, secondary, setSecondary, onClick }) => {
  const container = useRef(null);
  const check = (e) => {
    container.current.childNodes[0].classList.remove("selected");
    container.current.childNodes[1].classList.remove("selected");
    container.current.childNodes[2].classList.remove("selected");
    container.current.childNodes[3].classList.remove("selected");
    container.current.childNodes[4]?.classList.remove("selected");

    if (e.target.id === "1") {
      setSecondary(1);
      container.current.childNodes[e.target.id - 1].classList.toggle(
        "selected"
      );
    }
    if (e.target.id === "2") {
      setSecondary(2);
      container.current.childNodes[e.target.id - 1].classList.toggle(
        "selected"
      );
    }
    if (e.target.id === "3") {
      setSecondary(3);
      container.current.childNodes[e.target.id - 1].classList.toggle(
        "selected"
      );
    }
    if (e.target.id === "4") {
      setSecondary(4);
      container.current.childNodes[e.target.id - 1].classList.toggle(
        "selected"
      );
    }

    if (e.target.id === "5") {
      setSecondary(5);
      container.current.childNodes[e.target.id - 1].classList.toggle(
        "selected"
      );
    }
  };
  const checkSelected = (e) => {};
  return (
    <section className="emo-slider" ref={container}>
      {primary.emotion === "good" &&
        emocionesPositivas.map((emo) => {
          return (
            <section
              className={`emotion-var`}
              key={emo.id}
              style={{ color: `${emo.color}`, boxShadow: `${emo.boxShadow}` }}
              id={emo.id}
              onClick={check}
            >
              <img src={emo.url} alt={emo.texto} id={emo.id} />
              <h3 id={emo.id}>{emo.texto}</h3>
            </section>
          );
        })}

      {primary.emotion !== "good" &&
        emocionesNegativas.map((emo) => {
          return (
            <section
              className={`emotion-var`}
              key={emo.id}
              style={{ color: `${emo.color}`, boxShadow: `${emo.boxShadow}` }}
              id={emo.id}
              onClick={check}
            >
              <img src={emo.url} alt={emo.texto} id={emo.id} />
              <h3 id={emo.id}>{emo.texto}</h3>
            </section>
          );
        })}
    </section>
  );
};

export default EmocionesOptions;
