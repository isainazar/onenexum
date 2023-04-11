import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { purple } from "@mui/material/colors";
import { useState } from "react";

export default function VerticalSlider() {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];
  function valuetext(value) {
    return `${value}`;
  }

  const [estado, setEstado] = useState(0);

  const[valor,setValor] =useState(null)

  const[emo,setEmo] = useState(1);
  const getValue = (e) => {
    setValor(e.target.value)
    setEstado(e.target.value);
    
    if (estado < 20) {
      setEmo(1);
    } else if (estado >= 20 && estado < 40) setEmo(2);
    else if (estado >= 40 && estado < 60) setEmo(3);
    else if (estado >= 60 && estado < 80) setEmo(4);
    else setEmo(5);
  };


  return (
    <section className="slider-wrapper">
      <Box sx={{ height: 300}}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          orientation="vertical"
        
          value={valor}
          aria-label="Custom Marks"
          getAriaValueText={valuetext}
          valueLabelDisplay="off"
          onKeyDown={preventHorizontalKeyboardNavigation}
          onChange={getValue}
        />
      </Box>
      <section className="emojis">
        <span className={`${emo==5? "bigger": ''} 
                            ${emo==4?"big" :''}
                            ${emo==3?"normal" :''}
                            ${emo==2?"small" :''}
                            ${emo==1?"smaller" :''}
                            
                            
                            
                            `}>😁</span>
        <span className={`${emo==5? "big": ''} 
                            ${emo==4?"bigger" :''}
                            ${emo==3?"big" :''}
                            ${emo==2?"normal" :''}
                            ${emo==1?"small" :''}     
                            `}>🙂</span>
        <span className={`${emo==5? "normal": ''} 
                            ${emo==4?"big" :''}
                            ${emo==3?"bigger" :''}
                            ${emo==2?"big" :''}
                            ${emo==1?"normal" :''}     
                            `}>😐</span>
        <span className={`${emo==5? "small": ''} 
                            ${emo==4?"normal" :''}
                            ${emo==3?"big" :''}
                            ${emo==2?"bigger" :''}
                            ${emo==1?"big" :''}     
                            `}>🙁</span>
        <span className={`${emo==5? "smaller": ''} 
                            ${emo==4?"small" :''}
                            ${emo==3?"normal" :''}
                            ${emo==2?"big" :''}
                            ${emo==1?"bigger" :''}     
                            `}>😢</span>
        
      </section>

   
    </section>
  );
}
