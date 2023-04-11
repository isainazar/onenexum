import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { url } from "../../helpers/general";
import { actionTypes } from "../../types/actionTypes";
import { authTypes } from "../../types/authTypes";
import AppButton from "../AppButton";
import Background from "../Background/Background";


  const SuccessAccount = ()=>{
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
   
    const login = async ()=>{ 
      const datos = {
        email:localStorage.u,
        password:localStorage.d
      }
      await axios
      .post(`${url}/api/user/login`, datos)
      .then((res) => {
        dispatch({type: actionTypes.initialValue, payload: res})
         localStorage.setItem("token", res.data.token);
        localStorage.setItem("UID", res.data.id_user);
        localStorage.removeItem("user_type");
        dispatch({ type: authTypes.login });
        localStorage.removeItem("u");
        localStorage.removeItem("d");
        localStorage.removeItem("quiz");
        localStorage.removeItem("IEjFs");
        localStorage.removeItem("user_type");
        localStorage.removeItem("nombre");
        navigate("/home"); 
      })
      .catch((err) => {
        if (err.response.status === 402) {
          navigate("/home");
        }
       // setLoginError(err.response.data.message);
      });
    }
   

    return(
      <section className="main-view">
        <Background clase="account-created"/>
        <section className="content account">
            <h2>¡Se ha creado tu cuenta!</h2>
            <p className="register">{`Se ha registrado la cuenta con la dirección de correo ${localStorage.u}`}</p>
            <p className="acceso">¡Ya puedes acceder a One Nexum y ver que cosas tiene preparada para tí!</p>
            <AppButton clase="primary-action" texto="CONTINUAR" accion={login}/>
            <img src="../../assets/particles-account.svg"/>

        </section>
      </section>
    )
  }

  export default SuccessAccount;