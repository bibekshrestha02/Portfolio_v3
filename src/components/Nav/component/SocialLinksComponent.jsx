import React from 'react';
import style from '../style.module.scss';
export default function SocialLinksComponent({ socialLinks }) {
  return (
    <div className={style.socialLinksContainer}>
      {socialLinks.map((link) => {
        return (
          <div className={style.iconContainer} key={link.icon}>
            <a href={link.link} target='_blank' rel='noreferrer'>
              <img src={link.icon} alt='icon' className={style.icon} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
