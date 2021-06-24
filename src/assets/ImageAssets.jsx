import React from 'react';
import style from './style.module.scss';
export default function ImageComponent({
  image,
  imageStyle,
  containerStyle,
  imageAlt,
}) {
  return (
    <div className={style.imageContainer} style={containerStyle}>
      <img
        src={image}
        alt={imageAlt}
        style={imageStyle}
        className={style.image}
      />
    </div>
  );
}
