import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatTime } from "../../helpers/general";

const Video = (props) => {
  const {
    clasePadre,
    claseVid,
    play,
    complete,
    url,
    videoRef,
    closeVideo,
    timeLeft,
    current,
  } = props;

  return (
    <section className="fondo-vid">
      {play && (
        <section className={`video-modal ${clasePadre}`}>
          {complete && (
            <button className="quit" onClick={closeVideo}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          <video
            className={claseVid}
            src={url}
            playsInline
            autoPlay
            ref={videoRef}
          ></video>
          <p className="timeLeft">{formatTime(timeLeft - current)} min</p>
        </section>
      )}
    </section>
  );
};

export default Video;
