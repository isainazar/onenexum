import { useEffect, useRef, useState } from "react";

const CodeInput = ({ valor, cambio }) => {
  const [val, setVal] = useState('');
  const [index, setIndex] = useState(0);
  const array = [0, 1, 2, 3, 4, 5];
  const myRefs = useRef(array);

  const saveThisRef = (index) => (element) => {
    myRefs.current[index] = element;
  };

  const handleCodeChange = (e) => {
    const newVal = [...val];
    newVal[index] = e.target.value;
    setVal(newVal);
    cambio(newVal.join(""));
  };
  const onKey = (e) => {
    if (e.target.value !== "") {
      if (index < array.length - 1) {
        setIndex(index + 1);
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
  };

  const onFocus = (index) => () => {
    const newVal = [...val];
    newVal[index] = "";
    setIndex(index);
    setVal(newVal);
    cambio(newVal.join(""));
  };

  useEffect(() => {
    if (index < myRefs.current.length) {
      myRefs.current[index].focus();
    }
  }, [index, array.length, myRefs]);
  return array.map((index) => (
    <input
      type="tel"
      className="email-validation_input numbers"
      ref={saveThisRef(index)}
      onChange={handleCodeChange}
      onKeyUp={onKey}
      onFocus={onFocus(index)}
      value={val[index] || ""}
      maxLength="1"
      key={index}
    />
  ));
};

export default CodeInput;
