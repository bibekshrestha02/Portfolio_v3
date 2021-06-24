import React from 'react';
import style from './style.module.scss';
import { BiEdit } from 'react-icons/bi';
import { useSelector } from 'react-redux';
export default function ScreenTemplete({ title, editHandler, children }) {
  const { isAdmin } = useSelector((state) => state.admin);
  const { screenBackground, text, primary } = useSelector(
    (state) => state.colors
  );
  const containerStyle = {
    color: text,
    backgroundColor: screenBackground,
  };
  function textColorChanger(text) {
    if (!text) {
      return;
    }
    let arrayText = text.split(' ');
    if (arrayText.length <= 1) {
      return (
        <span className={style.title} style={{ color: primary }}>
          {arrayText[0]}
        </span>
      );
    } else {
      let textNode = [];
      for (let i = 0; i < arrayText.length - 1; i++) {
        textNode.push(arrayText[i]);
        textNode.push(' ');
      }
      textNode.push(
        <span style={{ color: primary }} key='1'>
          {arrayText[arrayText.length - 1]}
        </span>
      );
      return <span className={style.title}>{textNode}</span>;
    }
  }
  return (
    <div className={style.screenTempleteContainer} style={containerStyle}>
      {isAdmin && (
        <BiEdit className={style.icon} onClick={editHandler} size={30} />
      )}
      {textColorChanger(title)}
      {children}
    </div>
  );
}