import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Background = ({
  clase,
  play,
  estado,
  setEstado,
  completado,
  setCompletado,
  setSteps,
  setAnimation
}) => {
  const handlePlay = () => {
    if (completado) {
      setCompletado(false);
    }
    {setSteps && setSteps(1);}
    {setAnimation && setTimeout(()=>{
      setAnimation(true)
    },2000);}
    setEstado(!estado);
   /*  setTimeout(() => {
      setCompletado(true);
    }, 10000); */
  };
  return (
    <>
      <section className={`background ${clase}`}>
        {play && (
          <button className="play" onClick={handlePlay} onKeyDown={(e)=>{
            if (e.code === "Space") {
              e.preventDefault();
            }
          }}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}
        
      </section>
    </>
  );
};

export default Background;
