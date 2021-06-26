import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
export default function ContactScreen() {
  const editHandler = () => {
    return;
  };
  const { title, detail, subDetail, email } = useSelector(
    (state) => state.admin.contact
  );
  return (
    <ScreenTemplete title={title} editHandler={editHandler}>
      <div className={style.contactScreen}>
        <p>{detail}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <p>
          <i>{subDetail}</i>
        </p>
      </div>
    </ScreenTemplete>
  );
}
