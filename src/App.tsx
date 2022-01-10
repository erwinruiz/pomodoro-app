import { Fragment } from "react";
import classes from "./App.module.css";
import OptionsMenu from "./Components/OptionsMenu";
import Timer from "./Components/Timer";

function App() {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src="./assets/logo.svg" alt="logo" />
      </header>
      <main className={classes.main}>
        <OptionsMenu />
        <Timer />
      </main>
      <footer className={classes.footer}>
        <img src="./assets/icon-settings.svg" alt="setting icon" />
      </footer>
    </Fragment>
  );
}

export default App;
