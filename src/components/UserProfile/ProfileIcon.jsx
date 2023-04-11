import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProfileIcon = ({ imagen, texto, alt, click, hidden, fondo, journal }) => {
  return (
    <div className="profile-icon">
      {!journal && (
        <>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={`completed ${hidden ? "hidden" : ""}`}
          />
          <img src={imagen} alt={alt} onClick={click} className="icono" />
          {fondo && <img src={fondo} alt="fondo" className="bg" />}
          <p className="icon-text">{texto}</p>
        </>
      )}
      {journal && (
        <>
          <img src={imagen} alt={alt} onClick={click} className="journal-img"/>
          <p className=" icon-text icon-text-journal">{texto}</p>
        </>
      )}
    </div>
  );
};

export default ProfileIcon;
