import React from "react";
import AppButton from "../AppButton";
import ProfileIcon from "./ProfileIcon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import ProfileContext from "../../contexts/ProfileContext";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import useImgLoad from "../../helpers/hooks/useImgLoad";

const UserMain = () => {
  const navigate = useNavigate();

  const { data } = useContext(UserContext);

  const contextProfile = useContext(ProfileContext);
  
  const checkPay = () => {
    if (data.usuario.status) {
      navigate("/user/journal");
    }
  };

  const checkSueno = () => {
    if (data.usuario.status) {
      navigate("/sleep");
    }
  };
  const checkImg = () => {
    if (data.usuario.status) {
      return "../assets/diario.svg";
    } else {
      return "../assets/diario-locked.svg";
    }
  };
  const ir = () => {
    navigate("/home");
  };
  //const { imgLoaded } = useImgLoad();

  return (
    <section className="user-main user-main_unpaid">
      <section className="user-header">
        <h2 className="title_user">Tu espacio personal</h2>
        <img src="https://res.cloudinary.com/dt3ggg7t5/image/upload/v1679337622/logo-sin-texto_guvju1.svg" alt="logo ON" />
      </section>

  
        <section className="profile-icons">
          <ProfileIcon
            hidden={contextProfile.data.profile.p1 ? false : true}
            imagen="../assets/datos.svg"
            fondo="../assets/datos-bg.svg"
            texto={["Datos", <br key="1"></br>, "Personales"]}
            alt="usuario"
            click={() => {
              navigate("/user/data");
            }}
          />
      {/*     <ProfileIcon
            hidden={contextProfile.data.profile.p2 ? false : true}
            imagen="../assets/vida.svg"
            texto="Vida personal y relaciones"
            fondo="../assets/vida-bg.svg"
            alt="corazón"
            click={() => {
              navigate("/user/life");
            }}
          /> */}
          <ProfileIcon
            hidden={contextProfile.data.profile.p3 ? false : true}
            imagen="../assets/gustos.svg"
            fondo="../assets/gustos-bg.svg"
            texto="Gustos e intereses"
            alt="máscaras"
            click={() => {
              navigate("/user/interest");
            }}
          />
          <ProfileIcon
            hidden={contextProfile.data.profile.p4 ? false : true}
            imagen="../assets/test.svg"
            fondo="../assets/test-bg.svg"
            texto={["Test de", <br key="2"></br>, "personalidad"]}
            alt="add icon"
            click={() => {
              navigate("/user/test_map");
            }}
          />
          <ProfileIcon
            hidden={contextProfile.data.profile.p5 ? false : true}
            imagen="../assets/trabajo.svg"
            fondo="../assets/trabajo-bg.svg"
            texto="Trabajo"
            alt="maletín"
            click={() => {
              navigate("/user/work");
            }}
          />
          <ProfileIcon
            hidden={contextProfile.data.profile.p6 ? false : true}
            imagen={checkImg()}
            fondo="../assets/diario-bg.svg"
            texto="Diario Virtual"
            alt="nubes"
            click={checkPay}
          />
          <ProfileIcon
            hidden={contextProfile.data.profile.p ? false : true}
            imagen={
              data.usuario.status
                ? "../assets/sueno-premium.svg"
                : "../assets/sueno-locked.svg"
            }
            fondo="../assets/sueno-bg.svg"
            texto="Sueño"
            alt="nubes"
            click={checkSueno}
          />
          <ProfileIcon
            hidden={contextProfile.data.profile.p ? false : true}
            imagen={
              data.usuario.status
                ? "../assets/fav-icon.svg"
                : "../assets/fav-icon-locked.svg"
            }
            fondo="../assets/fav-bg.svg"
            texto="Mis Favoritos"
            alt="start"
            click={()=>navigate('/favs')}
          />
        </section>
    
       
      
      {!data.usuario.status && (
        <section className="read-unpaid">
          <img src="../../assets/premium-std.svg" alt="diamond" />
          <p>
            Para acceder al{" "}
            <span
              onClick={() => {
                navigate("/user/journal_info");
              }}
            >
              Diario Virtual
            </span>{" "}
            y{" "}
            <span
              onClick={() => {
                navigate("/sleep");
              }}
            >
              Sueño
            </span>{" "}
            y <span>Mis Favoritos </span>deberás suscribirte a{" "}
            <span
              onClick={() => {
                navigate("/payment");
              }}
            >
              One Nexum Premium.
            </span>
          </p>
        </section>
      )}
      <section className="buttons-cont">
        <AppButton clase="app-back" accion={ir} icono={faHome} />
        <AppButton clase="primary-action" accion={ir} texto="FINALIZAR" />
      </section>
    </section>
  );
};

export default UserMain;
