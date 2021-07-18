import { EDIT_COLORS, INITIAL_FETCH } from '../constants/AdminConstants';

const initalState = {};

export default function colorReducer(state = initalState, actions) {
  switch (actions.type) {
    case INITIAL_FETCH:
      return {
        ...actions.payload.colors,
      };
    case EDIT_COLORS:
      return {
        ...(state[actions.payload.name] = actions.payload.value),
        ...state,
      };
    default:
      return state;
  }
}
