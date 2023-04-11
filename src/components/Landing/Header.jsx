import React from "react";
import { useNavigate } from "react-router-dom";


const Header = ({ clase,accion }) => {
  const navigate = useNavigate();
  const checkClase = () => {
    if (clase == "header-info" || clase == "landing" || clase == "login") {
      return (
        <img
          src="https://res.cloudinary.com/dt3ggg7t5/image/upload/v1679337622/logo-sin-texto_guvju1.svg"
          alt="One nexum Logo"
          className="logo_landing"
        />
      );
    } else if (clase === "header-premium") {
      return (
        <img
          src="../../assets/logo-premium.svg"
          alt="One nexum Logo"
          className="logo_landing"
        />
      );
    } else {
      return (
        <img
          src="../../assets/worried-face.svg"
          alt="One nexum Logo"
          className="logo_landing"
        />
      );
    }
  };

  return (
    <>
      <header className={clase}>
        <a onClick={() => navigate("/landing")}>{checkClase()}</a>
        {clase==='header-premium' && <img src='../../assets/quit-btn.svg' className='quit-btn' onClick={accion}/>}
      </header>
    </>
  );
};

export default Header;
