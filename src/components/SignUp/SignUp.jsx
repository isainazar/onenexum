import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import expresiones from "../../helpers/expresiones";
import { getToken, url } from "../../helpers/general";
import Header from "../Landing/Header";
import Input from "../Inputs/Input";
import Modal from "../Modal/Modal";
import AppButton from "../AppButton";

const SignUp = () => {
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(null);

  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
 
const [sending,setSending] = useState(false)
  const [signError, setSignEror] = useState({ message: "", error: false });
  const [quizMissing, setQuizMissing] = useState(false);

  const [validation, setValidation] = useState({
    status: false,
    message: "Para continuar, por favor ingresa el codigo de confirmación que recibiste en tu casilla de correo.",
  });

  /* CODIGO DE VERIFICACION */

  const [value, setValue] = useState("");
  const onChange = useCallback((value) => setValue(value), []);

  const [codeValid, setCodeValid] = useState(null);

  let newUser = {};

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      email.valido === "true" &&
      password.valido === "true"
    
    ) {
      newUser = {
        name: nombre.campo,
        lastname: apellido.campo,
        email: email.campo,
        password: password.campo,
        user_type: localStorage.user_type,
      };
      setSending(true)
      sendData();
    } else {
      setFormValid(false);
      setSignEror({
        message:
          "Faltan algunos campos por completar, por favor verifica e inténtalo de nuevo",
        error: true,
      });
    }
  };
  const sendQuiz = async () => {
    const respuesta = JSON.parse(localStorage.getItem("quiz"));
    const { answer0, answer1, answer2, answer3, answer4, answer5, answer6 } =
      respuesta;
    let userData = {
      id_user: localStorage.UID,
      respuesta0: JSON.parse(answer0),
      respuesta1: JSON.parse(answer1),
      respuesta2: JSON.parse(answer2),
      respuesta3: JSON.parse(answer3),
      respuesta4: JSON.parse(answer4),
      respuesta5: JSON.parse(answer5),
      respuesta6: JSON.parse(answer6),
    };

    await axios
      .post(`${url}/api/quiz/`, userData)
      .then(() => {
        setValidation({ ...validation, status: true });
      })
      .catch((err) =>
        setSignEror({ error: true, message: err.response.data.message })
      );
  };

  const sendData = async () => {
    if (localStorage.quiz && localStorage.user_type) {
      await axios
        .post(`${url}/api/user/sing-in`, newUser)
        .then((res) => {
          setSending(false);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("UID", res.data.id_user);
          localStorage.setItem("IEjFs", res.data.codigo);
          localStorage.setItem("u" , email.campo);
          localStorage.setItem("d" , password.campo);
          sendQuiz();
        })
        .catch((err) => {
          setSignEror({ message: err.response.data.message, error: true });
        });
    } else {
      setSignEror({
        message: "Es necesario que hagas el quiz para poder registrarte",
        error: true,
      });
      setQuizMissing(true);
    }
  };

  const handleModalClose = () => {
    setSignEror({ message: "", error: false });
  };

  useEffect(() => {
    if (localStorage.getItem("nombre")) {
      setNombre({
        ...nombre,
        campo: localStorage.getItem("nombre"),
        valido: "true",
      });
    }
  }, []);

  useEffect(() => {
         if (!localStorage.quiz || !localStorage.user_type) {
      navigate("/quiz");
    } 
  }, []);

  const confirmMail = async () => {
    await axios
      .put(
        `${url}/api/user/mail-accepted`,
        { id_user: localStorage.UID },
        getToken()
      )
      .then((res) => {
        setCodeValid(true);
       
        setTimeout(() => {
          navigate("/offer");
        }, 500);
      })
      .catch((err) => console.log(err));
  };
  const handleCodeVerify = () => {
    if (localStorage.IEjFs === value) {
      confirmMail();
    } else {
      setCodeValid(false);
    }
  };

  return (
    <>
      <Header clase="landing" />
      <section className="sign-title">
        <h2>“La verdadera revolución comienza en nuestras consciencias”</h2>
        <p>Completa los siguientes datos para continuar</p>
      </section>
      <section className="sign-up">
        <form className="sign-form" onSubmit={onSubmit}>
          <Input
            estado={nombre}
            setEstado={setNombre}
            type="text"
            label="Nombre"
            name="name"
            expresionRegular={expresiones.nombre}
            leyendaError="Debes ingresar tu nombre, no se admiten caracteres especiales"
          ></Input>
          <Input
            estado={apellido}
            setEstado={setApellido}
            type="text"
            label="Apellido"
            name="lastname"
            expresionRegular={expresiones.apellido}
            leyendaError="Debes ingresar tu apellido, no se admiten caracteres especiales"
          ></Input>
          <Input
            estado={email}
            setEstado={setEmail}
            type="email"
            label="Juan@onenexum.com"
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
         {!sending?  <AppButton type="submit" clase="primary-action" texto="SIGUIENTE"/>
         : <img src="../../assets/waiting.gif" width="40px"/>
}
        </form>

        {signError.error && (
          <Modal
            signError={signError}
            quizMissing={quizMissing}
            success={{ status: false }}
            validation={validation}
            handleModalClose={handleModalClose}
          />
        )}

        {validation.status && (
          <Modal
            validation={validation}
            handleCodeVerify={handleCodeVerify}
            signError={signError}
            success={{ status: 'check' }}
            codeValid={codeValid}
            value={value}
            onChange={onChange}
          />
        )}
      </section>
    </>
  );
};

export default SignUp;
