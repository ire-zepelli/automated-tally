import { useState, useRef } from "react";
import Tally from "./Tally";

const initialState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

const TallyList = () => {
  const inputRef = useRef();
  const [count, setCount] = useState(initialState);
  const submitHandler = () => {
    const key = parseInt(inputRef.current.value, 10);

    setCount((prevState) => {
      return { ...prevState, [key]: prevState[key] + 1 };
    });
  };

  return (
    <>
      <input type="number" ref={inputRef} />
      <Tally count={count} />
      <button onClick={submitHandler}>Evaluate</button>
    </>
  );
};

export default TallyList;
