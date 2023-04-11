import React from "react";

const ReaderAction = ({ icon, alt, text, accion }) => {
  return (
    <div className="reader-action" onClick={accion}>
      <img src={icon} alt={alt} />
      <p className="pie">{text}</p>
    </div>
  );
};

export default ReaderAction;
