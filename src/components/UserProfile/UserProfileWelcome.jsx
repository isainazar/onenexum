import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";

const UserProfileWelcome = () => {
const navigate = useNavigate();
  return (
    <section className="user-profile">
      <section className="top"></section>
      <h2 className="title_user">¡Nos gustaría saber mas de ti!</h2>
      <div className="exercise-description">
        <p>
          Para seguir utilizando los servicios de nuestra app y acceder a más
          contenido, nos sería de mucha ayuda que pienses en nosotros como un
          diario personal, donde puedes colocar tus intereses, deseos y todo lo
          que consideres necesario para guiarte hacia un mejor bienestar.
        </p>
      </div>
      <AppButton texto="SIGUIENTE" clase="primary-action" accion={()=>{navigate("/user/main")}}/>
    </section>
  );
};

export default UserProfileWelcome;
