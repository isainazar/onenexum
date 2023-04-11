import React,{ useRef,useState }  from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../AppButton";
import Background from "../Background/Background";

import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";
import TitleThree from "./TitleThree";
import TitleFour from "./TitleFour";
import TitleFive from "./TitleFive";

import { contenido_a } from "../../helpers/content_a";

import ReaderBtn from "../Reader/ReaderBtn";
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ReadAll = () => {
  const [avance, setAvance] = useState(10);
  const inner = useRef();
  const navigate = useNavigate();

  const [view, setView] = useState(false);
  const [change, setChange] = useState(contenido_a[0]);
  
  const breakpoints = {
    first: 1126,
    second: 1767,
    third: 2954,
    fourth: 6125,
  };

  const goNext = () => {
    if (view) {
      let pos = inner.current.scrollTop;
      if (pos < breakpoints.first) {
        inner.current.scrollTo(0, breakpoints.first + 1);
      }
      if (pos > breakpoints.first && pos < breakpoints.second) {
        inner.current.scrollTo(0, breakpoints.second + 1);
      }
      if (pos > breakpoints.second && pos < breakpoints.third) {
        inner.current.scrollTo(0, breakpoints.third + 1);
      }
      if (pos > breakpoints.third && pos < breakpoints.fourth) {
        inner.current.scrollTo(0, breakpoints.fourth + 1);
      }
    }
  };

  const goPrev = () => {
    let pos = inner.current.scrollTop;
    if (pos > breakpoints.fourth) {
      inner.current.scrollTo(0, breakpoints.third - 1);
    }
    if (pos > breakpoints.first && pos < breakpoints.second) {
      inner.current.scrollTo(0, breakpoints.first - 1);
    }
    if (pos > breakpoints.second && pos < breakpoints.third) {
      inner.current.scrollTo(0, breakpoints.second - 1);
    }
    if (pos > breakpoints.third && pos < breakpoints.fourth) {
      inner.current.scrollTo(0, breakpoints.third + 1);
    }
  };

  const scrollSpy = () => {
    let pos = inner.current.scrollTop;
    if (pos < breakpoints.first) {
      setChange(contenido_a[0]);
    }
    if (pos > breakpoints.first && pos < breakpoints.second) {
      setChange(contenido_a[1]);
    }
    if (pos > breakpoints.second && pos < breakpoints.third) {
      setChange(contenido_a[2]);
    }
    if (pos > breakpoints.third && pos < breakpoints.fourth) {
      setChange(contenido_a[3]);
    }
    if (pos > breakpoints.fourth) {
      setChange(contenido_a[4]);
    }
  };

  const scrolleo = () => {
    scrollSpy();
    let full = inner.current.scrollHeight - 400; //
    let current = inner.current.scrollTop;
    let porcentaje = (current * 100) / full;
    if (porcentaje < 10) {
      setAvance(10);
    } else {
      setAvance(porcentaje);
    }
  };

  return (
    <section className="main-view">
      <Background />
      <section className="content content-reader content-reader_detailed">
        <section className="content-header">
          <AppButton
            clase="app-back"
            icono={faArrowLeft}
            accion={() => {
              navigate("/seccionA/content");
            }}
          />
          <h2 className="title_guia">Audio y lectura</h2>
        </section>
        <div className="indicador">
          <section className="avatar"></section>
          <h2>{change.title}</h2>
        </div>

        <section
          ref={inner}
          onScroll={scrolleo}
          className={`paragraph-reader ${
            !view && "exercise-description_fade no-scroll"
          }`}
        >
          <TitleOne />
          <TitleTwo />
          <TitleThree />
          <TitleFour />
          <TitleFive />
        </section>
        <AppButton
          clase={`app-fwd locked ${view && "hidden"}`}
          icono={faChevronDown}
          accion={() => {
            setView(true);
          }}
        />
        <section className="progress-bar">
          <section className="progress-bar-background"></section>
          <section
            className="progress"
            style={{ width: `${avance}%` }}
          ></section>
        </section>
        <section className="buttons-cont">
          <ReaderBtn
            tipo="prev"
            texto="Anterior"
            accion={goPrev}
            //    clase={id == 1 ? "locked" : ""}
          />
          <ReaderBtn
            tipo="next"
            texto="Siguiente"
            accion={goNext}
            //    clase={id == 5 ? "locked" : ""}
          />
        </section>
      </section>
    </section>
  );
};

export default ReadAll;
