import React from 'react';
import style from './style.module.scss';
export default function ProjectComponent({ name, path, icon }) {
  return (
    <div className={style.projectComponent}>
      <a href={path} target='_blank' rel='noreferrer'>
        <img src={icon} alt='project' />
        <span>{name}</span>
      </a>
    </div>
  );
}
