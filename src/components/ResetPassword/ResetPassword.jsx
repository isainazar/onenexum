import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Landing/Header";
import Input from "../Inputs/Input";
import expresiones from "../../helpers/expresiones";
import AppButton from "../AppButton";
import Modal from "../Modal/Modal";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";

const Resetpassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState({ campo: "", valido: null });
  const [oldPassword, setOldPassword] = useState({ campo: "", valido: null });
  const [newPassword, setNewPassword] = useState({ campo: "", valido: null });
  const [signError, setSignError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const { updateInfo } = useEspacioInfo();

  const handleModalClose = () => {
    setSignError({ error: false, message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      oldPassword.valido !== "true" ||
      newPassword.valido !== "true" ||
      email.valido !== "true"
    ) {
      return setSignError({
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
    setLoading(true)
    const datos = {
      email: email.campo,
      oldPassword: oldPassword.campo,
      newPassword: newPassword.campo,
    };

    let info = await updateInfo("user/reset-password", datos, "/login");
    if (info) {
      setSignError({
        error: true,
        message: info.response.data.message,
      });
    }
  };

  return (
    <>
      <Header clase="login" />
      <section className="pw-reset">
        <h1>Ingresa la contraseña recibida en tu email para cambiarla por una nueva</h1>
        <form onSubmit={handleSubmit}>
          <Input
            estado={email}
            setEstado={setEmail}
            type="email"
            label="Email"
            name="email"
            expresionRegular={expresiones.correo}
            leyendaError="Debe ser un formato de e-mail válido"
          ></Input>
          <Input
            estado={oldPassword}
            setEstado={setOldPassword}
            type="password"
            label="Contraseña anterior"
            name="oldpassword"
            expresionRegular={expresiones.password}
            leyendaError="Debe ser un formato de contraseña válido"
          ></Input>
          <Input
            estado={newPassword}
            setEstado={setNewPassword}
            type="password"
            label="Contraseña nueva"
            name="newpassword"
            expresionRegular={expresiones.password}
            leyendaError="Debe ser un formato de contraseña válido"
          ></Input>

          <h2
            onClick={() => {
              navigate("/login");
            }}
          >
            Volver al Login
          </h2>

          <section className="login_container">
            {loading ? (
              <img src="../../assets/waiting.gif" width="40px" />
            ) : (
              <AppButton clase="primary-action" texto="ENVIAR" />
            )}
          </section>
        </form>
      </section>
      {signError.error && (
        <Modal
          signError={signError}
          handleModalClose={handleModalClose}
          validation={{ status: false }}
          success={{ status: false }}
        /> //esto porque no se usa validacion en este modal
      )}
    </>
  );
};

export default Resetpassword;
