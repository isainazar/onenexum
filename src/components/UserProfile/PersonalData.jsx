import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import expresiones from "../../helpers/expresiones";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";
import useUserUpdate from "../../helpers/hooks/useUserUpdate";
import AppButton from "../AppButton";
import InputApp from "../Inputs/InputApp";
import Select from "../Inputs/Select";
import ProfileIcon from "./ProfileIcon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PersonalData = () => {
  const navigate = useNavigate();
  const { data, UserDispatch } = useContext(UserContext);
  const [name, setName] = useState({ campo: "", valido: false });
  const [gender, setGender] = useState({ campo: "", valido: false });
  const [dob, setDob] = useState({ campo: "", valido: false });
  const [country, setCountry] = useState({ campo: "", valido: false });
  const [region, setRegion] = useState({ campo: "", valido: false });
  const [civilStatus, setCivilStatus] = useState({ campo: "", valido: false });
  const { updateInfo } = useEspacioInfo();
  const { getUser } = useUserUpdate({ UserDispatch });

  const buildUser = () => {
    let nombre;
    if (name.campo === "") {
      nombre = data.usuario.name;
    } else {
      nombre = name.campo;
    }
    return {
      user: Number(localStorage.UID),
      name: nombre,
      gender: gender.campo,
      dob: dob.campo,
      country: country.campo,
      region: region.campo,
      relationship: civilStatus.campo,
    };
  };
  console.log(data.usuario)

  const checkDob = () => {
    const fechaOriginal = data.usuario.dob;
    const fecha = new Date(fechaOriginal);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // los meses en JavaScript comienzan en 0
    const anio = fecha.getFullYear();
    const nuevaFecha = `${dia < 10 ? "0" : ""}${dia}-${
      mes < 10 ? "0" : ""
    }${mes}-${anio}`;
    return nuevaFecha;
  };
  const sendData = async () => {
    const datos = buildUser();
    console.log(datos);
    await updateInfo("user/data", datos, "/user/main");
  };
  const setUser = async () => {
    await getUser();
    setGender({ ...gender, campo: data.usuario.gender });
    setDob({ ...dob, campo: data.usuario.dob });
    setCountry({ ...country, campo: data.usuario.country });
    setRegion({ ...region, campo: data.usuario.region });
    setCivilStatus({...civilStatus,campo:data.usuario.relationship});
  };

  useEffect(() => {
    setUser();
  }, []);

  return (
    <section className="user-secondary personal">
      <h2 className="title_user">Tu espacio personal</h2>
      <div className="exercise-description">
        <p>Completa las casillas con la información requerida.</p>
      </div>
      <ProfileIcon
        imagen="../assets/datos.svg"
        texto="Datos Personales"
        alt="usuario"
      />

      <section className="formulario">
        <InputApp
          type="text"
          expresionRegular={expresiones.nombre}
          estado={name}
          setEstado={setName}
          label="Nombre"
          name="nombre"
          placeholder={data.usuario.name}
        />
        {data.usuario.gender === null || data.usuario.gender === "" ? (
          <Select
            tipo="gender"
            name="gender"
            label="Género"
            estado={gender}
            setEstado={setGender}
          ></Select>
        ) : (
          <InputApp
            type="text"
            label="Género"
            estado={gender}
            setEstado={setGender}
            placeholder={data.usuario.gender}
            read={true}
          />
        )}

        {data.usuario.dob === null || data.usuario.dob === "" ? (
          <InputApp
            type="date"
            expresionRegular={expresiones.fecha}
            estado={dob}
            setEstado={setDob}
            label="Fecha de Nacimiento"
            minimo="1940-01-01"
            name="dob"
          />
        ) : (
          <InputApp
            type="text"
            label="Fecha de Nacimiento"
            estado={dob}
            setEstado={setDob}
            placeholder={checkDob()}
            read={true}
          />
        )}
         {data.usuario.relationship === null || data.usuario.relationship === "" ? (
          <Select
            tipo="civil"
            name="status"
            label="Estado Civil"
            estado={civilStatus}
            setEstado={setCivilStatus}
          ></Select>
        ) : (
          <InputApp
            type="text"
            label="Estado Civil"
            estado={civilStatus}
            setEstado={setCivilStatus}
            placeholder={data.usuario.relationship}
            read={true}
          />
        )}
        {data.usuario.country === null || data.usuario.country === "" ? (
          <Select
            tipo="country"
            name="country"
            label="¿Donde vives?"
            estado={country}
            setEstado={setCountry}
            estado_region={region}
            setEstado_region={setRegion}
            label_region="Región"
          ></Select>
        ) : (
          <>
            <InputApp
              type="text"
              label="¿Donde vives?"
              estado={country}
              setEstado={setCountry}
              placeholder={data.usuario.country}
              read={true}
            />
            <InputApp
              type="text"
              label="Región"
              estado={region}
              setEstado={setRegion}
              placeholder={data.usuario.region}
              read={true}
            />
          </>
        )}
      </section>
      <section className="buttons-cont">
        <AppButton
          clase="app-back"
          icono={faArrowLeft}
          accion={() => {
            navigate(-1);
          }}
        />
        <AppButton clase="primary-action" accion={sendData} texto="FINALIZAR" />
      </section>
    </section>
  );
};

export default PersonalData;
