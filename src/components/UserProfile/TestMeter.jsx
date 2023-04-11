import React from "react";
import {
  faChevronLeft,
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";

const TestMeter = ({ ...props }) => {
  const { result, min, max, clase, color, fondo, stroke } = props;
  const [loading, setLoading] = useState(true);
  const checkPlus = () => {
    let arr = [];
    for (let i = 0; i < result / 10; i++) {
      arr.push(i);
    }
    return arr.map((item) => {
      return (
        <FontAwesomeIcon
          key={item}
          icon={faChevronRight}
          className={`tendencia ${color}`}
        />
      );
    });
  };

  const checkMinus = () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < result / 10; i++) {
      arr.pop(i);
    }

    return arr.map((item) => {
      return (
        <FontAwesomeIcon
          key={item}
          icon={faChevronLeft}
          className={`tendencia ${color}`}
        />
      );
    });
  };

  const checkEqualLeft = () => {
    let arr = [0, 1, 2, 3, 4];
    return arr.map((item) => {
      return (
        <FontAwesomeIcon
          key={item}
          icon={faChevronLeft}
          className={`tendencia ${color}`}
        />
      );
    });
  };

  const checkEqualRight = () => {
    let arr = [0, 1, 2, 3, 4];
    return arr.map((item) => {
      return (
        <FontAwesomeIcon
          key={item}
          icon={faChevronRight}
          className={`tendencia ${color}`}
        />
      );
    });
  };

  const getStroke = () => {
    let stroke = 502 - (502 * result) / 100;
    return stroke;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);
  return (
    <>
      <section className="medidor">
        <div className="progressbar">
          <svg className="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="80"
              className={`progressbar__svg-circle ${clase} ${stroke}`}
              strokeDasharray="502" // esto es == 2 * pi * radio
              strokeDashoffset={loading ? "502" : getStroke()} //avance de stroke
            ></circle>
          </svg>
          <div className={`progressbar__text ${color} ${fondo} `}>
            <h2>{result}</h2>
            <h3>{max}</h3>
          </div>
        </div>
      </section>
      <section className="pad">
        <section className={`inner-pad ${clase} `}>
          <FontAwesomeIcon icon={faMinus} />
          <div className="tendencia">
            {result == 50 ? (
              <>
                <div className="left faded-right">{checkEqualLeft()}</div>
                <div className="right faded-left">{checkEqualRight()}</div>
              </>
            ) : (
              <>
                <div className="left faded-right">
                  {result < 50 && checkMinus()}
                </div>
                <div className="right faded-left">
                  {result > 50 && checkPlus()}
                </div>
              </>
            )}
          </div>
          <FontAwesomeIcon icon={faPlus} />
        </section>
        <section className="pad-footer">
          <span>{min}</span>
          <span>Tendencia</span>
          <span>{max}</span>
        </section>
      </section>
    </>
  );
};

export default TestMeter;
