import React from 'react';
import style from './style.module.scss';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { removeErrorAction } from '../store/actions/ErrorActions';
export default function MessageBox({
  warningColor,
  textColor,
  message,
  status,
}) {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(removeErrorAction());
  };
  return (
    <div
      className={style.messageBox}
      onClick={closeHandler}
      style={{
        backgroundColor: status === 'warning' ? warningColor : 'green',
        color: textColor,
      }}>
      <span>{message}</span>
      <IoClose size='18px' />
    </div>
  );
}
