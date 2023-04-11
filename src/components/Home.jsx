import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "./Background/Background";
import AppButton from "./AppButton";
import UserContext from "../contexts/UserContext";
import useEspacioInfo from "../helpers/hooks/useEspacioInfo";

const Home = () => {
  const [view, setView] = useState(false);
  const handleView = () => {
    if (!view) {
      setView(true);
    } else if (view) {
      setTimeout(() => {
        setView(false);
      }, 300);
    }
  };

  const{getInfo} = useEspacioInfo();
  const { data, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const validateCompleted = () => {
    if (data.data.user.ejercicios[0].section.completed) {
      navigate("user/main");
    }
  };

   const checkDaily= async ()=>{
    const check=  await  getInfo('daily', localStorage.UID);
    if(!check ){
     navigate('/daily')
    }
  } 
  

  useEffect(()=>{
    checkDaily()
  },[]) 


  return (
    <>
      <section className="main-view">
        <Background clase={!view ? "home-bg" : "info-user-bg"} />

        <section className={`content ${!view ? "home" : "info-user slide-up"}`}>
          {!view && (
            <>
              <h1 className="title_intro">
                Empieza a trascender aquello que te limita
              </h1>
              <h2 className="title_info">A continuación verás lo siguiente</h2>
              <AppButton
                clase="primary-action"
                texto="SECCIÓN A"
                accion={() => navigate("/seccionA/guia")}
              />
              <AppButton
                clase="primary-action"
                texto="SECCIÓN B"
                accion={() => navigate("/seccionB/guia")}

              />

              <div className="separador_big"></div>
              <AppButton
                clase={`primary-action icon-btn`}
                additional={true}
                accion={()=>{navigate('/user/main')}}
              />

              <AppButton
                clase="more-info"
                texto="¿Qué es esto?"
                accion={()=>{navigate('/user/info')}}
              />
            </>
          )}
          {view && (
            <>
              <div className="icon">
                <img
                  src="../../assets/userIcon.png"
                  alt="user Icon"
                  className="icon-img"
                />
              </div>

              <section>
                <p>
                  Tu espacio personal es el lugar donde podrás complementar tu
                  información y detallar más quien eres. Esto incluye un bonus
                  especial al que podrás acceder una vez finalizado el pack.
                </p>
                <p>Además te regalamos un test de personalidad.</p>
                <p>
                  Este espacio es fundamental ya que mientras más completes tu
                  perfil, más contenido exclusivo y personalizado podremos
                  preparar para tí.
                </p>
                <p>
                  Allí además. tendrás acceso a un diario virtual con asistencia
                  guiada al que podrás acceder cuando y donde quieras.
                </p>
              </section>
              <button className="app-back" onClick={handleView}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default Home;
