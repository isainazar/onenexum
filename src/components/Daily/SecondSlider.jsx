import React from "react";
import EmocionesOptions from "./EmocionesOptions";

const SecondSlider = ({ primary, secondary, setSecondary }) => {

  return (
    <section className="second-slider">
      <section className="main-emo">
        <img src={primary.url} alt="emoji" />
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
          </svg>
        </div>
      </section>
      <EmocionesOptions primary={primary} secondary={secondary} setSecondary={setSecondary} />
    </section>
  );
};

export default SecondSlider;
