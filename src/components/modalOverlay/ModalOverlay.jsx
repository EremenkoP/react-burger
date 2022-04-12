import style from './ModalOverlay.module.css';

const ModalOverlay = ({ onClick, children }) => {
  return <div onClick={onClick} className={style.overlay}>
     {children}
  </div>;
};

export default ModalOverlay;
