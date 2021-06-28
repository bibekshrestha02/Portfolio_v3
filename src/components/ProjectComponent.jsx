import React, { useState } from 'react';
import style from './style.module.scss';
import ImageLoadingComponent from './ImageLoadingComponent';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

export default function ProjectComponent({
  name,
  path,
  icon,
  colors,
  isAdmin,
}) {
  const [isImageLoading, setImageLoading] = useState(true);
  return (
    <div className={style.projectComponent}>
      {isAdmin && (
        <div className={style.editContainer}>
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
      <a
        href={path}
        target='_blank'
        rel='noreferrer'
        style={{ color: colors.text }}>
        <ImageLoadingComponent isLoading={isImageLoading} />
        <img
          src={icon}
          alt='project'
          style={{ display: isImageLoading ? 'none' : 'block' }}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(true)}
        />
        <span>{name}</span>
      </a>
    </div>
  );
}
