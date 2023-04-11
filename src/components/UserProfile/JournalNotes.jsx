import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import ProfileIcon from "./ProfileIcon";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";
const JournalNotes = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [notes, setNotes] = useState(false);
  const [asc, setAsc] = useState();
  const [datos, setDatos] = useState();
  const { getInfo } = useEspacioInfo();

  const orderDesc = () => {
    setAsc((prev) => !prev);
  };
  const orderAsc = () => {
    setAsc((prev) => !prev);
  };

  const goBack = () => {
    navigate(-1);
  };
  /*  useEffect(() => {
    if (asc) {
      datos.sort((a, b) => a.id - b.id);
    } else {
      datos.sort((a, b) => b.id - a.id);
    }
  }, [asc]);  */

  const getData = async () => {
    const data = await getInfo("espacios/getJournal", localStorage.UID);
    setDatos(data);
    if(data.length>0){
      setNotes(true)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="user-secondary user-secondary_journal">
      <ProfileIcon
        imagen="../assets/notes-icon.svg"
        texto="Mis Notas"
        alt="diario personal"
        journal={true}
      />
      <section className="order">
        <div
          className="exercise-description"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          <p>Ordenar por fecha</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {showOptions && (
          <>
            <div className="order-option" onClick={orderAsc}>
              <FontAwesomeIcon
                icon={faCheck}
                className={`${!asc && "hidden"}`}
              />
              <p>Ascendente</p>
            </div>
            <div className="order-option" onClick={orderDesc}>
              <FontAwesomeIcon
                icon={faCheck}
                className={`${asc && "hidden"}`}
              />
              <p>Descendente</p>
            </div>
          </>
        )}
      </section>
      <section className="notes-container">
        {notes &&
          datos.map((note) => {
            return (
              <section
                className="note"
                key={note.id}
                onClick={() => {
                  navigate(`${note.id}`);
                }}
              >
                <p>{note.date}</p>
                <AppButton clase="app-fwd" icono={faArrowRight} />
              </section>
            );
          })}
        {!notes && (
          <>
            <h2 className="register-title">No tienes registros realizados</h2>
          </>
        )}
      </section>

      <section className="buttons-cont buttons-cont_journal">
        <AppButton clase="app-back" icono={faArrowLeft} accion={goBack} />
      </section>
    </section>
  );
};

export default JournalNotes;
