import React from "react";

const ReaderBtn = ({ texto, tipo, accion, clase }) => {
  return (
    <>
      {tipo === "prev" && (
        <div className={`read-btn ${clase}`} onClick={accion}>
          { texto && texto}
          <img src="../../../assets/play-prev.svg" alt="imagen" />
        </div>
      )}
      {tipo === "next" && (
        <div className={`read-btn ${clase}`} onClick={accion}>
          <img src="../../../assets/play-next.svg" alt="imagen" />
          {texto && texto}
        </div>
      )}
      {tipo==="repeat" && (
        <div className={`read-btn ${clase}`} onClick={accion}>
        <img src="../../../assets/repeat-audio.svg" alt="imagen" />
        {texto && texto}
      </div>
      )}
    </>
  );
};

export default ReaderBtn;
