import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import '../rxjs-imports';

import ActionTypes from './ActionTypes';
import { Action } from 'appProps';
import { MiddlewareAPI } from 'redux';
import { RootState } from '../reducers';
import { constants } from '../constants/index';

const epic = combineEpics(
);

// Add global error handling
export default (action$: ActionsObservable<Action>, store: MiddlewareAPI<RootState>) =>
    epic(action$, store, null)
    // Redirect to login if a 401 error is thrown
        .catch((ex, source) => ex.status === constants.http.UNAUTHORIZED ?
            source.merge(Observable.of({type: ActionTypes.APP.USER_AUTH.LOGIN.REDIRECT})) :
            Observable.throw(ex))
        // Unhandled error
        .catch((ex, source) => {
            console.warn('Unhandled stream error', ex);
            return source.merge(Observable.of({type: ActionTypes.APP.UNHANDLED_ERROR, payload: ex}));
        });