import React from "react";
import AppButton from "../AppButton";
import CardHeader from "../CardHeader";
import TestMeter from "./TestMeter";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { test_result } from "../../helpers/test_result";

const TestResultItem = ({ ...props }) => {
  const [view, setView] = useState(false);
  const {
    arrIndex,
    index,
    additionalClass,
    testTitle,
    min,
    max,
    result,
    color,
    stroke,
    fondo,
    clase,
  } = props;
  const randomKey = () =>{
    return  Math.floor(Math.random())
  }
  const show = () => {
    setView(!view);
  };

  return (
    <section className="test-item">
      <CardHeader
        index={index}
        additionalClass={additionalClass}
        testTitle={testTitle}
      />
      <TestMeter
        min={min}
        max={max}
        result={result}
        color={color}
        stroke={stroke}
        fondo={fondo} // fondo de circulo
        clase={clase} //background de pad
      />
      <AppButton
        clase={`app-back `}
        iconClass={`${view ? "rotate" : ""} rotate-right`}
        icono={faCaretDown}
        accion={show}
      />

      <section className={`description ${view ? "deploy" : ""}`}>
       {/*  <h2 className="test-title test-title__inner"  key={randomKey()}>Escenario positivo</h2>
        <p className="p-test-result"  key={randomKey()}>{test_result[arrIndex].escenario}</p> */}
        <h2 className="test-title test-title__inner"  key={props.key2}>Tendencias</h2>
        <p className="p-test-result" key={props.key3}>
          {test_result[arrIndex].tendenciaPositiva}
        </p>
        <p className="p-test-result" key={props.key4}>
          {test_result[arrIndex].tendenciaNegativa}
        </p> 
      </section>
    </section>
  );
};

export default TestResultItem;
