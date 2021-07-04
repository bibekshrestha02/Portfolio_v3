import {
  EDIT_ABOUT_PAGE,
  EDIT_CONTACT_PAGE,
  EDIT_EDUCATION_PAGE_TITLE,
  EDIT_PROJECT_PAGE_TITLE,
  EDIT_SKILL_PAGE_TITLE,
  CREATE_EDUCATION,
  EDIT_EDUCATION,
  DELETE_EDUCATION,
  CREATE_PROJECT,
  CREATE_SKILL,
  EDIT_PROJECT,
  EDIT_SKILL,
  DELETE_PROJECT,
  DELETE_SKILL,
  EDIT_NAME,
  EDIT_COLORS,
  EDIT_PROFILE,
  EDIT_SOCIAL_lINK,
  DELETE_SOCIAL_lINK,
  CREATE_SOCIAL_lINK,
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
// EDUCATION PAGE ACTIONS
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
// PROJECT PAGE ACTIONS
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
export function createProjectAction(data) {
  return (dispatch) => {
    dispatch({
      type: CREATE_PROJECT,
      payload: {
        data,
      },
    });
  };
}
export function editProjectAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_PROJECT,
      payload: {
        data,
      },
    });
  };
}
export function deleteProjectAction(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: {
        id,
      },
    });
  };
}
// SKILL PAGE ACTIONS
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
export function createSkillAction(data) {
  return (dispatch) => {
    dispatch({
      type: CREATE_SKILL,
      payload: {
        data,
      },
    });
  };
}
export function editSkillAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_SKILL,
      payload: {
        data,
      },
    });
  };
}
export function deleteSkillAction(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_SKILL,
      payload: {
        id,
      },
    });
  };
}
// EDIT NAME
export function editNameAction(name, title) {
  return (dispatch) => {
    dispatch({
      type: EDIT_NAME,
      payload: {
        name,
        title,
      },
    });
  };
}
// EDIT PROFILE
export function editProfileAction(path) {
  return (dispatch) => {
    dispatch({
      type: EDIT_PROFILE,
      payload: {
        path,
      },
    });
  };
}
// EDIT COLOR
export function editColorAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_COLORS,
      payload: {
        data,
      },
    });
  };
}
// SOCAIL LINKS
export function createSocialLinkAction(data) {
  return (dispatch) => {
    dispatch({
      type: CREATE_SOCIAL_lINK,
      payload: {
        data,
      },
    });
  };
}
export function editSocialLinkAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_SOCIAL_lINK,
      payload: {
        data,
      },
    });
  };
}
export function deleteSocialLinkAction(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_SOCIAL_lINK,
      payload: {
        id,
      },
    });
  };
}
