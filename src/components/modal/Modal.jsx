import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modalOverlay/ModalOverlay";

import style from './Modal.module.css';

const modalsContainer = document.querySelector("#modals");

const Modal = ({ onCloseClick, onEscKeydown, children }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);

    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
    <ModalOverlay onClick={onCloseClick}>
      <div className={style.box}>
        <button type="button" className={style.button}>
          <CloseIcon type="primary" onClick={onCloseClick} />
        </button>
        {children}
      </div>
    </ModalOverlay>
    </>,
    modalsContainer
  );
};

export default Modal;
