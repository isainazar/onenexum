import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contenido_a } from "../../helpers/content_a";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import Player from "../Player/Player";
const AudioPart = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [url,setUrl] = useState()
  const [title,setTitle] = useState()
  useEffect(()=>{
    setUrl(`../../../assets/audio/A${id}.mp3`);
    setTitle(contenido_a[id-1].title)
   
  },[])

  return (
    <section className="main-view">
      <Background />
      <section className="content content-audio">
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
        <Player title={title}  url={url}/>
      </section>
    </section>
  );
};

export default AudioPart;