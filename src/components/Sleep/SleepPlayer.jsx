import {
  faArrowLeft,

} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import  frecuenciasRelajacion  from "../../helpers/freqsRelajacion";
import AppButton from "../AppButton";
import FreqPlayer from "./FreqPlayer";

const SleepPlayer = () => {
  const freq1 = useRef();
  const navigate = useNavigate();
  const [freq,setFreq] = useState(1)
  const { id } = useParams();
  
  useEffect(()=>{
    if(id === 'a1'){
      setFreq(1)
    }
    if(id === 'a2'){
      setFreq(2)
    }
    if(id === 'a3'){
      setFreq(3)
    }
    if(id === 'a4'){
      setFreq(4)
    }
    if(id === 'b1'){
      setFreq(5)
    }
    if(id === 'b2'){
      setFreq(6)
    }
    if(id === 'b3'){
      setFreq(7)
    }
    if(id === 'c1'){
      setFreq(8)
    }
  },[])

  return (
    <section className="main-view sleep-view categories player">
      <section className="top">
        <div className="space"></div>
        <h1>{frecuenciasRelajacion[freq].title}</h1>
        <p>
          Este tipo de frecuencias fusiona ondas sonoras armónicas y calmas, su
          tonalidad es suave e ideal si eres de los que se inclinan a disfrutar
          más de sonidos puros sin interferencia alguna.
        </p>
      </section>
      <section className="bottom">
       <FreqPlayer url={frecuenciasRelajacion[freq].url}/>
      </section>

      <section className="boton">
        <AppButton
          clase="app-back"
          icono={faArrowLeft}
          accion={() => {
            navigate("/sleep");
          }}
        />
      </section>
    </section>
  );
};

export default SleepPlayer;
