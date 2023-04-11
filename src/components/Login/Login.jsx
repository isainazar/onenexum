import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authTypes } from "../../types/authTypes";
import AuthContext from "../../contexts/AuthContext";
import expresiones from "../../helpers/expresiones";
import Input from "../Inputs/Input";
import Header from "../Landing/Header";
import { url } from "../../helpers/general";
import AppButton from "../AppButton";
import Modal from "../Modal/Modal";
import { actionTypes } from "../../types/actionTypes";
import UserContext from "../../contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const { UserDispatch } = useContext(UserContext);
  const [loginError, setLoginError] = useState({ error: false, message: "" });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [loading, setLoading] = useState(false);
  const handleModalClose = () => {
    setLoginError({ error: false, message: "" });
  };

  axios.defaults.withCredentials = true;
 
  async function handleSubmitLogIn(e) {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(`${url}/api/user/login`, {
        email: email.campo,
        password: password.campo,
      })
      .then((res) => {
        localStorage.setItem("UID", res.data.id_user);
        localStorage.setItem("token", res.data.token);
        localStorage.removeItem("user_type");
        console.log(res.data)
        UserDispatch({
          type: actionTypes.initialValue,
          payload: res.data,
        });
        dispatch({ type: authTypes.login });
        navigate("/home");
      })
      .catch((err) => {
        if (err.response.status === 402) {
          navigate("/home");
        }
        if (err.response.data) {
          setLoginError({ error: true, message: err.response.data.message });
          setLoading(false)
        } else {
          setLoginError({ error: true, message: "Error inesperado" });
          setLoading(false)

        }
      });
  }

  return (
    <>
      <Header clase="login" />
      <section className="login-form">
        <form>
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
            estado={password}
            setEstado={setPassword}
            type="password"
            label="Contraseña"
            name="password"
            expresionRegular={expresiones.password}
            leyendaError="La contraseña debe ser de 4-12 caracteres"
          ></Input>
          <p
            className="subtitle-message_general mt-5"
            onClick={() => navigate("/forgot-password")}
          >
            Olvidé mi contraseña
          </p>
          <section className="login_container">
            {loading ? (
              <img src="../../assets/waiting.gif" width="50px" />
            ) : (
              <AppButton
                texto="INICIAR SESIÓN"
                clase="primary-action"
                accion={(e) => {
                  handleSubmitLogIn(e);
                }}
              />
            )}
          </section>
          <p
            className="no-account"
            onClick={() => {
              navigate("/landing");
            }}
          >
            ¿No tienes una cuenta?
          </p>
        </form>
        {loginError.error && (
          <Modal
            signError={loginError}
            success={{ status: false }}
            handleModalClose={handleModalClose}
            quizMissing={false}
            validation={{ status: false }}
          />
        )}
      </section>
    </>
  );
};

export default Login;
