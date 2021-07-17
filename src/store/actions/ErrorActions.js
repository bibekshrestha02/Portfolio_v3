import { CREATE_ERROR, REMOVE_ERROR } from '../constants/ErrorConstants';
export const catchErrorAction = (message, status) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_ERROR,
      payload: {
        message,
        status,
      },
    });
  };
};

export const removeErrorAction = (message, status) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ERROR,
    });
  };
};
