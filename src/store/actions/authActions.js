import { LOGIN } from '../constants/AdminConstants';
import axios from '../../AxiosInstance';

export const initalCheck = () => {
  return (dispatch) => {
    let token = localStorage.getItem('token');
    dispatch({
      type: LOGIN,
      payload: {
        isAdmin: token ? true : false,
      },
    });
  };
};

export const login = (userID, accessToken) => {
  return async (dispatch) => {
    const res = await axios.get(`/auth/${userID}/${accessToken}`);
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: LOGIN,
      payload: {
        isAdmin: true,
      },
    });
  };
};
