import React from 'react';
import style from '../style.module.scss';
import { IoAddCircleOutline, IoRemoveOutline } from 'react-icons/io5';

import { AiOutlineEdit } from 'react-icons/ai';

export default function SocialLinksComponent({
  socialLinks,
  isAdmin,
  colors,
  socialModelHandler,
}) {
  return (
    <div className={style.socialLinksContainer}>
      {socialLinks.map((link) => {
        return (
          <div className={style.iconContainer} key={link.icon}>
            {isAdmin && (
              <div className={style.removeContainer}>
                <IoRemoveOutline color={colors.warning} size={18} />
                <AiOutlineEdit
                  color={colors.navText}
                  size={18}
                  onClick={socialModelHandler}
                />
              </div>
            )}
            <a href={link.link} target='_blank' rel='noreferrer'>
              <img src={link.icon} alt='icon' className={style.icon} />
            </a>
          </div>
        );
      })}

      {isAdmin && (
        <div className={style.iconContainer}>
          <IoAddCircleOutline
            color={colors.navText}
            onClick={socialModelHandler}
            size={30}
          />
        </div>
      )}
    </div>
  );
}
