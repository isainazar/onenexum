import React from "react";
import { useState } from "react";
import { useRef } from "react";

const ProgressBar = ({ questions,page,quiz}) => {

 page= page+1;
//console.log(Object.keys(questions).indexOf(`q${page}`))

  return (
    <div className="progressBar">
      <div className={`dot completed`}></div>
      <div className={`dot ${quiz? 'completed' : ''}`}></div>
      <div className={`dot ${page>=2? 'completed' : ''}`}></div>
      <div className={`dot ${page>=3? 'completed' : ''}`}></div>
      <div className={`dot ${page>=4? 'completed' : ''}`}></div>
      <div className={`dot ${page>=5? 'completed' : ''}`}></div>
      <div className={`dot ${page>=6? 'completed' : ''}`}></div>
      <div className={`dot ${page>=7? 'completed' : ''}`}></div>
      
   
 {/*      {Object.values(questions).map((question) => {
     
        return <div className={`dot ${question}`} ></div>;
      })}   */}
    </div>
  );
};

export default ProgressBar;
