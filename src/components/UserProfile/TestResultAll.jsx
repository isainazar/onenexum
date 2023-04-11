import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../AppButton";
import TestResultItem from "./TestResultItem";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../contexts/UserContext";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";

const TestResultAll = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([null, null, null, null, null]);
  const { data } = useContext(UserContext);
  const { getInfo } = useEspacioInfo();

  const getTest = async () => {
    const tests = await getInfo("user/get-all-test", localStorage.UID);
    setResults(tests);
    console.log(tests)
    if(tests[0] ===null &&
      tests[1]===null&&
      tests[2]===null&&
      tests[3]===null&&
      tests[4]===null)
      {
        navigate('/user/test_map')
      }
  };

  useEffect(() => {
    getTest();
  }, []);

  return (
    <section className="test-result-all">
      {results[0] !== null && (
        <TestResultItem
          arrIndex={0}
          index="1"
          additionalClass="numbers test"
          testTitle="Introvertido - Extrovertido"
          min="Introvertido"
          max="Extrovertido"
          result={`${results[0]}`}
          color="texto-1"
          stroke="stroke-1"
          fondo="fondo-1" // fondo de circulo
          clase="meter-1" //background de pad
          key="1a"
          key2="2a"
          key3="3a"
          key4="4a"
        />
      )}

      {results[1] !== null && (
        <TestResultItem
          arrIndex={0}
          index="2"
          additionalClass="numbers test"
          testTitle="Abierto - Conservador"
          min="Abierto"
          max="Conservador"
          result={`${results[1]}`}
          color="texto-2"
          stroke="stroke-2"
          fondo="fondo-2" // fondo de circulo
          clase="meter-2" //background de pad
          key="1b"
          key2="2b"
          key3="3b"
          key4="4b"
        />
      )}
      {data.usuario.status && (
        <>
          {results[2] !== null && (
            <TestResultItem
              arrIndex={0}
              index="3"
              additionalClass="numbers test"
              testTitle="No responsable - Responsable"
              min="No responsable"
              max="Responsable"
              result={`${results[2]}`}
              color="texto-1"
              stroke="stroke-3"
              fondo="fondo-3" // fondo de circulo
              clase="meter-3" //background de pad
              key="1c"
              key2="2c"
              key3="3c"
              key4="4c"
            />
          )}
          {results[3] !== null && (
            <TestResultItem
              arrIndex={0}
              index="4"
              additionalClass="numbers test"
              testTitle="Inestable - Estable"
              min="Inestable"
              max="Estable"
              result={`${results[3]}`}
              color="texto-1"
              stroke="stroke-4"
              fondo="fondo-4" // fondo de circulo
              clase="meter-4" //background de pad
              key="1d"
              key2="2d"
              key3="3d"
              key4="4d"
            />
          )}
          {results[4] !== null && (
            <TestResultItem
              arrIndex={0}
              index="5"
              additionalClass="numbers test"
              testTitle="Inconformista - Conformista"
              min="Inconformista"
              max="Conformista"
              result={`${results[4]}`}
              color="texto-1"
              stroke="stroke-5"
              fondo="fondo-5" // fondo de circulo
              clase="meter-5" //background de pad
              key="1e"
              key2="2e"
              key3="3e"
              key4="4e"
            />
          )}
        </>
      )}
      {!data.usuario.status && (
        <section className="private">
          <img src="../../assets/premium-white.svg" alt="diamond" />
          <p>
            Para ver mas resultados acerca de tu personalidad deberás
            suscribirte a <span>One Nexum Premium.</span>
          </p>
        </section>
      )}
      <section className="buttons-cont">
        <AppButton
          clase="app-back"
          icono={faArrowLeft}
          accion={() => {
            navigate("/user/test_map");
          }}
        />
      </section>
    </section>
  );
};

export default TestResultAll;
