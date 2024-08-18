import Tally from "./Tally";

const TallyInput = () => {
  return (
    <>
      <input type="number" ref={inputRef} />
      <Tally count={count} />
    </>
  );
};
