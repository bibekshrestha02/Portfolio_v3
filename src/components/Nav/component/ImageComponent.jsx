import React, { useState } from 'react';
import style from '../style.module.scss';
import { IoMdColorPalette } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';

export default function ImageComponent({ image, isAdmin, colors }) {
  const [isImageLoading, setImageLoading] = useState(true);
  return (
    <div className={style.imageContainer}>
      {isImageLoading && (
        <div
          className={style.image}
          style={{
            display: isImageLoading ? 'block' : 'none',
          }}>
          <BsFillPersonFill color={colors.text} />
        </div>
      )}
      <img
        onLoad={() => setImageLoading(false)}
        src={image}
        alt='profile'
        className={style.image}
        style={{
          border: `5px solid ${colors.navText}`,
          display: isImageLoading ? 'none' : 'block',
        }}
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
