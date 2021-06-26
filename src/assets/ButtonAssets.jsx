import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
export default function ButtonAssets({ props, title }) {
  const { primary } = useSelector((state) => state.colors);
  return (
    <button
      style={{ backgroundColor: primary }}
      className={style.button}
      {...props}>
      {title}
    </button>
  );
}
