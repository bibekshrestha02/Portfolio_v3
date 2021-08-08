import React from 'react';
import FacebookLogin from 'react-facebook-login';
import style from './style.module.scss';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authActions';
import { useHistory } from 'react-router-dom';
import { createMessageAction } from '../store/actions/MessageActions';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = async (response) => {
    try {
      const { userID, accessToken } = response;
      await dispatch(login(userID, accessToken));
      history.push('/');
    } catch (error) {
      dispatch(createMessageAction('Something went wrong!', 'error'));
    }
  };

  return (
    <div className={style.loginScreen}>
      <FacebookLogin
        appId='135247835406875'
        autoLoad={false}
        fields='name,email,picture'
        callback={submitHandler}
      />
    </div>
  );
}
