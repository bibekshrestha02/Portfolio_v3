import React from 'react';
import style from './style.module.scss';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
export default function TechnologyComponent({ name, icon, colors, isAdmin }) {
  return (
    <div className={style.technologyContainer}>
      {isAdmin && (
        <div className={style.editContainer}>
          <AiOutlineDelete
            color={colors.warning}
            size={14}
            className={style.icon}
          />
          <AiOutlineEdit
            size={14}
            className={style.icon}
            color={colors.primary}
          />
        </div>
      )}

      <div className={style.iconContainer}>
        <img src={icon} alt='icon' />
      </div>
      <span>{name}</span>
    </div>
  );
}
