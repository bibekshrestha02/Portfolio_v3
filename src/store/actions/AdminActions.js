import axios from '../../AxiosInstance';
import {
  FETCH_ABOUT,
  FETCH_CONTACT,
  FETCH_EDUCATION,
  FETCH_PROJECT,
  FETCH_SKILL,
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
  INITIAL_FETCH,
} from '../constants/AdminConstants';
export function initalFetchAction() {
  return async (dispatch) => {
    const { data } = await axios.get('/');
    const { name, title, profileImagePath, socialLinks, colors } = data;
    dispatch({
      type: INITIAL_FETCH,
      payload: {
        name,
        title,
        profileImagePath,
        socialLinks,
        colors,
      },
    });
  };
}

// ABOUT PAGE ACTIONS
export function aboutFetchAction() {
  return async (dispatch) => {
    const { data } = await axios.get('/about');

    dispatch({
      type: FETCH_ABOUT,
      payload: { data },
    });
  };
}
export function editAboutPageAction(data) {
  return async (dispatch) => {
    await axios.put('/about', data);
    dispatch({
      type: EDIT_ABOUT_PAGE,
      payload: {
        data,
      },
    });
  };
}
// EDUCATION PAGE ACTIONS
export function educationFetchAction() {
  return async (dispatch) => {
    const { data } = await axios.get('/education/');
    dispatch({
      type: FETCH_EDUCATION,
      payload: { data },
    });
  };
}
export function editEducationTitlePageAction(title) {
  return async (dispatch) => {
    await axios.put('/education/title', { title });

    dispatch({
      type: EDIT_EDUCATION_PAGE_TITLE,
      payload: {
        title,
      },
    });
  };
}
export function createEducationAction(data) {
  return async (dispatch) => {
    const res = await axios.post('/education/', data);
    dispatch({
      type: CREATE_EDUCATION,
      payload: {
        data: res.data,
      },
    });
  };
}
export function editEducationAction(data) {
  return async (dispatch) => {
    await axios.put(`/education/${data._id}`, data);

    dispatch({
      type: EDIT_EDUCATION,
      payload: {
        data,
      },
    });
  };
}
export function deleteEducationAction(id) {
  return async (dispatch) => {
    await axios.delete(`/education/${id}`);
    dispatch({
      type: DELETE_EDUCATION,
      payload: {
        id,
      },
    });
  };
}
// PROJECT PAGE ACTIONS
export function projectFetchAction() {
  return async (dispatch) => {
    const { data } = await axios.get('/project/');
    dispatch({
      type: FETCH_PROJECT,
      payload: { data },
    });
  };
}
export function editProjectTitlePageAction(title) {
  return async (dispatch) => {
    await axios.put('/project/title', { title });

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
export function skillFetchAction() {
  return async (dispatch) => {
    const { data } = await axios.get('/skill/');
    dispatch({
      type: FETCH_SKILL,
      payload: { data },
    });
  };
}
export function editSkillTitlePageAction(title) {
  return async (dispatch) => {
    await axios.put('/skill/title', { title });

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
  return async (dispatch) => {
    await axios.put('/name', { name, title });
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
  return async (dispatch) => {
    await axios.put('/profileImage', { profileImagePath: path });
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
  return async (dispatch) => {
    await axios.post('/socialLink/', data);
    dispatch({
      type: CREATE_SOCIAL_lINK,
      payload: {
        data,
      },
    });
  };
}
export function editSocialLinkAction(data) {
  return async (dispatch) => {
    const { _id, iconPath, name, link } = data;
    await axios.put(`/socialLink/${_id}`, { iconPath, name, link });
    dispatch({
      type: EDIT_SOCIAL_lINK,
      payload: {
        data,
      },
    });
  };
}
export function deleteSocialLinkAction(id) {
  return async (dispatch) => {
    await axios.delete(`/socialLink/${id}`);
    dispatch({
      type: DELETE_SOCIAL_lINK,
      payload: {
        id,
      },
    });
  };
}
// CONTACT PAGE ACTIONS
export function contactFetchAction() {
  return async (dispatch) => {
    const { data } = await axios.get('/contact/');
    dispatch({
      type: FETCH_CONTACT,
      payload: { data },
    });
  };
}

export function editContactPageAction(data) {
  return async (dispatch) => {
    await axios.put('/contact', data);
    dispatch({
      type: EDIT_CONTACT_PAGE,
      payload: {
        data,
      },
    });
  };
}
