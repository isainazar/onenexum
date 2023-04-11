import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import Player from "../Player/Player";
const AudioFull = () => {
  const navigate = useNavigate();
  return (
    <section className="main-view">
      <Background />
      <section className="content content-audio">
        <section className="content-header">
          <AppButton
            clase="app-back"
            icono={faArrowLeft}
            accion={() => {
              navigate("/seccionB/content");
            }}
          />
          <h2 className="title_guia">Audio y lectura</h2>
        </section>
        <Player title="La comparación destruye la personalidad" url="../../assets/audio/B_full.mp3" />
      </section>
    </section>
  );
};

export default AudioFull;
