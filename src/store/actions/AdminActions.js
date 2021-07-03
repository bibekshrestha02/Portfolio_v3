import {
  EDIT_ABOUT_PAGE,
  EDIT_CONTACT_PAGE,
  EDIT_EDUCATION_PAGE_TITLE,
  EDIT_PROJECT_PAGE_TITLE,
  EDIT_SKILL_PAGE_TITLE,
  CREATE_EDUCATION,
  EDIT_EDUCATION,
  DELETE_EDUCATION,
} from '../constants/AdminConstants';
export function editAboutPageAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_ABOUT_PAGE,
      payload: {
        data,
      },
    });
  };
}
export function editContactPageAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_CONTACT_PAGE,
      payload: {
        data,
      },
    });
  };
}
export function editEducationTitlePageAction(title) {
  return (dispatch) => {
    dispatch({
      type: EDIT_EDUCATION_PAGE_TITLE,
      payload: {
        title,
      },
    });
  };
}
export function editProjectTitlePageAction(title) {
  return (dispatch) => {
    dispatch({
      type: EDIT_PROJECT_PAGE_TITLE,
      payload: {
        title,
      },
    });
  };
}
export function editSkillTitlePageAction(title) {
  return (dispatch) => {
    dispatch({
      type: EDIT_SKILL_PAGE_TITLE,
      payload: {
        title,
      },
    });
  };
}
export function createEducationAction(data) {
  return (dispatch) => {
    dispatch({
      type: CREATE_EDUCATION,
      payload: {
        data,
      },
    });
  };
}
export function editEducationAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_EDUCATION,
      payload: {
        data,
      },
    });
  };
}
export function deleteEducationAction(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_EDUCATION,
      payload: {
        id,
      },
    });
  };
}
