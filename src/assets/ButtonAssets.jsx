import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
export default function ButtonAssets({ props, title, styles, isSubmitting }) {
  const { primary } = useSelector((state) => state.colors);
  return (
    <button
      style={{ backgroundColor: primary, ...styles }}
      className={style.button}
      {...props}
      type='submit'>
      {isSubmitting ? <span>Please Wait...</span> : title}
    </button>
  );
}
