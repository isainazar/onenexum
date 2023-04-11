import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppButton = ({ clase, texto, accion, icono,additional,type, iconClass }) => {
  return (
    <button className={clase} onClick={accion} type={type}>
       {additional && (<> <div className="userIcon"></div>
                <span>
                  ESPACIO <br /> PERSONAL
                </span></>)} 
      {icono && <FontAwesomeIcon icon={icono} className={iconClass}/>}
      {texto}
    </button>
  );
};

export default AppButton;
