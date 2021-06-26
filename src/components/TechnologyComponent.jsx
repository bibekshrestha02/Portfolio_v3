import React from 'react';
import style from './style.module.scss';
export default function TechnologyComponent({ name, icon }) {
  return (
    <div className={style.technologyContainer}>
      <div className={style.iconContainer}>
        <img src={icon} alt='icon' />
      </div>
      <span>{name}</span>
    </div>
  );
}
