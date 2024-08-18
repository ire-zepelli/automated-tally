import { useState, useRef } from "react";
import TallyInput from "./TallyInput";
import Tally from "./Tally";
import classes from "./TallyList.module.css";

const initialState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const createInitialStates = () =>
  Array(31)
    .fill()
    .map(() => ({ ...initialState }));

const TallyList = () => {
  const inputRefs = Array.from({ length: 31 }, () => useRef(null));
  const [count, setCount] = useState(createInitialStates());

  const submitHandler = () => {
    for (let i = 0; i < 31; i++) {
      const key = parseInt(inputRefs[i].current.value, 10);
      const id = inputRefs[i].current.id;
      console.log(inputRefs[i].current);

      setCount((prevState) => {
        const updatedState = [...prevState];
        updatedState[id] = { ...prevState[id], [key]: prevState[id][key] + 1 };
        return updatedState;
      });
    }

    inputRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
  };

  return (
    <>
      {count.map((_, index) => (
        <div className={classes.wrapper} key={index}>
          <div>
            <p> Q {index + 1}</p>
            <TallyInput
              count={count[index]}
              ref={inputRefs[index]}
              id={index}
            />
          </div>
          <Tally count={count[index]} />
        </div>
      ))}
      <button onClick={submitHandler}>Evaluate</button>
    </>
  );
};

export default TallyList;
