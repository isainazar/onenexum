import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const Select = ({
  name,
  name_region,
  label,
  label_region,
  estado,
  estado_region,
  setEstado,
  setEstado_region,
  tipo,
}) => {
  const genders = [
    "Selecciona una opción",
    "Masculino",
    "Femenino",
    "Binario",
    "Otro",
  ];
  const civilStatus = [
    "Selecciona una opción",
    "Soltero/a",
    "Casado/a",
    "Viudo/a",
    "Divorciado/a"
  ]

  function countrySelect(val) {
    if (val !== "") setEstado({ ...estado, campo: val, valido: "true" });
    else setEstado({ ...estado, campo: val, valido: "false" });
  }
  function regionSelect(val) {
    if (val !== "") setEstado_region({ ...estado, campo: val, valido: "true" });
    else setEstado_region({ ...estado, campo: val, valido: "false" });
  }

  const handleChange = (e) => {
    if (e.target.value !== genders[0])
      setEstado({ ...estado, campo: e.target.value, valido: "true" });
    else setEstado({ ...estado, campo: "", valido: "false" });
  };
  return (
    <>
      {tipo === "country" && (
        <>
          <div className="input-app">
            <label className="select-label">{label}</label>
            <CountryDropdown
              name={name}
              id={name}
              value={estado.campo}
              onChange={(val) => countrySelect(val)}
              key={name}
              defaultOptionLabel="Selecciona una opción"
            ></CountryDropdown>
          </div>
          <div className="input-app">
            <label className="select-label">{label_region}</label>
            <RegionDropdown
              name={name_region}
              id={name_region}
              country={estado.campo}
              value={estado_region.campo}
              onChange={(val) => regionSelect(val)}
              key={name_region}
              defaultOptionLabel="Selecciona una opción"
            ></RegionDropdown>
          </div>
        </>
      )}
      {tipo === "gender" && (
        <div className="input-app">
          <label className="select-label">{label}</label>
          <select onChange={handleChange} name={name} id={name} key={name}>
            {genders.map((gen) => {
              return (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              );
            })}
          </select>
        </div>
        // </section>
      )}
      {tipo === "civil" && (
        <div className="input-app">
          <label className="select-label">{label}</label>
          <select onChange={handleChange} name={name} id={name} key={name}>
            {civilStatus.map((gen) => {
              return (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              );
            })}
          </select>
        </div>
        // </section>
      )}
    </>
  );
};

export default Select;
