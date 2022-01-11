import classes from "./ModalSettings.module.css";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { Context } from "../store/context";

function ModalSettings() {
  const { modalHandler } = useContext(Context);

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
              defaultValue={25}
              min={1}
            />
            <div className={classes["arrows-container"]}>
              <img src="./assets/icon-arrow-up.svg" alt="arrow up" />
              <img src="./assets/icon-arrow-down.svg" alt="arrow down" />
            </div>
          </div>
        </div>
        <div className={classes["time-option"]}>
          <p>short break</p>
          <div className={classes["input-container"]}>
            <input
              type="number"
              aria-label="short break time"
              defaultValue={5}
              min={1}
            />
            <div className={classes["arrows-container"]}>
              <img src="./assets/icon-arrow-up.svg" alt="arrow up" />
              <img src="./assets/icon-arrow-down.svg" alt="arrow down" />
            </div>
          </div>
        </div>
        <div className={classes["time-option"]}>
          <p>long break</p>
          <div className={classes["input-container"]}>
            <input
              type="number"
              aria-label="long break time"
              defaultValue={15}
              min={1}
            />
            <div className={classes["arrows-container"]}>
              <img src="./assets/icon-arrow-up.svg" alt="arrow up" />
              <img src="./assets/icon-arrow-down.svg" alt="arrow down" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["third-section"]}>
        <h3>FONT</h3>
        <div className={classes["fonts-container"]}>
          <div className={classes["outer-border"]}>
            <div className={classes.font}>
              <p>Aa</p>
            </div>
          </div>
          <div className={classes["outer-border"]}>
            <div className={classes.font}>
              <p>Aa</p>
            </div>
          </div>
          <div className={classes["outer-border"]}>
            <div className={classes.font}>
              <p>Aa</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["fourth-section"]}>
        <h3>COLOR</h3>
        <div className={classes["colors-container"]}>
          <div className={classes["outer-border"]}>
            <div className={`${classes.color} ${classes["first-color"]}`}></div>
          </div>
          <div className={classes["outer-border"]}>
            <div
              className={`${classes.color} ${classes["second-color"]}`}
            ></div>
          </div>
          <div className={classes["outer-border"]}>
            <div className={`${classes.color} ${classes["third-color"]}`}></div>
          </div>
        </div>
      </div>
      <div className={classes["button-container"]}>
        <button>Apply</button>
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
