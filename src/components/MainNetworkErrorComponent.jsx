import React from 'react';
import style from './style.module.scss';
export default function MainNetworkErrorComponent() {
  return (
    <div className={style.mainNetworkErrorComponent}>
      <div>
        <p>Dear,</p>
        <p>subject: Something Went Wrong</p>
        <p>
          There might be your internet connection problem, please check your
          connection and try again. If it's even not working then there might my
          server problem . I will check it and fix it as soon as possible.
        </p>
        <p>Sorry for inconvenience!</p>
        <p>Yours Bibek</p>
      </div>
    </div>
  );
}
