import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../AppButton";
import Background from "../Background/Background";
import Bookmark from "./Bookmark";
import ReaderAction from "./ReaderAction";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../contexts/UserContext";
import { bookmarks_b } from "../../helpers/bookmarks_b";
const TextReaderMainB = () => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(0);
  const { data } = useContext(UserContext);
  const open = (index) => {
    setExpand(index);
  };
  const checkNavigate = () => {
    if (expand > 0) {
      setExpand(0);
    } else {
      navigate("/seccionB/mapa");
    }
  };
  const escuchar = () => {
    if (expand > 0) {
      navigate(`audio/${expand}`);
    } else if (data.usuario.status) {
      navigate("/seccionB/content/audio");
    }
  };
  const leer = () => {
    if (expand > 0) {
      navigate(`read/${expand}`);
    } else {
      navigate("read");
    }
  };

  return (
    <section className="main-view">
      <Background />
      <section className="content content-reader content-reader_section-b">
        <section className="content-header">
          <AppButton
            clase="app-back"
            icono={faArrowLeft}
            accion={checkNavigate}
          />
          <h2 className="title_guia">Audio y lectura</h2>
        </section>
        <div className="indicador">
          <h2>¿Qué hay dentro?</h2>
        </div>
        {expand === 0 && (
          <section className="bookmarks">
            {bookmarks_b.map((item) => {
              return (
                <Bookmark
                  index={item.indice}
                  title={item.title}
                  accion={() => {
                    open(item.indice);
                  }}
                  key={item.indice}
                />
              );
            })}
          </section>
        )}
        {expand > 0 && (
          <section className={`read-expand read-expand-b_${expand}`}>
            <Bookmark
              index={bookmarks_b[expand - 1].indice}
              title={bookmarks_b[expand - 1].title}
              clase="expand-preview"
            />
            <section className="exercise-description preview ">
              {bookmarks_b[expand - 1].content.map((el,index) => {
                return <p key={index}className="read-preview">{el}</p>;
              })}
            </section>
          </section>
        )}
        <section className="buttons-cont">
          <ReaderAction
            icon={
              data.usuario.status
                ? "../assets/audio-unlocked.svg"
                : "../assets/audio-locked.svg"
            }
            alt="speaker"
            text={expand === 0 ? "Escuchar todo" : "Escuchar"}
            accion={escuchar}
          />
          <ReaderAction
            icon="../assets/read.svg"
            alt="Book"
            text={expand === 0 ? `Leer  todo` : "Leer"}
            accion={leer}
          />
        </section>
      </section>
    </section>
  );
};

export default TextReaderMainB;
