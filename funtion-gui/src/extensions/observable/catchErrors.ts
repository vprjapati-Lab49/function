import { Observable } from 'rxjs/Observable';
import { Criteria, meetsCriteria } from '../object';

/**
 * Add an Rx catch operator to an Observable.
 *  If error is caught, it will return a new Observable with details of the error in the payload.
 *  Optional criteria can be supplied to specify the types of errors to catch.
 * @param actionTypeToDispatch The action type for the returned error object
 * @param criteria Criteria to filter the types of errors to catch (see meetsCriteria docs for format)
 * @returns Observable
 */
export function catchErrors<T>(this: Observable<T>,
                               actionTypeToDispatch: string,
                               criteria: Criteria | Criteria[] | Partial<{ status: number }> | Function = []) {
    return this
        .catch(err => !meetsCriteria(err, criteria) ?
            Observable.throw(err) :
            Observable.of({
                type: actionTypeToDispatch,
                payload: {
                    message: err.message,
                    status: err.status
                },
                error: true
            })
        );
}

Observable.prototype.catchErrors = catchErrors;

declare module 'rxjs/Observable' {
    interface Observable<T> { // tslint:disable-line
        catchErrors: typeof catchErrors;
    }
}