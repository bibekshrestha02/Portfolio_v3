import React from 'react';
import style from './style.module.scss';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { removeMessageAction } from '../store/actions/MessageActions';
export default function MessageBox({
  warningColor,
  textColor,
  message,
  status,
}) {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(removeMessageAction());
  };
  return (
    <div
      className={style.messageBox}
      onClick={closeHandler}
      style={{
        backgroundColor: status === 'error' ? warningColor : 'green',
        color: textColor,
      }}>
      <span>{message}</span>
      <IoClose size='18px' />
    </div>
  );
}
