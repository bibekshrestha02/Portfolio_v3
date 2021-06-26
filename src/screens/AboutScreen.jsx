import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import ButtonAssets from '../assets/ButtonAssets';
import style from './style.module.scss';
export default function AboutScreen() {
  const editHandler = () => {
    return;
  };
  const { title, subTitle, description } = useSelector(
    (state) => state.admin.about
  );
  return (
    <ScreenTemplete title={title} editHandler={editHandler}>
      <div className={style.aboutScreenContainer}>
        <p className={style.subTitle}>{subTitle}</p>
        <p className={style.description}>{description}</p>
        <ButtonAssets title='Download My CV' />
      </div>
    </ScreenTemplete>
  );
}
