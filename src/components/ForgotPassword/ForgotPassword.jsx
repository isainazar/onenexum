import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Landing/Header";
import Input from "../Inputs/Input";
import expresiones from "../../helpers/expresiones";
import AppButton from "../AppButton";
import Modal from "../Modal/Modal";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const[loading,setLoading] = useState(false)

  const [email, setEmail] = useState({ campo: "", valido: null });

  const [signError, setSignError] = useState({ error: false, message: "" });

  const { sendInfo } = useEspacioInfo();

  const handleModalClose = () => {
    setSignError({ error: false, message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.valido !== "true") {
      return setSignError({
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
    setLoading(true)
    const datos = {
      email: email.campo,
    };
    let info = await sendInfo("user/forgot-password", datos, "/password-reset");
    
    if (info) {
      setLoading(false)
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
        <h1>Ingresa tu e-mail para reiniciar la contraseña</h1>
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

export default Forgotpassword;
