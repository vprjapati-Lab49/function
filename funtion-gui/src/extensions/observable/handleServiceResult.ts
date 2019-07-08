import { Observable } from 'rxjs/Observable';
import { ServiceActions } from '../../actions/ActionTypes';
import Notifications from '../../util/Notifications';
import ActionTypes from '../../actions/ActionTypes';

/**
 * Format the action and payload for a successful service call
 * @param serviceActions
 */
export function handleServiceResult<T extends any>(this: Observable<T>,  // tslint:disable-line:no-any
                                                   serviceActions: ServiceActions) {
    return this
        .map(msg => {
            if (msg && msg.type) {
                return msg;
            } else if (msg && msg.error) {
                return {type: serviceActions.FAILURE, payload: msg};
            } else {
                return {type: serviceActions.SUCCESS, payload: msg};
            }
        })
        .catch((ex, stream) => {
            if (ex.status === 401 && serviceActions !== ActionTypes.APP.USER_AUTH.LOGIN) {
                return stream.merge(Observable.of({type: ActionTypes.USER.LOGOUT.REQUEST, payload: ex}));
            }
            return Number.isInteger(ex.status) ?
                stream.merge(Observable.of({type: serviceActions.FAILURE, payload: ex})) :
                Observable.throw(ex);
        })
        .notify(serviceActions.FAILURE, Notifications.COMMON.SERVER_ERROR)
        .notify(serviceActions.SUCCESS, Notifications.COMMON.SERVER_UP);
}

Observable.prototype.handleServiceResult = handleServiceResult;

declare module 'rxjs/Observable' {
    interface Observable<T> { // tslint:disable-line
        handleServiceResult: typeof handleServiceResult;
    }
}