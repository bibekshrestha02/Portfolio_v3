import React, { useState } from 'react';
import style from './style.module.scss';
import ImageLoadingComponent from './ImageLoadingComponent';
export default function ProjectComponent({ name, path, icon }) {
  const [isImageLoading, setImageLoading] = useState(true);
  return (
    <div className={style.projectComponent}>
      <a href={path} target='_blank' rel='noreferrer'>
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
