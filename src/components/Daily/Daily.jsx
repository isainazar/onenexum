import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import AppButton from "../AppButton";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../contexts/UserContext";
import SecondSlider from "./SecondSlider";
import Modal from "../Modal/Modal";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";

axios.defaults.withCredentials = true;

const Daily = () => {
  const { data } = useContext(UserContext);
  const navigate = useNavigate();
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState(null);
  const [signError, setSignError] = useState({
    error: false,
    message: "Debes seleccionar una opción para continuar",
  });
  const [emotion, setEmotion] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const { sendInfo, getInfo } = useEspacioInfo();

  const handleModalClose = () => {
    setSignError({ ...signError, error: false });
  };
  const sendDaily = async () => {
    const info = {
      primary: primary.emotion,
      secondary: secondary,
      user: localStorage.UID,
    };
    await sendInfo("daily", info, "/home");
  };

  const handleContinue = () => {
    if (primary === null) {
      if (emotion.first || emotion.second) {
        emotion.first
          ? setPrimary({
              emotion: "bad",
              value: true,
              url: "../../assets/emo1.gif",
            })
          : setPrimary({
              emotion: "bad",
              value: true,
              url: "../../assets/emo2.gif",
            });
      } else if (emotion.third) {
        setPrimary({
          emotion: "iddle",
          value: true,
          url: "../../assets/emo3.gif",
        });
      } else if (emotion.fourth || emotion.fifth) {
        emotion.fourth
          ? setPrimary({
              emotion: "good",
              value: true,
              url: "../../assets/emo4.gif",
            })
          : setPrimary({
              emotion: "good",
              value: true,
              url: "../../assets/emo5.gif",
            });
      }
    }

    if (primary !== null) {
      if (secondary !== null) {
        sendDaily();
      } else {
        setSignError({ ...signError, error: true });
      }
    }
  };

  const checkImg = () => {
    if (emotion.first) {
      return <img src="../assets/emo1-bg.gif" className="slider-particles" />;
    }
    if (emotion.second) {
      return <img src="../assets/emo2-bg.gif" className="slider-particles" />;
    }
    if (emotion.third) {
      return <img src="../assets/emo3-bg.gif" className="slider-particles" />;
    }
    if (emotion.fourth) {
      return <img src="../assets/emo4-bg.gif" className="slider-particles" />;
    }
    if (emotion.fifth) {
      return <img src="../assets/emo5-bg.gif" className="slider-particles" />;
    }
  };

  const checkBg = () => {
    if (emotion.first) {
      return "main-slider-emo1";
    }
    if (emotion.second) {
      return "main-slider-emo2";
    }
    if (emotion.third) {
      return "main-slider-emo3";
    }
    if (emotion.fourth) {
      return "main-slider-emo4";
    }
    if (emotion.fifth) {
      return "main-slider-emo5";
    }
  };

  const checkDaily = async () => {
    const check = await getInfo("daily", localStorage.UID);
    if (check) {
      navigate("/home");
    }
  };

  useEffect(() => {
    if(data.usuario){
    checkDaily();}
  }, []);
  
  return (
    <section className={`main-view main-slider ${checkBg()}`}>
      <section
        className={`content ${
          primary === null ? "content-slider" : "second-slider"
        }`}
      >
        {primary === null && (
          <>
            {" "}
            <section className="slider-header">
              <h2>
                Buenos días,<br></br> {data? data.usuario.name : ""}
              </h2>
              <img src="../../assets/slider-avatar.svg" alt="avatar" />
              <p>¿Cómo te sientes hoy?</p>
            </section>
            <Slider setEmotion={setEmotion} emotion={emotion} />
          </>
        )}
        {primary !== null && (
          <SecondSlider
            primary={primary}
            secondary={secondary}
            setSecondary={setSecondary}
          />
        )}

        <section className="buttons-cont">
          {/*    <AppButton clase="app-back" icono={faClockRotateLeft} /> */}
          <AppButton
            clase="primary-action"
            texto="CONTINUAR"
            accion={handleContinue}
          />
        </section>
      </section>
      {checkImg()}
      {signError.error && (
        <Modal
          signError={signError}
          success={{ status: false }}
          handleModalClose={handleModalClose}
          quizMissing={false}
          validation={{ status: false }}
        />
      )}
    </section>
  );
};

export default Daily;
