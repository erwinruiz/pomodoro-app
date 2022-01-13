import classes from "./Timer.module.css";
import { useContext } from "react";
import { Context } from "../store/context";

function Timer() {
  const { color } = useContext(Context);

  return (
    <div className={classes.container}>
      <div className={classes["inside-container"]}>
        <p className={classes.timer}>17:59</p>
        <p className={classes.text}>PAUSE</p>
        <svg
          viewBox="0 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            style={{ stroke: `var(--${color}-color)` }}
          />
        </svg>
      </div>
    </div>
  );
}

export default Timer;
