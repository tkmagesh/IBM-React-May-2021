import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import { FETCH_USER, fetchUserFulfilledAction } from "../actions/index";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
function fetchUserEpic(action$) {
  return action$.ofType(FETCH_USER)
    .delay(3000)
    .switchMap(({ payload }) => {
    return Observable.ajax
      .getJSON(`https://api.github.com/users/${payload}`)
      .map(user => {
        return fetchUserFulfilledAction(user);
      });
  });
}

export const rootEpic = combineEpics(fetchUserEpic);
