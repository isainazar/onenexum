import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useControl from "../../helpers/hooks/useControl";

const Controles = ({cantidad}) => {
    
  const { page, prev, next, move, start, end } = useControl(cantidad);
  return (
    <section className="controles">
      <span className={page === 1 && "hidden"} onClick={prev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <section className="indicator">
    
       
       {/*  <div className={page === 1 ? "active-page" : "inactive-page"}></div>
        <div className={page === 2 ? "active-page" : "inactive-page"}></div>
        <div className={page === 3 ? "active-page" : "inactive-page"}></div>
        <div className={page === 4 ? "active-page" : "inactive-page"}></div> */}
      </section>
      <span className={page === cantidad && "hidden"} onClick={next}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </section>
  );
};

export default Controles;
