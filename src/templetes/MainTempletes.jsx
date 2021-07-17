import React from 'react';
import { useSelector } from 'react-redux';
import NavComponent from '../components/Nav/NavComponent';
import style from './style.module.scss';
import MessageBox from '../components/MessageBox';
export default function MainTempletes({ children }) {
  const { pageBackground, primary, screenBackground, warning } = useSelector(
    (state) => state.colors
  );
  const { message, status } = useSelector((state) => state.message);
  return (
    <div
      className={style.mainTempleteContainer}
      style={{ backgroundColor: pageBackground }}>
      {message && (
        <MessageBox warningColor={warning} message={message} status={status} />
      )}
      <div
        className={style.bodyContainer}
        style={{ border: `2px solid ${primary}` }}>
        <NavComponent />
        <div style={{ backgroundColor: screenBackground }}>{children}</div>
      </div>
    </div>
  );
}
