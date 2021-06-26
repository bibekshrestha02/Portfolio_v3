import React from 'react';
import style from './style.module.scss';
export default function EducationDetailsCompoent({
  name,
  place,
  year,
  branch,
}) {
  return (
    <div className={style.educationContainer}>
      <div>
        <span className={style.title}>{name}</span>
        <p>{place}</p>
        <span>{branch}</span>
      </div>
      <div>
        <span>{year}</span>
      </div>
    </div>
  );
}
