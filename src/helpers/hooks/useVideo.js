import { useRef, useState } from "react";

const useVideo = (videoRef, setSteps) => {
  const [play, setPlay] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [complete, setComplete] = useState(false);
  const interval = useRef(null);
 

  const initVideo = () => {
    if (videoRef.current !== null) {
      setTimeout(() => {
        setTimeLeft(videoRef.current.duration);
        if (play) {
          interval.current = setInterval(updateCurrentTime, 1000);
        }
      }, 1000);
    }
  };


  const updateCurrentTime = () => {
    setCurrent((prevCurrent) => {
      const newCurrent = videoRef.current.currentTime;
      if (Math.floor(newCurrent) === Math.floor(videoRef.current.duration)) {
        clearInterval(interval.current);
        setPlay(false);
        setSteps(2);
        return;
      }
      return newCurrent;
    });
  };

  return {
    updateCurrentTime,
    play,
    setPlay,
    current,
    setCurrent,
    timeLeft,
    setTimeLeft,
    complete,
    setComplete,
    initVideo,
  };
};
export default useVideo;
