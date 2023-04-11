import { useRef, useState } from "react";
import useEspacioInfo from "./useEspacioInfo";

const useFavoritos = () => {
  const { getInfo, sendInfo } = useEspacioInfo();
  const favsTrue = useRef(false);

  const [favSelected, setFavSelected] = useState([]);

  const checkFavTrue = (id) => {
    for (const fav of favSelected) {
      if (fav == id) {
        return "fav_button-selected";
      }
    }
  };

  const postFav = async(favId,url) =>{
    const datos = await getInfo("favs/getFav", localStorage.UID);
    const match = datos.filter((fav)=> fav.favId == favId)
    if(match.length===0){
      const datos = {
        user: localStorage.UID,
        favId: favId,
        url: url,
      };
    await sendInfo("favs/postFav", datos);     
    }
  }

  const checkFav = async () => {
    const datos = await getInfo("favs/getFav", localStorage.UID);
    if (datos.length > 0) {
      favsTrue.current = true;
      let favs = [];
      for (const fav of datos) {
        favs.push(fav.favId);
      }
      console.log(favs)
      setFavSelected(favs);
      return;
    } 
  };
  return {
    checkFav,
    checkFavTrue,
    postFav,
    favsTrue,
  };
};
export default useFavoritos;
