import classes from "./OptionsMenu.module.css";

function OptionsMenu() {
  return (
    <div className={classes.container}>
      <div className={`${classes.option} ${classes["option-active"]}`}>
        <p>pomodoro</p>
      </div>
      <div className={classes.option}>
        <p>short break</p>
      </div>
      <div className={classes.option}>
        <p>long break</p>
      </div>
    </div>
  );
}

export default OptionsMenu;
