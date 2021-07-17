import {
  FETCH_ABOUT,
  EDIT_ABOUT_PAGE,
  EDIT_CONTACT_PAGE,
  LOGIN,
  INITIAL_FETCH,
  // EDUCATION
  FETCH_EDUCATION,
  EDIT_EDUCATION_PAGE_TITLE,
  CREATE_EDUCATION,
  EDIT_EDUCATION,
  DELETE_EDUCATION,
  // SKILL
  FETCH_SKILL,
  EDIT_SKILL_PAGE_TITLE,
  CREATE_SKILL,
  EDIT_SKILL,
  DELETE_SKILL,
  // PROJECT
  FETCH_PROJECT,
  EDIT_PROJECT_PAGE_TITLE,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  EDIT_NAME,
  EDIT_PROFILE,
  CREATE_SOCIAL_lINK,
  EDIT_SOCIAL_lINK,
  DELETE_SOCIAL_lINK,
  FETCH_CONTACT,
} from '../constants/AdminConstants';
const initailState = {
  name: '',
  title: '',
  isAdmin: false,
  profilePath: '',
  about: {
    title: '',
    subTitle: '',
    cvPath: '',
    description: '',
  },
  education: { title: '', data: [] },
  project: { title: '', data: [] },
  skill: { title: '', data: [] },
  contact: {
    title: '',
    detail: '',
    subDetail: ' ',
    email: '',
  },
  socialLinks: [],
};

export default function mainReducer(state = initailState, actions) {
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        isAdmin: actions.payload.isAdmin,
      };
    case INITIAL_FETCH:
      return {
        ...state,
        name: actions.payload.name,
        title: actions.payload.title,
        profilePath: actions.payload.profilePath,
        socialLinks: actions.payload.socialLinks,
      };
    case FETCH_ABOUT:
      return {
        ...state,
        about: actions.payload.data,
      };
    case EDIT_ABOUT_PAGE:
      return {
        ...state,
        about: actions.payload.data,
      };
    case EDIT_CONTACT_PAGE:
      return {
        ...state,
        contact: actions.payload.data,
      };

    // EDUCATION
    case FETCH_EDUCATION:
      return {
        ...state,
        education: actions.payload.data,
      };
    case EDIT_EDUCATION_PAGE_TITLE:
      return {
        ...state,
        education: {
          ...state.education,
          title: actions.payload.title,
        },
      };
    case CREATE_EDUCATION:
      return {
        ...state,
        education: {
          ...state.education,
          courses: state.education.courses.concat(actions.payload.data),
        },
      };
    case EDIT_EDUCATION:
      let allCourses = state.education.courses;
      let courseIndex = allCourses.findIndex(
        (e) => e._id === actions.payload.data._id
      );
      allCourses[courseIndex] = actions.payload.data;
      return {
        ...state,
        education: {
          ...state.education,
          courses: allCourses,
        },
      };
    case DELETE_EDUCATION:
      let courses = state.education.courses.filter(
        (e) => e._id !== actions.payload.id
      );
      return {
        ...state,
        education: {
          ...state.education,
          courses: courses,
        },
      };
    // skills actions
    case FETCH_SKILL:
      return {
        ...state,
        skill: actions.payload.data,
      };
    case EDIT_SKILL_PAGE_TITLE:
      return {
        ...state,
        skill: {
          ...state.skill,
          title: actions.payload.title,
        },
      };
    case CREATE_SKILL:
      return {
        ...state,
        skill: {
          ...state.skill,
          data: state.skill.data.concat(actions.payload.data),
        },
      };
    case EDIT_SKILL:
      let allSkills = state.skill.data;
      let skillIndex = allSkills.findIndex(
        (e) => e._id === actions.payload.data._id
      );
      allSkills[skillIndex] = actions.payload.data;
      return {
        ...state,
        skill: {
          ...state.skill,
          data: allSkills,
        },
      };
    case DELETE_SKILL:
      let skills = state.skill.data.filter((e) => e._id !== actions.payload.id);
      return {
        ...state,
        skill: {
          ...state.skill,
          data: skills,
        },
      };

    // PROJECT
    case FETCH_PROJECT:
      return {
        ...state,
        project: actions.payload.data,
      };
    case EDIT_PROJECT_PAGE_TITLE:
      return {
        ...state,
        project: {
          ...state.project,
          title: actions.payload.title,
        },
      };
    case CREATE_PROJECT:
      return {
        ...state,
        project: {
          ...state.project,
          data: state.project.data.concat(actions.payload.data),
        },
      };
    case EDIT_PROJECT:
      let allProjects = state.project.data;
      let projectIndex = allProjects.findIndex(
        (e) => e._id === actions.payload.data._id
      );
      allProjects[projectIndex] = actions.payload.data;
      return {
        ...state,
        project: {
          ...state.project,
          data: allProjects,
        },
      };
    case DELETE_PROJECT:
      let projects = state.project.data.filter(
        (e) => e._id !== actions.payload.id
      );
      return {
        ...state,
        project: {
          ...state.project,
          data: projects,
        },
      };
    // Contact
    case FETCH_CONTACT:
      return {
        ...state,
        contact: actions.payload.data,
      };
    // edit name
    case EDIT_NAME:
      return {
        ...state,
        name: actions.payload.name,
        title: actions.payload.title,
      };
    // edit Profile
    case EDIT_PROFILE:
      return {
        ...state,
        profilePath: actions.payload.path,
      };
    // social Links
    case CREATE_SOCIAL_lINK:
      return {
        ...state,
        socialLinks: state.socialLinks.concat(actions.payload.data),
      };
    case EDIT_SOCIAL_lINK:
      let allSocialLink = state.socialLinks;
      let socialLinkIndex = allSocialLink.findIndex(
        (e) => e._id === actions.payload.data._id
      );
      allSocialLink[socialLinkIndex] = actions.payload.data;
      return {
        ...state,
        socialLinks: allSocialLink,
      };
    case DELETE_SOCIAL_lINK:
      let socialLinks = state.socialLinks.filter(
        (e) => e._id !== actions.payload.id
      );
      return {
        ...state,
        socialLinks,
      };
    default:
      return state;
  }
}
