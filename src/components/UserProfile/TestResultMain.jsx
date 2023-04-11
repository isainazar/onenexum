import React from "react";
import { faArrowLeft, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AppButton from "../AppButton";
import Background from "../Background/Background";
import CardHeader from "../CardHeader";
import { useNavigate } from "react-router-dom";

const TestResultMain = () => {
  const [view, setView] = useState(1);
  const navigate = useNavigate();
  const checkNext = () => {
    if (view === 1) {
      setView(2);
      window.scrollTo(0,0);
    } else {
      navigate("/user/test_result-all");
    }
  };
  const checkPrevious = ()=>{
    if(view===2){
      setView(1)
    }else{
      navigate(-1);
    }
  }
  return (
    <section className="main-view">
      <Background clase="test-info test-info_result" />
      <section className={`content test-result`}>
        <CardHeader titulo="RESULTADOS DEL TEST" clase="justify-center" />
        <div className={`exercise-description `}>
          {view === 1 && (
            <>
              <h2 className="title-test-result">
                <strong>Impacto de los rasgos de personalidad</strong>
                <br></br>
              </h2>
              <p className="p-test-result">
                Hay ventajas y desventajas para cada rasgo, particularmente en
                los extremos. Las personas extrovertidas y extremadamente
                sociables pueden ser dominantes e impulsivas, mientras que las
                personas tranquilas e introvertidas pueden aislarse y deprimirse
                fácilmente. Las personas extremadamente abiertas pueden
                dispersarse y abrumarse por sus propios pensamientos e ideas,
                mientras que las personas de mente cerrada pueden volverse
                estrechas e inflexibles. Las personas excepcionalmente
                concienzudas pueden ser obsesivas con el orden, críticas y
                rígidas, mientras que sus contrapartes más despreocupadas pueden
                ser desordenadas, indisciplinadas y descuidadas. Las personas
                con una estabilidad emocional muy alta pueden involucrarse en
                comportamientos arriesgados y peligrosos, mientras que aquellos
                que son más neuróticos pueden preocuparse tanto por la ansiedad
                y el dolor que no pueden funcionar. Finalmente, es posible que
                las personas que buscan complacer permanentemente y son poco
                asertivas nunca se defiendan a sí mismas, mientras que las que
                son demasiado asertivas pueden ser agresivas, insensibles y
                acosadoras.
              </p>
              <br></br>
              <p className="p-test-result">
                Es importante que analices las características de los pilares de
                la personalidad que mencionamos previamente y tengas en cuenta
                cual es tu inclinación para poder trabajar a partir de ella. 
              </p>
            </>
          )}
          {view === 2 && (
            <>
              <h2 className="title-test-result">
                <strong>Cambio</strong>
                <br></br>
              </h2>
              <p className="p-test-result">
                La personalidad es razonablemente estable a lo largo de la vida
                y también está fuertemente influenciada por factores
                hereditarios o genéticos. A pesar de esto, la personalidad puede
                ampliarse o incluso transformarse. A medida que las personas
                envejecen, por ejemplo, tienden a volverse más agradables,
                conscientes y emocionalmente estables.
              </p>
              <p className="p-test-result">
                Cambiar de personalidad significa cambiar hábitos de acción. El
                cambio de personalidad requiere la formulación de objetivos
                futuros claros, así como disciplina y práctica. Las personas que
                son demasiado amables pueden aprender a valerse por sí mismas.
                Las personas desordenadas pueden volverse más ordenadas. Las
                personas introvertidas pueden volverse socialmente hábiles. Las
                personas que experimentan niveles paralizantes de emociones
                negativas pueden aprender a revertirlo, etc. 
              </p>
            </>
          )}
        </div>

        <section className="buttons-cont">
          <AppButton
            clase="app-back"
            accion={checkPrevious}
            icono={faArrowLeft}
          />
          <AppButton
            clase={`primary-action primary-action__stripe`}
            texto={view===1? 'SIGUIENTE' : 'VER RESULTADOS'}
            accion={checkNext}
          />
        </section>
      </section>
    </section>
  );
};

export default TestResultMain;
