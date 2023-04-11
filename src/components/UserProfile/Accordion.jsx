import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Accordion = ({
  title,
  radio,
  check,
  state,
  setState,
  nombre,
  options,
  array,
  clase
}) => {
  const [expand, setExpand] = useState(false);
  const accordionModif = () => {
    setExpand(!expand);
  };
  const handleSelect = (e) => {
    if (!array) {
      setState(e.target.value);
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  const checkStatus = (opt) => {
    let f = state.find((e) => e === opt);
    if (f === opt) {
      return true;
    }
  };

  const checkChecked = (opt) => {
    if (!array &&  state === opt) {
      return true;
    } else if (array && state[nombre]===opt){
      return true;
    }  
  };
  return (
    <section className={`accordion ${clase}`}>
      <div className="accordion-header" onClick={accordionModif}>
        <div className="exercise-description">
          <p>{title}</p>
        </div>
        <FontAwesomeIcon
          icon={(!expand && faChevronDown) || (expand && faChevronUp)}
        />
      </div>
      {expand && (
        <div className={`accordion-content ${check && "checks"} `}>
          {radio &&
            options.map((opt) => {
              return (
                <div key={opt}>
                  <label>{opt}</label>
                  <input
                    type="radio"
                    name={nombre}
                    value={opt}
                    onClick={handleSelect}
                    defaultChecked={checkChecked(opt)}
                  />
                </div>
              );
            })}
          {check &&
            options.map((opt) => {
              return (
                <div key={opt}>
                  <label>{opt}</label>
                  <input
                    type="checkbox"
                    value={opt}
                    onClick={setState}
                    defaultChecked={checkStatus(opt)}
                    readOnly
                  />
                </div>
              );
            })}
        </div>
      )}
    </section>
  );
};

export default Accordion;
