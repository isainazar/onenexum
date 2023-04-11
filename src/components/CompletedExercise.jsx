import React from "react";

const CompletedExercise = () => {
  return (
    <>
      <img
        src="../assets/success.gif"
        alt="check insignia"
        className="completed"
      />
      <h3 className="exercise-indicator">
        <span>¡Completado!</span>
      </h3>
    </>
  );
};

export default CompletedExercise;
