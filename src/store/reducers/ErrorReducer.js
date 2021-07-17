import { CREATE_ERROR, REMOVE_ERROR } from '../constants/ErrorConstants';
const initalState = {
  message: 'Successfully Created!',
  status: '',
};

export default function errorReducer(state = initalState, actions) {
  switch (actions.type) {
    case CREATE_ERROR:
      const { message, status } = actions.payload;
      return {
        message,
        status,
      };
    case REMOVE_ERROR:
      return {
        message: '',
        status: '',
      };
    default:
      return state;
  }
}
