import { useState } from "react";

const useControl = (pages) => {
  const [page, setPage] = useState(1);
  const [init, setInit] = useState();
  const [final, setFinal] = useState();
  const next = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const start = (e) => {
    setInit(e.touches[0].clientX);
  };
  const end = (e) => {
    setFinal(e.touches[0].clientX);
  };
  const move = (e) => {
    if (final - init < -70 || final - init > 70) {
      if (init < final) {
        if (page > 1) {
          setPage(page - 1);
        }
      }
      if (init > final) {
        if (page < pages) {
          setPage(page + 1);
        }
      }
    }
  };

  return {
    page,
    next,
    prev,
    start,
    end,
    move,
  };
};

export default useControl;
