import {CREATE_POST} from "./consts";
import {showAlert} from "./actions";

const forbidden = ['fuck','spam', 'php', 'dick']

export function filterWords({dispatch}) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w))
        if (found.length) {
          return dispatch(showAlert('Forbidden word'))
        }
      }
      return next(action);
    };
  };
}
