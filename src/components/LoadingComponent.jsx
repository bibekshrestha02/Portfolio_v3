import React from 'react';
import style from './style.module.scss';
export default function LoadingComponent() {
  return (
    <div className={style.loadingContainer}>
      <div className={style.ring}>
        Loading
        <span></span>
      </div>
    </div>
  );
}
