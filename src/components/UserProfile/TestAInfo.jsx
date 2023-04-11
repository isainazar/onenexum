import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { test_info } from "../../helpers/test_info";
import AppButton from "../AppButton";
import Background from "../Background/Background";

const TestAInfo = () => {
  const { id } = useParams();
  const { data } = useContext(UserContext);
  const navigate = useNavigate();
  const checkClass = () => {
    if (id>2 && !data.usuario.status) {
      return "locked";
    }
  };

  const checkNavigation = () => {
    if (id == 1 || id == 2) {
      navigate(`/user/test/${id}`);
    }
    if (id > 2 && data.usuario.status) {
      navigate(`/user/test/${id}`);
    }
  };

  return (
    <section className="main-view">
      <Background clase="test-info " />
      <section className="content test-map test-map__detailed">
        <h2 className="title_guia">TEST DE PERSONALIDAD</h2>
        <h3 className="numbers">{id}</h3>
        <p className="explain">{test_info[id - 1].title}</p>
        <p className="explain detailed">{test_info[id - 1].descripcion}</p>
        <section className="buttons-cont">
          <AppButton
            clase="app-back"
            icono={faArrowLeft}
            accion={() => {
              navigate(-1);
            }}
          />
          <AppButton
            clase={`primary-action ${checkClass()}`}
            texto="COMPLETAR"
            accion={checkNavigation}
          />
        </section>
      </section>
    </section>
  );
};

export default TestAInfo;
