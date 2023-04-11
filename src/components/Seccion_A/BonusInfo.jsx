import { faStar,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import AppButton from '../AppButton';
import Background from '../Background/Background';
import CardHeader from '../CardHeader';


const BonusInfo = () => {
  const {data} = useContext(UserContext);
  
const[view,setView] =useState(false);
const navigate = useNavigate();
const handleView = () =>{
    setView(true);
}
const checkBonus = () =>{
  if(!data.usuario.status){
      return 'locked'
    }
}
const validateBonusBegin = () =>{
  if(data.usuario.status){
      navigate('/seccionA/bonus')
    }
}
  return (
    <section className="main-view">
        <Background clase="bonus-a"/>
        <section className='content ex-content'>
        <CardHeader icono={faStar} additionalClass={"numbers ex"} />
          <div className="separador bonus-color-bg"></div>
          <h2 className="title_exercise">Meditación</h2>
          <div
            className={`exercise-description ${
              !view && "exercise-description_fade"
            }`}
          >
            <p>
            Como contenido complementario, te enseñaremos algunas técnicas del Mindfulness, práctica que se basa en la consciencia y en una percepción agudizada para aceptar el presente. Con ella, consigues prestar una atención plena a lo que sientes, a lo que haces y lo que piensas. 
            </p>
          </div>
          <span className={`see  bonus-color ${view && "hidden"}`} onClick={handleView}>
            Ver Más
          </span>
          <section className="buttons-cont">
            <AppButton
              clase="app-back"
              accion={() => {
                navigate(-1);
              }}
              icono={faArrowLeft}
            />
            <AppButton
              clase={`primary-action ${checkBonus()}`} texto="INICIAR" 
              accion={validateBonusBegin}
            />
          </section>
      
        </section>
    </section>
  )
}

export default BonusInfo