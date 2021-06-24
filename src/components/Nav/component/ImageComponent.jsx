import React from 'react';
import style from '../style.module.scss';
export default function ImageComponent({ image }) {
  return (
    <div className={style.imageContainer}>
      <img src={image} alt='profile' className={style.image} />
    </div>
  );
}
