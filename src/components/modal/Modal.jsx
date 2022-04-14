import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modalOverlay/ModalOverlay";
import PropTypes from "prop-types";

import style from './Modal.module.css';

const modalsContainer = document.querySelector("#modals");


const Modal = ({ onCloseClick, children, closeModals , modaleTitle}) => {

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeModals();
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
    <div className={style.box}>
      <h2 className="mt-10 ml-10 text text_type_main-large">{modaleTitle}</h2>
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
  onCloseClick: PropTypes.func,
  children: PropTypes.node,
  closeModals: PropTypes.func,
  modaleTitle: PropTypes.string
};

export default Modal;
