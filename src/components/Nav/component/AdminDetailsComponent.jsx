import React from 'react';
import style from '../style.module.scss';
import { BiEdit } from 'react-icons/bi';
export default function AdminDetailsComponent({
  name,
  title,
  isAdmin,
  colors,
}) {
  return (
    <div className={style.adminDetails}>
      <div>
        <span style={{ color: colors.navText }} className={style.name}>
          {name}
        </span>
        <span style={{ color: colors.navText }}>{title}</span>
      </div>
      {isAdmin && (
        <BiEdit size={20} className={style.icon} color={colors.navText} />
      )}
    </div>
  );
}
