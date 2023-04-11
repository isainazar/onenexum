import React from "react";

const InputApp = ({
  name,
  label,
  estado,
  setEstado,
  expresionRegular,
  type,
  minimo,
  placeholder,
  read,
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
  };
  return (
    <>
      <div className="input-app">
        <label>{label}</label>
        {!read ? (
          <input
            type={type}
            onChange={handleChange}
            value={estado.campo}
            onKeyUp={validacion}
            min={minimo ? minimo : ""}
            name={name}
            key={name}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            onChange={handleChange}
            value={estado.campo}
         
            name={name}
            key={name}
            placeholder={placeholder}
            readOnly
          />
        )}
      </div>
    </>
  );
};

export default InputApp;
