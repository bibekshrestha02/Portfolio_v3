import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style.module.scss';
export default function LinksComponent({ links, colors }) {
  return (
    <div>
      {links.map((link) => {
        return (
          <NavLink
            exact
            to={link.path}
            key={link.name}
            style={{ color: colors.navText }}
            activeStyle={{ backgroundColor: colors.navHover }}
            className={style.linkContainer}>
            <link.icon color={colors.navText} size={20} /> {link.name}
          </NavLink>
        );
      })}
    </div>
  );
}
