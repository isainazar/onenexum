import {
  faFastBackward,
  faFastForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import AppButton from "../AppButton";
import ReaderBtn from "../Reader/ReaderBtn";

const Player = ({ title, url }) => {
  let analyser;
  let audioSource;
  const [vel, setVel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [alto, setAlto] = useState(0);
  const [firstPlay, setFirstPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [end, setEnd] = useState(false);
  const velocity = () => {
    if (!vel) {
      audioRef.current.pause();
      audioRef.current.playbackRate = 1.5;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.playbackRate = 1;
      audioRef.current.play();
    }
    setVel((prev) => !prev);
  };
  
  const playToggle = () => {
    if (!isPlaying) {
      if (!firstPlay) {
        setFirstPlay(true);
        let audio = audioRef.current;
        const audioctx = new AudioContext();

        //audio.playbackRate = 0.8;
        audio.play();
        audioSource = audioctx.createMediaElementSource(audio);

        analyser = audioctx.createAnalyser();
        audioSource.connect(analyser);

        audioSource.connect(audioctx.destination);
        analyser.fftSize = 32;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        // let barHeight;
        //  let x;
        function animate() {
          //   x = 0;
          analyser.getByteFrequencyData(dataArray);
          for (let i = 0; i < bufferLength; i++) {
            //   barHeight = dataArray[i]/2;
            setAlto(dataArray[8]);
          }
          requestAnimationFrame(animate);
        }
        animate();
      } else {
        audioRef.current.play();
      }
    } else {
      //  clearInterval(updatePlayer);
      audioRef.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  function formatTime(time) {
    const minutes =
      Math.floor(time / 60) < 10
        ? `0${Math.floor(time / 60)}`
        : Math.floor(time / 60);
    const seconds =
      Math.floor(time % 60) < 10
        ? `0${Math.floor(time % 60)}`
        : Math.floor(time % 60);
    return `${minutes}:${seconds}`;
  }

  const fwdAudio = () => {
    audioRef.current.currentTime += 5;
    setCurrent(audioRef.current.currentTime);
  };

  const rwdAudio = () => {
    audioRef.current.currentTime -= 5;
    setCurrent(audioRef.current.currentTime);
  };

  const handleRepeat = () => {
    audioRef.current.currentTime = 0;
    setEnd(false);
    setTimeout(() => {
      playToggle();
    }, 500);
  };

  useEffect(() => {
    if (isPlaying) {
      setCurrent(Math.floor(audioRef?.current?.currentTime));
      //  setDuration(Math.floor(audioRef?.current?.duration));
      if (current === duration - 1) {
        setCurrent(duration);
        setIsPlaying((prev) => !prev);
        setEnd(true);
      }
    }
  }, [isPlaying, repeat, audioRef?.current?.currentTime, current, duration]);

  useEffect(() => {
    if (end && repeat) {
      handleRepeat();
    }
  }, [end]);

  useEffect(() => {
    setTimeout(() => {
      setDuration(Math.floor(audioRef?.current?.duration));
    }, 100);
  }, [audioRef.current]);
  useEffect (()=>{
    setTimeout(() => {
      setDuration(Math.floor(audioRef?.current?.duration));
    }, 250);
  })

  const checkTotalTime = () => {
    return formatTime(duration - current);
  };

  return (
    <>
      <audio ref={audioRef} src={url} />
      <section className="audio-player">
        <div className="padre">
          <div
            className="circle"
            style={{
              width: `${200}px`,
              height: `${200}px`,
              boxShadow: `0px 0px 15px ${alto / 12}px #ecdfff`,
            }}
          >
            <div className="interno"></div>
          </div>
        </div>
        <section className="titulo">
          <h2>{title}</h2>
        </section>
        <section className="audio-position">
          <span>{formatTime(current)}</span>
          <section className="progress-bar">
            <section className="progress-bar-background"></section>
            <section
              className="progress"
              style={{ width: `${(current * 100) / duration}%` }}
            ></section>
          </section>
          <span>{checkTotalTime()}</span>
        </section>

        <section className="controls">
          <AppButton clase="backwd" icono={faFastBackward} accion={rwdAudio} />
          <ReaderBtn tipo="prev" clase="locked prev-track" />

          <AppButton
            clase="play"
            icono={!isPlaying ? faPlay : faPause}
            accion={playToggle}
          />
          <ReaderBtn tipo="next" clase="next-track" />
          <AppButton clase="fwd" icono={faFastForward} accion={fwdAudio} />
          <ReaderBtn
            tipo="repeat"
            clase={`${!repeat ? "locked" : ""} repeat`}
            accion={() => {
              setRepeat(!repeat);
            }}
          />
          {/* <AppButton clase="play" icono={faPlay} accion={velocity} /> */}
        </section>
      </section>
    </>
  );
};

export default Player;
