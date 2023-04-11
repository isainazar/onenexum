import React from "react";
const Check = ({ type, name, estado, setEstado,label,index }) => {

  const handleCheck = (e) => {
    if(e.target.checked) setEstado({...estado, [e.target.name]: label})
    else setEstado({...estado,[e.target.name]: null})
    }
  
  return (
    <section className={`check-group `}>
      <input
        className="check"
        type={type}
        name={name}
        id={name}
        key={name}
        value={estado}
        onChange={handleCheck}
       
      />
      <label htmlFor={name}>{label}</label>
    </section>
  );
};

export default Check;
