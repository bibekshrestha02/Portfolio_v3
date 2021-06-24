import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style.module.scss';
import { useSelector } from 'react-redux';
export default function LinksComponent({ links }) {
  const { navHover, navText } = useSelector((state) => state.colors);
  return (
    <div>
      {links.map((link) => {
        return (
          <NavLink
            exact
            to={link.path}
            key={link.name}
            style={{ color: navText }}
            activeStyle={{ backgroundColor: navHover }}
            className={style.linkContainer}>
            <link.icon color={navText} size={20} /> {link.name}
          </NavLink>
        );
      })}
    </div>
  );
}
