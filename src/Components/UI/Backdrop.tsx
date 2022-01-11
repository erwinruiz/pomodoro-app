import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";
import { useContext } from "react";
import { Context } from "../../store/context";

export default function Backdrop() {
  const { modalHandler } = useContext(Context);

  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={modalHandler} />,
    document.getElementById("backdrop-root")!
  );
}
