import { EDIT_COLORS } from '../constants/AdminConstants';
const initalState = {
  primary: '#007CC7',
  navText: '#FFFFFF',
  text: '#12232E',
  navHover: '#4DA8DA',
  pageBackground: '#EEFBFB',
  screenBackground: '#FFFFFF',
  warning: '#FF0000',
};

export default function colorReducer(state = initalState, actions) {
  switch (actions.type) {
    case EDIT_COLORS:
      return {
        ...actions.payload.data,
      };
    default:
      return state;
  }
}
