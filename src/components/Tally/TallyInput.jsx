import { forwardRef } from "react";
// eslint-disable-next-line react/display-name
const TallyInput = forwardRef((props, ref) => {
  return (
    <>
      <input type="number" ref={ref} max="5" min="1" id={props.id} />
    </>
  );
});

export default TallyInput;
