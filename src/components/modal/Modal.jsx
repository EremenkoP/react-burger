import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modalOverlay/ModalOverlay";

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
      <div>
        <button type="button">
          <CloseIcon type="error" onClick={onCloseClick} />
        </button>
        {children} {/* <IngredientDetails /> */}
      </div>
      <ModalOverlay onClick={onCloseClick} />
    </>,
    modalsContainer
  );
};

export default Modal;
