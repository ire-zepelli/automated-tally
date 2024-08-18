import { useState, useRef } from "react";
import Tally from "./Tally";

const initialState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

const TallyList = () => {
  const inputRef = useRef();
  const [count, setCount] = useState(initialState);
  const submitHandler = () => {};

  return (
    <>
      <input type="number" ref={inputRef} />
      <Tally count={count} />
      <button onClick={submitHandler}>Evaluate</button>
    </>
  );
};

export default TallyList;
