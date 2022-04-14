import style from './ModalOverlay.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({ onClick }) => {
  return <div onClick={onClick} className={style.overlay}></div>;
};

ModalOverlay.propType = {
  onClick: PropTypes.func
}

export default ModalOverlay;
