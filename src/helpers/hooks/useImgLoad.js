import { useEffect, useState } from "react";

const useImgLoad = (page) => {

  const [imgLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const images = [...document.querySelectorAll("img")];
    const promises = [];
    images.forEach((img) => {
      const promise = new Promise((resolve) => {
        img.onload = () => {
          resolve();
        };
      });
      promises.push(promise);
    });
    Promise.all(promises).then(() => {
      setTimeout(()=>{setImageLoaded(true);},200)  
    });
  }, [page]);
  return {
    imgLoaded
  }
};
export default useImgLoad;
