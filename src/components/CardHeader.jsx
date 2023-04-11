import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardHeader = ({ index, titulo, additionalClass, clase, icono, premium, testTitle }) => {
  return (
    <section className={`card-header ${clase ? clase : ""}`}>
      {index && (
        <div className="indicador">
          <h2 className={`${additionalClass && additionalClass}`}>{index}</h2>
        </div>
      )}
      {icono && (
        <div className="indicador bonus-color-bg">
          <FontAwesomeIcon icon={icono} />
        </div>
      )}
     {
      premium && (
        <img src="../../assets/premium-std.svg" alt="diamond" className="premium-icon"/>
      )
     }

      {titulo && <h1 className="title_header">{titulo}</h1>}
      {testTitle && <h3 className="test-title">{testTitle}</h3>}
    </section>
  );
};

export default CardHeader;
