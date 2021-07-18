import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

export default function ColorModelComponent({ title, children, closeHandler }) {
  const { text, primary } = useSelector((state) => state.colors);

  return (
    <div className={style.modelContainer} style={{ color: text }}>
      <div className={style.container}>
        {/* Heading */}
        <div className={style.heading}>
          <span style={{ color: primary }}>{title}</span>
          <div className={style.iconContainer}>
            <AiOutlineClose className={style.icon} onClick={closeHandler} />
          </div>
        </div>
        {/* Body */}
        <div className={style.body}>{children}</div>
      </div>
    </div>
  );
}
