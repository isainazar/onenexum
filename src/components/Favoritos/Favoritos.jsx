import React, { useEffect, useState } from "react";
import useEspacioInfo from "../../helpers/hooks/useEspacioInfo";
import AppButton from "../AppButton";
import { useNavigate } from "react-router-dom";

const Favoritos = () => {
  const { getInfo } = useEspacioInfo();
  const [favoritos, setFavoritos] = useState(null);
  const navigate = useNavigate();
  const getData = async () => {
    const info = await getInfo("favs/getFav", localStorage.UID);
    setFavoritos(info);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="favoritos">
      <h3 className="title_big">Mis Favoritos</h3>
        <p>
            En esta sección podrás encontrar los recursos que has seleccionado como favoritos a lo largo de los ebooks.
        </p>
      {favoritos !== null && (
        <>
          {favoritos.map((fav) => {
            return <img className="fav-images"src={fav.url} />;
          })}
        </>
      )}

      <AppButton
        clase="primary-action"
        texto="VOLVER"
        accion={() => {
          navigate("/user/main");
        }}
      />
    </section>
  );
};

export default Favoritos;
