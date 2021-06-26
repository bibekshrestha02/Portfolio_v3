import React from 'react';
import { BsImageFill } from 'react-icons/bs';
import style from './style.module.scss';
export default function ImageLoadingComponent({ isLoading }) {
  return (
    <div
      style={{ display: isLoading ? 'block' : 'none' }}
      className={style.imageLoadingComponent}>
      <BsImageFill />
    </div>
  );
}
