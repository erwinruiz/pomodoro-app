import { Fragment, useContext } from "react";
import classes from "./App.module.css";
import ModalSettings from "./Components/ModalSettings";
import OptionsMenu from "./Components/OptionsMenu";
import Timer from "./Components/Timer";
import Backdrop from "./Components/UI/Backdrop";
import { Context } from "./store/context";

function App() {
  const { modalHandler, isModalOpen } = useContext(Context);

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
        <img
          src="./assets/icon-settings.svg"
          alt="setting icon"
          onClick={modalHandler}
        />
      </footer>
      {isModalOpen && <Backdrop />}
      {isModalOpen && <ModalSettings />}
    </Fragment>
  );
}

export default App;
