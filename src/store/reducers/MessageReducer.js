import { CREATE_MESSAGE, REMOVE_MESSAGE } from '../constants/MessageConstants';
const initalState = {
  message: '',
  status: '',
};

export default function messageReducer(state = initalState, actions) {
  switch (actions.type) {
    case CREATE_MESSAGE:
      const { message, status } = actions.payload;
      return {
        message,
        status,
      };
    case REMOVE_MESSAGE:
      return {
        message: '',
        status: '',
      };
    default:
      return state;
  }
}
