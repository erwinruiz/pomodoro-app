import { Fragment, useState } from "react";
import classes from "./App.module.css";
import ModalSettings from "./Components/ModalSettings";
import OptionsMenu from "./Components/OptionsMenu";
import Timer from "./Components/Timer";
import Backdrop from "./Components/UI/Backdrop";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settingsHandler = () => {
    setIsModalOpen((state) => !state);
  };

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
          onClick={settingsHandler}
        />
      </footer>
      {isModalOpen && <Backdrop onCloseModal={settingsHandler} />}
      {isModalOpen && <ModalSettings onCloseModal={settingsHandler} />}
    </Fragment>
  );
}

export default App;
