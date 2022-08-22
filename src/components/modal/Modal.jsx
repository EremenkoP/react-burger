import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import ModalOverlay from "../modalOverlay/ModalOverlay";

import style from './Modal.module.css';

const modalsContainer = document.querySelector("#modals");

const Modal = ({ onCloseClick, children, modalTitle}) => {

  React.useEffect(() => {

    const handleEscKeydown = (event) => {
      event.key === "Escape" && onCloseClick();
    };

    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, [onCloseClick]);

  return ReactDOM.createPortal(
    <>
    <div className={style.box}>
      {modalTitle && <h2 className="mt-10 ml-10 text text_type_main-large">{modalTitle}</h2>}
      <button type="button" className={style.button}>
        <CloseIcon type="primary" onClick={onCloseClick} />
      </button>
      {children}
      </div>
      <ModalOverlay onClick={onCloseClick} />
    </>,
    modalsContainer
  );
};

Modal.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modaleTitle: PropTypes.string
};

export default Modal;
