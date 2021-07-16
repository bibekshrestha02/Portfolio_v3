import React from 'react';
import { useSelector } from 'react-redux';
import NavComponent from '../components/Nav/NavComponent';
import style from './style.module.scss';
export default function MainTempletes({ children }) {
  const { pageBackground, primary, screenBackground } = useSelector(
    (state) => state.colors
  );

  return (
    <div
      className={style.mainTempleteContainer}
      style={{ backgroundColor: pageBackground }}>
      <div
        className={style.bodyContainer}
        style={{ border: `2px solid ${primary}` }}>
        <NavComponent />
        <div style={{ backgroundColor: screenBackground }}>{children}</div>
      </div>
    </div>
  );
}
