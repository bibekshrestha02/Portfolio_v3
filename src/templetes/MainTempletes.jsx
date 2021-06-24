import React from 'react';
import { useSelector } from 'react-redux';
import NavComponent from '../components/Nav/NavComponent';
import style from './style.module.scss';
export default function MainTempletes({ children }) {
  const { pageBackground, primary } = useSelector((state) => state.colors);
  const container = {
    backgroundColor: pageBackground,
  };
  const bodyContainer = {
    border: `2px solid ${primary}`,
  };
  return (
    <div className={style.mainTempleteContainer} style={container}>
      <div className={style.bodyContainer} style={bodyContainer}>
        <NavComponent />
        {children}
      </div>
    </div>
  );
}
