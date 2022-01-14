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
          <p className={classes["time-option-title"]}>pomodoro</p>
          <div className={classes["selected-time-container"]}>
            <p className={classes["selected-time"]}>{pomodoro}</p>
            <div className={classes["arrows-container"]}>
              <div
                className={classes["arrow-container"]}
                onClick={() => increment("pomodoro")}
              >
                <img src="./assets/icon-arrow-up.svg" alt="arrow up" />
              </div>
              <div
                className={classes["arrow-container"]}
                onClick={() => decrement("pomodoro")}
              >
                <img src="./assets/icon-arrow-down.svg" alt="arrow down" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes["time-option"]}>
          <p className={classes["time-option-title"]}>short break</p>
          <div className={classes["selected-time-container"]}>
            <p className={classes["selected-time"]}>{shortBreak}</p>
            <div className={classes["arrows-container"]}>
              <div
                className={classes["arrow-container"]}
                onClick={() => increment("short-break")}
              >
                <img src="./assets/icon-arrow-up.svg" alt="arrow up" />
              </div>
              <div
                className={classes["arrow-container"]}
                onClick={() => decrement("short-break")}
              >
                <img src="./assets/icon-arrow-down.svg" alt="arrow down" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes["time-option"]}>
          <p className={classes["time-option-title"]}>long break</p>
          <div className={classes["selected-time-container"]}>
            <p className={classes["selected-time"]}>{longBreak}</p>
            <div className={classes["arrows-container"]}>
              <div
                className={classes["arrow-container"]}
                onClick={() => increment("long-break")}
              >
                <img src="./assets/icon-arrow-up.svg" alt="arrow up" />
              </div>
              <div
                className={classes["arrow-container"]}
                onClick={() => decrement("long-break")}
              >
                <img src="./assets/icon-arrow-down.svg" alt="arrow down" />
              </div>
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
