import React from 'react';
import style from '../style.module.scss';
import { IoMdColorPalette } from 'react-icons/io';
export default function ImageComponent({ image, isAdmin, colors }) {
  return (
    <div className={style.imageContainer}>
      <img
        src={image}
        alt='profile'
        className={style.image}
        style={{ border: `5px solid ${colors.navText}` }}
      />
      {isAdmin && (
        <span style={{ color: colors.navText }}>Change Profile Path</span>
      )}
      {isAdmin && (
        <IoMdColorPalette
          className={style.colorPalette}
          size={30}
          color={colors.navText}
        />
      )}
    </div>
  );
}
