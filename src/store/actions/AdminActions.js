import { EDIT_ABOUT_PAGE } from '../constants/AdminConstants';
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
