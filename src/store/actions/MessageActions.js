import { CREATE_MESSAGE, REMOVE_MESSAGE } from '../constants/MessageConstants';
export const createMessageAction = (message, status) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_MESSAGE,
      payload: {
        message,
        status,
      },
    });
  };
};

export const removeMessageAction = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_MESSAGE,
    });
  };
};
