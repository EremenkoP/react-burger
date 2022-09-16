import style from './ModalOverlay.module.css';
import { FC, MouseEventHandler } from 'react';

const ModalOverlay: FC<{onClick: MouseEventHandler<HTMLDivElement>}> = ({ onClick }) => {
  return <div onClick={(event)=>onClick(event)} className={style.overlay}></div>;
};

export default ModalOverlay;
