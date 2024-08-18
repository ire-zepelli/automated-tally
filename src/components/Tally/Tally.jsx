import classes from "./Tally.module.css";

const Tally = (props) => {
  return (
    <div className={classes.wrapper}>
      <table>
        <tr>
          <td>{props.count[1]}</td>
          <td>{props.count[2]}</td>
          <td>{props.count[3]}</td>
          <td>{props.count[4]}</td>
          <td>{props.count[5]}</td>
        </tr>
      </table>
    </div>
  );
};

export default Tally;
