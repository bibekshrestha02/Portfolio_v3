import React from 'react';
import style from './style.module.scss';
import { IoCloudOffline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
export default function PageErrorComponent() {
  const { text } = useSelector((state) => state.colors);
  return (
    <div className={style.pageErrorComponent}>
      <div style={{ color: text }}>
        <IoCloudOffline size={80} color={text} />
        <p>Something Went Wrong</p>
        <p>Please check your Network Connection and Try again!</p>
      </div>
    </div>
  );
}
