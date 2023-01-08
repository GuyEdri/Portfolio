import ReactDom from "react-dom";

import classes from "./Modal.module.css";
import Button from "../Button/Button";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <div>
      <div className={classes.container}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Close</Button>
        </footer>
      </div>
    </div>
  );
};

const Modal = ({ onConfirm, title, message }) => {
  return (
    <div>
      {ReactDom.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Modal;
