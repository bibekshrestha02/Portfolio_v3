import React from 'react';
import style from './style.module.scss';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
export default function EducationDetailsCompoent({
  name,
  place,
  year,
  branch,
  isAdmin,
  colors,
}) {
  return (
    <div className={style.educationContainer}>
      <div>
        <span className={style.title}>{name}</span>
        <p>{place}</p>
        <span>{branch}</span>
      </div>
      <div>
        {isAdmin && (
          <div>
            <AiOutlineDelete
              color={colors.warning}
              size={20}
              className={style.icon}
            />
            <AiOutlineEdit
              size={20}
              className={style.icon}
              color={colors.primary}
            />
          </div>
        )}

        <span>{year}</span>
      </div>
    </div>
  );
}
