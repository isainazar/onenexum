import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  estado,
  setEstado,
  label,
  type,
  name,
  leyendaError,
  expresionRegular,
  minimo,
  maximo,
  oneWord,
}) => {
  const handleChange = (e) => {
    setEstado({ ...estado, campo: e.target.value });
  };

  const fecha = (e) => {
    const date = e.target.value;
    const currentYear = new Date().getFullYear();
    const newDate = date.slice(0, 4);
    if (newDate < 1940 || newDate > currentYear - 15) {
      setEstado({ ...estado, valido: "false" });
    }
  };

  const validacion = (e) => {
    if (!oneWord) {
      if (expresionRegular) {
        if (expresionRegular.test(estado.campo)) {
          setEstado({ ...estado, valido: "true" });
          if (e.target.type === "date") {
            fecha(e);
          }
        } else {
          setEstado({ ...estado, valido: "false" });
        }
      }
    } else {
      if (expresionRegular) {
        if (expresionRegular.test(estado.campo)) {
          let intro = estado.campo;
          let words = intro.split(" ");
          if (words.length > 1) {
            setEstado({ ...estado, valido: "false" });
          } else {
            setEstado({ ...estado, valido: "true" });
          }
          if (e.target.type === "date") {
            fecha(e);
          }
        } else {
          setEstado({ ...estado, valido: "false" });
        }
      }
    }
  };
  const [pw, setPwView] = useState("password");
  const handlePwView = () => {
    if (pw === "password") {
      setPwView("text");
    } else {
      setPwView("password");
    }
  };

  return (
    <>
      <section
        className={`input-group  ${
          estado.valido === "true" ? "input-success" : null
        } ${estado.valido === "false" ? "input-error" : null}  `}
      >
        {/*  <label htmlFor={name}>{label}</label> */}
        <input
          placeholder={label}
          type={type != "password" ? type : pw}
          name={name}
          id={name}
          key={name}
          value={estado.campo}
          onChange={handleChange}
          onKeyUp={validacion} //se ejecuta cuanto toca una tecla
          onBlur={validacion} //se ejecuta cuando cliqueo afuera
          min={minimo ? minimo : ""}
          max={maximo ? maximo : ""}

        />
        {type === "password" && (
          <a onClick={handlePwView}>
            {pw === "password" ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </a>
        )}
        {estado.valido === "false" && (
          <p className="subtitle-message_error subtitle-message_error--input">
            {leyendaError}
          </p>
        )}
      </section>
    </>
  );
};

export default Input;
