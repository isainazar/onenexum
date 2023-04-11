import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const FreqPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const interval = useRef(null);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [end, setEnd] = useState(false);

  const updateCurrentTime = () => {
    setCurrent((prevCurrent) => {
      const newCurrent = audioRef.current.currentTime;
      if (Math.floor(newCurrent) === duration) {
        setCurrent(duration);
        setIsPlaying(false);
        setEnd(true);
        clearInterval(interval.current);
        return;
      }
      return newCurrent;
    });
  };
  const playToggle = () => {
    if (!isPlaying) {
      interval.current = setInterval(updateCurrentTime, 200);
      audioRef.current.play();
      setEnd(false);

    } else {
      audioRef.current.pause();
      clearInterval(interval.current);
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
    if (end && repeat) {
      handleRepeat();
    }
  }, [end]);

  useEffect(() => {
    setTimeout(() => {
      setDuration(Math.floor(audioRef?.current?.duration));
    }, 100);
  }, [audioRef.current]);

  useEffect(() => {
    setTimeout(() => {
      setDuration(Math.floor(audioRef?.current?.duration));
    }, 250);
  });

  const checkTotalTime = () => {
    if (duration - current > 0) {
      return formatTime(duration - current);
    }
    return formatTime(0);
  };

  return (
    <>
      <audio ref={audioRef} src={url} />
      <section className={`waves ${isPlaying? "": "stopped"}`}>
          <div className="stroke"></div>
          <div className="stroke"></div>
          <div className="stroke"></div>
        </section>
      <section className="audio-player">
        <section className="audio-position">
          <span>{!end? formatTime(current) : formatTime(duration)}</span>
          <section className="progress-bar">
            <section className="progress-bar-background"></section>
            <section
              className="progress"
              style={{ width: `${(current * 100) / duration}%` }}
            ></section>
          </section>
          <span>{checkTotalTime()}</span>
        </section>

        <section className="sleep-controls">
          <img
            className="smallButtons"
            src="../../../assets/repeat-sleep.svg"
            onClick={(prev) => {
              setRepeat(!prev);
            }}
          />
          <img
            className="smallButtons"
            src="../../../assets/back-sleep.svg"
            onClick={rwdAudio}
          />
          <img
            src={
              isPlaying
                ? "../../../assets/pause-btn.svg"
                : "../../../assets/play-btn.svg"
            }
            onClick={playToggle}
          />
          <img
            className="smallButtons"
            src="../../../assets/fwd-sleep.svg"
            onClick={fwdAudio}
          />
          <img
            className="smallButtons"
            src="../../../assets/shuffle-sleep.svg"
          />
        </section>
      </section>
    </>
  );
};

export default FreqPlayer;
