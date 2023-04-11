import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import expresiones from "../../helpers/expresiones";
import { checkModal, url } from "../../helpers/general";
import AppButton from "../AppButton";
import Check from "../Inputs/Check";
import Input from "../Inputs/Input";
import Modal from "../Modal/Modal";
const MultiAnswer = () => {
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [signError, setSignEror] = useState({ error: false, message: "" });
  const [success, setSuccess] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [multi, setMulti] = useState({
    opt1: null,
    opt2: null,
    opt3: null,
    opt4: null,
    opt5: null,
    opt6: null,
    opt7: null,
    opt8: null,
  });

  let notAnUser = {};
  const nombre = localStorage.nombre;

  const sendInfo = (e) => {
    e.preventDefault();
    const res = Object.values(multi);
    const checkboxs = res.filter(function (item) {
      return item != null;
    });
    notAnUser = { name: nombre, checkboxs: checkboxs, email: email.campo };
    if (email.valido != "true") {
      setSignEror({
        error: true,
        message:
          "Faltan algunos campos para completar, por favor verifica e intentalo de nuevo.",
      });
    } else {
      setLoading(true);
      axios
        .post(`${url}/api/contact/quiz-news`, notAnUser)
        .then((res) => {
          setSuccess({
            status: true,
            message: "Fuiste agregado a nuestro Newsletter",
          });
        })
        .catch((err) => {
          setSignEror({ error: true, message: err.response.data.message });
          setLoading(false);
        });
    }
  };

  const handleModalClose = () => {
    setSignEror({ message: "", error: false });
  };

  useEffect(() => {
    if (!localStorage.nombre) {
      navigate("/quiz");
    } else if (localStorage.user_type == 2 || localStorage.user_type == 1) {
      navigate("/quiz");
    }
  }, []);

  return (
    <>
      <section className={`multi-answer ${checkModal(signError)}`}>
        <section className="welcome fade-in faster">
          <p className="title_big-name_title">
            Cuéntanos qué situaciones sientes que son prioritarias que atiendas
          </p>
          <p className="title_small result">Puedes elegir más de una opción</p>
        </section>
        <form className="check-form fade-in" onSubmit={sendInfo}>
          <Check
            type="checkbox"
            name="opt1"
            estado={multi}
            setEstado={setMulti}
            label="Siento estrés laboral"
            index="0"
          ></Check>
          <Check
            type="checkbox"
            name="opt2"
            estado={multi}
            setEstado={setMulti}
            label=" Necesito resolver un conflicto de mi pasado"
            index="1"
          ></Check>
          <Check
            type="checkbox"
            name="opt3"
            estado={multi}
            setEstado={setMulti}
            label="Estoy/estuve en una relación tóxica de pareja"
            index="2"
          ></Check>
          <Check
            type="checkbox"
            name="opt4"
            estado={multi}
            setEstado={setMulti}
            label="Tengo alguna relación familiar/social tóxica"
            index="3"
          ></Check>
          <Check
            type="checkbox"
            name="opt5"
            estado={multi}
            setEstado={setMulti}
            label="Quiero conocer en mayor medida mi personalidad"
            index="4"
          ></Check>
          <Check
            type="checkbox"
            name="opt6"
            estado={multi}
            setEstado={setMulti}
            label="Siento ansiedad en situaciones sociales"
            index="5"
          ></Check>
          <Check
            type="checkbox"
            name="opt7"
            estado={multi}
            setEstado={setMulti}
            label="Siento con frecuencia miedo a equivocarme"
            index="6"
          ></Check>
          <Check
            type="checkbox"
            name="opt8"
            estado={multi}
            setEstado={setMulti}
            label=" Necesito encontrar mi proposito de vida"
            index="7"
          ></Check>

          <p className="email-request subtitle-message_general"> </p>
          <Input
            type="email"
            estado={email}
            setEstado={setEmail}
            label="Roxana@onenexum.com"
            name="email"
            // placeholder=" "
            expresionRegular={expresiones.correo}
            leyendaError="Debe ser un formato de e-mail válido"
          ></Input>

          <section className="login_container">
            {loading ? (
              <img src="../../assets/waiting.gif" width="40px" />
            ) : (
              <AppButton texto="ENVIAR INFO" clase="primary-action" />
            )}
          </section>
        </form>
      </section>
      {(signError.error || success.status) && (
        <Modal
          signError={signError}
          success={success}
          validation={{ status: false }}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default MultiAnswer;
