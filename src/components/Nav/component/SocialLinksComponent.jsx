import React from 'react';
import style from '../style.module.scss';
import { IoIosAddCircleOutline, IoMdRemove } from 'react-icons/io';
export default function SocialLinksComponent({ socialLinks, isAdmin, colors }) {
  return (
    <div className={style.socialLinksContainer}>
      {socialLinks.map((link) => {
        return (
          <div className={style.iconContainer} key={link.icon}>
            <a href={link.link} target='_blank' rel='noreferrer'>
              <img src={link.icon} alt='icon' className={style.icon} />
            </a>
            {isAdmin && (
              <div className={style.removeContainer}>
                <IoMdRemove color={colors.warning} />
              </div>
            )}
          </div>
        );
      })}
      {isAdmin && (
        <div className={style.iconContainer}>
          <IoIosAddCircleOutline color={colors.navText} size={30} />
        </div>
      )}
    </div>
  );
}
