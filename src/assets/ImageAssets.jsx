import React, { useState } from 'react';
import style from './style.module.scss';
import ImageLoadingComponent from '../components/ImageLoadingComponent';
export default function ImageComponent({
  path,
  styles,
  containerStyle,
  imageAlt,
}) {
  const [isImageLoading, setSetImageloading] = useState(true);

  return (
    <div className={style.imageContainer} style={containerStyle}>
      <img
        onLoad={() => setSetImageloading(false)}
        onError={() => setSetImageloading(true)}
        src={path}
        alt={imageAlt ? imageAlt : 'image'}
        style={{ display: isImageLoading ? 'none' : 'block', ...styles }}
        className={style.image}
      />
      <ImageLoadingComponent isLoading={isImageLoading} />
    </div>
  );
}
