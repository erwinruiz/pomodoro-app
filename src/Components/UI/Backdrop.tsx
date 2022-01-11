import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

type BackdropProps = {
  onCloseModal: () => void;
};

export default function Backdrop(props: BackdropProps) {
  const { onCloseModal } = props;

  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={onCloseModal} />,
    document.getElementById("backdrop-root")!
  );
}
