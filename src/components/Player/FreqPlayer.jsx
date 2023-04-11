import React, { useRef, useState } from "react";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
const FreqPlayer = (props) => {
  const fileRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const playToggle = () => {
    if (!isPlaying) {
      fileRef.current.play();
      setIsPlaying(true);
    } else {
      fileRef.current.pause();
      setIsPlaying(false);
    }
  };
  const downloadFile = () => {
    const file = fileRef;
    const url = window.URL.createObjectURL(new Blob([file]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${props.title}.mp3`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <section className={`freq-player ${props.clase} `}>
      <audio ref={fileRef} src={props.file} />
      <h3>{props.title}</h3>

      <span onClick={downloadFile} className="download-button">
        <img src="../../assets/download-icon.svg" alt="download" />
      </span>
      <AppButton
        clase="play"
        icono={isPlaying ? faPause : faPlay}
        accion={playToggle}
      />
    </section>
  );
};

export default FreqPlayer;
