import { Observable } from 'rxjs/Observable';

import { Action } from 'appProps';
/**
 * trigger an action based on the action type
 * @param triggerType the action type that triggers triggerAction
 * @param triggerAction the action triggered
 */
export function handleActionResult<T extends any>( // tslint:disable-line:no-any
    this: Observable<T>,
    triggerType: string,
    triggerAction: Action
) {
    return this.mergeMap(action => Observable
        .of(action)
        .concat(
            Observable
                .of({
                    type: triggerAction.type,
                    payload: {
                        ...triggerAction.payload,
                        source: action
                    }
                })
                .filter(({ payload }) => payload.source.type === triggerType)
        )
    );
}

Observable.prototype.handleActionResult = handleActionResult;

declare module 'rxjs/Observable' {
    interface Observable<T> { // tslint:disable-line
        handleActionResult: typeof handleActionResult;
    }
}