import {
  FETCH_ABOUT,
  FETCH_CONTACT,
  FETCH_EDUCATION,
  FETCH_PROJECT,
  FETCH_SKILL,
} from '../constants/AdminConstants';
const initalState = {
  isAbout: false,
  isEducation: false,
  isProject: false,
  isContact: false,
  isSkill: false,
};

export default function LoadReducer(state = initalState, actions) {
  switch (actions.type) {
    case FETCH_ABOUT:
      return {
        ...state,
        isAbout: true,
      };
    case FETCH_CONTACT:
      return {
        ...state,
        isContact: true,
      };
    case FETCH_EDUCATION:
      return {
        ...state,
        isEducation: true,
      };
    case FETCH_PROJECT:
      return {
        ...state,
        isProject: true,
      };
    case FETCH_SKILL:
      return {
        ...state,
        isSkill: true,
      };

    default:
      return state;
  }
}
