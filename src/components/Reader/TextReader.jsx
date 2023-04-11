import React, { useEffect,useRef,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contenido_a } from "../../helpers/content_a";
import { contenido_b } from "../../helpers/content_b";

import AppButton from "../AppButton";
import Background from "../Background/Background";
import ReaderBtn from "./ReaderBtn";
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";


const TextReader = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const inner = useRef();
  const [avance, setAvance] = useState(10);
  const [section, setSection] = useState();
  const [path, setPath] = useState();
  const [contenido, setContenido] = useState();

  const [view, setView] = useState(false);
  const scrolleo = () => {
    let full = inner.current.scrollHeight - 400; //
    let current = inner.current.scrollTop;
    let porcentaje = (current * 100) / full;
    if (porcentaje < 10) {
      setAvance(10);
    } else {
      setAvance(porcentaje);
    }
  };

  const goPrev = () => {
    if (id > 1) {
      
      let num = id;
      num = num - 1;
      inner.current.scrollTop = 0;
      navigate(`/${path}/content/read/${num}`);
      setView(false);
    }
  };
  const goNext = () => {
    if (id < contenido.length) {
      let num = id;
      num++;
      inner.current.scrollTop = 0;
      navigate(`/${path}/content/read/${num}`);
      setView(false);
    }
  };

  useEffect(() => {}, [id]);

  useEffect(() => {
    setPath(window.location.pathname.split("/")[1]);
    if (window.location.pathname.split("/")[1] === "seccionA") {
      setContenido(contenido_a);
      setSection("a");
    
    }
    if (window.location.pathname.split("/")[1] === "seccionB") {
      setContenido(contenido_b);
      setSection("b");    
    }
  }, []);

  return (
    <section className="main-view">
      <Background />
      {contenido !== undefined && (
        <>
          <section className="content content-reader content-reader_detailed">
            <section className="content-header">
              <AppButton
                clase="app-back"
                icono={faArrowLeft}
                accion={() => {
                  navigate(`/${path}/content`);
                }}
              />
              <h2 className="title_guia">Audio y lectura</h2>
            </section>
            <div className="indicador">
              <section className={`avatar read-expand-${section}_${id}`}></section>
              <h2>{contenido[id - 1]?.title}</h2>
            </div>

            <section
              ref={inner}
              onScroll={scrolleo}
              className={`paragraph-reader ${
                !view && "exercise-description_fade no-scroll"
              }`}
            >
              {contenido[id - 1].content}
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
                clase={id == 1 ? "locked" : ""}
              />
              <ReaderBtn
                tipo="next"
                texto="Siguiente"
                accion={goNext}
                clase={id == contenido.length ? "locked" : ""}
              />
            </section>
          </section>
        </>
      )}
    </section>
  );
};

export default TextReader;
