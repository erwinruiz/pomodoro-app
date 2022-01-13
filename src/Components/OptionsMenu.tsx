import classes from "./OptionsMenu.module.css";
import { useContext } from "react";
import { Context } from "../store/context";

function OptionsMenu() {
  const { color, timeType, timeTypeHandler } = useContext(Context);

  return (
    <div className={classes.container}>
      <div
        className={`${classes.option} ${
          timeType === "pomodoro" && classes["option-active"]
        }`}
        style={{
          backgroundColor: `${
            timeType === "pomodoro" ? `var(--${color}-color)` : ""
          }`,
        }}
      >
        <p onClick={() => timeTypeHandler("pomodoro")}>pomodoro</p>
      </div>
      <div
        className={`${classes.option} ${
          timeType === "short-break" && classes["option-active"]
        }`}
        style={{
          backgroundColor: `${
            timeType === "short-break" ? `var(--${color}-color)` : ""
          }`,
        }}
      >
        <p onClick={() => timeTypeHandler("short-break")}>short break</p>
      </div>
      <div
        className={`${classes.option} ${
          timeType === "long-break" && classes["option-active"]
        }`}
        style={{
          backgroundColor: `${
            timeType === "long-break" ? `var(--${color}-color)` : ""
          }`,
        }}
      >
        <p onClick={() => timeTypeHandler("long-break")}>long break</p>
      </div>
    </div>
  );
}

export default OptionsMenu;
