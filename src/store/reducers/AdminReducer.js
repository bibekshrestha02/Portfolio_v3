const initailState = {
  name: 'Bibek Shrestha',
  title: 'MERN Stack Developer',
  isAdmin: false,
  about: {
    title: "Hellow, I'm Bibek",
  },
  education: {
    title: 'Educations',
  },
  project: {
    title: 'Projects',
  },
  skill: {
    title: 'Programming Language & Tools',
  },
  contact: {
    title: "Let's Chat!",
  },
};

export default function mainReducer(state = initailState, actions) {
  return state;
}
