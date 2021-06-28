import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import ButtonAssets from '../assets/ButtonAssets';
export default function ModelComponent({ title, children }) {
  const { text, primary } = useSelector((state) => state.colors);
  return (
    <div className={style.modelContainer} style={{ color: text }}>
      <div className={style.container}>
        <div className={style.heading}>
          <span style={{ color: primary }}>{title}</span>
          <AiOutlineClose className={style.icon} />
        </div>
        <div className={style.body}>{children}</div>
        <div className={style.footer}>
          <ButtonAssets title='Submit' styles={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}
