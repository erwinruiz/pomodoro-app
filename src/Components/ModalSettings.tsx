import classes from "./ModalSettings.module.css";
import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import { Context } from "../store/context";

function ModalSettings() {
  const {
    modalHandler,
    colorHandler,
    timeTypeSettingHandler,
    timeTypeSetting: {
      pomodoro: initialPomodoro,
      shortBreak: initialShortBreak,
      longBreak: initialLongBreak,
    },
    fontFamilyHandler,
    fontFamily: initialFontFamily,
    color: initialColor,
  } = useContext(Context);

  const [color, setColor] = useState(initialColor);
  const [pomodoro, setPomodoro] = useState(initialPomodoro);
  const [shortBreak, setShortBreak] = useState(initialShortBreak);
  const [longBreak, setLongBreak] = useState(initialLongBreak);
  const [fontFamily, setFontFamily] = useState(initialFontFamily);

  const settingHandler = () => {
    timeTypeSettingHandler({ pomodoro, shortBreak, longBreak });
    fontFamilyHandler(fontFamily);
    colorHandler(color);
    modalHandler();
  };

  const increment = (timeType: string) => {
    switch (timeType) {
      case "pomodoro":
        setPomodoro((state) => (state < 60 ? state + 1 : 60));
        break;
      case "short-break":
        setShortBreak((state) => (state < 40 ? state + 1 : 40));
        break;
      case "long-break":
        setLongBreak((state) => (state < 50 ? state + 1 : 50));
        break;
    }
  };

  const decrement = (timeType: string) => {
    switch (timeType) {
      case "pomodoro":
        setPomodoro((state) => (state > 1 ? state - 1 : 1));
        break;
      case "short-break":
        setShortBreak((state) => (state > 1 ? state - 1 : 1));
        break;
      case "long-break":
        setLongBreak((state) => (state > 1 ? state - 1 : 1));
        break;
    }
  };

  const inputHandler = (timeType: string, value: string) => {
    switch (timeType) {
      case "pomodoro":
        setPomodoro(parseInt(value));
        break;
      case "short-break":
        setShortBreak(parseInt(value));
        break;
      case "long-break":
        setLongBreak(parseInt(value));
        break;
    }
  };

  const content = (
    <div className={classes.container}>
      <div className={classes["first-section"]}>
        <h2>Settings</h2>
        <img
          src="./assets/icon-close.svg"
          alt="close icon"
          onClick={modalHandler}
        />
      </div>
      <div className={classes["second-section"]}>
        <h3>TIME (MINUTES)</h3>
        <div className={classes["time-option"]}>
          <p>pomodoro</p>
          <div className={classes["input-container"]}>
            <input
              type="number"
              aria-label="pomodoro time"
              value={pomodoro}
              onChange={(e) => inputHandler("pomodoro", e.target.value)}
            />
            <div className={classes["arrows-container"]}>
              <img
                src="./assets/icon-arrow-up.svg"
                alt="arrow up"
                onClick={() => increment("pomodoro")}
              />
              <img
                src="./assets/icon-arrow-down.svg"
                alt="arrow down"
                onClick={() => decrement("pomodoro")}
              />
            </div>
          </div>
        </div>
        <div className={classes["time-option"]}>
          <p>short break</p>
          <div className={classes["input-container"]}>
            <input
              type="number"
              aria-label="short break time"
              value={shortBreak}
              onChange={(e) => inputHandler("short-break", e.target.value)}
            />
            <div className={classes["arrows-container"]}>
              <img
                src="./assets/icon-arrow-up.svg"
                alt="arrow up"
                onClick={() => increment("short-break")}
              />
              <img
                src="./assets/icon-arrow-down.svg"
                alt="arrow down"
                onClick={() => decrement("short-break")}
              />
            </div>
          </div>
        </div>
        <div className={classes["time-option"]}>
          <p>long break</p>
          <div className={classes["input-container"]}>
            <input
              type="number"
              aria-label="long break time"
              value={longBreak}
              onChange={(e) => inputHandler("long-break", e.target.value)}
            />
            <div className={classes["arrows-container"]}>
              <img
                src="./assets/icon-arrow-up.svg"
                alt="arrow up"
                onClick={() => increment("long-break")}
              />
              <img
                src="./assets/icon-arrow-down.svg"
                alt="arrow down"
                onClick={() => decrement("long-break")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["third-section"]}>
        <h3>FONT</h3>
        <div className={classes["fonts-container"]}>
          <div
            className={`${classes["outer-border"]} ${
              fontFamily === "Kumbh Sans" ? classes["font-active"] : ""
            }`}
            onClick={() => setFontFamily("Kumbh Sans")}
          >
            <div className={classes.font}>
              <p>Aa</p>
            </div>
          </div>
          <div
            className={`${classes["outer-border"]} ${
              fontFamily === "Roboto Slab" ? classes["font-active"] : ""
            }`}
            onClick={() => setFontFamily("Roboto Slab")}
          >
            <div className={classes.font}>
              <p>Aa</p>
            </div>
          </div>
          <div
            className={`${classes["outer-border"]} ${
              fontFamily === "Space Mono" ? classes["font-active"] : ""
            }`}
            onClick={() => setFontFamily("Space Mono")}
          >
            <div className={classes.font}>
              <p>Aa</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["fourth-section"]}>
        <h3>COLOR</h3>
        <div className={classes["colors-container"]}>
          <div
            className={`${classes["outer-border"]} ${
              color === "primary" ? classes["color-active"] : ""
            }`}
            onClick={() => setColor("primary")}
          >
            <div className={`${classes.color} ${classes["first-color"]}`}></div>
          </div>
          <div
            className={`${classes["outer-border"]} ${
              color === "secondary" ? classes["color-active"] : ""
            }`}
            onClick={() => setColor("secondary")}
          >
            <div
              className={`${classes.color} ${classes["second-color"]}`}
            ></div>
          </div>
          <div
            className={`${classes["outer-border"]} ${
              color === "third" ? classes["color-active"] : ""
            }`}
            onClick={() => setColor("third")}
          >
            <div className={`${classes.color} ${classes["third-color"]}`}></div>
          </div>
        </div>
      </div>
      <div className={classes["button-container"]}>
        <button onClick={settingHandler}>Apply</button>
        <div className={classes.layer} />
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("overlay-root")!
  );
}

export default ModalSettings;
