import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AppButton from "../AppButton";
import Accordion from "./Accordion";
import ProfileIcon from "./ProfileIcon";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import test_questions from "../../helpers/test_questions";
import Modal from "../Modal/Modal";
import axios from "axios";
import { url } from "../../helpers/general";

const UserTest = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [answer, setAnswer] = useState({});
  const [answer2, setAnswer2] = useState({});
  const [answer3, setAnswer3] = useState({});
  const [answer4, setAnswer4] = useState({});
  const [answer5, setAnswer5] = useState({});
  let datos;

  const getState = () => {
    return answer;
 
  };
  const getAnswers = () => {
    return setAnswer;
  };
  const [signError, setSignError] = useState({ error: false, message: "" });
  const handleModalClose = () => {
    setSignError({ error: false, message: "" });
  };
  const calculate = async () => {
    let score;
    let porcentaje;
    let cantidad = test_questions[id - 1].opciones.length * 2;
    if ( Object.keys(answer).length !== test_questions[id - 1].opciones.length) {
      setSignError({
        error: true,
        message:
          "Debes completar todas las respuestas para obtener un resultado",
      });
    } else {
      if (id == 1) {
        score = cantidad / 2;
        const res = answer;
        for (const r in res) {
          if (res[r] === "Si") {
            score++;
          }
          if (res[r] === "No") {
            if (r == 4) {
              score++;
            } else {
              score--;
            }
          }
          if (res[r] === "A veces") {
            if (r == 2) {
              score--;
            } else if (r == 3) {
              score = score;
            } else {
              score++;
            }
          }
        }
        porcentaje = Math.round((score * 100) / cantidad);
      }
      if (id == 2) {
        score = cantidad / 2;
        const res = answer;
        for (const r in res) {
          if (res[r] === "Si" || res[r] === "A veces") {
            score++;
          }
          if (res[r] === "No") {
            score--;
          }
        }
        porcentaje = Math.round((score * 100) / cantidad);
      }
      if (id == 3) {
        score = cantidad / 2;
        const res = answer;
        for (const r in res) {
          if (res[r] === "Si") {
            score++;
          }
          if (res[r] === "No") {
            score--;
          }
          if (res[r] === "A veces") {
            if (r == 1 || r == 5) {
              score = score;
            } else if (r == 4) {
              score++;
            } else {
              score--;
            }
          }
          porcentaje = Math.round((score * 100) / cantidad);
        }
      }
      if (id == 4) {
        score = cantidad / 2;
        const res = answer;
        for (const r in res) {
          if (res[r] === "Si") {
            score++;
          }
          if (res[r] === "No") {
            score--;
          }
          if (res[r] === "A veces") {
            if (r == 6 || r == 7) {
              score--;
            } else {
              score = score;
            }
          }
        }
        porcentaje = Math.round((score * 100) / cantidad);
      }
      if (id == 5) {
        score = cantidad / 2;
        const res = answer;
        for (const r in res) {
          if (res[r] === "Si") {
            score++;
          }
          if (res[r] === "No") {
            score--;
          }
          if (res[r] === "A veces") {
            if (r == 6 || r == 9) {
              score--;
            } else if (r == 4 || r == 7) {
              score++;
            } else {
              score = score;
            }
          }
        }
        porcentaje = Math.round((score * 100) / cantidad);
      }
      return porcentaje;
    }
  };

  const getTest = async () => {
    await axios
      .get(`${url}/api/user/get-test/${localStorage.UID}?testid=${id}`)
      .then((res) => {
        datos = res.data.message.result;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postTest = async (result) => {
   
    const test = {
      user: localStorage.UID,
      testid: id - 1,
      result: result,
    };
    await axios
      .post(`${url}/api/user/post-test`, test)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putTest = async () => {
    const result = await calculate();
    if (!result) {
      return;
    }
    const test = {
      user: localStorage.UID,
      testid: id - 1,
      result: result,
    };
    await axios
      .put(`${url}/api/user/update-test`, test)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goResult = async () => {
    const result = await calculate();
    if (!result) {
      return;
    }
    await getTest();
    if (datos === undefined) {
      await postTest(result);
      navigate("/user/test_result-all");
    }
    await putTest();
    navigate("/user/test_result-all");
  };

  useEffect(() => {
    if (id < 1) {
      navigate("/user/test_map");
    }
  }, []);

  return (
    <section className="user-secondary user-secondary_test">
      <h2 className="title_user">Tu espacio personal</h2>
      <div className="exercise-description">
        <p>Completa las casillas con la información requerida.</p>
      </div>
      <ProfileIcon
        imagen="../../assets/test.svg"
        texto="Test de personalidad"
        alt="corazon"
      />
      <section className="test-question">
        {test_questions[id - 1].titulo}
      </section>

      <section className="opciones">
        {test_questions[id - 1].opciones.map((opt) => {
          return (
            <Accordion
              title={opt}
              radio={true}
              options={["Si", "No", "A veces"]}
              state={getState()}
              setState={getAnswers()}
              array={true}
              key={test_questions[id - 1].opciones.indexOf(opt)}
              nombre={test_questions[id - 1].opciones.indexOf(opt)}
            />
          );
        })}
      </section>

      <section className="buttons-cont">
        <AppButton
          clase="app-back"
          icono={faArrowLeft}
          accion={() => {
            navigate("/user/test_map");
          }}
        />
        <AppButton clase="primary-action" accion={goResult} texto="FINALIZAR" />
      </section>
      {signError.error && (
        <Modal
          signError={signError}
          handleModalClose={handleModalClose}
          validation={{ status: false }}
          success={{ status: false }}
        />
      )}
    </section>
  );
};

export default UserTest;
