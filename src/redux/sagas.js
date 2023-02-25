import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_POSTS, REQUEST_POSTS} from "./consts";
import {hideLoader, showAlert, showLoader} from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({type: FETCH_POSTS, payload});
  } catch (error) {
    console.log(error)
    yield put(showAlert('Network error. Open console to see more'));
  } finally {
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  return await response.json();
}
