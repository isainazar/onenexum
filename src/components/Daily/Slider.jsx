import React, { useEffect, useRef, useState } from "react";

const Slider = ({ emotion, setEmotion }) => {
  let AnchoSec;
  let AnchoTot;
  const [init, setInit] = useState();
  /*  const [emotion, setEmotion] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  }); */
  const inner = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  const img5 = useRef();
  let timeout;

  const start = (e) => {
    setInit(e.touches[0].clientX);
  };

  const revisar = () => {
    let pos = inner.current.scrollLeft;

    if (pos < 75) {
      setEmotion({
        first: true,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
      });
    } else if (pos > 75 && pos < 180) {
      setEmotion({
        first: false,
        second: true,
        third: false,
        fourth: false,
        fifth: false,
      });
    } else if (pos > 180 && pos < 280) {
      setEmotion({
        first: false,
        second: false,
        third: true,
        fourth: false,
        fifth: false,
      });
    } else if (pos > 280 && pos < 380) {
      setEmotion({
        first: false,
        second: false,
        third: false,
        fourth: true,
        fifth: false,
      });
    } else if (pos > 380) {
      setEmotion({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: true,
      });
    }
  };

  function derecha() {
    let pos = inner.current.scrollLeft;
    //  console.log(pos)
    /*    if (pos < 75) {
      setEmotion({
        first: true,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 100) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else  */ if (pos > 15 && pos < 115) {
      setEmotion({
        first: false,
        second: true,
        third: false,
        fourth: false,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 300) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else if (pos > 135 && pos < 235) {
      setEmotion({
        first: false,
        second: false,
        third: true,
        fourth: false,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 500) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else if (pos > 235 && pos < 335) {
      setEmotion({
        first: false,
        second: false,
        third: false,
        fourth: true,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 700) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else if (pos > 335) {
      setEmotion({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: true,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 900) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    }
  }

  function izquierda() {
    let pos = inner.current.scrollLeft;
    if (pos < 115) {
      setEmotion({
        first: true,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 100) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else if (pos > 115 && pos < 235) {
      setEmotion({
        first: false,
        second: true,
        third: false,
        fourth: false,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 300) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else if (pos > 235 && pos < 335) {
      setEmotion({
        first: false,
        second: false,
        third: true,
        fourth: false,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 500) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else if (pos > 335 && pos < 435) {
      setEmotion({
        first: false,
        second: false,
        third: false,
        fourth: true,
        fifth: false,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 700) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    } else if (pos > 435) {
      setEmotion({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: true,
      });
      AnchoSec = (inner.current.scrollWidth - 500) / 2;
      AnchoTot = inner.current.clientWidth;
      let posicion = (AnchoTot - 900) / 2;
      let newPos = AnchoSec - posicion;
      inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
    }
  }

  const scroll = (e) => {
    revisar();
    if (init > e.touches[0].clientX) {
      clearTimeout(timeout);
      timeout = setTimeout(derecha, 400);
    } else if (init < e.touches[0].clientX) {
      clearTimeout(timeout);
      timeout = setTimeout(izquierda, 400);
    }

    /*  clearTimeout(timeout);
    timeout = setTimeout(function () {
      let pos = inner.current.scrollLeft;
      if (pos < 75) {
        setEmotion({
          first: true,
          second: false,
          third: false,
          fourth: false,
          fifth: false,
        });
        AnchoSec = (inner.current.scrollWidth - 500) / 2;
        AnchoTot = inner.current.clientWidth;
        let posicion = (AnchoTot - 100) / 2;
        let newPos = AnchoSec - posicion;
        inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
      } else if (pos > 75 && pos < 180) {
        setEmotion({
          first: false,
          second: true,
          third: false,
          fourth: false,
          fifth: false,
        });
        AnchoSec = (inner.current.scrollWidth - 500) / 2;
        AnchoTot = inner.current.clientWidth;
        let posicion = (AnchoTot - 300) / 2;
        let newPos = AnchoSec - posicion;
        inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });

      } else if (pos > 180 && pos < 280) {
        setEmotion({
          first: false,
          second: false,
          third: true,
          fourth: false,
          fifth: false,
        });
        AnchoSec = (inner.current.scrollWidth - 500) / 2;
        AnchoTot = inner.current.clientWidth;
        let posicion = (AnchoTot - 500) / 2;
        let newPos = AnchoSec - posicion;
        inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
      
      } else if (pos > 280 && pos < 380) {
        setEmotion({
          first: false,
          second: false,
          third: false,
          fourth: true,
          fifth: false,
        });
        AnchoSec = (inner.current.scrollWidth - 500) / 2;
        AnchoTot = inner.current.clientWidth;
        let posicion = (AnchoTot - 700) / 2;
        let newPos = AnchoSec - posicion;
        inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });

      } else if (pos > 380) {
        setEmotion({
          first: false,
          second: false,
          third: false,
          fourth: false,
          fifth: true,
        });
        AnchoSec = (inner.current.scrollWidth - 500) / 2;
        AnchoTot = inner.current.clientWidth;
        let posicion = (AnchoTot - 900) / 2;
        let newPos = AnchoSec - posicion;
        inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });

      }
    }, 200); */
    /*  
    }  */
  };

  const checkClass1 = () => {
    if (emotion.first) {
      return "selected";
    } else if (emotion.second) {
      return "not-selected-big";
    } else {
      return "not-selected";
    }
  };
  const checkClass2 = () => {
    if (emotion.second) {
      return "selected";
    } else if (emotion.first || emotion.third) {
      return "not-selected-big";
    } else {
      return "not-selected";
    }
  };
  const checkClass3 = () => {
    if (emotion.third) {
      return "selected";
    } else if (emotion.second || emotion.fourth) {
      return "not-selected-big";
    } else {
      return "not-selected";
    }
  };
  const checkClass4 = () => {
    if (emotion.fourth) {
      return "selected";
    } else if (emotion.third || emotion.fifth) {
      return "not-selected-big";
    } else {
      return "not-selected";
    }
  };
  const checkClass5 = () => {
    if (emotion.fifth) {
      return "selected";
    } else if (emotion.fourth) {
      return "not-selected-big";
    } else {
      return "not-selected";
    }
  };

  const checkGlobo = () => {
    if (emotion.first) {
      return "red";
    } else if (emotion.second || emotion.third) {
      return "yellow";
    } else if (emotion.fourth || emotion.fifth) {
      return "green";
    }
  };

  useEffect(() => {
    AnchoSec = (inner.current.scrollWidth - 500) / 2;
    AnchoTot = inner.current.clientWidth;
    let posicion = (AnchoTot - 100) / 2;
    let newPos = AnchoSec - posicion;
    inner.current.scrollTo({ Top: 0, left: newPos, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="main-sl">
        <section className="slider" ref={inner}>
          <section
            className="slider-inner "
            onTouchStart={start}
            onTouchMove={scroll}
          >
            <div className="item"></div>
            <div className="item" ref={img1}>
              <img src="../../assets/emo1.gif" className={checkClass1()} />
            </div>
            <div className="item" ref={img2}>
              <img src="../../assets/emo2.gif" className={checkClass2()} />
            </div>
            <div className="item" ref={img3}>
              <img src="../../assets/emo3.gif" className={checkClass3()} />
            </div>
            <div className="item" ref={img4}>
              <img src="../../assets/emo4.gif" className={checkClass4()} />
            </div>
            <div className="item" ref={img5}>
              <img src="../../assets/emo5.gif" className={checkClass5()} />
            </div>

            <div className="item"></div>
          </section>
        </section>
        <div className="globe-cont">
          <svg
            width="88"
            height="148"
            viewBox="0 0 88 148"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z" />
            <path d="M43.5 122.5C50.6797 122.5 56.5 116.68 56.5 109.5C56.5 102.32 50.6797 96.5 43.5 96.5C36.3203 96.5 30.5 102.32 30.5 109.5C30.5 116.68 36.3203 122.5 43.5 122.5Z" />
            <path d="M5 64L31.5 114.5H55.46L83.2 64H5Z" />
            <path d="M44 148C48.9706 148 53 143.971 53 139C53 134.029 48.9706 130 44 130C39.0294 130 35 134.029 35 139C35 143.971 39.0294 148 44 148Z" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Slider;
