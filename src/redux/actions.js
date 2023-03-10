import {CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from "./consts";

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const showAlert = (text) => async (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: text,
  });

  setTimeout(() => dispatch(hideAlert()), 3000);
};

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post
  };
};

export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS,
  }
};

// export const fetchPosts = () => async (dispatch) => {
//   try {
//     dispatch(showLoader());
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//     const json = await response.json();
//     dispatch({type: FETCH_POSTS, payload: json});
//   } catch (error) {
//     console.log(error)
//     dispatch(showAlert('Network error. Open console to see more'));
//   } finally {
//     dispatch(hideLoader());
//   }
// };
