import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CodeInput from "../SignUp/CodeInput";

const Modal = ({
  signError,
  quizMissing,
  handleModalClose,
  value,
  onChange,
  validation,
  success,
  codeValid,
  handleCodeVerify,
}) => {
  const navigate = useNavigate();
  const checkAction = ()=>{
    if(!success.status){
    handleModalClose()}
    else{
      navigate('/landing')
    }
  }

  const checkStatus = () => {
    if (success.status === "check") {
      return "";
    } else if (!success.status) {
      return "¡Upss!";
    } else if (success.status === true) {
      return "¡Genial!";
    }
  };
  const stopScrolling = (e)=>{
    e.preventDefault();
  }
  useEffect(()=>{
    container.current.addEventListener("touchmove", stopScrolling,{passive:false})
  },[])
  const container = useRef()
  return (
    <section className="modal-pop" ref={container}>
      <section className={`inner slide-up ${codeValid===false? "invalid-code" : ""}`}>
        {signError.error && <img src="../../assets/error.gif" width="180px" />}
        {codeValid === null && (
          <>
            <img
              src="../../assets/email.gif"
              width="180px"
              className="email-gif"
            />

            {validation.status && (
              <>
                <form className="email-validation">
                  <section className="codigo-cont">
                    <CodeInput valor={value} cambio={onChange} />
                  </section>
                  {validation.status && codeValid === null && (
                    <p>{validation.message}</p>
                  )}

          
                </form>
                <button className="primary-action" onClick={handleCodeVerify}>
                  VERIFICAR
                </button>
              </>
            )}
          </>
        )}

        {(codeValid === true || success.status === true) && (
         
          <img src="../../assets/success.gif" width="180px" />

     
        )}

        {codeValid === false && validation.status && (
          <>
            <img src="../../assets/error.gif" width="180px" />
            <form className="email-validation">
              <section className="codigo-cont">
                <CodeInput valor={value} cambio={onChange} />
              </section>

              {codeValid === false && (
                <p style={{color:"#D70000"}}>
                  Has introducido un código incorrecto. Por favor asegúrate de
                  ingresar el código correctamente.
                </p>
              )}
            </form>
            <button className="primary-action" onClick={handleCodeVerify}>
              VERIFICAR
            </button>
          </>
        )}
        {(success.status===true && <>
        <p>¡Genial!</p>
        <p>Fuiste agregado a nuestro Newsletter</p>
        </>)}

        {signError.error  && (
            <>
              <p className="title_medium">{checkStatus()}</p>
              <p className="title_small">
                {(signError.error && signError.message) }
              </p>
            </>
          )}

        {quizMissing ? (
          <button className="primary-action" onClick={() => navigate("/quiz")}>
            HACER QUIZ
          </button>
        ) : (
          !validation.status && (
            <button className="primary-action" onClick={checkAction}>
              ENTENDIDO
            </button>
          )
        )}

        {signError.error && (
          <p className="subtitle">
            Si crees que esto es un error, por favor contáctanos a través de{" "}
            <a href="mailto:">soporte@onenexum.com</a>
          </p>
        )}
      </section>
    </section>
  );
};

export default Modal;
